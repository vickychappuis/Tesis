# Búsqueda en buscadores académicos

## Referencia de objetivos específicos

- **(A)** Caracterizar las dinámicas tradicionales de feedback técnico y de validación de procesos de negocio en equipos que adoptan IAG.
- **(B)** Identificar cambios en la frecuencia, secuencia, granularidad y temporalidad de los intercambios de validación.
- **(C)** Examinar la transformación del rol del cliente, analista funcional y del equipo técnico en contextos donde actores del negocio interactúan directamente con herramientas generativas.
- **(D)** Analizar el impacto de la IAG en la validación temprana de reglas de negocio, flujos operativos y criterios de aceptación.
- **(E)** Describir efectos percibidos en tiempos de ajuste, claridad de requerimientos, alineación negocio-tecnología y coordinación del trabajo.
- **(F)** Desarrollar una prueba de concepto (PoC) exploratoria de un prototipo basado en IAG orientado a usuarios no técnicos, que permita observar dinámicas de validación temprana de procesos.

---

**Filtros generales:** Peer Reviewed, 01/2023 – 03/2026, Academic Journals + Conference Materials + Literature Reviews

---

## Timbó (ANII) — EBSCO

### String 1: `"generative AI" AND validation`

| Campo | Resultados | Nota |
|---|---|---|
| All Text | 99,867 | inutilizable — descartado |

---

### String 1b: `"generative AI" AND "team dynamics" AND "software development"` _(reemplazo del 1)_

| Campo | Resultados | Nota |
|---|---|---|
| All Text | 70 | manejable — varios relevantes nuevos |

<details>
<summary>Artículos relevantes</summary>

**Must read**
- From Backlogs to Bots: Generative AI's Impact on Agile Role Evolution — GenAI redefine roles ágiles (product owner, developer, scrum master). Objetivos A, B, C.

**Relevante**
- The Purposeful Presentation of AI Teammates — adopción de AI como teammate, seguridad laboral, responsabilidad. Objetivos C y E.
- From Today's Code to Tomorrow's Symphony: The AI Transformation of Developer's Routine by 2030 — desarrolladores como orquestadores de AI. Objetivos A y C.

**Opcional**
- Beyond Anthropomorphism: Social Presence in Human–AI Collaboration — colaboración humano-AI. Objetivo C.

</details>

---

### String 2: `"generative AI" AND ("business users" OR clients OR stakeholders) AND "software development"`

| Campo | Resultados | Nota |
|---|---|---|
| All Text | 1,723 | revisado en Sprint 2 |

---

### String 3: `"AI-assisted development" AND "development cycle"`

| Campo | Resultados | Nota |
|---|---|---|
| All Text | 9 | sin resultados relevantes — ruido de otros dominios |

---

### String 4: `"generative AI" AND "software teams" AND roles`

| String | Campo | Resultados | Nota |
|---|---|---|---|
| base | All Text | 46 | ruido alto |
| `+ AND ("software development" OR "software engineering")` | All Text | 35 | ruido persistente |
| idem | AB Abstract | 0 | demasiado restrictivo |

<details>
<summary>Artículos relevantes</summary>

**Must read**
- Integrating Sentiment Analysis into Agile Feedback Loops for Continuous Improvement — IA en feedback loops ágiles. Objetivos A y B.
- Augmenting, Not Replacing: The Role of LLMs in Human-Centric Formal RE — LLMs asistiendo a stakeholders no técnicos en requerimientos formales. Objetivos C y D.

**Relevante**
- The Impact of Generative AI on Creativity in Software Development: A Research Agenda — Impacto de GenAI en capacidades individuales y de equipo. Objetivos A y B.
- Enhancing Software Development with Large Language Models: A Case Study of Kolay.ai — Case study con human-in-the-loop y aceleración de ciclos.
- The AI of Oz: A Conceptual Framework for Democratizing Generative AI in Live-Prototyping User Studies — Prototipado en tiempo real con feedback inmediato del usuario. Objetivo F.

**Opcional**
- A Disruptive Research Playbook for Studying Disruptive Innovations — Marco metodológico sociotécnico para estudiar GenAI en SE.

</details>

---

### String 5: `"generative AI" AND "software process"`

| String | Campo | Resultados | Nota |
|---|---|---|---|
| base | All Text | 133 | manejable — ruido presente pero varios relevantes |
| `+ AND (feedback OR stakeholders OR requirements OR validation)` | All Text | 128 | casi sin reducción — refinamiento no efectivo |

