# Marco del proceso de desarrollo — zoom en la etapa de feedback

> Modelo de proceso de la etapa de feedback —actividades, roles, entradas, salidas y objetivos—, con una capa que
> describe cómo cada actividad podría potenciarse con IAG. Las actividades usan el vocabulario de la **Scrum Guide
> 2020**; lo que el framework no define se marca con **⚠** y se ancla en literatura de ingeniería de software.
>
> Evidencia sobre Scrum: `SCRUM_ANCLAJE.md` · Fuentes y secciones verificadas: `FUENTES_MARCO.md`.

---

## 1. Delimitación del zoom

El desarrollo transcurre en iteraciones de longitud fija —Sprints—, cada una de las cuales produce un incremento de
producto. Al final de cada iteración ese incremento llega al negocio, que lo revisa y devuelve feedback; ese
intercambio es lo que reabre el ciclo. **Esa etapa de revisión es el objeto de este marco.**

**Entra:** desde que hay un incremento (v ≥ 0.1 **con código**) que llega al negocio, y el feedback externo que
desencadena hasta el siguiente entregable.

**Queda fuera:** discovery / elicitación inicial, validación de prototipo, diseño UX temprano, y el uso en
producción / evolución (feedback posterior a la aceptación).

---

## 2. La etapa de feedback como modelo de proceso

> **A#** = actividad de esta etapa. **⚠** = actividad de la práctica **no definida en Scrum** (con su anclaje propio).
> A1 va como *contexto*: es lo que produce la versión que ve el negocio, no es el foco.

| # | Actividad | Roles | Entradas | Salidas | Objetivo | Anclaje |
|---|---|---|---|---|---|---|
| A1 | Desarrollo del incremento *(contexto; incluye inner loop y revisión de PR)* | Developers, PO | Sprint Backlog, Definition of Done | *Increment* que cumple la DoD | Producir el incremento | Scrum: *Sprint*, *Increment*, *DoD*; el **cómo** no lo define → Sommerville §7.3 |
| A2a | **Liberación del incremento** ⚠ | Developers | Increment | Incremento liberado, accesible al negocio | Poner el incremento en manos del negocio | ⚠ fuera de Scrum → Sommerville §2.3.2 y §8.3 |
| A2b | **Uso y testing de aceptación** ⚠ | Stakeholder (+ AF) | Incremento liberado, criterios de aceptación | Observaciones, cambios, bugs detectados en el uso | Que el negocio use el producto y detecte desvíos | ⚠ fuera de Scrum → Sommerville §8.4 y §20.5 |
| A2c | **Sprint Review** | PO, Developers, Stakeholders, AF | Suma de incrementos, Product Goal | Feedback del negocio; Product Backlog ajustado | Inspeccionar el resultado del Sprint y determinar adaptaciones | Scrum Guide p. 9 — *working session*, ≤ 4 h |
| A3a | Validación de reglas de negocio ⚠ | AF ↔ Stakeholder | Feedback, reglas y flujos definidos | Discrepancias, ajustes, aceptación/rechazo | Confirmar que el pedido respeta la regla de negocio real | ⚠ fuera de Scrum → Dumas §4.4 y §5.4.2; Sommerville §4.5 |
| A3b | Validación de factibilidad técnica ⚠ *(parcial)* | Developers (+ PO) | Feedback, código/arquitectura, requisitos no funcionales | Evaluación de viabilidad, impacto y esfuerzo; alternativas | Confirmar que lo pedido es viable y a qué costo | ⚠ parcial en Scrum → Sommerville §25.3 (análisis de costo/impacto) |
| A4 | **Incorporación del feedback al Product Backlog** | AF, PO | Feedback crudo (call, mail, bugs) | Ítems de Product Backlog | Convertir feedback disperso en trabajo accionable | Scrum Guide p. 6 — *convince the Product Owner* |
| A5 | **Product Backlog refinement** ↻ | PO (+ Developers) | Ítems nuevos + Product Backlog | Product Backlog ordenado y refinado | Decidir qué entra en la próxima iteración → reabre A1 | Scrum Guide p. 10 — término textual. **Continua, no evento** |

