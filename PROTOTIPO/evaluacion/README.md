# Evaluación del prototipo

Set de 12 enunciados de cliente con veredicto esperado, para medir la calidad del clasificador contra la documentación de `../documentacion/`. Cubre los cuatro tipos de veredicto e incluye casos trampa (matices entre acta y requisito, afirmaciones del presente vs pedidos a futuro, frases mixtas y sobre-clasificación).

## Cómo correrlo

1. Levantar el servidor de desarrollo de la app (`npm run dev` en `../app`).
2. Correr el set:

```
node run.mjs
```

Opciones:

- `--base http://localhost:3000` para apuntar a otra base.
- `--solo 1,2,3` para correr un subconjunto de casos.

Sale con código 0 si todo pasó y 1 si algo falló.

## Qué mide cada check

- **tipos**: el tipo devuelto coincide con `tipo_esperado` o con alguno de `tipos_alternativos`.
- **citas verificables**: cada `fragmento_textual` citado aparece literal (normalizando espacios) en el archivo real de `../documentacion/`.
- **invariantes**: `choca` trae pregunta al cliente, `no_contemplado` trae prioridad (y solo ese tipo la trae), `no_accionable` no trae citas, y los casos con `pregunta_obligatoria` traen pregunta.
- **debe_citar**: las citas incluyen al menos los archivos listados en el caso.

## Nota sobre la varianza

Conviene correr el set 2 o 3 veces: el veredicto lo produce un modelo generativo y la varianza entre corridas es, en sí misma, un dato del prototipo.
