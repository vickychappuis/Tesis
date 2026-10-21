import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import type {
  FunctionTool,
  ResponseInput,
} from "openai/resources/responses/responses";
import {
  cargarDocumentacion,
  esLecturaFallida,
  leerDocumento,
  leerIndice,
  sanearRutaDocumento,
  ErrorDocumentacion,
  type DocumentoCargado,
} from "@/lib/documentacion";
import { errorDeOpenAI, respuestaError } from "@/lib/errores-api";
import { armarSystemPrompt, armarSystemPromptBibliotecario } from "@/lib/prompt";
import { VeredictoModeloSchema, type VeredictoModelo } from "@/lib/veredicto";
import type { Veredicto } from "@/lib/tipos";

export const runtime = "nodejs";

// Topes del loop de herramientas del modo bibliotecario.
const MAX_ITERACIONES = 6;
const TIMEOUT_TOTAL_MS = 45000;

// Normaliza espacios multiples y saltos de linea a espacio simple para comparar citas.
function normalizar(texto: string): string {
  return texto.replace(/\s+/g, " ").trim();
}

const HERRAMIENTAS: FunctionTool[] = [
  {
    type: "function",
    name: "listar_documentos",
    description:
      "Devuelve el indice de la documentacion del proyecto: una linea por documento, con su ruta, tipo, temas, fecha y descripcion.",
    parameters: {
      type: "object",
      properties: {},
      required: [],
      additionalProperties: false,
    },
    strict: true,
  },
  {
    type: "function",
    name: "leer_documento",
    description:
      "Devuelve el contenido completo de un documento del proyecto. La ruta es relativa, tal cual figura en el indice (por ejemplo: requisitos/prestamos.md).",
    parameters: {
      type: "object",
      properties: {
        ruta: {
          type: "string",
          description: "Ruta relativa del documento, tal cual figura en el indice.",
        },
      },
      required: ["ruta"],
      additionalProperties: false,
    },
    strict: true,
  },
];

interface ResultadoBibliotecario {
  parseado: VeredictoModelo;
  fuentes: string[];
}

// Loop de tool use con la Responses API: el modelo abre documentos con
// leer_documento hasta dar el veredicto final. Devuelve ademas las rutas que
// el servidor leyo de verdad (las tool calls ejecutadas, no lo que el modelo diga).
async function pedirVeredictoBibliotecario(
  cliente: OpenAI,
  indice: string,
  quien: string,
  enunciado: string
): Promise<ResultadoBibliotecario | Response> {
  const limite = Date.now() + TIMEOUT_TOTAL_MS;
  const fuentes: string[] = [];
  const input: ResponseInput = [
    { role: "user", content: `Quien habla: ${quien}\nEnunciado: ${enunciado}` },
  ];

  for (let iteracion = 0; iteracion < MAX_ITERACIONES; iteracion++) {
    const restante = limite - Date.now();
    if (restante <= 0) {
      return respuestaError(
        504,
        "timeout",
        "Se agoto el tiempo total consultando la documentacion."
      );
    }

    let respuesta;
    try {
      respuesta = await cliente.responses.parse(
        {
          model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
          instructions: armarSystemPromptBibliotecario(indice),
          input,
          tools: HERRAMIENTAS,
          text: { format: zodTextFormat(VeredictoModeloSchema, "veredicto") },
        },
        { timeout: Math.min(30000, restante) }
      );
    } catch (err) {
      return errorDeOpenAI(err, "Fallo inesperado al pedir el veredicto.");
    }

    const llamadas = respuesta.output.filter(
      (item) => item.type === "function_call"
    );

    if (llamadas.length === 0) {
      const parseado = respuesta.output_parsed;
      if (!parseado) {
        console.error(
          "Salida cruda del modelo sin veredicto parseado:",
          JSON.stringify(respuesta.output)
        );
        return respuestaError(502, "malformada", "El modelo no devolvio un veredicto valido.");
      }
      return { parseado, fuentes };
    }

    for (const llamada of llamadas) {
      input.push({
        type: "function_call",
        call_id: llamada.call_id,
        name: llamada.name,
        arguments: llamada.arguments,
      });
      input.push({
        type: "function_call_output",
        call_id: llamada.call_id,
        output: await ejecutarHerramienta(llamada.name, llamada.arguments, indice, fuentes),
      });
    }
  }

  console.error(`El modelo no llego a un veredicto en ${MAX_ITERACIONES} iteraciones.`);
  return respuestaError(
    502,
    "malformada",
    "El modelo no llego a un veredicto despues de consultar la documentacion."
  );
}

