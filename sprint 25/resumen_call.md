# Resumen call: Sprint 25 (cerrar la PoC)

**Fecha:** 19/11/2026 · **Con:** Daniel (tutor)

## Búsqueda en la base de conocimiento

- No es el foco de la tesis: se elige una de las dos candidatas (RAG híbrido o índice navegado por un agente) por simplicidad y se implementa, sin compararlas con casos sintéticos.
- En la tesis alcanza con presentar las dos alternativas y justificar la elegida.
- La base de conocimiento de un proyecto es chica (requisitos y decisiones): el volumen no es un problema.
- Lo que genera la herramienta (decisiones, actas) conviene guardarlo en texto estructurado (`.md` o JSON), con etiquetas por tema y fecha para recuperarlo.

## Alcance de la PoC

- Queda afuera por ahora: publicar tareas en un gestor como GitHub; compartir pantalla y proponer cambios a documentos quedan como trabajo futuro.
- Se suma la entrega al final de la reunión: un acta simple, que pasa a ser un documento nuevo de la base de conocimiento.
- Formato del acta a definir: la transcripción con marcas en las líneas donde se detectó algo (chequeo y respuesta), o la transcripción y abajo una lista de hallazgos por momento, más un resumen.

## Validación (se define la semana que viene)

- Un proyecto sintético sirve: da más control. Uno real aporta documentación más abundante y variada.
- Fuente posible de documentación real: la memoria organizacional del Proyecto de Ingeniería de Software (Facultad de Ingeniería, Udelar), con lo entregado por cada grupo en cada iteración, clientes reales y distintos procesos.
- Varios casos con documentación distinta (requisitos funcionales, historias de usuario, etc.) muestran que la herramienta se adapta.
- Video corto de una reunión simulada (Daniel como cliente) para la defensa.
- Sesiones con unos cinco usuarios, muy guiadas: qué pedir, con conocimiento previo del proyecto.

## Trabajo relacionado

- Anthropic lanzó en beta un agente que entra a videollamadas de trabajo y genera notas de reunión: va como trabajo relacionado.

## Próximos pasos (sprint 25)

- [x] Elegir una candidata de búsqueda e implementarla en el backend.
- [x] Agregar el acta al final de la reunión y definir su formato.
- [ ] Revisar la memoria organizacional del Proyecto de Ingeniería de Software y ver qué sirve.
- [ ] Próxima call: definir la validación.

## Pasa al sprint 26

- [ ] Actualizar la documentación del Overleaf con el feedback de Daniel.
- [ ] Agregar el agente de reuniones de Anthropic al trabajo relacionado.
