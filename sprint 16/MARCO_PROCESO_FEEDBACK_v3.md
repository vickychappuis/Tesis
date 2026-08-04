# Marco del proceso de feedback — v3 (B3)

> Reescritura de `sprint 15/MARCO_PROCESO_FEEDBACK_v2.md` **desacoplada de Scrum**, contada de lo general a lo
> particular según la narrativa que bajó Daniel (30 jul; ver la tabla de pasos en `sprint 15/resumen_call.md`).
> Sigue siendo **estado del arte, sin propuesta propia todavía** — todo esto es contexto.
>
> **Fuentes:** se reutilizan `sprint 15/FUENTES_MARCO.{md,bib}`; se suma Sommerville como anclaje del proceso.
>
> **Estado: esqueleto.** Cada sección dice *qué va* y marca lo que falta (TODO). La redacción prolija es el trabajo del sprint 16.

---

## 1. Proceso de desarrollo de software (Sommerville) → requisitos y V&V

*Qué va:* breve — qué etapas tiene un proceso de desarrollo de software; destacar **requisitos** y **V&V** como las etapas donde entra el stakeholder.

- [ ] 1–2 párrafos apoyados en Sommerville (agregar la cita a `FUENTES_MARCO.bib`).
- [ ] Enumerar las etapas (análisis/requisitos → diseño → implementación → V&V → evolución) sin sobreexplicar.

## 2. Verificación y validación: el V-model → las puntas son el feedback del stakeholder

*Qué va:* ilustrar V&V con el V-model; en **las puntas** (elicitación de requisitos ↔ aceptación) es donde aparece el stakeholder que da feedback. Los dos puntos se conectan: se acepta contra lo que se pidió.

- [ ] Figura del V-model marcando las dos puntas (reusar/adaptar de `sprint 15/diagramas/` si sirve).
- [ ] 1 párrafo: por qué queremos feedback = (a) saber qué necesita y (b) validar que lo construido es lo que quería.

## 3. Esto toma distintas formas — ejemplo: Scrum (sin IA)

*Qué va:* lo anterior puede adoptar distintas formas y repetirse (sobre todo iterativo/incremental). Ejemplo Scrum: actividades específicas entre la liberación de una versión y la aceptación de cambios para la siguiente iteración. Describir **cómo ha sido hasta ahora** esa interacción con el stakeholder, sin IA. Scrum entra solo para contextualizar; nombrarlo no es imprescindible.

- [ ] Traer el flujo que ya se tenía (A2b/A2c del v2) como *ejemplo*, no como base.
- [ ] Párrafos del flujo: liberación del incremento → uso/aceptación → feedback → nuevos requisitos o cambios → Sprint Review (reglas de negocio, factibilidad, priorización). Reusar el texto del flujo que Daniel bajó por escrito.

## 4. Feedback con IA — categorías de técnicas (era la sección 5)

*Qué va:* la IA cambia esas dinámicas. Conectar con los trabajos del estudio previo agrupándolos en **categorías con nombre**; cada una: qué es + efecto de la IA + beneficios/riesgos. Agnóstico al modelo de proceso — no anclar a ninguna actividad de Scrum.

Categorías (semilla — cerrar contra la sección 5 del v2 y el corpus):

- **Impersonación de stakeholders** — agentes que actúan como el stakeholder y responden preguntas. Beneficio: feedback **24/7**. Riesgo: no es el stakeholder real (hay que validar que responde como respondería él).
- **Transcripción / traducción automática de reuniones** — [ ] describir.
- **Generación de criterios de aceptación** (desde requisitos de alto nivel / transcripciones / contexto de empresa) — [ ] describir.
- [ ] Revisar sección 5 del v2 + corpus para cerrar la lista.

## 5. Vínculo con el gráfico de escenarios de uso (Nguyen-Duc et al.)

*Qué va:* ubicar las categorías de la sección 4 en el gráfico de escenarios (niveles humano ↔ IA). **Si no encaja fácil, no forzarlo:** el gráfico igual sirve para mostrar los distintos niveles de interacción.

- [ ] Reusar la figura de escenarios (S1–S4) del v2 / `sprint 15/diagramas/`.
- [ ] Mapear cada categoría a un nivel (asiste / automatiza), sin obsesionarse con la clasificación exacta.

## 6. Aspectos no considerados / problemas abiertos

*Qué va:* al final o ligado a la sección 4. Necesidades sin trabajo asociado y oportunidades a futuro. Es **solo contexto, no una propuesta concreta**.

- [ ] Listar gaps (p. ej. acceptance testing poco estudiado; feedback indirecto por telemetría/ML queda fuera de alcance).

---

## Definiciones a explicitar

- **Stakeholder** (Sommerville): acotar al foco de la tesis — una persona/representante que **prueba y opina de forma verbal**. Excluir feedback indirecto (telemetría/ML, auto-PRs).
- **Analista funcional:** rol clásico (validación de reglas de negocio). No sobre-formalizar; se decide luego si es rol propio o se absorbe en el Product Owner.

---

**Meta B3:** versión escrita y prolija para decidir por dónde encarar la experimentación / PoC.
