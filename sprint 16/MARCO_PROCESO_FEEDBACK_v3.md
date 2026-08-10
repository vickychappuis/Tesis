# Marco del proceso de feedback — v3

> Reescritura de `sprint 15/MARCO_PROCESO_FEEDBACK_v2.md` **desacoplada de Scrum**, contada de lo general a lo
> particular según la narrativa que bajó Daniel (30 jul; ver la tabla de pasos en `sprint 15/resumen_call.md`).
> Sigue siendo **estado del arte, sin propuesta propia todavía** — todo esto es contexto.
>
> **Fuentes:** se reutilizan `sprint 15/FUENTES_MARCO.{md,bib}` y `sprint 12/REFERENCIAS.{md,bib}`; se suman
> Sommerville y Pressman como anclajes del proceso, y los hallazgos de la búsqueda dirigida de la sec. 4.7.
>
> **Estado (10-ago-2026):** secciones 1–6 redactadas; las asignaciones de la sec. 4 están verificadas contra los
> PDF. Pendientes: tabla *Qué falta*, al final.
>
> **Encuadre del alcance** — surge del resultado de la búsqueda dirigida (sec. 4.7) y atraviesa todo el documento:
> el corpus del mapeo sistemático es **literatura adyacente que enmarca el problema** (elicitación, prototipado,
> asistencia sobre el artefacto de requisito); lo que **sí** existe sobre aceptación es un cuerpo consolidado que
> automatiza el *artefacto* (tests y criterios); y la **interacción de validación del stakeholder de negocio sobre
> software funcionando** es la celda vacía — el objeto de esta tesis y de la PoC.

---

## 1. Proceso de desarrollo de software (Sommerville) → requisitos y V&V

Un **proceso de software** es *"una secuencia de actividades que conduce a la producción de un producto de
software"*, y **cuatro actividades fundamentales son comunes a todos los procesos de software**
[`sommerville2016software`, sec. 1.1.1]. El capítulo 2 las desarrolla como *process activities* (íd., sec. 2.2):

| # | Actividad (Sommerville) | Qué pasa ahí | Sec. |
|---|---|---|---|
| 1 | **Especificación** del software | *"customers and engineers define the software that is to be produced and the constraints on its operation"* | 2.2.1 |
| 2 | **Diseño e implementación** | el software se diseña y se programa | 2.2.2 |
| 3 | **Validación** (V&V) | *"the software is checked to ensure that it is what the customer requires"* | 2.2.3 |
| 4 | **Evolución** | el software se modifica para reflejar requisitos cambiantes del cliente y del mercado | 2.2.4 |

Sommerville aclara que estas actividades genéricas *"pueden organizarse de distintas formas y describirse a distintos
niveles de detalle, según el tipo de software"* [`sommerville2016software`, sec. 1.1.1] — lo que habilita el encuadre
agnóstico al modelo de proceso que sostiene este marco.

**De las cuatro, dos involucran directamente al stakeholder** y son el foco de este documento:

- **Especificación / requisitos (1)** — por definición se hace *con* el cliente: es donde se define qué hay que
  construir. Sommerville la llama *requirements engineering* (cap. 4).
- **Validación / V&V (3)** — el chequeo es contra *lo que el cliente requiere*, no solo contra el documento: la
  V&V *"muestra que un sistema tanto se ajusta a su especificación como cumple las expectativas del cliente"*
  [`sommerville2016software`, sec. 2.2.3]. Dentro de V&V, el *user testing* y el *acceptance testing* son las
  instancias donde el stakeholder participa en persona [íd., sec. 8.4].

Diseño/implementación (2) y evolución (4) quedan como contexto: producen y mantienen lo que el stakeholder
después ve, pero no son puntos de intercambio con él.

## 2. Verificación y validación: el V-model → las puntas son el feedback del stakeholder

El V-model ordena las actividades del proceso en una **V**: la rama descendente son las etapas de definición
(*verificación*) y la ascendente las de prueba (*validación*), con la codificación en el vértice
[`pressman2020software`, cap. 2]. Lo relevante para este marco no son los niveles en sí, sino las **flechas
horizontales**: cada nivel de definición tiene su nivel de prueba correspondiente, y **se prueba contra lo que ese
nivel definió**.

![Fig. 2.7 de Sommerville (2016): Testing phases in a plan-driven software process](figuras/sommerville_fig2_7_testing_phases.png)

