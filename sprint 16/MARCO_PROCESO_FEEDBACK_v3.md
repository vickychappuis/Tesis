# Marco del proceso de feedback (v3)

## 1. Proceso de desarrollo de software (Sommerville) → requisitos y V&amp;V

Un **proceso de software** es *"una secuencia de actividades que conduce a la producción de un producto de
software"*, y **cuatro actividades fundamentales son comunes a todos los procesos de
software** [`sommerville2016software`, sec. 1.1.1]. El capítulo 2 las desarrolla como *process activities* (íd., sec. 2.2):


| #   | Actividad (Sommerville)         | Qué pasa ahí                                                                                                | Sec.  |
| --- | ------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----- |
| 1   | **Especificación** del software | *"customers and engineers define the software that is to be produced and the constraints on its operation"* | 2.2.1 |
| 2   | **Diseño e implementación**     | el software se diseña y se programa                                                                         | 2.2.2 |
| 3   | **Validación** (V&amp;V)        | *"the software is checked to ensure that it is what the customer requires"*                                 | 2.2.3 |
| 4   | **Evolución**                   | el software se modifica para reflejar requisitos cambiantes del cliente y del mercado                       | 2.2.4 |


Estas actividades genéricas *"pueden organizarse de distintas formas y describirse a distintos niveles de detalle,
según el tipo de software"* [`sommerville2016software`, sec. 1.1.1]: por eso el marco puede ser agnóstico al modelo
de proceso.

**De las cuatro, dos involucran directamente al stakeholder** y son el foco de este documento:

- **Especificación / requisitos (1).** Por definición se hace *con* el cliente (cap. 4, *requirements engineering*).
- **Validación / V&amp;V (3).** El chequeo es contra *lo que el cliente requiere*, no solo contra el documento: la
V&amp;V *"muestra que un sistema tanto se ajusta a su especificación como cumple las expectativas del
cliente"* [sec. 2.2.3]. Dentro de V&amp;V, el *user testing* y el *acceptance testing* son las instancias donde el stakeholder
participa en persona [sec. 8.4].

Diseño/implementación (2) es interna al equipo. Evolución (4) nace del stakeholder (sus requisitos cambiantes),
pero el intercambio ocurre a través de las otras dos: el cambio entra como requisito nuevo y se acepta validando lo
modificado. Por eso el foco queda en 1 y 3; 2 y 4 son el trabajo del equipo entre ambos.

## 2. Verificación y validación: el V-model → las puntas son el feedback del stakeholder

El V-model ordena las actividades del proceso en una **V**: la rama descendente son las etapas de definición
(*verificación*) y la ascendente las de prueba (*validación*), con la codificación en el
vértice [`pressman2020software`, cap. 2]. Lo relevante para este marco no son los niveles en sí, sino las **flechas
horizontales**: cada nivel de definición tiene su nivel de prueba correspondiente, y **se prueba contra lo que ese
nivel definió**.

![Fig. 2.7 de Sommerville (2016): Testing phases in a plan-driven software process](figuras/sommerville_fig2_7_testing_phases.png)

*Fig. 2.7 de Sommerville (2016), sec. 2.2.3, "Testing phases in a plan-driven software process". Es la versión
citable del V-model: el propio texto dice* "This is sometimes called the V-model of development (**turn it on its
side to see the V**)". *Reproducción literal del ejemplar, con fines académicos.*

Leída como V, la figura empareja cada nivel de definición con su nivel de prueba mediante el plan que los conecta:


| Rama de definición (verificación) | Plan que los une                 | Rama de prueba (validación)         |
| --------------------------------- | -------------------------------- | ----------------------------------- |
| **Requirements specification**    | Customer test plan               | **Customer test**                   |
| System specification              | System integration test plan     | System integration test             |
| System design                     | Sub-system integration test plan | Sub-system integration test         |
| Component design                  |                                  | *Component code and test* (vértice) |


