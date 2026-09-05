# Registro de avance - Tesis

> Flujo de trabajo sprint por sprint. Los nombres de archivo corresponden a los del repositorio.
> Referencias: `sprint 12/REFERENCIAS.*` (corpus del mapeo) y `sprint 15/FUENTES_MARCO.*` (anclajes del marco);
> unificadas en `biblio.bib` del proyecto Overleaf al arrancar la redacción (sprint 18).

---

## Sprint 1 — 1 feb → 13 feb 2026

- Planteo de la idea de investigación

---

## Sprint 2 — 18 feb → 4 mar 2026

- Crear el repositorio
- Formular la pregunta de investigación y las subpreguntas
- Definir palabras clave (tabla de dimensiones con conceptos centrales y sinónimos)
- Búsqueda general exploratoria en Google Scholar con combinaciones iniciales de términos
- Archivo: `sprint 2/pregunta-y-busqueda.md`; primeros PDFs descargados

---

## Sprint 3 — 5 mar → 18 mar 2026

- Lectura a fondo de los artículos hallados en Google Scholar
- Papers analizados (con notas y citas por importancia en `sprint 3/sprint-3.md`):
  - *Empowering Agile-Based Generative Software Development through Human-AI Teamwork* (AgileGen)
  - *Communicative Agents for Software Development* (ChatDev)
  - *The Stakeholder Perspective in the Generative AI Scenario and the AI-Stakeholders* (Pirozzi)
  - *Integrating Generative AI for Advancing Agile Software Development* (Gharib et al.)
  - *Impact of Generative AI in the Software Development Life Cycle* (Mohamed)
- Idea conceptual: fuerte vínculo con BDD/Gherkin como puente negocio-técnica; explorar también MDD

---

## Sprint 4 — 19 mar → 25 mar 2026

- Refinar el string de búsqueda probando variantes (String 1, 1b "team dynamics", 2, 3, 4, 5)
- Buscar en buscadores académicos: Timbó (ANII / EBSCO), IEEE Xplore y Springer
- Limitaciones documentadas:
  - ACM Digital Library: requería cuenta premium para filtros avanzados → no se buscó en este sprint
  - IEEE Xplore: bug en el filtro de rango de fechas (no dejaba elegir años anteriores a 2025)
- Decisión: se elige **String 2** como string para continuar
- Archivo: `sprint 4/busqueda.md`

---

## Sprint 5 — 26 mar → 8 abr 2026

- Búsqueda con String 2 (`"generative AI" AND ("business users" OR clients OR stakeholders) AND "software development"`) en las bases priorizadas:
  - ACM: 0 resultados (luego se descubrió que había sido por buscar en la lupa/ámbito equivocado; se rehízo en sprint 6) · IEEE Xplore: 21 · ScienceDirect: 313 (192 cargados) · Springer: ya hecho en sprint 4 · Web of Science: sin acceso a búsqueda por documentos · Wiley: 136 (100 cargados)
- Filtro temporal: 2023 en adelante (lanzamiento de ChatGPT a fines de 2022)
- Definición de criterios de inclusión/exclusión (idioma, tipo de fuente, temáticos I1–I3) y de la escala de relevancia verde / amarillo / rojo
- Primera **clasificación por título** de los resultados → `sprint 5/01_clasificacion_por_titulo.xlsx` (IEEE, ScienceDirect, Springer, Wiley)
- Archivos de apoyo: `sprint 5/busqueda.md`, `sprint 5/resultados-*.md`

---

## Sprint 6 — 9 abr → 7 may 2026

### 1. Incorporación de ACM (1ª pasada — por título)

- Se relevó ACM correctamente y se sumaron sus resultados (~408 filas en la hoja `ACM_Filtrado`). El 0 del sprint 5 se debió a haber buscado en la lupa/ámbito equivocado de ACM, no al String 2
- Resultado: corpus completo con las 5 fuentes, clasificado por título (verde/amarillo/rojo) → `sprint 6/01_clasificacion_por_titulo_con_acm.xlsx`

### 2. Lectura de abstracts (2ª pasada)

- Sobre los que no quedaron en rojo se leyeron los **abstracts** y se reclasificó, incorporando comentarios del tutor (columna "Daniel") → `sprint 6/02_clasificacion_por_abstract.xlsx`
- `sprint 6/README.MD`: link a la planilla de Google Sheets con la clasificación

