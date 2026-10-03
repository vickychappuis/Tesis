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

Proyecto inventado: una biblioteca universitaria y su sistema de préstamos (la directora es el cliente). La documentación vive en `documentacion/` y es la única fuente de verdad del asistente. Tiene trampas plantadas a propósito: no "arreglarlas". Mantener el dominio en términos cotidianos, sin jerga técnica ni bancaria. El mecanismo de consulta queda a criterio (por ahora la documentación entra entera en el contexto del modelo).

## Stack y convenciones

- Next.js con TypeScript en `app/`, ruta de API `POST /api/veredicto` que llama a la API de OpenAI (Responses API con salida estructurada; schema zod en `app/src/lib/veredicto.ts` como fuente única).
- La API key va en `app/.env.local` (`OPENAI_API_KEY`; modelo en `OPENAI_MODEL`, default del codigo `gpt-4o-mini`; usar `gpt-5-mini`, que paso la evaluacion 12/12 estable), nunca al repo.
- Los cuatro veredictos: choca / coincide / no_contemplado / no_accionable. El servidor verifica cada cita contra los archivos reales y la marca `verificada`; la UI señala las citas no encontradas.
- Set de evaluación en `../evaluacion/` (12 casos + runner `run.mjs` contra la API local); correrlo tras cualquier cambio de prompt o schema.
- UI en español, con los términos de la demo (`demo/demo.html`): choca / coincide / no contemplado, aceptar / corregir.
- Commits en español, minúscula, formato `prototipo: descripción`. Sin trailers de co-autoría. Push directo a main.
- La demo de `demo/` es la referencia visual de lo que se construye; si el diseño cambia, regenerarla para que no quede desactualizada.