**El nivel superior es el único donde participa el stakeholder**, y aparece en las dos puntas:

- **Punta izquierda (requirements specification):** el stakeholder dice *qué necesita*.
- **Punta derecha (customer test):** el stakeholder dice *si lo construido es lo que quería*. Es la instancia de
aceptación: el *acceptance testing* es el *user testing* donde *"the customer formally tests a
system"* [`sommerville2016software`, sec. 8.4].

La flecha horizontal que las une expresa que **la aceptación se evalúa contra los requisitos que ese mismo
stakeholder planteó**: los dos puntos de feedback son las dos mitades de un mismo circuito. Los niveles inferiores
(integración de sistema, de subsistemas y componentes) son internos al equipo; por eso el marco se queda con la
punta de arriba.

La formulación clásica de las dos ramas es de Boehm (1979): *"Validation: Are we building the right product? ·
Verification: Are we building the product right?"* [citado en `sommerville2016software`, cap. 8, introducción].
Como fuente del modelo se cita `pressman2020software`, cap. 2, con la misma correspondencia superior
**requisitos ↔ aceptación**; como origen histórico, `rook1986controlling`.

> ⚠ Tanto Pressman como Sommerville presentan el V-model como variante de **cascada**. Acá entra como
> **ilustración de la correspondencia** definición ↔ prueba, no como modelo de proceso a seguir. Cuántas veces se
> recorre la V es justamente lo que cambia entre modelos, y eso es lo que abre la sección 3.

## 3. Esto toma distintas formas: el ejemplo de Scrum (sin IA)

Las dos puntas de la sección 2 no ocurren una sola vez ni en un único orden: **cuántas veces se recorre la V depende
del modelo de proceso**. En un proceso en cascada se recorre una vez (los requisitos al inicio, la aceptación al
final). En uno **iterativo e incremental** se recorre en cada iteración: cada entrega vuelve a abrir los dos puntos,
y la aceptación de una iteración alimenta los requisitos de la siguiente.

Lo que sigue es **un ejemplo**, no la base del marco: se toma Scrum porque es la forma de trabajo más extendida y da
nombres establecidos a las actividades. El objetivo es describir **cómo viene siendo hoy** la interacción con el
stakeholder, **sin IA**: la línea de base contra la cual la sección 4 contrasta lo que cambia.

### 3.1. Qué define Scrum y qué no

Scrum define **una** instancia de contacto con el stakeholder, la **Sprint Review**, y la define como sesión de
trabajo, no como reunión de aprobación (Scrum Guide 2020, p. 9):

> *"The Sprint Review is a working session and the Scrum Team should avoid limiting it to a presentation."*

Dos precisiones del propio framework, importantes para el marco:

- **La liberación está desacoplada de la ceremonia por diseño** (p. 12): *"an Increment may be delivered to
stakeholders prior to the end of the Sprint. The Sprint Review should never be considered a gate to releasing
value."* Es decir: **el feedback puede llegar antes de la ceremonia y por fuera de ella**, habilitado por el
propio Scrum.
- **La ceremonia no alcanza para contener lo que se estudia**: está acotada a un máximo de cuatro horas. El uso real
del producto y la detección de desvíos no caben ahí ni están definidos ahí.

Y lo que Scrum **no** define: en el texto completo de la Guía, **`feedback`, `test`/`testing` y `acceptance` no
aparecen ni una vez**; el framework se declara *"purposefully incomplete"*. Por eso la parte de ingeniería
(liberación, testing de aceptación, validación de reglas) se ancla fuera de Scrum, en Sommerville y Dumas.

### 3.2. El flujo, tal como ocurre hoy

Luego de que el equipo de desarrollo **libera un incremento**, éste se comunica al stakeholder. El stakeholder lo
**utiliza**, lo acepta o no, y genera un **feedback** que deriva en una de dos cosas: **incluir nuevos requisitos** o
**modificar** lo construido porque no lo valida contra los requisitos que él mismo definió, que es la flecha
superior del V-model (sec. 2).

