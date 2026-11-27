# Memoria organizacional del Proyecto de Ingeniería de Software (Udelar)

Pregunta: sirve la memoria organizacional del Proyecto de Ingeniería de Software (PIS) de la Facultad de Ingeniería de la Udelar como documentación real para validar el asistente? Sí, y buena parte es pública: hay requisitos, alcance, glosario y actas de reuniones con el cliente, por grupo e iteración, de 1999 a 2017, y una muestra de 2020 y 2021. Relevado el 23/11/2026.

## Qué es

- PIS es una asignatura de grado del Instituto de Computación (InCo), segundo semestre, 15 créditos, código 1721, del Grupo de Ingeniería de Software (GrIS). Ficha: https://www.fing.edu.uy/es/node/46985
- Grupos grandes de estudiantes (unos 10 a 15 por grupo, por los roles que aparecen) desarrollan un producto durante unas 14 semanas para un cliente real (empresas, organismos públicos, docentes), con un docente como director o coach. Desde 2001 cada cliente suele atender a dos grupos que hacen el mismo proyecto por separado.
- Desde 2000 el curso se propuso construir una memoria organizacional: dejar registrado lo hecho por cada grupo para las ediciones siguientes. Lo cuentan Triñanes (2003), "TLREQ: proceso para desarrollo a distancia", JIISIC 2003: https://idm.fing.edu.uy/sites/default/files/biblio/24428/tlreq_jiisic2003.pdf (sección 2.2 y referencia [12]), y un informe técnico del InCo sobre el modelo de proceso del curso (Delgado y Pérez, 2006): https://www.colibri.udelar.edu.uy/jspui/bitstream/20.500.12008/3527/1/TR0615.pdf
- Los procesos cambian según el año: MUM (proceso propio, iterativo, con extensiones OO en Java o .Net y GeneXus) hasta mediados de la década de 2010, Scrum en algunos grupos desde 2014, híbridos MUM y Scrum en 2016, y PISAgile (proceso ágil propio) desde 2020.

## Dónde está y cómo se accede

- **Sitio de la memoria (público, sin login):** https://www.fing.edu.uy/inco/cursos/ingsoft/pis/memoria/index.htm. Es un sitio viejo con frames y un árbol en JavaScript; la carpeta raíz devuelve 403, pero cada página y archivo se abre por su URL. Cubre las ediciones 1999 a 2017 (el árbol dice "2008-2016" pero incluye 2017). Última actualización declarada: 29/12/2014 en la portada, con material agregado después.
  - Índice por año, p. ej. 2009: https://www.fing.edu.uy/inco/cursos/ingsoft/pis/memoria/dvd02/experiencia2009/index.htm; de 2010 en adelante: `.../dvd02/experiencia<año>/material/index.htm`
  - Cada año lista los grupos con organización, cliente, director, producto y proceso, y enlaza a una página de entregables por grupo (2008 a 2013, archivo por archivo) o a un zip con todo lo entregado (2014 a 2017).
  - Originalmente se distribuía en dos DVD (1999-2007 y 2008 en adelante).
- **EVA del curso (acceso de invitado, sin login):** https://eva.fing.edu.uy/course/view.php?id=573. Tiene una sección "PISAgile - Memoria del curso" con el material de cinco grupos de 2020 y 2021 (rar de 9 a 46 MB, descarga abierta), el enlace al sitio viejo y la wiki del proceso PISAgile en el GitLab de la facultad: https://gitlab.fing.edu.uy/proyecto-de-ingenier-a-de-software-pis/pisagile/especificacion-pisagile/ (responde, no la recorrí).
- **2018, 2019 y 2022 en adelante:** no encontré material público. Las entregas semanales de 2026 están en tareas del EVA, que no se ven como invitado.

## Qué contiene

Volumen contado en las páginas de entregables de 2008 a 2013 (52 grupos):

| Año | Grupos | Archivos | Actas de reunión de requisitos | Documentos de validación con el cliente |
|---|---|---|---|---|
| 2008 | 11 | 2.149 | 65 | 34 |
| 2009 | 8 | 1.168 | 21 | 27 |
| 2010 | 8 | 954 | 21 | 17 |
| 2011 | 10 | 1.186 | 21 | 21 |
| 2012 | 9 | 998 | 24 | 15 |
| 2013 | 6 | 628 | 9 | 12 |

