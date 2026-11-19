# Revisión rápida: búsqueda del bibliotecario en la reunión

**Fecha de corte:** 19/11/2026 · **Protocolo:** `PROTOCOLO_BUSQUEDA.md` (con las Enmiendas 1 a 3) · **Reemplaza a:** `BUSQUEDA_BIBLIOTECARIO.md` (06/11)

Pregunta guía, acotada al momento de la reunión: con hasta 100 PDF de 25 páginas en español, ¿cómo guardar la documentación para que el bibliotecario encuentre en menos de 15 s la evidencia de un veredicto, concluya «no contemplado» cuando corresponde y cite el original? Las contradicciones entre documentos se resuelven al cargarlos (una persona confirma qué modifica a qué), no en la reunión.

**Estado:** revisión cortada por tiempo. Las cifras de este documento salen de la extracción de cada agente; no pasaron todavía por la verificación contra la tabla original (paso 8 del protocolo). Verificar antes de citarlas en la tesis.

## Método

Revisión rápida (Cartaxo, Pinto y Soares, 2020) con protocolo en el formato de Kitchenham y Charters (2007). Seis ramas: técnicas (A), contradicción y vigencia (B), ausencia, citas, demora y trazabilidad (C), literatura gris de proveedores (D) y de práctica (E), y las 57 fuentes del relevamiento del 06/11 (F). 106 búsquedas registradas con cadena, fecha y totales. Google Scholar, ACM, IEEE y ACL se consultaron a través de OpenAlex y Semantic Scholar.

Selección por un agente; un segundo agente que no ve sus decisiones vuelve a decidir sobre una muestra al azar del 20% de cada paso. La primera pasada dio desacuerdos de hasta 63% (kappa 0,05), por filtros que leían solo el título y por criterios acotados de forma distinta. Se escribieron tres enmiendas y se repitieron los pasos.

| Paso | Desacuerdo final | Kappa |
|---|---|---|
| A · título y resumen | 7% (17/244) | 0,85 |
| A · texto completo | 8–9% | 0,73–0,75 |
| C · texto completo (parcial) | 0% (0/28) | 1,00 |
| D y E · gris | 12–13%, resuelto por la Enmienda 3 | 0,60–0,64 |
| F · relevamiento previo | 9–10% | 0,62 |
| B · ambos pasos | sin auditar tras la repetición | — |
| C · título y resumen (parcial) | 5% (3/55) | 0,89 |

## Flujo de selección

| Rama | Registros únicos | Pasan título y resumen | Incluidos por texto completo |
|---|---|---|---|
| A técnicas | 1.220 | 765 | 624 (68 + 48 + 508) |
| B contradicción | 874 | 241 | 101 de 179 leídos (62 sin leer) |
| C ausencia, citas, demora | 957 | 479 (117 solo por título) | 109 (100 + 9 de 50 leídos al corte; 291 sin leer) |
| D proveedores | ≈ 97 | 41 | 34 |
| E práctica | 253 | 55 + 41 recuperados | ≈ 85 |
| F relevamiento previo | 57 | 49 | 43 |
| Recuperados tras E3 | 64 | — | 11 |

Unos 100 textos quedaron sin acceso (IEEE y ACM bloquean la descarga automatizada); la lista está en `descarga_manual.csv` del material de trabajo. Es un sesgo hacia lo publicado en arXiv.

## Candidatas para la reunión

**1. Fragmentos con búsqueda híbrida.** El PDF pasa a texto cortado por títulos, con metadatos (documento, sección, página, tipo, fecha), indexado por palabras y por vectores. En vivo: una búsqueda híbrida, un reordenador y, a lo sumo, una segunda búsqueda.
- A favor: es lo más medido a esta escala. Recuperar cuesta milisegundos y la demora la pone la generación. En PDF de 63 a 86 páginas, recuperar los 3 mejores fragmentos superó por 8 a 15 puntos a cargar el documento entero (KDD). Híbrido con reordenador: 60,1 contra 43,8 de solo vectores (Azure). En legislación ecuatoriana, en español, el híbrido respondió en 2,66 s y el modo agéntico en 36 s sin ganar calidad. En 17 documentos administrativos en español con consultas reales, RAG con reordenador 77,8% contra contexto largo 76,3%.
- En contra: trae lo parecido. Con consultas reales o parafraseadas cae la recuperación (de 0,51 a 0,30 en portugués; de 33,9 a 25,7 en otro estudio); reformular la consulta recupera de 7 a 10 puntos.

