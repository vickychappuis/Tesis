# Resumen de Call — Sprint 11

**Tesis:** Ciclos de feedback entre clientes y equipos de desarrollo en contextos de uso de IAG
**Fuente:** `transcripcion_call.txt` (transcripción automática, con ruido)
**Participantes:** Speaker 1 (rol de tutor / guía académica) y Speaker 2 (rol de estudiante)

> _Nota: la asignación de roles es una interpretación a partir del contenido._

---

## 1. Tema central de la reunión

Revisión de la lista final de referencias ("finales fontes") y discusión sobre si el foco de la tesis está bien delimitado, a partir de lo que efectivamente aparece (y lo que **no** aparece) en la literatura.

---

## 2. Puntos discutidos

### 2.1. Clasificación de artículos por color (verde / amarillo / rojo)

- Se revisaron los artículos uno a uno marcando su relevancia respecto al scope.
- Muchos quedaron en **rojo** porque hablan de la fase de **prototipado** (vibe coding, herramientas tipo v0, Bolt, generadores de UI por chat). Esa fase se considera fuera del foco, aunque "roza" el tema.
- Artículos de **ingeniería de requisitos:** ya se había decidido (reunión anterior) dejarlos de lado para enfocarse en implementación y validación.
- Quedan **pocos artículos** que apunten exactamente a las etapas de interés (desarrollo iterativo y validación/aceptación con producto ya construido).

### 2.2. Preocupación metodológica

- Que queden tan pocos artículos genera dos lecturas:
  - **(a)** Es una oportunidad (tema poco tratado = nicho para aportar).
  - **(b)** Es una alerta: el foco de estudio podría no estar del todo bien definido, o el tema casi no está tratado en literatura científica.
- **Sospecha:** el uso de IAG está cambiando las formas de trabajo de modo tan profundo que algunas dinámicas tradicionales de feedback no solo se adaptan, sino que desaparecen (la IA arranca antes —en la codificación— y afecta directamente el producto, no solo media el feedback).
- El punto de partida fue el blog/testimonio de un conocido; hace falta respaldo más formal o, en su defecto, literatura gris (blogs, LinkedIn, Twitter/X) bien identificada como tal.

### 2.3. Conceptos interesantes detectados (posibles ejes a incorporar)

- **Impersonación / personas virtuales:** customizar una IA para que actúe como un stakeholder particular y dé feedback de forma continua. Aparece como un nuevo "stakeholder IA", no como simple automatización. Muy alineado con la idea de IAG que "media" entre usuario final y equipo.
- **User feedback mediado por IA:** aplica a cualquier etapa; se propone incluir estos artículos aunque originalmente hablen de otras fases.

### 2.4. Idea de la PoC / prototipo (Objetivo F)

- Herramienta que traduzca el feedback del stakeholder directamente a código (o que lo prepare para mergear), con la IAG en el medio.
- El stakeholder suele tener claros los requerimientos **funcionales** (mover un botón, agregar algo), pero no los **no funcionales** ni el impacto de un cambio sobre todo el diseño; por eso se necesita la IA en el medio.
- **Concepto clave — "firewall" / barrera automática de feedback:** la IA, nutrida con los requisitos ya relevados (funcionales y no funcionales), valida el feedback del stakeholder:
  - detecta cambios que contradicen requisitos ya definidos,
  - avisa cuando algo "no está contemplado en esta iteración",
  - ayuda al stakeholder a elaborar mejor su feedback.
  
  No es un chequeo binario cumple/no-cumple, sino un acompañamiento.

### 2.5. Distinciones a clarificar

- **Feedback sobre prototipo vs sobre producto final** (o versión inicial ya construida). En un prototipo se "cambia un dibujo"; sobre el producto el cambio se codifica y queda persistido → feedback potencialmente más rico.
- **Ubicación en el ciclo de vida:** el foco está en feedback durante el **desarrollo iterativo** y las **pruebas de aceptación** (producto ya desarrollado), **no** en relevamiento inicial, diseño UX temprano, priorización/planificación, ni mantenimiento post-producción.
- **Dos escenarios distintos a considerar por separado:**
  - **(a)** Desarrollo tradicional o con copilot (se escribe código).
  - **(b)** Herramienta tipo Figma / generadores donde **nunca** se toca código directamente; cambia la interacción con los usuarios finales.
- **Ejemplo real (Speaker 2):** en una fábrica de software local, el equipo de UX/UI ya no diseña en Figma; mediante prompting generan HTML/JS y mandan un PR que se mergea directo al front. Caso concreto de la reconfiguración de roles que estudia la tesis.

---

## 3. Conclusiones

- El scope (implementación + validación, IAG como mediadora del feedback usuario-equipo) sigue siendo válido, pero hay que delimitarlo mejor y defenderlo, porque la literatura científica directa es escasa.
- Pocos artículos **no** invalida la tesis: puede sustentar el aporte siempre que el relevamiento sea exhaustivo y se muestre que el tema está poco tratado.
- La revisión sistemática no es el producto final, sino la justificación de la PoC; ambas partes se complementan.
- Los conceptos de **impersonación** (stakeholder IA) y **firewall de feedback** (validación del feedback contra requisitos previos) emergen como los ejes más prometedores y diferenciadores.
- Conviene separar explícitamente los escenarios "con código" vs "sin tocar código" (tipo Figma), porque cambian la dinámica de feedback.

---

## 4. Próximos pasos — Sprint 12

| # | Tarea | Estado |
|---|-------|--------|
| 1 | Lista "final final" de referencias: pasar artículo por artículo confirmando que cubren desarrollo iterativo / validación (snowballing backward y forward) | ✅ Hecho |
| 2 | Decidir e incorporar artículos de **impersonación/personas virtuales** y **user feedback mediado por IA**, aunque hablen de otras fases | 📅 Con Daniel |
| 3 | Buscar **literatura gris** (blogs, LinkedIn, Twitter/X) con términos como "AI persona", feedback, etc. — identificarla explícitamente como no académica | ⏸ No llegué |
| 4 | Mejorar organización de referencias: armar un compilado único además del registro por sprint | ✅ Hecho |
| 5 | Delimitar y documentar los dos escenarios: (a) desarrollo tradicional/con copilot vs (b) herramienta tipo Figma sin tocar código | HECHO: diagrama ciclo de vida. VER: qué mas se esperaba de esta seccion |
| 6 | Definir la diferencia entre feedback sobre **prototipo** vs **producto ya construido** y ubicarla en el ciclo de vida | ✅ Hecho L3 y L4 de ciclo de vida |
