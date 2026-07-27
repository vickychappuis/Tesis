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
| **Uso y revisión del incremento** ← *el núcleo*     | A2b, A2c      | El negocio usa el incremento y **se genera el feedback**                  |
| Validación del feedback                             | A3a, A3b      | Se contrasta contra las reglas de negocio y contra lo técnicamente viable |
| Incorporación al backlog                            | A4, A5        | El feedback se vuelve trabajo priorizado y reabre el ciclo                |

El **núcleo** es el primer bloque: es donde el negocio ve el producto y reacciona, y es el que la Sprint Review sola
no alcanza a cubrir (sección 2.2). El desarrollo del incremento (**A1**) y su liberación (**A2a**) entran solo como
contexto: producen la versión que el negocio ve y la ponen en sus manos, pero no son el foco — en la liberación no
interviene ningún actor del negocio ni se genera feedback. De A2a importa su **cadencia** —condiciona cada cuánto
puede llegar feedback al negocio (objetivo B)—, no su mecánica interna.

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

**Contexto** — lo que produce la versión que ve el negocio y la pone en sus manos; no es el foco.

| #   | Actividad                                                         | Roles          | Entradas                           | Salidas                                   | Objetivo                                 | Anclaje                                                                              |
| --- | ----------------------------------------------------------------- | -------------- | ---------------------------------- | ----------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------ |
| A1  | Desarrollo del incremento *(incluye inner loop y revisión de PR)* | Developers, PO | Sprint Backlog, Definition of Done | *Increment* que cumple la DoD             | Producir el incremento                   | Scrum: *Sprint*, *Increment*, *DoD*; el **cómo** no lo define → Sommerville sec. 7.3 |
| A2a | Liberación del incremento ⚠                                       | Developers     | Increment                          | Incremento liberado, accesible al negocio | Poner el incremento en manos del negocio | ⚠ fuera de Scrum → Sommerville sec. 2.3.2 y sec. 8.3                                 |

> A2a queda fuera del objeto de estudio —la ejecutan solo los Developers y ahí no cambia ninguna dinámica
> stakeholder–equipo—, pero su **cadencia** condiciona la frecuencia posible del feedback (objetivo B), y por eso
> permanece en el modelo como compuerta de entrada del núcleo.

**▶ Uso y revisión del incremento — EL NÚCLEO DE LA ETAPA.** Es donde el negocio usa el incremento y se
genera el feedback. Son dos momentos, y **solo el segundo está definido por Scrum** (ver sección 2.2):

| #   | Actividad                         | Roles                            | Entradas                                     | Salidas                                           | Objetivo                                                       | Anclaje                                              |
| --- | --------------------------------- | -------------------------------- | -------------------------------------------- | ------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------- |
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
loop del desarrollador, y L3b, revisión de PR); **A2a** (contexto) y **A2b–A2c** componen el loop de incremento (L3); **A3a** es la validación
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

Qué podría hacer la IAG en **el núcleo de la etapa** —A2b y A2c, sección 1—, que es donde se enfoca la tesis.
**Esta es la única sección que trata las soluciones con IAG**, y va actividad por actividad: cada una lleva su
evidencia, cómo cambia el rol y cuál es el límite. Las actividades fuera del núcleo (A1, A2a, A3a–A5) **no se cubren
acá**: lo que la literatura reporta sobre A1 y A3a–A5 está relevado en `sprint 12/REFERENCIAS.md`, la evidencia
sobre A2a se resume en 5.3, y lo único que importa para este marco —que fuera del núcleo la literatura ya cubre o el
gap no toca dinámicas stakeholder–equipo, y que por eso el hueco del núcleo resalta— se dice en 5.3.

Algunas soluciones **cruzan más de una actividad** —la impersonación de stakeholders es el caso claro: toca A2b y
A2c— y se marcan como tales en la actividad donde la evidencia las ubica, en vez de tratarse aparte.

Lo que **no** cambia es el proceso ni los roles; cambia **quién** ejecuta la tarea y **cómo**.

Cada ítem indica su fuente y, cuando aplica, la sección exacta y quién afirma qué —importa distinguir un hallazgo
empírico de una pregunta que los autores dejan abierta o de una expectativa que declaran—, de modo que la sección
sirva de tabla de trazabilidad. Las fuentes son de tres tipos:

- **[general]** — los cuatro artículos sobre IAG en el desarrollo (`FUENTES_MARCO.md` sec. b): hablan del proceso en
  términos generales, por etapa del SDLC. (Las secciones de Nguyen-Duc et al. remiten al preprint; ver
  `FUENTES_MARCO.md` sec. b.)
- **[corpus]** — paper del mapeo de literatura (`sprint 12/REFERENCIAS.md`): evidencia puntual. Cada cita lleva su
  clave BibTeX de `sprint 12/REFERENCIAS.bib` para que la trazabilidad no dependa del nombre corto.
