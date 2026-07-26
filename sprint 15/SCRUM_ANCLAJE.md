# Anclaje del marco en Scrum — ¿qué dice la fuente oficial y dónde entra el feedback?

> **Ticket 4 + primera mitad del ticket 1** del sprint 15. Responde al pedido de la call del 9 de jul:
> anclar el diagrama de etapas en bibliografía, rascar la Sprint Review y armonizar Scrum con nuestro contexto.
>
> **Fuente primaria:** *The 2020 Scrum Guide™*, Ken Schwaber & Jeff Sutherland, © 2020, licencia CC BY-SA 4.0.
> Copia en `fuentes_marco/2020-Scrum-Guide-US.pdf` (14 pp.); texto plano en `fuentes_marco/scrumguide2020.txt`.
> **Todas las citas en inglés de este documento se verificaron literalmente contra ese PDF.**

---

## 1. Para qué sirve este documento

El marco del sprint 14 (`sprint 14/MARCO_PROCESO_FEEDBACK.md`) describía la etapa de feedback con
nombres propios (A1–A5) y sin fuente. Este documento hace tres cosas, en este orden:

1. Establece **qué dice Scrum** sobre las actividades del proceso (para poder citar en vez de asumir).
2. Establece **qué Scrum NO dice** — y muestra que esa ausencia está **declarada por la propia Guía**,
   lo que convierte el reparo del tutor en un argumento citable del marco en lugar de un parche.
3. Propone el **mapeo A1–A5 → vocabulario Scrum**, con los renombres que hay que llevar al diagrama.

---

## 2. Qué es Scrum según la Guía 2020

> *"Scrum is a lightweight framework that helps people, teams and organizations generate value through
> adaptive solutions for complex problems."*

Estructura completa del framework (esto es lo que se puede citar como "las actividades del proceso"):

| Categoría | Elementos |
|---|---|
| **Accountabilities** (no "roles") | Developers · Product Owner · Scrum Master |
| **Events** (5) | The Sprint · Sprint Planning · Daily Scrum · **Sprint Review** · Sprint Retrospective |
| **Artifacts** (3) + su *commitment* | Product Backlog → *Product Goal* · Sprint Backlog → *Sprint Goal* · Increment → *Definition of Done* |
| **Pilares empíricos** | transparency · inspection · adaptation |

Detalles que importan para nuestro marco:

- **El Sprint es el contenedor:** *"All the work necessary to achieve the Product Goal, including Sprint
  Planning, Daily Scrums, Sprint Review, and Sprint Retrospective, happen within Sprints."* Y además:
  *"Each Sprint may be considered a short project."*
- **El equipo es cross-funcional y sin sub-equipos:** *"Within a Scrum Team, there are no sub-teams or
  hierarchies"*, y es *"responsible for all product-related activities from stakeholder collaboration,
  verification, maintenance, operation, experimentation, research and development, and anything else that
  might be required."*
- **El PO puede delegar, pero sigue siendo el responsable:** *"The Product Owner may do the above work or
  may delegate the responsibility to others. Regardless, the Product Owner remains accountable."*
  → **Este es el anclaje del rol 🟨 AF**: la Guía habilita que otra persona haga el trabajo de backlog
  sin crear una accountability nueva (ver §6).
- **Cómo entra un pedido al backlog:** *"Those wanting to change the Product Backlog can do so by trying
  to convince the Product Owner."* → anclaje de nuestra actividad A4.
- **Refinamiento (término oficial):** *"Product Backlog refinement is the act of breaking down and further
  defining Product Backlog items into smaller more precise items. This is an ongoing activity..."*
  → anclaje de A5. Ojo: **es una actividad continua, no un evento**.

---

## 3. La Sprint Review, textual

Sección completa de la Guía (p. 9), que es donde el tutor pidió hacer el zoom:

> *"The purpose of the Sprint Review is to inspect the outcome of the Sprint and determine future
> adaptations. The Scrum Team presents the results of their work to key stakeholders and progress toward
> the Product Goal is discussed.*
>
> *During the event, the Scrum Team and stakeholders review what was accomplished in the Sprint and what
> has changed in their environment. Based on this information, attendees collaborate on what to do next.
> The Product Backlog may also be adjusted to meet new opportunities. **The Sprint Review is a working
> session and the Scrum Team should avoid limiting it to a presentation.***
>
> *The Sprint Review is the second to last event of the Sprint and is timeboxed to a maximum of four hours
> for a one-month Sprint. For shorter Sprints, the event is usually shorter."*