Ese feedback se da hoy **por múltiples canales**: por escrito, por llamadas, o en instancias específicas  
generadas para que ocurra. En particular, la **Sprint Review** es una instancia definida para hacer una recorrida del
sistema con el propio usuario y poder:

- **validar reglas de negocio**: confirmar que lo considerado se corresponde con la regla real;
- **analizar factibilidad** de los cambios pedidos;
- **priorizar**: determinar el orden de los cambios, para un análisis de factibilidad posterior y decidir si ese
feedback se incorpora o no a la próxima iteración.

El tramo completo, con los códigos del marco v2:

![Etapa de revisión y feedback, vista BPMN (marco v2)](../sprint%2015/diagramas/marco_feedback_bpmn.png)

*Vista BPMN del tramo (marco v2): actividades A1 a A5 sobre los carriles de quién las hace, con las que Scrum no
define en punteado.*

De todo eso, Scrum define la Sprint Review (A2c, p. 9) y el refinement (A5, p. 10); define solo parcialmente la
incorporación al Product Backlog (A4, p. 6) y la validación de factibilidad técnica (A3b, anclada en Sommerville
sec. 25.3). El resto queda fuera y se ancla en los manuales: la liberación del incremento (A2a) en Sommerville
secs. 2.3.2 y 8.3, el uso y testing de aceptación (A2b) en Sommerville secs. 8.4 y 20.4, y la validación de reglas
de negocio (A3a) en Dumas secs. 4.4 y 5.4.2.

**El feedback del negocio se genera en A2b y A2c**; el resto es lo que se hace con él. Y son **dos canales y dos
momentos**: el uso real del producto, que puede ser asincrónico y anterior a la ceremonia, y la ceremonia misma.

## 4. Feedback con IA: categorías de técnicas

La IAG reformula algunas de las dinámicas descritas. Esta sección agrupa los trabajos relevados en categorías
ordenadas por **qué operación hace la IA sobre el ciclo de feedback**. Las menciones a objetivos (A, B, C, D)
refieren a los objetivos específicos del anteproyecto.

**Etiquetas de fuente:** **[corpus]** paper del mapeo sistemático · **[general]** los cuatro artículos sobre IAG en el
desarrollo · **[gris]** preprint o prensa profesional, sin peer review · **[producto]** evidencia de mercado.

Evidencia de mercado relevada (sprint 11):

| Producto | Qué hace | Estado | Cat. |
|---|---|---|---|
| Emergent (YC) | intención en lenguaje natural → app desplegada, para no técnicos | activa | 4.4b |
| PM Agent (Heizen) | call → spec con criterios de aceptación → tickets | activa | 4.4b |
| Kraftful (YC S19) | feedback de calls, soporte y reviews → tickets | adquirida | 4.3 |
| Versive (YC) | entrevistas con clientes → reportes con citas | activa | 4.3 |
| Devin (Cognition) · Codegen | ticket → PR, con el developer como compuerta | activa · adquirida | 4.6 |
| Tusk (YC W24) · Sweep (YC S23) | ticket → PR autónomo | **ambos pivotearon** | 4.6, contra-evidencia |

> **Alcance.** El corpus se armó con el string del sprint 5 (`"generative AI" AND ("business users" OR clients OR
> stakeholders) AND "software development"`), que apunta exactamente al tema de la tesis, y de él salen las
> categorías que siguen. La revisión complementaria de 4.7 suma el vocabulario propio del tramo de aceptación
> (*acceptance testing*, *acceptance criteria*, UAT, Gherkin), que un paper de esa literatura puede usar sin
> nombrar "generative AI" ni "stakeholders". Con los dos vocabularios, el hueco sobre la validación del
> stakeholder en software construido sigue vacío.