- **[producto]** — producto o empresa relevada como *state of practice*: evidencia de mercado, no académica.

### 5.1. A2b — Uso y testing de aceptación ⚠

**El gap, y quién lo declara.** El *acceptance testing* —las pruebas con las que el cliente o stakeholder valida
que el software entregado hace lo que el negocio necesita, es decir, la actividad central de A2b— casi no se
investiga en el contexto de la IAG. Lo constatan **Nguyen-Duc et al. (2025)**: su artículo es una agenda de
investigación que releva qué se estudió sobre IAG en cada área de la ingeniería de software y qué preguntas quedan
abiertas (78, en 11 áreas), y al repasar el aseguramiento de la calidad encuentran que los estudios existentes se
concentran en otros tipos de prueba: *"other areas of testing are not currently the focus of existing studies, i.e.
acceptance testing, integration testing, and testing other software quality requirements"* (sec. 4.4.5). Entre sus
preguntas abiertas dejan planteada, además, *"How can GenAI be utilized to automate acceptance criteria from
high-level requirements?"* (RQ 5 de sec. 4.4.2) **[general]**. Es decir: el hueco no lo postula esta tesis, lo
declaran los propios autores; la tesis solo lo toma como justificación del foco de la PoC.

**Qué podría hacer la IAG.** Reportes de bug en lenguaje natural → bug completo con pasos de reproducción
**[corpus: Bug Tracking GenAI · `torun2025bugtracking`]**.

**Impersonación de stakeholders (stakeholder-IA) — cruza A2b y A2c.** Una IA configurada para representar a un
stakeholder (cliente, usuario, PM) y emitir feedback como si fuera él, de forma continua y sin depender de su
disponibilidad. La evidencia la ubica acá y no en la ceremonia, justamente porque el feedback se emite **sin esperar
la Sprint Review** **[corpus: Designing Tiny Robots · `raftopoulos2024designing`]**; se suma el concepto de
*AI-Stakeholder* **[Pirozzi, 2024 · `pirozzi2024stakeholder` — revista profesional, no corpus; `FUENTES_MARCO.md`
sec. c]** y productos que ofrecen personas virtuales. Es la solución que más directamente toca el objetivo C.

- **Cómo cambia el rol:** el stakeholder deja de ser el único emisor de feedback —una IA lo emite por él, de forma
  continua— y queda como **validador** de lo que la IA devolvió. Cruza hacia A2c, donde la ceremonia deja de ser el
  momento en que aparece el feedback.
- **Límite (objetivo D / ética):** *(corpus: REConnect · `damian2025reconnect`)* la IA no debe sustituir la conexión
  humana ni descontextualizar; el stakeholder real sigue como curador y guardián de valores. Y Cornide-Reyes et al.
  (2025, sec. 1) advierten que usar IAG para validar rápido puede terminar sacrificando calidad de UX en favor de la
  velocidad de entrega **[general]**.
- **Límite — la IAG no solo deja pasar errores, los introduce:** Nguyen-Duc et al. (2025, sec. 4.1.4) advierten que
  la IAG genera requisitos que *"appear sound but are either superfluous, incorrect, or inconsistent in a given
  domain context"*, y que eso desvía el proyecto *"if not meticulously reviewed by stakeholders with relevant
  experience"* **[general]**. Lo dicen sobre requisitos, pero el riesgo se traslada tal cual al feedback que emite
  un stakeholder-IA: puede sonar razonable y no serlo, y no hay stakeholder real que lo haya dicho.

### 5.2. A2c — Sprint Review

**Qué podría hacer la IAG.** Asistente que resume la reunión y detecta riesgos e impedimentos **[corpus: Meeting
Assistants · `cabrero2024exploring`]**. La impersonación de stakeholders (5.1) también opera acá: desplaza feedback
que hoy aparece en la ceremonia hacia antes de ella.

**Proyección de los autores, no hallazgo empírico.** En su sección de *Future Prospects* (sec. 4.1.5),
**Nguyen-Duc et al. (2025)** dicen lo que **esperan** que pase —*"We believe that the future way of working will be
AI-human collaborative platforms..."*—: plataformas colaborativas humano-IA que asistan **en tiempo real** a
expertos de dominio, ingenieros de requisitos y usuarios, habilitando *"instantaneous feedback loops"* y
refinamiento iterativo como nueva norma **[general]**. Sostiene la hipótesis del objetivo B sobre frecuencia y
temporalidad, pero hay que citarla por lo que es: una expectativa de los autores, no evidencia.

- **Cómo cambia el rol:** la ceremonia deja de concentrar el feedback y pasa a ser el lugar donde se **cura** lo que
  ya llegó por otros canales. El AF, que en A2c participa como delegado del PO (sec. 3.2), ve reducido su papel de
  traductor en vivo.
