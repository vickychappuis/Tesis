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

Un **proceso de software** es una secuencia de actividades que conduce a la producción de un producto de software.
Sommerville identifica **cuatro actividades fundamentales comunes a todos los procesos de software**
(sec. 1.1.1), que el capítulo 2 desarrolla como *process activities* (sec. 2.2):

| # | Actividad (Sommerville) | Qué pasa ahí | Sec. |
|---|---|---|---|
| 1 | **Especificación** del software | *"customers and engineers define the software that is to be produced and the constraints on its operation"* | 2.2.1 |
| 2 | **Diseño e implementación** | el software se diseña y se programa | 2.2.2 |
| 3 | **Validación** (V&V) | *"the software is checked to ensure that it is what the customer requires"* | 2.2.3 |
| 4 | **Evolución** | el software se modifica para reflejar requisitos cambiantes del cliente y del mercado | 2.2.4 |

Sommerville aclara que estas actividades genéricas *"pueden organizarse de distintas formas y describirse a distintos
niveles de detalle, según el tipo de software"* (sec. 1.1.1) — lo que habilita el encuadre agnóstico al modelo de
proceso que sostiene este marco.

**De las cuatro, dos involucran directamente al stakeholder** y son el foco de este documento:

- **Especificación / requisitos (1)** — por definición se hace *con* el cliente: es donde se define qué hay que
  construir. Sommerville la llama *requirements engineering* (cap. 4).
- **Validación / V&V (3)** — el chequeo es contra *lo que el cliente requiere*, no solo contra el documento: la
  V&V *"muestra que un sistema tanto se ajusta a su especificación como cumple las expectativas del cliente"*
  (sec. 2.2.3). Dentro de V&V, el *user testing* y el *acceptance testing* son las instancias donde el stakeholder
  participa en persona (sec. 8.4).

Diseño/implementación (2) y evolución (4) quedan como contexto: producen y mantienen lo que el stakeholder
después ve, pero no son puntos de intercambio con él.

- [ ] Redacción final: chequear largo (Daniel pidió **breve**) y que no se solape con la sección 2.
- [x] Cita en `FUENTES_MARCO.bib` — ya existe (`sommerville2016software`); sumar secs. 1.1.1 y 2.2 a las verificadas en `FUENTES_MARCO.md`.

## 2. Verificación y validación: el V-model → las puntas son el feedback del stakeholder

El V-model ordena las actividades del proceso en una **V**: la rama descendente son las etapas de definición
(*verificación*) y la ascendente las de prueba (*validación*), con **coding** en el vértice. Lo relevante para este
marco no son los niveles en sí, sino las **flechas horizontales**: cada nivel de definición tiene su nivel de prueba
correspondiente, y **se prueba contra lo que ese nivel definió**.

| Rama de definición (verificación) | ↔ | Rama de prueba (validación) |
|---|---|---|
| **Requirement gathering** | ↔ | **Acceptance testing** |
| System analysis | ↔ | System testing |
| Software design | ↔ | Integration testing |
| Module design | ↔ | Unit testing |
| *Coding* (vértice) | | |

**El nivel superior es el único donde participa el stakeholder**, y aparece en las dos puntas:

- **Punta izquierda — requirement gathering:** el stakeholder dice *qué necesita*.
- **Punta derecha — acceptance testing:** el stakeholder dice *si lo construido es lo que quería*.

La flecha horizontal que las une no es decorativa: expresa que **la aceptación se evalúa contra los requisitos que
ese mismo stakeholder planteó**. Por eso los dos puntos de feedback no son independientes — son las dos mitades de
un mismo circuito, y es exactamente la razón por la que queremos feedback del usuario: (a) saber qué necesita y
(b) validar que lo construido es eso.

Los niveles inferiores (system/integration/unit) son internos al equipo: hay verificación, pero no interviene el
negocio. Por eso el marco se queda con la punta de arriba.

Anclaje en Sommerville (verificado):

- Formulación de V&V (sec. 8.1): *"Validation: Are we building the right product? · Verification: Are we building
  the product right?"* — las dos preguntas que separan las dos ramas.
