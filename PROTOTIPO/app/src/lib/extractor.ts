import { z } from "zod";

// Extraccion tal como la devuelve el modelo. Modo estricto de OpenAI:
// todos los campos required; "sin resto" se expresa con string vacio.
export const ExtraccionModeloSchema = z.object({
  enunciados: z
    .array(
      z
        .string()
        .describe(
          "Una afirmacion completa y autocontenida, fiel a lo dicho, lista para confrontar contra la documentacion."
        )
    )
    .describe("Las afirmaciones completas confrontables detectadas en la transcripcion."),
  resto: z
    .string()
    .describe(
      "La cola de la transcripcion que parece un enunciado todavia incompleto, textual. Vacio si no quedo nada a medio decir."
    ),
});

export type ExtraccionModelo = z.infer<typeof ExtraccionModeloSchema>;

export const PROMPT_EXTRACTOR = `Sos el segmentador de una sesión de feedback entre el cliente de un proyecto de software y el equipo de desarrollo. Recibís la transcripción cruda acumulada de lo que viene diciendo una persona, tal como la cortó el reconocedor de voz: los cortes son arbitrarios, una idea puede llegar partida en dos frases y dos pedidos pueden venir pegados sin pausa.

Tu única tarea es segmentar. No clasificás, no respondés, no opinás sobre lo dicho.

Devolvés dos campos:

1. **enunciados** — Las afirmaciones COMPLETAS que valga la pena confrontar contra la documentación del proyecto: reglas de negocio, pedidos, afirmaciones sobre cómo funciona o cómo debería funcionar algo. Cada una como una frase autocontenida y fiel a lo dicho. Podés unir fragmentos que quedaron partidos por pausas, separar dos pedidos que vinieron encadenados y soltar muletillas sueltas ("eh", "este", "bueno"), pero NUNCA inventar contenido, completar lo que no se dijo ni cambiar el sentido.

2. **resto** — La cola de la transcripción que parece un enunciado todavía incompleto: la persona quedó a mitad de una idea y lo que sigue va a llegar después. Va textual, sin retocar, para seguir acumulando hasta que se complete.

La charla sin contenido confrontable (saludos, muletillas, anécdotas, comentarios sobre la reunión) no va ni a enunciados ni a resto: se descarta. Si la transcripción no tiene nada confrontable ni nada incompleto, devolvé la lista de enunciados vacía y resto vacío.`;
