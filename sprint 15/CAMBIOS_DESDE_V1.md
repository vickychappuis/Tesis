# Qué cambió desde la v1 — para la segunda pasada con Daniel

> Resumen para arrancar la reunión: cada punto responde a un comentario de la call del 9 de julio y apunta al detalle.
> El marco pasa a ser **`MARCO_PROCESO_FEEDBACK_v2.md`** (autocontenido; la v1 queda como registro del sprint 14).
> Fuentes verificadas contra los ejemplares en `FUENTES_MARCO.md` / `.bib`; diagramas nuevos en `diagramas/`.

## 1. Anclaje en bibliografía *("falta fuente oficial")*

Se trabajó sobre la **Scrum Guide 2020**, con citas verificadas literalmente contra el PDF. La aparente contradicción
eran **dos documentos distintos**: la página introductoria de scrum.org resume —de ahí la impresión de reunión de
aprobación—, mientras que la Guía es explícita en que la review es una *working session* y **nunca** una puerta para
liberar valor. La Guía además se declara *"purposefully incomplete"*, y `feedback`, `test` y `acceptance` no aparecen
ni una vez en sus 14 páginas. Lo que Scrum no define se declara como tal y se ancla en Sommerville y Dumas (gris
punteado con ⚠ en el diagrama). → Citas y conteo léxico: marco sec. 2.

## 2. Rascar la Sprint Review *("hay toda una etapa de revisión")*

La vieja A2 se desdobló en una **etapa de tres momentos**: **A2a** liberación del incremento (⚠ no-Scrum; estaba
escondida dentro de A1), **A2b** uso y testing de aceptación (⚠ **nueva** — la pieza que faltaba) y **A2c** Sprint
Review (✅; la vieja A2 sin la palabra "demo"). Efecto teórico: el feedback pasa a tener **dos canales y dos
momentos** —el uso real, que puede llegar antes de la ceremonia, y la ceremonia misma— materia directa del objetivo B.
Respaldo en Sommerville (2016): liberación + uso (sec. 2.3.2), *release* y *acceptance testing* (secs. 8.3–8.4), y
aceptación ágil apoyada en stakeholders **con autoridad para decidir** (sec. 20.4).

Estado actual: **A2a pasó a la franja de contexto** —la ejecutan solo los Developers y ahí no se genera feedback; del
proceso importa su cadencia—. El **núcleo** queda en **A2b + A2c**.

## 3. Notación uniforme *("cajitas y globitos, marea un poquito")*

Se pasó a **BPMN**: los roles son carriles del mismo diagrama, así que las dos vistas se unifican en una sola. El
feedback, antes una caja de actividad, ahora es un objeto de datos.

![Etapa de revisión y feedback — vista BPMN](diagramas/marco_feedback_bpmn.png)

## 4. Capa IAG reforzada *("reforzar con los 4 artículos")*

Los cuatro artículos, leídos y verificados, respaldan ahora cada actividad, con cada ítem etiquetado
(**[corpus]** / **[producto]** / **[general]**) para poder auditarlo. Dos cosas de frente: **ninguno de los cuatro
menciona la Sprint Review** —trabajan a nivel de etapas del SDLC; el zoom fino sigue en el corpus— y **el gap se
movió**: salió de A3b (estimación, que resultó cubierta por Malladi) y quedó en **A2b** — el *acceptance testing*
casi no se investiga con IAG, gap que declaran los propios Nguyen-Duc et al.

Tras el refuerzo, el marco **se recortó al núcleo**: la sec. 5 trata solo A2b y A2c. El relevamiento de A1, A3a,
A3b, A4 y A5 vive en `sprint 12/REFERENCIAS.md`; en el marco solo queda el argumento de que ahí la literatura ya
cubre y por eso el hueco del núcleo resalta (sec. 5.3).

## 5. Los cuatro escenarios S1–S4 *("la imagen de los cuatro escenarios")*

Escala de **cuánto asume la IA** (Sauvola et al., 2024) — no son etapas ni predicción temporal. Es la graduación que
le faltaba al objetivo C. Figura propia, redibujada desde las Tablas 1 y 2 del paper (marco sec. 6). Leído el núcleo
contra la escala: se concentra en **S2**, con dos puntos en **S3** —la impersonación de stakeholders (evidencia
relevada) y la propuesta de la PoC (idea a explorar)— y nada en S4.

![Cuatro escenarios de uso de IAG en el desarrollo de software (S1–S4)](diagramas/escenarios_s1_s4.png)

## 6. Las cuatro grandes áreas *(punto 5, aprobado en la call)*

Dejaron de ser sección aparte: se solapaban con la capa por actividad y se fusionaron. Solo la **impersonación de
stakeholders** quedó dentro del marco (sec. 5.1, transversal a A2b/A2c); oralidad→artefacto, el "firewall" y
generación→desarrollo automático salieron del núcleo (relevamiento en sprint 12). De la última sobrevive la
contra-evidencia —el pivote de Tusk y Sweep—; del "firewall" no queda nada en el marco.

## 7. Nuevo: la propuesta de la PoC ya está bajada al marco

El "siguiente paso" (elegir una solución para la PoC) ya se dio: quedó escrita en la sec. 5.1 como
**[propuesta]** —etiqueta nueva que la distingue de los hallazgos de la literatura—. Es **validación temprana sobre
el cambio generado**: el stakeholder **real** sigue emitiendo el feedback; la IA lo estructura, devuelve señal de
viabilidad en vivo, genera el cambio y se lo muestra para testing de aceptación —contra criterios generados (la
RQ 5 de Nguyen-Duc et al.)—, con el **developer como validador** de lo generado. La generación de código entra solo
como instrumento; el recorte al núcleo no cambia. En la escala cae en S3 (el sub-modelo *"AI design with human
validation"* del propio Sauvola).
