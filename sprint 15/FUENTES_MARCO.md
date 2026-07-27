# Fuentes del marco conceptual — sprint 15

> Archivo **separado** de `sprint 12/REFERENCIAS.md` (corpus del mapeo de literatura).
> Metadata BibTeX en `FUENTES_MARCO.bib`.
> ⚠️ **Pendiente:** unificar ambos `.bib` en uno solo con lotes etiquetados cuando arranque la redacción.

---

## (a) Anclajes conceptuales del proceso

| # | Fuente | Estado | Para qué se usa |
|---|--------|--------|-----------------|
| 1 | **Schwaber & Sutherland (2020)**, *The 2020 Scrum Guide* | ✅ PDF en `fuentes_marco/`; **citas verificadas literalmente** | Eventos, artefactos y accountabilities; Sprint Review; Product Backlog refinement; la declaración de incompletitud del framework |
| — | Página introductoria de **scrum.org** (*learning series*) | ❌ **no verificada**: renderizada con JavaScript, no se pudo recuperar. Lo que se sabe de ella viene de la transcripción de la call del 9 jul | **No se usa como fuente del marco.** Se menciona solo para distinguir el resumen divulgativo del documento normativo (fila 1). Si se cita en la tesis, hay que abrirla y citarla de primera mano |
| 2 | Sommerville (2016), *Software Engineering*, 10ª ed. (Global Edition) | ✅ **secciones verificadas** contra el ejemplar (copia local, no publicada) | sec. 2.3.2 entrega incremental · sec. 4.5 validación de requisitos · sec. 4.6 cambio de requisitos (A4) · sec. 7.3 implementación · sec. 8.3 *release testing* · sec. 8.4 *user / acceptance testing* · sec. 20.4 aceptación en ágil · sec. 25.3 gestión de cambios (ver sec. a.2) |
| 3 | Dumas et al. (2018), *Fundamentals of BPM*, 2ª ed. | ✅ **secciones verificadas** contra el ejemplar (copia local, no publicada) | sec. 1.4 ciclo BPM · sec. 3.3 objetos de datos · sec. 3.4 pools y carriles · sec. 4.4 reglas de negocio · sec. 5.2.2 descubrimiento por entrevistas · sec. 5.4.2 validación semántica (ver sec. a.1) |

### a.1. Dumas et al. (2018) — citas verificadas

Secciones localizadas y leídas en el ejemplar (2ª edición). Sostienen tanto la **notación** elegida como la
**validación de reglas de negocio**:

| Sección | Pág. | Qué dice (verificado) | Dónde se usa |
|---|---|---|---|
| sec. 1.4 The BPM Lifecycle | 16 | Fases del ciclo BPM, empezando por *process identification* | Encuadre del ciclo de vida (`sprint 12/CICLO_DE_VIDA.md`) |
| sec. 3.3 Business Objects | 93 | La perspectiva de objetos indica qué artefactos *requiere* una actividad y cuáles *produce* | **Objetos de datos** del BPMN (entradas/salidas de la sección 3) |
| sec. 3.4 Resources | 96–98 | *"BPMN provides two constructs to model resource aspects: pools and lanes. Pools are generally used to model resource classes, lanes are used to partition a pool into sub-classes or single resources."* Y: los pools y carriles contienen actividades, eventos, gateways y objetos de datos | **Pools y carriles = participante / rol** en el diagrama |
| sec. 4.4 Processes and Business Rules | 138 | Una regla de negocio implementa una política o práctica organizacional; puede aparecer como actividad de decisión, como condición de un (X)OR-split o como *conditional event* | Actividad **A3a** (reglas de negocio) |
| sec. 5.2.2 Interview-Based Discovery | 168 | Descubrimiento entrevistando a expertos de dominio; el conocimiento del proceso está fragmentado por la división del trabajo | Área **6.2** del marco (oralidad → artefacto) |
| sec. 5.4.2 Semantic Quality and Validation | 187–188 | *"Validation is the activity of checking the semantic quality of a model by comparing it with its real-world business process"*, y solo puede hacerse *"by talking to the process participants and by consulting the available documentation"* | Actividad **A3a**: fundamenta que validar la regla **exige** hablar con el negocio |

### a.2. Sommerville (2016) — citas verificadas

Es la fuente que sostiene todo lo que Scrum deja fuera. Secciones localizadas y leídas en el ejemplar
(10ª ed., Global Edition):

