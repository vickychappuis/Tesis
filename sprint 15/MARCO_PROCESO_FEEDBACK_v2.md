# Marco del proceso de desarrollo — zoom en la etapa de feedback

> Modelo de proceso de la etapa de feedback —actividades, roles, entradas, salidas y objetivos—, con una capa que
> describe cómo cada actividad podría potenciarse con IAG.
>
> **Fuente normativa del proceso:** *The 2020 Scrum Guide™*, Schwaber & Sutherland, licencia CC BY-SA 4.0. Todas las
> citas en inglés de este documento están verificadas literalmente contra el PDF oficial (`fuentes_marco/`). Lo que
> el framework no define se marca con **⚠** y se ancla en literatura de ingeniería de software; las secciones exactas
> y sus citas textuales están en `FUENTES_MARCO.md`.

---

## 1. Delimitación del zoom

El desarrollo transcurre en iteraciones de longitud fija —Sprints—, cada una de las cuales produce un incremento de
producto. Al final de cada iteración ese incremento llega al negocio, que lo usa, lo evalúa y devuelve feedback; ese
intercambio es lo que reabre el ciclo.

**Ese tramo es el objeto de este marco y lo llamamos *etapa de feedback*.** Va desde que el incremento llega al
negocio hasta que el backlog queda listo para la próxima iteración, y se compone de tres bloques:

| Bloque                                              | Actividades   | Qué pasa ahí                                                              |
| --------------------------------------------------- | ------------- | ------------------------------------------------------------------------- |
| **Entrega y revisión del incremento** ← *el núcleo* | A2a, A2b, A2c | El incremento llega al negocio y **se genera el feedback**                |
| Validación del feedback                             | A3a, A3b      | Se contrasta contra las reglas de negocio y contra lo técnicamente viable |
| Incorporación al backlog                            | A4, A5        | El feedback se vuelve trabajo priorizado y reabre el ciclo                |

El **núcleo** es el primer bloque: es donde el negocio ve el producto y reacciona, y es el que la Sprint Review sola
no alcanza a cubrir (sección 2.2). El desarrollo del incremento (**A1**) entra solo como contexto: produce la versión
que el negocio ve, pero no es el foco.

**Entra:** desde que hay un incremento (v ≥ 0.1 **con código**) que llega al negocio, y el feedback externo que
desencadena hasta el siguiente entregable.

**Queda fuera:** discovery / elicitación inicial, validación de prototipo, diseño UX temprano, y el uso en
producción / evolución (feedback posterior a la aceptación).

---

## 2. Base normativa: qué define Scrum y qué no

El proceso se describe con el vocabulario de Scrum porque es el marco de gestión más extendido y da nombres
establecidos a actividades, artefactos y roles. Ahora bien, Scrum no cubre todo lo que ocurre en la etapa de
feedback, y esa insuficiencia no es una interpretación nuestra: la Guía la declara. Esta sección establece qué dice
la fuente oficial, qué no dice, y de dónde sale cada pieza que falta.

### 2.1. Qué define Scrum

> *"Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive
> solutions for complex problems."*

| Categoría                           | Elementos                                                                                            |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Accountabilities** (no "roles")   | Developers · Product Owner · Scrum Master                                                            |
| **Events** (5)                      | The Sprint · Sprint Planning · Daily Scrum · **Sprint Review** · Sprint Retrospective                |
| **Artifacts** (3) + su *commitment* | Product Backlog → *Product Goal* · Sprint Backlog → *Sprint Goal* · Increment → *Definition of Done* |
| **Pilares empíricos**               | transparency · inspection · adaptation                                                               |

Cuatro definiciones de la Guía anclan actividades y roles concretos de este marco:

- **El Sprint es el contenedor:** *"All the work necessary to achieve the Product Goal, including Sprint Planning,
  Daily Scrums, Sprint Review, and Sprint Retrospective, happen within Sprints."*
- **El Product Owner puede delegar sin dejar de ser responsable:** *"The Product Owner may do the above work or may
  delegate the responsibility to others. Regardless, the Product Owner remains accountable."* → habilita la
  participación del analista funcional en las actividades ancladas en Scrum (sección 3.2), sin crear una
  accountability nueva.
