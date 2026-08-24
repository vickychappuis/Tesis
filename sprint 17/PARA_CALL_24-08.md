# Call del 24/8: de dónde salió lo del marco v3 y qué suma la recodificación

## Punto de partida: los 18 papers del marco, por vía de entrada

![Origen de los 18 papers del marco](assets/origen_papers_marco.svg)

Se validó cada paper citado en el marco: los 18 aparecen en alguna planilla o documento del proceso, ninguno salió de la nada. Hay un solo caso especial: Geyer, Torun y Busany habían aparecido en las búsquedas originales y los descartamos en el filtrado, pero después volvieron a aparecer en la búsqueda de literatura gris y hoy se citan. Eso confirma que el protocolo formal con sus criterios no fue el que produjo los artículos que usamos, que es la razón para presentar el proceso como revisión bibliográfica y no como SLR. El detalle paper por paper está en `CHEQUEO_CORPUS.md`.

## Qué se pedía

De la call anterior quedaron dos tareas: validar el origen de cada referencia de la tabla (hecho, gráfico de arriba) y recodificar los descartados de las primeras fases contra las categorías nuevas, para dejar la tablita lo más completa posible antes de decidir la PoC.

## La recodificación, en una imagen

Se releyeron los descartados de todas las planillas (sprints 6, 8, 9 y 10: 1066 filas únicas, 389 con vocabulario de feedback más IAG). Esto es lo que había y lo que se suma:

![La tablita después de la recodificación](assets/tablita_recodificacion.svg)

## Lo que deja la recodificación

- Los azules del sprint 8 (apartados "para después") eran el lugar correcto: 4 de los 8 caen directo en la tablita, incluido el mejor hallazgo, *From Throw-Away to Takeaway* (no técnicos con vibe coding, con empiria) para 4.4b.
- 4.1 gana su primera evidencia académica formal (*AI personas*, amarillo de ScienceDirect): hoy esa categoría estaba declarada sin respaldo del corpus.
- **4.5 sigue vacía también entre los descartados** y todo lo de aceptación que apareció genera el artefacto o automatiza, nada sobre la validación del stakeholder. Los dos huecos de la tesis resisten la recodificación.
- Los verdes sin usar que son surveys (Vasudevan, Cheng, Fischer y Lang) van a related work, no a la tablita. El "verde de Google" era el propio paper de Geyer.

## Temas abiertos para hoy

- Cómo formular la sección de revisión en el documento final (quedó en "vamos viendo").
- Alabsi figura [gris] pero es lote 2 del mapeo; definir si la etiqueta indica origen o tipo.
- Pirozzi falta en `REFERENCIAS.xlsx`; sumarla al unificar el bib.
- Busany se cita en 4.4a con la cautela de su descarte del sprint 9.
- Objetivos: "efectos percibidos" se transforma o cae (sin entrevistas); se resuelve al reescribir la introducción.

## Anexo: detalle por artículo recodificado

| Artículo | Origen | Cat. | Por qué cae |
|---|---|---|---|
| AI representing personas representing user groups | formal/ScienceDirect, amarillo | 4.1 | personas conversacionales que representan grupos de usuarios; el PM les pregunta antes de construir |
| Teaching Agile RE: A Stakeholder Simulation with GenAI | gris/arXiv, rojo | 4.1 | IAG impersona al stakeholder (contexto educativo) |
| RECOVER: requirements from stakeholders' conversations (IEEE TSE) | forward, rojo (Ideas PoC) | 4.2→4.3 | conversaciones con stakeholders → requisitos |
| Guidelines for team meetings with GenAI | forward, rojo | 4.2 | asistencia de IAG en reuniones |
| The future of meetings (Microsoft Research) | backward, rojo | 4.2 | antecedente pre-LLM de transcripción y resumen |
| DevNous: multi-agent en conversación no estructurada | forward, rojo | 4.2 | conversación → artefactos de gestión |
| From online user feedback to requirements | forward, rojo | 4.3 | rutea feedback masivo de usuarios; la operación de Kraftful con evidencia académica |
| Getting inspiration for feature elicitation (app stores) | forward, rojo | 4.3 | feedback de reviews → features |
| Quest-RE | backward, rojo (Ideas PoC) | 4.3 | genera las preguntas de elicitación |
| GenAI-Enabled Backlog Grooming | gris/arXiv, rojo | 4.3 | mantiene el backlog con IAG |
| UCGen | formal/ACM, amarillo | 4.3 | specs → use cases, usuario técnico (mismo límite que Abbasi) |
| Collaboration with GenAI to improve Requirements Change | formal/ScienceDirect, azul | 4.3 | cambio de requisitos vía prompting |
| Interlinking User Stories and GUI Prototyping (Kolthoff) | backward, rojo | 4.4a | user stories → prototipo GUI |
| MAxPrototyper | backward, rojo | 4.4a | prototipos de UI multi-agente |
| GUISpector | forward, rojo | 4.4a/4.5 | valida el prototipo contra requisitos (automático, sin negocio); frontera de 4.5 |
| From Throw-Away to Takeaway (vibe coding) | formal/ACM, azul | 4.4b | no técnicos construyendo, empiria (N=85 + 31 entrevistas) |
| Think like an engineer (EUSE) | forward, rojo | 4.4b | end-users no técnicos con un agente que auto-revisa requisitos |
| Low-code/no-code + chatbot para no expertos | forward, rojo | 4.4b | no técnicos construyendo vía chatbot |
| End-User Code Customization | formal/ACM, azul | 4.4b | end-users personalizando código |
| Will Code Remain a Relevant UI for EUP? | formal/ACM, rojo | 4.4b | ensayo conceptual sobre EUP con IAG |
| PACGBI | formal/IEEE, azul | 4.6 | backlog → código, fuera de alcance |
| BDD Acceptance Test Formulation con LLMs | formal/IEEE, azul | 4.7 | genera el artefacto de aceptación |
| Acceptance criteria generation (ChatGPT) | forward, rojo | 4.7 | genera criterios de aceptación |
| Test scenarios from NL requirements (RAG, industrial) | backward, rojo | 4.7 | deriva tests de aceptación |
| COLDECO | backward, rojo | 4.7 | end-user verificando salida de IA; alinea con Virk y Fawzy |
| "What it wants me to say" (abstraction gap) | backward, rojo | 4.7 | barrera de comunicación usuario-IA; alinea con Sharma |
| From Backlogs to Bots | formal/Wiley, amarillo | roles (C) | PO, dev y SM redefinidos |
| The AI Scrum Master | formal/Springer, azul | roles (C) | gestión ágil automatizada |
| All work and no flow (PO workflow) | forward, rojo | roles (C) | automatización del flujo del PO |