> Citas textuales de cada anclaje: `FUENTES_MARCO.md` §a.1 (Dumas) y §a.2 (Sommerville).

### 2.1. Por qué la revisión son tres actividades y no solo la ceremonia

El único de esos tres momentos que Scrum define es **A2c**, la Sprint Review. La Guía la describe como una
*working session* que no debe limitarse a una presentación, pero **desacopla la liberación de la ceremonia**
—*"an Increment may be delivered to stakeholders prior to the end of the Sprint. The Sprint Review should never be
considered a gate to releasing value"*— y **declara su propia incompletitud**: es un *"container for other
techniques, methodologies, and practices"*. Coherente con eso, las palabras `feedback`, `test` y `acceptance` no
aparecen en sus 14 páginas.

Por eso **A2a** y **A2b** se modelan como actividades separadas y se anclan en literatura de ingeniería de software.
La consecuencia no es cosmética: el feedback del negocio tiene **dos canales y dos momentos** —el uso real del
producto, que puede llegar antes de la ceremonia, y la ceremonia misma—, que es materia directa del objetivo B
(frecuencia, secuencia, granularidad y temporalidad).

> Citas textuales, conteo léxico y alcance de lo verificado: **`SCRUM_ANCLAJE.md` §3 y §4**.

### 2.2. Correspondencia con el ciclo de vida

Respecto del ciclo de vida del `sprint 12`: A1 pliega los loops técnicos internos (L3a inner loop,
L3b revisión de PR); A2a–A2c son el loop de incremento (L3); A3a es la validación de reglas de negocio (L4).
El uso en producción / evolución (L5) queda **fuera** del zoom.

### 2.3. Roles

| Rol | ¿Scrum? | Nota |
|---|---|---|
| **Product Owner** | ✅ accountability | — |
| **Developers** | ✅ accountability | Scrum no tiene rol de QA separado: el testing vive dentro de Developers vía Definition of Done |
| **Stakeholder / cliente** | ⚠ término de la Guía, pero **no** es accountability | Participante externo al Scrum Team |
| **Analista funcional (AF)** | ❌ no existe | Se mantiene, anclado en que el PO *"may delegate the responsibility to others"* + BABOK/RE. Es el intermediario cuya mediación la IAG pone en cuestión (objetivo C) |
| Scrum Master | ✅ accountability | **Ausente del marco a propósito**: no es dueño de ninguna actividad del loop de feedback |

---

## 3. Diagrama

![Etapa de revisión y feedback — vista BPMN](diagramas/marco_feedback_bpmn.png)

**Notación:** BPMN, anclada en Dumas et al. (2018) §3.4 para pools y carriles y §3.3 para objetos de datos. El
vocabulario de actividades y artefactos viene de la Scrum Guide 2020.
**Fuente editable:** `diagramas/marco_feedback_bpmn.drawio` (draw.io); el PNG se re-exporta desde ahí.

### 3.1. Leyenda (una sola semántica para todo el diagrama)

| Elemento | Significado |
|---|---|
| Rectángulo redondeado **azul** | Actividad **definida en Scrum** |
| Rectángulo redondeado **gris punteado** | Actividad de la práctica, **⚠ no definida en Scrum** |
| **Nota amarilla** | Objeto de datos (artefacto que se produce o consume) |
| **Cilindro violeta** | Almacén de datos (*Product Backlog*, persiste entre Sprints) |
| **Carril** / pool | Rol / participante |
| Flecha **llena negra** | Flujo de secuencia (orden de actividades dentro del mismo participante) |
| Flecha **punteada roja** | Flujo de mensaje (comunicación entre participantes) |
| Flecha **punteada fina amarilla** | Asociación de datos (lectura o escritura de un artefacto) |
| ↻ | Actividad continua, no un evento |

## 4. Capa con IAG

Por cada actividad del §2, las soluciones con IAG que podrían aplicarla. Lo que **no** cambia es el proceso ni los
roles; cambia **quién** ejecuta la tarea y **cómo**.

Cada ítem indica su fuente y de qué tipo es:

