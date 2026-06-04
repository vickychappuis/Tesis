# Sprint 10 - Literatura gris

## Objetivo

Buscar literatura gris desde 2023 en adelante usando el mismo string base del trabajo, adaptado lo minimo necesario segun el buscador.

## String original

`"generative AI" AND ("business users" OR clients OR stakeholders) AND "software development"`

## Google Search

String a usar:

`"generative AI" ("business users" OR clients OR stakeholders) "software development"`

Por que:

- Mantiene exactamente los mismos tres bloques conceptuales del string original.
- Se elimina `AND` porque Google Search ya toma los espacios como conjuncion implicita.
- Se conserva `OR` porque si cambia la logica de la busqueda.

Filtro:

- Restringir resultados a 2023 en adelante.

## arXiv

String a usar:

`generative AI stakeholders software development`

Por que:

- Mantiene los conceptos centrales de GenAI, stakeholders y desarrollo de software.
- En la practica, arXiv devolvio resultados con una consulta mas simple y sin logica booleana estricta.

Observacion:

- Con comillas no estaba tomando bien la consulta y no devolvia resultados.

## SSRN

String a usar:

`"generative AI" AND ("business users" OR clients OR stakeholders) AND "software development"`

Por que:

- SSRN admite una busqueda mas cercana al formato academico original.
- Mantiene el foco en GenAI, actores de negocio y desarrollo de software sin introducir terminos nuevos.
- Conviene cambiar lo minimo para conservar comparabilidad con las busquedas anteriores.

Configuracion de busqueda:

- Buscar en `Title, Abstract & Keywords`.
- Date: `Last 3 Years`.
- Sort by: `Relevancy`.

Observacion:

- La opcion `Title, Abstract, Keywords & Full Text` devuelve demasiados resultados para procesar de forma razonable.
- Se mantiene el mismo string, pero se acota el campo de busqueda para mejorar la precision y la manejabilidad de los resultados.

Resultado observado:

- SSRN muestra `10000` resultados.

## Zenodo

String a usar:

`"generative AI" ("business users" OR clients OR stakeholders) "software development"`

Por que:

- Mantiene los mismos tres bloques conceptuales del string original.
- Se simplifica levemente la sintaxis para una busqueda mas robusta en un repositorio generalista.
- El cambio es minimo: se elimina `AND`, pero se conserva `OR`.

Resultado observado:

- Zenodo devolvio 761 resultados con esta configuracion.

Filtros aplicados:

- Publication date: 2023 a 2026.
- Access status: Open.
- Resource types: Publication, Software e Image.
- Subjects: Generative AI y generative AI.
- File type: PDF.
