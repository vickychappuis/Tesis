# Qué cambió desde la v1 — para la segunda pasada con Daniel

> Resumen para arrancar la reunión sin releer todo. Cada sección responde a un comentario de la call del 9 de julio.

## Mapa de documentos

El documento de trabajo del marco pasa a ser el **v2**. La v1 no se editó: queda como registro del sprint 14.

| Documento | Qué es |
|---|---|
| `MARCO_PROCESO_FEEDBACK_v2.md` | **Reemplaza** a `sprint 14/MARCO_PROCESO_FEEDBACK.md`. Es el marco corregido: actividades ancladas y renombradas, diagrama en BPMN, capa IAG reforzada. Su §2.1 tiene la tabla de correspondencia v1 → v2 |
| `SCRUM_ANCLAJE.md` | **Nuevo.** Es la evidencia: qué dice la Scrum Guide 2020, qué no cubre y con qué literatura se cubre. Es el sustento de todos los cambios del v2 |
| `FUENTES_MARCO.md` / `.bib` | **Nuevo.** Las fuentes del marco, con las secciones verificadas de Sommerville (§a.2) y Dumas (§a.1). Separado del corpus del mapeo (`sprint 12/REFERENCIAS.*`) |
| `diagramas/` | **Reemplazan** a los dos PNG del sprint 14: `marco_feedback_bpmn` (el marco) y `escenarios_s1_s4` (la figura de escenarios) |

---

## 1. Anclaje en bibliografía *(pedido: "falta fuente oficial")*

Se trabajó sobre la **Scrum Guide 2020** (Schwaber & Sutherland, licencia CC BY-SA). El PDF y su texto plano quedan
en el repositorio, y todas las citas del marco están **verificadas literalmente** contra ese archivo.

El reparo sobre la Sprint Review quedó resuelto a favor tuyo, y conviene precisar contra qué: la descripción
reducida de la ceremonia —presentar el incremento y obtener la aprobación de los stakeholders— proviene del
**material divulgativo de scrum.org**, no de la Guía. La Guía dice tres cosas que la contradicen:

1. *"The Sprint Review is a working session and the Scrum Team should avoid limiting it to a presentation."*
   La ceremonia es una sesión de trabajo, no una presentación con aprobación.
2. *"an Increment may be delivered to stakeholders prior to the end of the Sprint. The Sprint Review should never be
   considered a gate to releasing value."* La liberación del incremento **no depende** de la ceremonia ni la
   ceremonia la autoriza: son cosas separadas.
3. *"The Scrum framework is purposefully incomplete, only defining the parts required to implement Scrum theory"*, y
   en el End Note se define como *"container for other techniques, methodologies, and practices"*.

A eso se suma un hallazgo léxico sobre las 14 páginas de la Guía: **`feedback` aparece 0 veces**, igual que `test` y
`acceptance` (`inspect` 23, `adapt` 18, `stakeholder` 13). El objeto de estudio de la tesis no es un término del
framework.

**Consecuencia, y dónde se trabaja:** lo que Scrum no define no se presenta como si fuera Scrum. Se declara como
tal y se ancla en literatura de ingeniería. Eso se implementó en tres lugares concretos:

- `SCRUM_ANCLAJE.md` §4 — la tabla que dice, pieza por pieza, si está en Scrum y de qué fuente sale si no lo está.
- `MARCO_PROCESO_FEEDBACK_v2.md` §2 — la tabla de actividades, con una columna de anclaje por actividad.
- El diagrama BPMN — las actividades que Scrum no define van en **gris punteado con ⚠**.

**Estado de la bibliografía:** cerrado. Las tres fuentes que sostienen el marco están verificadas sección por
sección: Scrum Guide 2020 (citas literales), Sommerville (2016) §2.3.2, §4.5, §4.6, §7.3, §8.3, §8.4, §20.5 y §25.3,
y Dumas et al. (2018) §1.4, §3.3, §3.4, §4.4, §5.2.2 y §5.4.2. Detalle en `FUENTES_MARCO.md` §a.1 y §a.2.

## 2. Rascar la Sprint Review *(pedido: "hay toda una etapa de revisión")*

El zoom ya no es la ceremonia sola: es una **etapa de revisión** con tres momentos, de los cuales solo el último
está definido por Scrum. Qué es nuevo y qué venía del sprint 14:

| | Actividad | ¿Scrum? | Origen |
|---|---|---|---|
| **A2a** | Liberación del incremento | ⚠ no | **Se hizo explícita.** En la v1 el deploy estaba escondido dentro de A1 (*"Construcción y entrega del incremento — incluye inner loop, PR y deploy"*). Ahora es una actividad propia y A1 pasa a llamarse solo *Desarrollo del incremento* |
| **A2b** | Uso y testing de aceptación | ⚠ no | **Nueva.** No existía en la v1 en ninguna forma. Es la pieza que faltaba |
| **A2c** | Sprint Review | ✅ sí | **Es la vieja A2**, renombrada: se cayó la palabra "demo" porque la Guía dice que la review no debe limitarse a una presentación |

