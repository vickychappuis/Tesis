# Índice propuesto para el documento de tesis (Overleaf)

Para OK de Daniel. Sale del orden acordado en la call del 11/08 y del marco v3. Al lado de cada sección, de dónde sale el contenido.

## 1. Introducción

- Contexto y motivación: el desarrollo de software se organiza en un ciclo de vida que depende del feedback del negocio; la tesis estudia cómo se reconfiguran esos ciclos al incorporar IAG.
- Objetivo general (queda igual). Objetivos específicos ajustados: sin entrevistas; la PoC no tiene por qué atacar un hueco. *(reescritura del documento de proyecto original)*
- Estructura del documento.

## 2. Background

Todo sin IA: es el relevamiento de lo que existe hoy día, sin procesamiento propio. Visual y corto: figura más un párrafo por tema, sin explicar cada etapa en detalle.

- 2.1. El ciclo de vida del software: las cuatro etapas de Sommerville. *(marco v3, sección 1; la tabla pasa a párrafo más figura)*
- 2.2. Verificación y validación: el modelo en V. Las dos puntas son el feedback del stakeholder. *(marco v3, sección 2)*
- 2.3. Ciclos de feedback: definición de trabajo. *(marco v3, Definiciones)*
- 2.4. El estado actual: cómo se da el feedback hoy, con Scrum como ejemplo. *(marco v3, sección 3)*

## 3. Revisión bibliográfica

Se presenta como revisión bibliográfica, no como SLR. Sin PRISMA ni criterios formales de inclusión y exclusión; solo lo mínimo para justificar el corpus.

- 3.1. Proceso de búsqueda: strings, fuentes consultadas, cuántos se recuperaron, cuáles se usan. *(sprints 5 a 10, contado en una página)*
- 3.2. Corpus resultante y su trazabilidad. *(chequeo del sprint 17: los 18 del marco más lo que entre de la recodificación)*

## 4. Resultados: el feedback mediado por IAG

El corazón del documento. Es la estructura que conecta el background con lo que dio la revisión. Acá recién entra la IA.

- 4.1. La IAG: qué es y qué está cambiando en el desarrollo de software. Presentación breve. *(a escribir; hoy no está en el marco)*
- 4.2. Categorías de técnicas: quién emite, qué se captura, sobre qué artefacto se trabaja, qué se construye, contra qué se valida, la aceptación. *(marco v3, secciones 4 y 4.1 a 4.7, con la tabla actualizada tras la recodificación)*
- 4.3. Qué dimensión del ciclo altera cada categoría: frecuencia, secuencia, granularidad, temporalidad. Responde el objetivo B. *(marco v3, sección 4.8)*
- 4.4. Las categorías en los escenarios S1 a S4. *(marco v3, sección 5)*
- 4.5. Aspectos no considerados y problemas abiertos. Se presentan como interés a profundizar, no como huecos de una SLR. *(marco v3, sección 6)*

## 5. Prueba de concepto

Placeholder hasta definir el prototipo (las 3 o 4 ideas van por mensaje aparte).

- 5.1. Definición: qué se quiere probar, con qué objetivo.
- 5.2. Implementación.
- 5.3. Validación liviana: usuarios con formulario, o corridas automáticas sobre repositorios reales.

## 6. Conclusiones y trabajo futuro

## Referencias

## Decisiones del 11/08 que este índice ya asume

- La revisión se cuenta como bibliográfica; la formalidad de la SLR original no va, para no generar la contradicción de "no encontré nada y después uso otros artículos".
- El background no explica las etapas del desarrollo: un revisor ya las conoce. Se referencia a Sommerville.
- Los objetivos específicos se retocan en la introducción (sin entrevistas, PoC abierta), el general queda igual.
- Se escribe primero en markdown en el repo y se sincroniza con Overleaf vía GitHub.
