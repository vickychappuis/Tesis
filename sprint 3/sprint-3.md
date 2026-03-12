# Sprint 3 — 5 mar → 18 mar 2026

---

## Ideas generales

- Mi idea de tesis está muy vinculada a **BDD (Behavior-Driven Development)**. La pregunta de investigación apunta a cómo se reconfiguran los ciclos de feedback entre clientes y equipos de desarrollo con IAG — y BDD es justamente una metodología diseñada para que ese feedback ocurra a través de un lenguaje compartido entre técnicos y no técnicos. El paper de AgileGen propone usar **Gherkin** (el lenguaje de BDD: Given/When/Then) como intermediario principal con el usuario, lo cual confirma que el puente natural entre stakeholders y desarrollo asistido por IA pasa por especificaciones en lenguaje natural estructurado. BDD ya resuelve el problema de traducir intención de negocio a comportamiento verificable; la IAG puede potenciar ese ciclo generando, refinando o validando esas especificaciones automáticamente.

---

## Papers leídos

### Empowering Agile-Based Generative Software Development through Human-AI Teamwork

[Fuente](https://dl.acm.org/doi/full/10.1145/3702987)

#### Citas

"However, users, constrained by their domain knowledge, result in a lack of effective acceptance criteria during the requirement completion, failing to fully capture the implicit needs of the user."

"Additionally, we innovate in the human-AI teamwork model, allowing users to participate in decision-making processes they do well and significantly enhancing the completeness of software functionality."

"Finally, to improve the reliability of user scenarios, we also introduce a memory pool mechanism, collecting user decision-making scenarios and recommending them to new users with similar requirements."

"AgileGen, as a user-friendly interactive system, significantly outperformed existing best methods by 16.4% and garnered higher user satisfaction."

"Users are unsure how to drive the Agent to generate desired software, and the Agent does not know how to fulfill user requirements. We have built a bridge between users and the Agent, facilitating collaboration between human decision-making skills and the Agent's coding capabilities. This collaboration has created a generative software development Agent with lightweight iterative feedback."

"Moreover, these agents follow the waterfall model, characterized by a top-down, sequentially linked order, which easily allows the propagation of biases from earlier to later stages. Especially for software development agents based on large language models, the inevitable hallucination issues of large language models can spread and accumulate within the waterfall model, leading to the generation of code that does not align with user requirements."

"AgileGen has designed three key decision-making processes: requirement proposal, clarification, and iterative acceptance with recommendations, focusing on the skills where end users excel."

#### Notas

- Proponen **Gherkin** como principal intermediario con el usuario
- Proponen un framework llamado **AgileGen**
- Los agentes se dividen en **cuatro categorías**, una de ellas es:
  - **Questioning Agent** (e.g., GPT-Engineer, GPT-Pilot): generan preguntas relacionadas con los requerimientos del usuario, expanden los requerimientos y generan código automáticamente
- Probaron AgileGen con **40 proyectos**

---

## Papers pendientes

### ChatDev — Communicative Agents for Software Development

- **PDF guardado**: `Communicative Agents for Software Development chatDev.pdf`
- **Repo**: https://github.com/OpenBMB/ChatDev/tree/main (31k+ estrellas — es un producto similar a lo que pienso!)
- **Review del paper**: https://medium.com/data-science/paper-review-communicative-agents-for-software-development-103d4d816fae
