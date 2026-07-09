# Para ver con Daniel — sprint 14

Lista de cosas nuestras (decisiones propias, sin respaldo bibliográfico fuerte) y pendientes para validar con el tutor. Criterio: el marco (`MARCO_PROCESO_FEEDBACK.md`) queda con fundamento bibliográfico; lo dudoso o inventado por nosotros vive acá hasta confirmarlo.

## Decisiones / dudas

- **Referencias clásicas del proceso "hoy".** ¿Hace falta citar Pressman, Sommerville, Scrum Guide y Dumas para fundamentar el proceso, o alcanza con describirlo? ¿Con qué profundidad? Por ahora las sacamos del marco (era una decisión nuestra sin fundamento fuerte).
- **Scope de A1 (Tusk).** La generación automática de tests del PR y la detección de regresiones parecen loop técnico interno, fuera del foco de feedback cliente↔equipo. Las sacamos; confirmar que quedan afuera.

## Ideas propias sobre la capa con IAG (para validar)

1. **Firewall bidireccional:** la IA no solo valida el pedido del cliente, también le explica el impacto en lenguaje de negocio (qué requisitos toca, qué cuesta).
2. **Impersonación calibrada:** stakeholder-IA nutrido con el histórico del cliente real (calls/tickets previos), no genérico.
3. **Hilo de trazabilidad del loop completo:** feedback → ticket → código → validación. Candidato a eje de la PoC.
4. **Experimento humano vs. IA impersonada:** comparar el feedback/tickets de un humano vs. una IA sobre un proyecto controlado con bugs conocidos.

## Pendiente de hacer juntos

- **Ticket 3:** consolidar las grandes áreas transversales (impersonación, oralidad→artefacto, chequeo de consistencia/firewall, generación→desarrollo de tickets). Material en `PROPUESTA_DANIEL.md`.
- **Ticket 4:** identificar aspectos puntuales para la PoC.