- **[general]** — uno de los **4 artículos del tutor** (`FUENTES_MARCO.md` §b): hablan del proceso de desarrollo
  en términos generales, por etapa del SDLC.
- **[corpus]** — paper del corpus del mapeo de literatura (`sprint 12/REFERENCIAS.md`): evidencia puntual.
- **[producto]** — producto o empresa relevada en el sprint 11: evidencia de mercado, no académica.

Cada ítem lleva su fuente y, cuando aplica, la sección exacta: eso hace de esta lista la tabla de trazabilidad.

### 4.1. Por actividad

#### A1 — Desarrollo del incremento *(contexto)*

- La aplicación más extendida de IAG está justamente acá: copilotos que aceleran codificación, refactorización y
  reparación de bugs, ya con validación empírica **[general: Malladi & Sudheer Reddy, 2025, §III]**.
- Generación automática de tests unitarios, integración con TDD/BDD y localización de defectos
  **[general: Malladi & Sudheer Reddy, 2025, §III]**; casos de prueba autogenerados como una de las fases más
  beneficiadas **[general: Cornide-Reyes et al., 2025, RQ3]**.
- Agentes que generan o ajustan el incremento a partir del ticket **[productos: Devin, Codegen]**.

#### A2a — Liberación del incremento ⚠

- Autoría de pipelines y prácticas de CI/CD con conciencia de calidad **[general: Malladi & Sudheer Reddy, 2025, §III]**.
- La automatización de los procesos de *build* y *deployment* sigue planteada como **pregunta de investigación
  abierta** (§4.6.2, área *Software Processes and Tools*) **[general: Nguyen-Duc et al., 2025]** → zona poco resuelta.

#### A2b — Uso y testing de aceptación ⚠

- **Gap declarado:** la agenda de investigación señala que el *acceptance testing* (junto con integración y
  atributos de calidad) **no es foco de los estudios existentes** y que hace falta investigación sobre la
  efectividad y los límites de la IAG ahí **[general: Nguyen-Duc et al., 2025, §4.4.5]**.
- Pregunta abierta asociada: *"How can GenAI be utilized to automate acceptance criteria from high-level
  requirements?"* **[general: Nguyen-Duc et al., 2025, §4.4.2]**.
- Reportes de bug en lenguaje natural → bug completo con pasos de reproducción **[corpus: Bug Tracking GenAI]**.
- **Límite:** usar IAG para validar rápido puede terminar sacrificando calidad de UX en favor de la velocidad de
  entrega **[general: Cornide-Reyes et al., 2025, §1]**.

#### A2c — Sprint Review

- Stakeholder-IA impersonado que emite feedback de forma continua, sin esperar la ceremonia
  **[corpus: Designing Tiny Robots; concepto del sprint 11]**.
- Asistente que resume la reunión y detecta riesgos e impedimentos **[corpus: Meeting Assistants]**.
- A nivel general, se proyecta un modo de trabajo de plataformas colaborativas humano-IA que asisten a expertos de
  dominio, ingenieros de requisitos y usuarios **en tiempo real**, habilitando *"instantaneous feedback loops"* y
  refinamiento iterativo como nueva norma **[general: Nguyen-Duc et al., 2025]** → sostiene la hipótesis del
  objetivo B sobre frecuencia y temporalidad **[área *Requirements Engineering*]**.

> ⚠️ **Ninguno de los 4 artículos del tutor menciona la Sprint Review** (0 ocurrencias de "sprint review" en los
> cuatro textos completos). Trabajan a nivel de etapas del SDLC, no de ceremonias. Por eso el zoom fino en la
> ceremonia sigue apoyado en el corpus, y los 4 artículos aportan la capa general.

#### A3a — Validación de reglas de negocio ⚠

- Chequear el pedido contra los requisitos y reglas ya definidos, detectando conflictos **[corpus: Integrating LLMs
  into RE]**; detectar si el pedido ya está cubierto o implementado **[corpus: Closing the Loop US↔GUI]**.
- A nivel general: los LLMs detectan requisitos superfluos, incorrectos o inconsistentes en un contexto de dominio,
  **pero** esas inconsistencias pueden desviar el proyecto si no son revisadas meticulosamente por stakeholders con
  experiencia **[general: Nguyen-Duc et al., 2025, área *RE*]** → el chequeo automático no reemplaza la validación humana.

