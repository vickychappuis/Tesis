# Búsqueda del bibliotecario: relevamiento y propuestas

**Fecha:** 06/11/2026 · **Versión navegable:** https://claude.ai/artifact/2nJJCZWgM4YbWMHTv2EUCY

Recomendación: mantener al agente que navega y cita de los originales, sin pasar a RAG, grafos ni responder desde una wiki. Ninguna fuente evalúa esta tarea: lo que sigue se apoya en dominios parecidos. Revisar las cifras contra el original antes de citarlas en la tesis.

## LLM Wiki

LLM Wiki es un [gist de Karpathy](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) (4/4/2026), «idea file» sin mediciones; no es un paper ni es de Google. El paper de Google más cercano es [WikiSkill](https://arxiv.org/abs/2608.27454), que compila trazas de ejecución, no documentación. De la idea se toma compilar un mapa; no se toma responder desde lo compilado.

## Propuestas

### 0. Medir antes de cambiar

**Evidencia:** Medida en otro dominio · **Alcance:** PoC · **Plan:** Ahora

**Qué cambia:** Ampliar `evaluacion/` con un control de todo en contexto (ya existe como fallback), un corpus agrandado con documentos de relleno, enunciados reformulados, transcripciones reales del bot y enunciados sin respuesta generados desde el corpus. Registrar por separado: documentos correctos abiertos, excepción encontrada, veredicto, cita, tiempo p50 y p90, y tokens.

**Por qué:** Ninguna fuente evalúa esta tarea. Con 10 documentos y 15 casos no se puede ver si un cambio mejora la búsqueda o solo el veredicto, ni cómo escala.

**Cómo se mide:** Esta propuesta crea la línea de base de todas las demás.

| Fuente | Tipo | Estado | Qué aporta | Límite |
|---|---|---|---|---|
| [Thorne et al., NAACL 2018](https://arxiv.org/abs/1803.05355) | Revisado por pares | Cotejada | Exigir la evidencia correcta baja el baseline de 50,91% a 31,87%: un veredicto puede acertar por el motivo equivocado. | Es verificación contra Wikipedia. |
| [Peng et al., ACL 2025](https://aclanthology.org/2025.acl-long.415/) | Revisado por pares | Cotejada | Genera seis categorías de consultas sin respuesta desde el propio corpus. Ninguna configuración gana en todos los datasets. | Es un método de evaluación, no de detección. |
| [Hamilton et al., 2026](https://arxiv.org/html/2606.20898v1) | Preprint | Cotejada | Justifica el control: contexto entero 73,1% contra RAG semántico 65,4% (p=0,0049), con 26 veces más costo de tokens. | Dos modelos chicos y juez LLM; el costo excluye el de recuperar. |
| [Sen et al., 2026](https://arxiv.org/abs/2605.15184) | Preprint | Cotejada | Con el mismo modelo, cambiar el harness movió hasta 31,9 puntos (87,1 contra 55,2): hay que comparar dentro del mismo arnés. | La diferencia es un cálculo nuestro sobre sus tablas. |
| [Sidiropoulos et al., CIKM 2022](https://arxiv.org/pdf/2209.12944) | Revisado por pares | Tabla leída | En un subconjunto de NQ, el ruido sintético deja 53,65 y la voz natural 28,55: conviene usar transcripciones reales. | En inglés y con recuperación densa. |

### 1. Tipos con instrucciones y catálogo generado

**Evidencia:** Medida en otro dominio · **Alcance:** PoC y solución conceptual · **Plan:** Ahora

**Qué cambia:** Sacar las rutas fijas de `ARCHIVOS_DOCUMENTACION` (`veredicto.ts`) y las reglas de actas y alcance de `prompt.ts`. Cada espacio tiene un archivo con su descripción de cómo se lee y qué relación guarda con los demás tipos. `INDICE.md` se genera desde los documentos y su historial, y una persona puede corregirlo.

**Por qué:** Es el pendiente del sprint 23: hoy el bibliotecario solo sirve para esta biblioteca. También implementa lo que ya dice la sección 4.3.4 del borrador.

**Cómo se mide:** Que el banco actual siga igual con el catálogo generado, y que funcione con un segundo corpus de otro dominio sin tocar código.

| Fuente | Tipo | Estado | Qué aporta | Límite |
|---|---|---|---|---|
| [Prior, Schultz y Grabmair, 2026](https://arxiv.org/html/2605.23497) | Preprint | Cotejada | Elegir desde un índice (ToC) rindió sin diferencia significativa frente a kNN: 86,96% contra 24,35% sin RAG en Claude Sonnet 3.7, con preguntas posteriores al corte. | Seis leyes alemanas y 312 pares; n=115 en esa condición. |
| [Zhang, Lazuka y Murag, 2025](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) | Proveedor | Cotejada | Define los tres niveles de progressive disclosure, el patrón más parecido al bibliotecario. | Post de proveedor, sin métricas. |
| [Cochran, 2026](https://arxiv.org/html/2607.04576v1) | Preprint | Cotejada | Sobre 709 páginas, navegar con buscador por palabras clave no fue inferior (6,32 contra 6,30) y costó entre 30% y 58% menos. | κ=0,23, por debajo de su umbral de confiabilidad. |
| [Gan et al., 2025](https://arxiv.org/html/2509.14457) | Preprint | Sin cotejar | Las descripciones de LLM dieron MRR 0,925 contra 0,820 de los editores. | Datasets y consultas sintéticas, no agentes eligiendo documentos. |
| [Terrenzi y Ayvaz, 2026](https://arxiv.org/html/2607.05970) | Preprint | Sin cotejar | Una reescritura mejoró lo buscable (0,5766 contra 0,5628) con solo 0,5283 de afirmaciones respaldadas. El catálogo orienta; no se cita. | 37 temas. |
| [McVeety y Hormati, 2026](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md) | Proveedor | Cotejada | Ofrece campos para reutilizar: `sources`, `stale_after`, `status`, `verified`. | Especificación sin resultados. |

### 2. Enlaces entre documentos, aceptados por una persona

**Evidencia:** Medida en otro dominio · **Alcance:** PoC y solución conceptual · **Plan:** Ahora

**Qué cambia:** Al ingresar un documento, el modelo propone relaciones como «esta acta exceptúa este requisito» y una persona las acepta. El original no se reescribe. Al abrir un requisito, el servidor adjunta lo que lo afecta. Cuál rige sale de esa relación aceptada, ya no de la fecha.

**Por qué:** Es el caso más difícil, y ahora depende de que el modelo se acuerde de buscar. También es lo que tomamos de LLM Wiki: compilar un mapa, sin responder desde él. Cierra la diferencia con el borrador, donde la fecha no decide cuál rige.

**Cómo se mide:** Casos 1 y 13, más excepciones nuevas redactadas con otras palabras. Precisión y exhaustividad de los enlaces propuestos, y tiempo de aceptarlos.

| Fuente | Tipo | Estado | Qué aporta | Límite |
|---|---|---|---|---|
| [Rodrigues et al., 2026](https://neurips.cc/virtual/2026/173733) | Taller | Solo resumen | Extraer eventos de enmienda y armar una vista vigente subió de 70,4% a 79,0%. | Leído solo el resumen; 693 resoluciones de ANEEL. |
| [Huwiler, Stockinger y Fürst, 2025](https://arxiv.org/abs/2510.08109) | Preprint | Cotejada | Con un grafo de versiones: 90% contra 58% de RAG. En cambios implícitos: 60% contra 0 a 10%. | DeepSeek-R1; solo 10 preguntas de cambio implícito. |
| [Hey et al., REFSQ 2025](https://publikationen.bibliothek.kit.edu/1000178589/156854596) | Revisado por pares | Tabla leída | Los enlaces entre requisitos llegan a F1 0,451, que los autores consideran insuficiente para automatizar. Por eso los acepta una persona. | No es acta contra requisito: de eso no hay estudios con LLM. |
| [Fuchß et al., AIRE/REW 2025](https://publikationen.bibliothek.kit.edu/1000183058/162509486) | Taller | Tabla leída | Sin embeddings, usando modelos chicos como filtro: precisión 0,25 y exhaustividad 0,77. | Que la revisión humana compense la baja precisión es un argumento, no una medición. |
| [Weller et al., EACL 2024](https://arxiv.org/pdf/2305.07614) | Revisado por pares | Tabla leída | Con pares que difieren por una negación, los recuperadores densos no superan 19,7% (el azar da 25%). Parecido no alcanza para encontrar una excepción. | Mide discriminar pares, no recuperar de un corpus. |
| [Kazemi et al., NeurIPS 2023](https://arxiv.org/abs/2306.07934) | Revisado por pares | Cotejada | La recencia es solo un criterio posible, junto con la credibilidad. | Tarea sintética. |
| [Karpathy, 2026](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) | Propuesta sin medición | Cotejada | Origen de la idea: ingest registra choques y lint busca contradicciones. | Propuesta sin medición. |

### 3. Cierre garantizado y control de ausencia

**Evidencia:** Medida en otro dominio · **Alcance:** PoC y solución conceptual · **Plan:** Ahora

**Qué cambia:** En la última vuelta, el modelo debe responder sin herramientas: hoy el tope devuelve error 502. «No contemplado» exige haber revisado lo mínimo que fije cada tipo, y el servidor lo registra. Se piden lecturas en paralelo con un tope bajo.

**Por qué:** «No contemplado» es tan válido como un choque, y el modelo tiende a responder de más. Hoy el veredicto no muestra qué se revisó para concluir ausencia.

**Cómo se mide:** Enunciados sin respuesta generados con la propuesta 0: tasa de «no contemplado» correcto, falsos «choca», vueltas usadas y tiempo.

| Fuente | Tipo | Estado | Qué aporta | Límite |
|---|---|---|---|---|
| [Xie et al., EACL 2026](https://aclanthology.org/2026.eacl-long.361/) | Revisado por pares | Cotejada | De 0 a 19 búsquedas, la abstención baja de 52,3% a 46,3% y los tokens por acierto pasan de 722 a más de 9.000. La exactitud llega a su máximo hacia 7 búsquedas. | Con o4-mini. Las mitigaciones suben unos 11,5 puntos, con costo en exactitud. |
| [Joren et al., ICLR 2025](https://arxiv.org/abs/2411.06037) | Revisado por pares | Cotejada | Con RAG, los modelos alucinan más de lo que se abstienen. Hay que adaptarlo: ahí lo contradictorio cuenta como insuficiente y para nosotros es un veredicto. | Clasificador con 93% de exactitud sobre 115 casos. |
| [Park, Cho y Lee, 2025](https://arxiv.org/html/2510.14337v1) | Taller | Cotejada | Preguntarle al modelo si parar bajó las vueltas de 10 a 7,6 y 5,0 con F1 casi igual, pero la exhaustividad cayó de 68,2 a 64,5 y de 88,3 a 79,1. | Los autores lo consideran insuficiente: no alcanza como único control. |
| [Jeong et al., NAACL 2024](https://aclanthology.org/2024.naacl-long.389) | Revisado por pares | Cotejada | Enrutar por dificultad evita vueltas: en NQ, 1,00 paso contra 5,04. | FLAN-T5-XL, modelo de 3B. |
| [Pan et al., 2025](https://cognition.com/blog/swe-grep) | Proveedor | Cotejada | Hasta 8 llamadas por turno y 4 turnos, con el cierre fijado por el tope. | Evaluación interna; usa un modelo propio. |
| [Abolnejadian y Brehmer, UIST 2026](https://arxiv.org/html/2608.31115) | Revisado por pares | Sin cotejar | Asistente en reuniones con 7,5 s de media y 29,1 s cuando trae un insight: la gente se siente más informada y se queja de las interrupciones. | N=16. No fija un umbral de tolerancia. |
| [Maslych et al., CUI 2025](https://arxiv.org/html/2507.22352v1) | Revisado por pares | Sin cotejar | Entre 1,5 y 6,5 s de demora, más espera empeora el compromiso y la impresión del agente; los rellenos naturales mejoran la demora percibida. | N=54, agente reactivo en realidad virtual, no en una reunión. |

### 4. Buscar a favor y en contra, por afirmación

**Evidencia:** Hipótesis a probar · **Alcance:** PoC · **Plan:** Después de medir

**Qué cambia:** El bibliotecario separa el enunciado en afirmaciones y busca, para cada una, lo que la confirma y lo que la matiza o exceptúa. Se resuelve en el loop, sin sumar campos al esquema: agrandarlo ya duplicó el tiempo, y por eso existe `lib/corto.ts`.

**Por qué:** Ataca enunciados mixtos (caso 12) y excepciones. Pero nadie midió que buscar excepciones mejore lo recuperado, y hay un resultado en contra.

**Cómo se mide:** Casos 1, 2, 12 y 13, frente a la línea base. Si no mejora con su costo en tiempo, se descarta.

| Fuente | Tipo | Estado | Qué aporta | Límite |
|---|---|---|---|---|
| [Wang, Foulds, Gani y Pan, 2025](https://arxiv.org/html/2503.07937v1) | Preprint | Cotejada | Preguntar si es verdadera y también si es falsa subió de 0,5625 a 0,6667. | Solo dos afirmaciones evaluadas y no cambia lo recuperado. |
| [Liu et al., 2025](https://arxiv.org/html/2506.04583) | Preprint | Sin cotejar | Segmentar la afirmación subió Recall@10 de 42,6 a 49,2. | Wikipedia y afirmaciones adversariales. |
| [Venktesh et al., 2025](https://arxiv.org/html/2510.22055v1) | Preprint | Sin cotejar | Descomposición aplicable en producción: sin mejora en R@10 (0,32 contra 0,31 a 0,32) y algo en R@100 (0,51 contra 0,56). | La mejora grande (0,54) usa un documento que en producción no existe. |
| [Zhao et al., 2024](https://ar5iv.labs.arxiv.org/html/2405.02714) | Preprint | Sin cotejar | Los resultados favorecen lo que apoya la afirmación: 55,6% con BM25 y 66,1% con Contriever, en un corpus balanceado. | Evaluación final con muestras chicas. |
| [Bakke y Heggelund, 2025](https://www.arxiv.org/abs/2506.21745) | Preprint | Solo resumen | En contra: pedir evidencia a favor o en contra cambia los documentos, pero los veredictos quedan estables. | Leído solo el resumen. |
| [Sun, Cohen y Salakhutdinov, ACL 2022](https://aclanthology.org/2022.acl-long.253) | Revisado por pares | Cotejada | Es la forma del problema: con condiciones, el F1 cae a entre 3,4 y 5,8 (humanos: 56,6). | Modelos de 2022. |
| [Hou et al., NeurIPS 2024](https://arxiv.org/abs/2406.13805) | Revisado por pares | Cotejada | Llama-3 con instrucción: 60,0% en conflicto explícito y 17,6% en implícito. Encontrar el documento no alcanza. | Cifra de un modelo. |
| [Min et al., EMNLP 2023](https://arxiv.org/html/2305.14251) | Revisado por pares | Cotejada | Descomponer sirve, pero asume una fuente sin conflictos: no se puede copiar tal cual. | Biografías. |

### 5. Comprobar que la cita sustenta el veredicto

**Evidencia:** Medida en otro dominio · **Alcance:** PoC y solución conceptual · **Plan:** Después de medir

**Qué cambia:** Hoy `route.ts` comprueba que el fragmento exista y que el documento se haya abierto. Se suma un chequeo liviano sobre si el fragmento respalda lo afirmado. Corre después de mostrar el veredicto y marca la cita, para no sumar espera.

**Por qué:** Un fragmento puede ser textual, verdadero y no respaldar el veredicto. La marca «verificada» de hoy puede dar más confianza de la que corresponde.

**Cómo se mide:** Citas verdaderas pero irrelevantes plantadas en el banco: cuántas detecta y cuántas buenas rechaza.

| Fuente | Tipo | Estado | Qué aporta | Límite |
|---|---|---|---|---|
| [Verma, 2026](https://arxiv.org/abs/2608.12571) | Taller | Cotejada | Los modelos confunden tema correcto con sustento: detectan la página equivocada en 37% a 61% de los casos sobre opiniones judiciales. | Dominio legal; los prompts de verificación también suben los falsos positivos. |
| [Gao et al., EMNLP 2023](https://arxiv.org/abs/2305.14627) | Revisado por pares | Cotejada | En ELI5, los mejores modelos carecen de soporte completo en 50% de las respuestas. | Evalúa con NLI en preguntas abiertas. |
| [Slobodkin et al., ACL 2024](https://arxiv.org/html/2403.17104) | Revisado por pares | Sin cotejar | Seleccionar fragmentos antes de generar subió el soporte de 87,6 a 94,4 y bajó la verificación de 59 a 35 s. | En multidocumento baja de 89,3 a 79,9. |
| [Fazelnia et al., RE 2024](https://arxiv.org/html/2405.05135v1) | Revisado por pares | Cotejada | NLI en requisitos da F1 de 22 a 55%, mejor que GPT-3.5 (9 a 30%): no alcanza solo. | No detecta conflictos composicionales. |

### 6. Búsqueda léxica cuando el corpus crezca

**Evidencia:** Medida, con resultados mixtos · **Alcance:** Solución conceptual · **Plan:** Solo si el corpus lo pide

**Qué cambia:** Sumar `buscar_texto`, que devuelve líneas con su documento, y expandir con el glosario del proyecto. La búsqueda semántica entra solo si el banco muestra fallas de vocabulario.

**Por qué:** Con 10 documentos no hace falta. Con el corpus de un cliente, el catálogo deja de alcanzar y la búsqueda léxica es la opción más barata de mantener: un documento nuevo no recalcula nada. El riesgo es el español hablado.

**Cómo se mide:** Corpus agrandado de la propuesta 0, en escalas crecientes: documentos correctos abiertos, tokens y tiempo, con y sin esta herramienta.

| Fuente | Tipo | Estado | Qué aporta | Límite |
|---|---|---|---|---|
| [Wang et al., 2026](https://arxiv.org/html/2607.26497) | Preprint | Cotejada | En 1.144 documentos: agente de archivos 77,4, BM25 74,7, denso 58,1. BM25 usa 5,8K tokens contra 226K y lidera desde unos 10M de tokens. | Preprint. La prueba pareada da 5,73 [−11,57; 0,15] y el harness del agente es de los autores. |
| [Sen et al., 2026](https://arxiv.org/abs/2605.15184) | Preprint | Cotejada | Con entrega inline, grep gana los 10 pares; con entrega programática, vector gana 5 de 10. | Los autores aclaran que no afirman que grep gane en general. |
| [Subramanian et al., 2025](https://arxiv.org/abs/2602.23368) | Preprint | Cotejada | Palabras clave frente a RAG: fidelidad 94,5%, exhaustividad 88,1% y corrección 91,5%. | Afiliación AWS, sobre su plataforma. |
| [Valentini et al., EMNLP 2025](https://arxiv.org/html/2409.05994) | Revisado por pares | Cotejada | En español: BM25 0,179 contra 0,476 de un modelo denso. El paper lo comenta sobre consultas coloquiales. Es el contrapeso más serio. | Wikipedia, 14M de párrafos, no documentación de proyecto. |
| [Heule, Jia y Jain, 2025](https://cursor.com/blog/semsearch) | Proveedor | Cotejada | Contrapeso: 12,5% más de exactitud offline con semántica (6,5 a 23,5%). | Benchmark propio; código, no documentos. |
| [Du et al., 2026](https://arxiv.org/abs/2602.03442) | Preprint | Cotejada | Permite dar ambas herramientas al modelo; con GPT-5-mini, MuSiQue 74,1 y HotpotQA 94,5. | Resultados de los autores, con índice por oración. |
| [Abe et al., SIGIR 2025](https://arxiv.org/html/2505.12694v1) | Revisado por pares | Sin cotejar | La expansión con LLM ayuda si el modelo conoce el tema (+4,00) y daña si no (−1,13): conviene anclarla al glosario. | Orden de la tabla inferido; en inglés. |
| [Bao, 2026](https://arxiv.org/html/2608.22872) | Preprint | Cotejada | Las entidades mal transcriptas explican de 54% a 96% de las degradaciones. Las mitigaciones recuperan 11,1% como máximo. | Inglés, voz sintética, etiquetas no excluyentes. |

## Las familias contra los filtros

Juicio a partir de las fuentes, no una medición.

| Familia | Encuentra lo que matiza | Puede concluir ausencia | Cita literal | En vivo | Se adapta a cambios | Escala | Entra en noviembre |
|---|---|---|---|---|---|---|---|
| Contexto entero | A medias | Sí | Sí | A medias | Sí | No | Sí |
| Bibliotecario de hoy | A medias | A medias | Sí | Sí | A medias | A medias | Sí |
| Agente con búsqueda léxica | A medias | A medias | Sí | A medias | Sí | Sí | Sí |
| Híbrido con reranking | A medias | A medias | Sí | Sí | A medias | Sí | A medias |
| Grafos (GraphRAG, LightRAG) | A medir | No | A medias | A medias | No | A medias | No |
| Wiki como fuente de la respuesta | No | A medir | A medias | No | A medias | A medias | No |
| Propuesta: catálogo, enlaces y originales | A medir | A medir | Sí | A medir | A medias | A medias | Sí |

## Lo que no entra

- **Wiki como fuente de la respuesta.** Compilar sin control perdió hechos: 2,14 a 2,32 contra 3,46 del texto crudo, con 53% a 60% de fallos catastróficos (el crudo, 17%). La corrección de Cochran invirtió su ventaja en afirmaciones sustentadas: wiki 41,5%, RAG 53,8%, sin diferencia establecida en la muestra humana. La versión de Tencent tarda de 14,9 a 27,1 s por pregunta. ([Huerta, 2026](https://arxiv.org/abs/2605.07068), [Cochran, 2026](https://arxiv.org/html/2605.18490v1), [Ming et al., 2026](https://arxiv.org/html/2605.25480v2))
- **Grafos (GraphRAG, LightRAG).** En consultas sin respuesta, RAG acertó 96,01% y GraphRAG global 19,27% (91,36% con otro modelo). En 1.144 documentos, LightRAG 48,0 y MS-GraphRAG 45,9. Ausencia es un veredicto nuestro. ([Han et al., 2025](https://arxiv.org/html/2502.11371v3), [Wang et al., 2026](https://arxiv.org/html/2607.26497))
- **Embeddings como única vía.** Denso 58,1 en Wang y 0,587 de recall@5 en T2, y falla con negaciones. No se descarta para siempre: en español coloquial superó a BM25. ([Wang et al., 2026](https://arxiv.org/html/2607.26497), [Akarsu et al., 2026](https://arxiv.org/html/2604.01733v1), [Weller et al., EACL 2024](https://arxiv.org/pdf/2305.07614), [Valentini et al., EMNLP 2025](https://arxiv.org/html/2409.05994))
- **HyDE y multi-query.** En T2 rinden 0,544 y 0,640, por debajo de BM25 (0,644) y agregan una llamada al modelo. ([Akarsu et al., 2026](https://arxiv.org/html/2604.01733v1))
- **Fragmentación y Contextual Retrieval.** Los documentos son cortos, y la propia fuente sugiere incluir toda la base por debajo de 200K tokens. Se revisa con la propuesta 6. ([Anthropic, 2024](https://www.anthropic.com/news/contextual-retrieval))
- **Debate entre agentes.** Un agente por documento, con rondas, multiplica las llamadas en un uso que corre en vivo. ([Wang et al., COLM 2025](https://arxiv.org/abs/2504.13079v2))
- **Modelos que requieren entrenamiento.** SparseCL y el controlador de Stop-RAG necesitan datos de pares o trayectorias que no tenemos. ([Xu et al., ICML 2025](https://arxiv.org/html/2406.10746v1), [Park, Cho y Lee, 2025](https://arxiv.org/html/2510.14337v1))
- **Invalidar lo viejo por fecha.** Zep da prioridad a lo nuevo, justo lo que el borrador no permite asumir. ([Rasmussen et al., 2025](https://arxiv.org/html/2501.13956v1), [Cattan et al., 2025](https://arxiv.org/html/2506.08500v2))
- **Prebúsqueda especulativa.** Ahorra 110 ms de recuperación, invisible frente a un modelo que tarda segundos, según sus propios autores. ([Qiu et al., 2026](https://arxiv.org/html/2603.02206v2))
- **PageIndex.** Pensado para documentos largos. El 98,7% lo obtuvo Mafin 2.5, del mismo proveedor, con anotación humana en casos ambiguos. ([Zhang y Tang, 2025](https://github.com/VectifyAI/PageIndex))
- **WikiSkill como técnica.** Compila trazas de ejecución en skills y la wiki se usa durante la evolución, no al responder. No trata documentación. ([Tang et al., 2026](https://arxiv.org/abs/2608.27454))

## Lo que nadie midió

Resultados de búsquedas acotadas, no prueba de que no exista.

- Confrontación en vivo de lo que dice un cliente contra una línea base documental.
- Actas que modifican requisitos: no hay estudios con LLM ni datasets.
- Consultas habladas en español, y documentación de proyecto en español.
- Mediciones de que buscar excepciones o reformular en negativo mejore lo recuperado.
- Recuperación que resuelva cuál norma rige por especialidad, y no por fecha.
- Citas literales verificadas contra el original en una wiki compilada.
- Un umbral de demora tolerable para un veredicto documental en una reunión.
- Costo medido de reindexar al actualizar o borrar un documento.

## Fuentes

Cotejada: una segunda lectura contrastó la cifra con el original. Tabla leída: se leyó la tabla, sin segunda lectura. Sin cotejar: la cifra pasó por un extractor automático. Solo resumen: no se leyó el cuerpo.

| Fuente | Sobre | Tipo | Estado |
|---|---|---|---|
| [Abe et al., SIGIR 2025](https://arxiv.org/html/2505.12694v1) | Expansión de consultas con LLM | Revisado por pares | Sin cotejar |
| [Abolnejadian y Brehmer, UIST 2026](https://arxiv.org/html/2608.31115) | InsightToast: asistencia en reuniones | Revisado por pares | Sin cotejar |
| [Akarsu et al., 2026](https://arxiv.org/html/2604.01733v1) | From BM25 to Corrective RAG, sobre T2-RAGBench | Preprint | Cotejada |
| [Anthropic, 2024](https://www.anthropic.com/news/contextual-retrieval) | Contextual Retrieval | Proveedor | Cotejada |
| [Bakke y Heggelund, 2025](https://www.arxiv.org/abs/2506.21745) | Perspectivas a favor y en contra en recuperación | Preprint | Solo resumen |
| [Bao, 2026](https://arxiv.org/html/2608.22872) | Errores de transcripción y recuperación (EMNLP 2026 según arXiv) | Preprint | Cotejada |
| [Cattan et al., 2025](https://arxiv.org/html/2506.08500v2) | CONFLICTS: tipos de conflicto en RAG | Preprint | Cotejada |
| [Cochran, 2026](https://arxiv.org/html/2605.18490v1) | Wiki frente a RAG, preregistrado; v3 con corrección | Preprint | Cotejada |
| [Cochran, 2026](https://arxiv.org/html/2607.04576v1) | Progressive disclosure en una wiki de 709 páginas | Preprint | Cotejada |
| [Du et al., 2026](https://arxiv.org/abs/2602.03442) | A-RAG: herramientas de búsqueda elegidas por el modelo | Preprint | Cotejada |
| [Fazelnia et al., RE 2024](https://arxiv.org/html/2405.05135v1) | NLI en ingeniería de requisitos | Revisado por pares | Cotejada |
| [Fuchß et al., AIRE/REW 2025](https://publikationen.bibliothek.kit.edu/1000183058/162509486) | Modelos chicos como filtro de enlaces | Taller | Tabla leída |
| [Gan et al., 2025](https://arxiv.org/html/2509.14457) | Descripciones de datasets por LLM y por editores | Preprint | Sin cotejar |
| [Gao et al., EMNLP 2023](https://arxiv.org/abs/2305.14627) | ALCE: evaluación de citas | Revisado por pares | Cotejada |
| [Hamilton et al., 2026](https://arxiv.org/html/2606.20898v1) | Contexto entero frente a RAG semántico en 3 manuales | Preprint | Cotejada |
| [Han et al., 2025](https://arxiv.org/html/2502.11371v3) | RAG frente a GraphRAG | Preprint | Cotejada |
| [Heule, Jia y Jain, 2025](https://cursor.com/blog/semsearch) | Búsqueda semántica en Cursor | Proveedor | Cotejada |
| [Hey et al., REFSQ 2025](https://publikationen.bibliothek.kit.edu/1000178589/156854596) | Enlaces de trazabilidad entre requisitos con LLM | Revisado por pares | Tabla leída |
| [Hou et al., NeurIPS 2024](https://arxiv.org/abs/2406.13805) | WikiContradict | Revisado por pares | Cotejada |
| [Huerta, 2026](https://arxiv.org/abs/2605.07068) | WiCER: compilación de wikis con sondas | Preprint | Cotejada |
| [Huwiler, Stockinger y Fürst, 2025](https://arxiv.org/abs/2510.08109) | VersionRAG | Preprint | Cotejada |
| [Jeong et al., NAACL 2024](https://aclanthology.org/2024.naacl-long.389) | Adaptive-RAG | Revisado por pares | Cotejada |
| [Joren et al., ICLR 2025](https://arxiv.org/abs/2411.06037) | Sufficient Context | Revisado por pares | Cotejada |
| [Karpathy, 2026](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) | LLM Wiki, gist «idea file» | Propuesta sin medición | Cotejada |
| [Kazemi et al., NeurIPS 2023](https://arxiv.org/abs/2306.07934) | BoardgameQA: razonamiento rebatible | Revisado por pares | Cotejada |
| [Liu et al., 2025](https://arxiv.org/html/2506.04583) | SuCEA: segmentar y recuperar afirmaciones | Preprint | Sin cotejar |
| [Maslych et al., CUI 2025](https://arxiv.org/html/2507.22352v1) | Demoras de un agente conversacional | Revisado por pares | Sin cotejar |
| [McVeety y Hormati, 2026](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md) | Open Knowledge Format, especificación v0.2 (Google Cloud) | Proveedor | Cotejada |
| [Min et al., EMNLP 2023](https://arxiv.org/html/2305.14251) | FActScore: hechos atómicos | Revisado por pares | Cotejada |
| [Ming et al., 2026](https://arxiv.org/html/2605.25480v2) | LLM-Wiki / Retrieval as Reasoning (Tencent) | Preprint | Cotejada |
| [Pan et al., 2025](https://cognition.com/blog/swe-grep) | SWE-grep (Cognition) | Proveedor | Cotejada |
| [Park, Cho y Lee, 2025](https://arxiv.org/html/2510.14337v1) | Stop-RAG, taller de NeurIPS 2025 | Taller | Cotejada |
| [Peng et al., ACL 2025](https://aclanthology.org/2025.acl-long.415/) | UAEval4RAG | Revisado por pares | Cotejada |
| [Prior, Schultz y Grabmair, 2026](https://arxiv.org/html/2605.23497) | RAG-kNN y RAG-ToC en leyes alemanas (ICAIL 2026, autodeclarado) | Preprint | Cotejada |
| [Qiu et al., 2026](https://arxiv.org/html/2603.02206v2) | VoiceAgentRAG: prebúsqueda en agentes de voz | Preprint | Cotejada |
| [Rasmussen et al., 2025](https://arxiv.org/html/2501.13956v1) | Zep: grafo temporal para memoria (autores del proveedor) | Preprint | Cotejada |
| [Rodrigues et al., 2026](https://neurips.cc/virtual/2026/173733) | Temporal-Aware RAG, taller de NeurIPS 2026 | Taller | Solo resumen |
| [Sen et al., 2026](https://arxiv.org/abs/2605.15184) | Grep frente a vectores en agentes | Preprint | Cotejada |
| [Sidiropoulos et al., CIKM 2022](https://arxiv.org/pdf/2209.12944) | Errores de transcripción en recuperación densa | Revisado por pares | Tabla leída |
| [Slobodkin et al., ACL 2024](https://arxiv.org/html/2403.17104) | Seleccionar fragmentos antes de generar | Revisado por pares | Sin cotejar |
| [Subramanian et al., 2025](https://arxiv.org/abs/2602.23368) | Búsqueda por palabras clave en agentes (AWS) | Preprint | Cotejada |
| [Sun, Cohen y Salakhutdinov, ACL 2022](https://aclanthology.org/2022.acl-long.253) | ConditionalQA: respuestas válidas bajo condiciones | Revisado por pares | Cotejada |
| [Tang et al., 2026](https://arxiv.org/abs/2608.27454) | WikiSkill (Google Research) | Preprint | Cotejada |
| [Terrenzi y Ayvaz, 2026](https://arxiv.org/html/2607.05970) | Reescritura de documentos: buscable frente a fiel | Preprint | Sin cotejar |
| [Thorne et al., NAACL 2018](https://arxiv.org/abs/1803.05355) | FEVER | Revisado por pares | Cotejada |
| [Valentini et al., EMNLP 2025](https://arxiv.org/html/2409.05994) | MessIRve: recuperación en español | Revisado por pares | Cotejada |
| [Venktesh et al., 2025](https://arxiv.org/html/2510.22055v1) | QuanTemp++: descomposición de afirmaciones | Preprint | Sin cotejar |
| [Verma, 2026](https://arxiv.org/abs/2608.12571) | Is this Citation on Point?, taller de ICML 2026 | Taller | Cotejada |
| [Wang et al., 2026](https://arxiv.org/html/2607.26497) | BM25 Wins at Scale: comparación de recuperadores de 1.144 a 511.959 documentos | Preprint | Cotejada |
| [Wang et al., COLM 2025](https://arxiv.org/abs/2504.13079v2) | MADAM-RAG: debate entre agentes | Revisado por pares | Sin cotejar |
| [Wang, Foulds, Gani y Pan, 2025](https://arxiv.org/html/2503.07937v1) | CIBER: preguntar si la afirmación es verdadera y si es falsa | Preprint | Cotejada |
| [Weller et al., EACL 2024](https://arxiv.org/pdf/2305.07614) | NevIR: la negación en recuperación | Revisado por pares | Tabla leída |
| [Xie et al., EACL 2026](https://aclanthology.org/2026.eacl-long.361/) | Over-searching | Revisado por pares | Cotejada |
| [Xu et al., ICML 2025](https://arxiv.org/html/2406.10746v1) | SparseCL: recuperar contradicciones | Revisado por pares | Sin cotejar |
| [Zhang y Tang, 2025](https://github.com/VectifyAI/PageIndex) | PageIndex | Proveedor | Cotejada |
| [Zhang, Lazuka y Murag, 2025](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) | Agent Skills | Proveedor | Cotejada |
| [Zhao et al., 2024](https://ar5iv.labs.arxiv.org/html/2405.02714) | Recuperación con perspectiva | Preprint | Sin cotejar |