- **Cómo entra un pedido al backlog:** *"Those wanting to change the Product Backlog can do so by trying to convince
  the Product Owner."* → ancla la actividad **A4**.
- **Refinamiento, término oficial:** *"Product Backlog refinement is the act of breaking down and further defining
  Product Backlog items into smaller more precise items. This is an ongoing activity..."* → ancla **A5**, y establece
  que es una actividad **continua, no un evento**.

### 2.2. La Sprint Review, textual

Es el único momento del núcleo que Scrum define, y conviene leerlo completo (p. 9):

> *"The purpose of the Sprint Review is to inspect the outcome of the Sprint and determine future adaptations. The
> Scrum Team presents the results of their work to key stakeholders and progress toward the Product Goal is discussed.*
>
> *During the event, the Scrum Team and stakeholders review what was accomplished in the Sprint [...] The Product
> Backlog may also be adjusted to meet new opportunities. **The Sprint Review is a working session and the Scrum Team
> should avoid limiting it to a presentation.***
>
> *[...] is timeboxed to a maximum of four hours for a one-month Sprint."*

Y en la sección del Increment (p. 12):

> *"Multiple Increments may be created within a Sprint. The sum of the Increments is presented at the Sprint Review
> thus supporting empiricism. However, **an Increment may be delivered to stakeholders prior to the end of the Sprint.
> The Sprint Review should never be considered a gate to releasing value.**"*

De estos dos pasajes se siguen tres consecuencias para el modelo:

**(a) La ceremonia no es una reunión de aprobación.** La lectura habitual —mostrar el incremento y obtener el visto
bueno— proviene del material introductorio de scrum.org, que resume el framework y al resumir omite matices. No es
que las fuentes se contradigan: la Guía es explícita en que la review es una *working session* que **no debe
limitarse a una presentación**.

**(b) La liberación está desacoplada de la ceremonia por diseño.** El incremento puede entregarse antes del fin del
Sprint y la review *"should never be considered a gate to releasing value"*. Es decir: **el feedback del negocio
puede llegar antes de la ceremonia y por fuera de ella**. No es una licencia de este marco, lo habilita el framework.

**(c) La ceremonia no alcanza para contener lo que se estudia.** La review es un evento acotado a un máximo de cuatro
horas. La liberación, el uso del producto por el negocio y la detección de errores no caben ahí ni están definidos
ahí — de ahí que el núcleo de la etapa sean tres actividades y no una.

Consecuencia para el **objetivo B**: el feedback tiene **dos canales y dos momentos** —el uso real del producto, que
puede ser asincrónico y anterior a la ceremonia, y la ceremonia misma—, que es exactamente lo que la tesis indaga en
términos de frecuencia, secuencia, granularidad y temporalidad.

### 2.3. Lo que Scrum no define

La Guía **declara su propia incompletitud**:

> *"The Scrum framework is purposefully incomplete, only defining the parts required to implement Scrum theory.
> [...] Rather than provide people with detailed instructions, the rules of Scrum guide their relationships and
> interactions."*

> *"Scrum exists only in its entirety and functions well as a **container for other techniques, methodologies, and
> practices**."* (End Note)

El conteo léxico sobre el texto completo (14 pp.) lo confirma: `inspect`/`inspection` (23) y `adapt`/`adaptation`
(18) son centrales; `feedback`, `test`/`testing` y `acceptance` no aparecen ni una vez.

El objeto de estudio de esta tesis —el *feedback*— **no es un término del framework**: Scrum lo cubre indirectamente
vía *inspection* / *adaptation* y vía la participación de *stakeholders* en la review. La parte de ingeniería
—construcción, liberación, testing de aceptación, validación de reglas, análisis de impacto— queda fuera por
diseño, porque el framework se define como contenedor de otras prácticas. Esas piezas se apoyan en **Sommerville
(2016)** y **Dumas et al. (2018)**, verificados sección por sección contra los ejemplares (citas en
`FUENTES_MARCO.md` sec. a.1 y a.2); cada actividad del modelo lleva su anclaje puntual en las tablas de la
sección 3.

