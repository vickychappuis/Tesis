# Viabilidad del bot en Zoom, Meet y Teams

Encargo de la call del 29/10: explorar qué implica definir un bot en cada plataforma, qué permiten y qué exigen, y adaptarse a la más fácil. Tres investigaciones en paralelo (Teams nativo, Zoom/Meet nativos, Recall.ai por plataforma), octubre 2026.

## Resumen

- Para la **primera prueba** (bot vía Recall.ai, cuentas gratuitas): **Meet es la más fácil**, Zoom segunda, Teams última.
- Para la **vía nativa** (bot propio, sin intermediarios): **Zoom es la única fácil** (RTMS se volvió self-service), Teams es difícil pero tiene una salida nueva (Work IQ, GA nov 2026), y Meet directamente no tiene vía oficial en vivo.
- La arquitectura acordada (bot liviano + servidor propio) se sostiene en las tres plataformas solo con la vía gestionada (Recall). En nativo, cada plataforma impone la suya.

## Novedades desde el relevamiento del sprint 22

1. **Zoom mejoró**: el Developer Pack de RTMS ahora se compra self-service (sin ventas, sin fee mensual sin uso), con prueba de 20 créditos gratis que cubre las ~10 horas. La vía nativa de Zoom baja de "mayor fricción" a fácil.
2. **Meet empeoró**: Google anunció el 28/10/2026 que descontinúa la Media API (endpoints se apagan el 15/1/2027), sin reemplazo en tiempo real. La vía oficial en vivo deja de existir; quedan solo bots no oficiales (headless Chrome, zona gris de ToS).
3. **Teams tiene una vía nueva**: "Work IQ: Real Time Transcripts" entrega la transcripción en vivo con hablantes a apps y agentes, sin bot de media. Preview sept 2026, GA nov 2026, con toggle de admin en el tenant. Es la primera vez que Microsoft sirve el texto en vivo sin exigir el bot pesado.

## Capa 1: la primera prueba con Recall.ai

| Puesto | Plataforma | Por qué |
|--------|-----------|---------|
| 1 | **Meet** | El bot entra como invitado anónimo con solo la URL; reunión creada con gmail personal, el host lo admite con un clic. Cero configuración en Recall |
| 2 | **Zoom** | Tampoco pide app OAuth propia (Recall provee las credenciales) y sirve la cuenta Básica gratis; suma la sala de espera por defecto y el límite de 40 min |
| 3 | **Teams** | La política 2026 retiene a los bots externos en el lobby etiquetados como no verificados, y los admins pueden bloquearlos del todo (rollout ago 2026). Teams Free soportado, pero links personales fallan si exigen login |

- Transcripción en español: proveedor Recall-managed `recallai_streaming` con `language_code: "es"` (+USD 0,15/h); igual en las tres plataformas. Deepgram/AssemblyAI opcionales con key propia.
- Free tier: 5 horas de grabación gratis en pay-as-you-go, después USD 0,50/h + 0,15/h. API key por región (`us-east-1.recall.ai`).
- Output Media (el panel por la cámara del bot) y mensajes al chat: disponibles en las tres plataformas en pay-as-you-go. Chat: 4096 caracteres en Zoom/Teams, 500 en Meet.

### Flujo mínimo de la prueba (medio día)

1. Cuenta en el dashboard de Recall (región us-east-1), copiar la API key.
2. Exponer la app local con un túnel (cloudflared/ngrok).
3. Crear un Meet desde un gmail personal.
4. `POST https://us-east-1.recall.ai/api/v1/bot` con `meeting_url`, transcripción `recallai_streaming` en español y `realtime_endpoints` apuntando el webhook al túnel (evento `transcript.data`).
5. Admitir al bot y hablar: llegan eventos con texto, timestamps y hablante, listos para entrar al pipeline en lugar de la Web Speech API.
6. En la misma sesión, probar chat y Output Media (cámara del bot).

## Capa 2: la vía nativa por plataforma

