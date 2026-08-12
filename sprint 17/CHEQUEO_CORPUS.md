# Chequeo del corpus: origen de las referencias de la tabla de categorías (sec. 4 del marco v3)

Para cada referencia citada en la sección 4 (y la 5) del marco: si estaba o no en las listas originales del relevamiento, dónde apareció y con qué clasificación. Fuentes: planillas de los sprints 5, 6, 8, 9, 10 y 11, `REFERENCIAS.xlsx` y `sprint 15/FUENTES_MARCO.md`.

**Veredictos posibles:** ✅ estaba en el corpus/verdes · ⚠️ apareció en el relevamiento y quedó afuera por el corte · ➕ nunca apareció en las búsquedas (entró por otra vía documentada).

## Papers

| Referencia | Sec. | Etiqueta | Veredicto | Detalle |
|---|---|---|---|---|
| Abbasi 2025 (`abbasi2025towards`) | 4.3 | corpus | ✅ | IEEE, verde por título (sprint 5) → corpus final (sprint 8, lote 1) |
| Cabrero-Daniel 2024 (`cabrero2024exploring`) | 4.2 | corpus | ✅ | Springer, verde por título → amarillo por abstract (sprint 6) → resuelto verde → corpus final (sprint 8, lote 1) |
| Kretzer 2025 (`kretzer2025closing`) | 4.4a | corpus | ✅ | ACM, amarillo por título → verde por abstract (con OK de Daniel) → corpus final (sprint 8, lote 1) |
| Robinson 2025 (`robinson2025requirements`) | 4.4b | corpus | ✅ | ACM, amarillo por título → verde por abstract → corpus final (sprint 8, lote 1) |
| Lindenberg 2025 (`lindenberg2025business`) | 4.5 | corpus | ✅ | Springer, verde por título y por abstract → corpus final (sprint 8, lote 1) |
| Mircea 2026 (`mircea2026supporting`) | 4.3 | corpus | ✅ | Forward snowballing (sprint 8/9), aprobado verde → lote 2 |
| Alabsi 2026 (`alabsi2026empirical`) | 4.4a | gris | ✅ | Forward snowballing (sprint 8/9), verde → lote 2. Estaba en la lista: la etiqueta [gris] refleja el tipo (preprint de Research Square), no el origen |
| Geyer 2025 (`geyer2025epics`) | 4.3 | gris | ⚠️ | ACM: amarillo por título (sprint 6) → **rojo por abstract** (sprint 6, también en la columna Daniel); rojo además en el forward snowballing. Reincorporada por literatura gris (sprint 10, lote 3) |
| Torun 2025 (`torun2025bugtracking`) | 4.3 | gris | ⚠️ | ACM: **rojo por título** (sprint 6, no llegó a abstract). Reincorporada por literatura gris (sprint 10, lote 3) |
| Busany 2024 (`busany2024bi`) | 4.4a | gris | ⚠️ | **Rojo en el backward snowballing** (sprint 9: "consulta datos existentes con lenguaje natural, no desarrollo"). Reincorporada por literatura gris (sprint 10, lote 3) |
| Damian 2025 (`damian2025reconnect`) | 4.1 | gris | ✅ | Literatura gris (sprint 10, arXiv) → lote 3. Reapareció en las búsquedas del sprint 11; en la pasada estricta quedó fuera de foco (la GenAI no media el feedback) pero se mantuvo verde como gris |
| Prensa profesional (CIOs / vibe coding) | 4.4b | gris | ✅ | Literatura gris (sprint 10, cio.com, lote 3, fila 18 de `REFERENCIAS.xlsx`) |
| Pirozzi 2024 | 4.1 | gris | ➕ | Exploración temprana (sprints 2-3), antes de la búsqueda sistemática; no salió en ninguna búsqueda formal. Documentada en `FUENTES_MARCO.md` (sprint 15) |
| Cornide-Reyes 2025 | 4.4 | general | ➕ | Uno de los cuatro artículos del tutor (sprint 14); no salió en las búsquedas. En `FUENTES_MARCO.md` |
| Sauvola 2024 | 5 | general | ➕ | Artículo del tutor (sprint 14), base de los escenarios S1–S4; no salió en las búsquedas. En `FUENTES_MARCO.md` |
| Virk 2025, Fawzy 2026, Sharma 2026 | 4.7 | — | ➕ | Búsqueda complementaria del sprint 16 (vocabulario de aceptación); ya cargadas en `REFERENCIAS.xlsx` |

## Productos (4.3, 4.4b, 4.6)

Los ocho (Kraftful, Versive, Emergent, PM Agent, Devin, Codegen, Tusk, Sweep): ✅ relevamiento del sprint 11 (`startups_relacionadas.md`), lote 4 de `REFERENCIAS.xlsx`.

## Lo que responde a la pregunta de la reunión

- **Nada de lo citado en la tabla es ajeno al relevamiento documentado.** Todo entró por una vía registrada: mapeo formal (7), literatura gris (5), productos (8), artículos del tutor (2), exploración temprana (1) o búsqueda complementaria del sprint 16 (3).
- **Los tres casos ⚠️ (Geyer, Torun, Busany) son el escenario que anticipaste**: estaban en las bases y el string los recuperó, pero el screening los dejó afuera (rojo por título, por abstract o en snowballing). Los tres reentraron por la vía de literatura gris del sprint 10. Es el argumento para presentar la revisión como bibliográfica con criterio de corte, sin protocolo SLR estricto.
- **Ninguna referencia de la tabla salió de la nada**: no hay ningún caso de "artículo que la búsqueda debería haber encontrado y no encontró". Los que no aparecieron (Pirozzi, Cornide-Reyes, Sauvola, los tres del sprint 16) entraron por vías que la búsqueda formal no cubría.

## Ajustes menores detectados

- **Alabsi está etiquetada [gris] en el marco pero es lote 2 del mapeo** (verde en el forward snowballing, "Académico" en `REFERENCIAS.xlsx`). Si la etiqueta indica origen, correspondería [corpus]; si indica tipo de publicación (preprint), está bien pero conviene decirlo en la nota de etiquetas.
- **Pirozzi no está en `REFERENCIAS.xlsx`** (solo en `FUENTES_MARCO.md`). Al unificar el `.bib` para la memoria hay que sumarla.
- **Busany**: el descarte del sprint 9 tiene justificación de fondo (el paper es sobre consultar datos, no sobre construir software). Se usa en 4.4a como evidencia de materialización temprana; citarla con esa cautela.