---

## 3. El modelo de proceso

> **⚠** = actividad de la práctica **no definida en Scrum**, con su anclaje propio.

**Contexto** — lo que produce la versión que ve el negocio; no es el foco.

| #   | Actividad                                                         | Roles          | Entradas                           | Salidas                       | Objetivo               | Anclaje                                                                              |
| --- | ----------------------------------------------------------------- | -------------- | ---------------------------------- | ----------------------------- | ---------------------- | ------------------------------------------------------------------------------------ |
| A1  | Desarrollo del incremento *(incluye inner loop y revisión de PR)* | Developers, PO | Sprint Backlog, Definition of Done | *Increment* que cumple la DoD | Producir el incremento | Scrum: *Sprint*, *Increment*, *DoD*; el **cómo** no lo define → Sommerville sec. 7.3 |

**▶ Entrega y revisión del incremento — EL NÚCLEO DE LA ETAPA.** Es donde el incremento llega al negocio y se
genera el feedback. Son tres momentos, y **solo el último está definido por Scrum** (ver sección 2.2):

| #   | Actividad                         | Roles                            | Entradas                                     | Salidas                                           | Objetivo                                                       | Anclaje                                              |
| --- | --------------------------------- | -------------------------------- | -------------------------------------------- | ------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------- |
| A2a | **Liberación del incremento** ⚠   | Developers                       | Increment                                    | Incremento liberado, accesible al negocio         | Poner el incremento en manos del negocio                       | ⚠ fuera de Scrum → Sommerville sec. 2.3.2 y sec. 8.3 |
| A2b | **Uso y testing de aceptación** ⚠ | Stakeholder (+ AF)               | Incremento liberado, criterios de aceptación | Observaciones, cambios, bugs detectados en el uso | Que el negocio use el producto y detecte desvíos               | ⚠ fuera de Scrum → Sommerville sec. 8.4 y sec. 20.4  |
| A2c | **Sprint Review**                 | PO, Developers, Stakeholders, AF | Suma de incrementos, Product Goal            | Feedback del negocio; Product Backlog ajustado    | Inspeccionar el resultado del Sprint y determinar adaptaciones | Scrum Guide p. 9 — *working session*, ≤ 4 h          |

**Tratamiento del feedback** — qué se hace con lo que el negocio devolvió.

| #   | Actividad                                         | Roles             | Entradas                                                 | Salidas                                                    | Objetivo                                                 | Anclaje                                                                |
| --- | ------------------------------------------------- | ----------------- | -------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------- |
| A3a | Validación de reglas de negocio ⚠                 | AF ↔ Stakeholder  | Feedback, reglas y flujos definidos                      | Discrepancias, ajustes, aceptación/rechazo                 | Confirmar que el pedido respeta la regla de negocio real | ⚠ fuera de Scrum → Dumas sec. 4.4 y sec. 5.4.2; Sommerville sec. 4.5   |
| A3b | Validación de factibilidad técnica ⚠ *(parcial)*  | Developers (+ PO) | Feedback, código/arquitectura, requisitos no funcionales | Evaluación de viabilidad, impacto y esfuerzo; alternativas | Confirmar que lo pedido es viable y a qué costo          | ⚠ parcial en Scrum → Sommerville sec. 25.3 (análisis de costo/impacto) |
| A4  | **Incorporación del feedback al Product Backlog** | AF, PO            | Feedback crudo (call, mail, bugs)                        | Ítems de Product Backlog                                   | Convertir feedback disperso en trabajo accionable        | Scrum Guide p. 6 — *convince the Product Owner*; Sommerville sec. 4.6 (gestión del cambio) |
| A5  | **Product Backlog refinement** ↻                  | PO (+ Developers) | Ítems nuevos + Product Backlog                           | Product Backlog ordenado y refinado                        | Decidir qué entra en la próxima iteración → reabre A1    | Scrum Guide p. 10 — término textual. **Continua, no evento**           |

