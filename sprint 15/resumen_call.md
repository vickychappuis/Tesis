# Resumen call — Sprint 15 (2ª pasada del marco)

**Fecha:** 30/07/2026 · **Con:** Daniel (tutor) · **Fuente:** `DANIEL 30 DE JULIO.transcripcion.txt` + apuntes escritos de Daniel (jue. 12:25)

## Decisión de fondo

- **Desacoplar el marco de Scrum** y contarlo de lo general a lo particular; Scrum queda solo como *ejemplo* de dónde entra el feedback del usuario, no como base.
- Lo esencial es **agnóstico al modelo de proceso**: siempre hay un stakeholder que (a) aporta nuevos requisitos y (b) valida/opina lo construido. El feedback llega en cualquier momento, no solo en la Sprint Review.
- Sigue siendo **estado del arte, sin propuesta propia todavía**: todo esto es contexto.

## Pasos para la B3 (narrativa dictada por Daniel)

| # | Parte del documento | Qué va |
|---|---|---|
| 1 | **Proceso de desarrollo (Sommerville)** | Breve: qué etapas tiene un proceso de desarrollo de software, en particular **requisitos** y **V&V**. |
| 2 | **V-model** | Breve: ilustrar V&V con el V-model; en **las puntas** es donde aparece el stakeholder que da feedback. |
| 3 | **Scrum como ejemplo (sin IA)** | Lo anterior puede adoptar distintas formas y repetirse (sobre todo iterativo/incremental). Ej. Scrum: actividades específicas entre la liberación de una versión y la aceptación de cambios para la siguiente iteración (= el proceso que ya tenías). Párrafos de **cómo ha sido hasta ahora** la interacción con esos stakeholders. |
| 4 | **Feedback con IA (actual sección 5)** | La IA cambia esas dinámicas. Conectar con los trabajos relacionados del estudio previo: **generar categorías** de artículos que hablen de un aspecto similar, darle un **nombre** y describir de qué trata. Ej. *impersonación de stakeholders*: agentes que actúan como el stakeholder y responden preguntas → beneficios (feedback **24/7**) y riesgos (no es el stakeholder real). |
| 5 | **Gráfico de escenarios de uso** | Vincular esas categorías con el gráfico de escenarios. **Si no es fácil vincularlas, no importa**: el gráfico del trabajo previo igual sirve para mostrar los distintos niveles de interacción. |
| 6 | **Aspectos no considerados / problemas abiertos** | Al final o ligado a la sección 5. Es solo contexto, **no una propuesta concreta**. |

## Otras definiciones

- **Analista funcional:** rol clásico (validación de reglas de negocio). No sobre-formalizar por ahora; se decide luego si es rol propio o se absorbe en el PO. Tendencia de Daniel: simplificar.
- **Stakeholder:** explicitarlo citando Sommerville; foco en una persona/representante que prueba y opina de forma verbal. Fuera de alcance por ahora el feedback indirecto (telemetría/ML, auto-PRs).
- **Sin propuesta propia todavía:** la propuesta (que las etapas de feedback ocurran lo más temprano posible) y su anclaje concreto vienen recién con el experimento/PoC.

## Próximos pasos (Sprint 16)

- [x] Enviarle a Daniel por escrito el flujo de feedback que dictó (liberación del incremento → uso/aceptación → feedback → nuevos requisitos o cambios → Sprint Review para reglas de negocio, factibilidad y priorización). *Enviado; Daniel respondió con la narrativa de la B3 (ver tabla de pasos).*
- [ ] **B3 del marco** siguiendo la tabla de pasos de arriba, desacoplada de Scrum.
- [ ] Conectar las categorías de la sección 5 con el gráfico de escenarios (si no encaja fácil, no forzarlo).
- [ ] Sumar capa de **aspectos no cubiertos / problemas abiertos**.
- [ ] Definir **"stakeholder"** (Sommerville) y acotar el foco.

**Meta B3:** versión escrita y prolija para decidir por dónde encarar la experimentación / PoC.