<details>
<summary>Artículos relevantes</summary>

**Must read**
- Toward Process Improvement Framework for Software Development Using Generative AI — framework de proceso para desarrollo con GenAI basado en PSP. Directo al tema.
- Generative AI in the Software Development Process: A Practical Approach — aplicación práctica de GenAI en el SDLC (requirements, prototyping, coding, testing).

**Relevante**
- How mature is requirements engineering for AI-based systems? — systematic mapping de RE4AI, gap entre ML engineers y end-users. Objetivos C y D.
- Generative language models potential for requirement engineering applications — ChatGPT y Gemini en tareas de RE. Objetivos C y D.
- Enhancing declarative business process management availability through generative AI — GenAI + BPM, generación de modelos de proceso. Objetivo D.
- Aligning Software Product Management with Software Engineering Concepts — rol del product manager en SE + AI para toma de decisiones. Objetivos B y C.
- Low-Code and No-Code Development in the Era of Artificial Intelligence — AI habilitando usuarios no técnicos a construir software. Objetivos C y F.

**Opcional**
- Self-Collaboration Code Generation via ChatGPT — agentes LLM en roles (analista, coder, tester). Dinámicas de equipo y colaboración.

</details>

---

## ACM Digital Library

Requiere cuenta premium para aplicar filtros avanzados (peer review, rango de fechas, tipo de contenido) — no se realizaron búsquedas.

---

## IEEE Xplore

**Nota:** el filtro de rango de fechas presentó un bug — no permitía seleccionar años anteriores a 2025. Las búsquedas se realizaron sin filtro de fecha.

| String | Campo | Resultados | Nota |
|---|---|---|---|
| `"AI-assisted development" AND "development cycle"` | All Text | 1 | sin resultados relevantes |

---

## Springer

### String 1b: `"generative AI" AND "team dynamics" AND "software development"`

**Filtros aplicados:** Article, Conference paper, Research article, 2023–2026, English

| Campo | Resultados | Nota |
|---|---|---|
| All Text | 12 | manejable — varios relevantes nuevos |

<details>
<summary>Artículos relevantes</summary>

