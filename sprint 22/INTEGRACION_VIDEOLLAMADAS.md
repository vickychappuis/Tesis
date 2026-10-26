# Integración del prototipo a videollamadas (Zoom, Google Meet)

## Encuadre

- Hoy el prototipo escucha con la Web Speech API del navegador: transcribe lo que entra por el micrófono local. En una videollamada el problema es capturar el audio de los participantes remotos.
- El resto del pipeline no cambia: el extractor, el bibliotecario y los veredictos solo necesitan texto transcripto como entrada. Integrarse a una plataforma es sustituir la fuente de ese texto.
- La pregunta concreta es entonces: ¿cómo entra el audio o la transcripción de una reunión de Zoom/Meet al prototipo?

## Opciones, de menor a mayor integración

### A. Modo acompañante (ya funciona hoy)

- El prototipo abierto en una segunda ventana o pantalla; el audio de la llamada sale por parlantes y el micrófono lo levanta. En reuniones presenciales o híbridas escucha el ambiente directamente.
- Costo cero, sin permisos de ninguna plataforma. Es el modo con el que la PoC ya es demostrable.
- Limitaciones: con auriculares no captura nada, la calidad depende del audio ambiente y no distingue quién habló.

### B. Captura de pestaña (sin SDK de plataforma)

- El participante que corre el prototipo comparte la pestaña de Meet/Zoom web con `getDisplayMedia` y audio de pestaña (Chrome): el prototipo recibe el audio remoto limpio. Es la técnica de las extensiones de transcripción tipo Tactiq.
- Exige cambiar el motor de transcripción: la Web Speech API solo escucha el micrófono por defecto, no acepta un stream arbitrario. Habría que transcribir por API (por ejemplo `gpt-4o-transcribe` o Whisper de OpenAI, que el prototipo ya usa como proveedor).
- Esfuerzo medio (días), sin instalar apps ni pedir permisos de admin. Sin diarización por hablante.

### C. Zoom: la vía directa, y la única plataforma que hoy la ofrece

- Dos piezas que se complementan:
  - **Zoom Apps SDK**: el prototipo como app embebida en el panel lateral del cliente de Zoom. Es una webapp en iframe, nuestra app Next ya existe; daría presencia dentro de la reunión y botones para arrancar y parar la escucha. Por sí sola no da acceso al audio.
  - **RTMS (Realtime Media Streams)**: websocket server-side con audio por participante y transcripción diarizada en tiempo real, sin bot. En GA desde 2025.
- Requisitos: app user-managed en el marketplace con scopes y eventos de RTMS, y créditos del Developer Pack: USD 100/mes por 100 créditos como mínimo, con el streaming del orden de USD 0,01 por minuto.
- Es la integración más directa y mejor documentada. La transcripción diarizada además mejora el pipeline: el registro sabría quién dijo cada enunciado.
- Fricción para una PoC académica: el costo mensual fijo del Developer Pack.

### D. Google Meet: hoy no hay vía equivalente en vivo

- **Add-ons SDK** (GA): embebe la app en el panel lateral o el escenario, pero sin acceso al audio ni a la transcripción en vivo. Serviría solo como presencia y UI compartida.
- **Media API** (audio en tiempo real por WebRTC): sigue en Developer Preview y no acepta inscripciones nuevas. No disponible.
- **REST API**: transcripciones solo post-reunión (disponibles hasta 30 días), con Workspace Business Standard o superior y la transcripción activada por el host. Habilitaría un modo diferido, veredictos después de la reunión, no la validación en vivo que es el objeto del prototipo.

### E. Bot participante (una sola integración para Zoom, Meet y Teams)

- Un proveedor de meeting bots (Recall.ai es el referente) mete un bot como participante y el backend recibe audio y transcripción diarizada en tiempo real por websocket/webhook.
- Precio: ~USD 0,50/h de bot + USD 0,15/h de transcripción, con 5 horas gratis de prueba. Sin costo fijo mensual ni permisos de admin de cada plataforma.
- El bot es visible como un participante más, lo que hace explícito el consentimiento de los presentes.
- Es la vía estándar de la industria: los notetakers comerciales (Fireflies, Otter y similares) funcionan así justamente porque las plataformas no daban acceso directo.

### Nota sobre Teams

- Las reuniones de la tesis son por Teams. La vía directa (Graph real-time media con bot propio en Azure y consentimiento de admin del tenant) es la más compleja de las tres plataformas; la opción E la cubre con el mismo bot.

## Comparación

| Opción | Audio en vivo | Diarización | Costo | Esfuerzo | Estado |
|---|---|---|---|---|---|
| A. Acompañante | Por ambiente | No | 0 | Ya está | Funciona hoy |
| B. Captura de pestaña | Sí | No | Solo API de transcripción | Días | Viable |
| C. Zoom Apps + RTMS | Sí | Sí | USD 100/mes + ~0,01/min | Días a semanas | GA |
| D. Meet en vivo | No hay vía | - | - | - | Media API cerrada |
| E. Bot (Recall.ai) | Sí | Sí | ~USD 0,65/h, 5 h gratis | Días | Disponible |

## Propuesta

- Para la tesis, documentar la arquitectura de integración como extensión del prototipo: el pipeline ya separa escucha, extracción y veredicto, y cualquier opción solo sustituye la fuente del texto. Esto responde la pregunta de viabilidad sin comprometer la PoC.
- Si se quiere una demo real en videollamada, la opción E es la de mejor relación esfuerzo/resultado: cubre Zoom, Meet y Teams con una integración, sin costo fijo, y las 5 horas gratis alcanzan para las sesiones de prueba de la PoC.
- La opción C queda como la vía nativa si la validación se hiciera con un equipo que vive en Zoom; la B como plan sin dependencias de terceros.
- Dato para el capítulo de la PoC: la asimetría del ecosistema. Zoom abrió el acceso en tiempo real (RTMS), Google lo mantiene cerrado (Media API en preview sin inscripciones) y la industria lo resuelve con bots participantes. La factibilidad de llevar validación en vivo a las reuniones depende de la plataforma, no del prototipo.

## Fuentes

- RTMS, overview y getting started: https://developers.zoom.us/docs/rtms/meetings/
- Anuncio de RTMS: https://www.zoom.com/en/blog/realtime-media-streams/
- Audio en una Zoom App de panel lateral (respuesta: RTMS): https://devforum.zoom.us/t/how-to-receive-meeting-audio-in-a-third-party-zoom-app-side-panel-for-live-transcription-ai/143952
- Meet Media API (preview, sin inscripciones nuevas): https://developers.google.com/workspace/meet/media-api/guides/overview
- Meet Add-ons SDK (GA): https://workspaceupdates.googleblog.com/2024/09/google-meet-add-ons-sdk-is-now-available.html
- Meet REST API, artefactos post-reunión: https://developers.google.com/workspace/meet/api/guides/artifacts
- Recall.ai, precios: https://www.recall.ai/product/meeting-bot-api
