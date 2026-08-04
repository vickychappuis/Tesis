# Marco del proceso de feedback — v3 (B3)

> Reescritura de `sprint 15/MARCO_PROCESO_FEEDBACK_v2.md` **desacoplada de Scrum**, contada de lo general a lo
> particular según la narrativa que bajó Daniel (30 jul; ver la tabla de pasos en `sprint 15/resumen_call.md`).
> Sigue siendo **estado del arte, sin propuesta propia todavía** — todo esto es contexto.
>
> **Fuentes:** se reutilizan `sprint 15/FUENTES_MARCO.{md,bib}`; se suma Sommerville como anclaje del proceso.
>
> **Estado: esqueleto.** Cada sección dice *qué va* y marca lo que falta (TODO). La redacción prolija es el trabajo del sprint 16.

---

## 1. Proceso de desarrollo de software (Sommerville) → requisitos y V&V

Un **proceso de software** es una secuencia de actividades que conduce a la producción de un producto de software.
Sommerville identifica **cuatro actividades fundamentales comunes a todos los procesos de software**
(sec. 1.1.1), que el capítulo 2 desarrolla como *process activities* (sec. 2.2):

| # | Actividad (Sommerville) | Qué pasa ahí | Sec. |
|---|---|---|---|
| 1 | **Especificación** del software | *"customers and engineers define the software that is to be produced and the constraints on its operation"* | 2.2.1 |
| 2 | **Diseño e implementación** | el software se diseña y se programa | 2.2.2 |
| 3 | **Validación** (V&V) | *"the software is checked to ensure that it is what the customer requires"* | 2.2.3 |
| 4 | **Evolución** | el software se modifica para reflejar requisitos cambiantes del cliente y del mercado | 2.2.4 |

Sommerville aclara que estas actividades genéricas *"pueden organizarse de distintas formas y describirse a distintos
niveles de detalle, según el tipo de software"* (sec. 1.1.1) — lo que habilita el encuadre agnóstico al modelo de
proceso que sostiene este marco.

**De las cuatro, dos involucran directamente al stakeholder** y son el foco de este documento:

- **Especificación / requisitos (1)** — por definición se hace *con* el cliente: es donde se define qué hay que
  construir. Sommerville la llama *requirements engineering* (cap. 4).
- **Validación / V&V (3)** — el chequeo es contra *lo que el cliente requiere*, no solo contra el documento: la
  V&V *"muestra que un sistema tanto se ajusta a su especificación como cumple las expectativas del cliente"*
  (sec. 2.2.3). Dentro de V&V, el *user testing* y el *acceptance testing* son las instancias donde el stakeholder
  participa en persona (sec. 8.4).

Diseño/implementación (2) y evolución (4) quedan como contexto: producen y mantienen lo que el stakeholder
después ve, pero no son puntos de intercambio con él.

- [ ] Redacción final: chequear largo (Daniel pidió **breve**) y que no se solape con la sección 2.
- [x] Cita en `FUENTES_MARCO.bib` — ya existe (`sommerville2016software`); sumar secs. 1.1.1 y 2.2 a las verificadas en `FUENTES_MARCO.md`.

## 2. Verificación y validación: el V-model → las puntas son el feedback del stakeholder

El V-model ordena las actividades del proceso en una **V**: la rama descendente son las etapas de definición
(*verificación*) y la ascendente las de prueba (*validación*), con **coding** en el vértice. Lo relevante para este
marco no son los niveles en sí, sino las **flechas horizontales**: cada nivel de definición tiene su nivel de prueba
correspondiente, y **se prueba contra lo que ese nivel definió**.

| Rama de definición (verificación) | ↔ | Rama de prueba (validación) |
|---|---|---|
| **Requirement gathering** | ↔ | **Acceptance testing** |
| System analysis | ↔ | System testing |
| Software design | ↔ | Integration testing |
| Module design | ↔ | Unit testing |
| *Coding* (vértice) | | |

**El nivel superior es el único donde participa el stakeholder**, y aparece en las dos puntas:

- **Punta izquierda — requirement gathering:** el stakeholder dice *qué necesita*.
- **Punta derecha — acceptance testing:** el stakeholder dice *si lo construido es lo que quería*.

