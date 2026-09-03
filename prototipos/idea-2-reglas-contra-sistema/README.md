# Idea 2: Las reglas del negocio contra el sistema real

![Demo de las reglas del negocio contra el sistema real](demo.gif)

Video completo en `demo.webm` (53 s). Mock auto-animado en `demo.html` (abrir en un navegador a 1280x720).

## Qué es

- El actor de negocio escribe sus reglas en lenguaje natural, tal como las diría en una reunión.
- El agente IAG confronta esas reglas contra el sistema construido: inspecciona su comportamiento y sus pruebas.
- El sistema construido codifica excepciones reales que nadie enuncia en una reunión. Cada choque vuelve al negocio como pregunta: "acá se emiten notas de crédito sin aprobación de supervisor en devolución parcial con reintegro, ¿es un error del sistema o una excepción que la regla no contempla?".
- El actor de negocio resuelve caso por caso: corrige su propia regla o marca el error. Termina la sesión con su conjunto de reglas revisado.
- Lo que sale hacia el equipo de desarrollo es el resto, y es un subproducto.

## Qué punto de la tesis ataca

- La categoría "validar lo construido contra reglas y procesos de negocio", hoy vacía en la literatura.
- Objetivo D, validación temprana de reglas de negocio: el actor de negocio descubre en una sesión los huecos de sus propias reglas que hoy aparecen meses después, en producción o cuando un desarrollador pregunta por un caso borde.
- Objetivo C, transformación del rol: el actor de negocio interactúa directo con la herramienta generativa, sin traducir sus reglas a lenguaje técnico ni pasar por el analista.
- A diferencia de herramientas como GUISpector, que verifican prototipos GUI contra requisitos de forma automática, acá lo que se revisa es la regla de negocio y quien la revisa es su dueño.

## Validación

- Sesiones con 5 a 15 actores de negocio sobre un sistema de ejemplo con excepciones plantadas.
- Cada participante escribe sus reglas antes de ver el sistema y las revisa después de la confrontación.
- Métricas: cuántas reglas iniciales sobreviven sin cambios, cuántas reglas implícitas emergen recién en la confrontación, cuántos choques se clasifican como error del sistema y cuántos como regla incompleta.
- Contraste: el mismo sistema revisado por un analista sin la herramienta, para ver qué excepciones aparecen y cuáles no.