### Las categorías, 4.1 a 4.6

| # | Categoría: qué hace la IA | Evidencia | Efecto / beneficio | Riesgo | Límites verificados |
|---|---|---|---|---|---|
| **4.1** | **Emite el feedback**: impersonación de stakeholders, sin depender de su disponibilidad. Toca directo el **objetivo C** | [gris: Pirozzi 2024, `damian2025reconnect`] + [producto] | disponibilidad continua (feedback 24/7, sin coordinar agendas); el stakeholder pasa de emisor a **validador** | no es el stakeholder real; REConnect pide que el humano quede como *"curator of AI outputs"* (límite a la **sustitución**, no a la técnica) | ⚠ **sin respaldo del corpus**: se declara [gris]+[producto] |
| **4.2** | **Captura lo que se dijo**: asistentes de reunión que devuelven resumen, tickets y señales de riesgo | [corpus: `cabrero2024exploring`] | detecta sobrecompromiso e impedimentos no visualizados; resume el Daily | qué se pierde en el resumen; si la presencia del asistente cambia lo que se dice | cubre solo **reuniones internas** (`Sprint Review` = 0, `client` = 0); **no transcribe** (planillas cargadas a mano): entra como contexto, no como núcleo |
| **4.3** | **Trabaja el artefacto de requisito**: reformular el enunciado, juzgar su calidad, rutear input disperso | [corpus: `mircea2026supporting`, `abbasi2025towards`] · [gris: `geyer2025epics`, `torun2025bugtracking`] · [producto: `kraftful`, `versive`] | Mircea (26 participantes, 130 pares): todas las dimensiones mejoran (p&lt;.001), el 43 % de las revisiones destapa aspectos no dichos y solo el 5 % introduce errores; el LLM reformula y el humano aprueba (*"AI-in-the-Loop"*) | que el LLM *sustituya* la intención original; que el criterio del evaluador automático reemplace al del negocio sin que nadie lo note | Mircea: participantes técnicos, **sin actores de negocio** ni software construido; Abbasi: **sin evaluación empírica** y el usuario es el ingeniero, no el stakeholder; Geyer: evaluado por 17 PMs, no clientes; Torun: el único del corpus sobre software ya construido |
| **4.4** | **Construye algo mirable o ejecutable**: materialización temprana. (a) la opera el equipo; (b) el usuario de negocio, sin intermediario técnico | (a) [corpus: `kretzer2025closing`] · [gris: `busany2024bi`, `alabsi2026empirical`]; (b) [corpus: `robinson2025requirements`] · [producto: `emergent`, `pmagent`] · [gris: prensa profesional] | adelanta el momento de reaccionar: se opina sobre algo concreto (*"seeing a tangible product can unearth elements of the requirements that were assumed subconsciously but not articulated"*, Robinson) | el prototipo puede inducir la respuesta; validar rápido sacrifica UX **[general: Cornide-Reyes 2025]**; el pivote de Tusk y Sweep sugiere que el modo autónomo no cierra | Kretzer: intra-equipo (`client` = 0); Alabsi: **sin participantes** (stakeholder simulado, una sola pasada; su *"enables earlier validation"* es inferencial); Robinson: **visión sin empiria** |
| **4.5** | **Valida contra reglas y procesos de negocio**: la mitad del planteo de esta tesis (**objetivo D**) | [corpus: `lindenberg2025business`, solo abstract] | | | **sin trabajos de validación propiamente dicha**: Lindenberg *descubre* procesos (aguas arriba, sin humanos en la evaluación), no valida software construido contra reglas; el ancla conceptual es Dumas secs. 4.4 y 5.4.2 (la A3a de la sec. 3) |
| **4.6** | **Tramo técnico** (nota): generación de código con validación humana (objetivos A y C) | [producto: `devin`, `codegen`, `tusk`, `sweep`] | | | el corpus académico no lo cubre; si entra como categoría propia o se justifica su exclusión es decisión abierta (*Para decidir*) |

