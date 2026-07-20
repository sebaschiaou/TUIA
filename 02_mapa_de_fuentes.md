# Mapa de fuentes — concepto → archivo del repo → slide

Rutas relativas a `_md/` salvo indicación. **Confianza**: ✔ = verificado
leyendo el contenido · ✔p = verificado en el programa/enunciado (sin el
desarrollo completo en el material disponible) · ⚠ = ampliación (no está en
apuntes; se declara como tal en la slide).

| Concepto | Materia | Archivo fuente | Ejemplo encontrado | Slide | Conf. |
|---|---|---|---|---|---|
| Representación con tuplas/dicts/clases | Prog 1 / Prog 2 | `2do Cuatrimestre/Programación 2/Unidad 2 - .../2.0 Teoria POO.md`; TPs de Prog 1 | clases con atributos y métodos | 3 | ✔ |
| Formatos: JSON/XML/YAML, API REST | Redes | `3er .../IA 3.5_Redes de Datos/Unidad 9 - Formato de datos/09 _ Formato de datos.md`; `Unidad 10 .../REST API.md` | ejercicios JSON/XML/YAML | 4 | ✔ |
| CSV / parquet / lectura de datos | FCD | `3er .../IA 3.4_.../Unidad 2 - Manipulación de Datos/unidad2_manipulacion_datos.md` | `read_csv`, `read_parquet` | 4, 12 | ✔ |
| TADs, listas enlazadas, pilas, colas | Prog 2 | `.../Unidad 3 - Tipos Abstractos de Datos/3.1 Apunte - TAD.md`, `3.3 TADs-Pilas-Colas.md` | implementación de TADs | 5 | ✔ |
| Árboles / Grafos | Prog 2 | `.../Unidad 4 .../4.2 Apunte - Arboles.md`; `.../Unidad 5 .../5.2 Apunte - Grafos_2025.md` | recorridos, representaciones | 5 | ✔ |
| Anomalías, redundancia, dependencias funcionales, 1FN/2FN/3FN/FNBC | **BD I** | `Bases de Datos I (clases sueltas)/TUIA-BDI-C2-Clase1-20250828.md` (programa U3, p.8) | programa detallado; el desarrollo con tablas no está en las clases disponibles | 6, 7 | ✔p |
| Modelo relacional, claves, integridad, SGBD, 3 niveles | BD I | `TUIA-BDI-C2-Clase2/3-...md` (superclaves, restricción de clave) | restricción de clave, superclave mínima | 6 (apoyo) | ✔ |
| SQL (DDL/DML, SELECT, GROUP BY) | BD I | `TUIA-BDI-Com1-Clase_05/06/07.md` | agregación, recuperación | 22 (fila "estrategia") | ✔ |
| DW: definiciones, problemas, datos→información | BDD II | `.../UNIDAD 1 .../UNIDAD1-Datawarehouse.md` | Inmon (p.24), Kimball (p.25), Madnick (p.18), problemas frecuentes (p.19), ETL (p.21) | 8, 9 | ✔ |
| Hechos, dimensiones, granularidad, medidas | BDD II | `.../UNIDAD 2 - OLAP .../UNIDAD2- OLAP.md` | fila-frase "cliente 112920… 26/02/2023" (p.27); medidas aditivas/semi/no (p.10-13) | 10, A2 | ✔ |
| Modelo estrella con FACT_* y key_* (FK) | BDD II | `.../practica.md` (FACT_Produccion, FACT_cobranza_seguro); `.../UNIDAD 7 .../BasesDatos 2-2023 Cuat 2-TP-FINAL.md` | estrella con PK/FK, jerarquías | 10 | ✔ |
| ETL multi-fuente real + incremental | BDD II | TP-FINAL (SQL Server 2000 + MySQL + Excel; actualización incremental por fecha); `TP/Entrega TP BDD/` (SSIS) | migración 2009 a MySQL, novedades | 9 | ✔ |
| Historial de precios con vigencia | BDD II | TP-FINAL: "el precio se identifica con el código del producto y la fecha y hora en la que comenzó a tener vigencia" | tabla de precios histórica | 11 | ✔ |
| SCD / event sourcing (nombres) | — | no encontrado en el repo | — | 11 | ⚠ |
| EDA con pandas | FCD | `unidad2_manipulacion_datos.md` (`info()` sobre Titanic, dtypes, Age 714 non-null; imputación `fillna`+`groupby('barrio')`); U3 medidas de resumen (`Parte 2.md`); U4 visualizaciones | Titanic; alquileres por barrio | 12 | ✔ |
| Población y muestra, descriptiva | PyE | `.../IA 3.1_.../Unidad 1 .../Capítulo 1.md`, `Unidad 2 .../Capítulo_2 (2).md`; FCD U3 `Parte 1.md` (POBLACIÓN Y MUESTRA) | diagrama población→muestra | 12 (apoyo) | ✔ |
| ACID / CAP / BASE (contraste) | BDD II | `.../UNIDAD 4 - BASES DE DATOS NOSQL/UNIDAD4-NoSQL.md` (contenido p.2; flexibilización de coherencia p.5; escalabilidad horizontal p.8) | — | 13, 14, A2 | ✔ |
| Tipos NoSQL (key-value, column-family, graph) | BDD II | UNIDAD4-NoSQL.md (p.2) + `.../UNIDAD 6 .../UNIDAD6-OTROS-MODELOS-BBDD.md` | — | 14 | ✔ |
| Transacciones y bloqueo | BD I | Clase 1 (programa U4: transacciones, bloqueo) | — | 13 | ✔p |
| Formulación de problemas (estados, acciones, RESULTADO, TEST-OBJETIVO, costo) | Prog III | `.../Práctica/1. Formulación de problemas.md`; `1. Solución Escape del Laberinto.md`; Teoría `1. RESOLUCIÓN DE PROBLEMAS (PARTE 1).md` | laberinto 4×4 formulado completo; cruce de río; panqueques | 15 | ✔ |
| BFS / DFS / UCS | Prog III | Teoría `2. ESTRATEGIAS DE BÚSQUEDA NO INFORMADAS (PARTE 1 y 2).md` | — | 16 | ✔ |
| Heurística h(n), GBFS, frontera con cola de prioridad | Prog III | Teoría `3. INFORMADAS (PARTE I).md` (def. h p.14; TAD cola de prioridad p.51; peor caso h=0 p.54) | camino más corto | 16 | ✔ |
| A*: admisibilidad, dominancia, relajación | Prog III | Teoría `3. INFORMADAS (PARTE II).md` (h₁ vs h₂ p.36-38; problema relajado p.39; subproblema p.57) | 8-puzzle (h₁/h₂) | 16, A3 | ✔ |
| CSP / búsqueda local / genéticos / adversarios | Prog III | Teoría `6. CSP (1 y 2)`, `4. BÚSQUEDA LOCAL`, `7. ALGORITMOS INSPIRADOS EN LA NATURALEZA`, `5. ADVERSARIOS` | — | 17 | ✔ |
| Greedy falla: cambio de monedas | Prog III | Práctica `1. Formulación de problemas.md` (dar 6 con {1,3,4}) | X=6, d={1,3,4} | 17 | ✔ |
| Viajante de comercio | Prog III | `Práctica/1. Solución Viajante de comercio.md` | — | 17 | ✔ |
| PLN: corpus, vectores, semántica distribucional, contexto | Intro IA | `2do .../Intro IA/Unidad_6_Procesamiento de Lenguaje Natural.md` (corpus p.26; vectores p.48-49; LSTM y contexto p.41) | "conocerás una palabra por la compañía que tiene" | 18, 20 (anclaje) | ✔ |
| Pipeline LLM → intención → plan → robot | Intro IA (TP) | `.../TP 1/NLP, LLM y VLM/Guion Turk.md` | guion del TP del Turco | 18 (anclaje) | ✔ |
| Prompt engineering (5 elementos), prompts débil/mejorado | — | no encontrado en el repo | — | 19 | ⚠ |
| Tokens / presupuesto de atención | — | no encontrado (concepto de contexto sí, en PLN U6) | — | 20 | ⚠ |
| CLAUDE.md / divulgación progresiva / punteros | — | evidencia viva: `_md/INDICE.md` de este repo (373 apuntes) | el propio repo | 21 | ⚠ (práctica) + ✔ (evidencia) |
| Catálogo de la BD (autodescripción) | BD I | Clase 1 p.32 ("las BD contienen una descripción completa de su estructura almacenada en el catálogo") | paralelo con CLAUDE.md | 21 | ✔ |