A eso se suman 1999 a 2007 (no contado) y 2014 a 2017 en zips (de 3 a 123 MB por grupo, unos 9 a 11 grupos por año).

- **Tipos de documento (MUM):** cada entregable tiene un código. Requisitos: acta de reunión de requisitos con el cliente (RQACT), especificación de requisitos (RQDRQ), modelo de casos de uso (RQMOD), documento de validación con el cliente (RQDVC), alcance del sistema (RQALS), glosario (RQGLO), modelo de dominio, pautas de interfaz. Además diseño y arquitectura, verificación, planes, informes de situación, riesgos, calidad y configuración. Todos versionados por fase (inicial, elaboración, construcción, transición) e iteración.
- **Tipos de documento (Scrum y PISAgile):** backlog inicial, product backlog por sprint con historias de usuario y "how to demo", actas de sprint review con los comentarios del cliente, requisitos no funcionales, encuestas de satisfacción del cliente, informes semanales. En 2020 y 2021 el material es más de gestión: la propuesta del cliente ("requerimientos enviados por mail"), definition of ready y done, informes semanales, riesgos, lecciones aprendidas. Las historias de usuario de esos años no aparecen en la muestra que abrí (probablemente vivían en un tablero aparte).
- **Formatos:** .odt y .doc la mayoría hasta 2013, .pdf desde 2014, planillas .xls/.ods/.xlsx, presentaciones .ppt, todo empaquetado en .zip o .rar en los años recientes.
- **Idioma:** español rioplatense, con términos técnicos en inglés en los grupos Scrum.

## Muestras abiertas

**2009, grupo 9 (proceso MUM, cliente: Correo Uruguayo, producto: Invenio, sistema para ubicar direcciones en el mapa).** Página de entregables: https://www.fing.edu.uy/inco/cursos/ingsoft/pis/memoria/dvd02/experiencia2009/material/mgrupo9.htm

- Acta de reunión con el cliente del 4/9/2009 (`grupo9/requerimientos/inicial/iter2/RQACTG9_20090904.odt`, unas 1.200 palabras): participantes con rol, seis temas (prototipo, dudas, interfaz, alcance, próximas reuniones, compromisos) y lo que el cliente dijo, en tercera persona. Trae justo el tipo de enunciado que el asistente confronta, por ejemplo:
  - "No se puede setear 'a mano' las localidades, departamentos o códigos postales para una dirección."
  - "Debe existir una baja manual de direcciones, y esta debe ser una baja lógica."
  - "Cargar nuevos códigos postales no se incluye en el alcance preliminar."
  - "Para los sinónimos y alias temporales se va a evaluar la posibilidad de incluirlos, pero están fuera del alcance preliminar."
  - Un hueco explícito: "En el caso que solo se encuentre un punto, no está definido."
- Especificación de requisitos (`RQDRQG9.odt`, versión 2.8, unas 5.900 palabras), con una historia de revisiones que incluye "ajustes luego de validación con el cliente".
- Alcance del sistema (`RQALSG9.odt`): "Todo aquello que no esté mencionado en este documento no es considerado parte del" alcance. Es el documento contra el que se decide "no contemplado".
- Documento de validación con el cliente (`RQDVCG9_08.odt`): resume en qué reuniones se validó cada documento y cita al cliente textualmente ("Estoy satisfecho con el alcance...").

**2016, grupo 1 (Scrum, cliente: Octobot, producto: MissingPets).** Zip: https://www.fing.edu.uy/inco/cursos/ingsoft/pis/memoria/dvd02/experiencia2016/material/grupo1/material.zip (11 MB, 101 PDF)

- Acta de sprint review: el cliente marca que "el dashboard está en español y la app está en inglés", pide feedback en los clics, y dice de una librería que "es una recomendación, pero que si no la seguimos es un requisito".
- Backlog del sprint 3: historias con puntos y criterios de demo, p. ej. "A la hora de hacer un reporte, es obligatorio poner la ubicación" y "Por defecto no hay pin en ningún lado".

**2021, grupo 6 (PISAgile, cliente: NeoCoast, producto: NeoForms).** Rar del EVA: https://eva.fing.edu.uy/pluginfile.php/804/course/section/14355/grupo6%20-%20memoria.rar

- La propuesta del cliente con 14 funcionalidades numeradas y prioridades ("al menos los puntos 1 a 10", "el 11 es deseable"); informes semanales que mencionan demos y validación del sprint con el cliente, sin actas de lo que dijo.

