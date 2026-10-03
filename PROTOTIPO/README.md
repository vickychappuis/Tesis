# PROTOTIPO: asistente de sesiones de feedback

Prueba de concepto de la tesis. Un asistente basado en IAG que escucha lo que el cliente dice en la sesión de feedback, lo confronta contra las reglas de negocio y los requisitos documentados del proyecto, y le devuelve la respuesta fundada en el momento: dónde choca cada punto, con qué cita, y con qué prioridad sugerida. Los tickets hacia el equipo son subproducto y siempre los acepta un humano.

- Definición formal: capítulo de PoC del Overleaf, sección Definición.
- Decisión y encuadre: call con Daniel del 3/9 (`sprint 18/resumen_call.md`).
- Ideas que llevaron a esta: `sprint 18/ideas prototipos/` (la elegida fusiona la 2 y la 3).

## Demo

En `demo/`: mock auto-animado de 52 segundos de cómo luce una sesión (`demo.html`, `demo.webm`, `demo.gif`).

## Estructura

- `demo/`: el mock animado de la idea.
- `documentacion/`: la documentación del proyecto inventado (una biblioteca universitaria y su sistema de préstamos) que el asistente usa como fuente de conocimiento. Tiene una contradicción plantada (la excepción de material de referencia vive solo en el acta del 12/5) y un hueco plantado (las reservas no tienen vencimiento). Se reemplaza por la documentación anonimizada de un proyecto real cuando esté disponible.
- `app/`: la aplicación (próximamente).

## Estado

Sprint 20 (hasta el jueves 8/10/2026): arranque de la implementación. Paso 1: entrada escrita y confrontación contra la documentación. Paso 2: micrófono y transcripción en vivo.