Cambiaron además dos nombres, para que sean citables: **A4** pasó a *Incorporación del feedback al Product Backlog*
(la Guía: *"Those wanting to change the Product Backlog can do so by trying to convince the Product Owner"*) y
**A5** a *Product Backlog refinement*, término textual de la Guía, que además aclara que es una actividad
**continua** y no un evento.

**Efecto teórico, no solo cosmético:** el feedback del negocio pasa a tener **dos canales y dos momentos** — el uso
real del producto (que puede llegar antes de la ceremonia) y la ceremonia misma. Es materia directa del objetivo B
(frecuencia, secuencia, temporalidad).

**Cómo se ve esto en el diagrama** (la pregunta de si la separación persiste ahí): sí, en tres elementos. A2a es una
actividad propia en el carril de Developers; la entrega al negocio cruza al otro *pool* como **flujo de mensaje**
—no pasa por la Sprint Review—; y del uso real sale un segundo flujo de mensaje rotulado *"feedback del uso (puede
llegar antes de la ceremonia)"*. La cita de la Guía que lo justifica está en el recuadro azul del propio diagrama.

**El desdoblamiento no se apoya solo en la lectura de Scrum:** Sommerville (2016) lo describe literalmente.

- **§2.3.2 (entrega incremental):** los incrementos *"are delivered to the customer and deployed for use in their
  working environment"* y, una vez entregados, *"it is installed in the customer's normal working environment. They
  can experiment with the system"* → es exactamente el par **A2a + A2b**.
- **§8.3 y §8.4:** el *release testing* es el testing de una versión destinada a usarse fuera del equipo de
  desarrollo, y el *acceptance testing* es una forma de *user testing* con seis etapas, la primera de las cuales es
  **definir los criterios de aceptación**.
- **§20.5:** *"Agile methods do not rely on having a complete system specification for system acceptance testing.
  Rather, stakeholders are closely engaged with the testing process and have the authority to decide when the
  overall system is acceptable."* En ágil la aceptación no es una fase contractual separada sino participación
  continua del stakeholder con autoridad para decidir. **Es justamente la relación que la tesis pone en cuestión
  cuando entra IAG de por medio.**

## 3. Notación uniforme *(pedido: "cajitas y globitos, marea un poquito")*

Se pasó a **BPMN** (estándar OMG, anclado en Dumas et al. 2018 §3.4 y §3.3): como los roles son carriles del mismo
diagrama, la vista principal y la vista por carriles se unifican en **uno solo** y ya no hay dos notaciones que
reconciliar. La leyenda está declarada en el propio diagrama, y el feedback —que en la v1 era una caja de actividad
en la vista por carriles— ahora es un objeto de datos.

## 4. Capa IAG reforzada *(pedido: "reforzar con los 4 artículos")*

Los cuatro artículos están verificados uno por uno (título, autores, venue, DOI) y leídos. Qué respaldo tenía cada
actividad en la v1 y qué se agregó:

| Actividad | Respaldo en la v1 | Qué se agregó ahora |
|---|---|---|
| A1 Desarrollo del incremento | Solo dos **productos** (Devin, Codegen) | Malladi: la implementación es donde más se aplica IAG (código, refactor, bug repair) y generación de tests con TDD/BDD; Cornide-Reyes: código y debugging entre las fases más beneficiadas |
| **A2a** Liberación | **Nada: la actividad no existía** | Malladi: autoría de pipelines y CI/CD con conciencia de calidad; Nguyen-Duc: automatizar *build* y *deployment* sigue siendo pregunta abierta |
| **A2b** Uso y testing de aceptación | **Nada: la actividad no existía** | Nguyen-Duc: el *acceptance testing* **no es foco de los estudios existentes** (gap declarado) y la RQ abierta *"How can GenAI be utilized to automate acceptance criteria from high-level requirements?"*; Cornide-Reyes: el riesgo de validar rápido sacrificando calidad de UX |
| A2c Sprint Review | Dos papers del corpus (Tiny Robots, Meeting Assistants) | Nguyen-Duc: plataformas humano-IA que asisten en tiempo real, habilitando *"instantaneous feedback loops"* → respalda la hipótesis del objetivo B a nivel general |
| A3a Validación de reglas | Dos papers del corpus | Nguyen-Duc: **el límite** — los LLM detectan inconsistencias, pero pueden desviar el proyecto si no las revisan stakeholders con experiencia de dominio |
| A3b Factibilidad técnica | Estaba marcado como *"poco cubierto → gap y foco de PoC"* | Malladi: estimación y repriorización **más consistentes, reduciendo el sesgo humano**, y generación de criterios de aceptación que habilita *trade-offs* informados → **corrige la v1**: ya no es un gap |
| A4 Incorporación al backlog | Tres productos + tres papers del corpus | Malladi: redacción de user stories y *backlog grooming* asistidos; Cornide-Reyes: la planificación es una de las fases más beneficiadas |
| A5 Product Backlog refinement | Dos papers del corpus | Malladi: repriorización dinámica del backlog como área en expansión |

