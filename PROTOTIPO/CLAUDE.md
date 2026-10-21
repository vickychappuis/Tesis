# PROTOTIPO: asistente de sesiones de feedback

Prueba de concepto de la tesis (ver CLAUDE.md de la raíz para el contexto general). Acá se construye el asistente que confronta lo que el cliente dice en una sesión de feedback contra las reglas y requisitos documentados del proyecto, y le devuelve la respuesta fundada en el momento.

## Criterios de diseño (no negociables)

- **El actor de negocio tiene que quedar afectado.** La devolución vuelve al cliente en la propia sesión, no al equipo. Si algo puede evaluarse entero sin usuarios de negocio, está mal enfocado.
- **El objeto es el ciclo de feedback, no la generación ni el QA.** No se genera código, no se prueba el sistema construido. Se confronta lo dicho contra lo acordado.
- **Los tickets son subproducto.** De alto nivel, sin desgranar en tareas, y siempre los acepta un humano.
- **El prototipo no mantiene la documentación**, pero las conclusiones de cada sesión (reglas corregidas, excepciones confirmadas, tickets aceptados) quedan registradas en forma estructurada, como insumo para actualizarla después.
- **Extensión no aprobada:** la prueba en vivo contra el sistema (Playwright) quedó descartada para esta etapa; no implementarla sin acuerdo previo con Daniel.

## Los tres veredictos

Cada enunciado del cliente se clasifica contra la documentación: **choca con lo acordado** (con la cita exacta del documento y fragmento), **coincide con lo acordado** (se confirma al instante), o **no está contemplado** (pedido nuevo: se encuadra, se prioriza y puede salir como ticket).

## Dominio de prueba

Proyecto inventado: una biblioteca universitaria y su sistema de préstamos (la directora es el cliente). La documentación vive en `documentacion/` y es la única fuente de verdad del asistente. Tiene trampas plantadas a propósito: no "arreglarlas". Mantener el dominio en términos cotidianos, sin jerga técnica ni bancaria. El mecanismo de consulta es el bibliotecario (ver Stack): el modelo pide los documentos bajo demanda.

## Stack y convenciones

- Next.js con TypeScript en `app/`, API de OpenAI (Responses API con salida estructurada; schemas zod en `app/src/lib/` como fuente única). Modelo en `OPENAI_MODEL` (usar `gpt-5-mini`); key en `app/.env.local`, nunca al repo.
- **Bibliotecario** (`POST /api/veredicto`): el modelo NO recibe la documentación entera; recibe `INDICE.md` y las herramientas `listar_documentos` / `leer_documento`, y decide qué abrir (loop de tool use, tope 6 iteraciones). `fuentes_consultadas` lo llena el servidor con las lecturas reales. Fallback a todo-en-contexto si falta el índice.
- **Extractor** (`POST /api/extraer`): segmenta el buffer de transcripción del dictado en enunciados completos + resto incompleto; la charla se descarta. El dictado nunca manda fragmentos crudos al veredicto.
- **Visor de documentos** (`GET /api/documento?ruta=...`): los chips de citas y fuentes de la tarjeta abren el documento tal cual está escrito, con el fragmento citado resaltado (misma tolerancia de espacios que la verificación). Mismo saneo de rutas que el bibliotecario; los documentos viajan en el bundle, sin storage externo.
- Los cuatro veredictos: choca / coincide / no_contemplado / no_accionable. El servidor verifica cada cita contra los archivos reales (y contra las fuentes consultadas) y la marca `verificada`; la UI señala las citas no encontradas.
- La documentación tiene 7 tipos (requisitos, actas, reglas, tickets, politicas, alcance, glosario) y un `INDICE.md` con una línea por documento: si se agrega o cambia un documento, actualizar el índice en el mismo cambio.
- Evaluación en `../evaluacion/`: `run.mjs` (15 casos de veredicto, cubre las 4 trampas) y `run-extractor.mjs` (6 transcripciones). Correr ambos tras cualquier cambio de prompt, schema o documentación.
- UI en español, con los términos de la demo (`demo/demo.html`): choca / coincide / no contemplado, aceptar / corregir.
- Identidad visual: ficha de biblioteca (papel y tinta, veredictos como sellos, Archivo + IBM Plex Mono vía next/font). Los tokens viven en `app/src/app/globals.css`; un solo acento de acción (azul de sello) y los colores semánticos solo para veredictos.
- Commits en español, minúscula, formato `prototipo: descripción`. Sin trailers de co-autoría. Push directo a main.
- La demo de `demo/` es la referencia visual de lo que se construye; si el diseño cambia, regenerarla para que no quede desactualizada.
