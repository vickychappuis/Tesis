# Plan de validación del prototipo de feedback

Versión con los ajustes de Daniel (27/11/2026).

El prototipo es un bot de Google Meet que contrasta lo discutido en una reunión con las reglas de negocio y los requisitos documentados. Ante una discrepancia, puede presentar evidencia, pedir una decisión y registrarla. El piloto evaluará si los usuarios de negocio pueden completar ese intercambio durante la reunión y cómo valoran la herramienta.

## Diseño y procedimiento

Se propone una reunión simulada de aproximadamente 15 minutos por persona, seguida de una encuesta breve. Participarán entre 6 y 10 personas con experiencia en discutir o validar requisitos o reglas de negocio. Cada persona asumirá el rol de usuario de negocio. Un integrante del proyecto moderará como analista y registrará las observaciones.

1. Preparar el caso ficticio, cargar la documentación y fijar por escrito el resultado esperado y el respaldo documental de cada caso. Probar el guion y el funcionamiento del bot antes de las sesiones.
2. Dar a cada participante la misma consigna y una breve introducción al bot. Ejecutar el guion en el mismo orden y registrar cualquier ayuda adicional que el analista deba prestar.
3. Al finalizar, guardar el registro de la sesión, aplicar la encuesta y vincular ambos mediante un código de participante.

## Casos de la reunión

| Situación | Resultado esperado |
|---|---|
| Contradicción documentada | El bot señala la discrepancia, muestra el respaldo y pide una decisión. Ejemplo: se afirma que el material de referencia nunca se presta, aunque un acta vigente prevé una excepción para docentes. |
| Regla ya acordada | El bot evita emitir una alerta de contradicción ante una afirmación compatible con lo documentado. |
| Pedido nuevo | El bot indica que el pedido no está contemplado y lo distingue de una contradicción. |
| Enunciado ambiguo | El bot pide una aclaración que el participante puede responder durante la reunión. |

## Criterio principal

Un caso de contradicción se considera resuelto durante la sesión si el bot interviene mientras el tema sigue abierto, cita un fragmento que respalda el veredicto, el participante comunica su decisión y el registro final la recoge correctamente.

## Registro de observaciones

Completar una fila por caso y participante. Registrar el veredicto esperado y el observado, si la cita existe y si respalda el veredicto, los segundos desde el fin del enunciado hasta la intervención, si el tema seguía abierto, la acción del participante, la ayuda del analista y la fidelidad del registro final. Indicar cuándo no hubo intervención o el dato no aplica.

## Encuesta de aceptación

Aplicar al terminar la reunión. Los ítems se adaptan del Modelo de Aceptación Tecnológica (TAM).

Cada afirmación se responde mediante una escala tipo Likert de cinco puntos: 1 = Totalmente en desacuerdo, 2 = En desacuerdo, 3 = Ni de acuerdo ni en desacuerdo, 4 = De acuerdo y 5 = Totalmente de acuerdo. Cuando corresponda, se incluye la opción «No tuve oportunidad de evaluarlo», que se registra por separado y se excluye del cálculo de la mediana del ítem.

**Utilidad percibida**

- El bot me ayudó a identificar diferencias entre lo discutido y lo acordado.
- El bot me ayudó a decidir qué hacer ante una discrepancia.
- El bot me resultó útil para validar reglas de negocio durante la reunión.

**Facilidad de uso percibida**

- Me resultó fácil entender qué señalaba el bot.
- Me resultó fácil consultar la evidencia documental.
- Me resultó fácil comunicar mi decisión o aclaración al bot.

**Intención de uso**

- Si el bot estuviera disponible, lo usaría en una reunión similar.
- Procuraría usar el bot cuando deba revisar reglas de negocio en futuras reuniones.

**Preguntas abiertas**

- ¿Qué intervención te ayudó a aclarar o decidir algo? ¿Qué ocurrió?
- ¿Hubo alguna intervención que te confundiera o interrumpiera la conversación? ¿Qué ocurrió?

## Análisis y alcance

Informar cuántos casos de contradicción se resolvieron sobre el total y mostrar el resultado de cada paso. Resumir por ítem TAM la distribución de respuestas, la mediana y el número de respuestas válidas. Usar las observaciones y las respuestas abiertas para explicar dificultades y priorizar mejoras.

El piloto tiene una sola condición, con el bot. Sus resultados describen el desempeño observado y la aceptación inicial en la simulación. Una estimación de cambios en tiempos o resultados frente a una reunión habitual requeriría una condición de comparación.

## Referencias

Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. MIS Quarterly, 13(3), 319–340. doi:10.2307/249008.

Davis, F. D., Bagozzi, R. P., y Warshaw, P. R. (1989). User acceptance of computer technology. Management Science, 35(8), 982–1003. doi:10.1287/mnsc.35.8.982.
