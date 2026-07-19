# Resumen de Call — Sprint 14

**Tesis:** Ciclos de feedback entre clientes y equipos de desarrollo en contextos de uso de IAG
**Fecha:** 9 de julio de 2026
**Fuente:** `DANIEL 9 DE JULIO.transcripcion.txt` (transcripción automática, con ruido)
**Participantes:** Daniel (tutor) y Victoria (estudiante)

---

## 1. Tema central de la reunión

Revisar la **primera versión del marco del proceso de desarrollo con zoom en el feedback** (los tres primeros puntos que había propuesto Daniel): el diagrama de etapas, la tabla de actividades con inputs/outputs/objetivo, la capa "cómo potenciar cada actividad con IAG" y el pase a generalidades. El tutor valida el trabajo y da comentarios para profundizarlo, con foco en **anclar todo en bibliografía** y en **rascar la ceremonia de Scrum** donde entra el feedback (Sprint Review).

---

## 2. Puntos discutidos

### 2.1. Validación del trabajo hecho

- El marco (diagrama `MARCO_PROCESO_FEEDBACK.png`, tabla de actividades con input/output/objetivo, capa IAG por actividad, pase a generalidades) le parece **muy valioso** al tutor. Es material **contextual**: a partir de esto se baja a algo más concreto.
- Buena valoración de haberle pasado a Claude la **propia base de conocimiento de la revisión**: eso hace la capa IAG mucho más fuerte porque aporta ejemplos concretos, y permite balancear entre lo general y lo puntual. Cada elemento quedó etiquetado como **paper** o **producto** según de dónde salió.
- Le gustó la **identificación de grandes áreas**: ahí es donde se hace zoom en el feedback. Las cinco actividades de Scrum "tienen de todo un poco" (validación, construcción, refinamiento).

### 2.2. Falta anclar en bibliografía (fuente oficial)

- Lo que más falta es **fuente oficial**. Toda asunción conviene anclarla en literatura revisada por pares: eso da mucha más validación que un blog (**literatura gris**, que no está mal pero no tiene validación formal).
- Si se va a mostrar un diagrama de etapas, seguramente en **Scrum** haya algo que las describa como flujo de actividades → usar eso como ancla.

### 2.3. Formalizar el diagrama y unificar la notación

- Falta **formalizar** un poco el diagrama.
- **Inconsistencia entre las dos vistas** del diagrama:
  - La vista principal ordena las actividades 1 → 2 → 3 → a/b → 4 → 5; la **vista por carriles** las lee en otro orden (arranca por el feedback/observaciones del cliente). Son las **mismas actividades** pero leídas desde otra perspectiva (cómo entra y se retroalimenta el feedback del usuario).
  - La **semántica de la notación cambia** entre vistas: arriba se usan cajitas **y** globitos; abajo solo cajitas, pero algunas son actividades y otra es un input/output (cliente-stakeholder). Eso "marea".
- Acción: **uniformar la notación** para que sea coherente en ambas vistas. (Victoria lo anotó para corregir.)

### 2.4. Reforzar la capa IAG con los 4 artículos de Daniel

- La capa con IAG está bien, pero hoy solo hace referencia a artículos **del corpus de la revisión**. Conviene **reforzar las cuatro capas** con los **4 artículos que Daniel pasó** sobre IAG en el desarrollo (los del mensaje / `PROPUESTA_DANIEL.md`), pidiéndole a Claude que tome referencia de ellos.
- Valor: mantener todo **trazable** — vincular las actividades del modelo con lo que dicen estos artículos en términos generales del proceso de desarrollo.
- Anécdota: Claude ya lo había escrito integrando el material de Daniel; Victoria le había pedido sacarlo, y ahora el tutor confirma que **sí** conviene incluirlo. Daniel los va a mirar por arriba y se hace una **segunda pasada**.

### 2.5. Rascar y armonizar Scrum (dónde entra el feedback)

- Daniel compartió el esquema general de **scrum.org** (backlog, sprint planning, sprint review, retrospectiva; la review recopila retroalimentación y actualiza el backlog). El "demo" que había puesto Victoria ≈ **Sprint Review**.
- El **zoom del feedback** debería hacerse puntualmente en la **Sprint Review**: definir qué es, qué se hace ahí, y ubicar el feedback en ese momento.
- **Reparo del tutor:** scrum.org plantea la Sprint Review casi como una reunioncita donde los stakeholders dicen "bárbaro, sigamos". En la práctica hay toda una **etapa de revisión**: liberación del producto, **testing de aceptación** (el usuario usa el producto y detecta errores) — no es solo una reunión. Scrum es una metodología de **gestión** del proyecto, no cubre cómo se construye.
- Acción: **rascar un poco Scrum** y **armonizarlo con nuestro contexto**. Puede que algunos nombres de actividades cambien a un nombre más estándar de Scrum, pero **las ideas se mantienen**.
- La "gran área con IAG" es en realidad un **des-zoom del punto 4**: sobre las soluciones concretas, identificar **patrones** en la parte de reviews (lo que más interesa). Hay cosas propias del feedback (impersonación, entrevistas, chequeo de consistencia) y otras que se derivan (generación/gestión de tickets, desarrollo).

