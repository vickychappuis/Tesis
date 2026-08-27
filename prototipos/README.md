# Ideas de prototipo (sprint 18)

## Enfoque

- La tesis estudia dos puntos del marco de proceso: la validación de lo construido contra reglas y procesos de negocio, y la instancia de aceptación.
- Validar lo construido contra reglas y procesos de negocio es una categoría sin trabajos en la literatura.
- En la instancia de aceptación, el stakeholder usa el software y dice si es lo que pidió. Las herramientas existentes generan artefactos pero no ponen al stakeholder validando.
- En ambos puntos, la IAG actúa como mediadora del ciclo de feedback entre negocio y equipo de desarrollo.
- La generación de código es instrumental: el objeto de estudio es el ciclo de feedback.
- La validación de cualquier prototipo puede ser liviana: 5 a 20 usuarios con formulario, o corridas automáticas comparando salidas.

## Las cuatro ideas

| Idea | Qué ataca de la tesis | Cómo se validaría |
|---|---|---|
| [Agente de aceptación guiada](idea-1-aceptacion-guiada/) | Instancia de aceptación: el agente guía al stakeholder mientras usa el software, propone qué probar por criterio y registra veredictos para el equipo | Proyecto ficticio, 5 a 15 usuarios de negocio, formulario al cierre |
| [Validador contra reglas de negocio](idea-2-validador-reglas/) | Validar lo construido contra reglas y procesos de negocio, categoría vacía en la literatura | Corridas automáticas sobre aplicaciones de ejemplo con violaciones plantadas |
| [Firewall de feedback](idea-3-firewall-feedback/) | Objetivo B: granularidad y temporalidad del ciclo; el equipo recibe solo ítems accionables priorizados | Corridas sobre issues históricos de repositorios reales |
| [Del recorrido a Gherkin](idea-4-recorrido-gherkin/) | Instancia de aceptación: los comentarios del stakeholder se convierten en escenarios Gherkin que él mismo confirma | Sesiones con usuarios o comparación contra escenarios redactados por un analista |

- Cada carpeta tiene un video demo (`demo.webm`), el GIF y su propio README.
