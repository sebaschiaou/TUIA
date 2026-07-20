# Estructura de diapositivas (22 principales + apéndice)

Convenciones: **P** = presentador, **T** = tiempo estimado, **Fuente** = archivo
del repo que sustenta el contenido (ruta bajo `_md/` salvo indicación).
`[AMPLIACIÓN]` = contenido no hallado en apuntes, propuesto como complemento y
declarado como tal (detalle en `03_revision_conceptual.md`).

---

**1. Portada — "Estructurar antes de resolver"**
Mensaje: título + quiénes somos.
Visual: título grande, subtítulo "3 cuatrimestres de TUIA en 35 minutos", nombres.
P: Ambos · T: 0:30 · Fuente: —
Transición: pregunta al público.

**2. ¿Qué tienen en común…?**
Mensaje: diseñar una BD, construir un algoritmo y escribir un prompt son el mismo acto.
Visual: tres íconos (tabla / grafo / chat) convergiendo en un signo de pregunta.
P: Ambos (Seba pregunta, Turco anota respuestas) · T: 2:30 · Fuente: — (hipótesis propia)
Transición: "para responderla, empecemos por lo más chico: un dato."

**3. La información se puede representar de muchas formas**
Mensaje: variables → colecciones → objetos; la estructura elegida es una decisión, no un accidente.
Visual: la misma venta escrita 3 veces: tupla suelta / diccionario / clase `Venta` (código breve).
P: Turco · T: 2:00 · Fuente: Prog 1 (TPs proyecto), Prog 2 `2.0 Teoria POO.md`
Transición: "y afuera de Python el mundo también tiene formatos."

**4. Tabular, semiestructurado, no estructurado**
Mensaje: CSV, JSON y texto libre son grados de estructura; cada uno habilita usos distintos.
Visual: la misma venta como fila CSV / JSON anidado / frase en lenguaje natural, lado a lado.
P: Turco · T: 2:00 · Fuente: Redes U9 `09 _ Formato de datos.md` (JSON/XML/YAML), FCD U2 (CSV/parquet)
Transición: "cuando las piezas se relacionan entre sí, aparecen los nodos."

**5. Todo termina siendo nodos y relaciones**
Mensaje: lista enlazada → árbol → grafo: la misma idea con más libertad; el nodo va a volver.
Visual: los tres diagramas en secuencia, resaltando que el nodo es el mismo círculo.
P: Turco · T: 2:00 · Fuente: Prog 2 `3.1 Apunte - TAD.md`, `4.2 Apunte - Arboles.md`, `5.2 Apunte - Grafos_2025.md`
Transición: "ahora bien: guardar datos no es organizarlos." → pasa a Seba.

**6. Una tabla con todo adentro (el Excel heredado)**
Mensaje: la tabla única funciona… hasta que hay que modificar algo: anomalías de inserción, actualización y borrado.
Visual: tabla Ventas desnormalizada (cliente, dirección, producto, precio repetidos) con 3 flechas señalando cada anomalía.
P: Seba · T: 2:00 · Fuente: BD I Clase 1 programa U3 (`Bases de Datos I (clases sueltas)/TUIA-BDI-C2-Clase1-20250828.md` p.8: anomalías, redundancia) — ejemplo propio [AMPLIACIÓN parcial]
Transición: "la solución no es un if, es una representación."

**7. Normalizar: un ejemplo que evoluciona (1FN → 2FN → 3FN)**
Mensaje: cada forma normal elimina una dependencia problemática; menos redundancia = menos anomalías.
Visual: la MISMA tabla en 3 pasos (antes/después por forma normal), con la dependencia tachada en cada paso.
P: Seba · T: 3:00 · Fuente: BD I programa U3 (dependencias funcionales totales/parciales/transitivas; 1FN/2FN/3FN/FNBC) — tablas del ejemplo: elaboración propia [AMPLIACIÓN parcial]
Transición: "esta base opera perfecto. Ahora vengan a preguntarle cuánto vendimos por trimestre."