### 4.7. El hueco: la instancia de aceptación

Como complemento de las búsquedas principales (sprints 4 y 5), se revisó la literatura con el vocabulario propio
de la aceptación (*acceptance testing*, *acceptance criteria*, UAT, Gherkin/BDD). En lo relevado, lo que hay
apunta a **generar el artefacto de aceptación** (tests, criterios, escenarios Gherkin) con el developer, tester o
PO como usuario, y donde toca la aceptación busca automatizarla. **No encontramos estudios de la interacción de
validación del stakeholder**: una persona de negocio usando el software construido y devolviendo si es lo que
pidió.

Sobre el proceso de aceptación de Sommerville se ve dónde cae ese hueco. El manual lo descompone en seis
etapas [`sommerville2016software`, sec. 8.4, Fig. 8.11]:

![Fig. 8.11 de Sommerville (2016): The acceptance testing process](figuras/sommerville_fig8_11_acceptance_testing.png)

*Fig. 8.11 de Sommerville (2016), sec. 8.4, "The acceptance testing process". Reproducción literal del ejemplar,
con fines académicos.*

Lo relevado se concentra en definir criterios, derivar tests y correrlos (etapas 1, 3 y 4); no encontramos
trabajos sobre las etapas donde el resultado es un acuerdo entre personas: *negotiate test results* y *accept or
reject system* (5 y 6). El propio Sommerville anticipa por qué: *"the developer and the customer have to
negotiate to decide if the system is good enough to be used"*. Ahí se ubica esta tesis.

El hueco importa porque **la capacidad de generar se democratizó y la de validar no**: Virk y Liu (2025)
encuentran que profesionales de negocio no logran verificar de forma confiable salidas de IA, incluso instruidos
para buscar errores; Fawzy et al. (2026) reportan lo mismo en no programadores que construyen con IA; y Sharma et
al. (2026) sistematizan cuatro barreras al feedback de calidad (common ground, verifiability, communication,
informativeness), andamiaje directo para la PoC.

### 4.8. Qué dimensión del ciclo altera cada categoría (objetivo B)

El objetivo B pide identificar cambios en la **frecuencia, secuencia, granularidad y temporalidad** de los
intercambios de validación. Con esa grilla: 4.1 altera **frecuencia
y temporalidad**, porque sustituye al emisor; 4.2, la **granularidad** del registro; 4.3, **granularidad y
secuencia**; 4.4, **secuencia y temporalidad**, porque adelanta el momento en que hay algo que mirar; para 4.5 no
hay evidencia. Ninguna categoría altera las cuatro dimensiones: lo relevado sostiene desplazamientos
parciales del ciclo, no un cambio integral.

## 5. Dónde caen estas categorías en los escenarios S1–S4

Todo lo de la sección 4 muestra un mismo movimiento de fondo: actividades que hoy hace una persona empiezan a ser
asumidas por la IA. **Sauvola et al. (2024)** dan una escala para graduar ese movimiento (sus Tablas 1 y 2), y es
lo que permite ordenar las categorías por **cuánto** desplazan al humano, no por qué actividad tocan.

![Cuatro escenarios de uso de IAG en el desarrollo de software (S1–S4)](../sprint%2015/diagramas/escenarios_s1_s4.png)

Figura **propia** a partir de las Tablas 1 y 2 del paper.

**Qué se lee del mapeo.** Lo relevado se concentra en **S2** y toca **S3** en dos puntos; **nada llega a S4**.
Es un resultado, no una omisión: en ninguna de las vías relevadas el humano sale del circuito. Y las dos que llegan
a S3 lo hacen de maneras incompatibles entre sí: o la IA sustituye a quien emite el feedback (4.1), o lo emite un
humano de negocio que ahora también construye (4.4b).

