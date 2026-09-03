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
| [Las reglas del negocio contra el sistema real](idea-2-reglas-contra-sistema/) | Validar lo construido contra reglas y procesos de negocio, la categoría vacía en la literatura. Objetivos C y D | Sus propias reglas corregidas: el sistema le muestra excepciones reales que nunca enunció | v1, sesiones con 5 a 15 actores de negocio escribiendo reglas. v2, reuniones grabadas |
| [Feedback contestado en el momento](idea-3-feedback-contestado/) | Granularidad y temporalidad del ciclo, y el triage que hoy hace el analista funcional. Objetivos B, C y E | La respuesta a su pedido en segundos, con la referencia a lo acordado, antes de que entre a la cola del equipo | Sesiones con 5 a 15 actores de negocio sobre un alcance acordado conocido |
| [Del recorrido a Gherkin ejecutado](idea-4-recorrido-gherkin/) | Instancia de aceptación: su comentario se vuelve un test que corre solo contra la aplicación. Objetivos B, C, D y F | Un paso en rojo sobre el que decide él: si el sistema está mal o si su expectativa estaba incompleta | Sesiones con 5 a 15 usuarios de negocio sobre un sistema con errores plantados |

- Cada carpeta tiene su video demo (`demo.webm`), el GIF y su propio README. La idea 2 tiene además una segunda versión, `demo-v2`.

## Las dos familias

Las tres ideas comparten el mismo esqueleto: el negocio dice algo en lenguaje natural, un agente IAG lo confronta contra una referencia, y la devolución vuelve al negocio, no al equipo. Lo que las separa de verdad es **contra qué se confronta**:

| | Contra qué confronta | Qué artefacto se corrige | En qué momento del ciclo |
|---|---|---|---|
| Idea 2 | El sistema construido, inspeccionando comportamiento y pruebas | La regla de negocio | Validación de lo construido |
| Idea 4 | El sistema construido, **ejecutando un test** | El criterio de aceptación | Instancia de aceptación |
| Idea 3 | Lo acordado: alcance, actas, reglas ya pactadas | El pedido en curso | Canal asincrónico, entre sesiones |

- Las ideas 2 y 4 son la misma familia: las dos confrontan contra el software que ya existe. La 4 lo hace con un test que corre, que es evidencia verificable; la 2 lo hace con el juicio del agente sobre el comportamiento, que es más difícil de construir y de auditar.
- La idea 3 es la única que confronta contra documentos en vez de contra software, y la única que opera fuera de una sesión.
- Consecuencia práctica: si hay que elegir una sola PoC, la elección real es entre la familia "contra el sistema" y la familia "contra lo acordado", no entre tres ideas independientes.