**8. Los datos operativos no nacen listos para analizar**
Mensaje: OLTP optimiza transacciones; el análisis pide otra cosa. "Ricos en datos, pobres en información."
Visual: comparación 2 columnas: sistema operativo (muchas escrituras chicas, hoy) vs. analítico (pocas lecturas enormes, historia).
P: Seba · T: 2:00 · Fuente: BDD II U1 `UNIDAD1-Datawarehouse.md` (problemas frecuentes p.19, cita Madnick p.18, definiciones Inmon/Kimball p.24-25)
Transición: "para pasar de un mundo al otro hay un puente: el ETL."

**9. ETL: extraer, transformar, cargar — y alguien que dirija la orquesta**
Mensaje: transformar no es mover: limpiar, integrar, deduplicar, validar. La orquestación coordina, monitorea, reintenta.
Visual: flujo Fuentes (SQL Server 2000 + MySQL + Excel) → Extracción → Transformación → Validación → Carga → Consumo, con la capa de orquestación por encima.
P: Seba · T: 2:30 · Fuente: BDD II U1 (definición DWH: "extracción, limpieza, transformación, control y carga", p.21); TP final `BasesDatos 2-2023 Cuat 2-TP-FINAL.md` (3 fuentes reales, actualización incremental); TP resuelto con SSIS (`TP/Entrega TP BDD/`) — vocabulario de orquestación ampliado [AMPLIACIÓN parcial]
Transición: "¿y a dónde carga? A una forma pensada para preguntar."

**10. El modelo estrella: hechos en el centro, contexto alrededor**
Mensaje: hechos = lo que se mide; dimensiones = quién/qué/cuándo/dónde; granularidad = qué es una fila.
Visual: estrella FACT_Venta (cantidad, monto) + Dim Cliente/Producto/Sucursal/Fecha. Abajo, la fila-frase: "El cliente 112920 compró 2 artículos 14212 por $1300 en la sucursal 14 el 26/02/2023".
P: Seba · T: 2:30 · Fuente: BDD II U2 `UNIDAD2- OLAP.md` (hechos p.26-28, dimensiones, medidas); `practica.md` (FACT_cobranza_seguro, FACT_Produccion con key_* FK); TP final (diagrama estrella con PK/FK y jerarquías)
Transición: "una pregunta incómoda: ¿y si el precio cambió el mes pasado?"

**11. Estado actual, historial, o ambos**
Mensaje: tres estrategias distintas que no hay que confundir: guardar solo el estado actual / registrar cada evento / estado actual + historial de cambios.
Visual: tres mini-tablas lado a lado con el precio del producto 14212 cambiando de $600 a $650.
P: Seba · T: 2:00 · Fuente: BDD II TP final (tabla de precios con vigencia temporal: "el precio se identifica con el código del producto y la fecha y hora en que comenzó a tener vigencia"); nombres técnicos SCD/event sourcing NO están en apuntes → [AMPLIACIÓN declarada]
Transición: "ya tenemos datos ordenados e históricos. Falta el paso de humildad: mirarlos."

**12. EDA: mirar los datos antes de usarlos**
Mensaje: estructura → tipos → faltantes → duplicados → distribución. Los datos reales vienen sucios.
Visual: secuencia real de pandas sobre Titanic: `info()` (tipos y nulls) → imputación por grupo (`fillna` + `groupby('barrio')` del ejemplo de alquileres). Máximo 8 líneas de código.
P: Seba · T: 2:30 · Fuente: FCD U2 `unidad2_manipulacion_datos.md` (Titanic `info()`, dtypes, imputación por barrio), U3 medidas de resumen, U4 visualizaciones
Transición (cameo Turco): "todo esto asume UNA base, UN servidor, UNA verdad. ¿Y cuando eso no alcanza?"

