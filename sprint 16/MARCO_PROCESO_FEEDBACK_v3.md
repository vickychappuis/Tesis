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

> # ⛔ NO MOSTRAR ESTA SECCIÓN — EN REVISIÓN
>
> Tres verificaciones adversariales (3-ago-2026) encontraron errores graves. **No usar hasta reescribir.**
> Los tres bloqueantes:
>
> 1. **El hueco de 4.8 es un artefacto del string de búsqueda.** El string del sprint 5 —`"generative AI" AND
>    ("business users" OR clients OR stakeholders) AND "software development"`— **no contiene ningún término de
>    testing, validación, aceptación ni feedback**. Un corpus que nunca preguntó por *acceptance testing* no puede
>    ser evidencia de que no se estudia.
> 2. **4.1 (impersonación) no tiene fuente del corpus.** `raftopoulos2024designing` es diseño participativo con
>    Lego y cartas de cartón: `impersonat` = 0, `LLM` = 0 apariciones en el texto.
> 3. **Contradicción alcance ↔ corpus.** El alcance excluye elicitación y prototipado; 4.3 y 4.4 son enteramente eso.
>
> Además: la RQ 5 que 4.5 presenta como *pregunta abierta* **ya está respondida por un paper del propio corpus**
> (el prototipo de `abbasi2025towards` se llama *Acceptance Criteria Assistant*), y Nguyen-Duc está citado como
> "(2025)" cuando su relevamiento **cierra en octubre de 2023**.
>
> Detalle completo de los 12 hallazgos: ver el resumen de la sesión. Correcciones de ficha pendientes en el `.bib`.

Sobre las interacciones descritas hasta acá, la IAG generativa **reformula algunas dinámicas**. Lo que sigue agrupa
los trabajos del estudio previo en **categorías por aspecto**, no por actividad ni por modelo de proceso: cada una
tiene un nombre, dice de qué trata y qué efecto tiene la IA ahí — con sus beneficios y sus riesgos.

Etiquetas de fuente (se mantiene la convención del v2): **[corpus]** paper del mapeo sistemático ·
**[general]** los cuatro artículos sobre IAG en el desarrollo · **[producto]** evidencia de mercado, no académica ·
**[gris]** preprint / prensa profesional, no peer-reviewed.

> **Estado de verificación.** Las categorías marcadas ✅ ya venían sintetizadas y citadas en el v2 (sec. 5).
> Las marcadas 🔶 son **agrupamientos propuestos a partir de título y ubicación en el corpus**: hay que leer los
> papers para confirmar que dicen lo que la categoría afirma antes de darlas por buenas.

### 4.1. Impersonación de stakeholders ✅

Una IA configurada para representar a un stakeholder —cliente, usuario, PM— y emitir feedback como si fuera él, sin
depender de su disponibilidad **[corpus: `raftopoulos2024designing`]**; se suma el concepto de *AI-Stakeholder*
**[Pirozzi 2024 — revista profesional, ver `FUENTES_MARCO.md` sec. c]** y productos que ofrecen personas virtuales
**[producto]**.

- **Efecto:** el stakeholder deja de ser el único emisor de feedback y pasa a **validador** de lo que la IA devolvió.
  El beneficio que se le atribuye es la disponibilidad continua —feedback 24/7, sin coordinar agendas—.
- **Riesgo:** no es el stakeholder real. El propio cliente debe validar que el agente responde lo que él respondería;
  y hay un límite explícito en la literatura: la IA no debe sustituir la conexión humana ni descontextualizar — el
  stakeholder real sigue como curador **[gris: `damian2025reconnect`]**.

### 4.2. Asistencia en las instancias de interacción 🔶

Asistentes que participan de la reunión con el stakeholder: transcriben, resumen y detectan riesgos e impedimentos
**[corpus: `cabrero2024exploring`]** ✅. Daniel lo nombró *"traducción automática de reuniones"*.

- **Efecto:** baja el costo de capturar lo que se dijo y de convertirlo en registro; la instancia deja de depender de
  que alguien tome notas bien.
- **Riesgo / a verificar:** qué se pierde en el resumen, y si la presencia del asistente cambia lo que el stakeholder
  dice.

### 4.3. Asistencia en la expresión y el refinamiento de requisitos 🔶

Es la categoría con **más masa en el corpus**: LLMs que ayudan a formular, revisar o completar lo que el stakeholder
pide. Incluye la revisión asistida de la expresión del propio stakeholder **[corpus: `mircea2026supporting`]**,
marcos de colaboración humano-IA en RE **[corpus: `abbasi2025towards`]**, la integración de LLMs al proceso de RE
**[corpus: `stein2026integrating`]** y la automatización de requisitos en dominios concretos
**[gris: `busany2024bi`]**. Hay además tres panorámicas del área que sirven para encuadrar y no como evidencia
puntual: **[corpus: `vasudevan2025role`, `fischer2026generative`, `cheng2026generative`]**.