> Citas textuales de cada anclaje: `FUENTES_MARCO.md` sec. a.1 (Dumas) y sec. a.2 (Sommerville).

### 3.1. Correspondencia con el ciclo de vida

El diagrama de ciclo de vida elaborado previamente (`sprint 12/CICLO_DE_VIDA.md`) numera los ciclos de feedback
como L1–L5. Este marco hace zoom sobre una parte: **A1** pliega los loops técnicos internos del equipo (L3a, inner
loop del desarrollador, y L3b, revisión de PR); **A2a–A2c** son el loop de incremento (L3); **A3a** es la validación
de reglas de negocio (L4). El discovery inicial (L1), la validación de prototipo (L2) y la evolución del producto en
producción (L5) quedan **fuera**.

### 3.2. Roles

| Rol                         | ¿Scrum?                                             | Nota                                                                                                                                                                                                                          |
| --------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Product Owner**           | ✅ accountability                                    | —                                                                                                                                                                                                                             |
| **Developers**              | ✅ accountability                                    | Scrum no tiene rol de QA separado: el testing vive dentro de Developers vía Definition of Done                                                                                                                                |
| **Stakeholder / cliente**   | ⚠ término de la Guía, pero **no** es accountability | Participante externo al Scrum Team                                                                                                                                                                                            |
| **Analista funcional (AF)** | ❌ no es accountability                              | Puente negocio↔técnico anclado fuera de Scrum, en L1/L2/L4 (`sprint 12/CICLO_DE_VIDA.md`). No es el equivalente del PO: el AF vive en los loops de negocio, el PO dentro del sprint. En A2c y A4 participa como delegado del PO —*"may delegate the responsibility to others"*—. Es el intermediario cuya mediación la IAG pone en cuestión (objetivo C) |
| Scrum Master                | ✅ accountability                                    | **Ausente del marco a propósito**: no es dueño de ninguna actividad del loop de feedback                                                                                                                                      |

---

## 4. Diagrama

![Etapa de revisión y feedback — vista BPMN](diagramas/marco_feedback_bpmn.png)

**Notación:** BPMN, anclada en Dumas et al. (2018) sec. 3.4 para pools y carriles y sec. 3.3 para objetos de datos. El
vocabulario de actividades y artefactos viene de la Scrum Guide 2020.
**Fuente editable:** `diagramas/marco_feedback_bpmn.drawio` (draw.io); el PNG se re-exporta desde ahí.

La leyenda —una sola semántica para todo el diagrama— va dentro de la figura.

---

## 5. Capa con IAG

Por cada actividad de la sección 3, las soluciones con IAG que podrían aplicarla. Lo que **no** cambia es el proceso ni los
roles; cambia **quién** ejecuta la tarea y **cómo**.

Cada ítem indica su fuente y, cuando aplica, la sección exacta, de modo que la lista misma sirve de tabla de
trazabilidad. Las fuentes son de tres tipos:

- **[general]** — los cuatro artículos sobre IAG en el desarrollo (`FUENTES_MARCO.md` sec. b): hablan del proceso en
  términos generales, por etapa del SDLC. (Las secciones de Nguyen-Duc et al. remiten al preprint; ver
  `FUENTES_MARCO.md` sec. b.)
- **[corpus]** — paper del mapeo de literatura (`sprint 12/REFERENCIAS.md`): evidencia puntual. Cada cita lleva su
  clave BibTeX de `sprint 12/REFERENCIAS.bib` para que la trazabilidad no dependa del nombre corto.
- **[producto]** — producto o empresa relevada como *state of practice*: evidencia de mercado, no académica.

### 5.1. Por actividad

> Se cubren las ocho actividades para que la tabla de trazabilidad quede completa, pero el peso no es parejo:
> **▶** marca el núcleo de la etapa (A2a–A2c, sección 1), que es donde se enfoca la tesis — y dentro de él, **A2b**
> concentra el gap declarado (ver la nota tras A3b). El resto (A1, A3a–A5) se releva solo para mostrar dónde la
> literatura ya cubre y que el hueco quede en contraste.