---

## Sprint 7 — 7 may → 14 may 2026

- Diseño y formalización del **protocolo de la revisión sistemática (SLR)**
- Guía del SLR: `sprint 7/SLR/Guia_SLR_GenAI_feedback_software.docx`
- Material metodológico de base: PRISMA 2020 (checklist + flow diagram) y libro de Wohlin sobre experimentación / snowballing (`sprint 7/SLR/material/`)
- Nota: el backward/forward snowballing se **ejecutó en el sprint 8**, no aquí

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
- Listas **sin clasificar**; la clasificación se hizo en sprint 9

### 4. Forward snowballing

- Para cada paper se buscaron los trabajos que lo citaron → `02_forward_snowballing.xlsx`
- Cubiertos: 7 de 10 papers
- Total: ~158 papers citantes relevados
- Listas **sin clasificar**; la clasificación se hizo en sprint 9

### 5. Descarga de PDFs

- 9/10 papers descargados en `sprint 8/papers seleccionados/`
- Sin acceso abierto: *Business Process Discovery Through Agentic Generative AI* (Lindenberg et al., 2025) — ver `sprint 8/notas.md`
- *Generative Artificial Intelligence for Requirements Engineering in Software Development* (Fischer & Lang, 2026): inicialmente no disponible, obtenido antes del cierre del sprint

---

## Sprint 9 — 21 may → 28 may 2026

### 1. Lectura adicional

- Paper leído: *User-Centered Design with AI in the Loop: A Case Study of Rapid User Interface Prototyping with "Vibe Coding"*
- Se obtuvo el PDF de Fischer & Lang (2026) que faltaba del corpus

### 2. Clasificación del snowballing (lo iniciado en sprint 8)

- **Backward**: se clasificaron las ~497 referencias citadas (verde/rojo), con resumen del revisor por entrada → `sprint 9/01_backward_snowballing_clasificado.xlsx`
- **Forward**: se clasificaron los ~158 papers citantes → `sprint 9/02_forward_snowballing_clasificado.xlsx`
- Se agregaron comentarios para el tutor (Daniel)

---

## Sprint 10 — 29 may → 4 jun 2026

- Búsqueda de **literatura gris** desde 2023 en adelante, usando el string base adaptado lo mínimo por buscador
- Fuentes: Google Search, arXiv, SSRN y Zenodo (intentando relevar los primeros ~150 resultados de cada una)
- Planilla compilada con una hoja por fuente y clasificación por tipo (white paper, documentación técnica, blog profesional, reporte industrial, preprint, presentación, repositorio, estudio de caso, etc.), con una segunda pasada de relevancia → `sprint 10/01_resultados_compilados.xlsx`
- Archivos de apoyo: `sprint 10/README.md`, `sprint 10/*_resultados.md`

---

## Sprint 11 — 4 jun → 11 jun 2026

### 1. Búsquedas específicas por dimensión

- Búsquedas más finas ajustadas a las dimensiones del problema: B (feedback/iteración), C (roles), D (validación de negocio), E (efectos), F (usuarios no técnicos), más una tanda de búsquedas de SaaS → `sprint 11/01_busquedas_por_dimension.xlsx` y segunda pasada de Google → `sprint 11/02_segunda_pasada_google.xlsx`
- Detalle de strings y resultados en `sprint 11/busquedas-especificas.md`

### 2. Relevamiento de startups / productos

- Productos que cubren parte del loop, con funcionalidad, evidencia pública y relación con la pregunta de investigación → `sprint 11/startups_relacionadas.md`
  - YC: Tusk, Sweep, Emergent, Kraftful, Versive
  - No-YC: Devin (Cognition), PM Agent (Heizen), Codegen (ClickUp)

### 3. Reunión con el tutor (`sprint 11/resumen_call.md`)

- Delimitación del foco: implementación + validación con producto ya construido; quedan **fuera** prototipado, ingeniería de requisitos inicial, diseño UX temprano y mantenimiento
- Conceptos emergentes a incorporar: **impersonación / stakeholder IA** y **"firewall" de feedback** (validar el feedback del stakeholder contra requisitos ya definidos)
- Distinciones a documentar: feedback sobre prototipo vs producto; escenario con código (copilot) vs sin tocar código (tipo Figma/generadores)
- Se definieron tareas para el sprint 12