La flecha horizontal que las une no es decorativa: expresa que **la aceptación se evalúa contra los requisitos que
ese mismo stakeholder planteó**. Por eso los dos puntos de feedback no son independientes — son las dos mitades de
un mismo circuito, y es exactamente la razón por la que queremos feedback del usuario: (a) saber qué necesita y
(b) validar que lo construido es eso.

Los niveles inferiores (system/integration/unit) son internos al equipo: hay verificación, pero no interviene el
negocio. Por eso el marco se queda con la punta de arriba.

Anclaje en Sommerville (verificado):

- Formulación de V&V (sec. 8.1): *"Validation: Are we building the right product? · Verification: Are we building
  the product right?"* — las dos preguntas que separan las dos ramas.
- *Acceptance testing* como instancia formal del cliente (sec. 8.4); *"System stakeholders… who certify the
  acceptability of the system"* (sec. 4.1).

**Fuente del V-model: `pressman2020software`, cap. 2 (*Process Models*).** Pressman & Maxim presentan ahí el
V-model con exactamente esta correspondencia:

| Pressman | ↔ | Pressman |
|---|---|---|
| Requirements modeling | ↔ | Acceptance testing |
| Architectural design | ↔ | System testing |
| Component design | ↔ | Integration testing |
| Code generation | ↔ | Unit testing |

(Los nombres de nivel varían levemente entre presentaciones del modelo — p. ej. *requirement gathering* vs.
*requirements modeling* —; la correspondencia superior **requisitos ↔ aceptación** es la misma en todas.)

Como **origen histórico** puede citarse `rook1986controlling`, el artículo al que se atribuye la introducción del
V-model en desarrollo de software.

> ⚠ **Nota sobre "el V-model es de cascada".** Tanto Pressman como Sommerville lo presentan como variante del
> modelo en cascada — Sommerville además lo nombra una sola vez y al pasar (Fig. 2.7, cap. 2): *"The V-model shows
> the software validation activities that correspond to each stage of the **waterfall** process model."*
>
> **No invalida el uso que le damos**, pero conviene decirlo explícitamente en el texto: acá el V-model entra como
> **ilustración de la correspondencia** definición ↔ prueba, no como modelo de proceso a seguir. Cuántas veces se
> recorre la V es justamente lo que cambia entre modelos — y eso es lo que abre la sección 3.

- [x] Fuente citable del V-model → `pressman2020software` cap. 2 (+ `rook1986controlling` como origen), ya cargadas en `FUENTES_MARCO.bib`.
- [ ] Rehacer la figura del V-model (propia, marcando las dos puntas y la flecha superior) — el diagrama de
      referencia es de origen web, no sirve para publicar.
- [ ] Chequear largo: Daniel pidió **breve**; hoy esta sección está más larga que la 1.

## 3. Esto toma distintas formas — ejemplo: Scrum (sin IA)

Las dos puntas de la sección 2 no ocurren una sola vez ni en un único orden: **cuántas veces se recorre la V depende
del modelo de proceso**. En un proceso en cascada se recorre una vez —los requisitos al inicio, la aceptación al
final—. En uno **iterativo e incremental** se recorre en cada iteración: cada entrega vuelve a abrir los dos puntos,
y la aceptación de una iteración alimenta los requisitos de la siguiente.

Lo que sigue es **un ejemplo**, no la base del marco: se toma Scrum porque es la forma de trabajo más extendida y da
nombres establecidos a las actividades. El objetivo es describir **cómo viene siendo hoy** la interacción con el
stakeholder, **sin IA** — la línea de base contra la cual la sección 4 contrasta lo que cambia.

### 3.1. Qué define Scrum y qué no

Scrum define **una** instancia de contacto con el stakeholder, la **Sprint Review**, y la define como sesión de
trabajo, no como reunión de aprobación (Scrum Guide 2020, p. 9):

> *"The Sprint Review is a working session and the Scrum Team should avoid limiting it to a presentation."*

Dos precisiones del propio framework, importantes para el marco:

