# PROTOTIPO: asistente de sesiones de feedback

Prueba de concepto de la tesis. Un asistente basado en IAG que escucha lo que el cliente dice en la sesión de feedback, lo confronta contra las reglas de negocio y los requisitos documentados del proyecto, y le devuelve la respuesta fundada en el momento: dónde choca cada punto, con qué cita, y con qué prioridad sugerida. Los tickets hacia el equipo son subproducto y siempre los acepta un humano.

- Definición formal: capítulo de PoC del Overleaf, sección Definición.
- Decisión y encuadre: call con Daniel del 3/9 (`sprint 18/resumen_call.md`).
- Ideas que llevaron a esta: `sprint 18/ideas prototipos/` (la elegida fusiona la 2 y la 3).

## Demo

En `demo/`: mock auto-animado de 52 segundos de cómo luce una sesión (`demo.html`, `demo.webm`, `demo.gif`).

## Estructura

- `demo/`: el mock animado de la idea.
- `documentacion/`: la documentación del proyecto inventado (una biblioteca universitaria y su sistema de préstamos), organizada en 7 tipos como en una empresa real (requisitos, actas, reglas, tickets, politicas, alcance, glosario) con un `INDICE.md` de una línea por documento. Tiene 4 trampas plantadas: la excepción que vive solo en un acta, las reservas sin vencimiento, el glosario obsoleto frente a un acta posterior, y una regla escrita que el anexo de alcance excluye. Se reemplaza por la documentación anonimizada de un proyecto real cuando esté disponible.
- `app/`: la aplicación Next.js. Panel de sesión de dos paneles, dictado por micrófono con extractor de enunciados (la transcripción corrida se segmenta con un llamado al modelo, no por pausas), y el **bibliotecario**: el modelo consulta la documentación bajo demanda con herramientas sobre el índice, en vez de recibirla entera; la tarjeta muestra qué documentos consultó y el servidor verifica cada cita contra los archivos reales.
- `evaluacion/`: 15 casos de veredicto (`node evaluacion/run.mjs`) y 6 transcripciones para el extractor (`node evaluacion/run-extractor.mjs`), de punta a punta contra la API local.

## Cómo correr

```
cd PROTOTIPO/app
cp .env.example .env.local   # pegar la OPENAI_API_KEY
npm install
npm run dev                  # http://localhost:3000
```

Con el server levantado, la evaluación: `node ../evaluacion/run.mjs`.

## Publicación

Deploy en Vercel con la app como raíz del proyecto (`PROTOTIPO/app`). El `prebuild` copia `../documentacion` adentro de `app/` para que viaje en el bundle. Acceso protegido con clave compartida: variables `APP_PASSWORD` y `AUTH_SECRET` en Vercel (si faltan, la app queda abierta, como en desarrollo local); la pantalla de acceso está en `/acceso` y la API devuelve 401 sin la cookie. Dominio: subdominio de vickychappuis.dev.

## Estado

Paso 1 completo: entrada escrita, veredictos con cita verificada, corrección en sesión, tickets con compuerta humana y export del registro. Evaluación 12/12 estable con `gpt-5-mini`. Paso 2 completo: dictado con la Web Speech API del navegador (botón Escuchar; cada frase final del reconocimiento se envía como enunciado de quien esté seleccionado; requiere Chrome, Edge o Safari). Publicado en https://prototipo.vickychappuis.dev con clave compartida; el proyecto de Vercel está conectado al repo (root directory `PROTOTIPO/app`), cada push a main redeploya solo. Tutorial de primera visita salteable con botón "?" para repetirlo.