#### A3b — Validación de factibilidad técnica ⚠

- Estimación de esfuerzo e impacto: técnicas automatizadas dan repriorización y estimación **más consistentes,
  reduciendo el sesgo humano** y mejorando la alineación con necesidades cambiantes del cliente
  **[general: Malladi & Sudheer Reddy, 2025, §V]**.
- La generación de criterios de aceptación y descripciones de escenarios permite a POs y developers **tomar
  decisiones de trade-off informadas** durante los releases iterativos **[general: Malladi & Sudheer Reddy, 2025, §V]**.
- Detectar desalineación entre la intención y el sistema **[corpus: Requirements are All You Need]**.

> La estimación de esfuerzo **está cubierta** a nivel general; el hueco declarado en la literatura está en **A2b**
> (criterios y testing de aceptación), que es el candidato natural para profundizar.

#### A4 — Incorporación del feedback al Product Backlog

- Voz o call → tickets / user stories con criterios de aceptación **[productos: PM Agent, Versive, Kraftful;
  corpus: Towards Human-AI Synergy]**.
- Reformular o mejorar la expresión del feedback del stakeholder **[corpus: Supporting Stakeholder Requirements
  Expression]**.
- A nivel general: los LLMs asisten en la redacción de user stories y en el *backlog grooming*, mejorando la
  precisión de estimación y planificación **[general: Malladi & Sudheer Reddy, 2025, §III y §V]**; la planificación (análisis
  de requisitos y generación de user stories) es una de las fases del ciclo ágil más beneficiadas
  **[general: Cornide-Reyes et al., 2025, RQ3]**.

#### A5 — Product Backlog refinement ↻

- Evaluar la calidad de los ítems del backlog y recomendar mejoras **[corpus: Epic Evaluator]**; detectar riesgos de
  sobrecompromiso al priorizar **[corpus: Meeting Assistants]**.
- Repriorización dinámica del backlog como área en expansión **[general: Malladi & Sudheer Reddy, 2025, §III]**.

### 4.2. Alcance de las dos capas de evidencia

La capa **general** (los cuatro artículos sobre IAG en el desarrollo) aporta el respaldo por etapa del SDLC, **dos
gaps declarados** —testing de aceptación y automatización de build/deployment, ambos de Nguyen-Duc et al.— y dos
marcos de encuadre: los escenarios S1–S4 (§5.5) y las **11 áreas** de Nguyen-Duc et al., que ubican este zoom en
*Requirements Engineering*, *Quality Assurance* y *Engineering Management*.

Ninguno de los cuatro menciona la **Sprint Review** ni las ceremonias (0 ocurrencias): el zoom fino en el momento del
feedback está sostenido por la capa **corpus**, que aporta la evidencia puntual. Conviene explicitarlo para no
sobrevender el anclaje.

---

## 5. Grandes áreas con IAG

Las ideas por actividad (§4) se agrupan en cuatro áreas transversales.

### 5.1. Impersonación de stakeholders (stakeholder-IA)

- **Qué es:** una IA configurada para representar a un stakeholder (cliente, usuario, PM) y emitir feedback como si
  fuera él, de forma continua y sin depender de su disponibilidad.
- **Evidencia:** *(corpus: Designing Tiny Robots* — dinámicas participativas con stakeholders*)*; concepto de
  *AI-Stakeholder* (Pirozzi, sprint 3); impersonación / personas virtuales del sprint 11.
- **Cómo cambia el rol:** el rol del stakeholder como emisor de feedback pasa parcialmente a una IA (actividad
  **A2c**, y potencialmente **A2b**); el humano queda como validador.
- **Límite (obj. D / ética):** *(corpus: REConnect)* advierte que la IA no debe sustituir la conexión humana ni
  descontextualizar; el stakeholder real sigue como curador y guardián de valores.

### 5.2. Oralidad / entrevistas → artefacto procesable

