#!/usr/bin/env node
// Corre el set de evaluación contra la API local del prototipo.
// Uso: node run.mjs [--base http://localhost:3000] [--solo 1,2,3]
// Requiere Node 18+ (fetch nativo). Sin dependencias.

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const AQUI = dirname(fileURLToPath(import.meta.url));
const TIPOS_VALIDOS = ["choca", "coincide", "no_contemplado", "no_accionable"];

// --- Argumentos ---
const args = process.argv.slice(2);
let base = "http://localhost:3000";
let solo = null;
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--base" && args[i + 1]) base = args[++i];
  else if (args[i] === "--solo" && args[i + 1]) {
    solo = args[++i].split(",").map((s) => Number(s.trim()));
  }
}

// --- Casos ---
const todos = JSON.parse(readFileSync(join(AQUI, "casos.json"), "utf8"));
const casos = solo ? todos.filter((c) => solo.includes(c.id)) : todos;
if (casos.length === 0) {
  console.error("No hay casos que correr (revisar --solo).");
  process.exit(1);
}

// --- Documentación real, para verificar citas ---
// Se lee relativa al script, no al cwd.
const DOCS = join(AQUI, "..", "documentacion");
const normalizar = (s) => s.replace(/\s+/g, " ").trim();
const documentos = new Map(); // ruta relativa -> contenido normalizado

function cargarDocs(dir) {
  for (const nombre of readdirSync(dir)) {
    const ruta = join(dir, nombre);
    if (statSync(ruta).isDirectory()) cargarDocs(ruta);
    else if (nombre.endsWith(".md")) {
      documentos.set(relative(DOCS, ruta), normalizar(readFileSync(ruta, "utf8")));
    }
  }
}
try {
  cargarDocs(DOCS);
} catch (e) {
  console.error(`No pude leer la documentación en ${DOCS}: ${e.message}`);
  process.exit(1);
}

// Busca el contenido del archivo citado, tolerando prefijos tipo "documentacion/".
function contenidoDe(archivo) {
  const limpio = archivo.replace(/^\.?\//, "").replace(/^documentacion\//, "");
  if (documentos.has(limpio)) return documentos.get(limpio);
  for (const [ruta, contenido] of documentos) {
    if (ruta.endsWith(limpio) || limpio.endsWith(ruta)) return contenido;
  }
  return null;
}

function citaCubre(citas, esperado) {
  const limpioEsperado = esperado.replace(/^\.?\//, "");
  return citas.some((c) => {
    const a = String(c.archivo || "").replace(/^\.?\//, "").replace(/^documentacion\//, "");
    return a === limpioEsperado || a.endsWith("/" + limpioEsperado) || limpioEsperado.endsWith("/" + a);
  });
}

// Chequeo (a): shape básica del veredicto.
function problemaDeShape(v) {
  if (typeof v !== "object" || v === null) return "la respuesta no es un objeto";
  if (!TIPOS_VALIDOS.includes(v.tipo)) return `tipo inválido: ${JSON.stringify(v.tipo)}`;
  if (typeof v.resumen_enunciado !== "string") return "falta resumen_enunciado";
  if (typeof v.justificacion !== "string") return "falta justificacion";
  if (!Array.isArray(v.citas)) return "citas no es una lista";
  for (const c of v.citas) {
    if (typeof c?.archivo !== "string" || typeof c?.fragmento_textual !== "string") {
      return "cita sin archivo o sin fragmento_textual";
    }
  }
  if (v.pregunta_al_cliente !== null && typeof v.pregunta_al_cliente !== "string") {
    return "pregunta_al_cliente no es string ni null";
  }
  if (v.prioridad !== null) {
    if (typeof v.prioridad !== "object" || typeof v.prioridad.nivel !== "string" || typeof v.prioridad.razon !== "string") {
      return "prioridad mal formada";
    }
  }
  return null;
}

// Chequeo (d): invariantes del contrato, sobre el tipo obtenido.
function problemaDeInvariantes(v, caso) {
  if (v.tipo === "choca" && v.pregunta_al_cliente === null) {
    return "choca sin pregunta_al_cliente";
  }
  if (v.tipo === "no_contemplado" && v.prioridad === null) {
    return "no_contemplado sin prioridad";
  }
  if (v.tipo !== "no_contemplado" && v.prioridad !== null) {
    return `prioridad presente en un veredicto ${v.tipo}`;
  }
  if (v.tipo === "no_accionable" && v.citas.length !== 0) {
    return `no_accionable con ${v.citas.length} cita(s)`;
  }
  if (caso.pregunta_obligatoria && v.pregunta_al_cliente === null) {
    return "el caso exige pregunta_al_cliente y vino null";
  }
  return null;
}

// --- Corrida ---
let tiposOk = 0;
let invariantesOk = 0;
let debeCitarOk = 0;
let citasVistas = 0;
let citasVerificadas = 0;
let fallo = false;

for (const caso of casos) {
  let res, body;
  try {
    res = await fetch(`${base}/api/veredicto`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quien: caso.quien, enunciado: caso.enunciado }),
    });
  } catch {
    console.error(`No pude conectarme a ${base}. ¿Está corriendo npm run dev?`);
    process.exit(1);
  }

  try {
    body = await res.json();
  } catch {
    body = null;
  }

  const esperado = [caso.tipo_esperado, ...caso.tipos_alternativos].join(" | ");
  const falla = (obtenido, detalle) => {
    console.log(`✗ #${caso.id} [${esperado} → ${obtenido}] ${detalle}`);
    fallo = true;
  };

  // (a) status y shape
  if (res.status !== 200) {
    const msj = body?.error ? `${body.error.codigo}: ${body.error.mensaje}` : "sin cuerpo de error";
    falla("error", `status ${res.status} (${msj})`);
    continue;
  }
  const shape = problemaDeShape(body);
  if (shape) {
    falla("?", `shape inválida: ${shape}`);
    continue;
  }
  const v = body;

  // (b) tipo
  const tipoOk = v.tipo === caso.tipo_esperado || caso.tipos_alternativos.includes(v.tipo);
  if (tipoOk) tiposOk++;

  // (c) citas verificables contra los .md reales
  let citaRota = null;
  for (const c of v.citas) {
    citasVistas++;
    const contenido = contenidoDe(c.archivo);
    if (contenido === null) {
      citaRota = citaRota ?? `cita a archivo inexistente: ${c.archivo}`;
    } else if (!contenido.includes(normalizar(c.fragmento_textual))) {
      citaRota = citaRota ?? `fragmento no literal en ${c.archivo}`;
    } else {
      citasVerificadas++;
    }
  }

  // (d) invariantes
  const invariante = problemaDeInvariantes(v, caso);
  if (!invariante) invariantesOk++;

  // (e) debe_citar
  const faltante = caso.debe_citar.find((a) => !citaCubre(v.citas, a));
  if (!faltante) debeCitarOk++;

  // Se reporta el primer chequeo que falló, en orden b, c, d, e.
  if (!tipoOk) falla(v.tipo, "tipo distinto del esperado");
  else if (citaRota) falla(v.tipo, citaRota);
  else if (invariante) falla(v.tipo, `invariante: ${invariante}`);
  else if (faltante) falla(v.tipo, `falta cita obligatoria a ${faltante}`);
  else console.log(`✓ #${caso.id} ${v.tipo}`);
}

const n = casos.length;
console.log(
  `\ntipos: ${tiposOk}/${n} · citas verificables: ${citasVerificadas}/${citasVistas} · invariantes: ${invariantesOk}/${n} · debe_citar: ${debeCitarOk}/${n}`
);
process.exit(fallo ? 1 : 0);
