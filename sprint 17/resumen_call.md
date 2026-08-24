# Resumen call — Sprint 17 (cierre del corpus, pasaje al prototipo)

**Fecha:** 24/08/2026 · **Con:** Daniel (tutor) · **Fuente:** `DANIEL 24 DE AGOSTO.transcripcion.txt` + `PARA_CALL_24-08.md`

> ⚠️ La transcripción es automática y deforma nombres: "marco B3" (marco v3), "de lana" (de la nada), "el juez" (el jueves), "OP" (OK), "Pimba" (ruido), "¡Suscríbete al canal!" en el silencio final. Sirve para la narrativa, no para citar.

## Trazabilidad del corpus: la preocupación de la call anterior era infundada

- Corrección explícita de lo dicho el 11/08: **la mayoría de los 18 documentos del marco v3 sí vienen de las búsquedas propias**. El pie chart de `PARA_CALL_24-08.md` lo muestra, y `CHEQUEO_CORPUS.md` tiene el detalle fila por fila (de qué sprint, de qué Excel, cuáles se tomaron).
- Es la parte sólida y verificada del trabajo. Daniel lo dio por bueno sin discusión.

## Recodificación de los descartados

- No se llegó a hacer manualmente. Se corrió con Claude (Fable 5) un rato antes de la call: releer los Excels contra el marco nuevo, con foco en los dos puntos que la tesis quiere cubrir — **4.5** (validar lo construido contra reglas y procesos de negocio) y **4.7** (la instancia de aceptación) — y clasificar los candidatos por categoría.
- La tabla resultante está en `PARA_CALL_24-08.md`: número y nombre de categoría, paper, mini descripción, ⭐ para los de más peso.
- **Salvedad:** la salida no se leyó a fondo todavía. Queda como insumo a revisar, no como resultado cerrado.

## Veredicto de Daniel sobre la documentación

- **No hay que darle un marco más formal del que tiene.** No hace falta presentarlo como revisión sistemática; alcanza con presentarlo como el marco de referencia que surge de un trabajo grande. Si en el camino se le pifió en algo o se tomó otro rumbo, no importa.
- Consigna concreta: leer lo que ya hay, incorporar lo nuevo que resulte interesante, y **cerrar lo más rápido posible**.
- El marco teórico ya es un aporte y un resultado de tesis en sí mismo — pero no hay que seguir dando vueltas. *"Pasemos esto en limpio, que sea prolijo y razonable, como para poder avanzar en lo otro."*

## La urgencia: el prototipo

- Estamos a fines de agosto. Si la documentación se estira, **el trabajo práctico queda apretado** y la tesis se queda solo con el marco teórico.
- Doble objetivo simultáneo: adelantar la documentación para que no sea bloqueante *y* definir cuanto antes el foco de la última etapa.
- **El elemento más riesgoso hoy no es construir el prototipo, es definirlo:** qué se quiere probar, con qué objetivo, para qué. Eso tiene que derivarse del corpus — encontrar el hueco donde hay poco o nada.
- Ejemplo que tiró Daniel, deliberadamente ajeno a lo ya hablado, para ilustrar el tipo de salto: *a partir de los tickets de GitHub, generar una narrativa de cómo atacarlos de a uno según riesgo y asignaciones*. No es una propuesta, es una muestra de cómo se busca el hueco: se plantea la idea, se chequea si hay trabajos que la toquen, y si no hay, ahí se apunta.

## La validación puede ser liviana

Una vez implementado el prototipo, la fase experimental **no tiene por qué ser grande**. Dos caminos posibles:

- **Con usuarios:** proyecto ficticio + el agente + 5 a 20 personas que lo usen y llenen un formulario (qué les pareció, qué mejorarían, si les sirve). Eso ya es una evaluación.
- **Sin usuarios:** correr el agente sobre repositorios reales distintos, comparar las salidas entre corridas, todo automático.

No hay que validar que la herramienta sea fundamental ni que se use en un contexto organizacional verdadero. Alcanza con validar la idea: *¿mezclar esto con esto da algo interesante?*

## Overleaf

- Se arranca el índice ya (empezando en markdown y volcando después). Primero se mete lo que ya existe y se revisa en paralelo lo nuevo que salió de la recodificación.
- Orden tentativo recordado: contexto (ciclo de vida del software) → estado actual → qué está cambiando la IA. Daniel señaló que eso está en la v3; queda pendiente confirmar los **extra steps** que se iban a agregar al pasar a Overleaf — se revisa la transcripción de la call del 11/08 y se le pasa el punteo para OK.

## Próximos pasos (Sprint 18)

- [ ] Armar el **índice del Overleaf** y pasárselo a Daniel para OK.
- [ ] Mandar **3 o 4 ideas de prototipo** en paralelo, para OK.
- [ ] Con ambos OK, avanzar con la documentación mientras se define el alcance del prototipo.
- [ ] Terminar de leer la tabla de candidatos de `PARA_CALL_24-08.md` e incorporar al marco lo que valga la pena.

**Logística:** se avanza por mensaje entre reuniones. Próxima reunión reservada en dos opciones: **lunes 31/08 a las 15:00** o **jueves 03/09 a las 15:00** — se confirma por mensaje según cómo venga el avance.
