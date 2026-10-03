import OpenAI, {
  APIConnectionError,
  APIConnectionTimeoutError,
  AuthenticationError,
} from "openai";
import {
  ContentFilterFinishReasonError,
  LengthFinishReasonError,
} from "openai/core/error";
import { zodTextFormat } from "openai/helpers/zod";
import { ZodError } from "zod";
import { cargarDocumentacion, ErrorDocumentacion } from "@/lib/documentacion";
import { armarSystemPrompt } from "@/lib/prompt";
import { VeredictoModeloSchema } from "@/lib/veredicto";
import type { CodigoError, Veredicto, VeredictoErrorBody } from "@/lib/tipos";

export const runtime = "nodejs";

function respuestaError(status: number, codigo: CodigoError, mensaje: string) {
  const body: VeredictoErrorBody = { error: { codigo, mensaje } };
  return Response.json(body, { status });
}

// Normaliza espacios multiples y saltos de linea a espacio simple para comparar citas.
function normalizar(texto: string): string {
  return texto.replace(/\s+/g, " ").trim();
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return respuestaError(400, "desconocido", "El body tiene que ser JSON valido.");
  }

  const { quien, enunciado } = (body ?? {}) as { quien?: unknown; enunciado?: unknown };
  if (
    typeof quien !== "string" ||
    typeof enunciado !== "string" ||
    enunciado.trim() === ""
  ) {
    return respuestaError(
      400,
      "desconocido",
      "El body tiene que tener quien (string) y enunciado (string no vacio)."
    );
  }

  if (!process.env.OPENAI_API_KEY) {
    return respuestaError(500, "config", "Falta OPENAI_API_KEY en app/.env.local");
  }

  let documentos;
  try {
    documentos = await cargarDocumentacion();
  } catch (err) {
    const mensaje =
      err instanceof ErrorDocumentacion
        ? err.message
        : "No se pudo cargar la documentacion del proyecto.";
    return respuestaError(500, "config", mensaje);
  }

  const cliente = new OpenAI({ timeout: 30000, maxRetries: 1 });

  let respuesta;
  try {
    respuesta = await cliente.responses.parse({
      model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
      instructions: armarSystemPrompt(documentos),
      input: `Quien habla: ${quien}\nEnunciado: ${enunciado}`,
      text: { format: zodTextFormat(VeredictoModeloSchema, "veredicto") },
    });
  } catch (err) {
    if (err instanceof AuthenticationError) {
      return respuestaError(502, "auth", "La API de OpenAI rechazo la clave configurada.");
    }
    if (err instanceof APIConnectionTimeoutError || err instanceof APIConnectionError) {
      return respuestaError(504, "timeout", "No se pudo conectar con la API de OpenAI a tiempo.");
    }
    if (
      err instanceof ZodError ||
      err instanceof LengthFinishReasonError ||
      err instanceof ContentFilterFinishReasonError ||
      err instanceof SyntaxError
    ) {
      console.error("Respuesta malformada del modelo:", err);
      return respuestaError(502, "malformada", "El modelo devolvio una respuesta que no se pudo interpretar.");
    }
    console.error("Error inesperado llamando a OpenAI:", err);
    return respuestaError(500, "desconocido", "Fallo inesperado al pedir el veredicto.");
  }

  const parseado = respuesta.output_parsed;
  if (!parseado) {
    // Refusal del modelo o salida sin JSON parseable.
    console.error("Salida cruda del modelo sin veredicto parseado:", JSON.stringify(respuesta.output));
    return respuestaError(502, "malformada", "El modelo no devolvio un veredicto valido.");
  }

  const porArchivo = new Map(documentos.map((doc) => [doc.archivo, normalizar(doc.contenido)]));

  const veredicto: Veredicto = {
    ...parseado,
    citas: parseado.citas.map((cita) => {
      const contenido = porArchivo.get(cita.archivo);
      const verificada =
        contenido !== undefined && contenido.includes(normalizar(cita.fragmento_textual));
      return { ...cita, verificada };
    }),
  };

  return Response.json(veredicto);
}