| Sección | Qué dice (verificado) | Dónde se usa |
|---|---|---|
| sec. 2.3.2 Entrega incremental (p. 64) | *"some of the developed increments are delivered to the customer and deployed for use in their working environment"*; una vez entregado, *"it is installed in the customer's normal working environment. They can experiment with the system"* | **A2a + A2b**: es exactamente la secuencia liberación → uso real por el negocio |
| sec. 4.5 Validación de requisitos (pp. 129–130) | Validación = *"the process of checking that requirements define the system that the customer really wants"*, con **cinco** chequeos: **validez, consistencia, completitud, realismo y verificabilidad** | **A3a** y el área del **"firewall"** (6.3): los cinco chequeos son justamente lo que se propone automatizar con IAG |
| sec. 4.6 Cambio de requisitos (p. 130) | Gestión del cambio de requisitos; sec. 4.6.2 da las tres etapas: análisis del problema y especificación del cambio → análisis y costeo → implementación | **A4** |
| sec. 7.3 Implementation issues (p. 212) | Cuestiones de construcción: reuso, gestión de configuración, desarrollo *host-target* | **A1** (contexto) |
| sec. 8.3 Release testing (p. 245) | *"the process of testing a particular release of a system that is intended for use outside of the development team"*, y el equipo de desarrollo **no** debería ser responsable de él | **A2a** |
| sec. 8.4 User testing (pp. 249–251) | Tres tipos: alpha, beta y **acceptance testing** (p. 249). Seis etapas del acceptance testing (Fig. 8.11, p. 250), la primera: **definir criterios de aceptación** | **A2b** |
| Introducción del cap. 8 (p. 231) | *"Acceptance testing is one type of user testing where the customer formally tests a system to decide if it should be accepted from the system supplier or if further development is required."* ⚠ esta frase **no** está en la sec. 8.4 sino en la introducción del capítulo, antes de la sec. 8.1 | **A2b** (definición) |
| sec. 20.4 Systems of systems engineering (pp. 598–599) | *"Agile methods do not rely on having a complete system specification for system acceptance testing. Rather, stakeholders are closely engaged with the testing process and have the authority to decide when the overall system is acceptable."* ⚠ **contexto**: es el punto 1 de una lista donde Sommerville argumenta que el testing de *sistemas de sistemas* debería tomar prestadas técnicas de ágil, no un tratamiento general de la aceptación en ágil. El encabezado de la p. 599 dice "20.5" porque la sec. 20.5 (*Systems of systems architecture*) arranca en esa misma página | **A2b en contexto ágil**: la aceptación no es una fase contractual separada sino participación continua del stakeholder — citar aclarando el encuadre |
| sec. 25.3 Gestión de cambios (p. 745) | Flujo de *change request*: submit → check → register → **análisis de costo/impacto** → decisión | **A3b** (viabilidad, impacto y esfuerzo) |

> Los PDF de los dos libros quedan como copia local en `fuentes_marco/` pero **excluidos del repositorio**
> (`.gitignore`): son libros completos (Springer y Pearson) y el repositorio es público.

## (b) Los 4 artículos sugeridos por el tutor

Identidad verificada uno por uno (Crossref / OpenAlex / primera página del PDF). PDFs en `papers_daniel/`.

| # | Fuente | Acceso | Aporte esperado al marco |
|---|--------|--------|--------------------------|
| 4 | **Malladi & Sudheer Reddy K. (2025)** — *Generative AI in Agile Software Development: A Comprehensive Survey*. ICIDCA 2025 (IEEE). DOI `10.1109/ICIDCA66325.2025.11280486` | ✅ PDF | Taxonomía de IAG por etapa del SDLC y por práctica ágil; beneficios vs. riesgos (alucinación, sesgo, accountability) |
| 5 | **Cornide-Reyes, Monsalves, Durán, Silva-Aravena & Morales (2025)** — *GenAI in Agile SW Development Processes: A Literature Review Focused on UX*. LNCS, *Social Computing and Social Media*, pp. 228–246. DOI `10.1007/978-3-031-93536-7_16` | ✅ PDF | SLR de 21 estudios: qué fases del ciclo ágil se benefician (planificación, implementación, testing, mantenimiento, retrospectivas) y desafíos de adopción |
| 6 | **Nguyen-Duc et al. (2025)** — *GenAI for Software Engineering — A Research Agenda*. *Software: Practice and Experience* 55(11), 1806–1843. DOI `10.1002/spe.70005` | ⚠️ preprint arXiv:2310.18648 (v1, oct 2023), verificado como el mismo trabajo. **Las secciones que se citan (4.4.2, 4.4.5, 4.6.2) son las del preprint**: antes de citar en la tesis hay que mapearlas a la versión publicada | 78 preguntas abiertas en 11 áreas de la ingeniería de software → sirve para ubicar los **gaps** y justificar el foco de la PoC |
| 7 | **Sauvola, Tarkoma, Klemettinen, Riekki & Doermann (2024)** — *Future of software development with generative AI*. *Automated Software Engineering* 31(26). DOI `10.1007/s10515-024-00426-z` | ✅ PDF (open access) | **Tabla 1**: los cuatro escenarios S1–S4 (sec. 6.5 del marco); **Tabla 2**: parámetros del modelo (H/AI/T/P y roles A/B/C/D) |

## (c) Otras fuentes citadas por el marco

Fuentes que el marco cita pero que no pertenecen ni al corpus sistemático (`sprint 12/REFERENCIAS.md`) ni a los
artículos del tutor (sec. b).

| # | Fuente | Acceso | Aporte al marco |
|---|--------|--------|-----------------|
| 8 | **Pirozzi, M. (2024)** — *The Stakeholder Perspective in the Generative Artificial Intelligence Scenario and the AI-Stakeholders*. *PM World Journal* XIII(VIII), Featured Paper. ISSN 2330-4480 | ✅ PDF en `fuentes_marco/`; identidad verificada contra la primera página | Concepto de **AI-Stakeholder** (sec. 6.1 del marco). ⚠️ Revista profesional, **no peer-reviewed**: citar como literatura gris. Hallada en la exploración temprana (sprint 2), antes de la búsqueda sistemática |

---

_Última actualización: 2026-07-27 — sprint 15. Los anclajes de Sommerville y Dumas se re-chequearon uno por uno contra
el texto extraído de los PDF: Dumas quedó sin cambios (6/6 correctos); en Sommerville se corrigió el número de sección
de la cita de aceptación en ágil (20.5 → 20.4), el número de chequeos de validación (cuatro → cinco) y la ubicación de
la definición de acceptance testing (sec. 8.4 → introducción del cap. 8). Se agregó la sec. (c) con Pirozzi (2024),
que estaba citado en el marco sin referencia formal._
