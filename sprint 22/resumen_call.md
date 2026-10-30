# Resumen call — Sprint 22 (documentación y vía de integración)

**Fecha:** 29/10/2026 · **Con:** Daniel (tutor)

## Encuadre de la herramienta

- Es de validación, no de review de documentos: chequea lo que el cliente pide contra la base de conocimiento del proyecto. Sin requisitos documentados no hay contra qué chequear.
- No hay forma única de documentar y no la vamos a imponer: la solución pide un repositorio con un espacio por tipo de artefacto (historias de usuario, casos de uso, documentos libres, glosario, etc.) y una breve descripción de cómo se lee cada uno. La capa de revisión se abstrae de la representación.

## El relevamiento de documentación va al Overleaf

- Subsección de especificación de requisitos dentro del marco conceptual, en párrafos (no tarjetas): Sommerville como ancla, las formas de documentar listadas, y las encuestas citadas como idea general con su referencia aunque las muestras sean chicas.
- El objetivo del pasaje es uno solo: mostrar que no hay forma única. Después, en la solución: "dado que no existe forma estándar, la base de conocimiento soporta todas".

## Solución conceptual vs prueba de concepto

- La solución conceptual soporta todas las formas de documentar; la PoC puede trabajar con una sola (ej. historias de usuario) sin perder validez. Lo mismo con las plataformas: un solo plugin alcanza.

## Arquitectura preferida para el bot

- Bot muy liviano en la videollamada + servidor propio que hace el grueso del trabajo, conectado a un repositorio (GitHub) que organiza la documentación. Es la opción más generalizable; el backend queda único y adaptable a distintos consumos (bot, plugin, SDK).
- Los chequeos son en vivo (ese es el chiste del prototipo); las correcciones a la documentación pueden ser a posteriori. Primero el acta de decisiones de la reunión; la actualización automática de documentos queda para después si da el tiempo.

## Próximos pasos (sprint 23)

- [ ] Explorar arquitecturalmente cómo se define un bot en **Zoom, Meet y Teams** (Teams porque es lo que usamos): qué permiten, qué exigen, y adaptarse al más fácil.
- [ ] Definir la arquitectura completa y confirmar que es viable de implementar.
- [ ] Redactar en el Overleaf la subsección de especificación de requisitos con el relevamiento de frameworks.
- [ ] Pensar el backend de procesamiento de documentos para que sea adaptable a la documentación del cliente.
