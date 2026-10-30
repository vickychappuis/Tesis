# Frameworks de documentación de proyectos de software

Pregunta: existe un "Scrum de la documentación"? No. El mapa está fragmentado por tipo de documento y ningún framework domina. Ficha visual con diagramas y ejemplos mockeados por documento: https://claude.ai/code/artifact/5b0bbd00-f4df-484e-ba1c-60ec2bcd43ac

## El mapa

- Requerimientos: ISO/IEC/IEEE 29148, Volere, BABOK (antes IEEE 830, retirado 2011)
- Arquitectura: arc42, C4 model, ADRs
- Docs de producto: Diátaxis, docs-as-code
- Filosofía ágil: Agile Modeling (Ambler), ISO/IEC/IEEE 26515
- En la práctica ninguna empresa adopta uno completo: convenciones propias en Confluence/Jira

## ISO/IEC/IEEE 29148 (2018)

- Define la cadena BRS (negocio) → StRS (stakeholders) → SyRS (sistema) → SRS (software)
- Adopción medida baja (Franch et al. 2021, 90 profesionales de RE): 45% no lo conoce, solo 14% lo usa siempre, 25% lo conoce y no lo usa
- El IEEE 830, retirado, se usa más que su sucesor (21% lo usa siempre)
- Quien lo usa es por decisión personal (51%), no por mandato (33%)
- Vive en plantillas de herramientas (ReqView, Jama) y como referencia de fondo en regulados, donde mandan los estándares de dominio (ISO 26262, DO-178C, IEC 62304)

## Volere (1995, edición 20)

- Plantilla de los Robertson: documento único del alcance a los riesgos, cada requerimiento en una snow card con fit criterion (medida de aceptación)
- Canónica en enseñanza y literatura: 4 ediciones del libro Mastering the Requirements Process (última 2024), plantilla en ReqView, vara de comparación en papers hasta 2025
- Adopción industrial auto-reportada ("miles de organizaciones", "20.000 descargas"): ningún estudio independiente la midió

## Agile Modeling (Ambler)

- No inventa documentos: toma los de siempre (visión, requerimientos, diseño, manuales) y dice cuándo y cuánto escribirlos
- Principios: document late, just barely good enough, single source, travel light, update only when it hurts, la documentación es un requerimiento que el stakeholder decide pagar
- Su survey de 2008 (279 encuestados): los equipos ágiles producen tanta documentación entregable como los tradicionales y modelan más; "ágil sin documentación" es mito

## Números de adopción por artefacto

- User stories: 99% de los equipos Scrum las usa, 70% con la plantilla "Como... quiero... para..." (Lucassen et al. 2016, 182 practicantes de user stories)
- Plantilla de user story como forma de documentar requerimientos: 35% (NaPiRE 2018, 228 empresas, multi-respuesta)
- Criterios de aceptación: 53% los define (NaPiRE)
- Casos de uso: 30 a 39% según formato (NaPiRE)
- Listas estructuradas de requerimientos: 42%, lo más usado (NaPiRE)
- Trazabilidad requerimiento-código: 45% la gestiona explícitamente; 21% no gestiona trazas (NaPiRE)
- Definition of Done: 64% acuerda un "Done" común (State of Scrum 2015, ~5.000 practicantes); la Scrum Guide 2020 lo hace obligatorio, la Definition of Ready no figura en la guía
- Estándares de RE en la práctica: solo 17% de 24 entrevistados en 12 empresas nombró alguno; plantillas propias generalizadas (Franch et al. 2023)

## Sin porcentaje medido, con referencia canónica

- PRD: ningún reporte de product management lo mide; lo canoniza Cagan (SVPG, How To Write a Good PRD); Amazon documenta su alternativa PR/FAQ
- Actas y registro de decisiones: PMBOK apenas las roza; la forma formalizada son los ADRs, en "Adopt" del Technology Radar de ThoughtWorks desde 2017
- Glosario: técnica 10.23 de BABOK, sección 12 de arc42, ubiquitous language de DDD; el SRS de ISO 29148 exige sección de definiciones

## Lectura para la PoC

- Los artefactos informales (actas, glosario) son los que ningún survey mide y donde el prototipo planta sus trampas: la regla que queda solo en un acta y el glosario desactualizado reproducen fallas reales de la práctica
- Candidatos citables con N y venue verificados: Franch et al. 2021 (TSE), NaPiRE (TOSEM 2019), Lucassen et al. (REFSQ 2016), Franch et al. 2023 (REJ)

## Fuentes

- Franch et al., A Study about the Knowledge and Use of RE Standards in Industry (TSE 2021): https://arxiv.org/abs/2105.13961
- Wagner et al., Status Quo in Requirements Engineering (NaPiRE): https://arxiv.org/pdf/1805.07951
- Lucassen et al., The Use and Effectiveness of User Stories in Practice (REFSQ 2016): https://webspace.science.uu.nl/~dalpi001/papers/luca-dalp-werf-brin-16-refsq.pdf
- Franch et al., The state-of-practice in requirements specification (REJ 2023): https://link.springer.com/article/10.1007/s00766-023-00399-7
- ISO/IEC/IEEE 29148:2018: https://www.iso.org/standard/72089.html
- Volere: https://www.volere.org/templates/volere-requirements-specification-template/
- Ambler, Agile/Lean Documentation: https://agilemodeling.com/essays/agileDocumentationBestPractices.htm
- Ambler, Modeling and Documentation Survey 2008: http://www.ambysoft.com/surveys/modelingDocumentation2008.html
- State of Scrum 2015 (Scrum Alliance): https://www.projectmanagement.com/pdf/StateofScrum2015BenchmarkStudy_FINAL.pdf
- Scrum Guide 2020: https://scrumguides.org/scrum-guide.html
- Cagan, How To Write a Good PRD (SVPG): https://svpg.com/assets/Files/goodprd.pdf
- ThoughtWorks Radar, Lightweight ADRs: https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records
- BABOK 10.23 Glossary (IIBA): https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/10-techniques/10-23-glossary/
