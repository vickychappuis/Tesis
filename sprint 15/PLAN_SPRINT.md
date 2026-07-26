# Plan del sprint 15 — profundizar el marco del proceso de feedback

> Orden de trabajo derivado de los comentarios de la call del 9 de jul (`sprint 14/resumen_call.md`).
> El orden **no** es 1→5: manda la dependencia. Lo que fija el vocabulario va primero.

**Ventana real:** el sprint cierra el 29 de jul. Objetivo: tener la v2 del marco lista para la
segunda pasada con Daniel (su disponibilidad: mar/mié hasta ~16–17 h, jue ~18 h).

---

## Decisiones tomadas al arrancar

| Tema | Decisión |
|---|---|
| **Notación del diagrama** | **BPMN** (estándar OMG), dibujado en **draw.io**. Se ancla en Dumas et al. (2018), que ya es referencia del proyecto. Una sola semántica para las dos vistas: la vista por roles pasa a ser el mismo diagrama con *pools/lanes*, no otro lenguaje |
| **Dónde van las referencias de anclaje** | Archivo aparte: `sprint 15/FUENTES_MARCO.bib` (+ su listado en `FUENTES_MARCO.md`). Ahí van los anclajes conceptuales (Scrum Guide, Sommerville, etc.) y los 4 artículos del tutor. `sprint 12/REFERENCIAS.bib` queda intacto como corpus del mapeo |
| **Pendiente asociado** | ⚠️ **Unificar `FUENTES_MARCO.bib` con `REFERENCIAS.bib`** cuando se empiece a redactar la tesis (un solo `.bib` con lotes etiquetados). Ver tarea al final |
| **Papers del tutor** | No se usa un artículo si no hay certeza 100 % de su identidad. Cada uno queda con título, autores, venue y DOI verificados |

---

## Fases (en orden de dependencia)

### Fase 0 — Conseguir los 4 artículos del tutor · *en curso*

Identidad verificada de los cuatro (Crossref / OpenAlex / arXiv). Estado de acceso:

| # | Artículo (verificado) | Acceso |
|---|---|---|
| 1 | Malladi, N. V.; Sudheer Reddy, K. (2025). *Generative AI in Agile Software Development: A Comprehensive Survey*. ICIDCA 2025 (IEEE). DOI 10.1109/ICIDCA66325.2025.11280486 | ❌ cerrado → **Timbó** |
| 2 | Cornide-Reyes, H.; Monsalves, D.; Durán, E.; Silva-Aravena, F.; Morales, J. (2025). *Generative Artificial Intelligence in Agile Software Development Processes: A Literature Review Focused on User eXperience*. LNCS, *Social Computing and Social Media* (HCII), pp. 228–246. DOI 10.1007/978-3-031-93536-7_16 | ❌ cerrado → **Timbó** |
| 3 | Nguyen-Duc, A. et al. (2025). *Generative Artificial Intelligence for Software Engineering — A Research Agenda*. *Software: Practice and Experience* 55(11), 1806–1843. DOI 10.1002/spe.70005 | ⚠️ publicado cerrado; **preprint arXiv v1 (2310.18648) descargado** — mismo título, mismos 15 autores, mismo abstract. Citar la versión publicada; pedir PDF por Timbó si se citan detalles finos |
| 4 | Sauvola, J.; Tarkoma, S.; Klemettinen, M.; Riekki, J.; Doermann, D. (2024). *Future of software development with generative AI*. *Automated Software Engineering* 31(26). DOI 10.1007/s10515-024-00426-z | ✅ **open access, descargado** — es el de los 4 escenarios S1–S4 |

PDFs en `sprint 15/papers_daniel/`.

### Fase 1 — Rascar y anclar Scrum *(ticket 4 + mitad del 1)*

Es la **raíz**: hasta no fijar el vocabulario no se puede redibujar (si no, el diagrama se hace dos veces).

Entregable: `sprint 15/SCRUM_ANCLAJE.md`

- Qué dice la **Scrum Guide 2020** (Schwaber & Sutherland): 5 eventos, 3 artefactos con sus *commitments*, 3 *accountabilities*.
- La **Sprint Review** con cita textual, y las dos frases que dan la razón al reparo de Daniel:
  - *"The Sprint Review is a working session and the Scrum Team should avoid limiting it to a presentation."*
  - *"The Sprint Review should never be considered a gate to releasing value."*
- **Qué Scrum NO cubre** (construcción, V&V, liberación, testing de aceptación) y con qué literatura se cubre eso. Esto convierte la objeción del tutor en **argumento citable del marco**, no en un parche.
- Ojo: en Scrum **no existe** el *analista funcional* ni el "cliente" (hay *stakeholders*) → el rol 🟨 AF hay que anclarlo por fuera.
- Tabla de mapeo **A1–A5 → vocabulario Scrum**, con los renombres propuestos (las ideas se mantienen; los nombres pueden cambiar).

### Fase 2 — Diagrama en BPMN *(tickets 1 y 2)*

Con el vocabulario ya fijo. Entregables: `.drawio` + PNG + sección de **leyenda** en el marco.

- Leyenda explícita: actividad · objeto de datos · pool/lane · flujo de secuencia vs. flujo de datos.
- Vista principal y vista por roles con **la misma semántica** y el **mismo sentido de lectura**.
- Corregir el defecto concreto que marcó Daniel: en la vista por carriles, "Feedback: observaciones, cambios, bugs" es un **objeto de datos**, no una actividad.

### Fase 3 — Capa IAG reforzada *(ticket 3)* + escenarios *(ticket 5)*

- Reescribir §4 cruzando los 4 artículos del tutor **con** el corpus de la revisión, manteniendo la etiqueta *paper* / *producto*.
- Agregar tabla de **trazabilidad**: actividad → afirmación → fuente, para que Daniel la audite en la segunda pasada.
- §5 **no se toca** (aprobado), salvo el renombre de actividades y la figura de escenarios.
- Figura S1–S4: **redibujarla como figura propia citando a Sauvola et al. (2024)** en lugar de pegar la imagen del paper.

### Fase 4 — Cierre

- Nota corta "qué cambió desde la v1" para que la reunión con Daniel sea eficiente.
- `REGISTRO.md` + commits.

---

## Si el tiempo aprieta

Se recorta la formalización en draw.io (queda Mermaid con leyenda única, que igual resuelve el grueso del
reproche de notación). **No** se recorta la Fase 1: es el pedido central de la call.

---

## Pendientes registrados

- [ ] **Unificar los dos `.bib`** (`FUENTES_MARCO.bib` → `sprint 12/REFERENCIAS.bib` como lote etiquetado) al empezar la redacción de la tesis.
- [ ] Conseguir por Timbó: artículos **1** y **2** (cerrados) y, si se citan detalles, la versión publicada del **3**.