---

## Sprint 12 — 11 jun → 25 jun 2026

- A partir de la reunión con el tutor, se armó en `sprint 11/resumen_call.md` (sección "Próximos pasos — Sprint 12") la lista de tareas pendientes a encarar en este sprint, cada una con su estado (hecho / en curso / pendiente / con Daniel / no llegué)
- Resultado: se logró avanzar sobre las tareas definidas para el sprint y dejar consolidado el trabajo pendiente para el siguiente ciclo

---

## Sprint 13 — 25 jun → 2 jul 2026

- Sprint de 1 semana para repensar el valor del feedback del stakeholder y analizar si cambia entre la etapa de prototipo y la etapa iterativa del desarrollo en metodología ágil
- Se cumplió con lo planificado y se cerró con una reunión con el tutor (`sprint 13/resumen_call.md`): reencuadre como mapeo de literatura y definición de las tareas para el sprint 14

---

## Sprint 14 — 2 jul → 9 jul 2026

- Construcción de la primera versión del marco del proceso de desarrollo con zoom en la etapa de feedback (ver "Próximos pasos — Sprint 14" en `sprint 13/resumen_call.md`)
- Call con Daniel (9 jul): validación del marco y comentarios para profundizarlo (anclar en bibliografía de Scrum, uniformar notación, reforzar la capa IAG con los 4 artículos del tutor, rascar la Sprint Review). Resumen en `sprint 14/resumen_call.md`

---

## Sprint 15 — 10 jul → 29 jul 2026

- Profundizar el marco según los comentarios del sprint 14 (ver "Próximos pasos — Sprint 15" en `sprint 14/resumen_call.md`): anclaje en la Scrum Guide 2020, notación única (BPMN), refuerzo de la capa IAG con los 4 artículos del tutor, desdoblamiento de la Sprint Review y figura propia de los escenarios S1–S4
- Resultado: `sprint 15/MARCO_PROCESO_FEEDBACK_v2.md` (autocontenido, reemplaza al del sprint 14), con el núcleo recortado a **A2b + A2c** y la **propuesta de la PoC** bajada al marco como `[propuesta]` en sec. 5.1. Fuentes verificadas en `sprint 15/FUENTES_MARCO.md` / `.bib`; resumen para la reunión y decisiones abiertas en `sprint 15/CAMBIOS_DESDE_V1.md`

**Pendiente:** segunda pasada con Daniel sobre el marco v2 (`sprint 15/CAMBIOS_DESDE_V1.md` como guía de la reunión).

---

## Sprint 16 — 30 jul → 10 ago 2026

- Call con Daniel (30 jul, `sprint 15/resumen_call.md`): desacoplar el marco de Scrum y contarlo de lo general a lo particular; él dejó por escrito la narrativa de la v3
- Resultado: `sprint 16/MARCO_PROCESO_FEEDBACK_v3.md`, resumen ejecutivo con las 6 secciones de esa narrativa, figuras literales de Sommerville y el BPMN del v2. Asignaciones de la sec. 4 verificadas contra los PDF; en lo relevado no aparecen estudios de la validación del stakeholder sobre software construido, que es el hueco de la tesis
- Referencias nuevas verificadas (Virk, Fawzy, Sharma) sumadas a `REFERENCIAS.xlsx`; cautelas de citado para la memoria en `sprint 16/NOTAS_MEMORIA.md`

**Pendiente:** ~~enviar la v3 a Daniel~~ (discutida en la call del 11/8: marco cerrado).

---

## Sprint 17 — 11 ago → 24 ago 2026

- Call con Daniel (11 ago, `sprint 16/resumen_call.md`): marco v3 cerrado, la revisión se presenta como bibliográfica (no SLR), y quedan dos tareas sobre el corpus antes de definir la PoC
- Chequeo del corpus (`sprint 17/CHEQUEO_CORPUS.md`): las 18 referencias del marco tienen origen documentado; Geyer, Torun y Busany fueron descartadas por el screening y reentraron por gris, el argumento para el encuadre de revisión bibliográfica. Gráfico de origen en `sprint 17/assets/origen_papers_marco.svg`
- Recodificación de los descartados contra las categorías nuevas: 1066 filas únicas releídas, ~23 candidatos que caen en las categorías 4.1–4.7 (los azules del sprint 8 incluidos). 4.5 sigue vacía y 4.7 solo junta generación de artefactos: los dos huecos de la tesis resisten. Resumen visual y candidatos en `sprint 17/PARA_CALL_24-08.md`
- El marco v3 no se modificó: los candidatos se deciden con Daniel

