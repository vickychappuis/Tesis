# Protocolo de revisión rápida: búsqueda de agentes sobre documentación

**Fecha:** 18/11/2026 · Revisión rápida según Cartaxo, Pinto y Soares (2020), con el formato de protocolo de Kitchenham y Charters (2007).

## Objetivo y escenario

Identificar qué formas de guardar e indexar la documentación de un proyecto permiten que un agente encuentre en vivo la evidencia para confrontar lo que dice el cliente, y qué evidencia las respalda.

Escenario: hasta 100 PDF de 25 páginas (≈ 1,5 M de tokens) de documentación de proyecto en español; consulta hablada; veredicto con cita verificable contra el original en unos 15 s.

## Preguntas

- **PI1.** ¿Qué técnicas de almacenamiento, indexación y recuperación hay para agentes sobre corpus de este tamaño?
- **PI2.** ¿Qué tan bien y qué tan rápido funcionan?
- **PI3.** ¿Cómo encuentran lo que contradice o exceptúa, deciden qué documento rige y concluyen que algo no está?
- **PI4.** ¿Cuánto cuesta mantenerlas cuando cambian los documentos?

## Fuentes y cadenas

- **Bases:** arXiv, ACL Anthology, ACM, IEEE y Google Scholar (100 primeras respuestas por cadena). Las que bloquean consultas automatizadas se consultan vía OpenAlex o Semantic Scholar.
- **Literatura gris**, con menor peso: proveedores (Anthropic, OpenAI, Google, Microsoft, LlamaIndex y otros), blogs de ingeniería y repositorios. Entra porque el área es muy nueva.
- **Punto de partida:** las 57 fuentes del relevamiento del 06/11, sometidas a la misma selección.
- **Período:** 2020 a noviembre de 2026.
- **Cadenas:** recuperación (RAG, agentic search, long document, LLM wiki…) AND modelo (LLM, agent, tool use); para PI3, además AND una exigencia: contradicción, excepción, versiones, ausencia, citas, demora o trazabilidad.

## Criterios

**Entra si:**
- **I1.** En las cadenas generales, compara configuraciones de almacenamiento, indexación o recuperación, o mide su demora o costo. En las de PI3, trata la exigencia de su cadena (los benchmarks también cuentan).
- **I2.** Trabaja sobre documentos de texto o PDF (un grafo o tabla construido desde texto cuenta; solo código, no).
- **I3.** Reporta una evaluación. En la gris, alcanza con documentar una variante propia, reportar mediciones propias o reportar uso en una organización identificable.
- **I4.** Está en inglés o en español.

**Sale si:**
- **E1.** Solo entrena modelos, sin un componente de recuperación separable.
- **E2.** El resultado depende de la escala web.
- **E3.** No hay texto completo después de buscar otra versión.
- **E4.** Es duplicado o versión anterior de otro estudio.

## Selección y auditoría

Duplicados, después título y resumen (leyendo el resumen de cada registro; ante la duda, entra) y después texto completo. Un agente decide y anota el motivo; otro, sin ver esas decisiones, vuelve a decidir sobre el 20% al azar de cada paso. Si el desacuerdo pasa del 10% y se concentra en un criterio, se precisa ese criterio y se repite lo decidido por él; los desacuerdos aislados los resuelve un tercer revisor. Se informa el desacuerdo y el kappa de Cohen por paso, y los conteos en un diagrama tipo PRISMA.

## Extracción, calidad y síntesis

- **Extracción:** técnica, corpus, tarea, resultados con su tabla de origen, demora, costo de construir y actualizar, tratamiento de PI3 y si cita el original. Toda cifra que vaya a la tesis se coteja contra la fuente.
- **Evidencia:** alta (revisado por pares, con línea base), media (preprint con línea base y código o datos) o baja (sin línea base, gris o medición del propio proveedor).
- **Síntesis:** narrativa por familia, contra siete criterios: encuentra lo que exceptúa, concluye ausencia, cita verificable, demora en vivo, se adapta a otra documentación, escala y costo de mantenimiento. Donde no hay evidencia, se dice.

## Cambios durante la ejecución

La primera auditoría dio hasta 63% de desacuerdo (kappa 0,05): algunos filtros leían solo el título y cada revisor acotó I1 a su manera. Tres enmiendas del 18/11 dejaron los criterios como figuran arriba (I1 por tipo de cadena, E2 por método, E3 tras buscar otra versión, I3 para la gris, regla de desacuerdo concentrado), y los pasos afectados se repitieron.

## Limitaciones

Selección automática con auditoría por muestreo y sin revisión humana; mayoría de preprints; ningún estudio evalúa exactamente esta tarea.

## Referencias

- Cartaxo, B., Pinto, G. y Soares, S. (2020). Rapid Reviews in Software Engineering. En *Contemporary Empirical Methods in Software Engineering*, Springer.
- Kitchenham, B. y Charters, S. (2007). *Guidelines for performing Systematic Literature Reviews in Software Engineering*. EBSE Technical Report.
- Page, M. J. et al. (2021). The PRISMA 2020 statement. *BMJ*, 372, n71.
