# Búsquedas a repetir desde la red de ORT (para Victoria)

Son las 4 búsquedas de la **búsqueda dirigida** de la sec. 4.7 del marco v3, que en agosto 2026 solo pudieron
correrse contra arXiv (ACM DL, SpringerLink e IEEE Xplore bloquearon el acceso automatizado). El objetivo es
obtener **totales citables** de esas tres bases. Nada más: la lectura de relevancia la hago yo después.

## Qué anotar en cada búsqueda

1. Base, **fecha** de la búsqueda y string usado (copiar/pegar tal cual quedó).
2. **Total de resultados** que reporta la base con los filtros puestos.
3. Si el total es ≤ 50: **exportar la lista** (BibTeX o CSV) o sacar captura de todas las páginas de resultados.
4. Filtro de años en todas: **2023 a 2026**.

## Los 4 strings

- **S1:** `"acceptance testing" AND ("large language model" OR "generative AI" OR LLM)`
- **S2:** `"acceptance criteria" AND ("large language model" OR "generative AI" OR LLM)`
- **S3:** `"user acceptance testing" AND ("large language model" OR "generative AI" OR LLM)`
  ⚠ Distinto del S3 de arXiv (`"user acceptance testing" OR "UAT"`), que estaba contaminado por *Universal
  Approximation Theorem*. Acá se ancla con los términos de IA; anotarlo así en el registro.
- **S4:** `("acceptance test" OR "acceptance tests") AND (Gherkin OR BDD OR "behaviour-driven")`

## Cómo correrlos en cada base

### ACM Digital Library — dl.acm.org
Advanced Search → buscar **en Abstract**. Ejemplo S1:
`Abstract:("acceptance testing") AND Abstract:("large language model" OR "generative AI" OR LLM)`
Filtrar *Publication Date* 2023–2026.

### IEEE Xplore — ieeexplore.ieee.org
Advanced Search → Command Search. Ejemplo S1:
`("Abstract":"acceptance testing") AND ("Abstract":"large language model" OR "Abstract":"generative AI" OR "Abstract":"LLM")`
Filtrar años 2023–2026.

### SpringerLink — link.springer.com
Buscador general (no tiene búsqueda por abstract): pegar el string tal cual.
⚠ SpringerLink busca en **texto completo**, así que su total no es comparable con los de abstract — anotarlo
junto al número.

## Extra, si hay tiempo (misma sesión en SpringerLink)

- Intentar el PDF de **`lindenberg2025business`** (*Business Process Discovery Through Agentic Generative AI*,
  ICSOC 2025, DOI en `sprint 12/REFERENCIAS.bib`). No es bloqueante: la sec. 4.5 ya se sostiene con la lectura
  por abstract; el PDF serviría solo para verificarla.

Con los totales y los exports, yo hago el resto (conteo de relevantes y actualización de la sec. 4.7).