- **Límite:** ninguno de los cuatro artículos generales menciona la Sprint Review ni las ceremonias (ver 5.3). Lo
  que se afirma acá se apoya en el corpus y en una proyección declarada como tal.

### 5.3. Alcance de las dos capas de evidencia

La capa **general** (los cuatro artículos sobre IAG en el desarrollo) aporta el respaldo por etapa del SDLC, **un
gap declarado dentro del núcleo** —el testing de aceptación (A2b), de Nguyen-Duc et al.— y dos marcos de encuadre:
los escenarios S1–S4 (sección 6) y las **11 áreas** de Nguyen-Duc et al., que ubican este zoom en *Requirements
Engineering*, *Quality Assurance* y *Engineering Management*.

Ese gap cae **dentro del núcleo** y es lo que justifica el recorte de esta sección: **A2b** —criterios y testing de
aceptación— es el candidato natural para profundizar. Fuera del núcleo la literatura ya cubre: construcción y
generación de tests (A1), chequeo del pedido contra los requisitos (A3a), estimación de esfuerzo e impacto (A3b),
redacción de user stories y refinamiento del backlog (A4, A5) —el relevamiento está en `sprint 12/REFERENCIAS.md` y
no se repite acá—.

**A2a (contexto) tiene su propio gap declarado, pero queda fuera del objeto de estudio.** Sobre la liberación,
Malladi & Sudheer Reddy (2025, sec. III) relevan **métodos híbridos** —aprendizaje por refuerzo combinado con
síntesis de datos— aplicados a la escritura de pipelines y a prácticas de CI/CD atentas a la calidad **[general]**,
y **Nguyen-Duc et al. (2025)** dejan la automatización de *build* y *deployment* entre las preguntas abiertas de su
propia agenda —*"How can GenAI support the automation of build and deployment processes?"*, RQ 6 de la lista de
sec. 4.6.2 **[general]**. Se registra acá por trazabilidad, no como justificación: en A2a la liberación sigue siendo
de los Developers, no interviene ningún actor del negocio y no cambia ninguna dinámica stakeholder–equipo; lo único
de A2a que toca la tesis es su cadencia (sección 1).

Ninguno de los cuatro menciona la **Sprint Review** ni las ceremonias (0 ocurrencias): el zoom fino en el momento del
feedback está sostenido por la capa **corpus**, que aporta la evidencia puntual. Conviene explicitarlo para no
sobrevender el anclaje.

---

## 6. Transformación de roles: los cuatro escenarios S1–S4

Todo lo de la sección 5 muestra un mismo movimiento de fondo: actividades que hoy hace una persona empiezan a ser
asumidas por la IA. Sauvola et al. (2024) dan una escala para graduar ese movimiento, y es lo que permite ordenar
las soluciones por **cuánto** desplazan al humano —no por qué actividad tocan.

![Cuatro escenarios de uso de IAG en el desarrollo de software (S1–S4)](diagramas/escenarios_s1_s4.png)

Figura **propia** elaborada a partir de las Tablas 1 y 2 del paper: se redibuja en vez de reproducir la imagen
original, y se cita la fuente. Editable en `diagramas/escenarios_s1_s4.drawio`.

| Escenario | Nombre                                        | En una línea                                                            | Dónde cae el núcleo (sección 5)                                                                  |
| --------- | --------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **S1**    | *Traditional Software Development Operations* | Humanos en todos los roles; las herramientas automatizan                | Es el proceso **hoy** (sección 3)                                                                  |
| **S2**    | *AI in loop*                                  | El humano domina; la IA automatiza partes de tareas y asiste decisiones | Casi todo el núcleo: bugs desde lenguaje natural (**5.1**) y asistente de reunión (**5.2**) |
| **S3**    | *AI assumes role(s)*                          | La IA asume roles seleccionados; el humano controla la operación        | **Impersonación de stakeholders** (**5.1**): la IA *asume* el rol de quien da feedback — es el único punto del núcleo que llega hasta acá |
| **S4**    | *Human-in-the-loop*                           | La IA gestiona varios roles; el humano vigila                           | **Ninguna solución del núcleo llega**. El candidato —generación automática desde el ticket— cae en A1, fuera del núcleo, y el pivote de Tusk y Sweep (abandonaron el ticket→PR autónomo) muestra que ese modo todavía no cierra |

El paper además parametriza cada escenario por niveles y modela **trayectorias de transición** entre ellos: citable
si hace falta precisión sobre *cuánto* asume la IA.

Leído así, el núcleo se concentra en **S2**, con un solo punto en **S3** —la impersonación— y nada en S4. Es un
resultado, no una omisión: el desplazamiento de roles que la tesis indaga (objetivo C) hoy pasa casi todo por la
impersonación del stakeholder.

---

*Última actualización: 2026-07-27 — sprint 15. El registro de cambios respecto de la v1 está en
`CAMBIOS_DESDE_V1.md`.*
