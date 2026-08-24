# Call del 24/8: de dónde salió lo del marco v3 y qué suma la recodificación

## Punto de partida: los 18 papers del marco, por vía de entrada

![Origen de los 18 papers del marco](assets/origen_papers_marco.svg)

- Se validó cada paper citado en el marco: los 18 aparecen en alguna planilla o documento del proceso. Ninguno salió de la nada.
- Caso especial: Geyer, Torun y Busany aparecieron en las búsquedas originales, los descartamos en el filtrado, y reaparecieron en la búsqueda de literatura gris. Hoy se citan.
- Conclusión: el protocolo formal no fue el que produjo los artículos que usamos. Por eso el proceso se presenta como revisión bibliográfica y no como SLR.
- Detalle paper por paper en `CHEQUEO_CORPUS.md`.

## Qué se pedía (call anterior)

- Validar el origen de cada referencia de la tabla. Hecho: gráfico de arriba.
- Recodificar los descartados de las primeras fases contra las categorías nuevas. Hecho: gráfico de abajo.
- Objetivo de las dos: dejar la tabla de categorías lo más completa posible antes de decidir la PoC.

## La recodificación, en una imagen

- Se releyeron los descartados de todas las planillas (sprints 6, 8, 9 y 10).
- Volumen: 1066 filas únicas, 389 con vocabulario de feedback más IAG.
- Criterio: ¿cae en alguna categoría de la tabla con el foco nuevo?
- En el gráfico: la línea gris es lo que el marco ya cita; la línea verde son los descartados que se proponen sumar.
- El marco v3 no se modificó. Los verdes son candidatos a discutir hoy; se decide en conjunto cuáles entran.

![La tabla de categorías después de la recodificación](assets/tabla_categorias_recodificacion.svg)

## Lo que deja la recodificación

- Los azules del sprint 8 (apartados "para después") eran el lugar correcto: 4 de los 8 caen directo en la tabla de categorías, incluido el mejor hallazgo, *From Throw-Away to Takeaway* (no técnicos con vibe coding, con empiria) para 4.4b.
- 4.1 gana su primera evidencia académica formal (*AI personas*, amarillo de ScienceDirect): hoy esa categoría estaba declarada sin respaldo del corpus.
- **4.5 sigue vacía también entre los descartados** y todo lo de aceptación que apareció genera el artefacto o automatiza, nada sobre la validación del stakeholder. Los dos huecos de la tesis resisten la recodificación.
- Los verdes sin usar que son surveys (Vasudevan, Cheng, Fischer y Lang) van a related work, no a la tabla de categorías. El "verde de Google" era el propio paper de Geyer.

## La tabla de categorías, con la ficha de cada candidato

Para el procesamiento a dos: por categoría, lo que el marco ya cita y cada candidato con autores, venue, link, por qué cae y con qué cautela. Los ⭐ son los de más peso (empiria o venue fuerte).

## 4.1 Emite el feedback: impersonación de stakeholders

En el marco: Pirozzi 2024, Damian 2025 (REConnect) y productos. Categoría declarada sin respaldo del corpus formal.

- ⭐ **AI representing personas representing user groups** (ScienceDirect, open access). Personas conversacionales que representan grupos de usuarios: el PM les pregunta por features antes de construir, con lente de agency theory. Es la primera evidencia académica formal para 4.1; sacaría el "sin respaldo". Cautela: no es contexto de desarrollo de software puro.
- **Teaching Agile RE: A Stakeholder Simulation with Generative AI** (Schön, Neumann, Silva da Silva; arXiv 2026). La IAG impersona al stakeholder para que estudiantes practiquen elicitación. Cautela: contexto educativo, no industria.

### 4.2 Captura lo que se dijo: asistentes de reunión

En el marco: Cabrero-Daniel 2024, solo. Categoría flaca en evidencia.