#### A1 — Desarrollo del incremento *(contexto)*

- Es la etapa de mayor aplicación de IAG: copilotos que aceleran codificación, refactorización, reparación de bugs y
  generación de tests (TDD/BDD, localización de defectos), ya con validación empírica
  **[general: Malladi & Sudheer Reddy, 2025, sec. III]**; casos de prueba autogenerados, una de las fases más
  beneficiadas **[general: Cornide-Reyes et al., 2025, RQ3]**.
- Agentes que generan o ajustan el incremento a partir del ticket **[productos: Devin, Codegen]**.

#### ▶ A2a — Liberación del incremento ⚠

- Autoría de pipelines y prácticas de CI/CD con conciencia de calidad
  **[general: Malladi & Sudheer Reddy, 2025, sec. III]**; la automatización de *build* y *deployment* sigue
  planteada como **pregunta de investigación abierta** **[general: Nguyen-Duc et al., 2025, sec. 4.6.2]** → zona
  poco resuelta.

#### ▶ A2b — Uso y testing de aceptación ⚠

- **Gap declarado:** el *acceptance testing* (junto con integración y atributos de calidad) **no es foco de los
  estudios existentes**, con pregunta abierta sobre cómo automatizarlo desde requisitos de alto nivel —*"How can
  GenAI be utilized to automate acceptance criteria from high-level requirements?"*
  **[general: Nguyen-Duc et al., 2025, sec. 4.4.2 y 4.4.5]**.
- Reportes de bug en lenguaje natural → bug completo con pasos de reproducción **[corpus: Bug Tracking GenAI ·
  `torun2025bugtracking`]**.
- **Límite:** usar IAG para validar rápido puede terminar sacrificando calidad de UX en favor de la velocidad de
  entrega **[general: Cornide-Reyes et al., 2025, sec. 1]**.

#### ▶ A2c — Sprint Review

- Stakeholder-IA impersonado que emite feedback de forma continua, sin esperar la ceremonia
  **[corpus: Designing Tiny Robots · `raftopoulos2024designing`]**.
- Asistente que resume la reunión y detecta riesgos e impedimentos **[corpus: Meeting Assistants ·
  `cabrero2024exploring`]**.
- A nivel general, se proyecta un modo de trabajo de plataformas colaborativas humano-IA que asisten a expertos de
  dominio, ingenieros de requisitos y usuarios **en tiempo real**, habilitando *"instantaneous feedback loops"* y
  refinamiento iterativo como nueva norma **[general: Nguyen-Duc et al., 2025, área *Requirements Engineering*]**
  → sostiene la hipótesis del objetivo B sobre frecuencia y temporalidad.

#### A3a — Validación de reglas de negocio ⚠

- Chequear el pedido contra los requisitos y reglas ya definidos, detectando conflictos **[corpus: Integrating LLMs
  into RE · `stein2026integrating`]**; detectar si el pedido ya está cubierto o implementado **[corpus: Closing the
  Loop US↔GUI · `kretzer2025closing`]**.
- A nivel general: los LLMs detectan requisitos superfluos, incorrectos o inconsistentes en un contexto de dominio,
  **pero** esas inconsistencias pueden desviar el proyecto si no son revisadas meticulosamente por stakeholders con
  experiencia **[general: Nguyen-Duc et al., 2025, área *Requirements Engineering*]** → el chequeo automático no
  reemplaza la validación humana.

#### A3b — Validación de factibilidad técnica ⚠

- Estimación de esfuerzo/impacto y generación de criterios de aceptación dan repriorización **más consistente,
  reduciendo el sesgo humano**, y permiten a POs y developers **tomar decisiones de trade-off informadas** durante
  los releases iterativos **[general: Malladi & Sudheer Reddy, 2025, sec. V]**.
- Detectar desalineación entre la intención y el sistema **[corpus: Requirements are All You Need ·
  `robinson2025requirements`]**.