- **La liberación está desacoplada de la ceremonia por diseño** (p. 12): *"an Increment may be delivered to
  stakeholders prior to the end of the Sprint. The Sprint Review should never be considered a gate to releasing
  value."* Es decir: **el feedback puede llegar antes de la ceremonia y por fuera de ella** — no es una licencia de
  este marco, lo habilita Scrum.
- **La ceremonia no alcanza para contener lo que se estudia**: está acotada a un máximo de cuatro horas. El uso real
  del producto y la detección de desvíos no caben ahí ni están definidos ahí.

Y lo que Scrum **no** define: sobre el texto completo de la Guía (14 pp.), `inspect`/`inspection` (23 apariciones) y
`adapt`/`adaptation` (18) son centrales, pero **`feedback`, `test`/`testing` y `acceptance` no aparecen ni una vez**.
El framework se declara *"purposefully incomplete"* y *"a container for other techniques, methodologies, and
practices"*. Por eso la parte de ingeniería —liberación, testing de aceptación, validación de reglas, análisis de
impacto— se ancla fuera de Scrum, en Sommerville y Dumas.

### 3.2. El flujo, tal como ocurre hoy

Luego de que el equipo de desarrollo **libera un incremento**, éste se comunica al stakeholder. El stakeholder lo
**utiliza**, lo acepta o no, y genera un **feedback** que deriva en una de dos cosas: **incluir nuevos requisitos** o
**modificar** lo construido porque no lo valida. Es decir, la etapa de aceptación no siempre se pasa: hay mejoras que
deben hacerse para ser consistentes con los requisitos que él mismo definió originalmente — que es exactamente la
flecha superior del V-model (sección 2).

Ese feedback se da hoy **por múltiples canales**: por escrito, por llamadas telefónicas, o en instancias específicas
generadas para que ocurra. En particular, la **Sprint Review** es una instancia definida para hacer una recorrida del
sistema con el propio usuario y poder:

- **validar reglas de negocio** — confirmar que lo considerado se corresponde con la regla real;
- **analizar factibilidad** de los cambios pedidos;
- **priorizar** — determinar el orden de los cambios, para un análisis de factibilidad posterior y decidir si ese
  feedback se incorpora o no a la próxima iteración.

En términos del modelo del v2, el tramo se compone así (los códigos se mantienen para trazabilidad con
`MARCO_PROCESO_FEEDBACK_v2.md` y su diagrama BPMN):

| # | Actividad | Quién | ¿Definida en Scrum? |
|---|---|---|---|
| A2a | Liberación del incremento | Developers | ⚠ no → Sommerville sec. 2.3.2 y 8.3 |
| **A2b** | **Uso y testing de aceptación** | Stakeholder (+ AF) | ⚠ no → Sommerville sec. 8.4 y 20.4 |
| **A2c** | **Sprint Review** | PO, Developers, Stakeholders | ✅ sí — Scrum Guide p. 9 |
| A3a | Validación de reglas de negocio | AF ↔ Stakeholder | ⚠ no → Dumas sec. 4.4 y 5.4.2 |
| A3b | Validación de factibilidad técnica | Developers (+ PO) | ⚠ parcial → Sommerville sec. 25.3 |
| A4 | Incorporación al Product Backlog | AF, PO | ✅ parcial — Scrum Guide p. 6 |
| A5 | Refinement → reabre el ciclo | PO (+ Developers) | ✅ sí — Scrum Guide p. 10 |

**El feedback del negocio se genera en A2b y A2c** — el resto es lo que se hace con él. Y son **dos canales y dos
momentos**: el uso real del producto, que puede ser asincrónico y anterior a la ceremonia, y la ceremonia misma.

- [ ] Decidir si la tabla A2a–A5 se queda o si alcanza con la prosa (Daniel pidió *"unos párrafos"*; la tabla ayuda
      a la trazabilidad con el v2, pero puede leerse como que Scrum vuelve a ser la base).
- [ ] Chequear que las citas de la Scrum Guide sigan coincidiendo con `FUENTES_MARCO.md` (ya verificadas en v2).

## 4. Feedback con IA — categorías de técnicas

La IAG reformula algunas de las dinámicas descritas. Esta sección agrupa los trabajos relevados en **categorías con
nombre**, describe de qué trata cada una y qué efecto tiene la IA ahí, con sus beneficios y sus riesgos.

