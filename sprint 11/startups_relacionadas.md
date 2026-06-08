# Startups YC relacionadas con la tesis

**Leyenda de ángulos:**
- *Técnico* = ciclo de implementación (ticket/intención → código/PR/app)
- *Validación/requisitos* = ciclo negocio (stakeholder/usuario → requisitos/tickets)

---

| Startup | Lote / estado YC | Ángulo | Qué hace (verificado) | Qué le falta vs. tu enfoque | Link |
|---|---|---|---|---|---|
| **Tusk** | YC W24 · *pivoteó* | Técnico: ticket → PR | Launch original ("completes your chores"): asignás un ticket y el agente recorre el codebase, junta contexto y crea un PR; integraba con Linear, Jira, Notion y GitHub. **Pivotearon** a generación de tests para PRs | Feedback unidireccional ticket→código; no captura la call/stakeholder; no valida reglas de negocio; sin roles ni negociación. *El pivote en sí es evidencia para RQ4 (límites del ticket→PR autónomo)* | https://www.ycombinator.com/launches/KUe-tusk-ai-coding-agent-that-completes-your-chores |
| **Sweep** | YC S23 · *pivoteó* | Técnico: issue → PR | Launch original (2023): "junior dev de IA que convierte issues de GitHub en PRs, sin IDE" (7.6k stars). **Pivotearon**: hoy es asistente de IA para JetBrains (autocomplete + agente), porque el junior dev autónomo "estaba a años de distancia" | Igual que Tusk: solo lado técnico, sin loop con negocio. *Segundo caso de abandono del ticket→PR autónomo → patrón fuerte para state of practice* | https://www.ycombinator.com/companies/sweep |
| **Emergent** | YC · activa | Técnico: intención → app | **Orientado a usuarios no técnicos**: describís en lenguaje natural y obtenés una app full-stack desplegada sin tocar código. Agentes autónomos que generan, prueban y despliegan. Botones facilitadores: Preview (ver al toque) y Save Work (commit a GitHub) | Feedback unidireccional (no ciclo multi-actor); no ingesta la call/stakeholder; no valida reglas ni flujos de negocio; sin trazabilidad feedback→cambio; sin roles ni gobernanza; valida que "corre", no que "cumple" | https://www.ycombinator.com/companies/industry/generative-ai/san-francisco |
| **Kraftful** | YC S19 · *Acquired* | Validación/requisitos: feedback → tickets | "Copilot para equipos de producto"; junta feedback de sales calls, entrevistas, soporte y reviews, y convierte cada insight en un ticket de Jira o Linear | Llega hasta el ticket pero no cierra el loop hacia implementación/validación; no valida reglas de negocio; el feedback es agregado, no negociado en tiempo real con el stakeholder | https://www.ycombinator.com/companies/kraftful |
| **Versive** | YC · activa | Validación/requisitos: entrevistas → reportes | Convierte entrevistas y llamadas de clientes en reportes con citas que enlazan de vuelta a los transcripts | Se queda en síntesis/reporte; no genera artefactos accionables (tickets/specs) ni conecta con el equipo de desarrollo; sin validación de reglas | https://www.ycombinator.com/companies/versive |

---

## Referencia no-YC (no incluir como YC)

| Empresa | Por qué interesa | Estado |
|---|---|---|
| **Codegen** | Flujo "Ticket to Pull Request" para codebases enterprise (el match perfecto de descripción) | Thrive Capital ($16M); **adquirida por ClickUp** (dic-2025); producto standalone discontinuado el 9-ene-2026. NO es YC — https://codegen.com |

### Codegen dentro de ClickUp — estado actual

- **¿Escucha stakeholders y genera tickets?** No. Parte de tasks ya creadas.
- **¿Toma tickets y los hace código?** Sí. Se dispara asignándole una task o @mencionándolo, y genera PRs.
- **¿Usa la codebase como contexto?** Sí, más tasks/docs/chat de ClickUp como contexto de negocio.
- **Límite:** durante la ejecución (sandbox → código → PR) no hay intervención humana; el humano revisa y aprueba el PR al final. La validación se limita a criterios verificables programáticamente + revisión del PR, sin loop negociado con el stakeholder durante el proceso.

Docs: https://help.clickup.com/hc/en-us/articles/33877442924183-Use-Codegen-AI-agents · Anuncio: https://clickup.com/blog/clickup-codegen-acquisition/