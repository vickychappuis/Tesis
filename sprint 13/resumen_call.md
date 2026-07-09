# Resumen de Call — Sprint 13

**Tesis:** Ciclos de feedback entre clientes y equipos de desarrollo en contextos de uso de IAG
**Fuente:** `call.md` (transcripción automática, con ruido — excluida por `.gitignore`)
**Participantes:** Speaker 2 (Daniel, tutor) y Speaker 1 (Victoria, estudiante)

> _Nota: la asignación de roles surge del contenido (Speaker 1 cierra con "gracias Daniel" y toma la dirección; Speaker 2 guía la reunión)._

---

## 1. Tema central de la reunión

Validar el trabajo de revisión de literatura ya hecho y **reencuadrar el proyecto**: dejar de tratarlo como revisión sistemática estricta, asumirlo como un **mapeo de literatura**, y usarlo como base para construir un primer aporte conceptual (marco de proceso de desarrollo + cómo potenciarlo con IAG). Se acuerda además empezar a documentar y bajar a tierra las ideas para la PoC.

---

## 2. Puntos discutidos

### 2.1. Validación del trabajo hecho y reencuadre metodológico

- El resumen del flujo recurrente y la síntesis de tipos de entradas (las conclusiones ya cargadas) le parecieron **muy bien** al tutor; sirven de guía para armar el marco teórico.
- **No se vende como revisión sistemática:** el foco original era tan concreto que no recuperaba casi nada. Si se amplía a "feedback en general" aparecen los artículos de requisitos y demás, pero incluirlos obligaría a toda una fase de análisis que no aporta.
- La lectura correcta es un **mapeo de literatura** ("mapping"): identificar en el área los grandes clústeres de conocimiento y de trabajo. Con ese encuadre, **todo lo hecho hasta ahora vale**.
- Mensaje explícito del tutor: adaptarse a lo que uno encuentra es parte normal de investigar. Cambiar de rumbo **no** es fracaso ni "tirar el proyecto"; la propuesta inicial es una expresión de deseo, hay total libertad de reorientar.

### 2.2. Reorientación del alcance

- Las **entrevistas a empresas** quedan de lado por ahora; el tutor las ve poco relevantes en este momento.
- Se prioriza lo que **motive** a la estudiante: explorar una línea nueva / desarrollar algo, y **evaluarlo después con alguien**. Eso sigue aportando valor como proyecto final.
- Descartar la idea "chica" (un bot que agarra tickets y los hace): parece sencilla o ya resuelta por otros. Buscar algo con más espacio de juego y más interesante (p. ej. partir de un transcript de llamada → detectar/generar tickets pequeños, o asistir el feedback con el contexto de negocio).

### 2.3. El marco a construir (primer aporte, no resultado de la revisión)

Tres capas de razonamiento:

1. **Proceso de desarrollo HOY (zoom en feedback).** Retomar el diagrama de ciclo de vida ya hecho, pero con **zoom exclusivo en la etapa de feedback**: la que ocurre una vez que ya existe una versión ≥ 0.1 con código (no un prototipo/dibujo). Describir el ciclo ágil real: sprint → entrega al cliente → interacción → cambios → se integran → de vuelta.
2. **Definirlo en términos generales:** un modelo de proceso = conjunto de **actividades, roles, entradas, salidas, objetivos**. Apoyarse en algo bibliográfico para esa definición general.
3. **Proceso potenciado con IA (mañana).** Para cada elemento del marco, un breve párrafo de cómo **podría** cambiar con IAG, con referencia si se encuentra. Clave: lo que **no** cambia es la forma de trabajo, el modelo de proceso, los roles y las tareas; lo que cambia es **quién las realiza y cómo** (un rol que era una persona ahora puede ser una IA). No todas esas variantes tienen que ser válidas juntas: es un abanico de posibilidades según la literatura.

### 2.4. Grandes ideas / ejes a marcar (posibles focos de la PoC)

- **Impersonación de clientes / stakeholder IA:** una IA habilitada que **genera el feedback** en lugar del cliente. Al tutor le entusiasma especialmente; planteo muy concreto (dos líneas + referencias).
- **Creación automática de tickets** a partir de una representación intermedia.
- **Procesamiento de una entrevista/llamada por voz → artefacto intermedio procesable por máquina** (filtrar la oralidad, generar tickets, chequear consistencia contra la especificación, o nutrir la especificación).
- Esto es el **pipeline completo** que se había planteado antes; implementarlo entero es **inviable**, por eso se hace zoom sobre alguna área poco desarrollada e interesante.

### 2.5. Idea de la PoC / experimentación (Objetivo F)

- Lógica: buscar si alguno de los trabajos relevados tiene **herramienta disponible** → tomarla y probarla / adaptarla. Si no existe y no es descabellado, armar una **PoC mínima desde cero**.
- Candidata fuerte: la **impersonación**. Se podría comparar/combinar feedback de un **humano** vs. una **IA impersonada**.
- No hace falta un proyecto real: sirve un **proyecto controlado** con bugs y fallas conocidas para motivar el feedback.
- Prueba factible sin empresa: un **laboratorio** con ~5 compañeros de clase un par de horas.
- Tranquilidad del tutor: con **un solo** artículo del corpus y un experimento asociado ya alcanza para un proyecto de fin de carrera. Enganchar viabilidad **con** motivación personal.

---

## 3. Conclusiones

- El trabajo de revisión hecho **vale** y se reencuadra como **mapeo de literatura**, no como revisión sistemática; no es el resultado final sino insumo para un primer aporte conceptual.
- El aporte inmediato es un **marco del proceso de desarrollo enfocado en la etapa de feedback**, definido por actividades/roles/entradas/salidas, más una capa de "cómo se potencia con IAG" elemento por elemento.
- Lo que cambia con IAG no es el proceso ni los roles, sino **quién** ejecuta cada tarea y **cómo**.
- Los ejes más prometedores: **impersonación de clientes**, **generación automática de tickets** y **procesamiento de voz → artefacto intermedio**.
- El pipeline completo es inviable; la estrategia es **hacer zoom** en un área y validar con una PoC mínima, reutilizando herramientas existentes si las hay.
- Se baja el riesgo empezando ya a documentar, sin buscar una versión final.

---

## 4. Próximos pasos — Sprint 14

| # | Tarea | Estado |
|---|-------|--------|
| 1 | Armar la **primera versión del marco del proceso de desarrollo actual**, con zoom en la etapa de feedback (versión ≥ 0.1 con código), definido por actividades/roles/entradas/salidas | 📅 Para el jueves |
| 2 | Para **cada elemento** del marco, agregar un párrafo breve de cómo se podría potenciar con IAG (global, sin apego a un artículo; referencias si aparecen) | 📅 Para el jueves |
| 3 | Marcar las **grandes ideas/áreas** candidatas: impersonación, creación automática de tickets, procesamiento de voz → artefacto intermedio | 📅 Para el jueves |
| 4 | **Documentar** todo el trabajo de revisión ya hecho (se destinan un par de semanas después de esta primera versión del marco) | ⏭ Después |
| 5 | Reenganchar con la **definición conceptual** y pasar a la fase de **experimentación / PoC** (candidata: impersonación; posible laboratorio con compañeros) | ⏭ Más adelante |

> **Próxima reunión:** jueves 20:00.
