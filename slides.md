# Estructurar antes de resolver — fuente Markdown de las slides

> Versión editable del contenido. La presentación navegable es
> `presentacion.html`; si editás acá, replicá el cambio allá (o pedile a
> Claude que lo haga: este archivo es la fuente de verdad del CONTENIDO).
> `[S]` = Seba · `[T]` = Turco · `[A]` = ambos · ⚠ = ampliación declarada.

---

## 1. [A] Estructurar antes de resolver
Tres cuatrimestres de TUIA en 35 minutos: datos, bases, algoritmos y cómo
hablarle a una IA. — Seba (datos y algoritmos) · el Turco (representación e IA)

## 2. [A] ¿Qué tienen en común diseñar una base de datos, construir un algoritmo y escribir un prompt?
*(pausa: respuestas del público)* Tesis: en los tres casos la calidad de la
solución depende de cómo representás el problema **antes** de resolverlo.

## 3. [T] La misma venta, tres representaciones — y ninguna es inocente
Tupla (compacta, críptica) vs. dict (se explica sola) vs. clase (datos +
comportamiento). Elegir la estructura ya es la mitad de la solución.
*Fuente: Prog 1 (proyecto), Prog 2 U2 (POO).*

## 4. [T] Los datos vienen con grados de estructura
CSV (rígido, masivo) · JSON (flexible, anidable — el idioma de las APIs, Redes
U9/U10) · texto libre (fácil para humanos, difícil para máquinas… hasta este
año). *Fuente: Redes U9 Formato de datos, U10 REST API; FCD U2.*

## 5. [T] Todo termina siendo nodos y relaciones
Lista enlazada → árbol → grafo: el mismo nodo ganando libertad. Un nodo puede
representar cualquier cosa. **Acuérdense de él.**
*Fuente: Prog 2 U3 (TAD), U4 (Árboles), U5 (Grafos).*

## 6. [S] Una tabla con todo adentro funciona… hasta que algo cambia
El "Excel heredado": cliente, dirección, producto y precio repetidos por fila.
Anomalías de **inserción** (no existe el producto hasta que alguien lo compra),
**actualización** (mudanza de Carla = N filas; N−1 = dos verdades) y **borrado**
(borro la última venta, desaparece el producto).
*Fuente: BD I programa U3. Tabla de ejemplo propia ⚠.*

## 7. [S] Normalizar: cada hecho vive en un solo lugar
- **1FN**: valores atómicos — nada de "monitor, teclado, mouse" en una celda.
- **2FN**: depender de la clave completa — cliente depende solo de venta → se muda.
- **3FN**: sin transitivas — dirección depende del cliente, no de la venta.
Resultado: VENTAS · DETALLE · CLIENTES · PRODUCTOS.
*Fuente: BD I programa U3 (dependencias funcionales, 1FN/2FN/3FN/FNBC). Ejemplo evolutivo propio ⚠.*

## 8. [S] Los datos operativos no nacen listos para analizar
Operativo: mil escrituras chicas, el estado de hoy. Analítico: consultas
enormes, historia, fuentes integradas. Cita del apunte: *"rica en datos, pobre
en información"* (Madnick). *Fuente: BDD II U1 p.18-25.*

## 9. [S] ETL: extraer, transformar, cargar — con alguien dirigiendo la orquesta
Fuentes (SQL Server 2000 + MySQL + Excel) → Extracción → **Transformación**
(limpiar, integrar, deduplicar, validar, reglas de negocio) → Carga → Consumo.
Arriba: **orquestación** (orden, dependencias, logs, errores, reintentos,
alertas). Nuestro TP real: SSIS.
*Fuente: BDD II U1 p.21; TP Final; entrega con SSIS. Vocabulario de orquestación ampliado ⚠.*

## 10. [S] El modelo estrella: hechos en el centro, contexto alrededor
FACT_VENTA (cantidad, monto + FKs) rodeada de DIM_CLIENTE / PRODUCTO /
SUCURSAL / FECHA. **Granularidad** = qué es una fila: *"el cliente 112920
compró 2 artículos 14212 por $1300 en la sucursal 14 el 26/02/2023"*.
Ironía: acá des-normalizamos a propósito — la estructura depende del uso.
*Fuente: BDD II U2 (hechos/dimensiones/granularidad); práctica (FACT_cobranza_seguro); TP Final.*

## 11. [S] El precio cambió: ¿estado, eventos, o ambos?
1) Solo estado actual: rápido, amnésico. 2) Cada evento con vigencia: total
trazabilidad, estado reconstruible. 3) Actual + historial: lo mejor de ambos.
El TP usaba (2) para precios. Nombres de industria (SCD, event sourcing): no
vistos en cursada ⚠. *Fuente: BDD II TP Final (precios con vigencia).*

## 12. [S] EDA: mirar los datos antes de usarlos
`info()` → tipos y faltantes (Titanic: Age 714/891) → duplicados →
distribuciones. Imputar con criterio: el promedio **del barrio**, no el global
(`fillna` + `groupby`). *Fuente: FCD U2 (Titanic, alquileres), U3, U4.*

