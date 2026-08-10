# Sprint 16 — 30 jul → 10 ago 2026

Entregable: **`MARCO_PROCESO_FEEDBACK_v3.md`**, el estado del arte contado según la narrativa de Daniel (call 30
jul): proceso de software → V-model → Scrum como línea de base → feedback con IA → escenarios S1–S4 → problemas
abiertos. Sin propuesta propia todavía.

## Qué concluye el marco

- El feedback del stakeholder ocurre en dos puntas de un mismo circuito: dice qué necesita (requisitos) y dice si
  lo construido es eso (aceptación). Todo lo demás es trabajo del equipo entre ambas.
- La literatura relevada sobre IA cubre la periferia de ese circuito: emitir feedback sintético (4.1), capturar lo
  dicho (4.2), mejorar el artefacto de requisito (4.3) y materializar temprano (4.4). Cada una altera dimensiones
  distintas del ciclo; ninguna lo cambia integralmente.
- **Lo que no encontramos:** estudios de la interacción de validación del stakeholder sobre software construido
  (las etapas de negociar y aceptar del proceso de Sommerville), ni trabajos que validen contra reglas y flujos de
  negocio (objetivo D). Ese doble vacío es el lugar de la tesis.
- Importa porque la capacidad de generar se democratizó y la de validar no: la gente de negocio no logra verificar
  salidas de IA de forma confiable (Virk, Fawzy), y las barreras al feedback de calidad están sistematizadas pero
  no trasladadas a este ciclo (Sharma).
- En los escenarios de Sauvola, lo relevado se concentra en S2 (la IA asiste) y toca S3 en dos puntos; nada llega
  a S4: en ninguna vía relevada el humano sale del circuito.
- El tramo técnico (generación de código) queda como anecdótico, fuera del alcance.

## Queda abierto

- Con Daniel: si el BPMN del v2 se queda en la sec. 3.2, y si el *"firewall" de feedback* (sprint 11) vuelve como
  línea de la PoC.
- Sin descubrir (posibles lugares para la PoC): cómo se reconfigura la interacción de validación cuando media la
  IA; qué andamiaje le permitiría al actor de negocio validar de forma confiable; cómo trasladar las barreras de
  Sharma al ciclo cliente-equipo.

## Archivos de apoyo

- `NOTAS_MEMORIA.md` — cautelas de citado y strings de búsqueda; recién se usan al redactar la memoria.
- `papers/` — PDFs verificados (Virk, Fawzy, Sharma, Mircea, Alabsi).