- **Efecto:** el requisito llega mejor formulado sin que el stakeholder tenga que aprender a escribirlo.
- **Riesgo / a verificar:** si el LLM *refina* o **sustituye** la intención original; y cuánta de esta literatura mira
  la elicitación inicial —fuera del alcance de esta tesis (sec. 1)— en vez del feedback sobre lo ya construido.

### 4.4. Materialización temprana: de lo pedido a algo que se puede ver 🔶

En vez de devolverle al stakeholder un texto, se le devuelve **algo mirable**: prototipos de interfaz generados desde
user stories **[corpus: `kretzer2025closing`]** o elicitación y prototipado a partir de bocetos
**[corpus: `alabsi2026empirical`]**.

- **Efecto:** adelanta el momento en que el stakeholder puede reaccionar — opina sobre algo concreto, no sobre una
  descripción. Es la categoría más ligada a la **validación temprana** (objetivo D).
- **Riesgo / a verificar:** el prototipo puede inducir la respuesta; y validar rápido puede sacrificar calidad de UX
  en favor de la velocidad **[general: Cornide-Reyes et al. 2025, sec. 1]**.

### 4.5. Evaluación automática de la calidad de los artefactos 🔶

La IA no genera el artefacto sino que lo **juzga**: evaluación de la calidad de épicas en ágil
**[gris: `geyer2025epics`]**. Acá cae también una pregunta que la literatura deja **abierta y sin probar**: *"How can
GenAI be utilized to automate acceptance criteria from high-level requirements?"* **[general: Nguyen-Duc et al.
(2025), RQ 5 de sec. 4.4.2]** ✅ — es una pregunta de agenda, no un hallazgo.

- **Efecto:** mueve parte del control de calidad del artefacto antes de que llegue al equipo.
- **Riesgo:** que el criterio del evaluador automático reemplace al del negocio sin que nadie lo note.

### 4.6. Del feedback disperso al trabajo accionable 🔶

Convertir lo que el negocio dijo —en cualquier canal— en ítems de trabajo: reportes de bug en lenguaje natural que se
completan con pasos de reproducción **[gris: `torun2025bugtracking`]** ✅, y productos que van de feedback a tickets
o de entrevistas a reportes **[producto: `kraftful`, `versive`]**.

- **Efecto:** reduce la traducción manual que hoy hace el analista funcional.
- **Riesgo:** el feedback se estructura según lo que el sistema sabe representar.

### 4.7. Construcción directa por usuarios no técnicos 🔶

El actor de negocio interactúa con la herramienta generativa **sin intermediario técnico**: la visión de
*end-user software engineering*, con los requisitos en lenguaje natural como artefacto central
**[corpus: `robinson2025requirements`]** ✅, productos que van de la intención a la app **[producto: `emergent`]** y
el fenómeno reportado de usuarios de negocio construyendo sus propias apps **[gris: prensa profesional, lote 3 #18]**.

- **Efecto:** es la categoría que más directamente toca el **objetivo C** (transformación de roles): si el negocio
  construye, la frontera entre quien pide y quien implementa se corre.
- **Riesgo:** el pivote de dos de los productos relevados **[producto: `tusk`, `sweep`]** sugiere que el modo
  autónomo sin validador humano todavía no cierra.

### 4.8. El hueco declarado

Transversal a todo lo anterior: el **testing de aceptación** —donde el stakeholder valida que lo entregado hace lo que
el negocio necesita— **casi no se investiga** en el contexto de la IAG. Lo declaran los propios autores de la agenda:
*"other areas of testing are not currently the focus of existing studies, i.e. acceptance testing, integration
testing, and testing other software quality requirements"* **[general: Nguyen-Duc et al. (2025), sec. 4.4.5]** ✅.

Es decir: las categorías 4.1–4.7 se concentran en **entender qué quiere** el stakeholder; la punta derecha del
V-model —**validar que lo construido es eso**— está mucho menos cubierta.

- [ ] ⚠ **Decisión pendiente:** el v2 tenía en su sec. 5.1 la **propuesta de la PoC** marcada como `[propuesta]`
      (validación temprana sobre el cambio generado). **La saqué de esta sección**, porque Daniel pidió que el
      documento sea estado del arte *"solo contexto, no una propuesta concreta"*. Confirmar si se deja fuera hasta la
      sección de la PoC o si se menciona en la sec. 6 como dirección.
- [ ] 🔶 Leer los papers de las categorías marcadas para confirmar el agrupamiento (hoy asignados por título/rol en
      el corpus, no por lectura).
- [ ] Decidir si `lindenberg2025business` (descubrimiento de procesos de negocio) abre categoría propia o entra en
      4.3 — no tiene PDF accesible (sec. sin acceso abierto).

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
