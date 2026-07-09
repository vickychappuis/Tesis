# Propuesta de Daniel — próximos pasos (post-call sprint 13)

Registro del mensaje que Daniel pasó en limpio después de la call, para tenerlo como referencia. Su idea: alcanzar una **versión draft de los tres primeros puntos** y luego retomar la documentación de la revisión de literatura.

> Este documento es solo registro de lo que propone el tutor. El trabajo propio (mi intuición) va en `MARCO_PROCESO_FEEDBACK.md`; la comparación "qué cubre lo nuestro vs. lo de Daniel" se hace después.

---

## Los 4 pasos que propone

1. **Describir el proceso de Ingeniería de Software hoy** con actividades, participantes, inputs y outputs. Puede ser una descripción general "a la Sommerville", o directamente **Scrum** —que si bien se enfoca en gestión del proyecto, es lo más usado como marco general y sirve de ancla.
   - Ancla: [What is Scrum — scrum.org](https://www.scrum.org/learning-series/what-is-scrum/what-is-scrum)

2. **Plantear en forma general el uso de IAG en las distintas etapas** (gestión del proyecto, armado de prototipos, desarrollo propiamente dicho, etc.). Ya hay bibliografía; se trata de tomar de allí aspectos para ejemplificar las etapas, vinculando con el paso anterior (el proceso de hoy). Bibliografía que adjuntó:
   - *Generative AI in Agile Software Development: A Comprehensive Survey* — [IEEE](https://ieeexplore.ieee.org/abstract/document/11280486)
   - *Generative Artificial Intelligence in Agile Software Development Processes: A Literature Review Focused on User eXperience* — [Springer](https://link.springer.com/chapter/10.1007/978-3-031-93536-7_16)
   - *Generative Artificial Intelligence for Software Engineering — A Research Agenda* — [Wiley (SPE)](https://onlinelibrary.wiley.com/doi/abs/10.1002/spe.70005)
   - *Future of software development with generative AI* — [Springer](https://link.springer.com/article/10.1007/s10515-024-00426-z) → **trae la Tabla 1 con 4 niveles de uso de IAG** (ver abajo); sirve como marco conceptual.

3. **Hacer zoom en lo que conecta el feedback de usuario con las etapas de implementación y V&V** (en Scrum es propio de la Sprint Review). Identificar usos de IAG variados y conectarlos, a nivel superficial, con los artículos ya recuperados. Ejemplos que mencionó:
   - Impersonación de stakeholders
   - Interpretación de entrevistas orales/escritas → requisitos
   - Generación automática de tickets
   - Chequeo de consistencia entre feedback y requisitos
   - Gestión y desarrollo automático de tickets

4. **Identificar un conjunto de aspectos puntuales** sobre los que realizar una **prueba de concepto** y validar posteriormente.

---

## Tabla 1 — Cuatro escenarios de uso de IAG en desarrollo de software

De *Future of software development with generative AI* (Springer, 10.1007/s10515-024-00426-z). Marco conceptual para graduar cuánto asume la IA (útil para el **objetivo C**: transformación de roles).

| Escenario | Nombre | Descripción |
|---|---|---|
| **S1** | *Traditional Software Development Operations* | Los humanos ocupan todos los roles; las herramientas y entornos aportan automatización. Los humanos gestionan el proceso, diseñan, implementan, prueban, entregan y mantienen. Las herramientas automatizan tareas, desde el descubrimiento de código hasta el despliegue. |
| **S2** | *AI in loop* | Los humanos dominan a la IA, pero la IA empieza a gestionar áreas de trabajo más grandes y complejas. Automatiza partes seleccionadas de tareas manuales y repetitivas (generación de código, documentación, testing, despliegue) y asiste a los humanos en diseño, troubleshooting y toma de decisiones. |
| **S3** | *AI assumes role(s)* | La IA empieza a **asumir roles** seleccionados (gestión del proceso, diseño, implementación, testing, entrega, mantenimiento). Los humanos se enfocan en las tareas más complejas y controlan toda la operación, supervisando que funcione correctamente y produzca resultados de calidad. |
| **S4** | *Human-in-the-loop* | La IA gestiona las operaciones de desarrollo en varios roles. Los humanos supervisan y controlan, pero su rol se enfoca en la vigilancia (control operativo, resolución de problemas, aseguramiento de calidad, seguridad). Los roles de IA automatizan la mayoría o todas las demás tareas del ciclo de vida. |

> Las formulaciones formales (S1: P{A(H)→…}, etc.) usan notación del paper para expresar quién ocupa cada actividad (H = humano, AI = IA, T = herramienta). Se puede citar tal cual o simplificar.