*Fig. 2.7 de Sommerville (2016), sec. 2.2.3 — "Testing phases in a plan-driven software process". Es la versión
citable del V-model: el propio texto dice* "This is sometimes called the V-model of development (**turn it on its
side to see the V**)". *Reproducción literal del ejemplar, con fines académicos.*

En la nomenclatura más difundida del modelo, los niveles se nombran así:

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

La formulación clásica de las dos ramas es de Sommerville: *"Validation: Are we building the right product? ·
Verification: Are we building the product right?"* [`sommerville2016software`, cap. 8, introducción]. Como fuente
del modelo se cita `pressman2020software`, cap. 2 (*Process Models*) — presenta la misma correspondencia superior
**requisitos ↔ aceptación**; los nombres de los demás niveles varían entre presentaciones —, y como origen
histórico, `rook1986controlling`.

> ⚠ Tanto Pressman como Sommerville presentan el V-model como variante de **cascada**. No invalida el uso que le
> damos, pero hay que decirlo explícitamente: acá entra como **ilustración de la correspondencia** definición ↔
> prueba, no como modelo de proceso a seguir. Cuántas veces se recorre la V es justamente lo que cambia entre
> modelos — y eso es lo que abre la sección 3.

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

Y lo que Scrum **no** define: en el texto completo de la Guía, **`feedback`, `test`/`testing` y `acceptance` no
aparecen ni una vez** — el framework se declara *"purposefully incomplete"*. Por eso la parte de ingeniería
—liberación, testing de aceptación, validación de reglas— se ancla fuera de Scrum, en Sommerville y Dumas.

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

## 4. Feedback con IA — categorías de técnicas

La IAG reformula algunas de las dinámicas descritas. Esta sección agrupa los trabajos relevados en **categorías con
nombre**, describe de qué trata cada una y qué efecto tiene la IA ahí, con sus beneficios y sus riesgos.

**Criterio de clasificación.** Las categorías se ordenan por **qué operación hace la IA sobre el ciclo de feedback** —
no por actividad, no por modelo de proceso, no por fase del SDLC. Un mismo trabajo puede tocar más de una categoría;
donde pasa, se dice.

**Etiquetas de fuente:** **[corpus]** paper del mapeo sistemático · **[general]** los cuatro artículos sobre IAG en el
desarrollo · **[gris]** preprint o prensa profesional, sin peer review · **[producto]** evidencia de mercado.

> **Alcance.** El corpus original se armó con un string sin términos de testing, validación ni aceptación (sprint 5);
> por eso sus papers son de ingeniería de requisitos y prototipado, y las categorías que siguen describen **la
> literatura adyacente que enmarca el problema**, no el objeto de la tesis. Esa laguna se cubrió con la búsqueda
> dirigida de 4.7, que confirmó que el hueco es real y no un artefacto del string.

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

> ⚠ **Esta categoría no tiene respaldo del corpus:** queda sostenida solo por Pirozzi (2024, revista profesional,
> **no peer-reviewed**) y por productos — o aparece evidencia académica, o se declara [gris]+[producto].
> (`raftopoulos2024designing`, que antes se citaba acá, no trata de esto: es co-diseño participativo pre-IAG, sin
> LLMs; queda como antecedente para el objetivo A y para los talleres de la PoC.)

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
- **Señalado, sin verificar:** *RECOVER* (Voria et al., IEEE TSE 2025) — requisitos generados desde conversaciones
  con stakeholders. Mapearía acá, pero quedó fuera del corpus (snowballing, `sprint 12/IDEAS_POC.md`) y su ficha no
  se verificó contra el PDF.
- **Objetivo B:** altera **granularidad** del registro.

### 4.3. La IA **trabaja el artefacto de requisito** — formular, revisar, juzgar, rutear

Reformular el enunciado, evaluar su calidad y convertir input disperso en trabajo accionable: es la misma operación
sobre el mismo artefacto; lo que cambia es si la salida es una reescritura, un veredicto o un ticket.

