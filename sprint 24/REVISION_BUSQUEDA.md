# Revisión rápida: búsqueda del bibliotecario en la reunión

**Fecha de corte:** 19/11/2026 · **Protocolo:** `PROTOCOLO_BUSQUEDA.md` · **Versión para presentar:** https://claude.ai/artifact/WNwqWcQxHSnr5WBgw2LtDU · **Reemplaza a:** `BUSQUEDA_BIBLIOTECARIO.md` (06/11)

Pregunta: con hasta 100 PDF de 25 páginas en español, ¿cómo guardar la documentación para que el asistente encuentre en la reunión, en unos 15 s, la evidencia de cada veredicto, concluya «no contemplado» cuando corresponde y cite el original?

**Estado de las cifras:** las marcadas ✓ se cotejaron con la tabla o el párrafo de la fuente; el resto sale de la extracción de los agentes y falta cotejarlo.

## Método

Revisión rápida (Cartaxo, Pinto y Soares, 2020) con protocolo en el formato de Kitchenham y Charters (2007). 106 búsquedas en arXiv, ACL, ACM, IEEE y Google Scholar (vía OpenAlex y Semantic Scholar) y literatura gris. Un agente seleccionó; otro agente, sin ver sus decisiones, repitió el 20% al azar de cada paso. No hubo revisión humana. La primera pasada dio hasta 63% de desacuerdo; tras tres enmiendas a los criterios, el desacuerdo quedó entre 0% y 13%.

| Paso | Desacuerdo | Kappa |
|---|---|---|
| Técnicas · título y resumen | 7% | 0,85 |
| Técnicas · texto completo | 8–9% | 0,73–0,75 |
| Ausencia, citas, demora · título y resumen (55 de 191) | 5% | 0,89 |
| Ausencia, citas, demora · texto completo (28) | 0% | 1,00 |
| Literatura gris | 12–13%, resuelto por adjudicación | 0,60–0,64 |
| Relevamiento del 06/11 | 9–10% | 0,62 |
| Contradicción entre documentos | sin auditar | — |

| Rama | Registros | Pasan título y resumen | Incluidos |
|---|---|---|---|
| Técnicas | 1.220 | 765 | 624 |
| Contradicción y vigencia | 874 | 241 | 101 (62 sin leer) |
| Ausencia, citas, demora | 957 | 479 | 109 (291 sin leer) |
| Gris: proveedores y práctica | ≈ 350 | 96 | ≈ 119 |
| Relevamiento del 06/11 y recuperados | 121 | 49 | 54 |
| **Total** | **3.522** | | **1.007** |

## Atributos priorizados

Precisión (encontrar la evidencia aunque el cliente use otras palabras), velocidad (unos 15 s), concluir «no contemplado» y cita textual verificable contra el PDF.

## Candidatas

**1. RAG híbrido.** Fragmentos cortados por título, con metadatos; búsqueda por palabras y por significado, reordenador, una pasada.
- Buscar tarda milisegundos; la demora la pone el modelo.
- Palabras y significado con reordenador: 60,1 contra 43,8 de solo significado (Microsoft, gris).
- En PDF de 63 a 86 páginas, un RAG por significado (BGE, 3 fragmentos) superó por 8,7 a 14,5 puntos a cargar el PDF entero ✓ (KDD, 2407.07321, Tabla 5).
- En contra: trae fragmentos parecidos, sin ver la estructura del documento.

