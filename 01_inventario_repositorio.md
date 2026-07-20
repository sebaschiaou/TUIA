# Inventario del repositorio (alcance: 1er a 3er cuatrimestre)

El repo tiene ~1150 archivos; los apuntes legibles viven en `_md/` (373
convertidos a Markdown con marcadores de página/slide) y el mapa general es
`_md/INDICE.md`. Este inventario lista lo **relevante para la presentación**,
con utilidad y confianza. Lo no listado (Lógica completa, PSE, Redes U1-U8,
parciales, PyE U3-U6) existe y está indexado, pero no aporta al hilo.

| Materia (cuatri) | Directorio | Contenido | Tema principal | Utilidad | Conf. |
|---|---|---|---|---|---|
| Programación 1 (1º) | `1er Cuatrimestre/Programación 1/` | TPs del proyecto, parciales | Python básico, estructuras | Slide 3 (representación) | Media (TPs propios, poco teórico) |
| Entornos de Programación (1º) | `1er .../Entornos de Programación/Apunte/` | apunte.pdf 252 pág. | terminal, git, entornos | Contexto general; no entra en slides | Alta |
| Lógica (1º) | `1er .../Lógica/` | 50 apuntes: proposicional, conjuntos, relaciones, funciones | fundamentos formales | Mención opcional (relaciones ↔ modelo relacional) | Alta |
| Intro IA (2º) | `2do .../Intro IA/` | Unidad 6 PLN; TP robótica (guiones propios: `GUION SEBA`, `Guion Turk`); TP Ética; quizzes (OCR) | agentes, PLN, LLM/VLM | Acto 5 (anclaje); guiones = voz propia | Alta |
| Programación 2 (2º) | `2do .../Programación 2/` | POO, recursión, complejidad, TADs, árboles, grafos (apuntes + prácticas + parciales) | estructuras de datos | Slides 3, 5, 16 (cola de prioridad) | Alta |
| PSE (2º) | `2do .../PSE/` | planificación estratégica | — | No entra (fuera del hilo técnico) | — |
| Probabilidad y Estadística (3º) | `3er .../IA 3.1_...` | Capítulos 1-2, unidades 4-6, TP grupal | descriptiva, probabilidad, inferencia | Apoyo slide 12 (población/muestra) | Alta |
| Programación III (3º) | `3er .../IA 3.2_...` | Teoría 0-7 completa; práctica con soluciones (laberinto, viajante, monedas, río); parciales con solución; TP | búsqueda, heurísticas, CSP, optimización | **Acto 4 entero** (slides 15-17) | Alta |
| Bases de Datos II (3º) | `3er .../IA 3.3_...` | Unidades 0-7 (DW, OLAP, explotación, NoSQL, otras fuentes, otros modelos); práctica estrella; TP final + entrega SSIS | DW, estrella, ETL, NoSQL, ACID/CAP/BASE | **Actos 2 y 3** (slides 8-14) | Alta |
| Fundamentos de Ciencia de Datos (3º) | `3er .../IA 3.4_...` + carpeta raíz duplicada | Unidades 1-7: planilla, manipulación (pandas), EDA resumen, EDA visualización, transformación, ajuste, métodos av.; TP; parciales | pandas, EDA, limpieza | Slides 4, 12 | Alta |
| Redes de Datos (3º) | `3er .../IA 3.5_...` | Unidades 1-10; U9 formato de datos; U10 REST API; TP integrador | JSON/XML/YAML, APIs | Slide 4 | Alta |
| **Bases de Datos I** (cursada 2SEM2025) | `Bases de Datos I (clases sueltas)/` | 9 PDFs de clase (C2 clases 1-3, 5-7 + Com1 clases 5-7 de SQL) — **incorporados desde Downloads durante este trabajo** | modelo relacional, SGBD, claves, SQL; programa con normalización (U3) | **Slides 6-7, 13** | Media-alta (falta la clase con el desarrollo de formas normales) |

## Observaciones del inventario

- **BD I no estaba en el repo**: sus clases estaban sueltas en `Downloads/`.
  Se copiaron a `Bases de Datos I (clases sueltas)/` y se convirtieron a
  `_md/`. Las clases disponibles (1-3, 5-7) cubren modelo relacional y SQL;
  la clase con el **desarrollo** de normalización (U3) no está descargada —
  el programa sí la documenta (ver `08_conceptos_pendientes.md`).
- **Duplicados conocidos**: `Fundamentos de Ciencia de Datos/` y
  `Programacion III/` existen en la raíz además de bajo `3er Cuatrimestre/`
  (mismo contenido). Se citó siempre la copia bajo `3er Cuatrimestre/`.
- **OCR**: los apuntes escaneados (cuestionarios, quizzes, parciales
  resueltos) pasaron por OCR; los de baja calidad llevan aviso en su
  frontmatter. Ninguna slide depende de un OCR dudoso.
- **Material propio (voz de los presentadores)**: `GUION SEBA.md` (IA
  generativa, robótica), `Guion Turk.md` (NLP/LLM/VLM), informes de TP,
  entrega del TP de BDD II. Se usaron para calibrar tono y para el anclaje
  del Acto 5.