> La estimación de esfuerzo **está cubierta** a nivel general; el hueco declarado en la literatura está en **A2b**
> (criterios y testing de aceptación), que es el candidato natural para profundizar.

#### A4 — Incorporación del feedback al Product Backlog

- Voz o call → tickets / user stories con criterios de aceptación **[productos: PM Agent, Versive, Kraftful;
  corpus: Towards Human-AI Synergy · `abbasi2025towards`]**, incluyendo reformular o mejorar la expresión del
  feedback del stakeholder **[corpus: Supporting Stakeholder Requirements Expression · `mircea2026supporting`]**.
- A nivel general: los LLMs asisten en la redacción de user stories y en el *backlog grooming*, mejorando la
  precisión de estimación y planificación **[general: Malladi & Sudheer Reddy, 2025, sec. III y sec. V]**; la planificación (análisis
  de requisitos y generación de user stories) es una de las fases del ciclo ágil más beneficiadas
  **[general: Cornide-Reyes et al., 2025, RQ3]**.

#### A5 — Product Backlog refinement ↻

- Evaluar la calidad de los ítems del backlog y recomendar mejoras **[corpus: Epic Evaluator · `geyer2025epics`]**,
  detectar riesgos de sobrecompromiso al priorizar **[corpus: Meeting Assistants · `cabrero2024exploring`]**, y
  repriorización dinámica del backlog como área en expansión **[general: Malladi & Sudheer Reddy, 2025, sec. III]**.

### 5.2. Alcance de las dos capas de evidencia

La capa **general** (los cuatro artículos sobre IAG en el desarrollo) aporta el respaldo por etapa del SDLC, **dos
gaps declarados** —testing de aceptación y automatización de build/deployment, ambos de Nguyen-Duc et al.— y dos
marcos de encuadre: los escenarios S1–S4 (sección 6.5) y las **11 áreas** de Nguyen-Duc et al., que ubican este zoom en
*Requirements Engineering*, *Quality Assurance* y *Engineering Management*.

Ninguno de los cuatro menciona la **Sprint Review** ni las ceremonias (0 ocurrencias): el zoom fino en el momento del
feedback está sostenido por la capa **corpus**, que aporta la evidencia puntual. Conviene explicitarlo para no
sobrevender el anclaje.

---

## 6. Grandes áreas con IAG

Las ideas por actividad (sección 5) se agrupan en cuatro áreas transversales (6.1 a 6.4). La sección 6.5 las ubica en una
escala de suplantación de roles.

> La evidencia por cita ya está en la sección 5.1, actividad por actividad; acá solo se agrega lo que no está ahí
> —citas adicionales y las dos lecturas propias de esta sección: cómo cambia el rol y cuál es el límite.

### 6.1. Impersonación de stakeholders (stakeholder-IA)

Una IA configurada para representar a un stakeholder (cliente, usuario, PM) y emitir feedback como si fuera él, de
forma continua y sin depender de su disponibilidad → evidencia en **A2c** (sec. 5.1). Se suma el concepto de
*AI-Stakeholder* **[Pirozzi, 2024 · `pirozzi2024stakeholder` — revista profesional, no corpus; `FUENTES_MARCO.md`
sec. c]** y productos que ofrecen personas virtuales.

- **Cómo cambia el rol:** el rol del stakeholder como emisor de feedback pasa parcialmente a una IA (actividad
  **A2c**, y potencialmente **A2b**); el humano queda como validador.
- **Límite (objetivo D / ética):** *(corpus: REConnect · `damian2025reconnect`)* la IA no debe sustituir la conexión
  humana ni descontextualizar; el stakeholder real sigue como curador y guardián de valores.

### 6.2. Oralidad / entrevistas → artefacto procesable

Convertir feedback oral o conversacional (calls, entrevistas, demos) en artefactos estructurados y accionables
(tickets, user stories con criterios, especificaciones, modelos de proceso) → evidencia en **A4** (sec. 5.1). Se
suma *(corpus: Automating BI Requirements · `busany2024bi`; Business Process Discovery through Agentic GenAI ·
`lindenberg2025business`; LLM-Assisted Sketch-Based Elicitation · `alabsi2026empirical`)*: es el patrón recurrente
del mapeo de literatura, *feedback humano → estructuración con IA → artefacto usable*. Lo que se automatiza es el
descubrimiento por entrevistas de Dumas sec. 5.2.2.

