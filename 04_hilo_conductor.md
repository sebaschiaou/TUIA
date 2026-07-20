# Hilo conductor — "Estructurar antes de resolver"

## La historia en una frase

> Diseñar una base de datos, construir un algoritmo y escribir un prompt son la
> misma actividad vista de tres ángulos: **elegir cómo representar un problema
> antes de intentar resolverlo**.

## Por qué este hilo y no otro

El material del repositorio lo sugiere solo. En tres cuatrimestres, el mismo
patrón aparece cuatro veces con nombres distintos:

1. **BD I** enseña que una tabla mal estructurada genera anomalías → la
   *representación* (formas normales) resuelve lo que ningún query puede.
2. **BDD II** enseña que la representación correcta **depende del uso**: la 3FN
   perfecta para operar es incómoda para analizar → modelo estrella.
3. **Programación III** enseña que un problema no se puede buscar hasta que no
   está *formulado*: estados, acciones, objetivo, costo. La práctica entera
   ("Formulación de problemas") es eso antes que ningún algoritmo.
4. El **uso de LLMs** repite el patrón: un prompt es la formulación de un
   problema — objetivo, contexto, restricciones, formato.

Y hay un quinto eco que hace de puente entre materias: el **nodo**. La lista
enlazada de Programación 2 (TAD), el árbol, el grafo, y el nodo del espacio de
estados de Programación 3 son la misma idea subiendo de nivel. Los propios
apuntes lo confirman: la frontera de A*/GBFS se implementa "usando el TAD cola
de prioridad" (Teoría 3.I, p. 51) — Programación 2 vive literalmente adentro de
Programación 3.

## Los cinco actos

### Apertura (ambos, ~3 min)
Pregunta al público: *¿qué tienen en común diseñar una base de datos, construir
un algoritmo y escribir un prompt?* Se escuchan 2-3 respuestas. Hipótesis: en
los tres casos la calidad de la solución depende de cómo representamos el
problema. Promesa: al final la frase va a tener contenido concreto.

### Acto 1 — Representar y ordenar (Turco, ~7 min)
Python nos dio las piezas: variables, listas, diccionarios, objetos (Prog 1 y
2). Después descubrimos que la información viene en formas distintas — tabular,
JSON, texto libre (Redes U9) — y que las estructuras tienen jerarquía: de la
lista enlazada al árbol al grafo (Prog 2, U3-U5). Cierre del acto: todas esas
estructuras son nodos y relaciones; **guardar no es lo mismo que organizar**.
→ Transición: ¿y cuando los datos tienen que sobrevivir al programa que los creó?

### Acto 2 — Organizar y transformar (Seba, ~12 min)
- La tabla con todo mezclado y sus anomalías (BD I, U3 del programa).
- Normalización 1FN → 2FN → 3FN con UN ejemplo de ventas que evoluciona.
- La base normalizada opera perfecto… hasta que llega la pregunta analítica
  (BDD II U1: "ricos en datos, pobres en información").
- ETL con orquestación: el TP real integró SQL Server 2000 + MySQL + Excel con
  SSIS (BDD II TP final).
- Modelo estrella: hechos, dimensiones, granularidad (la fila-frase de OLAP U2:
  "el cliente 112920 compró 2 artículos por $1300 en la sucursal 14 el
  26/02/2023").
- Historial: el TP tenía precios con vigencia temporal → estado actual vs.
  registrar cada cambio vs. ambos.
- EDA: antes de usar datos, mirarlos (FCD U2-U4, pandas).
→ Transición (cameo Turco): "todo esto asume un solo servidor y una sola
verdad… ¿y si no?"

### Acto 3 — Elegir según el problema (Seba, ~5 min)
ACID como el contrato del mundo relacional (BD I U4 transacciones, BDD II U4).
Cuando el sistema se distribuye, aparece CAP: **ante una partición de red** hay
que elegir qué sacrificar. NoSQL no reemplaza a SQL: son compromisos distintos
(key-value, documental, columnar, grafos — BDD II U4/U6). La elección depende
de la carga, no de la moda.

### Acto 4 — Modelar antes de resolver (Seba, ~7 min)
Programación III no arranca con algoritmos: arranca con formulación. El
laberinto de la práctica, formulado completo (estados, acciones, transiciones,
objetivo, costo). Recién ahí los algoritmos: BFS/DFS/UCS explorar a ciegas;
GBFS/A* usan una heurística — conocimiento del problema convertido en función.
El truco de A*: heurísticas que salen de *relajar* el problema. Y la moraleja
del cambio de monedas: el algoritmo "obvio" (greedy) falla con denominaciones
raras — entender el problema importa más que correr rápido.
→ Transición: "formulamos problemas para que una máquina los resuelva… ahora la
máquina entiende lenguaje natural. ¿Cambia algo? No: hay que seguir formulando."

### Acto 5 — Darle contexto a la IA (Turco, ~8 min)
Claude como colega brillante que acaba de llegar: capacidad enorme, contexto
cero. Un prompt es la formulación de un problema (mismo esquema del Acto 4).
Prompt débil vs. mejorado. Tokens como presupuesto de atención — la conexión
con EDA y DW: más datos no es más información, la señal hay que curarla.
Markdown y CLAUDE.md como "esquema de la base de conocimiento". Remate meta:
**esta presentación se armó así** — el repo de apuntes convertido a Markdown,
con un índice que un LLM puede recorrer.

### Cierre (ambos, ~3 min)
La tabla final: normalizar / diseñar un DW / formular una búsqueda / escribir
un prompt — columnas distintas, mismas filas: qué representamos, qué
estructura, qué estrategia. Frase final: "No aprendimos una única forma de
resolver problemas. Aprendimos a elegir una representación, una estructura y
una estrategia según lo que necesitábamos construir."

## Presupuesto de tiempo (objetivo: 35-38 min + preguntas)

| Bloque | Presentador | Min |
|---|---|---|
| Apertura | Ambos | 3 |
| Acto 1 | Turco | 7 |
| Acto 2 | Seba | 12 |
| Acto 3 | Seba | 5 |
| Acto 4 | Seba | 7 |
| Acto 5 | Turco | 8 |
| Cierre | Ambos | 3 |
| **Total** | Seba ≈ 24 / Turco ≈ 18 (apertura y cierre compartidos) | **45 tope, 35-38 esperado** |

El balance exacto se ajusta en el ensayo; el Acto 2 es el más largo y tiene un
recorte natural (la slide de historial puede pasar al apéndice si se va de
tiempo).

## Reglas que este hilo respeta

- Un solo ejemplo transversal (ventas/retail) desde la tabla desnormalizada
  hasta el modelo estrella; el laberinto para búsqueda; el propio repo para IA.
- Ninguna materia se presenta como bloque: se nombran al pie de cada slide como
  fuente, no como título.
- Los conceptos sin respaldo en apuntes van marcados como ampliación (ver
  `03_revision_conceptual.md` y `08_conceptos_pendientes.md`).
