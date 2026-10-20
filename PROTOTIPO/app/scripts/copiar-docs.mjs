// Copia ../documentacion adentro de app/ antes del build, para que los .md
// viajen con el bundle del deploy. En desarrollo local no hace falta correrlo:
// la app lee ../documentacion directo.
import { cpSync, existsSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const raizApp = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const origen = resolve(raizApp, "../documentacion");
const destino = resolve(raizApp, "documentacion");

if (!existsSync(origen)) {
  if (existsSync(destino)) {
    console.log("copiar-docs: sin ../documentacion, se usa la copia existente");
    process.exit(0);
  }
  console.error("copiar-docs: no existe ../documentacion ni una copia previa");
  process.exit(1);
}

rmSync(destino, { recursive: true, force: true });
cpSync(origen, destino, { recursive: true });
console.log("copiar-docs: documentacion copiada adentro de app/");
