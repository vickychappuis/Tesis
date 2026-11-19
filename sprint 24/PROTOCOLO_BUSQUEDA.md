# Protocolo de revisión rápida: búsqueda de agentes sobre documentación

**Estado:** aprobado, en ejecución · **Fecha:** 18/11/2026

Revisión rápida (*rapid review*) según Cartaxo, Pinto y Soares (2020), «Rapid Reviews in Software Engineering», con el formato de protocolo de Kitchenham y Charters (2007). Es rápida porque la selección la hace un solo revisor (un agente), con una muestra auditada por un segundo agente independiente, en lugar de dos revisores humanos. Esa limitación se declara en la tesis.

## 1. Objetivo

Identificar qué formas de guardar e indexar la documentación de un proyecto permiten que un agente basado en LLM encuentre, en vivo, la evidencia para confrontar un enunciado del cliente, y qué evidencia empírica respalda cada una.

## 2. Escenario de referencia

- **Corpus:** hasta 100 documentos PDF de unas 25 páginas cada uno (unas 2.500 páginas, del orden de 1,5 millones de tokens). No entra entero en el contexto de un modelo.
- **Contenido:** documentación de proyecto en español (requisitos, actas, reglas, tickets, políticas, alcance, glosario), con documentos que se modifican entre sí.
- **Consulta:** un enunciado hablado del cliente, transcripto, con vocabulario distinto al de los documentos.
- **Salida:** veredicto (choca, coincide, no contemplado) con cita textual verificable contra el original.
- **Tiempo:** en vivo, durante una reunión. Se toma como referencia 15 s por veredicto.

## 3. Preguntas de investigación

- **PI1.** ¿Qué técnicas de almacenamiento, indexación y recuperación se proponen para agentes LLM sobre corpus de este tamaño?
- **PI2.** ¿Qué evidencia hay sobre su calidad (exhaustividad de lo recuperado, exactitud de la respuesta, fidelidad de las citas) y su demora?
- **PI3.** ¿Cómo tratan tres exigencias propias del caso: encontrar lo que contradice o exceptúa, decidir cuál documento rige cuando hay versiones, y concluir que algo no está documentado?
- **PI4.** ¿Qué cuesta construir y mantener cada técnica cuando los documentos cambian?

## 4. Fuentes

**Bases académicas:** arXiv (cs.CL, cs.IR, cs.SE), ACL Anthology, ACM Digital Library, IEEE Xplore y Google Scholar (primeras 100 respuestas por cadena, por orden de relevancia). Donde una base no admite consultas automatizadas, se consulta su contenido a través de OpenAlex o Semantic Scholar, que la indexan, y se registra la sustitución.

**Literatura gris**, registrada aparte y con menor peso: documentación y blogs técnicos de proveedores de modelos y de herramientas de recuperación (Anthropic, OpenAI, Google, Microsoft, LlamaIndex, LangChain, Vectify, entre otros), blogs de ingeniería de empresas que construyen agentes sobre documentos o código, y repositorios con una evaluación publicada. Entra porque el área es muy nueva y técnicas como LLM Wiki circulan por ahí antes que en papers. Se incluye aunque no tenga evaluación (I3), pero solo como descripción de práctica: sus cifras cuentan como evidencia baja.

**Bola de nieve:** una ronda hacia atrás (referencias) y hacia adelante (citas) desde los estudios incluidos que respondan a PI2 o PI3.

**Punto de partida:** las 57 fuentes del relevamiento del 06/11 (`BUSQUEDA_BIBLIOTECARIO.md`) pasan por la misma selección; no se incluyen automáticamente.

**Período:** enero de 2020 (Lewis et al., que introduce RAG) a noviembre de 2026.

## 5. Cadenas de búsqueda

Se combinan tres grupos de términos, adaptados a la sintaxis de cada base:

- **A. Recuperación:** "retrieval-augmented generation" OR RAG OR "document retrieval" OR "agentic search" OR "agentic retrieval" OR "long document" OR "knowledge base" OR "LLM wiki" OR "compiled knowledge"
- **B. Modelo:** "large language model" OR LLM OR agent OR "tool use"
- **C. Exigencia (una cadena por término):** contradiction OR conflict · exception OR negation · "temporal" OR versioning OR "knowledge update" · unanswerable OR abstention OR "insufficient context" · citation OR attribution OR "grounded" · latency OR "real-time" · "requirements traceability"

