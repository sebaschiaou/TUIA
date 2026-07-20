# Revisión conceptual — correcciones, precisiones y ampliaciones

Qué se verificó, qué se corrigió y qué se decidió NO decir. Es el control de
calidad académico previo a las slides.

## Correcciones aplicadas durante la preparación

1. **CAP.** Formulación cuidada en slide 14 y guion: *"ante una partición de
   red, hay que elegir qué sacrificar mientras tanto"*. Se evita el meme
   "elegí 2 de 3" como propiedad permanente: sin partición, C y A conviven.
2. **NoSQL ≠ reemplazo de SQL.** El propio apunte (U4) habla de
   "flexibilización de restricciones de coherencia" para cargas específicas.
   La slide lo dice explícito: "negocia garantías por escala y flexibilidad;
   la elección depende de la carga". Nunca se dice que SQL "deja de servir".
3. **NoSQL ≠ sin integridad.** Se presenta como compromisos distintos
   (consistencia/disponibilidad/latencia/esquema), no como pérdida de
   integridad en bloque.
4. **Historial: tres estrategias que no son equivalentes.** Estado actual /
   registrar eventos / actual + historial se presentan como contratos
   distintos con costos distintos (slide 11). Los nombres "SCD" y "event
   sourcing" NO se atribuyen a la cursada: van como ampliación declarada.
5. **Heurística admisible.** Definición correcta: *no sobreestima* el costo
   real restante. En el guion de Seba quedó la muletilla correcta ("nunca
   estima de más"). Ojo en el ensayo: es fácil decirlo al revés.
6. **Greedy/monedas.** El primer borrador del guion mezclaba los números; se
   corrigió al caso explícito del práctico: dar 6 con {1,3,4} → greedy 4+1+1
   (3 monedas) vs. óptimo 3+3 (2 monedas).
7. **Granularidad.** Se usa la fila-frase textual del apunte de OLAP
   (cliente 112920…) en vez de una definición abstracta.
8. **Tokens.** Sin detalles matemáticos (el prompt lo pedía): "pedazos de
   texto, no palabras exactas, no viene al caso el detalle".

## Diferencias entre apuntes y formulación final

- **"Datos vs. información"** aparece dos veces en el material con matices
  distintos (BD I Clase 1 p.18: dato=valor, información=significado; BDD II
  U1 p.4 agrega "conocimiento"). La presentación usa la versión simple.
- **ETL**: el apunte de BDD II define DWH como "extracción, limpieza,
  transformación, control y carga" — 5 verbos. La sigla ETL de 3 se mantiene
  por convención, y "limpieza/control" se cuentan dentro de la T y la
  Validación del diagrama.
- **El laberinto de la slide 16 (BFS vs A*)**: la grilla y el camino óptimo
  son los del práctico; el *orden de expansión* pintado es ilustrativo (el
  apunte no trae esa traza). Está rotulado "esquema ilustrativo" en la slide.

## Conceptos SIN respaldo en el repo (ampliaciones declaradas)

Cada uno lleva el sello "ampliación" en la slide y en el pie de fuente:

| Concepto | Dónde aparece | Anclaje más cercano en apuntes |
|---|---|---|
| Prompt engineering (5 elementos, ejemplos débil/mejorado) | Slides 18-19 | Intro IA U6 (PLN); TP robótica (pipeline LLM→plan) |
| Tokens / presupuesto de atención | Slide 20 | Intro IA U6 (contexto en LSTM, vectores); BDD II U1 ("más datos ≠ más información") |
| CLAUDE.md, divulgación progresiva, punteros | Slide 21 | El catálogo autodescriptivo de la BD (BD I p.32); el propio `_md/INDICE.md` |
| Nombres SCD / event sourcing | Slide 11 (mención) | TP-FINAL (precios con vigencia: el problema sí está) |
| Vocabulario fino de orquestación (reintentos, alertas) | Slide 9 | TP con SSIS (la herramienta implica orquestación; el apunte no la teoriza) |
| Tablas del ejemplo de normalización | Slides 6-7 | Programa BD I U3 (conceptos sí; el ejemplo desarrollado no está en las clases disponibles) |

## Confirmaciones explícitas que pedía el encargo

- **Formas normales en el material**: 1FN, 2FN, 3FN y **FNBC** están en el
  programa de BD I (Clase 1, p.8). **4FN/5FN: NO aparecen** → no se mencionan
  en slides; hay respuesta honesta preparada en apéndice A1.
- **Algoritmos efectivamente estudiados** (Prog III, teoría numerada 0-7):
  formulación; BFS/DFS/UCS (no informadas 1-2); GBFS y A* (informadas I-II,
  con admisibilidad/dominancia/relajación); búsqueda local; búsqueda entre
  adversarios; CSP (backtracking en ese contexto); algoritmos inspirados en
  la naturaleza. **Todos citables.**
- **ACID, CAP, BASE**: contenido explícito de BDD II U4 ("Contraste entre los
  conceptos ACID, CAP y BASE"). Consistencia eventual entra por BASE.
  Escalabilidad horizontal: U4 p.8.
- **Herramientas ETL**: SSIS (TP entregado). No aparecen Airflow ni similares
  → no se nombran.
- **Claude / prompt engineering documentado**: NO está en apuntes → todo el
  bloque va como ampliación declarada (decisión alineada con el encargo).

## Riesgos de imprecisión a vigilar en el ensayo

- No decir "A* siempre es más rápido" (falso: con h=0 degenera; está en el
  apunte, Informadas I p.54).
- No decir "NoSQL es para datos grandes" a secas (es por modelo de datos y
  patrón de acceso).
- No llamar "3FN" al resultado final del ejemplo sin haber mostrado la
  transitiva (el orden del ejemplo la muestra: venta→cliente→dirección).
- La cita de Madnick es de 1993 — citarla con año, queda mejor y es exacta.
