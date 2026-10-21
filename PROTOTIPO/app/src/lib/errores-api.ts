// Mapeo compartido de errores para las rutas de API que llaman a OpenAI.
// Lo usan /api/veredicto y /api/extraer: mismo contrato de error hacia la UI.
import {
  APIConnectionError,
  APIConnectionTimeoutError,
  AuthenticationError,
} from "openai";
import {
  ContentFilterFinishReasonError,
  LengthFinishReasonError,
} from "openai/core/error";
import { ZodError } from "zod";
import type { CodigoError, VeredictoErrorBody } from "@/lib/tipos";

export function respuestaError(status: number, codigo: CodigoError, mensaje: string) {
  const body: VeredictoErrorBody = { error: { codigo, mensaje } };
  return Response.json(body, { status });
}

// Convierte un error de la llamada a OpenAI en la respuesta HTTP del contrato.
// mensajeDesconocido es el texto para el caso que no matchea ningun error conocido.
export function errorDeOpenAI(err: unknown, mensajeDesconocido: string): Response {
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
    return respuestaError(
      502,
      "malformada",
      "El modelo devolvio una respuesta que no se pudo interpretar."
    );
  }
  console.error("Error inesperado llamando a OpenAI:", err);
  return respuestaError(500, "desconocido", mensajeDesconocido);
}