**2. Índice navegado por un agente (vectorless RAG).** Dos niveles: un catálogo con una línea por documento (como `INDICE.md`) y, en cada documento, el árbol de secciones. El agente elige en el catálogo, baja por el árbol y busca por palabras. Sin vectores. Nombres en la literatura: vectorless o reasoning-based RAG (PageIndex), índice jerárquico o en árbol, *agentic search*.
- NaviRAG (Dai et al., 2026, preprint): unos 3 s por consulta y +5 F1 sobre RAG simple.
- En 44.962 historias clínicas en alemán (npj), un agente con búsqueda por palabras y filtros por tipo y fecha llegó a 80,1%, contra 79,0% de un RAG iterativo con las mismas herramientas y 75,7% del RAG iterativo base ✓. Ojo: el agente busca por palabras, no navega un índice.
- En contra: más lento (20,9 s en ese estudio, solo en la versión preprint, Tabla S8); puede no encontrar datos sueltos en actas o transcripciones sin secciones; sin catálogo, navegar índices falla al elegir documento cuando hay muchos (RIT-RAG); ToM llegó a 145 s.
- Otros estudios: MemWalker (2023), RAPTOR (ICLR 2024, usa vectores), Beyond Chunking (+1 a 3 sobre fragmentos y RAPTOR), STAIR, SproutRAG, Pesl et al. (9 a 14 veces menos tokens), *Rethinking Retrieval* en finanzas (un agente con vectores le ganó a PageIndex).

**Capa ordenada al cargar (para la candidata 2).** Un proceso arma fichas por tema con frases textuales y su documento y página, como el «dreaming» de Anthropic (*The components of agent memory*, 6/11/2026: consolida notas en una capa derivada sin reescribir las transcripciones; wiki sola 13–48%, wiki más búsqueda 61% contra 53% de búsqueda sola, mediciones propias del proveedor). Condiciones: los originales no se tocan (el prototipo no mantiene la documentación), la respuesta cita el original, y antes de concluir «no contemplado» se busca en los originales, porque lo que la capa omita daría un «no contemplado» falso. Antecedente: Contextual Retrieval de Anthropic (2024) redujo entre 49% y 67% las fallas de recuperación.

## Descartadas

- **LLM Wiki como fuente de la respuesta:** al resumir se pierden datos y la respuesta cita la wiki, no el PDF; 22 min contra 3,3 min de RAG para 13 preguntas ✓ (Cochran, 2605.18490, Tabla 5). Como mapa para buscar, entra en la capa ordenada.
- **GraphRAG:** lento cuando el modelo trabaja al consultar (30 a 280 s con modelos de 7–8B en una GPU de 8 GB; en otra fuente, 2,7 s local y 26,7 s global) y caro de reconstruir cuando cambian los documentos.
- **Todo en el contexto:** con un millón de tokens tardó unos 45 s, y cada veredicto paga el corpus entero.

## Ausencia y citas (sirve para las dos)

- «No contemplado» no puede salir de «no encontré nada»: hay que juzgar si lo recuperado alcanza (un juez de suficiencia acertó 0,93). Detectarlo con la confianza del recuperador da F1 de 42 o menos.
- Más vueltas de búsqueda reducen la abstención correcta; el agente necesita tope.
- Verificar cada cita al pie de la letra (como ya hace el prototipo) bajó el error de citas de 0,441 a 0,009.
- Un índice desactualizado da 0% de éxito sin que se note: hay que reindexar en cada carga.

## Propuesta

Implementar las dos, más una variante (el agente de la candidata 2 con el RAG híbrido como herramienta, tope de 2 o 3 vueltas), y compararlas con unos 100 PDF y casos reales, incluidos datos que están solo en actas o transcripciones. Medir veredicto correcto, cita correcta, «no contemplado», demora (p50 y p90) y costo. La que gane queda en el prototipo.

## Limitaciones

- Selección por agentes, con auditoría por muestreo y sin revisión humana.
- Cortada por tiempo: 353 textos sin leer, 117 decisiones solo por título, rama de contradicciones sin auditar.
- Unos 100 textos sin acceso (IEEE y ACM).
- Mayoría de preprints de 2025 y 2026; muy poca evidencia en español.

## Correcciones a versiones anteriores

- 06/11: RAG-ToC, el 86,96% es de kNN (la tabla de contenidos dio 83,48%); Subramanian, cifras relativas a RAG con el agente por debajo; Sen, el arnés mueve hasta 49,1 puntos; Weller, los densos no pasan de 12%.
- 19/11: el 2,66 s contra 36 s (legislación de Ecuador) compara vectores con grafo, no palabras con significado; «solo una empresa publicó mediciones de LLM Wiki» era falso (hay otras: Ming, jztan, READ).
