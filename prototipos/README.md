# Ideas de prototipo (sprint 18)

## Enfoque

- La tesis estudia dos puntos del marco de proceso: la validación de lo construido contra reglas y procesos de negocio, y la instancia de aceptación.
- Validar lo construido contra reglas y procesos de negocio es una categoría sin trabajos en la literatura.
- En la instancia de aceptación, el stakeholder usa el software y dice si es lo que pidió. Las herramientas existentes generan artefactos pero no ponen al stakeholder validando.
- En ambos puntos, la IAG actúa como mediadora del ciclo de feedback entre negocio y equipo de desarrollo.
- La generación de código es instrumental: el objeto de estudio es el ciclo de feedback.
- Criterio de descarte: el actor de negocio tiene que quedar afectado por el prototipo. Algo tiene que volver hacia él y cambiar lo que hace o lo que entiende. Si el prototipo se puede evaluar entero sin usuarios de negocio, el negocio no es el sujeto y la idea no sirve.
- La validación puede ser liviana igual: 5 a 20 actores de negocio, con formulario o sesión registrada.

## Las tres ideas

| Idea | Qué ataca de la tesis | Qué le vuelve al negocio | Cómo se validaría |
|---|---|---|---|
| [Las reglas del negocio contra el sistema real](idea-2-reglas-contra-sistema/) | Validar lo construido contra reglas y procesos de negocio, la categoría vacía en la literatura. Objetivos C y D | Sus propias reglas corregidas: el sistema le muestra excepciones reales que nunca enunció | Sesiones con 5 a 15 actores de negocio sobre un sistema con excepciones plantadas |
| [Feedback contestado en el momento](idea-3-feedback-contestado/) | Granularidad y temporalidad del ciclo, y el triage que hoy hace el analista funcional. Objetivos B, C y E | La respuesta a su pedido en segundos, con la referencia a lo acordado, antes de que entre a la cola del equipo | Sesiones con 5 a 15 actores de negocio sobre un alcance acordado conocido |
| [Del recorrido a Gherkin](idea-4-recorrido-gherkin/) | Instancia de aceptación: los comentarios del stakeholder se convierten en escenarios Gherkin que él mismo confirma. Objetivo F | Sus criterios de aceptación redactados y confirmados por él, sin pasar por el analista | Sesiones con usuarios o comparación contra escenarios redactados por un analista |

- Cada carpeta tiene un video demo (`demo.webm`), el GIF y su propio README.