Cadenas: A AND B (general, PI1, PI2 y PI4) y A AND B AND C (una por exigencia, PI3). Se registra cada cadena con la fecha y la cantidad de resultados.

## 6. Criterios

**Inclusión (todos):**
- I1. Propone o evalúa una técnica de almacenamiento, indexación o recuperación usada por un LLM o un agente.
- I2. Trabaja sobre documentos en texto (incluidos PDF) y no solo sobre tablas, código o imágenes.
- I3. Reporta una evaluación empírica, o es la fuente primaria de una técnica usada en la práctica, incluida la literatura gris (en este caso entra como descripción, sin peso de evidencia).
- I4. Está en inglés o en español.

**Exclusión (cualquiera):**
- E1. Solo entrena o ajusta modelos sin un componente de recuperación separable.
- E2. Corpus de escala web (millones de documentos) sin resultados para corpus chicos o medianos.
- E3. Sin texto completo accesible.
- E4. Duplicado o versión anterior de otro estudio incluido (se conserva la última).

## 7. Selección

1. Eliminar duplicados.
2. Filtrar por título y resumen.
3. Filtrar por texto completo.

Un agente aplica los criterios y anota el motivo de cada exclusión. Un segundo agente, que no ve las decisiones del primero, decide de nuevo sobre una muestra al azar del 20% de cada paso. Si el desacuerdo pasa del 10%, se ajustan los criterios y se repite el paso. Se informan los conteos de cada paso en un diagrama de flujo tipo PRISMA.

## 8. Extracción

Por estudio: técnica y familia; corpus (tamaño, idioma, dominio, largo de los documentos); tarea; métricas y valores (con tabla o sección de origen); demora reportada; costo de construcción y de actualización; tratamiento de contradicción, vigencia y ausencia; si la cita apunta al original; limitaciones que declaran los autores.

**Verificación de cifras:** toda cifra que se use en la tesis se coteja contra la tabla o el párrafo de la fuente primaria. Si no se puede leer, se marca como no verificable y no se usa.

## 9. Calidad de la evidencia

Tres niveles, que se informan junto a cada cifra:
- **Alta:** revisado por pares, con comparación contra una línea base.
- **Media:** preprint con comparación contra una línea base y código o datos disponibles.
- **Baja:** preprint sin línea base, literatura gris o resultados del propio proveedor de la técnica.

## 10. Síntesis

Síntesis narrativa por familia de técnicas (no metaanálisis: las tareas y métricas no son comparables). Cada familia se evalúa contra siete criterios del escenario, con la evidencia que respalda cada juicio y su nivel:

1. Encuentra lo que contradice o exceptúa.
2. Permite concluir ausencia.
3. Cita textual verificable contra el original.
4. Demora compatible con el uso en vivo.
5. Se adapta a otra documentación sin reescribir el sistema.
6. Escala al corpus de referencia.
7. Costo de mantenimiento cuando cambian los documentos.

Donde no haya evidencia, se dice «sin evidencia» y no se infiere. El resultado alimenta un diseño a medir con el banco de evaluación del prototipo; la revisión no reemplaza esa medición.

## 11. Limitaciones previstas

- Selección automática, con auditoría por muestreo de un segundo agente y sin revisión humana.
- Área que cambia rápido: buena parte de la evidencia son preprints.
- Ningún estudio esperado evalúa exactamente esta tarea; la evidencia viene de dominios parecidos (QA sobre documentos, verificación de hechos, trazabilidad de requisitos).

## Referencias del método

- Cartaxo, B., Pinto, G. y Soares, S. (2020). Rapid Reviews in Software Engineering. En *Contemporary Empirical Methods in Software Engineering*, Springer.
- Kitchenham, B. y Charters, S. (2007). *Guidelines for performing Systematic Literature Reviews in Software Engineering*. EBSE Technical Report.
- Page, M. J. et al. (2021). The PRISMA 2020 statement. *BMJ*, 372, n71.