- **Reformulación asistida del enunciado del stakeholder** **[corpus: `mircea2026supporting`, REFSQ 2026]** — el
  participante escribe cinco user stories, un LLM se las devuelve reescritas y él las compara con su original. 26
  participantes, 130 pares; todas las dimensiones mejoran (p<.001). El 43 % de las revisiones sacó a la luz aspectos
  que el participante no había mencionado y consideraba importantes; solo el 5 % introdujo errores. Es el caso más
  limpio de esta categoría: el LLM **no genera ni juzga**, reformula para que el humano apruebe. Su encuadre propio
  —**"AI-in-the-Loop"**, el humano conduce y la IA asiste— se opone explícitamente a tratar al LLM como productor
  autónomo, y es un matiz aprovechable para este marco.
  ⚠ **Alcance:** los 26 son *"software engineering students and professionals"*, todos usuarios activos de IDEs —
  **no hay actores de negocio**; el eje baja/alta experiencia es experiencia con IDEs, no negocio vs. técnico. Y es
  elicitación sobre un IDE hipotético: no hay software construido en ningún punto.
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
- **Señalado, sin verificar:** *Quest-RE* (Hasso et al. 2024) — generación de preguntas de elicitación; misma
  operación que las preguntas de seguimiento de Torun, pero en elicitación. Fuera del corpus
  (`sprint 12/IDEAS_POC.md`), ficha sin verificar contra el PDF.
- **Riesgo transversal:** que el LLM *sustituya* la intención original en vez de articularla; y que el criterio del
  evaluador automático reemplace al del negocio sin que nadie lo note.
- **Objetivo B:** altera **granularidad** y **secuencia**.

> Las tres revisiones sistemáticas del área (**[corpus: `vasudevan2025role`, `fischer2026generative`,
> `cheng2026generative`]**) **no** son evidencia de esta categoría — se usan en 4.7 para encuadrar; la evidencia
> primaria acá son 4 estudios. Y `stein2026integrating` fue removido: es *benchmarking* de LLMs contra ground truth,
> sin humano en el loop (su *"Self-Refine"* es una técnica de prompting, no refinamiento con el cliente).

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
**[gris: prensa profesional]**. Señalado sin verificar: el chatbot para no expertos sobre low-code/no-code de
De Troyer et al. (IFIP HCI 2025) mapearía acá (fuera del corpus, `sprint 12/IDEAS_POC.md`, ficha sin verificar).

- **Efecto:** adelanta el momento en que se puede reaccionar — se opina sobre algo concreto, no sobre una
  descripción. Robinson lo formula bien: *"seeing a tangible product can unearth elements of the requirements that
  were assumed subconsciously but not articulated"*.
- **Riesgo:** el prototipo puede inducir la respuesta; validar rápido puede sacrificar calidad de UX en favor de la
  velocidad **[general: Cornide-Reyes et al. 2025]**; y el pivote de dos productos relevados
  **[producto: `tusk`, `sweep`]** sugiere que el modo autónomo sin validador humano todavía no cierra.
- **Objetivo B:** altera **temporalidad** (el momento en que el feedback es posible).

> ⚠ **Tres precisiones verificadas contra los PDF:**
> - **Kretzer no involucra al negocio:** es un plug-in de Figma para sincronización intra-equipo (UX, PO, devs);
>   `client` = 0 apariciones y sin evaluación en co-diseño con stakeholders. Su aporte más cercano a esta tesis es
>   la dirección inversa: derivar user stories desde interfaces existentes.
> - **Alabsi no tiene participantes:** el rol de stakeholder fue *simulado*, un solo sketch, 3 evaluadores técnicos
>   y **una sola pasada** — no observó ningún ciclo de feedback; su *"enables earlier validation"* es inferencial,
>   no medido. Sirve como encuadre (el prototipo como *boundary object*) y como evidencia del hueco.
> - **Robinson es paper de visión** (TOSEM), sin estudio empírico: el mejor encaje conceptual del corpus, pero
>   aporta agenda, no evidencia.

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

### 4.6. Nota sobre el tramo técnico (generación de código con validación humana)

El **objetivo A** nombra el feedback *técnico*, y el **C** la reconfiguración del rol del developer. El corpus
académico no cubre ese tramo, pero la evidencia de mercado sí y está relevada: agentes que van de ticket a PR
**[producto: `devin`, `codegen`, `tusk`, `sweep`]**, con el developer como compuerta de aprobación.

Si entra al marco como categoría propia o se justifica su exclusión es una decisión abierta (ver *Qué falta*, al
final del documento).

### 4.7. Qué está cubierto y qué no — resultado de la búsqueda dirigida

El corpus original no podía responder esta pregunta: su string no contenía términos de testing ni de aceptación. Por
eso se hizo una **búsqueda dirigida y documentada** (agosto 2026) con los términos faltantes.

