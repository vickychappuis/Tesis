# Qué cambió desde la v1 — para la segunda pasada con Daniel

> Una página para arrancar la reunión sin releer todo. Cada punto responde a un comentario de la call del 9 de jul.
> Marco v2: `MARCO_PROCESO_FEEDBACK_v2.md` · Anclaje: `SCRUM_ANCLAJE.md` · Diagramas: `diagramas/`

---

## 1. Anclaje en bibliografía *(pedido: "falta fuente oficial")*

Se trabajó sobre la **Scrum Guide 2020** oficial (Schwaber & Sutherland, CC BY-SA). El PDF y su texto plano quedan
en el repo, y **todas las citas están verificadas literalmente** contra ese archivo.

Tres cosas que la Guía dice y que sostienen tu reparo sobre la Sprint Review:

1. *"The Sprint Review is a working session and the Scrum Team should avoid limiting it to a presentation."*
   → la lectura "reunioncita donde los stakeholders dicen bárbaro, sigamos" es del material divulgativo de
   scrum.org, **no** del estándar.
2. *"an Increment may be delivered to stakeholders prior to the end of the Sprint. The Sprint Review should never be
   considered a gate to releasing value."* → la liberación está **desacoplada de la ceremonia por diseño**.
3. *"The Scrum framework is purposefully incomplete, only defining the parts required to implement Scrum theory"*, y
   en el End Note se define como *"container for other techniques, methodologies, and practices"*.

Y un hallazgo léxico sobre las 14 páginas: **`feedback` aparece 0 veces**, igual que `test` y `acceptance`
(`inspect` 23, `adapt` 18, `stakeholder` 13). El objeto de estudio de la tesis no es un término del framework.

**Consecuencia:** lo que Scrum no cubre no se disfraza de Scrum. Se declara, y se ancla en literatura de ingeniería
(Sommerville para *release* y *acceptance testing*, Dumas para reglas de negocio y BPMN).

## 2. Rascar la Sprint Review *(pedido: "hay toda una etapa de revisión")*

El zoom ya no es la ceremonia sola: es una **etapa de revisión** con tres momentos, de los cuales solo el último
está definido por Scrum.

**A2 (una caja en la v1) se desdobló en tres:**

| | Actividad | ¿Scrum? |
|---|---|---|
| **A2a** | Liberación del incremento | ⚠ no |
| **A2b** | Uso y testing de aceptación | ⚠ no ← *la pieza que faltaba* |
| **A2c** | Sprint Review | ✅ sí |

Se cayó la palabra "demo". Además: **A4** pasó a *Incorporación del feedback al Product Backlog* y **A5** a
*Product Backlog refinement* (término textual de la Guía, y es una actividad **continua**, no un evento).

**Efecto teórico, no solo cosmético:** el feedback del negocio tiene ahora **dos canales y dos momentos** — el uso
real (que puede llegar antes de la ceremonia) y la ceremonia. Eso es materia directa del objetivo B
(frecuencia, secuencia, temporalidad).

**El desdoblamiento no queda apoyado solo en Scrum:** Sommerville (2016) lo describe literalmente.

- **§2.3.2 (entrega incremental):** los incrementos *"are delivered to the customer and deployed for use in their
  working environment"* y, una vez entregados, *"it is installed in the customer's normal working environment. They
  can experiment with the system"* → es exactamente el par **A2a + A2b**.
- **§8.4 (user testing):** el *acceptance testing* tiene seis etapas y la primera es **definir los criterios de
  aceptación**; el equipo de desarrollo, según **§8.3**, no debería ser responsable del *release testing*.
- **§20.5:** *"Agile methods do not rely on having a complete system specification for system acceptance testing.
  Rather, stakeholders are closely engaged with the testing process and have the authority to decide when the
  overall system is acceptable."* → en ágil la aceptación **no** es una fase contractual separada sino
  participación continua del stakeholder con autoridad para decidir. **Es justamente la relación que la tesis pone
  en cuestión cuando entra IAG de por medio.**

## 3. Notación uniforme *(pedido: "cajitas y globitos, marea un poquito")*

Se pasó a **BPMN** (estándar OMG, anclado en Dumas et al., 2018), dibujado en draw.io.