- Call con Daniel (24 ago, `sprint 17/resumen_call.md`): trazabilidad del corpus validada, la documentación se cierra rápido sin marco formal de revisión, y el foco pasa al prototipo (definirlo es lo riesgoso; la validación puede ser liviana)

**Pendiente (sprint 18):** ~~índice del Overleaf y 3-4 ideas de prototipo para OK de Daniel~~ (hechos, ver sprint 18); leer la tabla de candidatos e incorporar lo que valga. Próxima reunión: lunes 31/8 o jueves 3/9, 15:00.

---

## Sprint 18 — 25 ago → 7 sep 2026

- Índice propuesto para el Overleaf (`sprint 18/INDICE_OVERLEAF.md`), con el orden que pidió Daniel en la call del 11/8: la introducción arranca por el ciclo de vida y el feedback, el background va todo sin IA, y la presentación de la IAG abre el capítulo de resultados
- Ideas de prototipo con demo en video, una carpeta por idea en `prototipos/`. La idea 1 (aceptación guiada) se descartó por solaparse con la 4; quedan tres
- Criterio de descarte que ordena las ideas: el actor de negocio tiene que quedar afectado por el prototipo, algo tiene que volver hacia él y cambiar lo que hace o lo que entiende. El test rápido es la validación propuesta: si el prototipo se puede evaluar entero sin usuarios de negocio, el negocio no es el sujeto del estudio. Por ese criterio se reformularon la 2 y la 3
- Idea 2 (`prototipos/idea-2-reglas-contra-sistema/`): invertido el objeto de validación. Ya no valida el sistema para mandarle el ítem al equipo. Confronta las reglas contra el sistema construido y le devuelve al dueño de la regla las excepciones que el sistema codifica y nadie enunció; la regla del negocio se corrige en la sesión y el ítem para el equipo queda como subproducto. Ataca los objetivos C y D
- Idea 3 (`prototipos/idea-3-feedback-contestado/`): el firewall pasa a ser feedback contestado. La respuesta vuelve al cliente en el momento, como contrapregunta, juicio de alcance o bug de regla, en vez de filtrarse a sus espaldas. El agente sugiere el alcance y no lo decide: si el cliente insiste el ítem pasa marcado como discrepancia, y esa escalada es un dato. Se mantiene la priorización, ahora del lado del negocio. Ataca los objetivos B, C y E
- Idea 4 (`prototipos/idea-4-recorrido-gherkin/`): sin cambios, ya cumplía el criterio. Ataca la instancia de aceptación y el objetivo F
- Arrancó la redacción en el Overleaf (proyecto sincronizado por git, clon local en `~/studies/overleaf-tesis`): volcado inicial de introducción, background, revisión y resultados según el índice propuesto, esqueleto de la PoC, bibliografía unificada en `biblio.bib` y figuras con la terminología de la tesis
- Dos rondas de revisión sobre ese volcado: consistencia entre capítulos, terminología unificada, precisión de citas y correcciones de LaTeX y bibliografía
- Call con Daniel (3 set, `sprint 18/resumen_call.md`): índice aprobado con una fusión (revisión y resultados quedan en un solo capítulo, con protocolo y resultados de la búsqueda como subsecciones) y prototipo elegido: el asistente de sesiones de feedback que chequea consistencia contra las reglas y requisitos del proyecto (línea de las ideas 2 y 3). La idea 4 queda afuera por preferencia y tiempo, no por inviabilidad

**Pendiente (sprint 19):** cerrar la segunda versión del capítulo de revisión con la fusión pedida y mandarla a Daniel; bajar a tierra el prototipo (qué preguntas responde, cómo se captura la sesión, contra qué se verifica); revisar la conferencia de RE y lenguajes para expresar reglas; leer la tabla de candidatos del sprint 17 e incorporar lo que valga. Próxima reunión: semana del 14/9, se coordina por Teams.

---