**Método.** Cuatro strings booleanos sobre la API de arXiv (con conteos exactos), 14 búsquedas web y 3 consultas a
Semantic Scholar, filtro 2023 en adelante:

| String (campo `abs:`) | Total arXiv | Relevantes |
|---|---|---|
| `"acceptance testing" AND ("large language model" OR "generative AI" OR LLM)` | 13 | 6 |
| `"acceptance criteria" AND ("large language model" OR "generative AI" OR LLM)` | 31 | 9 |
| `"user acceptance testing" OR "UAT"` | 55 ⚠ | ~4 |
| `("acceptance test" OR "acceptance tests") AND (Gherkin OR BDD OR "behaviour-driven")` | 7 | 5 |

⚠ El total de 55 está contaminado: en arXiv, "UAT" matchea mayoritariamente *Universal Approximation Theorem*. **No
citar ese número.**

**Resultado: 24 trabajos de tipo A, 0 de tipo B.**

- **Tipo A — generar el artefacto** (tests, criterios, escenarios Gherkin). Actividad técnica; el usuario es
  developer, tester o PO revisando artefactos. Cuerpo consolidado y creciente, 2024–2026, en AST, ASE, ISSTA, ICSE,
  RE, SIGCSE, SAC.
- **Tipo B — estudiar la interacción de validación del stakeholder**: una persona de negocio usando el software
  construido y devolviendo si es lo que pidió. **Ninguno.**

**El hueco es real y no es un artefacto del string original:** se buscó con los términos correctos y tampoco apareció.

#### Tres piezas que lo demuestran sin depender de una ausencia

1. **Por contradicción.** *XUAT-Copilot* es el único trabajo con "User Acceptance Testing" en el título, y su
   contribución es **sacar al humano del UAT** — tres agentes LLM automatizan los scripts. Lo mismo hace
   *GUISpector* con la verificación de prototipos GUI: automatiza justamente la validación que haría el stakeholder.
   El único campo dedicado a la aceptación trata el rol humano como trabajo a eliminar, no como interacción a
   estudiar.
2. **El campo registra la práctica y no la estudia.** Fonseca et al. (ASE 2025, caso BMW) reportan como hallazgo
   *lateral* que el Gherkin generado terminó usándose como **artefacto de validación revisado por stakeholders** en
   vez de ejecutarse. Es evidencia práctica de que la validación del stakeholder ocurre en la industria — dentro de
   un paper que estudia otra cosa.
3. **Asimetría industria ↔ academia.** Las búsquedas de *product owner / business analyst + validación + empírico* y
   de *vibe coding + no programadores + empírico* devolvieron **0 papers y 18 de 18 enlaces comerciales** (blogs de
   consultoras, Scrum.org, cursos). La industria habla del tema constantemente; la literatura no lo cubre.

#### Dónde está el hueco, exactamente

Cruzando **quién es el sujeto** con **en qué momento del ciclo actúa la IA**:

| | La IA procesa feedback **ya emitido** | La IA media **el acto de emitirlo** |
|---|---|---|
| Sujeto = corpus de texto | **Saturado** — minería de reviews con LLM | vacío |
| Sujeto = developer | trazabilidad issue↔commit | **Poblado** — *vibe coding* |
| Sujeto = **actor de negocio real** | casi vacío | ⬛ **el hueco** |

Los dos cuerpos grandes están desplazados **en las dos dimensiones a la vez**: la minería de reviews usa la IA para
*digerir* feedback que el usuario ya emitió por canales tradicionales —el usuario es un corpus histórico y el ciclo
nunca se observa como interacción—; y el *vibe coding* sí tiene humanos reales, pero el no técnico allí está
**construyendo**, no validando lo que otro construyó.

> **Cómo enunciarlo.** No como ausencia ("no hay literatura") sino como desplazamiento: *hay un cuerpo consolidado
> sobre generación automática de tests y criterios de aceptación con IAG, y literatura abundante sobre IA que
> procesa feedback ya emitido; no hay literatura empírica sobre cómo se reconfigura la interacción de validación del
> stakeholder de negocio frente a software funcionando.*

#### El hueco sobre el proceso de aceptación de Sommerville

El mismo resultado puede leerse sobre un diagrama canónico de manual. Sommerville descompone el *acceptance testing*
en **seis etapas** [`sommerville2016software`, sec. 8.4, Fig. 8.11]:

![Fig. 8.11 de Sommerville (2016): The acceptance testing process](figuras/sommerville_fig8_11_acceptance_testing.png)

*Fig. 8.11 de Sommerville (2016), sec. 8.4 — "The acceptance testing process". Reproducción literal del ejemplar,
con fines académicos.*

Cruzando esas etapas con lo relevado:

| Etapa | Cobertura en la literatura |
|---|---|
| 1 · Define acceptance criteria | **Cubierto** — `abbasi2025towards` (*Acceptance Criteria Assistant*), `stein2026integrating`, `pmagent` |
| 2 · Plan acceptance testing | sin trabajos relevados |
| 3 · Derive acceptance tests | **Cubierto** — el grueso de los 24 trabajos tipo A (user stories → Gherkin → scripts) |
| 4 · Run acceptance tests | **Parcial** — hay trabajos que lo automatizan sacando al humano del circuito |
| 5 · **Negotiate test results** | ⬛ **sin trabajos** |
| 6 · **Accept or reject system** | ⬛ **sin trabajos** |

El corte es limpio: **la literatura cubre las etapas donde el producto es un artefacto (1, 3, 4) y no toca aquellas
donde el producto es un acuerdo entre personas (5 y 6)**.

Y el propio Sommerville anticipa por qué. De la etapa 5: *"the developer and the customer have to **negotiate** to
decide if the system is good enough to be used"*. De la etapa 4: *"**It is difficult to automate this process** as
part of the acceptance tests may involve testing the interactions between end-users and the system"*. El manual dice
que ahí la interacción humana resiste la automatización — y es exactamente donde esta tesis se ubica.

#### Por qué el hueco importa — evidencia de que es un problema, no un nicho

Tres trabajos convergen en que **la capacidad de generar se democratizó y la de validar no**:

- **Virk y Liu (VL/HCC 2025)** — profesionales de marketing y ventas evaluando análisis generados por IA:
  *"business professionals cannot reliably verify AI-generated data analyses on their own"*, y fallan **incluso
  instruidos explícitamente a buscar errores**. Es el único trabajo hallado que pone actores de negocio reales a
  validar salida de IA. (Objeto: un análisis de datos, no software funcionando — ahí queda el margen de esta tesis.)
- **Fawzy et al. (2026)** — 162 *vibe coders* (no programadores, novatos y profesionales): el *perception–action
  gap*; el *vibe coding* *"is partially democratising as it broadens access to software creation without equally
  distributing the expertise to evaluate it"*.
- **Sharma et al. (2026), *Feedback by Design*** — cuatro barreras al feedback de calidad, derivadas de las máximas
  de Grice: **common ground, verifiability, communication, informativeness**. Es andamiaje conceptual casi directo
  para este marco y para el diseño de la PoC.