**Criterio de clasificación.** Las categorías se ordenan por **qué operación hace la IA sobre el ciclo de feedback** —
no por actividad, no por modelo de proceso, no por fase del SDLC. Un mismo trabajo puede tocar más de una categoría;
donde pasa, se dice. Declarar el eje importa porque en una primera versión de esta sección convivían tres ejes
distintos (qué hace la IA con el artefacto / quién opera la herramienta / qué artefacto sale) y las categorías se
pisaban entre sí.

**Etiquetas de fuente:** **[corpus]** paper del mapeo sistemático · **[general]** los cuatro artículos sobre IAG en el
desarrollo · **[gris]** preprint o prensa profesional, sin peer review · **[producto]** evidencia de mercado.

> ### ⚠ Advertencia metodológica — leer antes que las categorías
>
> **El corpus no fue construido para responder esta pregunta.** El string del sprint 5 fue
> `"generative AI" AND ("business users" OR clients OR stakeholders) AND "software development"`: **no contiene
> ningún término de testing, validación, aceptación ni feedback**. En consecuencia, 12 de los 12 papers
> peer-reviewed son de ingeniería de requisitos y prototipado, y **ninguno observa a un cliente reaccionando frente
> a software ya construido con IAG** — que es el objeto declarado de esta tesis.
>
> Esto tiene dos consecuencias que se sostienen a lo largo de la sección:
> 1. Las categorías describen **lo que el corpus contiene**, no el mapa completo del campo.
> 2. **Ninguna afirmación de hueco puede apoyarse en este corpus** (ver 4.7): un cero de un string que nunca
>    preguntó no es evidencia de ausencia.
>
> Las asignaciones fueron verificadas contra los PDF en agosto de 2026. De las que la versión anterior daba por
> buenas, **cuatro resultaron falsas** — el agrupamiento por título tiene tasa de error alta y no se usa acá.

### 4.1. La IA **emite** el feedback — impersonación de stakeholders

Una IA configurada para representar a un stakeholder y emitir feedback como si fuera él, sin depender de su
disponibilidad. Es la categoría que más directamente toca el **objetivo C**.

- **Efecto:** el stakeholder deja de ser el único emisor y pasa a **validador** de lo que la IA devolvió. El beneficio
  que se le atribuye es la disponibilidad continua (feedback 24/7, sin coordinar agendas).
