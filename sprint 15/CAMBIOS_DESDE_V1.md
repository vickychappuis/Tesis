# Qué cambió desde la v1 — para la segunda pasada con Daniel

> El marco pasa a ser **`MARCO_PROCESO_FEEDBACK_v2.md`** (la v1 queda como registro del sprint 14). Fuentes
> verificadas en `FUENTES_MARCO.md` / `.bib`; diagramas nuevos en `diagramas/`.

## 1. Anclaje en bibliografía

- El marco quedó anclado en la **Scrum Guide 2020**, con citas verificadas contra el PDF. Lo que Scrum no define se
  declara como tal y se ancla en Sommerville y Dumas (⚠ en el diagrama).
- Hallazgo: la Guía se declara *"purposefully incomplete"* — `feedback`, `test` y `acceptance`: 0 ocurrencias en
  14 páginas (marco sec. 2).

## 2. La revisión ya no es solo la ceremonia: A2 se desdobló

- La vieja A2 ahora son tres momentos: **A2a** liberación, **A2b** uso y testing de aceptación (nueva) y **A2c**
  Sprint Review. Solo A2c es de Scrum; el resto se ancla en Sommerville.
- Consecuencia: el feedback tiene **dos canales** — el uso real, que puede llegar antes de la ceremonia, y la
  ceremonia (objetivo B). A2a quedó como contexto; el **núcleo** es **A2b + A2c**.

## 3. Notación uniforme

- Todo en **BPMN**: una sola vista, con los roles como carriles y el feedback como objeto de datos.

![Etapa de revisión y feedback — vista BPMN](diagramas/marco_feedback_bpmn.png)

## 4. Capa IAG reforzada con los 4 artículos

- Cada ítem quedó etiquetado (**[corpus]** / **[producto]** / **[general]**) para auditarlo. Ninguno de los cuatro
  menciona la Sprint Review: aportan a nivel SDLC; el zoom fino sigue en el corpus.
- El gap se movió a **A2b**: el *acceptance testing* con IAG casi no se investiga (lo declaran Nguyen-Duc et al.).
  El marco se recortó a ese núcleo; el relevamiento del resto vive en `sprint 12/REFERENCIAS.md` (marco sec. 5.3).

## 5. Escenarios S1–S4

- Figura propia de la escala de Sauvola et al. (2024) — cuánto asume la IA — que le da graduación al objetivo C
  (marco sec. 6).
- Leído contra ella, el núcleo cae casi todo en **S2**, dos puntos en **S3** y nada en S4.

![Cuatro escenarios de uso de IAG en el desarrollo de software (S1–S4)](diagramas/escenarios_s1_s4.png)

## 6. Las cuatro grandes áreas

- Se fusionaron con la capa por actividad: en el marco solo queda la **impersonación de stakeholders** (sec. 5.1);
  el resto salió del núcleo.

## 7. Propuesta de la PoC — nueva, marcada [propuesta] en sec. 5.1

- **Validación temprana sobre el cambio generado**: el stakeholder real da el feedback, la IA lo estructura,
  devuelve viabilidad en vivo y genera el cambio; el developer valida lo generado.
- Cae en S3 y se apoya en el gap y la RQ 5 de Nguyen-Duc et al. La generación de código es solo instrumento.