> **Salvedades del mapeo** (Daniel pidió no forzar el encaje): (a) los escenarios de Sauvola describen **la
> organización del trabajo de desarrollo**, no específicamente el ciclo de feedback con el stakeholder: el mapeo es
> una lectura nuestra; (b) varias categorías tienen ramas en escenarios distintos (4.4 sobre todo): lo que se ubica
> en el gráfico no siempre es la categoría entera.

## 6. Aspectos no considerados y problemas abiertos

Cierra el estado del arte con lo que **no** está cubierto. Es contexto para decidir por dónde encarar la
experimentación, **no una propuesta**.

### 6.1. El hueco principal

La **instancia de aceptación con el stakeholder real sobre software funcionando**. En lo relevado hay trabajos
sobre generar el *artefacto* de aceptación y sobre IA que *procesa* feedback ya emitido; no encontramos trabajo
empírico sobre cómo se reconfigura la **interacción** de validación (4.7).

### 6.2. Necesidades sin trabajo asociado

- **Validación de reglas y flujos de negocio con IAG (objetivo D).** La categoría 4.5 no tiene trabajos de
validación propiamente dicha: la mitad del planteo de esta tesis no encuentra respaldo en la literatura relevada.
- **El actor de negocio como validador de lo que la IA produjo.** La evidencia disponible sugiere que **no lo logra
de forma confiable** (4.7): la capacidad de generar se democratizó y la de validar no. No encontramos estudios
sobre qué andamiajes cerrarían esa brecha.
- **La calidad del feedback que el stakeholder logra emitir.** Las cuatro barreras de Sharma et al. (4.7) están
formuladas para agentes conversacionales, no para el ciclo cliente↔equipo de desarrollo. Trasladarlas es trabajo
abierto.

### 6.3. Lo que queda fuera de alcance por decisión, no por vacío

- **Feedback indirecto por telemetría / ML** (analítica de uso, auto-PRs, detección de fricción). Hay productos y
literatura, pero el foco de esta tesis es la interacción con un representante que prueba y opina de forma verbal
(ver *Definiciones*). Observación del tutor: ese feedback **igual termina entrando al equipo como feedback
normal**, y su incorporación depende de otros stakeholders (quién paga, factibilidad).
- **Minería de reviews de app stores con LLM.** Abundante en lo relevado, pero opera sobre feedback ya emitido: el
usuario es un corpus histórico, no una interacción. Se menciona solo **como contraste**.
- **Elicitación inicial y prototipado.** Quedan fuera del objeto, pero **no** de la sección 4: son la literatura
adyacente que enmarca el hueco.

### 6.4. Limitaciones de este relevamiento

- La lectura de **`lindenberg2025business`** (4.5) se basa solo en su abstract; el texto completo no está
disponible.
- Parte de la evidencia de mercado (productos) **no es académica** y se etiqueta como tal.

---

## Definiciones

- **Stakeholder.** *"System stakeholders include anyone who is affected by the system in some way and so anyone
who has a legitimate interest in it. Stakeholders range from end-users of a system through managers to external
stakeholders such as regulators, who certify the acceptability of the
system"* [`sommerville2016software`, cap. 4, introducción]. La definición es amplia; esta tesis se acota a **un
representante del negocio que prueba el producto y opina de forma verbal**. El feedback indirecto (telemetría,
ML, auto-PRs) queda fuera de alcance. El recorte es nuestro, no de Sommerville.
- **Analista funcional.** Rol clásico de validación de reglas de negocio; queda por decidir si es un rol propio o
se absorbe en el Product Owner.

---

## Para decidir

- Si el tramo técnico (4.6) entra como categoría propia. El objetivo A lo nombra; sus referencias serían Perry et
  al. (2023) y Vaithilingam et al. (2022).
- Si el BPMN del v2 se queda en la sec. 3.2.
- Si el *"firewall" de feedback* (sprint 11) vuelve como línea de la PoC.
