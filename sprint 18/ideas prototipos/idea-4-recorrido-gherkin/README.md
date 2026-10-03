# Idea 4: Del recorrido a Gherkin ejecutado

![Demo del recorrido a Gherkin ejecutado](demo.gif)

Video completo en `demo.webm` (63 s). Mock auto-animado en `demo.html` (abrir en un navegador a 1280x720).

## Qué es la idea

- Durante una sesión de validación, el stakeholder usa el software construido y comenta en voz alta lo que espera ("si el cliente está moroso, esto no me tendría que dejar facturar a crédito").
- El agente IAG convierte ese comentario, en vivo, en un escenario de aceptación Gherkin.
- El escenario no queda escrito para después: **se ejecuta solo contra la aplicación**, ahí mismo, y el stakeholder ve pasar o fallar cada paso.
- Cuando falla, el agente no manda el problema al equipo. Le pregunta al stakeholder, porque el paso rojo puede significar dos cosas distintas:
  - **El sistema está mal.** El stakeholder lo confirma y sale un ticket para desarrollo, con el escenario Gherkin adjunto como test que hoy está en rojo.
  - **La expectativa estaba incompleta.** El sistema hace algo que el stakeholder no mencionó pero que está bien. El agente refina el escenario con lo que faltaba, lo vuelve a correr, pasa, y no genera ningún ticket.
- El equipo recibe tests de aceptación ejecutables ya validados, y los tickets llegan con su test en rojo adjunto en vez de con una descripción en prosa.

## Qué punto de la tesis ataca

- La instancia de aceptación: el stakeholder usa el software y valida los criterios él mismo, sin que el analista los redacte.
- Objetivo D, validación temprana: el criterio de aceptación se verifica contra el sistema en el mismo momento en que se enuncia, no en la iteración siguiente.
- Objetivo C: la distinción entre "error del sistema" y "expectativa incompleta" la hace el actor de negocio, no el equipo técnico. Hoy esa decisión la toma un desarrollador leyendo un ticket.
- Objetivo B, granularidad y temporalidad: la unidad del ciclo pasa a ser el escenario ejecutado, y la vuelta llega en segundos.
- Objetivo F: es el prototipo exploratorio de interacción temprana entre un usuario no técnico y un sistema generativo.

## Por qué la ejecución cambia la idea

- Sin ejecución, el stakeholder confirma un texto. Confirmar un texto es barato y no prueba nada: puede aprobar un Gherkin que el sistema incumple y nadie se entera hasta la iteración siguiente.
- Con ejecución hay un hecho verificable de por medio. El desacuerdo deja de ser de interpretación y pasa a ser un paso en rojo, sobre el que se puede conversar.
- Es también lo que hace medible el prototipo: cuántos escenarios fallan, cuántos de esos fallos el negocio clasifica como error del sistema y cuántos como expectativa propia incompleta.

## Validación

- Sesiones con 5 a 15 usuarios de negocio sobre un sistema de ejemplo con errores plantados y con comportamientos correctos pero no obvios.
- Métricas: cuántos escenarios genera el agente sin corrección, cuántos fallan al ejecutarse, y cómo clasifica el stakeholder cada fallo (error del sistema o expectativa incompleta) contra la clasificación real, que se conoce de antemano.
- Contraste: los mismos recorridos con un analista redactando los criterios, para comparar cuántos criterios se producen y cuántos errores del sistema se detectan en la sesión.

## Archivos

- `demo.html`: mock autocontenido y auto-animado del flujo.
- `demo.webm` y `demo.gif`: grabación en 1280x720.
