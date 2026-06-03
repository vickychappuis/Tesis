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

`"generative AI" AND ("business users" OR clients OR stakeholders) AND "software development"`

Por que:

- arXiv tolera mejor una formulacion mas cercana al string academico original.
- Mantiene intactos los tres bloques conceptuales ya definidos.
- El ajuste principal en arXiv deberia venir por el filtro de fecha, no por reescribir demasiado la consulta.

## SSRN

String a usar:

`"generative AI" AND ("business users" OR clients OR stakeholders) AND "software development"`

Por que:

- SSRN admite una busqueda mas cercana al formato academico original.
- Mantiene el foco en GenAI, actores de negocio y desarrollo de software sin introducir terminos nuevos.
- Conviene cambiar lo minimo para conservar comparabilidad con las busquedas anteriores.

## Zenodo

String a usar:

`"generative AI" ("business users" OR clients OR stakeholders) "software development"`

Por que:

- Mantiene los mismos tres bloques conceptuales del string original.
- Se simplifica levemente la sintaxis para una busqueda mas robusta en un repositorio generalista.
- El cambio es minimo: se elimina `AND`, pero se conserva `OR`.