- **Riesgo:** no es el stakeholder real. El límite lo formula bien REConnect, que pide que el humano quede como
  *"curator of AI outputs"* **[gris: `damian2025reconnect` v1]**. **Ojo con este paper:** *no* critica la
  impersonación — al contrario, avala generar personas sintéticas (*"simulate user perspectives… enhancing the
  inclusivity"*) siempre que un humano las cure. Sirve como límite a la **sustitución**, no a la técnica.
- **Objetivo B:** altera **frecuencia** y **temporalidad**.

> ⚠ **Esta categoría no tiene respaldo del corpus.** La versión anterior la apoyaba en `raftopoulos2024designing`,
> que **no trata de esto**: es diseño participativo con cartas de cartón y Lego Serious Play; sobre su texto
> completo, `impersonat` = 0, `LLM` = 0, `GPT` = 0 apariciones. Queda sostenida solo por Pirozzi (2024, revista
> profesional, **no peer-reviewed**) y por productos. **O se consigue evidencia académica con una búsqueda dirigida,
> o la categoría se declara [gris]+[producto].**
>
> `raftopoulos2024designing` reubicado: es un antecedente de **métodos participativos de co-diseño pre-IAG**, útil
> para el objetivo A (dinámicas tradicionales) o para diseñar los talleres de la PoC.

### 4.2. La IA **captura** lo que se dijo — asistentes de reunión

Asistentes LLM que acompañan una reunión y devuelven resumen, tickets y señales de riesgo
**[corpus: `cabrero2024exploring`]**.

- **Alcance real, y es una limitación fuerte:** el estudio cubre **Daily Scrum y refinamiento de features** — o sea
  **reuniones internas del equipo**. Sobre su texto: `Sprint Review` = 0, `client` = 0 apariciones. **No hay negocio
  en la sala.** Es evidencia de coordinación intra-equipo, no del intercambio con el stakeholder: entra como
  contexto, no como núcleo.
- **Qué hace, verificado:** detecta riesgos de sobrecompromiso e impedimentos no visualizados; resume el Daily. **No
  transcribe** — los autores lo declaran trabajo futuro y alimentan el asistente con planillas cargadas a mano.
- **Riesgo:** qué se pierde en el resumen; y si la presencia del asistente cambia lo que se dice.
- **Objetivo B:** altera **granularidad** del registro.

### 4.3. La IA **trabaja el artefacto de requisito** — formular, revisar, juzgar, rutear

Agrupa lo que antes estaban separado en tres categorías que se solapaban: reformular el enunciado, evaluar su calidad
y convertir input disperso en trabajo accionable. Son la misma operación sobre el mismo artefacto; lo único que
cambia es si la salida es una reescritura, un veredicto o un ticket.

- **Reformulación asistida del enunciado del stakeholder** **[corpus: `mircea2026supporting`, REFSQ 2026]** —
  *"LLM-assisted reformulation improves perceived completeness, clarity, and alignment"*, con 26 participantes; usa
  los LLM como *"articulation aids"* y mantiene al stakeholder *"in the validation loop"*.
- **Generación asistida de criterios de aceptación** **[corpus: `abbasi2025towards`]** — el prototipo se llama
  *Acceptance Criteria Assistant*: el ingeniero entra una user story y elige o edita los criterios que proponen
  varios modelos. ⚠ **Sin evaluación empírica** (la evaluación con practicantes está planificada, no hecha) y **el
  usuario es el ingeniero de requisitos, no el stakeholder**.
- **Evaluación automática de la calidad del artefacto** **[gris: `geyer2025epics`]** — LLMs que *evalúan* la calidad
  de épicas; la IA juzga, no genera. Evaluadores: 17 product managers, no clientes.
- **De feedback disperso a trabajo accionable** **[gris: `torun2025bugtracking`]** — reportes de bug en lenguaje
  natural que la IA completa con preguntas de seguimiento cuando faltan pasos de reproducción, y luego intenta
  reproducir. **Es el único trabajo del corpus que opera sobre software ya construido.** Se suman productos que van
  de feedback a tickets o de entrevistas a reportes **[producto: `kraftful`, `versive`]**.
- **Riesgo transversal:** que el LLM *sustituya* la intención original en vez de articularla; y que el criterio del
  evaluador automático reemplace al del negocio sin que nadie lo note.
- **Objetivo B:** altera **granularidad** y **secuencia**.

> **Nota de encuadre — no confundir con la masa del corpus.** Las tres revisiones sistemáticas del área
> (**[corpus: `vasudevan2025role`, `fischer2026generative`, `cheng2026generative`]**) **no** son evidencia de esta
> categoría: son tres mediciones del mismo campo y se usan en 4.7 para encuadrar. Sacándolas, la evidencia primaria
> acá son 4 estudios, no 7.
>
> **`stein2026integrating` fue removido de esta categoría.** No asiste a nadie: es un método de *benchmarking* de
> LLMs y estrategias de prompting contra ground truth, con un diálogo de stakeholder ficticio y estático, sin humano
> en el loop. Su *"Self-Refine"* es una técnica de prompting (auto-reflexión del modelo), **no** refinamiento de
> requisitos con el cliente. Encaja mejor como *"evaluación de capacidad técnica de LLMs en tareas de RE"*.

### 4.4. La IA **construye** algo mirable o ejecutable — materialización temprana

En vez de devolver texto, se devuelve algo con lo que el stakeholder puede interactuar. Es la categoría más ligada a
la **validación temprana**, y se subdivide por **quién opera la herramienta**.

**(a) La opera el equipo.** Prototipos de interfaz generados desde user stories **[corpus: `kretzer2025closing`]**;
prototipos analíticos y reportes visuales en BI **[gris: `busany2024bi`]**; elicitación y prototipado desde bocetos
**[gris: `alabsi2026empirical`]**.

**(b) La opera el usuario de negocio, sin intermediario técnico.** La visión de *end-user software engineering*, con
requisitos en lenguaje natural como artefacto central **[corpus: `robinson2025requirements`]**; productos que van de
la intención a la app **[producto: `emergent`]** y de la call al spec con criterios de aceptación *policy-aware*
**[producto: `pmagent`]**; y el fenómeno reportado de usuarios de negocio construyendo sus propias apps
**[gris: prensa profesional]**.

- **Efecto:** adelanta el momento en que se puede reaccionar — se opina sobre algo concreto, no sobre una
  descripción. Robinson lo formula bien: *"seeing a tangible product can unearth elements of the requirements that
  were assumed subconsciously but not articulated"*.
- **Riesgo:** el prototipo puede inducir la respuesta; validar rápido puede sacrificar calidad de UX en favor de la
  velocidad **[general: Cornide-Reyes et al. 2025]**; y el pivote de dos productos relevados
  **[producto: `tusk`, `sweep`]** sugiere que el modo autónomo sin validador humano todavía no cierra.
- **Objetivo B:** altera **temporalidad** (el momento en que el feedback es posible).

> ⚠ **Tres precisiones que la versión anterior se saltaba:**
> - **Kretzer no involucra al negocio.** Es un plug-in de Figma para integración *cross-functional* entre UX, PO y
>   developers: `client` = 0, `end-user` = 0 apariciones; sus "stakeholders" son roles internos; los participantes
>   fueron estudiantes y crowd-workers. Y los autores declaran que *"we did not evaluate the assistant in a co-design
>   situation involving multiple stakeholders"*. **Lo que adelanta es la sincronización intra-equipo, no la reacción
>   del negocio.** Su aporte más cercano a esta tesis es la dirección inversa: reconocer si un requisito ya está
>   cumplido en la GUI, y derivar user stories desde interfaces existentes.
> - **Alabsi es evidencia débil:** escenario simulado, un solo sketch, 3 evaluadores todos técnicos, preprint sin
>   peer review. Los autores admiten que *"may not fully represent the perspectives of non-technical stakeholders"*.
>   No sostiene afirmaciones sobre dinámicas con el negocio.
> - **Robinson es paper de visión** (TOSEM), sin estudio empírico. Es el mejor encaje conceptual del corpus con esta
>   tesis —cubre elicitación *y* validación por el usuario final— pero aporta agenda, no evidencia.

### 4.5. La IA **valida contra reglas y procesos de negocio**

Categoría necesaria para el **objetivo D** —validación de reglas de negocio y flujos operativos, que es la mitad del
planteo de esta tesis— y hoy **prácticamente vacía**.

- El único trabajo del corpus que apunta acá es **[corpus: `lindenberg2025business`]** (*Business Process Discovery
  Through Agentic Generative AI*), y **no se pudo verificar**: sin acceso abierto, abstract elidido por el editor.
  La pregunta decisiva —si los agentes conversan con stakeholders humanos reales o con informantes simulados— es
  justamente la que no se puede responder sin el texto. **No se le asigna contenido hasta conseguirlo.**
- El anclaje conceptual de la validación semántica de reglas contra el proceso real sigue siendo **Dumas et al.
  (2018)**, secs. 4.4 y 5.4.2 — que en el v2 sostenía la actividad A3a y que esta sección no debe perder.
- **Objetivo B:** sin evidencia para afirmar nada todavía.

> **Pendiente bloqueante:** conseguir Lindenberg (biblioteca ORT / Timbó). Sin esta categoría, el objetivo D queda
> huérfano en todo el marco.

### 4.6. Nota sobre el tramo técnico (generación de código con validación humana)

El **objetivo A** nombra el feedback *técnico*, y el **C** la reconfiguración del rol del developer. El corpus
académico no cubre ese tramo, pero la evidencia de mercado sí y está relevada: agentes que van de ticket a PR
**[producto: `devin`, `codegen`, `tusk`, `sweep`]**, con el developer como compuerta de aprobación.

- [ ] **Decisión:** o esto abre categoría propia, o se justifica por escrito por qué queda fuera —dado que el
      objetivo A lo nombra explícitamente y `startups_relacionadas.md` observa que "el tramo técnico está saturado".
      Nota: las referencias clave de `CLAUDE.md` sobre esta dimensión (Perry et al. 2023; Vaithilingam et al. 2022)
      no están citadas en ninguna parte del marco.

### 4.7. Qué está cubierto y qué no — con las cautelas del caso

Esta subsección reemplaza al antiguo *"hueco declarado"*, que **era refutable con el propio corpus**.

**Lo que la evidencia disponible sí cubre**, y que por lo tanto **no** puede reclamarse como hueco:

| Actividad | Estado | Evidencia |
|---|---|---|
| Generar **criterios de aceptación** desde requisitos | **Cubierto** | `abbasi2025towards` (*Acceptance Criteria Assistant*); `stein2026integrating` (los genera en su Task 3); `pmagent` **[producto]** |
| Generar y ejecutar **tests de aceptación** | **Cubierto** (fuera del corpus) | Literatura de *acceptance test generation* con LLM: escenarios Gherkin desde user stories → scripts ejecutables; hay survey 2026 del área |
| **Validación de requisitos** como fase de RE | **Cubierto y en disputa** | Ver discrepancia abajo |

**Lo que no se encontró cubierto:** la **instancia de aceptación negociada con el stakeholder real sobre software ya
construido** — el momento en que la persona de negocio usa el producto y dice "esto no es lo que pedí". Las técnicas
de arriba automatizan el **artefacto** (criterio, test, ticket) y miran hacia adentro del equipo; el **ciclo de
feedback humano** en esa instancia es lo que ninguna de las verificaciones logró encontrar tratado.

> ⚠ **Esta afirmación todavía no está probada y no debe presentarse como hallazgo.** Requiere una **búsqueda
> dirigida y documentada** (`"acceptance testing"` / `"user acceptance"` / `"UAT"` / `"acceptance criteria"` +
> GenAI). Un cero con string documentado sería evidencia legítima; el silencio del string actual —que nunca preguntó
> por estos términos— no lo es.

**Tres cautelas que hay que declarar en el texto final:**

1. **Fechado de la cita de Nguyen-Duc.** El pasaje *"other areas of testing are not currently the focus of existing
   studies, i.e. acceptance testing…"* **[general]** es literal y correcto, pero su relevamiento **cierra en octubre
   de 2023**. Citarlo como "(2025)" para sostener un hueco en 2026, teniendo corpus 2024–2026 que lo matiza, es
   indefendible. Citar como *"relevamiento con corte oct-2023"*.
2. **Las SLR del corpus se contradicen entre sí sobre la validación.** `cheng2026generative` (238 artículos, la más
   grande y reciente) reporta que *"studies on requirement validation had a share of 19,0%"* — o sea, **no** está
   subexplorada. `fischer2026generative` (37 publicaciones) dice lo contrario: validación = 4/37, *"remain
   underexplored"*. **Hay que declarar la discrepancia, no elegir la cita conveniente.**
3. **Ojo con el falso amigo "validation".** En las SLR, *requirement validation* significa contrastar requisitos con
   expectativas **antes de construir** — no aceptación de software entregado. Usar sus cifras como proxy del foco de
   esta tesis es medir otra cosa.

**Y una objeción que hay que enfrentar de frente:** Lang y Fischer no leen el vacío como oportunidad sino como
inadecuación — *"requirement validation is less suitable for AI-driven automation, which explains its limited
presence in research"*. Si esta tesis sostiene lo contrario, tiene que argumentarlo explícitamente, no ignorarlo.

**Un dato mejor para encuadrar el aporte:** `cheng2026generative` reporta que **más del 90 % de los estudios son de
etapa temprana y solo el 1,3 % llega a integración en producción**. La brecha más defendible del campo hoy no es de
fase del proceso, sino de **adopción industrial y evidencia empírica de campo**.

### 4.8. Pendientes de esta sección

- [ ] **Bloqueante — búsqueda dirigida** de acceptance testing / UAT / criterios de aceptación + GenAI, documentada
      como las del sprint 5. Destraba 4.1 (evidencia de impersonación), 4.7 (el hueco) y la decisión de alcance.
- [ ] **Bloqueante — decisión de alcance.** El marco excluye elicitación inicial y prototipado, pero 4.3 y 4.4 son
      casi enteramente eso. O se amplía el alcance declarado a todo el intercambio con el stakeholder
      (requisitos ↔ aceptación, que es lo que ya hace la sec. 2 con las dos puntas del V), o se mantiene angosto y se
      reporta la cobertura del corpus como limitación metodológica. **Hoy el documento dice una cosa y el corpus es
      otra.**
- [ ] Conseguir los tres papers no leídos: `lindenberg2025business` (bloquea 4.5 y el objetivo D),
      `mircea2026supporting` y `alabsi2026empirical` (Research Square es de acceso abierto).
- [ ] Decidir el tramo técnico (4.6).
- [ ] Recuperar del v2 lo que se perdió en la reescritura: `pmagent` ya volvió; revisar `IDEAS_POC.md` por técnicas
      sin categoría (generación de preguntas / Quest-RE, RECOVER, chatbot sobre low-code) y el concepto propio de
      *"firewall" de feedback* (sprint 11), que es lo más cercano al objetivo D que hay en el proyecto.
- [ ] Tabla resumen **categoría × dimensión del objetivo B** al cierre de la sección.
## 5. Vínculo con el gráfico de escenarios de uso (Nguyen-Duc et al.)

*Qué va:* ubicar las categorías de la sección 4 en el gráfico de escenarios (niveles humano ↔ IA). **Si no encaja fácil, no forzarlo:** el gráfico igual sirve para mostrar los distintos niveles de interacción.

- [ ] Reusar la figura de escenarios (S1–S4) del v2 / `sprint 15/diagramas/`.
- [ ] Mapear cada categoría a un nivel (asiste / automatiza), sin obsesionarse con la clasificación exacta.

## 6. Aspectos no considerados / problemas abiertos

*Qué va:* al final o ligado a la sección 4. Necesidades sin trabajo asociado y oportunidades a futuro. Es **solo contexto, no una propuesta concreta**.

- [ ] Listar gaps (p. ej. acceptance testing poco estudiado; feedback indirecto por telemetría/ML queda fuera de alcance).

---

## Definiciones a explicitar

- **Stakeholder** — Sommerville lo define en sec. 4.1 (cap. 4, *Requirements engineering*): *"System stakeholders
  include anyone who is affected by the system in some way and so anyone who has a legitimate interest in it.
  Stakeholders range from end-users of a system through managers to external stakeholders such as regulators, who
  certify the acceptability of the system."* Es una definición **amplia** (incluye usuario final, cliente,
  reguladores). Sobre ella hay que **acotar el foco de la tesis**: un representante que **prueba el producto y opina
  de forma verbal**, excluyendo el feedback indirecto (telemetría/ML, auto-PRs). La cita da el paraguas; el recorte
  es nuestro y hay que declararlo como tal.
- **Analista funcional:** rol clásico (validación de reglas de negocio). No sobre-formalizar; se decide luego si es rol propio o se absorbe en el Product Owner.

---

## Qué falta (bloqueantes reales)

| # | Falta | Por qué / cómo se destraba |
|---|---|---|
| 1 | ~~Fuente citable del V-model~~ **Resuelto** | → `pressman2020software` **cap. 2** (+ `rook1986controlling` como origen histórico), cargadas en `FUENTES_MARCO.bib`. Se cita **por capítulo**, no por figura, así que no hace falta el ejemplar. **Descartado el V-Modell XT:** abandonó el diagrama en V y se organiza por *Vorgehensbausteine* / *Entscheidungspunkte* / *Projekttypen* — citarlo para el V clásico habría sido un error. |
| 2 | **Cerrar la lista de categorías (sec. 4)** | Requiere pasar por el corpus (`sprint 12/REFERENCIAS.*` + sección 5 del v2) y decidir el agrupamiento. Es trabajo de criterio, no mecánico. |
| 3 | **Figuras** | V-model y escenarios: ver qué se reusa de `sprint 15/diagramas/`. |

**Meta B3:** versión escrita y prolija para decidir por dónde encarar la experimentación / PoC.