Y en la sección del Increment (p. 12):

> *"Multiple Increments may be created within a Sprint. The sum of the Increments is presented at the Sprint
> Review thus supporting empiricism. However, **an Increment may be delivered to stakeholders prior to the
> end of the Sprint. The Sprint Review should never be considered a gate to releasing value.**"*

### 3.1. Las tres consecuencias que esto tiene para la tesis

**(a) El reparo del tutor tiene respaldo en la fuente oficial.** Daniel objetó que scrum.org plantea la
review como *"una reunioncita donde invitamos a nuestros stakeholders... y ellos nos dicen bárbaro,
sigamos"*. La Guía dice exactamente lo contrario: es una *working session* y no debe limitarse a una
presentación. La lectura "reunión de demo" es de los materiales divulgativos, no del estándar.

**(b) La liberación está explícitamente desacoplada de la ceremonia.** La review *"should never be
considered a gate to releasing value"* y el incremento *puede entregarse antes del fin del Sprint*.
Es decir: **el feedback del cliente puede llegar antes de la ceremonia y por fuera de ella** — que es
justo lo que hipotetiza la tesis sobre frecuencia, secuencia y temporalidad (objetivo B). No es una
licencia nuestra: es lo que habilita el propio framework.

**(c) La ceremonia no alcanza para contener lo que estudiamos.** La review es un evento *timeboxed* de
≤ 4 h. La liberación, el uso del producto por el negocio y la detección de errores no caben ahí ni están
definidos ahí. Eso lleva directo a §4.

---

## 4. El hueco: lo que Scrum NO cubre (y lo dice la Guía)

Esta es la pieza que faltaba para armonizar. La Guía **declara su propia incompletitud**:

> *"Scrum is simple. Try it as is and determine if its philosophy, theory, and structure help to achieve
> goals and create value. **The Scrum framework is purposefully incomplete, only defining the parts required
> to implement Scrum theory.** Scrum is built upon by the collective intelligence of the people using it.
> Rather than provide people with detailed instructions, the rules of Scrum guide their relationships and
> interactions."*

> *"Scrum exists only in its entirety and functions well as a **container for other techniques,
> methodologies, and practices**."* (End Note)

### 4.1. Evidencia léxica (conteo sobre el texto completo de la Guía, 14 pp.)

| Término | Ocurrencias |
|---|---|
| `inspect` / `inspection` | 23 |
| `adapt` / `adaptation` | 18 |
| `stakeholder` | 13 |
| `quality` | 4 |
| `verif*` (verified/verification) | 2 |
| `valid*` | 1 |
| `customer` | 1 |
| `user` | 1 |
| **`feedback`** | **0** |
| **`test` / `testing`** | **0** |
| **`acceptance`** | **0** |
| **`release`** | **1** (solo como verbo: *"it cannot be released or even presented at the Sprint Review"*) |

> Reproducible: `grep -o -i "<término>" fuentes_marco/scrumguide2020.txt | wc -l`.

**Esto es un hallazgo fuerte y citable:** el objeto de estudio de la tesis —el *feedback*— **no es un
término del framework**. Scrum lo cubre indirectamente vía *inspection* / *adaptation* y vía la
participación de *stakeholders* en la review. Y la parte de ingeniería (testing, aceptación, liberación)
está fuera por diseño: es el *"container for other techniques"*.

### 4.2. De dónde sale, entonces, cada pieza que Scrum no define