Todo esto quedó en una **tabla de trazabilidad** *actividad → afirmación → fuente* (§4.2 del marco), con cada ítem
etiquetado como **corpus** (mapeo de literatura), **producto** (relevamiento de mercado) o **general** (los cuatro
artículos), para que se pueda auditar.

Dos cosas que conviene decir de frente:

- **Ninguno de los cuatro menciona la Sprint Review** (0 ocurrencias en los cuatro textos completos). Trabajan a
  nivel de etapas del SDLC, no de ceremonias: aportan la capa general, y el zoom fino sigue apoyado en el corpus.
  Es una división razonable, pero mejor decirlo que sobrevender el anclaje.
- **El gap se movió.** Salió de A3b (estimación de esfuerzo, que resultó estar cubierta) y quedó en **A2b**
  (testing y criterios de aceptación), que es además la actividad más pegada al feedback.

Como marco de ubicación, Nguyen-Duc et al. organizan el campo en 11 áreas; nuestro zoom cae en tres:
*Requirements Engineering*, *Quality Assurance* y *Engineering Management*.

## 5. Los cuatro escenarios S1–S4 *(pedido: "la imagen de los cuatro escenarios")*

**Qué son.** Sauvola et al. (2024) proponen cuatro escenarios de cómo se reorganiza el desarrollo de software según
cuánto asume la IA. No son etapas de un proceso ni una predicción temporal: son una **escala de suplantación de
roles humanos**, y el paper modela en cada escenario quién ocupa cuatro funciones (**A** gestión, **B** trabajo,
**C** herramientas, **D** entrega y mantenimiento), con **H** = humano, **IA** = inteligencia artificial y
**T** = herramienta.

| | Escenario | Quién hace qué |
|---|---|---|
| **S1** | *Traditional Software Development Operations* | Humanos en todos los roles; las herramientas aportan la automatización |
| **S2** | *AI in loop* | El humano domina; la IA automatiza partes de tareas repetitivas y asiste en decisiones |
| **S3** | *AI assumes role(s)* | La IA **asume roles** seleccionados; el humano se queda con lo complejo y controla la operación |
| **S4** | *Human-in-the-loop* | La IA gestiona varios roles; el humano pasa a vigilancia (control, calidad, seguridad) |

**Para qué nos sirve.** Es la escala que le faltaba al **objetivo C** (transformación de roles): permite decir *cuánto*
asume la IA en cada área del marco, en lugar de decir solo que "cambia el rol". Ubicadas en la escala: la
**impersonación de stakeholders** implica que la IA asume el rol de quien emite el feedback (**S3**); la
**oralidad → artefacto** y el **chequeo de consistencia** son hoy asistencia con supervisión humana (**S2**); la
**generación → desarrollo automático** apunta a **S4**, aunque el pivote de Tusk y Sweep es contra-evidencia de que
el modo autónomo todavía no cierra.

**La figura:** `diagramas/escenarios_s1_s4.drawio` es una figura **propia**, redibujada a partir de las Tablas 1 y 2
del paper en lugar de reproducir la imagen original, con las columnas A–D y, al costado, dónde cae cada una de
nuestras cuatro grandes áreas.

## 6. Lo que no se tocó

El **punto 5 (grandes áreas)** quedó como estaba, según lo pedido; solo se actualizaron los nombres de actividades y
se agregó la figura de escenarios. El marco v1 del sprint 14 tampoco se editó: queda como registro.

---

## Decisiones a confirmar en la reunión

1. **¿Va el desdoblamiento de A2** en liberación / uso y aceptación / Sprint Review? Es la lectura literal del
   reparo y tiene respaldo en Sommerville §2.3.2, §8.3, §8.4 y §20.5, pero suma dos cajas al diagrama.
2. **¿Se mantiene el analista funcional** como rol, sabiendo que **no existe en Scrum**? (Propuesta: sí, declarado
   como rol de la práctica y anclado en que el PO *"may delegate the responsibility to others"*. Es el intermediario
   del objetivo C.)
3. **¿El Scrum Master queda afuera** del diagrama? (Propuesta: sí, con la ausencia declarada — no es dueño de
   ninguna actividad del loop de feedback.)
4. **¿Cuánto peso darle al hallazgo léxico** (`feedback` = 0 ocurrencias en la Guía)? Da un argumento fuerte para
   justificar el marco como aporte propio y no como copia de Scrum; podría ir en el cuerpo de la tesis y no solo
   como nota al pie.

## Siguiente paso propuesto

Elegir **una** de las cuatro grandes áreas, bien pegada al feedback, para bajar a la PoC. El gap de **A2b**
(criterios de aceptación / testing de aceptación asistido) quedó como candidato con respaldo bibliográfico explícito
—el gap declarado de Nguyen-Duc et al. y §20.5 de Sommerville— y está más pegado al feedback que la generación de
tickets → código.