| Plataforma | Vía | Veredicto | Requisitos | Esfuerzo |
|-----------|-----|-----------|------------|----------|
| Zoom | RTMS (websocket server-side, transcripción incluida) | **Fácil** | Cuenta Pro (~USD 14/mes), Developer Pack self-service (20 créditos gratis), habilitación en settings propios | 2 a 4 días |
| Teams | Work IQ Real Time Transcripts (texto en vivo servido por Microsoft) | **Medio** | Tenant M365 con la feature habilitada por el admin; GA nov 2026 | A dimensionar cuando salga de preview |
| Teams | Bot de media (Graph + application-hosted media) | **Difícil** | C#/.NET sobre Windows Server en Azure, admin consent del tenant, certificado TLS y dominio, IP pública; el bot recibe audio PCM crudo y la transcripción corre aparte | 10 a 20 días |
| Meet | Ninguna oficial en vivo (Media API discontinuada, Add-ons sin audio, REST post-reunión) | **Sin vía** | Bot no oficial (headless Chrome tipo Vexa): sin cuenta especial, pero zona gris de ToS y frágil ante cambios de UI | 1 a 3 días con Vexa |

- Detalle Teams nativo: "service-hosted media" existe pero no da acceso al stream (solo IVR); para leer audio en vivo es sí o sí application-hosted. La transcripción clásica de Graph (callTranscript) es solo post-reunión.
- Detalle Zoom: la vía vieja (Meeting SDK bot headless en Linux + raw audio) sigue vigente y sin licencia especial, pero exige C++ y ASR aparte (1 a 2 semanas); RTMS la vuelve innecesaria.
- Detalle Meet: la REST API post-reunión queda como plan B para un modo "veredictos diferidos" (pide Workspace Business Standard del organizador).

## Propuesta de orden

1. **Prueba 1 (ya, medio día): Recall + Meet con gmail personal.** Valida el pipeline completo (webhook → extractor → veredicto) con la fricción mínima. Es la prueba de viabilidad del plan A, no la plataforma final.
2. **Prueba 2 (mismo código): apuntar el mismo bot a un Zoom de prueba.** Cambia solo la meeting_url; confirma la portabilidad que promete la vía gestionada.
3. **Teams al final y con verificación previa del tenant** (¿el admin bloquea note-takers externos?). Si el tenant lo permite, el mismo bot sirve; si no, la alternativa nativa es esperar Work IQ (GA nov 2026) o mover las sesiones de validación a Meet/Zoom.
4. **Para el capítulo de la PoC**: documentar que la vía nativa solo es razonable en Zoom (RTMS), que Microsoft está abriendo el texto en vivo sin bot (Work IQ) y que Google cerró del todo el tiempo real; refuerza el dato de la asimetría del ecosistema del sprint 22.

## Fuentes

- Zoom RTMS self-service: https://devforum.zoom.us/t/rtms-self-service-purchasing-is-now-available/144524 , precios: https://zoom.us/pricing/developer , docs: https://developers.zoom.us/docs/rtms/meetings/
- Zoom Meeting SDK raw data (legacy, sin entitlement): https://devforum.zoom.us/t/enable-raw-data-entitlement-for-meeting-sdk-linux/145544
- Meet Media API discontinuada: https://developers.google.com/workspace/meet/release-notes
- Teams application-hosted media (requisitos): https://learn.microsoft.com/en-us/microsoftteams/platform/bots/calls-and-meetings/requirements-considerations-application-hosted-media-bots , registro del calling bot: https://microsoftgraph.github.io/microsoft-graph-comms-samples/docs/articles/calls/register-calling-bot.html
- Work IQ Real Time Transcripts: https://learn.microsoft.com/en-us/microsoftteams/meeting-transcript-api-access
- Teams anti-bots 2026: https://techcommunity.microsoft.com/blog/microsoftteamsblog/introducing-smarter-bot-protection-in-microsoft-teams-meetings/4531375
- Recall por plataforma: https://docs.recall.ai/docs/google-meet , https://docs.recall.ai/docs/zoom-overview , https://docs.recall.ai/docs/microsoft-teams , transcripción en vivo: https://docs.recall.ai/docs/bot-real-time-transcription , precios: https://www.recall.ai/pricing
- Vexa (bot open source para Meet): https://github.com/Vexa-ai/vexa
