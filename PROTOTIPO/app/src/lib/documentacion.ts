// Solo servidor: usa el filesystem, no puede importarse desde componentes de cliente.
import { existsSync } from "fs";
import { promises as fs } from "fs";
import path from "path";

export interface DocumentoCargado {
  archivo: string;
  contenido: string;
}

// Error de configuracion: el route lo mapea al codigo "config".
export class ErrorDocumentacion extends Error {
  constructor(mensaje: string) {
    super(mensaje);
    this.name = "ErrorDocumentacion";
  }
}

function directorioDocumentacion(): string {
  if (process.env.DOCS_DIR) return process.env.DOCS_DIR;
  // En el deploy la documentacion se copia adentro de app/ (prebuild); en
  // desarrollo local vive en el directorio padre.
  const local = path.resolve(process.cwd(), "documentacion");
  if (existsSync(local)) return local;
  return path.resolve(process.cwd(), "../documentacion");
}

async function listarMarkdown(dir: string, base: string): Promise<DocumentoCargado[]> {
  const entradas = await fs.readdir(dir, { withFileTypes: true });
  const documentos: DocumentoCargado[] = [];
  for (const entrada of entradas) {
    const ruta = path.join(dir, entrada.name);
    if (entrada.isDirectory()) {
      documentos.push(...(await listarMarkdown(ruta, base)));
    } else if (entrada.isFile() && entrada.name.endsWith(".md") && entrada.name !== "INDICE.md") {
      // INDICE.md es el catalogo para el modo bibliotecario, no un documento del proyecto.
      documentos.push({
        archivo: path.relative(base, ruta).split(path.sep).join("/"),
        contenido: await fs.readFile(ruta, "utf8"),
      });
    }
  }
  return documentos;
}

// Lee el indice de la documentacion (INDICE.md). Si no existe, lanza el error
// tipado de configuracion: el route decide si cae al modo con todo en contexto.
export async function leerIndice(): Promise<string> {
  const base = directorioDocumentacion();
  const ruta = path.join(base, "INDICE.md");
  try {
    return await fs.readFile(ruta, "utf8");
  } catch {
    throw new ErrorDocumentacion(`No se pudo leer el indice de documentacion: ${ruta}`);
  }
}

// Prefijos de las respuestas de leer_documento que NO son contenido de un documento.
const PREFIJO_RUTA_INVALIDA = "[ruta invalida]";
const PREFIJO_INEXISTENTE = "[documento inexistente]";

// True si la respuesta de leerDocumento fue un mensaje de error para el modelo,
// no el contenido de un documento real.
export function esLecturaFallida(respuesta: string): boolean {
  return (
    respuesta.startsWith(PREFIJO_RUTA_INVALIDA) || respuesta.startsWith(PREFIJO_INEXISTENTE)
  );
}

// Normaliza y valida una ruta relativa del indice. Devuelve la ruta canonica
// (separadores "/", sin "./" inicial) o null si la ruta es insegura o invalida.
export function sanearRutaDocumento(ruta: string): string | null {
  const limpia = ruta.trim().replace(/\\/g, "/").replace(/^\.\//, "");
  if (limpia === "" || limpia.startsWith("/") || !limpia.endsWith(".md")) return null;
  if (limpia.split("/").some((parte) => parte === "" || parte === "..")) return null;
  const base = directorioDocumentacion();
  const absoluta = path.resolve(base, limpia);
  if (absoluta !== base && !absoluta.startsWith(base + path.sep)) return null;
  return limpia;
}

// Lee un documento por su ruta relativa tal como figura en el indice.
// Las fallas vuelven como string (mensaje para el modelo), nunca como excepcion:
// el modelo tiene que poder ver el error y corregir la ruta.
export async function leerDocumento(ruta: string): Promise<string> {
  const canonica = sanearRutaDocumento(ruta);
  if (canonica === null) {
    return `${PREFIJO_RUTA_INVALIDA} "${ruta}" no es una ruta valida. Usa la ruta relativa tal cual figura en el indice, por ejemplo: requisitos/prestamos.md`;
  }
  const base = directorioDocumentacion();
  try {
    return await fs.readFile(path.join(base, canonica), "utf8");
  } catch {
    return `${PREFIJO_INEXISTENTE} No hay ningun documento en "${canonica}". Revisa el indice y usa una ruta exacta.`;
  }
}

// Se relee en cada request: los archivos son diminutos y asi nunca queda desactualizada.
export async function cargarDocumentacion(): Promise<DocumentoCargado[]> {
  const base = directorioDocumentacion();
  let documentos: DocumentoCargado[];
  try {
    documentos = await listarMarkdown(base, base);
  } catch {
    throw new ErrorDocumentacion(
      `No se pudo leer el directorio de documentacion: ${base}`
    );
  }
  if (documentos.length === 0) {
    throw new ErrorDocumentacion(
      `No hay archivos .md en el directorio de documentacion: ${base}`
    );
  }
  return documentos.sort((a, b) => a.archivo.localeCompare(b.archivo));
}
