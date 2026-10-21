#!/usr/bin/env node
// Corre el banco de pruebas del extractor contra la API local del prototipo.
// Uso: node run-extractor.mjs [--base http://localhost:3000] [--solo 1,2,3]
// Requiere Node 18+ (fetch nativo). Sin dependencias.

import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const AQUI = dirname(fileURLToPath(import.meta.url));

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
const todos = JSON.parse(readFileSync(join(AQUI, "extractor-casos.json"), "utf8"));
const casos = solo ? todos.filter((c) => solo.includes(c.id)) : todos;
if (casos.length === 0) {
  console.error("No hay casos que correr (revisar --solo).");
  process.exit(1);
}

// Matching laxo: minúsculas, sin tildes, espacios colapsados.
const normalizar = (s) =>
  String(s)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();

// Chequeo de shape básica de la extracción.
function problemaDeShape(e) {
  if (typeof e !== "object" || e === null) return "la respuesta no es un objeto";
  if (!Array.isArray(e.enunciados)) return "enunciados no es una lista";
  if (e.enunciados.some((x) => typeof x !== "string")) return "enunciados con algo que no es string";
  if (typeof e.resto !== "string") return "resto no es string";
  return null;
}

// Cada lista de palabras clave tiene que estar cubierta por un enunciado
// distinto (todas sus palabras dentro del mismo enunciado).
function problemaDeEnunciados(enunciados, debeContener) {
  const normalizados = enunciados.map(normalizar);
  if (normalizados.length !== debeContener.length) {
    return `se esperaban ${debeContener.length} enunciado(s) y vinieron ${normalizados.length}: ${JSON.stringify(enunciados)}`;
  }
  const usados = new Set();
  for (const claves of debeContener) {
    const idx = normalizados.findIndex(
      (texto, i) => !usados.has(i) && claves.every((p) => texto.includes(normalizar(p)))
    );
    if (idx === -1) return `ningún enunciado contiene [${claves.join(", ")}]`;
    usados.add(idx);
  }
  return null;
}

// --- Corrida ---
let enunciadosOk = 0;
let restoOk = 0;
let fallo = false;

for (const caso of casos) {
  let res, body;
  try {
    res = await fetch(`${base}/api/extraer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quien: caso.quien, buffer: caso.buffer }),
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

  const falla = (detalle) => {
    console.log(`✗ #${caso.id} (${caso.nombre}) ${detalle}`);
    fallo = true;
  };

  if (res.status !== 200) {
    const msj = body?.error ? `${body.error.codigo}: ${body.error.mensaje}` : "sin cuerpo de error";
    falla(`status ${res.status} (${msj})`);
    continue;
  }
  const shape = problemaDeShape(body);
  if (shape) {
    falla(`shape inválida: ${shape}`);
    continue;
  }

  const problemaEnunciados = problemaDeEnunciados(body.enunciados, caso.debe_contener);
  if (!problemaEnunciados) enunciadosOk++;

  const restoBien = caso.resto_no_vacio ? body.resto.trim() !== "" : body.resto.trim() === "";
  if (restoBien) restoOk++;

  if (problemaEnunciados) falla(problemaEnunciados);
  else if (!restoBien) {
    falla(
      caso.resto_no_vacio
        ? "se esperaba resto acumulándose y vino vacío"
        : `se esperaba resto vacío y vino: ${JSON.stringify(body.resto)}`
    );
  } else {
    console.log(`✓ #${caso.id} (${caso.nombre}) ${body.enunciados.length} enunciado(s)`);
  }
}

const n = casos.length;
console.log(`\nenunciados: ${enunciadosOk}/${n} · resto: ${restoOk}/${n}`);
process.exit(fallo ? 1 : 0);
