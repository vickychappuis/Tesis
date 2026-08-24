# Call del 24/8: origen de las referencias y recodificación de descartados

## De dónde salió cada paper del marco v3

![Origen de los 18 papers del marco](assets/origen_papers_marco.svg)

- Los 18 tienen vía de entrada documentada. Ninguno salió de la nada.
- Geyer, Torun y Busany: descartados en el filtrado original, reentraron por gris. Por eso el proceso se presenta como revisión bibliográfica y no como SLR.
- Dato anecdótico: de ~1750 filas revisadas en todas las búsquedas quedaron 19 verdes (1%), y de esos verdes hoy se cita el 63% (12 de 19).
- Detalle fila por fila en `CHEQUEO_CORPUS.md`.

## La recodificación de los descartados

- Pedido de la call anterior: releer los descartados con el foco nuevo para completar la tabla de categorías antes de decidir la PoC.
- Se releyeron 1066 filas únicas (sprints 6, 8, 9 y 10); 389 con vocabulario de feedback más IAG.
- Gris = lo que el marco ya cita. Verde = candidatos a sumar. El marco no se modificó; se decide hoy.

![La tabla de categorías después de la recodificación](assets/tabla_categorias_recodificacion.svg)

- Los azules del sprint 8 ("para después") eran el lugar correcto: 4 de 8 caen en la tabla.
- 4.1 gana su primera evidencia académica formal (hoy figura "sin respaldo del corpus").
- 4.5 sigue vacía y en aceptación todo genera o automatiza: los dos huecos de la tesis resisten.
- Los surveys (Vasudevan, Cheng, Fischer y Lang) van a related work, no a la tabla.

## Candidatos a sumar, con qué dice cada uno

El foco, antes versus ahora:

- **Antes (cuando se clasificó todo, sprints 5 a 10):** buscábamos el ciclo completo, "cómo cambia la IAG el feedback entre negocio y equipo". Lo que tocaba una sola pieza quedaba rojo.
- **Ahora (marco v3):** lo que la tesis estudia son dos puntos: **4.5**, validar lo construido contra reglas y procesos de negocio, y **4.7**, la instancia de aceptación (el stakeholder usa el software y dice si es lo que pidió). Son los dos que están vacíos y donde apunta la PoC.
- **4.1 a 4.4 son el contexto**: las piezas del ciclo que la IA ya cubre. Los candidatos de abajo pueblan ese contexto; ninguno resuelve el centro de 4.5 ni de 4.7, y eso también es un resultado. Se verificó con una segunda pasada dirigida (vocabulario de reglas de negocio y de aceptación, sin exigir que mencionen IAG): aparecieron solo tres trabajos de frontera, marcados como tales en la tabla.

⭐ = más peso (empiria o venue fuerte).