// Ejecuta una tool call del modelo. Siempre devuelve un string (el modelo tiene
// que ver los errores para poder corregir). Registra en fuentes las lecturas reales.
async function ejecutarHerramienta(
  nombre: string,
  argumentos: string,
  indice: string,
  fuentes: string[]
): Promise<string> {
  if (nombre === "listar_documentos") return indice;
  if (nombre !== "leer_documento") return `Herramienta desconocida: ${nombre}`;

  let ruta: unknown;
  try {
    ruta = (JSON.parse(argumentos) as { ruta?: unknown }).ruta;
  } catch {
    return "Argumentos invalidos: se espera un JSON con el campo ruta.";
  }
  if (typeof ruta !== "string") {
    return "Argumentos invalidos: ruta tiene que ser un string.";
  }

  const contenido = await leerDocumento(ruta);
  if (!esLecturaFallida(contenido)) {
    const canonica = sanearRutaDocumento(ruta);
    if (canonica && !fuentes.includes(canonica)) fuentes.push(canonica);
  }
  return contenido;
}

// Modo anterior, con toda la documentacion en el contexto. Queda como fallback
// para entornos sin INDICE.md.
async function pedirVeredictoTodoEnContexto(
  cliente: OpenAI,
  documentos: DocumentoCargado[],
  quien: string,
  enunciado: string
): Promise<ResultadoBibliotecario | Response> {
  let respuesta;
  try {
    respuesta = await cliente.responses.parse({
      model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
      instructions: armarSystemPrompt(documentos),
      input: `Quien habla: ${quien}\nEnunciado: ${enunciado}`,
      text: { format: zodTextFormat(VeredictoModeloSchema, "veredicto") },
    });
  } catch (err) {
    return errorDeOpenAI(err, "Fallo inesperado al pedir el veredicto.");
  }

  const parseado = respuesta.output_parsed;
  if (!parseado) {
    console.error(
      "Salida cruda del modelo sin veredicto parseado:",
      JSON.stringify(respuesta.output)
    );
    return respuestaError(502, "malformada", "El modelo no devolvio un veredicto valido.");
  }
  return { parseado, fuentes: [] };
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

  // Necesaria en los dos modos: verifica las citas contra los archivos reales.
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

  // Sin INDICE.md no hay modo bibliotecario: fallback silencioso al modo anterior.
  let indice: string | null = null;
  try {
    indice = await leerIndice();
  } catch {
    indice = null;
  }

  const cliente = new OpenAI({ timeout: 30000, maxRetries: 1 });

  const resultado =
    indice !== null
      ? await pedirVeredictoBibliotecario(cliente, indice, quien, enunciado)
      : await pedirVeredictoTodoEnContexto(cliente, documentos, quien, enunciado);
  if (resultado instanceof Response) return resultado;

  const { parseado, fuentes } = resultado;
  const porArchivo = new Map(documentos.map((doc) => [doc.archivo, normalizar(doc.contenido)]));

  const veredicto: Veredicto = {
    ...parseado,
    citas: parseado.citas.map((cita) => {
      const contenido = porArchivo.get(cita.archivo);
      // En modo bibliotecario, una cita a un documento que el modelo no abrio
      // en esta consulta no vale, aunque el fragmento exista literal.
      const consultada = indice === null || fuentes.includes(cita.archivo);
      const verificada =
        contenido !== undefined &&
        contenido.includes(normalizar(cita.fragmento_textual)) &&
        consultada;
      return { ...cita, verificada };
    }),
    fuentes_consultadas: fuentes,
  };

  return Response.json(veredicto);
}
