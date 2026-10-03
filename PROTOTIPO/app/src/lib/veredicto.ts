import { z } from "zod";

// Rutas exactas de los documentos del proyecto. El modelo solo puede citar estas.
export const ARCHIVOS_DOCUMENTACION = [
  "requisitos/prestamos.md",
  "requisitos/reservas.md",
  "actas/2026-05-12.md",
] as const;

// Veredicto tal como lo devuelve el modelo (sin "verificada", que la agrega el servidor).
// Modo estricto de OpenAI: todos los campos required; la opcionalidad se expresa con .nullable().
export const VeredictoModeloSchema = z.object({
  tipo: z.enum(["choca", "coincide", "no_contemplado", "no_accionable"]),
  resumen_enunciado: z
    .string()
    .describe("Reformulacion fiel del enunciado en una frase, sin interpretar."),
  justificacion: z
    .string()
    .describe("Explicacion en lenguaje cotidiano, maximo tres frases."),
  citas: z.array(
    z.object({
      archivo: z.enum(ARCHIVOS_DOCUMENTACION),
      fragmento_textual: z
        .string()
        .describe(
          "Fragmento copiado caracter por caracter de la documentacion. Nunca parafrasear ni mejorar la redaccion."
        ),
    })
  ),
  pregunta_al_cliente: z
    .string()
    .nullable()
    .describe(
      "Obligatoria si el tipo es choca; tambien si el enunciado es demasiado ambiguo. En cualquier otro caso, null."
    ),
  prioridad: z
    .object({
      nivel: z.enum(["alta", "media", "baja"]),
      razon: z.string().describe("Razon de una linea, relativa a lo ya documentado."),
    })
    .nullable()
    .describe("Solo cuando el tipo es no_contemplado; en los demas tipos, null."),
});

export type VeredictoModelo = z.infer<typeof VeredictoModeloSchema>;