- *Acceptance testing* como instancia formal del cliente (sec. 8.4); *"System stakeholders… who certify the
  acceptability of the system"* (sec. 4.1).

**Fuente del V-model: `pressman2020software`, cap. 2 (*Process Models*).** Pressman & Maxim presentan ahí el
V-model con exactamente esta correspondencia:

| Pressman | ↔ | Pressman |
|---|---|---|
| Requirements modeling | ↔ | Acceptance testing |
| Architectural design | ↔ | System testing |
| Component design | ↔ | Integration testing |
| Code generation | ↔ | Unit testing |

(Los nombres de nivel varían levemente entre presentaciones del modelo — p. ej. *requirement gathering* vs.
*requirements modeling* —; la correspondencia superior **requisitos ↔ aceptación** es la misma en todas.)

Como **origen histórico** puede citarse `rook1986controlling`, el artículo al que se atribuye la introducción del
V-model en desarrollo de software.

> ⚠ **Nota sobre "el V-model es de cascada".** Tanto Pressman como Sommerville lo presentan como variante del
> modelo en cascada — Sommerville además lo nombra una sola vez y al pasar (Fig. 2.7, cap. 2): *"The V-model shows
> the software validation activities that correspond to each stage of the **waterfall** process model."*
>
> **No invalida el uso que le damos**, pero conviene decirlo explícitamente en el texto: acá el V-model entra como
> **ilustración de la correspondencia** definición ↔ prueba, no como modelo de proceso a seguir. Cuántas veces se
> recorre la V es justamente lo que cambia entre modelos — y eso es lo que abre la sección 3.

- [x] Fuente citable del V-model → `pressman2020software` cap. 2 (+ `rook1986controlling` como origen), ya cargadas en `FUENTES_MARCO.bib`.
- [ ] Rehacer la figura del V-model (propia, marcando las dos puntas y la flecha superior) — el diagrama de
      referencia es de origen web, no sirve para publicar.
- [ ] Chequear largo: Daniel pidió **breve**; hoy esta sección está más larga que la 1.

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

- **Stakeholder** — Sommerville lo define en sec. 4.1 (cap. 4, *Requirements engineering*): *"System stakeholders
  include anyone who is affected by the system in some way and so anyone who has a legitimate interest in it.
  Stakeholders range from end-users of a system through managers to external stakeholders such as regulators, who
  certify the acceptability of the system."* Es una definición **amplia** (incluye usuario final, cliente,
  reguladores). Sobre ella hay que **acotar el foco de la tesis**: un representante que **prueba el producto y opina
  de forma verbal**, excluyendo el feedback indirecto (telemetría/ML, auto-PRs). La cita da el paraguas; el recorte
  es nuestro y hay que declararlo como tal.
- **Analista funcional:** rol clásico (validación de reglas de negocio). No sobre-formalizar; se decide luego si es rol propio o se absorbe en el Product Owner.

---

## Qué falta (bloqueantes reales)

| # | Falta | Por qué / cómo se destraba |
|---|---|---|
| 1 | ~~Fuente citable del V-model~~ **Resuelto** | → `pressman2020software` **cap. 2** (+ `rook1986controlling` como origen histórico), cargadas en `FUENTES_MARCO.bib`. Se cita **por capítulo**, no por figura, así que no hace falta el ejemplar. **Descartado el V-Modell XT:** abandonó el diagrama en V y se organiza por *Vorgehensbausteine* / *Entscheidungspunkte* / *Projekttypen* — citarlo para el V clásico habría sido un error. |
| 2 | **Cerrar la lista de categorías (sec. 4)** | Requiere pasar por el corpus (`sprint 12/REFERENCIAS.*` + sección 5 del v2) y decidir el agrupamiento. Es trabajo de criterio, no mecánico. |
| 3 | **Figuras** | V-model y escenarios: ver qué se reusa de `sprint 15/diagramas/`. |

**Meta B3:** versión escrita y prolija para decidir por dónde encarar la experimentación / PoC.