Y los dos papers del corpus que más prometían materialización temprana **declaran esta misma ausencia como
limitación y trabajo futuro**: `mircea2026supporting` (los participantes son técnicos; en grupos *"with limited
articulation ability"* los efectos podrían variar) y `alabsi2026empirical` (evaluadores todos técnicos, que *"may
not fully represent the perspectives of non-technical stakeholders"*).

**Cautelas de citado** (fechado de Nguyen-Duc, contradicción entre las SLR, los falsos amigos *validation* y
*acceptance*, la objeción de Lang y Fischer, y las bases sin totales citables): registradas en `NOTAS_MEMORIA.md` —
son reglas para la memoria final, no contenido de este marco.

### 4.8. Qué dimensión del ciclo altera cada categoría (objetivo B)

El objetivo B pregunta por cambios en **frecuencia, secuencia, granularidad y temporalidad** de los intercambios de
validación. Leídas con esa grilla, las categorías no son intercambiables:

| Categoría | Frecuencia | Secuencia | Granularidad | Temporalidad |
|---|:---:|:---:|:---:|:---:|
| 4.1 La IA emite el feedback | ✦ | | | ✦ |
| 4.2 La IA captura lo dicho | | | ✦ | |
| 4.3 La IA trabaja el artefacto | | ✦ | ✦ | |
| 4.4 La IA construye algo mirable | | ✦ | | ✦ |
| 4.5 La IA valida reglas de negocio | | | | |

Lecturas que se desprenden:

- **La frecuencia solo la altera 4.1.** Es la única categoría que rompe la dependencia de la agenda del stakeholder
  — porque sustituye al emisor. Todas las demás siguen esperando a que la persona esté disponible.
- **La temporalidad la alteran 4.1 y 4.4**, pero por vías opuestas: una adelanta el feedback *sustituyendo* a quien
  lo da; la otra adelanta el *momento en que hay algo que mirar*. Solo la segunda es compatible con mantener al
  stakeholder real en el circuito.
- **4.5 está vacía** porque su única fuente no se pudo verificar (ver 4.5), no porque no altere nada.
- **Ninguna categoría altera las cuatro dimensiones.** Esto acota lo que puede afirmarse: el estado del arte no
  sostiene todavía un cambio integral del ciclo, sino desplazamientos parciales y por vías distintas.

## 5. Dónde caen estas categorías en los escenarios S1–S4

Todo lo de la sección 4 muestra un mismo movimiento de fondo: actividades que hoy hace una persona empiezan a ser
asumidas por la IA. **Sauvola et al. (2024)** dan una escala para graduar ese movimiento — sus Tablas 1 y 2 —, y es
lo que permite ordenar las categorías por **cuánto** desplazan al humano, no por qué actividad tocan.

![Cuatro escenarios de uso de IAG en el desarrollo de software (S1–S4)](../sprint%2015/diagramas/escenarios_s1_s4.png)

Figura **propia**, elaborada a partir de las Tablas 1 y 2 del paper (se redibuja en vez de reproducir el original, y
se cita la fuente). Editable en `sprint 15/diagramas/escenarios_s1_s4.drawio`.

| Escenario | En una línea | Dónde caen las categorías |
|---|---|---|
| **S1** *Traditional Software Development Operations* | Humanos en todos los roles; las herramientas automatizan | Es el proceso **de hoy** — la línea de base de la sec. 3 |
| **S2** *AI in loop* | El humano domina; la IA automatiza partes de tareas y asiste decisiones | **La mayor parte del estado del arte**: 4.2 (asistentes de reunión), 4.3 (reformular, juzgar, rutear) y la rama (a) de 4.4, donde el equipo opera la herramienta |
| **S3** *AI assumes role(s)* | La IA asume roles seleccionados; el humano controla la operación | Dos puntos: **4.1**, donde la IA asume el rol de quien emite el feedback, y la rama (b) de **4.4**, donde el actor de negocio construye y el developer queda como compuerta |
| **S4** *Human-in-the-loop* | La IA gestiona varios roles; el humano vigila | **Ninguna categoría llega.** El candidato sería el tramo técnico autónomo (4.6), y el pivote de dos de los productos relevados sugiere que ese modo todavía no cierra |

**Qué se lee del mapeo.** El estado del arte se concentra en **S2** y toca **S3** en dos puntos; **nada llega a S4**.
Es un resultado, no una omisión: en ninguna de las vías relevadas el humano sale del circuito. Y las dos que llegan
a S3 lo hacen de maneras incompatibles entre sí — o la IA sustituye a quien emite el feedback (4.1), o lo emite un
humano de negocio que ahora también construye (4.4b).

> **Nota de honestidad sobre este mapeo.** Daniel señaló que si las categorías no encajan fácil en el gráfico, no
> hay que forzarlo. Encajan de forma razonable, pero con dos salvedades: (a) los escenarios de Sauvola describen
> **la organización del trabajo de desarrollo**, no específicamente el ciclo de feedback con el stakeholder, así que
> el mapeo es una lectura nuestra; (b) varias categorías tienen ramas que caen en escenarios distintos (4.4 sobre
> todo), de modo que **la unidad que se ubica en el gráfico no siempre es la categoría entera**.

## 6. Aspectos no considerados y problemas abiertos

Cierra el estado del arte con lo que **no** está cubierto. Es contexto para decidir por dónde encarar la
experimentación — **no una propuesta**.

### 6.1. El hueco principal

La **instancia de aceptación con el stakeholder real sobre software funcionando** (ver 4.7). Existe un cuerpo
consolidado sobre generar el *artefacto* de aceptación —tests, criterios, escenarios— y literatura abundante sobre
IA que *procesa* feedback ya emitido; no hay trabajo empírico sobre cómo se reconfigura la **interacción** de
validación. Los dos papers del corpus que más prometían en esa dirección declaran esa ausencia como trabajo futuro.

### 6.2. Necesidades sin trabajo asociado

- **Validación de reglas y flujos de negocio con IAG (objetivo D).** La categoría 4.5 está prácticamente vacía. Es
  la mitad del planteo de esta tesis y no encuentra respaldo en la literatura relevada.
- **El actor de negocio como validador de lo que la IA produjo.** La evidencia disponible sugiere que **no lo logra
  de forma confiable** (4.7): la capacidad de generar se democratizó y la de validar no. Nadie estudia qué
  andamiajes cerrarían esa brecha.
- **La calidad del feedback que el stakeholder logra emitir.** Las cuatro barreras de Sharma et al. —*common
  ground*, *verifiability*, *communication*, *informativeness*— están formuladas para agentes conversacionales, no
  para el ciclo cliente↔equipo de desarrollo. Trasladarlas es trabajo abierto.
- **El tramo técnico** (4.6), si se decide dejarlo fuera del marco.

### 6.3. Lo que queda fuera de alcance por decisión, no por vacío

- **Feedback indirecto por telemetría / ML** —analítica de uso, auto-PRs, detección de fricción—. Hay productos y
  literatura, pero el foco de esta tesis es la interacción con un representante que prueba y opina de forma verbal
  (ver *Definiciones*). Vale registrar la observación del tutor: ese feedback **igual termina entrando al equipo
  como feedback normal**, y su incorporación depende de otros stakeholders (quién paga, factibilidad).
- **Minería de reviews de app stores con LLM.** Es el subcampo más poblado de todos los relevados (~15 trabajos),
  pero opera *sobre feedback ya emitido* y del lado del equipo: el usuario es un corpus de texto histórico. Se
  menciona **como contraste**, que es donde rinde: ahí la IA digiere el feedback; acá se estudia la IA dentro del
  acto de emitirlo.
- **Elicitación inicial y prototipado.** Quedan fuera del objeto, pero **no** de la sección 4: son la literatura
  adyacente que enmarca el hueco.

### 6.4. Limitaciones de este relevamiento

- El corpus sistemático se armó con un string **sin términos de testing ni aceptación**; la búsqueda dirigida de
  4.7 lo compensa, pero no lo reemplaza — y de ACM DL, SpringerLink e IEEE Xplore faltan totales citables
  (`BUSQUEDAS_ORT.md`).
- **`lindenberg2025business` sin acceso**, lo que deja 4.5 y el objetivo D sin sustento verificable.
- Parte de la evidencia de mercado (productos) **no es académica** y se etiqueta como tal.

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

## Qué falta

| # | Falta | Por qué / cómo se destraba |
|---|---|---|
| 1 | **Decisiones de Victoria/Daniel** | (a) el tramo técnico de 4.6 — el objetivo A lo nombra y hoy el marco no lo cubre; nota: Perry et al. (2023) y Vaithilingam et al. (2022), referencias clave del proyecto sobre esa dimensión, no están citadas en el marco; (b) si la tabla A2a–A5 de la sec. 3 se queda (Daniel pidió *"unos párrafos"*; la tabla ayuda a la trazabilidad con el v2 pero puede leerse como que Scrum vuelve a ser la base — y con ella se decide si el BPMN del v2, `sprint 15/diagramas/marco_feedback_bpmn.png`, se reusa); (c) si el *"firewall" de feedback* (sprint 11) vuelve como línea de la PoC. |
| 2 | **Redacción final** | Pasada de recorte hecha (10-ago): secs. 2 y 4 podadas, cautelas movidas a `NOTAS_MEMORIA.md`. El encuadre del hueco ya está en el header y en la intro de la sec. 4. Queda solo una pasada de estilo después del feedback de Daniel. |
| 3 | **Victoria, desde la red de ORT** | (a) **Ahora:** bajar el PDF de `lindenberg2025business` (SpringerLink vía ORT/Timbó; sin acceso abierto confirmado) — bloquea la categoría 4.5 y el objetivo D. (b) **No urgente — recién para la memoria final:** repetir las 4 búsquedas en ACM DL, IEEE Xplore y SpringerLink (`BUSQUEDAS_ORT.md`). No es para sumar fuentes: es para tener totales reproducibles que respalden la afirmación de que el tipo B no existe (hoy solo arXiv tiene conteo exacto; la limitación ya está declarada en 4.7). |

**Meta v3:** versión escrita y prolija para decidir por dónde encarar la experimentación / PoC.