- **Cómo cambia el rol:** la traducción que hacía el analista funcional (actividad **A4**) pasa a ser asistida o
  realizada por IA; el AF cura y valida.
- **Límite:** precisión en extracción, jerarquías y modelado estructurado; riesgo de alucinaciones.

### 6.3. Chequeo de consistencia feedback ↔ requisitos (el "firewall")

Validar automáticamente el pedido contra los requisitos, reglas y artefactos existentes; detectar conflictos,
contradicciones, duplicados o cosas ya cubiertas antes de que entren al Product Backlog → evidencia en **A3a**
(sec. 5.1). Se suma *(corpus: Epic Evaluator · `geyer2025epics`* — rúbrica de calidad de epics, ya citada en A5 —*)*
como evidencia adicional de chequeo automático de calidad.

- **Cómo cambia el rol:** la validación de reglas de negocio (actividad **A3a**) se apoya en una IA que pre-chequea
  consistencia; el AF resuelve lo que la IA marca.
- **Límite:** *(general: Nguyen-Duc et al., 2025)* las inconsistencias detectadas por LLMs pueden desviar el
  proyecto si no las revisan stakeholders con experiencia de dominio.

### 6.4. Generación → desarrollo automático de tickets

Del ticket —o del requisito en lenguaje natural— al código integrado, de forma automática → evidencia en **A1**
(sec. 5.1). Se suma *(corpus: Requirements are All You Need · `robinson2025requirements`)*. **Contra-evidencia
útil:** el pivote de Tusk y Sweep
(abandonaron el ticket→PR autónomo) muestra que el modo totalmente autónomo todavía no cierra.

- **Cómo cambia el rol:** la construcción (actividad **A1**) pasa a agentes; los Developers supervisan.

### 6.5. Transformación de roles: los cuatro escenarios S1–S4

Las cuatro áreas muestran un mismo movimiento de fondo: actividades que hoy hace una persona empiezan a ser
asumidas por la IA. Sauvola et al. (2024) dan una escala para graduar ese movimiento.

![Cuatro escenarios de uso de IAG en el desarrollo de software (S1–S4)](diagramas/escenarios_s1_s4.png)

Figura **propia** elaborada a partir de las Tablas 1 y 2 del paper: se redibuja en vez de reproducir la imagen
original, y se cita la fuente. Editable en `diagramas/escenarios_s1_s4.drawio`.

| Escenario | Nombre                                        | En una línea                                                            | Dónde caen nuestras áreas                                                        |
| --------- | --------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **S1**    | *Traditional Software Development Operations* | Humanos en todos los roles; las herramientas automatizan                | Es el proceso **hoy** (sección 3)                                                |
| **S2**    | *AI in loop*                                  | El humano domina; la IA automatiza partes de tareas y asiste decisiones | **6.2** oralidad→artefacto y **6.3** firewall                                    |
| **S3**    | *AI assumes role(s)*                          | La IA asume roles seleccionados; el humano controla la operación        | **6.1** impersonación (la IA *asume* el rol de quien da feedback)                |
| **S4**    | *Human-in-the-loop*                           | La IA gestiona varios roles; el humano vigila                           | **6.4** generación→desarrollo apunta acá (con la contra-evidencia de Tusk/Sweep) |

El paper además parametriza cada escenario por niveles y modela **trayectorias de transición** entre ellos: citable
si hace falta precisión sobre *cuánto* asume la IA.

---

*Última actualización: 2026-07-27 — sprint 15. Sección 5: se marcó el núcleo (▶) para distinguirlo de las
actividades relevadas solo por trazabilidad; cada cita [corpus] lleva ahora su clave BibTeX; Pirozzi (2024) quedó
referenciado formalmente en `FUENTES_MARCO.md` sec. c.*