La inconsistencia **desaparece de raíz** en vez de parchearse: en BPMN los roles son carriles del mismo diagrama,
así que la "vista principal" y la "vista por carriles" **se unifican en un solo diagrama**. Ya no hay dos
notaciones que reconciliar. Leyenda explícita: actividad · objeto de datos · almacén de datos · carril, y tres
tipos de flecha con semántica distinta (secuencia, mensaje entre participantes, asociación de datos).

El feedback, que en la v1 era una caja de actividad en la vista por carriles, ahora es un **objeto de datos**.

## 4. Capa IAG reforzada *(pedido: "reforzar con los 4 artículos")*

Los cuatro artículos están verificados uno por uno (título, autores, venue, DOI) y leídos. Cada actividad tiene
ahora respaldo en dos niveles, con **tabla de trazabilidad** *actividad → afirmación → fuente* (§4.2 del marco).

Tres cosas honestas que conviene decir:

- **Ninguno de los cuatro menciona la Sprint Review** (0 ocurrencias). Trabajan a nivel de etapas del SDLC. El zoom
  fino sigue apoyado en el corpus del mapeo; los cuatro aportan la capa general. División de trabajo razonable,
  pero mejor decirlo que sobrevender el anclaje.
- **Corrigen una afirmación de la v1:** la estimación de esfuerzo ya no es un gap (Malladi & Sudheer Reddy reportan
  cobertura). El gap se corrió a **A2b**: Nguyen-Duc et al. declaran que el *acceptance testing* no es foco de los
  estudios existentes, y dejan abierta la RQ *"How can GenAI be utilized to automate acceptance criteria from
  high-level requirements?"*
- **Ubicación del zoom** en las 11 áreas de Nguyen-Duc et al.: *Requirements Engineering*, *Quality Assurance* y
  *Engineering Management*.

## 5. Escenarios S1–S4 *(pedido: "la imagen de los cuatro escenarios")*

`diagramas/escenarios_s1_s4.drawio`: figura **propia** hecha a partir de las Tablas 1 y 2 de Sauvola et al. (2024)
—redibujada en vez de copiar la imagen— con las columnas A/B/C/D del modelo del paper y, al costado, dónde cae cada
una de nuestras cuatro grandes áreas.

## 6. Lo que no se tocó

El **punto 5 (grandes áreas)** quedó como estaba, según lo pedido; solo se actualizaron los nombres de actividades.
El marco v1 del sprint 14 tampoco se tocó: queda como registro, con tabla de correspondencia v1 → v2.

---

## Decisiones a confirmar en la reunión

1. **¿Va el desdoblamiento de A2** en liberación / uso y aceptación / Sprint Review? Es la lectura literal del
   reparo, pero suma tres cajas.
2. **¿Se mantiene el analista funcional** como rol, sabiendo que **no existe en Scrum**? (Propuesta: sí, declarado
   como rol de la práctica y anclado en que el PO *"may delegate the responsibility to others"*. Es el intermediario
   del objetivo C.)
3. **¿El Scrum Master queda afuera** del diagrama? (Propuesta: sí, con la ausencia declarada — no es dueño de
   ninguna actividad del loop.)
4. **¿Cuánto peso darle al hallazgo léxico** (`feedback` = 0 en la Guía)? Da un argumento fuerte para justificar el
   marco como aporte propio; podría ir en el cuerpo de la tesis y no solo como nota.
5. **Bibliografía: ya no queda nada pendiente.** Las tres fuentes que sostienen el marco están verificadas contra
   el ejemplar, sección por sección: **Scrum Guide 2020** (citas literales), **Sommerville (2016)** §2.3.2, §4.5,
   §4.6, §7.3, §8.3, §8.4, §20.5, §25.3 y **Dumas et al. (2018)** §1.4, §3.3, §3.4, §4.4, §5.2.2, §5.4.2 — detalle
   en `FUENTES_MARCO.md` §a.1 y §a.2. Las de refuerzo (Pressman & Maxim, Humble & Farley, BABOK) quedaron como
   prescindibles y se descartó ISO/IEC/IEEE 29119.

## Siguiente paso propuesto

Elegir **una** de las cuatro grandes áreas, bien pegada al feedback, para bajar a la PoC. El gap de **A2b**
(criterios de aceptación / testing de aceptación asistido) quedó como candidato con respaldo bibliográfico
explícito, y es más pegado al feedback que la generación de tickets → código.