- **Qué es:** convertir feedback oral o conversacional (calls, entrevistas, demos) en artefactos estructurados y
  accionables (tickets, user stories con criterios, especificaciones, modelos de proceso).
- **Evidencia:** *(productos: PM Agent, Versive, Kraftful)*; *(corpus: Towards Human-AI Synergy in RE, Automating
  BI Requirements, Business Process Discovery through Agentic GenAI, LLM-Assisted Sketch-Based Elicitation)*;
  *(general: Malladi & Sudheer Reddy, 2025* — user stories y backlog grooming asistidos*)*. Es el patrón central
  del sprint 13: *feedback humano → estructuración con IA → artefacto usable*.
- **Cómo cambia el rol:** la traducción que hacía el analista funcional (actividad **A4**) pasa a ser asistida o
  realizada por IA; el AF cura y valida.
- **Límite:** precisión en extracción, jerarquías y modelado estructurado; riesgo de alucinaciones.

### 5.3. Chequeo de consistencia feedback ↔ requisitos (el "firewall")

- **Qué es:** validar automáticamente el pedido contra los requisitos, reglas y artefactos existentes; detectar
  conflictos, contradicciones, duplicados o cosas ya cubiertas, antes de que entren al Product Backlog.
- **Evidencia:** *(corpus: Epic Evaluator* — rúbrica de calidad de epics*; Closing the Loop US↔GUI* — detecta si ya
  está implementado*; Integrating LLMs into RE* — inconsistencias y jerarquías*)*.
- **Cómo cambia el rol:** la validación de reglas de negocio (actividad **A3a**) se apoya en una IA que pre-chequea
  consistencia; el AF resuelve lo que la IA marca.
- **Límite:** *(general: Nguyen-Duc et al., 2025)* — las inconsistencias detectadas por LLMs pueden desviar el
  proyecto si no las revisan stakeholders con experiencia de dominio.

### 5.4. Generación → desarrollo automático de tickets

- **Qué es:** del ticket —o del requisito en lenguaje natural— al código integrado, de forma automática.
- **Evidencia:** *(productos: Devin, Codegen)*; *(corpus: Requirements are All You Need)*; *(general: Malladi &
  Sudheer Reddy, 2025* — la implementación es el área de mayor aplicación*)*. **Contra-evidencia útil:** el pivote
  de Tusk y Sweep (abandonaron el ticket→PR autónomo) muestra que el modo totalmente autónomo todavía no cierra.
- **Cómo cambia el rol:** la construcción (actividad **A1**) pasa a agentes; el DEV supervisa.

### 5.5. Transformación de roles: los cuatro escenarios S1–S4

Las cuatro áreas muestran un mismo movimiento de fondo: actividades que hoy hace una persona empiezan a ser
asumidas por la IA. Sauvola et al. (2024) dan una escala para graduar ese movimiento.

![Cuatro escenarios de uso de IAG en el desarrollo de software (S1–S4)](diagramas/escenarios_s1_s4.png)

Figura **propia** elaborada a partir de las Tablas 1 y 2 del paper: se redibuja en vez de reproducir la imagen
original, y se cita la fuente. Editable en `diagramas/escenarios_s1_s4.drawio`.

| Escenario | Nombre | En una línea | Dónde caen nuestras áreas |
|---|---|---|---|
| **S1** | *Traditional Software Development Operations* | Humanos en todos los roles; las herramientas automatizan | Es el proceso **hoy** (§2) |
| **S2** | *AI in loop* | El humano domina; la IA automatiza partes de tareas y asiste decisiones | **5.2** oralidad→artefacto y **5.3** firewall |
| **S3** | *AI assumes role(s)* | La IA asume roles seleccionados; el humano controla la operación | **5.1** impersonación (la IA *asume* el rol de quien da feedback) |
| **S4** | *Human-in-the-loop* | La IA gestiona varios roles; el humano vigila | **5.4** generación→desarrollo apunta acá (con la contra-evidencia de Tusk/Sweep) |

El paper además parametriza cada escenario por niveles y modela **trayectorias de transición** entre ellos: citable
si hace falta precisión sobre *cuánto* asume la IA.

---

_Última actualización: 2026-07-26 — sprint 15._
