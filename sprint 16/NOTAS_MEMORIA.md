# Notas de citado para la memoria final

> Salieron de la verificación de la sec. 4 del marco v3 (ago-2026). Se usan recién al redactar el estado del arte
> de la memoria; hasta entonces no requieren acción.

1. **Nguyen-Duc se cita fechado.** Su pasaje sobre testing de aceptación es literal, pero el relevamiento cierra en
   octubre de 2023: citarlo como *"relevamiento con corte oct-2023"* y apoyar el hueco en la búsqueda dirigida de
   la sec. 4.7, que es actual.
2. **Las cifras de "validación" de las SLR no son comparables ni miden lo nuestro.** `cheng2026generative` reporta
   19,0% de estudios en *requirement validation*; `fischer2026generative` dice que *"remain underexplored"* (4/37).
   Declarar la discrepancia, no elegir la cita conveniente. Y en ambas, "validation" significa contrastar
   requisitos antes de construir, no aceptación de software entregado: usar sus cifras como proxy del foco de esta
   tesis es medir otra cosa.
3. **La objeción de Lang y Fischer hay que responderla.** Ellos leen el vacío como inadecuación, no como
   oportunidad: *"requirement validation is less suitable for AI-driven automation, which explains its limited
   presence in research"*. Si la tesis sostiene lo contrario, argumentarlo de frente.
4. **Búsquedas de la memoria:** todo string con "acceptance" necesita anclaje en *testing* / *criteria* /
   *software* (el término está dominado por TAM/UTAUT, otra disciplina). La verificación complementaria de la
   sec. 4.7 del marco v3 (agosto 2026) usó estos 4 strings sobre la API de arXiv (campo `abs:`, filtro 2023+),
   más 14 búsquedas web y 3 consultas a Semantic Scholar:

   | String | Total arXiv | Relevantes |
   |---|---|---|
   | `"acceptance testing" AND ("large language model" OR "generative AI" OR LLM)` | 13 | 6 |
   | `"acceptance criteria" AND ("large language model" OR "generative AI" OR LLM)` | 31 | 9 |
   | `"user acceptance testing" OR "UAT"` | 55 ⚠ | ~4 |
   | `("acceptance test" OR "acceptance tests") AND (Gherkin OR BDD OR "behaviour-driven")` | 7 | 5 |

   ⚠ El 55 está contaminado: en arXiv "UAT" matchea mayoritariamente *Universal Approximation Theorem*; no citar
   ese número. Si el tribunal pide totales de ACM DL, IEEE Xplore o SpringerLink (hoy solo arXiv tiene conteo
   exacto), repetir estos strings desde la red de ORT, filtro 2023–2026, buscando en abstract (en SpringerLink es
   texto completo y el total no es comparable; anotarlo). Registrar fecha, string y total por base.