**Must read**
- [Generative AI for Software Development: A Survey](https://link.springer.com/chapter/10.1007/978-981-96-7238-7_17) — survey sobre impacto transformativo de GenAI en prácticas de SD. Todos los objetivos.
- [Generative Artificial Intelligence in Agile Software Development Processes: A Literature Review Focused on User eXperience](https://link.springer.com/chapter/10.1007/978-3-031-93536-7_16) — revisión de GenAI en ágil con foco en UX. Objetivos A, B, C.

**Relevante**
- [Generative AI in Agile, Project, and Delivery Management](https://link.springer.com/chapter/10.1007/978-3-031-61797-3_9) — GenAI en gestión ágil y de entrega. Objetivos A, B.

**Opcional**
- [AI and Work Engagement: A Study of IT Professionals Through the Lens of Self-Determination Theory](https://link.springer.com/chapter/10.1007/978-3-031-95334-7_9) — compromiso laboral + AI en profesionales IT. Objetivo E.
- [A Survey on Large Language Models for Software Engineering](https://link.springer.com/article/10.1007/s11432-025-4670-0) — survey amplio de LLMs en SE. Relevante como referencia general.

</details>

---

### String 5: `"generative AI" AND "software process"`

**Filtros aplicados:** Article, Conference paper, 2023–2026, English

| Campo | Resultados | Nota |
|---|---|---|
| All Text | 20 | ruido alto — pocos relevantes nuevos |

<details>
<summary>Artículos relevantes</summary>

**Relevante**
- [Explainable AI for SW Development and Testing](https://link.springer.com/chapter/10.1007/978-3-032-04288-0_2) — XAI en desarrollo y testing. Objetivos A, B.
- [Hype to Quality: Assessing Generative AI Products Before Use](https://link.springer.com/chapter/10.1007/978-3-032-04288-0_4) — evaluación de herramientas GenAI antes del uso. Objetivos A, E.

**Opcional**
- [Towards Augmenting Human-Centred Design: Generative AI Tools for Interaction Research and Design](https://link.springer.com/chapter/10.1007/978-3-031-82633-7_2) — GenAI en diseño centrado en humano. Objetivo F.

</details>

---

### String 4: `"generative AI" AND "software teams" AND roles AND ("software development" OR "software engineering")`

**Filtros aplicados:** Article, Conference paper, Research article, 2023–2026, English

| Campo | Resultados | Nota |
|---|---|---|
| All Text | 5 | sin resultados relevantes |

---

### String 2: `"generative AI" AND ("business users" OR clients OR stakeholders) AND "software development"`

**Filtros aplicados:** Article, Conference paper, Research article, 2023–2026, English

| Campo | Resultados | Nota |
|---|---|---|
| All Text | 330 | amplio — varios relevantes nuevos |

<details>
<summary>Artículos relevantes</summary>

**Must read**
- [Analysing the Role of Generative AI in Software Engineering - Results from an MLR](https://link.springer.com/article/10.1007/s10664-025-10644-2) — MLR sobre el rol de GenAI en SE. Todos los objetivos.
- [Design Principles for Collaborative Generative AI Systems in Software Development](https://link.springer.com/chapter/10.1007/978-3-031-99062-9_4) — principios de diseño para sistemas GenAI colaborativos. Objetivos A, B, C.
- [The AI Scrum Master: Using LLMs to Automate Agile Project Management Tasks](https://link.springer.com/chapter/10.1007/978-3-031-99062-9_8) — LLMs automatizando rol de scrum master. Objetivos A, B, C.
- [Generative AI and Changing Work: Systematic Review of Practitioner-Led Work Transformations Through Job Crafting](https://link.springer.com/article/10.1007/s10664-025-10639-z) — revisión sistemática sobre transformaciones del trabajo. Objetivos A, C, E.
- [Cautious Optimism: The Influence of Generative AI Tools in Software Development Projects](https://link.springer.com/article/10.1007/s10664-025-10633-5) — estudio empírico en proyectos de SD. Objetivos A, B.

**Relevante**
- [Reconsidering Requirements Engineering: Human-AI Collaboration in AI-Native Software Development](https://link.springer.com/chapter/10.1007/978-3-031-99062-9_3) — RE + colaboración humano-AI en desarrollo AI-native. Objetivos C, D.
- [Exploring Human-AI Collaboration in Agile: Customised LLM Meeting Assistants](https://link.springer.com/chapter/10.1007/978-3-031-99062-9_9) — asistentes LLM en reuniones ágiles. Objetivos A, B.
- [NLP and GenAI in Agile Project Management: A Systematic Mapping Study](https://link.springer.com/article/10.1007/s10664-024-10572-z) — mapeo sistemático de GenAI en PM ágil. Objetivos A, B.
- [Generative Artificial Intelligence for Requirements Engineering in Software Development](https://link.springer.com/article/10.1007/s13369-024-09819-2) — análisis del estado del arte de GenAI para RE. Objetivos C, D.
- [Enhancing Agile Workflows with AI-Driven Requirements Engineering](https://link.springer.com/chapter/10.1007/978-3-031-99062-9_5) — design science para RE con AI en flujos ágiles. Objetivos B, D.
- [Responsible AI in Agile Software Engineering - An Industry Perspective](https://link.springer.com/chapter/10.1007/978-3-031-99062-9_6) — perspectiva industrial sobre IA responsable en ágil. Objetivos A, C.
- [Managing Expectations Towards AI Tools for Software Development: A Multiple-Case Study](https://link.springer.com/article/10.1007/s10664-024-10607-5) — case study sobre gestión de expectativas. Objetivos A, E.
- [Prompt Patterns for Agile Software Project Managers](https://link.springer.com/chapter/10.1007/978-3-031-99062-9_7) — patrones de prompts para PMs ágiles. Objetivos A, B.
- [Business Process Discovery Through Agentic Generative AI](https://link.springer.com/article/10.1007/s10270-024-01248-9) — BPM + agentes GenAI para descubrimiento de procesos. Objetivo D.

**Opcional**
- [Trust, Artificial Intelligence and Software Practitioners: An Interdisciplinary Agenda](https://link.springer.com/article/10.1007/s10664-024-10584-9) — confianza + IA + practicantes de software. Objetivo E.
- [Process Mindlessness: When We Lose Sight of What AI is Supposed to Improve](https://link.springer.com/article/10.1007/s10664-025-10638-0) — mirada crítica sobre adopción sin reflexión. Relevante para encuadre.

</details>

---