| Pieza de nuestra etapa de feedback | ¿Está en Scrum? | Anclaje propuesto |
|---|---|---|
| Construcción del incremento (inner loop, PR) | ❌ solo el *qué* (Increment + DoD), no el *cómo* | **Sommerville (2016) §7.3** *implementation issues*; Pressman & Maxim (2020), marco de proceso genérico |
| **Liberación / despliegue al entorno donde el negocio lo usa** | ❌ desacoplada por diseño (*"never a gate to releasing value"*) | **Sommerville (2016) §2.3.2** — el incremento *"is installed in the customer's normal working environment"* — y **§8.3** *release testing*; Humble & Farley (2010) |
| **Testing de aceptación / uso real por el usuario** | ❌ (`acceptance` y `test`: 0 ocurrencias) | **Sommerville (2016) §8.4** *user testing* (alpha, beta y acceptance; seis etapas, la primera define los criterios) y **§20.5** — en ágil *"stakeholders are closely engaged with the testing process and have the authority to decide when the overall system is acceptable"* |
| Presentación e inspección del incremento con stakeholders | ✅ **Sprint Review** | Scrum Guide (2020), p. 9 |
| Validación de reglas y flujos de negocio | ❌ | **Dumas et al. (2018) §4.4** (reglas de negocio en el modelo de proceso) y **§5.4.2** (validar *"can only be done by talking to the process participants and by consulting the available documentation"*); Sommerville (2016), validación de requisitos |
| Validación de factibilidad técnica / impacto | ❌ parcial (Developers *"creating a plan"*, PO *trade-offs*) | **Sommerville (2016) §25.3** — flujo de *change request* con análisis de costo/impacto |
| Registro del pedido y entrada al backlog | ✅ parcial (*"convince the Product Owner"*) | Scrum Guide (2020), p. 6 |
| Refinamiento y ordenamiento del backlog | ✅ **Product Backlog refinement** + PO *ordering* | Scrum Guide (2020), pp. 5, 10 |
| Rol de intermediario negocio↔técnica (AF) | ❌ no existe la accountability | Scrum Guide (2020), delegación del PO (p. 6) + BABOK v3 (IIBA, 2015) / Sommerville (2016), ingeniería de requisitos |

> **Estado de verificación de las fuentes secundarias:**
> - ✅ **Scrum Guide 2020** — citas verificadas literalmente contra el PDF oficial.
> - ✅ **Sommerville (2016)** — verificado contra el ejemplar (10ª ed., Global Edition): §2.3.2 entrega
>   incremental · §4.5 validación de requisitos · §4.6 cambio de requisitos · §7.3 implementación ·
>   §8.3 *release testing* · §8.4 *user / acceptance testing* · §20.5 aceptación en ágil · §25.3 gestión de
>   cambios. Detalle con citas textuales en `FUENTES_MARCO.md` §a.2.
> - ✅ **Dumas et al. (2018)** — verificado contra el ejemplar (2ª ed.): §1.4 ciclo BPM · §3.3 objetos de datos ·
>   §3.4 pools y carriles · §4.4 reglas de negocio · §5.2.2 entrevistas · §5.4.2 validación semántica.
>   Detalle en `FUENTES_MARCO.md` §a.1.
> - ⚠️ Quedan a nivel de concepto solo las fuentes **de refuerzo**, que no sostienen ninguna afirmación por sí
>   solas: Pressman & Maxim (2020), Humble & Farley (2010) y BABOK v3. Cada pieza del marco tiene ya un anclaje
>   verificado, así que estas son prescindibles.
>
> Se descartó **ISO/IEC/IEEE 29119**: es un estándar pago y §8.4 de Sommerville cubre el testing de aceptación.

---

## 5. Propuesta de armonización: la "etapa de revisión ampliada"

Consecuencia de §3 y §4: el zoom **no** es la Sprint Review sola. Es una **etapa de revisión** de la que
la Sprint Review es *un* momento — el único que Scrum define. Composición propuesta:

```
 ┌─────────────────────── ETAPA DE REVISIÓN (zoom de la tesis) ───────────────────────┐
 │                                                                                    │
 │   Liberación del          Uso y testing de            Sprint Review                │
 │   incremento         →    aceptación por el      →    (evento Scrum,               │
 │   (fuera de Scrum)        negocio (fuera de Scrum)     working session)            │
 │        │                        │                          │                       │
 │        └────────────────────────┴──────────────────────────┘                       │
 │                          feedback del negocio                                      │
 └────────────────────────────────────────────────────────────────────────────────────┘
                                      ↓
              validación (reglas de negocio · factibilidad técnica)
                                      ↓
                  entrada al Product Backlog → refinement → próximo Sprint
```

Dos precisiones importantes:

- **El feedback entra por más de un canal y en más de un momento.** No solo en la ceremonia: como el
  incremento puede entregarse antes del fin del Sprint, el uso real del producto genera feedback
  *asincrónico*. Distinguir estos canales es material directo para el objetivo B (frecuencia, secuencia,
  granularidad, temporalidad).
- **Lo que está fuera de Scrum se marca como fuera de Scrum en el diagrama.** No se disfraza de Scrum:
  se declara que el framework es *purposefully incomplete* y se cita el anclaje de cada pieza. Eso es más
  defendible que forzar todo dentro de las ceremonias.

