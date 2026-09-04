# Resumen call — Sprint 18 (índice revisado, prototipo elegido)

**Fecha:** 03/09/2026 · **Con:** Daniel (tutor) · **Fuente:** `DANIEL 3 DE SETIEMBRE.transcripcion.txt`

## Índice del Overleaf: aprobado con una fusión

- Introducción y background quedan como están. Los capítulos de revisión y de resultados se fusionan en uno solo (puede llamarse "feedback mediado por IAG"), con la revisión como subsección.
- Dentro de la revisión, separar protocolo de resultados: primero el proceso (fuentes, string, criterios de aceptación y rechazo), después qué se obtuvo (cuántos por fuente, la extensión por gris y snowballing, el corpus final en una tabla con los artículos).
- La extensión más allá del screening se cuenta como búsqueda de completitud, no estrictamente repetible, y está bien decirlo así. La revisión tiene que poder responder la pregunta de investigación; documentar mejor las definiciones (qué entendemos por feedback) y fusionar esas dos secciones del capítulo.
- Daniel compartió el capítulo de mapeo sistemático de otro grupo de la facultad como referencia de estilo para documentar la búsqueda (copia local en `referencia_estilo_revision.pdf`, no se versiona). No hace falta ese nivel de formalidad ni el diagrama PRISMA completo.

## Prototipo: queda el asistente de sesiones de feedback

- De las ideas presentadas, Daniel vio viables tanto el asistente que chequea el feedback contra reglas y requisitos (línea de las ideas 2 y 3) como el recorrido con Gherkin (idea 4). Dejó la elección abierta y se optó por la primera; la 4 queda afuera por preferencia y tiempo, no por inviabilidad.
- Decisión textual: el asistente para las sesiones de feedback, con chequeo de consistencia contra las reglas de negocio y los requisitos definidos, es la idea hacia la cual se trabaja.
- Encuadre acordado: las reglas y requisitos viven en los documentos del proyecto y se consultan vía RAG; gustó la capa de interfaz o bibliotecario sobre esa documentación, que además la cura y simplifica. La documentación existente se usa como fuente de conocimiento, no se mantiene actualizada por el prototipo.
- Output esperado: lo extraído de la sesión, el chequeo de consistencia con justificación de dónde choca cada punto, y una priorización sugerida. Los tickets de alto nivel son subproducto; no se desgranan en tareas de bajo nivel y siempre acepta un humano.
- Para probarlo, usar la documentación de un proyecto real viejo, en versión anonimizada.
- Tareas de definición pendientes: qué preguntas responde el asistente, cómo se captura la sesión (transcripción), contra qué elementos se verifica. Revisar la conferencia de Requirements Engineering que mencionó Daniel (mucho LLM aplicado a análisis de requisitos) y ver si existe un lenguaje estructurado para expresar reglas, sin obligación de adoptarlo.

## Plan y logística

- Primero cerrar la segunda versión del capítulo de revisión y mandársela a Daniel; en paralelo, seguir bajando a tierra el prototipo. No es una cosa sobre la otra.
- Entrega intermedia de la facultad: no hay entregable, solo una presentación de 10 minutos con objetivos y estado de avance.
- Se saltea una semana de reunión; próxima en la semana del 14/9, se coordina por Teams.