## 13. [S] ACID: el contrato que te deja dormir tranquilo
Atomicidad (entera o nada) · Consistencia (válido → válido) · Aislamiento (no
se pisan) · Durabilidad (confirmado = permanente). Firmado pensando en UNA
base. ¿Y con veinte máquinas? *Fuente: BDD II U4; BD I U4 (transacciones).*

## 14. [S] CAP: cuando la red se corta, algo se sacrifica
**Ante una partición**: ¿respondo desactualizado (disponibilidad) o dejo de
responder (consistencia)? Familias NoSQL: clave-valor, documental, columnar,
grafos (volvió el nodo). NoSQL **no reemplaza** a SQL: negocia garantías por
escala y flexibilidad. *Fuente: BDD II U4, U6.*

## 15. [S] Antes del algoritmo, el modelo del problema
El laberinto 4×4 del práctico, formulado: estados (11 casillas libres),
inicial (1,1), acciones {↑→↓←}, RESULTADO, TEST-OBJETIVO, costo 1. El
laberinto es un **grafo**: cada casilla, un nodo.
*Fuente: Prog III Práctica 1 (Formulación; Solución Escape del Laberinto).*

## 16. [S] Buscar a ciegas vs. buscar con criterio
BFS explora en ondas (óptimo, pero visita casi todo) · A*: f = g + h, con h =
distancia Manhattan → casi derecho. Heurística = conocimiento del problema
hecho función. Admisible (no exagera) ⇒ óptimo. Se fabrica **relajando** el
problema (sacale las paredes). La frontera usa la cola de prioridad de Prog 2.
*Fuente: Prog III Teoría 2 (no informadas), 3.I (h, GBFS, TAD), 3.II (admisibilidad, relajación).*

## 17. [S] Familias de problemas — y por qué el "obvio" falla
Caminos · Satisfacción de restricciones (CSP) · Optimización (viajante,
búsqueda local, genéticos). Contraejemplo del práctico: dar $6 con monedas
{1,3,4} — greedy: 4+1+1 = 3 monedas; óptimo: 3+3 = 2.
*Fuente: Prog III Teoría 6, 4, 7; Práctica 1 (monedas), Solución Viajante.*

## 18. [T] Claude: un colega brillante que llegó hoy
Formular una búsqueda ↔ escribir un prompt: estado inicial↔contexto,
acciones↔instrucción, objetivo↔resultado esperado, costo↔restricciones.
Capacidad enorme, contexto cero: no le decís "arreglalo", le formulás el
problema. *Paralelo propio ⚠, anclado en Intro IA U6 (PLN) y TP robótica.*

## 19. [T] Un buen prompt reduce la adivinación
"Resumí esto." (vacío: el modelo adivina lo probable) vs. "Resumí este informe
en cinco puntos para una persona sin conocimientos técnicos. Priorizá riesgos,
decisiones y cifras relevantes. No incluyas introducción." — claridad ·
audiencia/rol · prioridades · restricciones · separación contexto/instrucción/
datos/formato. *Ampliación declarada ⚠.*

## 20. [T] El contexto es un presupuesto de atención
Tokens = unidades del presupuesto. El problema no es el límite: es que el
ruido tapa la señal ("rica en datos, pobre en información" — otra vez).
Curar · Partir · Resumir. *Ampliación ⚠, eco de BDD II U1 e Intro IA U6.*

## 21. [T] Markdown, CLAUDE.md y el repo como base de conocimiento
Estructura que humanos y modelos leen igual. CLAUDE.md = esquema del proyecto
(como el catálogo de la BD). Punteros, no copias: divulgación progresiva.
**Esta presentación se armó exactamente así** (`_md/INDICE.md`, 373 apuntes).
*Fuente: el propio repo. Prácticas CLAUDE.md: ampliación ⚠.*

## 22. [A] Cuatro mundos, una sola disciplina
| | Relacional | DW | Búsqueda | Prompt |
|---|---|---|---|---|
| Representamos | entidades y relaciones | hechos y contexto | estados y acciones | objetivo y contexto |
| Estructura | tablas normalizadas | estrella | grafo de estados | secciones del prompt |
| Estrategia | SQL declarativo | ETL + análisis | BFS… o A* con heurística | claridad + iteración |

> "No aprendimos una única forma de resolver problemas. Aprendimos a elegir
> una representación, una estructura y una estrategia según lo que
> necesitábamos construir."

---

## Apéndice
- **A1** Más allá de la 3FN: FNBC sí (programa BD I); 4FN/5FN no vistas (decirlo).
- **A2** BASE / consistencia eventual (BDD II U4) · medidas aditivas, semi (stock no se suma en el tiempo) y no aditivas (BDD II U2).
- **A3** A*: admisibilidad, dominancia (h₂≥h₁ ⇒ nunca expande más), heurísticas por relajación, peor caso h=0 (Prog III 3.I/3.II).
- **A4** MOLAP/ROLAP/HOLAP (BDD II U2) · mapa completo de fuentes en `02_mapa_de_fuentes.md`.