## Qué sirve para la validación y qué no

Sirve:

- **Casi los siete tipos de documento del prototipo, reales:** requisitos (RQDRQ), actas (RQACT), alcance (RQALS), glosario (RQGLO), reglas de negocio dentro de la especificación y las actas, y tickets como historias de usuario en los grupos Scrum. No vi políticas como documento aparte.
- **Armar casos de prueba con respuesta conocida:** tomar la documentación de una iteración como base de conocimiento y los enunciados del cliente en el acta siguiente como entrada. Lo que el acta registra como corrección choca, lo que confirma coincide, y lo que el grupo anota como fuera del alcance o "a estudiar" no está contemplado. La versión siguiente de la especificación dice cuál fue el desenlace.
- **Mostrar que la herramienta se adapta:** el mismo curso tiene documentación MUM (casos de uso, especificación formal), Scrum (backlog, historias) y PISAgile, con clientes y dominios distintos. Es lo que Daniel planteó en la call del 19/11.
- **Dos grupos con el mismo cliente:** la misma realidad con requisitos distintos (el acta de 2009 lo dice explícitamente), útil para un caso donde lo que coincide para un grupo choca para el otro.
- **Volumen manejable:** un proyecto de un grupo son decenas de documentos de requisitos, del tamaño de una base de conocimiento de proyecto.

No sirve, o sirve con trabajo:

- **No hay grabaciones ni transcripciones.** Las actas las escribieron los estudiantes, resumidas y en tercera persona ("el cliente comentó que..."). Para el asistente hay que reescribirlas como frases dichas por el cliente, y esa reescritura es un sesgo a declarar.
- **Los formatos son viejos:** .odt y .doc hay que convertirlos a texto o markdown, y algunos zips del período 2016-2017 traen nombres de archivo con acentos que se rompen al descomprimir.
- **Lo más rico en actas es 2008-2013 (MUM)**, con lenguaje de casos de uso. Desde 2020 casi no hay actas con el cliente en la muestra.
- **No hay material público de los últimos años**, que son los más parecidos a cómo se trabaja hoy.

## Riesgos

- **Permiso:** el material es accesible sin login, pero no encontré una licencia ni condiciones de uso. Publicarlo no equivale a autorizar reutilizarlo en otra investigación, así que conviene pedir permiso igual. Daniel indicó en la call del 26/11 que, por ser público, no hace falta pedirlo.
- **Privacidad:** los documentos tienen nombres reales de estudiantes, docentes, clientes y empresas (Correo, BPS, Microsoft, Moove-it, entre otros) y detalles de sistemas internos. Para la tesis habría que anonimizar personas y, según lo que diga el curso, también organizaciones; no subir los documentos al repo público de la tesis; y, si se usan con la API de OpenAI, chequear que eso entre en lo autorizado.
- **Realismo:** un cliente que acepta trabajar con estudiantes no es exactamente un cliente de la industria, y los documentos los escribieron estudiantes evaluados por eso. Sirve igual, pero es una limitación a declarar.
- **Que el sitio cambie:** es una página vieja sin mantenimiento aparente. Si se elige un caso, conviene guardar una copia local (fuera del repo público) con la fecha de descarga.

## Recomendación

1. **(Descartado el 26/11: Daniel indicó que no hace falta.)** Pedir permiso al equipo docente actual de PIS para usar con fines de investigación, anonimizado y sin redistribuirlo, el material de la memoria organizacional (sitio público y sección PISAgile del EVA). En el EVA de 2026 los avisos los firman Leticia Pérez y Diego Vallespir; el GrIS (https://www.fing.edu.uy/inco/grupos/gris/) es el grupo responsable. Daniel sugirió la fuente, así que puede hacer el primer contacto.
2. **En el mismo pedido, preguntar por material reciente (2022 a 2026) no publicado**, sobre todo actas de reuniones o sprint reviews con el cliente y backlogs de historias, y si algún cliente o grupo de este año aceptaría una sesión simulada.
3. **Mientras tanto, armar un caso piloto con lo público:** 2009, grupo 9 (Correo, Invenio) para el estilo MUM, y uno de 2016 o 2017 con Scrum para historias de usuario. Para cada uno: especificación, alcance y glosario de una iteración como base, y 10 a 15 enunciados sacados del acta siguiente, con el veredicto esperado según lo que pasó después. Así se puede mostrar en la próxima call qué tan útil es antes de cerrar la validación.