**2. Catálogo e índice de secciones, con agente.** Una ficha por documento y, dentro de cada uno, el árbol de secciones con un resumen corto; búsqueda por palabras como herramienta. En vivo: el agente lee el catálogo, abre secciones y busca, con tope de vueltas. Es el bibliotecario actual ampliado a PDF largos.
- A favor: cita del original y filtra por tipo y fecha. En el estudio más parecido (44.962 documentos médicos, npj), un agente con búsqueda por palabras y filtros superó a RAG iterativo y a contexto completo (80,1% contra 75,7% y 75,8%). Un índice de resúmenes con detalle bajo demanda usó de 9 a 14 veces menos tokens con mejor F1. Por debajo de unos 10 M de tokens, un agente que abre archivos empata o supera a la búsqueda por palabras.
- En contra: demora. Ese estudio tardó 20,9 s; los agentes con varias vueltas van de 20 a 364 s según el estudio, y uno sin tope llegó a 107 s. Gasta hasta 39 veces más tokens.

**Fuera del momento de la reunión:** el chequeo al cargar documentos (vigencia por cláusula, enlaces del tipo «esta acta exceptúa este requisito», filtrar lo reemplazado), que sirve para las dos candidatas.

**Descartadas para la reunión:** GraphRAG y similares (de 30 a 280 s cuando usan el modelo al consultar; en comparaciones en igualdad de condiciones un RAG simple o híbrido empata o supera; peor en preguntas sin respuesta, 46 contra 60,5), la wiki compilada como fuente de la respuesta (pierde hechos, cita el resumen y no el PDF, 101 s contra 15 s), y meter todo en el contexto (1,5 M de tokens no entran; un millón tardó unos 45 s).

## Ausencia y citas

- Concluir «no contemplado» porque no apareció ningún documento falla; hay que juzgar si lo recuperado alcanza para responder (un juez de suficiencia acertó 0,93).
- Más vueltas de búsqueda reducen la abstención correcta, y en PDF de 10 a 50 páginas los agentes responden sin haber recuperado la evidencia. Va contra la candidata 2 si no tiene tope.
- Un índice desactualizado da 0% de éxito y la medida de fundamentación no lo detecta: el índice tiene que actualizarse en cada carga.
- Verificar cada cita al pie de la letra contra el documento bajó el error de citas de 0,441 a 0,009. Es lo que ya hace el prototipo. Una cita válida no garantiza que sustente lo afirmado (26% de pasos sin sustento), y auditar las citas en vivo duplicó la demora (de 6 a 12,7 s).
- Un RAG agéntico sumó 10 puntos sobre el de un paso, casi todo por abstenciones correctas, con 3,5 s contra 0,5 s. Detectar «no hay respuesta» con la confianza del recuperador da F1 de 42 o menos.
- Empezar a buscar mientras el cliente todavía habla oculta al menos el 80% de la demora de búsqueda en el 74% de las consultas.

## Recomendación

Implementar las dos candidatas detrás de la misma interfaz del bibliotecario, primero la 2 (evoluciona lo que hay) y la 1 como línea base, y compararlas con un banco que discrimine: un corpus cercano a 100 PDF, enunciados parafraseados, casos sin respuesta y transcripciones reales del bot. Medir veredicto correcto, cita correcta y verificada, acierto de «no contemplado», demora en p50 y p90 contra 15 s, y costo. Elegir una y seguir con las sesiones con usuarios de negocio. Conversar con Daniel antes: cambia la escala del escenario y la regla «vale el más reciente» de la Tabla 4.6.

## Limitaciones

- Selección automática con auditoría por muestreo, sin revisión humana.
- Rama B sin auditar tras la repetición y con 62 textos sin leer; rama C con 117 decisiones solo por título, 291 textos completos sin leer y su filtro por resumen auditado solo en 55 de 191 registros de la muestra.
- Unos 100 textos sin acceso, casi todos de IEEE y ACM.
- Cifras sin verificar contra la fuente; buena parte de la evidencia son preprints de 2025 y 2026.
- Muy poca evidencia en español y ninguna sobre confrontar en vivo lo que dice un cliente contra la documentación de su proyecto.
- La bola de nieve solo se hizo con RAPTOR.

## Correcciones al documento del 06/11

- RAG-ToC (Prior et al.): el 86,96% es de kNN; la tabla de contenidos dio 83,48%.
- Subramanian: las cifras son relativas al puntaje de RAG y el agente queda por debajo.
- Sen: el arnés mueve hasta 49,1 puntos, no 31,9. Weller: los recuperadores densos no pasan de 12%, no 19,7%.
