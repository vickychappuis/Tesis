// Solo servidor: usa el filesystem, no puede importarse desde componentes de cliente.
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
  return process.env.DOCS_DIR ?? path.resolve(process.cwd(), "../documentacion");
}

async function listarMarkdown(dir: string, base: string): Promise<DocumentoCargado[]> {
  const entradas = await fs.readdir(dir, { withFileTypes: true });
  const documentos: DocumentoCargado[] = [];
  for (const entrada of entradas) {
    const ruta = path.join(dir, entrada.name);
    if (entrada.isDirectory()) {
      documentos.push(...(await listarMarkdown(ruta, base)));
    } else if (entrada.isFile() && entrada.name.endsWith(".md")) {
      documentos.push({
        archivo: path.relative(base, ruta).split(path.sep).join("/"),
        contenido: await fs.readFile(ruta, "utf8"),
      });
    }
  }
  return documentos;
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
