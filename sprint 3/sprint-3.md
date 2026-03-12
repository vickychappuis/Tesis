# Sprint 3 — 5 mar → 18 mar 2026

---

## Ideas generales

- La tesis está muy vinculada a **BDD (Behavior-Driven Development)**:
  - BDD = lenguaje compartido entre técnicos y no técnicos para traducir intención de negocio a comportamiento verificable
  - Conecta directamente con el objetivo D (validación temprana de reglas de negocio y criterios de aceptación) y el F (PoC orientada a usuarios no técnicos)
  - IAG puede potenciar ese ciclo: generar, refinar o validar especificaciones automáticamente
  - El paper de AgileGen refuerza esto: propone Gherkin (Given/When/Then) como intermediario principal con el usuario

---

## Papers leídos

### Empowering Agile-Based Generative Software Development through Human-AI Teamwork

[Fuente](https://dl.acm.org/doi/full/10.1145/3702987)

#### Citas

"However, users, constrained by their domain knowledge, result in a lack of effective acceptance criteria during the requirement completion, failing to fully capture the implicit needs of the user." - importancia 3

"Finally, to improve the reliability of user scenarios, we also introduce a memory pool mechanism, collecting user decision-making scenarios and recommending them to new users with similar requirements." - importancia 2

"AgileGen, as a user-friendly interactive system, significantly outperformed existing best methods by 16.4% and garnered higher user satisfaction." - importancia 2

"Users are unsure how to drive the Agent to generate desired software, and the Agent does not know how to fulfill user requirements. We have built a bridge between users and the Agent, facilitating collaboration between human decision-making skills and the Agent's coding capabilities. This collaboration has created a generative software development Agent with lightweight iterative feedback." - importancia 3

"Moreover, these agents follow the waterfall model, characterized by a top-down, sequentially linked order, which easily allows the propagation of biases from earlier to later stages. Especially for software development agents based on large language models, the inevitable hallucination issues of large language models can spread and accumulate within the waterfall model, leading to the generation of code that does not align with user requirements." - importancia 3

"AgileGen has designed three key decision-making processes: requirement proposal, clarification, and iterative acceptance with recommendations, focusing on the skills where end users excel." importancia - 3

"According to a survey on the popularity of requirement specification symbols conducted by Kassab and Laplante in 2022 [18], as shown in Figure 2(a), 69% of respondents in requirements engineering (RE) surveys indicated that requirements are expressed in NL, i.e., informally. Therefore, problems exist in the raw requirements collected from users, including incomplete, as noted by Laplante and Kassab in 2022 [19]. The issues in these raw requirements can lead to the developed software failing to meet the user’s acceptance criteria." - importancia 1

"Typically, software companies overcome this problem by hiring product managers" - importancia 2

#### Notas

- Proponen **Gherkin** como principal intermediario con el usuario
- Proponen un framework llamado **AgileGen**
- Los agentes se dividen en **cuatro categorías**, una de ellas es:
  - **Questioning Agent** (e.g., GPT-Engineer, GPT-Pilot): generan preguntas relacionadas con los requerimientos del usuario, expanden los requerimientos y generan código automáticamente
- Probaron AgileGen con **40 proyectos**

---

## Papers pendientes

### ChatDev — Communicative Agents for Software Development

Referenciado en el paper de AgileGen (Empowering Agile-Based Generative Software Development through Human-AI Teamwork).

- **PDF guardado**: `Communicative Agents for Software Development chatDev.pdf`
- **Repo**: https://github.com/OpenBMB/ChatDev/tree/main (31k+ estrellas — es un producto similar a lo que pienso!)
- **Review del paper**: https://medium.com/data-science/paper-review-communicative-agents-for-software-development-103d4d816fae