---

## 6. Roles: nuestro set vs. las accountabilities de Scrum

| Nuestro rol (sprint 14) | ¿Existe en Scrum? | Resolución propuesta |
|---|---|---|
| 🟧 **PO** — Product Owner | ✅ accountability | Se mantiene con el nombre oficial |
| 🟩 **DEV** — Equipo técnico | ✅ *Developers* | Renombrar a **Developers**. Nota: Scrum no tiene rol de QA separado; el testing vive dentro de Developers vía Definition of Done |
| 🟦 **CLI** — Cliente / stakeholder | ⚠️ *stakeholder* es término de la Guía, pero **no** es accountability (está fuera del Scrum Team) | Mantener como actor externo, usando el término **stakeholder** |
| 🟨 **AF** — Analista funcional | ❌ no existe | **Mantenerlo**, declarado explícitamente como rol de la práctica y no de Scrum, anclado en la delegación del PO (*"may delegate the responsibility to others"*) + BABOK/RE. Es un rol central del objetivo C: el intermediario cuya mediación la IAG pone en cuestión |
| — **Scrum Master** | ✅ accountability | **Ausente de nuestro marco a propósito**: no es dueño de ninguna actividad del loop de feedback (su rol es de facilitación). Declararlo para que no parezca un olvido |

---

## 7. Mapeo A1–A5 → vocabulario Scrum (renombres para el diagrama)

Las **ideas se mantienen**; cambian los nombres para que sean citables. Esto es lo que la Fase 2 lleva al BPMN.

| Actual | Propuesto | Vocabulario / anclaje | Comentario |
|---|---|---|---|
| A1 — Construcción y entrega del incremento | **A1 — Desarrollo del incremento** | *Sprint*, *Increment*, *Definition of Done* (Scrum) + construcción (Pressman) | Sigue siendo contexto. La entrega se separa y pasa a A2a |
| A2 — Sprint Review / demo | **A2a — Liberación del incremento** ⚠️ *fuera de Scrum* | *release* (Humble & Farley) | Se desdobla. Fundamento: *"never a gate to releasing value"* |
| " | **A2b — Uso y testing de aceptación** ⚠️ *fuera de Scrum* | *acceptance / user testing* (Sommerville §8.4 y §20.5) | Es la parte que el tutor extrañaba |
| " | **A2c — Sprint Review** | Scrum Guide, p. 9 | Sacar la palabra "demo": la Guía dice que **no** debe limitarse a una presentación |
| A3a — Validación de reglas de negocio | **A3a — Validación de reglas de negocio** ⚠️ *fuera de Scrum* | Ciclo BPM (Dumas et al.) | Nombre se mantiene; se explicita que no es Scrum |
| A3b — Validación de factibilidad técnica | **A3b — Validación de factibilidad técnica** ⚠️ *parcial* | Developers *"creating a plan"*; PO *trade-offs* | Ídem |
| A4 — Registro y traducción del feedback | **A4 — Incorporación del feedback al Product Backlog** | *"convince the Product Owner"* (Scrum, p. 6) | Queda anclado y con nombre Scrum |
| A5 — Refinamiento y repriorización del backlog | **A5 — Product Backlog refinement** | Término textual de la Guía (p. 10) + *ordering* del PO (p. 5) | Ojo: es **actividad continua**, no evento; el diagrama no debería dibujarla como ceremonia |

---

## 8. Decisiones abiertas para consultar con Daniel

1. **¿Se adopta el desdoblamiento de A2** en liberación / uso y aceptación / Sprint Review? Es la
   traducción directa de su reparo, pero agrega tres cajas al diagrama.
2. **¿Se mantiene el AF** como rol, sabiendo que no existe en Scrum? (Recomendación: sí — es el
   intermediario del objetivo C. Se declara como rol de la práctica.)
3. **¿Se incluye el Scrum Master** en el diagrama aunque no sea dueño de actividades del loop?
   (Recomendación: no, con la ausencia declarada.)
4. **¿Cuánto peso darle al hallazgo léxico** (`feedback` = 0 ocurrencias en la Guía)? Da un argumento
   fuerte para justificar por qué el marco es un aporte propio y no una copia de Scrum. Podría ir en el
   cuerpo de la tesis, no solo como nota.

---

_Última actualización: 2026-07-26 — Fase 1 del sprint 15._