| Cat. | Categoría | Paper | Qué dice |
|---|---|---|---|
| 4.1 | Emite el feedback | ⭐ AI representing personas (ScienceDirect, open access) | Personas conversacionales que representan grupos de usuarios; el PM les consulta features antes de construir. Analiza los desafíos de interacción con agency theory |
| 4.1 | Emite el feedback | Stakeholder Simulation with GenAI (Schön et al., [arXiv 2026](https://arxiv.org/abs/2603.12925)) | La IAG impersona al stakeholder para practicar elicitación ágil, ante la dificultad de involucrar usuarios reales. Contexto educativo |
| 4.2 | Captura lo que se dijo | ⭐ RECOVER (Voria et al., IEEE TSE 2025, 18 citas) | Genera requisitos a partir de conversaciones con stakeholders. El puente 4.2→4.3, en el mejor venue de la lista. Estaba en Ideas PoC |
| 4.2 | Captura lo que se dijo | DevNous (Information and Software Technology 2026) | Multi-agente que convierte conversación no estructurada del equipo en artefactos de gestión |
| 4.2 | Captura lo que se dijo | Guidelines for team meetings with GenAI (tesis PUCRS 2025) | Guías para usar IAG en reuniones de equipos de software. Sin peer review |
| 4.2 | Captura lo que se dijo | The future of meetings ([Microsoft Research 2019](https://www.microsoft.com/en-us/research/project/the-future-of-meetings/)) | Transcripción, resumen y asistencia en reuniones. Antecedente pre-LLM, solo contexto |
| 4.3 | Trabaja el artefacto de requisito | ⭐ From online user feedback to requirements (Ferrari et al., REFSQ 2026) | Evalúa LLMs clasificando feedback online masivo de usuarios y generando especificaciones. La operación de Kraftful con evidencia académica |
| 4.3 | Trabaja el artefacto de requisito | ⭐ App store vs. LLM para feature elicitation (Wei et al., ACM 2024, 20 citas) | Compara minar reviews de usuarios contra LLMs para descubrir features |
| 4.3 | Trabaja el artefacto de requisito | Quest-RE (Hasso et al., 2024) | Genera las preguntas de exploración de la elicitación |
| 4.3 | Trabaja el artefacto de requisito | GenAI-Enabled Backlog Grooming ([arXiv 2025](https://arxiv.org/abs/2507.10753)) | Estudio empírico de un asistente que limpia y prioriza el backlog |
| 4.3 | Trabaja el artefacto de requisito | Requirements Change con GenAI ([ScienceDirect](https://doi.org/10.1016/j.csi.2025.104013), azul del sprint 8) | Prompting para gestionar el cambio de requisitos. Usuario técnico |
| 4.3 | Trabaja el artefacto de requisito | UCGen ([ACM 2026](https://doi.org/10.1145/3796563.3796606)) | Specs en lenguaje natural → casos de uso. Usuario técnico, mismo límite que Abbasi |
| 4.3 | Trabaja el artefacto de requisito | Structured Prompt Technique (Nayeem et al., IEEE 2026) | Prompts estructurados para eficiencia en el desarrollo de requisitos |
| 4.4a | Construye algo mirable (equipo) | ⭐ Interlinking User Stories and GUI Prototyping (Kolthoff, Kretzer et al., [arXiv 2024](https://arxiv.org/abs/2406.08120)) | User stories → prototipo GUI semiautomático para elicitar y validar. Mismo grupo que Kretzer del corpus |
| 4.4a | Construye algo mirable (equipo) | ⭐ GUISpector (Kolthoff, Kretzer et al., [arXiv 2025](https://arxiv.org/abs/2510.04791)) | Agente MLLM que verifica que el prototipo GUI cumpla los requisitos en lenguaje natural. Lo más cercano a 4.5, pero automático y sin negocio |
| 4.4a | Construye algo mirable (equipo) | MAxPrototyper (Yuan et al., 2024) | Multi-agentes generando prototipos de UI interactivos |
| 4.4b | Construye algo mirable (negocio) | ⭐ From Throw-Away to Takeaway ([ACM 2026](https://doi.org/10.1145/3772318.3790757), azul del sprint 8) | Cómo técnicos y no técnicos usan vibe coding en el ciclo de producto. Survey N=85 + 31 entrevistas: el candidato con más empiria; hoy 4.4b se sostiene solo con la visión de Robinson |
| 4.4b | Construye algo mirable (negocio) | Think like an engineer ([arXiv 2025](https://arxiv.org/abs/2507.14969)) | Agente neuro-simbólico para que end-users no técnicos expresen y auto-revisen requisitos ambiguos |
| 4.4b | Construye algo mirable (negocio) | Low-code/no-code + chatbot (De Troyer et al., IFIP HCI 2025) | Chatbot que hace accesible construir en low-code/no-code a no expertos |
| 4.4b | Construye algo mirable (negocio) | End-User Code Customization ([ACM 2024](https://doi.org/10.1145/3634713.3634732), azul) | IAG para que end-users personalicen código sin saber programar |
| 4.4b | Construye algo mirable (negocio) | Will Code Remain a Relevant UI? ([ACM 2023](https://doi.org/10.1145/3622758.3622882)) | Ensayo: si el código sigue siendo la interfaz del end-user programming con IAG. Ancla conceptual |
| 4.5 | Valida contra reglas de negocio | Rethinking Legal Compliance Automation with LLMs (backward, 2ª pasada) | LLMs verificando cumplimiento contra normas legales. Hace la operación de 4.5 (chequear contra reglas) pero sobre normas y requisitos, no sobre software construido con actores de negocio. Frontera |
| 4.5 | Valida contra reglas de negocio | LLMs in Enterprise Modeling (backward, 2ª pasada) | LLMs sobre modelos de empresa y procesos, aguas arriba como Lindenberg. Frontera |
| 4.6 | Tramo técnico | PACGBI ([ASE 2024](https://doi.org/10.1145/3691620.3695346), azul) | Backlog item → código automático. Fuera de alcance, solo registro |
| 4.7 | La aceptación | ⭐ Test scenarios con RAG (Arora et al., [arXiv 2024](https://arxiv.org/abs/2404.12772)) | Deriva escenarios de test desde requisitos, estudio industrial |
| 4.7 | La aceptación | ⭐ COLDECO (Ferdowsi, Sarkar, Gordon et al., 2023) | Herramienta para que el end-user inspeccione en la planilla el código que generó la IA. La verificación como cuello de botella, alinea con Virk y Fawzy |
| 4.7 | La aceptación | ⭐ "What it wants me to say" (Liu, Sarkar et al., 2023) | La brecha de abstracción entre cómo el end-user describe lo que quiere y lo que el LLM necesita. Mismo grupo de Microsoft que COLDECO; empalma con Sharma |
| 4.7 | La aceptación | BDD Acceptance Test Formulation ([arXiv 2024](https://arxiv.org/abs/2403.14965), azul) | Evalúa LLMs generando tests de aceptación Gherkin/BDD |
| 4.7 | La aceptación | Acceptance criteria generation (Rawson y Reddivari, [IEEE IRI 2025](https://doi.org/10.1109/iri66576.2025.00067)) | Genera criterios de aceptación por user story con ChatGPT |
| 4.7 | La aceptación | Tesina UNLP: asistencia IA en elicitación y especificación (Panigo y Petkoff Bankoff, 2025, 2ª pasada) | Herramienta IA que asiste al analista funcional generando historias de usuario en formato Gherkin. Genera el artefacto de aceptación; regional y cercana a la PoC |
| roles | Roles (obj. C) | From Backlogs to Bots (Wiley) · The AI Scrum Master ([Springer](https://link.springer.com/chapter/10.1007/978-3-031-99062-9_8)) · All work and no flow (tesis 2025) | PO, dev y Scrum Master redefinidos por la IAG. No van a la tabla; alimentan el objetivo C |

En el centro de 4.5 y 4.7 no cayó ningún candidato: los tres de la segunda pasada son frontera (hacen la operación en otro dominio o generan el artefacto, sin actores de negocio sobre software construido).

## Temas abiertos para hoy

- Cómo formular la sección de revisión en el documento final (quedó en "vamos viendo").

## Anexo

- Recorrido fila por fila de las 18 referencias del marco: `CHEQUEO_CORPUS.md`.
