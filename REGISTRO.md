# Registro de avance - Tesis

---

## Sprint 1 — 1 feb → 13 feb 2026

- Planteo de la idea

---

## Sprint 2 — 18 feb → 4 mar 2026

- Crear repo
- Formular pregunta y subpreguntas
- Definir palabras clave
- Búsqueda general en Google Scholar

---

## Sprint 3 — 5 mar → 18 mar 2026

- Lectura a fondo de artículos encontrados en Google Scholar

---

## Sprint 4 — 19 mar → 25 mar 2026

- Refinar el string de búsqueda
- Buscar en otros buscadores académicos (ANII, ACM, IEEE, Springer)

---

## Sprint 5 — 26 mar → 8 abr 2026

- Búsqueda con String 2 (string elegido para continuar) en ACM, IEEE, Science Direct, Springer, Web of Science y Wiley
  - Prioridades: Springer, IEEE, ACM, Science Direct (problemas de login), WoS, Wiley
- Revisar si "team dynamics" debe mantenerse o ajustarse como palabra clave general definida al inicio del trabajo; no corresponde al String 2

---

## Sprint 6 — 9 abr → 7 may 2026

- Cargar los resultados de ACM al Excel
- Revisar en el Excel los títulos marcados en amarillo y leer sus abstracts
- Definir la lista final de referencias (armar el Excel solo con los verdes)

---

## Sprint 7 — 7 may → 14 may 2026

- Búsqueda de literatura gris (blogs, publicaciones de LinkedIn, etc.) via Google Scholar, Google Search y arXiv
- Backward snowballing
- Forward snowballing

---

## Sprint 8 — 20 may → 21 may 2026

### 1. Resolución de amarillos pendientes del sprint 6

- Se reabrió `01_clasificacion_final_y_corpus.xlsx` (mismo archivo que sprint 6, con columnas nuevas agregadas: "Nueva clasificación", "Definición final amarillos", "Justificación")
- Se releyeron los abstracts completos de los ~93 papers que habían quedado en amarillo (y se revisaron también algunos verdes que generaban dudas)
- Resultado: la gran mayoría pasaron a rojo (descartados); muy pocos confirmados verde
- Fuentes con mayor volumen de amarillos resueltos: ScienceDirect (~29), ACM (~25), Wiley (~13)

### 2. Definición del corpus SLR final

- Con los verdes confirmados de todas las fuentes (IEEE, ACM, ScienceDirect, Springer, Wiley) se armó la hoja `Finales_fuentes` en `01_clasificacion_final_y_corpus.xlsx`
- Corpus final: **10 papers**, cada uno con nombre, tipo, año, DOI y entrada BibTeX completa
- El BibTeX quedó guardado dentro de la propia planilla (columna `bibtex`), no en un `.bib` aparte

### 3. Backward snowballing

- Para cada paper del corpus se listaron todas sus referencias → `03_backward_snowballing.xlsx`
- Cubiertos: 8 de 10 papers (no incluidos: Fischer & Lang y Generative AI for RE / Cheng et al.)
- Total: ~497 referencias listadas entre las 8 hojas
- La clasificación de esas referencias (verde/rojo) se hizo en sprint 9

### 4. Forward snowballing

- Para cada paper se buscaron los trabajos que lo citaron → `02_forward_snowballing.xlsx`
- Cubiertos: 7 de 10 papers
- Total: ~158 papers citantes relevados
- La clasificación también se hizo en sprint 9

### 5. Descarga de PDFs

- 9/10 papers descargados en `sprint 8/papers seleccionados/`
- Sin acceso abierto: *Business Process Discovery Through Agentic Generative AI* (Lindenberg et al., 2025) — ver `sprint 8/notas.md`
- *Generative Artificial Intelligence for Requirements Engineering in Software Development* (Fischer & Lang, 2026): inicialmente no disponible, obtenido antes del cierre del sprint

---

## Sprint 9 — 21 may → 28 may 2026

- Paper encontrado para leer: "User-Centered Design with AI in the Loop: A Case Study of Rapid User Interface Prototyping with 'Vibe Coding'"

---

## Sprint 10 — 29 may → 4 jun 2026

- Hacer una búsqueda de literatura gris con el mismo string usado hasta ahora, considerando solo resultados de 2023 en adelante
- Realizar la búsqueda en Google Search, arXiv, SSRN y Zenodo, intentando descargar los primeros 150 resultados de cada fuente
- Armar la planilla como antes y clasificar cada fuente por tipo: white paper, documentación técnica, blog profesional, reporte industrial, preprint, presentación, repositorio, estudio de caso empresarial, etc.

---

## Sprint 11 — 4 jun → 11 jun 2026

- Realizar búsquedas más específicas en Google, ajustando los términos según dimensiones concretas del problema de investigación
- Relevar productos SaaS que cubran alguna parte de lo que se está buscando
- Registrar para cada SaaS identificado qué funcionalidad cubre, qué evidencia pública existe y cómo se relaciona con la pregunta de investigación

---
