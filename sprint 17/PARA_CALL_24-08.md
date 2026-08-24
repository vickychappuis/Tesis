# Para la call del 24/8: corpus chequeado, descartados recodificados, tablita completa

## 1. Chequeo del corpus (hecho)

- Todas las referencias del marco v3 tienen origen documentado: 7 del mapeo formal, 5 de gris, 2 del tutor, 1 de exploración temprana, 3 del sprint 16, 8 productos. Detalle en `CHEQUEO_CORPUS.md` (con el gráfico de origen).
- Los tres casos que anticipaste (Geyer, Torun, Busany) estaban en las bases, el screening los dejó afuera y reentraron por gris. Es el argumento para presentar la revisión como bibliográfica con criterio de corte.

## 2. Recodificación de los descartados (hecho)

Método: se releyeron los descartados de todas las planillas (sprints 6, 8, 9 y 10; 1066 filas únicas, 389 con vocabulario de feedback más IAG) contra el criterio nuevo: ¿cae en alguna categoría de la tablita? Abajo los que caen. El resto habla de otra cosa (generación de código, RE para el ingeniero, gestión de proyectos, marketing).

### Los azules (apartados "para después" en el sprint 8) eran el lugar correcto donde mirar

| Artículo | Categoría | Nota |
|---|---|---|
| From Throw-Away to Takeaway: GenAI and Vibe Coding Across Skill Levels | **4.4b** | no técnicos construyendo con vibe coding, empiria (survey N=85 + 31 entrevistas) |
| Comprehensive Evaluation of LLMs in BDD Acceptance Test Formulation | **4.7** | genera el artefacto de aceptación (Gherkin/BDD) con LLMs; confirma el patrón de 4.7 |
| Collaboration with Generative AI to improve Requirements Change | **4.3** | cambio de requisitos vía prompting; usuario técnico |
| A Demonstration of End-User Code Customization Using Generative AI | **4.4b** | end-users personalizando código con IAG |
| The AI Scrum Master (LLMs en tareas de gestión ágil) | roles (obj. C) | no es una categoría, alimenta la transformación de roles |
| PACGBI: Automated Code Generation from Backlog Items | 4.6 | tramo técnico, fuera de alcance |
| Formal requirements engineering and LLMs: a two-way roadmap | no cae | RE formal, sin stakeholder |
| Stakeholder Participation for Responsible AI Development | no cae | participación en diseño de IA responsable, no ciclo de feedback con IAG |

### Rojos y amarillos que caen en la tablita con el foco nuevo

| Artículo | Origen | Categoría | Por qué cae |
|---|---|---|---|
| AI representing personas representing user groups | formal/ScienceDirect, amarillo | **4.1** | personas conversacionales que representan grupos de usuarios; el PM les pregunta antes de construir. Primera evidencia académica formal para 4.1, hoy declarada sin respaldo del corpus |
| Teaching Agile RE: A Stakeholder Simulation with Generative AI | gris/arXiv, rojo | **4.1** | IAG impersona al stakeholder (contexto educativo) |
| RECOVER: requirements from stakeholders' conversations (IEEE TSE 2025) | forward, rojo (en Ideas PoC) | **4.2→4.3** | conversaciones con stakeholders → requisitos; el puente exacto entre capturar y trabajar el artefacto |
| A set of guidelines for supporting collaboration in software team meetings with GenAI | forward, rojo | **4.2** | asistencia de IAG en reuniones de equipo |
| The future of meetings (Microsoft Research) | backward, rojo | **4.2** | antecedente pre-LLM de transcripción y resumen de reuniones |
| DevNous: multi-agent grounding IT management in unstructured conversation | forward, rojo | **4.2** | conversación no estructurada → artefactos de gestión |
| From online user feedback to requirements (LLMs) | forward, rojo | **4.3** | rutea feedback masivo de usuarios hacia requisitos; es la operación de Kraftful con evidencia académica |
| Getting inspiration for feature elicitation: app store vs. LLM | forward, rojo | **4.3** | feedback de reviews → features |
| Quest-RE: question generation for RE | backward, rojo (en Ideas PoC) | **4.3** | genera las preguntas de elicitación |
| GenAI-Enabled Backlog Grooming (estudio empírico) | gris/arXiv, rojo | **4.3** | mantiene el artefacto de backlog con IAG |
| UCGen: use cases desde especificaciones | formal/ACM, amarillo | **4.3** | trabaja el artefacto, usuario técnico (mismo límite que Abbasi) |
| Interlinking User Stories and GUI Prototyping (Kolthoff 2024) | backward, rojo | **4.4a** | user stories → prototipo GUI; la planilla ya decía "interesante para prototipos" |
| MAxPrototyper: multi-agente para prototipos de UI | backward, rojo | **4.4a** | generación de prototipos interactivos |
| GUISpector: verificación de requisitos NL en prototipos GUI | forward, rojo | **4.4a/4.5** | valida el prototipo contra los requisitos (automático, sin negocio); lo más cercano a 4.5 que apareció |
| Think like an engineer (EUSE, agente neuro-simbólico) | forward, rojo | **4.4b** | end-users no técnicos manejando requisitos ambiguos con un agente |
| Enhancing accessibility for non-experts in low-code/no-code (chatbot) | forward, rojo | **4.4b** | no técnicos construyendo vía chatbot |
| Will Code Remain a Relevant User Interface for End-User Programming? | formal/ACM, rojo | **4.4b** | ensayo conceptual sobre EUP con IAG |
| A ChatGPT-powered tool for acceptance criteria generation | forward, rojo | **4.7** | genera criterios de aceptación (patrón "generar el artefacto") |
| Generating Test Scenarios from NL Requirements (RAG, industrial) | backward, rojo | **4.7** | deriva tests de aceptación |
| COLDECO: end-user spreadsheet inspection of AI-generated code | backward, rojo | **4.7** | el end-user verificando salida de IA; alinea con Virk y Fawzy |
| "What it wants me to say": abstraction gap entre end-users y LLMs | backward, rojo | **4.7** | barrera de comunicación usuario-IA; alinea con las barreras de Sharma |
| From Backlogs to Bots: GenAI's impact on Agile roles | formal/Wiley, amarillo | roles (obj. C) | PO, dev y SM redefinidos |
| All work and no flow: automating product owners' workflow | forward, rojo | roles (obj. C) | automatización del flujo del PO |