**13. ACID: el contrato del mundo relacional — y su límite**
Mensaje: atomicidad, consistencia, aislamiento, durabilidad; el contrato que hace confiable una transacción. Distribuir el sistema lo tensiona.
Visual: esquema de una transferencia bancaria con las 4 letras señalando dónde actúa cada garantía.
P: Seba · T: 2:00 · Fuente: BDD II U4 `UNIDAD4-NoSQL.md` (contraste ACID/CAP/BASE en contenido de unidad); BD I U4 (transacciones, bloqueo)
Transición: "cuando el sistema vive en muchas máquinas, aparece un teorema con mala fama."

**14. CAP y los compromisos: SQL y NoSQL no compiten, negocian**
Mensaje: ante una partición de red hay que elegir entre consistencia y disponibilidad. NoSQL = familias con compromisos distintos (clave-valor, documental, columnar, grafos). La elección depende de la carga.
Visual: triángulo C-A-P con la partición como rayo que parte la red; abajo, 4 fichas con los tipos NoSQL y un caso de uso c/u.
P: Seba · T: 3:00 · Fuente: BDD II U4 (tipos key-value/column-family/graph, escalabilidad horizontal, flexibilización de coherencia p.5) y U6 `UNIDAD6-OTROS-MODELOS-BBDD.md`
Transición: "elegir la base según el problema… ¿y los algoritmos? Igual." → Acto 4.

**15. Antes del algoritmo, el modelo: formular el problema**
Mensaje: estado inicial + acciones + transiciones + objetivo + costo = problema formulado. Sin esto no hay búsqueda.
Visual: el laberinto 4×4 de la práctica con su formulación al lado (estados = casillas libres, acciones = ↑→↓←, objetivo = salida, costo = 1 por paso).
P: Seba · T: 2:30 · Fuente: Prog III Práctica `1. Formulación de problemas.md` y `1. Solución Escape del Laberinto.md` (formulación completa con ACCIONES/RESULTADO/TEST-OBJETIVO)
Transición: "una vez formulado, hay dos maneras de explorarlo: a ciegas o con criterio."

**16. Buscar a ciegas vs. buscar con criterio (heurísticas)**
Mensaje: BFS/DFS/UCS exploran sin información; GBFS/A* usan h(n), una estimación del costo restante. A* = costo recorrido + estimado; con h admisible es óptimo.
Visual: el MISMO laberinto dos veces: BFS expandiendo en onda (muchas casillas pintadas) vs. A* con distancia Manhattan (camino dirigido, pocas casillas).
P: Seba · T: 3:00 · Fuente: Prog III Teoría `2. NO INFORMADAS`, `3. INFORMADAS I` (h(n) def. p.14, GBFS, frontera con TAD cola de prioridad p.51), `3. INFORMADAS II` (admisibilidad, dominancia, problemas relajados)
Transición: "no todos los problemas son caminos; a veces el 'obvio' te caga." (tono a criterio)

**17. Familias de problemas (y por qué el algoritmo obvio falla)**
Mensaje: búsqueda de caminos, satisfacción de restricciones (CSP), optimización (viajante, búsqueda local, genéticos). El cambio de monedas: greedy da 7 monedas donde la óptima usa 3.
Visual: tres tarjetas (camino / restricciones / optimización) + mini-ejemplo del cambio de monedas con denominaciones 1-7-15 para dar 31 (greedy: 31=15+15+1 vs óptimo... mostrar el caso del apunte).
P: Seba · T: 2:00 · Fuente: Prog III Teoría `6. CSP (1 y 2)`, `4. BÚSQUEDA LOCAL`, `7. ALGORITMOS INSPIRADOS EN LA NATURALEZA`; Práctica `1. Formulación de problemas.md` (cambio de monedas), `1. Solución Viajante de comercio.md`
Transición: "formulamos problemas para máquinas que entienden estados… ahora tenemos máquinas que entienden lenguaje. Turco, ¿cambia algo?"