- ⭐ **RECOVER: Toward requirements generation from stakeholders' conversations** (Voria, Casillo, Gravino et al.; IEEE TSE 2025, 18 citas). Conversaciones con stakeholders → requisitos. El puente exacto entre capturar (4.2) y trabajar el artefacto (4.3), en el mejor venue de todos los candidatos. Estaba en tus Ideas PoC.
- **DevNous: LLM multi-agente sobre conversación no estructurada** (Doropoulos et al.; Information and Software Technology 2026). Conversación de equipo → artefactos de gestión.
- **A set of guidelines for supporting collaboration in software team meetings with GenAI** (Andrade; tesis PUCRS 2025). Guías para reuniones de equipo con IAG. Cautela: tesis, no peer review.
- **The future of meetings** (Microsoft Research 2019). Antecedente pre-LLM de transcripción y resumen. Solo como contexto histórico.

### 4.3 Trabaja el artefacto de requisito

En el marco: Mircea, Abbasi, Geyer, Torun + Kraftful, Versive. La categoría más poblada.

- ⭐ **From online user feedback to requirements** (Mallya, Ferrari, Zadenoori et al.; REFSQ/Springer 2026). LLMs clasificando y especificando requisitos desde feedback online masivo. Es la operación de Kraftful con evidencia académica.
- ⭐ **Getting inspiration for feature elicitation: app store vs. LLM** (Wei et al.; ACM 2024, 20 citas). Feedback de reviews → features.
- **Quest-RE** (Hasso et al.; conferencia 2024). Genera las preguntas de la elicitación.
- **GenAI-Enabled Backlog Grooming** (Oftebro, Nguyen-Duc, Kemell; arXiv 2025, estudio empírico). Mantiene el backlog con IAG.
- **Collaboration with GenAI to improve Requirements Change** (ScienceDirect; era azul del sprint 8). Cambio de requisitos vía prompting. Cautela: usuario técnico.
- **UCGen** (ACM 2026). Specs → use cases. Cautela: usuario técnico, mismo límite que Abbasi.
- **RE with GenAI: structured prompt technique (SPT)** (Nayeem et al.; IEEE Conference on AI 2026). Eficiencia en el desarrollo de requisitos con prompts estructurados.

### 4.4a Construye algo mirable: lo opera el equipo

En el marco: Kretzer, Busany, Alabsi.

- ⭐ **Interlinking User Stories and GUI Prototyping** (Kolthoff, Kretzer, Bartelt, Maedche, Ponzetto; 2024, arXiv 2406.08120). User stories → prototipo GUI, semiautomático. Mismo grupo que Kretzer 2025 del corpus: da continuidad de línea de investigación.
- ⭐ **GUISpector** (Kolthoff, Kretzer, Ponzetto, Maedche; arXiv 2025). Agente MLLM que verifica que el prototipo GUI cumpla los requisitos en lenguaje natural. También es lo más cercano a 4.5 que apareció: valida lo construido contra requisitos, pero automático y sin negocio. Mismo grupo que Kretzer.
- **MAxPrototyper** (Yuan, Chen, Quigley; preprint 2024). Prototipos de UI generados por multi-agentes.

### 4.4b Construye algo mirable: lo opera el negocio

En el marco: Robinson + Emergent, PM Agent, prensa profesional.

- ⭐ **From Throw-Away to Takeaway: GenAI and Vibe Coding Across Technical Skill Levels** (ACM 2026, era azul del sprint 8). Cómo técnicos y no técnicos usan vibe coding en el ciclo de producto; mixed-methods, survey N=85 + 31 entrevistas. El candidato con más empiria; Robinson hoy sostiene 4.4b solo como visión.
- **Think like an engineer** (Zhang et al.; arXiv 2025). Agente neuro-simbólico para que end-users no técnicos eliciten y auto-revisen requisitos ambiguos.
- **Enhancing accessibility for non-experts in low-code/no-code through an AI chatbot** (De Troyer, De Croon, Verbert; IFIP HCI 2025). No técnicos construyendo vía chatbot.
- **A Demonstration of End-User Code Customization Using GenAI** (ACM 2024; era azul). End-users personalizando código.
- **Will Code Remain a Relevant UI for End-User Programming?** (ACM 2023). Ensayo conceptual sobre EUP con IAG; sirve de ancla teórica.

