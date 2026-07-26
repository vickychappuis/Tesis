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
| 2 | Sommerville (2016), *Software Engineering*, 10ª ed. (Global Edition) | ✅ **secciones verificadas** contra el ejemplar (copia local, no publicada) | §2.3.2 entrega incremental · §4.5 validación de requisitos · §4.6 cambio de requisitos · §7.3 implementación · §8.3 *release testing* · §8.4 *user / acceptance testing* · §20.5 aceptación en ágil · §25.3 gestión de cambios (ver §a.2) |
| 3 | Pressman & Maxim (2020), *Software Engineering: A Practitioner's Approach*, 9ª ed. | ⚠️ verificar capítulo/sección | Marco de proceso genérico (construcción, despliegue) |
| 4 | Dumas et al. (2018), *Fundamentals of BPM*, 2ª ed. | ✅ **secciones verificadas** contra el ejemplar (copia local, no publicada) | §1.4 ciclo BPM · §3.3 objetos de datos · §3.4 pools y carriles · §4.4 reglas de negocio · §5.2.2 descubrimiento por entrevistas · §5.4.2 validación semántica (ver §a.1) |
| 5 | Humble & Farley (2010), *Continuous Delivery* | ⚠️ verificar capítulo/sección | Liberación / despliegue — la pieza que Scrum deja fuera por diseño |
| 6 | IIBA (2015), *BABOK Guide*, v3 | ⚠️ verificar sección | Anclar el rol de analista funcional, que **no existe** en Scrum |

### a.1. Dumas et al. (2018) — citas verificadas

Secciones localizadas y leídas en el ejemplar (2ª edición). Sostienen tanto la **notación** elegida como la
**validación de reglas de negocio**:

| Sección | Pág. | Qué dice (verificado) | Dónde se usa |
|---|---|---|---|
| §1.4 The BPM Lifecycle | 16 | Fases del ciclo BPM, empezando por *process identification* | Encuadre del ciclo de vida (`sprint 12/CICLO_DE_VIDA.md`) |
| §3.3 Business Objects | 93 | La perspectiva de objetos indica qué artefactos *requiere* una actividad y cuáles *produce* | **Objetos de datos** del BPMN (entradas/salidas del §2) |
| §3.4 Resources | 96–98 | *"BPMN provides two constructs to model resource aspects: pools and lanes. Pools are generally used to model resource classes, lanes are used to partition a pool into sub-classes or single resources."* Y: los pools y carriles contienen actividades, eventos, gateways y objetos de datos | **Pools y carriles = participante / rol** en el diagrama |
| §4.4 Processes and Business Rules | 138 | Una regla de negocio implementa una política o práctica organizacional; puede aparecer como actividad de decisión, como condición de un (X)OR-split o como *conditional event* | Actividad **A3a** (reglas de negocio) |
| §5.2.2 Interview-Based Discovery | 168 | Descubrimiento entrevistando a expertos de dominio; el conocimiento del proceso está fragmentado por la división del trabajo | Área **§5.2** del marco (oralidad → artefacto) |
| §5.4.2 Semantic Quality and Validation | 187–188 | *"Validation is the activity of checking the semantic quality of a model by comparing it with its real-world business process"*, y solo puede hacerse *"by talking to the process participants and by consulting the available documentation"* | Actividad **A3a**: fundamenta que validar la regla **exige** hablar con el negocio |

### a.2. Sommerville (2016) — citas verificadas

Es la fuente que sostiene todo lo que Scrum deja fuera. Secciones localizadas y leídas en el ejemplar
(10ª ed., Global Edition):