**18. Claude: un colega brillante que llegó hoy**
Mensaje: capacidad enorme, contexto cero. La calidad del resultado depende de lo que le damos. Un prompt ES formular un problema.
Visual: paralelo lado a lado — formulación de búsqueda (estado/acciones/objetivo/costo) vs. anatomía de un prompt (contexto/instrucción/restricciones/formato).
P: Turco · T: 2:00 · Fuente: [AMPLIACIÓN] — anclaje conceptual en Intro IA U6 PLN (`Unidad_6_Procesamiento de Lenguaje Natural.md`: corpus, vectores, semántica distribucional) y TP robótica (`Guion Turk.md`: LLM → Intención → Plan → Robot)
Transición: "veámoslo con un ejemplo real."

**19. Prompt débil vs. prompt que no hace adivinar**
Mensaje: claridad, rol, ejemplos, pasos, separación contexto/instrucción/datos/formato. Un buen prompt reduce la adivinación.
Visual: antes/después: "Resumí esto." vs. el prompt mejorado (5 elementos etiquetados con color).
P: Turco · T: 2:30 · Fuente: [AMPLIACIÓN declarada]
Transición: "¿por qué importa tanto qué le damos? Porque la atención es finita."

**20. El contexto es un presupuesto de atención**
Mensaje: tokens = unidades de ese presupuesto. Más información ≠ mejor: el ruido tapa la señal (mismo principio que EDA y DW).
Visual: barra de presupuesto llenándose: instrucciones / contexto útil / ruido (en rojo). Analogía valija de mano.
P: Turco · T: 2:00 · Fuente: [AMPLIACIÓN] — eco directo de BDD II U1 p.18 ("cuantos más datos, menor facilidad para producir información") e Intro IA U6 (representación vectorial, límites de contexto en LSTM p.41)
Transición: "¿y cómo se le da contexto sin gastarlo? Estructura. Otra vez."

**21. Markdown, CLAUDE.md y el repo como base de conocimiento**
Mensaje: títulos y listas son estructura barata que humanos y modelos leen igual. CLAUDE.md = "esquema" del proyecto; documentos temáticos = divulgación progresiva (punteros, no copias).
Visual: árbol de archivos real: `TUIA/ → _md/INDICE.md → apuntes.md` con CLAUDE.md como puerta de entrada. Sello: "esta presentación se armó exactamente así".
P: Turco · T: 2:00 · Fuente: [AMPLIACIÓN] + evidencia viva: `_md/INDICE.md` de este repo (373 apuntes indexados)
Transición: "cerremos la pregunta del principio."

**22. Cierre: estructurar el problema antes de resolverlo**
Mensaje: normalizar / modelar el DW / formular la búsqueda / escribir el prompt — misma disciplina: qué representamos, con qué estructura, con qué estrategia.
Visual: tabla de 4 columnas × 3 filas (Representación / Estructura / Estrategia) que unifica los 4 mundos. Frase final.
P: Ambos · T: 2:30 · Fuente: síntesis propia
Transición: preguntas.

---

## Apéndice (no se presenta; respaldo para preguntas)

**A1. Boyce-Codd y más allá** — FNBC está en el programa de BD I; 4FN/5FN NO aparecen en el material (se dice honestamente si preguntan). Fuente: BDI Clase 1 p.8.
**A2. BASE y consistencia eventual** — el contraste ACID/CAP/BASE es contenido de BDD II U4.
**A3. Propiedades de A\*** — admisibilidad, dominancia (h₂ ≥ h₁ ⇒ A* expande menos nodos), heurísticas por relajación. Fuente: Prog III Teoría 3.II p.36-40.
**A4. MOLAP / ROLAP / HOLAP** — BDD II U2.
**A5. Medidas aditivas, semi-aditivas y no aditivas** — BDD II U2 p.11-13 (el ejemplo de stock/saldos que no se suman en el tiempo).
**A6. Mapa completo de fuentes por slide** — ver `02_mapa_de_fuentes.md`.