### Lo que la recodificación confirma

- **4.5 sigue vacía también en los descartados**: ninguno valida software construido contra reglas de negocio. Refuerza que el planteo de la tesis apunta a un espacio real.
- **4.7 se refuerza**: todo lo que apareció genera el artefacto de aceptación o automatiza; nada sobre la interacción de validación del stakeholder.
- Los 5 verdes sin usar del corpus que son surveys (Vasudevan, Cheng, Fischer y Lang) van a related work de la revisión, no a la tablita. Stein queda como reserva de 4.3. Raftopoulos (diseño participativo) queda como contexto del objetivo A.
- El verde de Google "A Case Study... Role of Generative AI" es el mismo paper de Geyer, no es una fuente nueva.

## 3. La tablita, completa

Evidencia por categoría después de la recodificación (lo nuevo en cursiva):

| Cat. | Evidencia citada en el marco | Se suma de la recodificación |
|---|---|---|
| **4.1** Emite el feedback | Pirozzi, Damian + productos | *AI personas (ScienceDirect), stakeholder simulation (arXiv)* |
| **4.2** Captura lo dicho | Cabrero | *RECOVER, guidelines meetings, DevNous, Microsoft meetings* |
| **4.3** Trabaja el artefacto | Mircea, Abbasi, Geyer, Torun + Kraftful, Versive | *online user feedback→reqs, app store mining, Quest-RE, backlog grooming, UCGen, Requirements Change* |
| **4.4a** Construye (equipo) | Kretzer, Busany, Alabsi | *Kolthoff, MAxPrototyper, GUISpector* |
| **4.4b** Construye (negocio) | Robinson + Emergent, PM Agent, prensa | *Throw-Away to Takeaway, EUSE agent, low-code chatbot, end-user customization, code as UI* |
| **4.5** Valida contra negocio | Lindenberg (solo abstract) | *nada; GUISpector como frontera* |
| **4.6** Tramo técnico | Devin, Codegen, Tusk, Sweep | *PACGBI* |
| **4.7** Aceptación | Virk, Fawzy, Sharma | *BDD acceptance, acceptance criteria gen, test scenarios, COLDECO, abstraction gap* |

## 4. Temas abiertos para hoy

- Cómo formular la sección de revisión en el documento final (quedó en "vamos viendo").
- Alabsi figura [gris] pero es lote 2 del mapeo; definir si la etiqueta indica origen o tipo.
- Pirozzi falta en `REFERENCIAS.xlsx`; sumarla al unificar el bib.
- Busany se cita en 4.4a pero su descarte del sprint 9 tiene justificación de fondo; mantener la cautela al citarla.
- Objetivos específicos: "efectos percibidos" se transforma o cae (sin entrevistas); se resuelve al reescribir la introducción.