| Sección | Qué dice (verificado) | Dónde se usa |
|---|---|---|
| §2.3.2 Entrega incremental | *"some of the developed increments are delivered to the customer and deployed for use in their working environment"*; una vez entregado, *"it is installed in the customer's normal working environment. They can experiment with the system"* | **A2a + A2b**: es exactamente la secuencia liberación → uso real por el negocio |
| §4.5 Validación de requisitos | Validación = *"checking that requirements define the system that the customer really wants"*, con cuatro chequeos: **validez, consistencia, completitud y realismo** | **A3a** y el área del **"firewall"** (§5.3): los cuatro chequeos son justamente lo que se propone automatizar con IAG |
| §4.6 Cambio de requisitos | Gestión del cambio de requisitos y su planificación | **A4** y **A5** |
| §7.3 Implementation issues | Cuestiones de construcción (reuso, gestión de configuración, host-target) | **A1** (contexto) |
| §8.3 Release testing (p. 245) | *"the process of testing a particular release of a system that is intended for use outside of the development team"*, y el equipo de desarrollo **no** debería ser responsable de él | **A2a** |
| §8.4 User testing (p. 249) | Tres tipos: alpha, beta y **acceptance testing**. *"Acceptance testing is one type of user testing where the customer formally tests a system to decide if it should be accepted from the system supplier or if further development is required."* Seis etapas, la primera: **definir criterios de aceptación** | **A2b** |
| §20.5 (p. 599) | *"Agile methods do not rely on having a complete system specification for system acceptance testing. Rather, stakeholders are closely engaged with the testing process and have the authority to decide when the overall system is acceptable."* | **A2b en contexto ágil**: la aceptación no es una fase contractual separada sino participación continua del stakeholder |
| §25.3 Gestión de cambios (p. 745) | Flujo de *change request*: submit → check → register → **análisis de costo/impacto** → decisión | **A3b** (viabilidad, impacto y esfuerzo) |

> **Los dos hallazgos que más aportan:** §2.3.2 describe literalmente el par liberación + uso en el entorno real
> del cliente, que era la pieza que faltaba en el marco; y §20.5 dice que en ágil la aceptación **no** depende de
> una especificación completa sino de stakeholders involucrados con autoridad para decidir — que es precisamente
> la relación que la tesis pone en cuestión cuando entra IAG de por medio.

> Los PDF de los dos libros quedan como copia local en `fuentes_marco/` pero **excluidos del repositorio**
> (`.gitignore`): son libros completos (Springer y Pearson) y el repositorio es público.

## (b) Los 4 artículos sugeridos por el tutor

Identidad verificada uno por uno (Crossref / OpenAlex / primera página del PDF). PDFs en `papers_daniel/`.

| # | Fuente | Acceso | Aporte esperado al marco |
|---|--------|--------|--------------------------|
| 8 | **Malladi & Sudheer Reddy K. (2025)** — *Generative AI in Agile Software Development: A Comprehensive Survey*. ICIDCA 2025 (IEEE). DOI `10.1109/ICIDCA66325.2025.11280486` | ✅ PDF | Taxonomía de IAG por etapa del SDLC y por práctica ágil; beneficios vs. riesgos (alucinación, sesgo, accountability) |
| 9 | **Cornide-Reyes, Monsalves, Durán, Silva-Aravena & Morales (2025)** — *GenAI in Agile SW Development Processes: A Literature Review Focused on UX*. LNCS, *Social Computing and Social Media*, pp. 228–246. DOI `10.1007/978-3-031-93536-7_16` | ✅ PDF | SLR de 21 estudios: qué fases del ciclo ágil se benefician (planificación, implementación, testing, mantenimiento, retrospectivas) y desafíos de adopción |
| 10 | **Nguyen-Duc et al. (2025)** — *GenAI for Software Engineering — A Research Agenda*. *Software: Practice and Experience* 55(11), 1806–1843. DOI `10.1002/spe.70005` | ⚠️ preprint arXiv:2310.18648 (v1, oct 2023), verificado como el mismo trabajo | 78 preguntas abiertas en 11 áreas de la ingeniería de software → sirve para ubicar los **gaps** y justificar el foco de la PoC |
| 11 | **Sauvola, Tarkoma, Klemettinen, Riekki & Doermann (2024)** — *Future of software development with generative AI*. *Automated Software Engineering* 31(26). DOI `10.1007/s10515-024-00426-z` | ✅ PDF (open access) | **Tabla 1**: los cuatro escenarios S1–S4 (§5.5 del marco); **Tabla 2**: parámetros del modelo (H/AI/T/P y roles A/B/C/D) |

---

_Última actualización: 2026-07-26 — Fase 1 del sprint 15._