### 2.6. Pase a generalidades (punto 5) y elección futura del foco

- El **punto 5 no se toca**: al tutor le gusta como quedó. Es una **perspectiva un poco más ampliada** — no solo feedback estricto, sino lo que está **en torno** al feedback — y le parece excelente.
- Más adelante habrá que **elegir UNA** de esas grandes áreas para profundizar, y debería ser una que esté **bien pegada al feedback en sí**.
- A Victoria le atrae la **generación de tickets → código** (porque le gusta codear), pero reconoce que quizá no es la más pegada al feedback; hay que encontrar el equilibrio.

### 2.7. Hacia la PoC (más adelante)

- Con este marco se **documenta el contexto**; se va bajando de nivel. La próxima se repasan las grandes áreas y se decide **en qué profundizar a nivel práctico**.
- Luego: recolectar la información que ya se tiene **pero exclusivamente de esa área**, ver si hay alguna **herramienta disponible**, y armar el prototipo en función de eso.
- Idea tentativa de demo/PoC (el **pipeline** de antes, pero mínimo): a partir de una **grabación oral** ("quiero esto, esto y esto") → interpretar el texto → extraer → **generar tickets automáticamente** y priorizarlos/asignarlos. Validar algo muy pequeño y ver su potencial.

---

## 3. Conclusiones

- El marco de proceso con zoom en feedback **vale** y es el insumo contextual para bajar a algo concreto; los tres primeros puntos de la propuesta están encaminados.
- Pendiente central: **anclar en bibliografía** (Scrum para las etapas; los 4 artículos de Daniel para reforzar la capa IAG) y **formalizar/uniformar** la notación del diagrama.
- El **zoom del feedback** se ubica en la **Sprint Review**, pero hay que rascar Scrum y armonizarlo: la review real incluye liberación y testing de aceptación, no solo una reunión.
- El **punto 5 (generalidades)** queda aprobado tal cual; aporta la mirada "en torno al feedback".
- El camino a la PoC es **elegir una gran área bien pegada al feedback**, recolectar literatura específica, buscar herramientas existentes y armar un prototipo mínimo (candidata: grabación oral → tickets automáticos).

---

## 4. Próximos pasos — Sprint 15

| # | Tarea | Estado |
|---|-------|--------|
| 1 | **Anclar el diagrama de etapas en bibliografía de Scrum** (actividades/flujo estándar) y **formalizar** el diagrama | 📅 |
| 2 | **Uniformar la notación** entre la vista principal y la vista por carriles (cajitas vs globitos; distinguir actividad de input/output) | 📅 |
| 3 | **Reforzar la capa IAG (punto 4)** pidiéndole a Claude que tome referencia de los **4 artículos de Daniel** sobre IAG en desarrollo, además de los del corpus; mantener trazabilidad | 📅 |
| 4 | **Rascar y armonizar Scrum:** entender bien la **Sprint Review** (liberación + testing de aceptación, no solo reunión) y ubicar ahí el zoom del feedback; ajustar nombres de actividades a estándar Scrum si corresponde | 📅 |
| 5 | Agregar la **imagen de los 4 escenarios** del paper *Future of software development with generative AI* (S1–S4) | 📅 |
| 6 | Dejar el **punto 5 (generalidades) como está** (aprobado por el tutor) | ✅ |
| 7 | Segunda pasada del marco **junto con Daniel** (él revisa los 4 artículos por arriba) | ⏭ Próxima reunión |
| 8 | **Elegir una gran área bien pegada al feedback** para la PoC → recolectar literatura específica → ver herramientas disponibles → armar prototipo mínimo (candidata: grabación oral → tickets automáticos) | ⏭ Más adelante |

---

## 5. Logística de reuniones

- La **reunión de la semana que viene se cancela**; se retoma la semana siguiente.
- Disponibilidad para coordinar: Daniel suele tener tarde de **martes/miércoles (hasta ~16–17 h)** y los **jueves ~18 h**.
- Contacto por **Teams**; se coordina cuando haya una nueva versión del marco.
