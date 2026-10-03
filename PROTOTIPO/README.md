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
- `app/`: la aplicación Next.js. Panel de sesión de dos paneles como la demo, ruta `POST /api/veredicto` que confronta cada enunciado contra `documentacion/` vía la API de OpenAI con salida estructurada, verificación de citas en el servidor, export del registro de sesión a markdown.
- `evaluacion/`: 12 casos de prueba con veredicto esperado y un runner (`node evaluacion/run.mjs`) que evalúa el sistema de punta a punta contra la API local.

## Cómo correr

```
cd PROTOTIPO/app
cp .env.example .env.local   # pegar la OPENAI_API_KEY
npm install
npm run dev                  # http://localhost:3000
```

Con el server levantado, la evaluación: `node ../evaluacion/run.mjs`.

## Estado

Sprint 20 (hasta el jueves 8/10/2026). Paso 1 implementado: entrada escrita, veredictos con cita verificada, corrección en sesión, tickets con compuerta humana y export del registro. Pendiente: corrida de la evaluación con API key real y ajuste de prompt. Paso 2 (micrófono y transcripción en vivo): próximo.