### 4.5 Valida contra reglas y procesos de negocio

En el marco: Lindenberg (solo abstract). **La recodificación no encontró nada nuevo: la categoría sigue vacía.** Lo más cercano es GUISpector (4.4a), que valida contra requisitos pero sin actores de negocio. Esto refuerza que la mitad del planteo de la tesis apunta a un espacio sin trabajos.

### 4.6 Tramo técnico (fuera de alcance)

En el marco: Devin, Codegen, Tusk, Sweep.

- **PACGBI: Automated Code Generation from Backlog Items** (IEEE; era azul). Backlog → código. Queda registrado, fuera de alcance.

### 4.7 La aceptación (el hueco)

En el marco: Virk, Fawzy, Sharma. Todo lo nuevo confirma el patrón: se genera el artefacto de aceptación o se automatiza, nadie estudia la validación del stakeholder.

- ⭐ **Generating Test Scenarios From NL Requirements Using RAG LLMs: An Industrial Study** (Arora, Herda, Homm; 2024, arXiv 2404.12772). Deriva escenarios de test en contexto industrial.
- ⭐ **COLDECO: end-user spreadsheet inspection for AI-generated code** (Ferdowsi, Williams, Drosos, Gordon, Sarkar, Zorn et al.; 2023). Herramienta para que el end-user inspeccione lo que generó la IA. Alinea directo con Virk y Fawzy (la verificación como cuello de botella).
- ⭐ **"What it wants me to say": abstraction gap entre end-users y LLMs** (Liu, Sarkar, Negreanu, Gordon et al.; 2023). La barrera de comunicación usuario-IA; es el mismo grupo de Microsoft que COLDECO y empalma con las barreras de Sharma.
- **Comprehensive Evaluation of LLMs in BDD Acceptance Test Formulation** (arXiv 2403.14965; era azul del sprint 8). Genera tests de aceptación Gherkin/BDD con LLMs.
- **A ChatGPT-powered tool for acceptance criteria generation** (Rawson, Reddivari; IEEE IRI 2025). Genera criterios de aceptación desde user stories.

### Roles (objetivo C, fuera de la tabla)

No son categorías de la tabla, pero alimentan la sección de transformación de roles:

- **From Backlogs to Bots: GenAI's Impact on Agile Roles** (Wiley, position paper). PO, dev y Scrum Master redefinidos.
- **The AI Scrum Master** (Springer, book chapter). Gestión ágil automatizada.
- **All work and no flow: automating product owners' workflow** (Singh; tesis 2025). Automatización del flujo del PO.

### Descartes de la recodificación que conviene registrar

- Los surveys (Vasudevan, Cheng, Fischer y Lang, y ~15 SLR similares entre los rojos) no entran a la tabla: van a related work de la revisión.
- El resto de los 389 releídos habla de otra cosa: generación de código, RE para el ingeniero sin stakeholder, gestión de proyectos, aplicaciones de IAG fuera de software.

## Temas abiertos para hoy

- Cómo formular la sección de revisión en el documento final (quedó en "vamos viendo").
- Alabsi figura [gris] pero es lote 2 del mapeo; definir si la etiqueta indica origen o tipo.
- Pirozzi falta en `REFERENCIAS.xlsx`; sumarla al unificar el bib.
- Busany se cita en 4.4a con la cautela de su descarte del sprint 9.
- Objetivos: "efectos percibidos" se transforma o cae (sin entrevistas); se resuelve al reescribir la introducción.

## Anexo

- Recorrido fila por fila de las 18 referencias del marco: `CHEQUEO_CORPUS.md`.
