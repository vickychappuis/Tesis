import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { errorDeOpenAI, respuestaError } from "@/lib/errores-api";
import { ExtraccionModeloSchema, PROMPT_EXTRACTOR } from "@/lib/extractor";
import type { Extraccion } from "@/lib/tipos";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return respuestaError(400, "desconocido", "El body tiene que ser JSON valido.");
  }

  const { quien, buffer } = (body ?? {}) as { quien?: unknown; buffer?: unknown };
  if (typeof quien !== "string" || typeof buffer !== "string" || buffer.trim() === "") {
    return respuestaError(
      400,
      "desconocido",
      "El body tiene que tener quien (string) y buffer (string no vacio)."
    );
  }

  if (!process.env.OPENAI_API_KEY) {
    return respuestaError(500, "config", "Falta OPENAI_API_KEY en app/.env.local");
  }

  const cliente = new OpenAI({ timeout: 20000, maxRetries: 1 });

  let respuesta;
  try {
    respuesta = await cliente.responses.parse({
      model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
      instructions: PROMPT_EXTRACTOR,
      input: `Quien habla: ${quien}\nTranscripcion acumulada: ${buffer}`,
      text: { format: zodTextFormat(ExtraccionModeloSchema, "extraccion") },
    });
  } catch (err) {
    return errorDeOpenAI(err, "Fallo inesperado al segmentar la transcripcion.");
  }

  const parseado = respuesta.output_parsed;
  if (!parseado) {
    // Refusal del modelo o salida sin JSON parseable.
    console.error("Salida cruda del modelo sin extraccion parseada:", JSON.stringify(respuesta.output));
    return respuestaError(502, "malformada", "El modelo no devolvio una extraccion valida.");
  }

  const extraccion: Extraccion = {
    enunciados: parseado.enunciados.map((e) => e.trim()).filter((e) => e !== ""),
    resto: parseado.resto.trim(),
  };

  return Response.json(extraccion);
}
