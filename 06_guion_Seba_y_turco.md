# Guion — Seba y el Turco

Duración objetivo: 35-38 minutos hablados. Está escrito para sonar hablado, no
para leerse palabra por palabra: cada bloque tiene la idea y el remate; el
resto es de ustedes. Las acotaciones van *(así)*. Los chistes están marcados
🃏 — si uno no cae bien en el ensayo, se corta sin culpa: el contenido no
depende de ninguno.

---

## SLIDE 1 — Portada *(0:30, ambos en el frente)*

**SEBA:** Buenas. Somos Seba y el Turco, estamos terminando el tercer
cuatrimestre de la Tecnicatura en Inteligencia Artificial, y esta charla es
un intento de responder una pregunta que nos hicieron mil veces: "¿y ustedes
qué aprenden ahí, aparte de pedirle cosas al ChatGPT?"

**TURCO:** Spoiler: se aprende bastante. Pero en vez de recitarles el programa
materia por materia — que sería un somnífero de 35 minutos — les vamos a contar
**cómo nos cambió la cabeza**. Y arrancamos con una pregunta para ustedes.

## SLIDE 2 — ¿Qué tienen en común…? *(2:30)*

**SEBA:** ¿Qué tienen en común diseñar una base de datos, construir un
algoritmo de búsqueda y escribir un buen prompt? *(pausa real, que respondan;
el Turco repite en voz alta las respuestas que salgan)*

**TURCO:** Todas buenas. Nuestra respuesta, que es la tesis de la charla, es
esta: **en los tres casos, la calidad de la solución depende de cómo
representás el problema antes de intentar resolverlo**. Suena abstracto ahora;
en 35 minutos va a ser concreto. Empecemos por lo más chiquito que hay: un dato.

## SLIDE 3 — Representar información *(2:00, Turco)*

**TURCO:** Primer cuatrimestre, Programación 1. Uno cree que va a aprender "a
programar" y lo que de verdad aprende es a **decidir cómo representar las
cosas**. Miren la misma venta escrita tres veces: una tupla pelada, un
diccionario con nombres, y una clase con comportamiento. Las tres guardan lo
mismo. Pero probá buscar "el precio" en la tupla: ¿era la posición 2 o la 3?
🃏 La tupla es como guardar todo en el bolsillo del jean: entra, pero después
andá a saber qué era cada cosa.

La lección que nos quedó: elegir la estructura ya es la mitad de la solución.
Y eso es una decisión de diseño, no un accidente.

## SLIDE 4 — Tabular, JSON, texto libre *(2:00, Turco)*

**TURCO:** Después descubrimos que el mundo no habla Python. Habla formatos.
La misma venta puede ser una fila de CSV — rígida, perfecta para millones de
filas iguales —, un JSON — flexible, se anida, ideal para APIs, lo vimos en
Redes cuando armamos APIs REST —, o una frase suelta en un mail: "che, vendile
2 monitores a Carla". Los tres tienen la misma información y **grados de
estructura distintos**. Cuanta menos estructura, más fácil de escribir para un
humano… y más difícil de procesar para una máquina. Guarden esa tensión, que
al final de la charla vuelve con los LLMs.

## SLIDE 5 — Nodos y relaciones *(2:00, Turco)*

**TURCO:** Programación 2 nos subió un nivel: TADs, listas enlazadas, árboles,
grafos. Y acá apareció un personaje que nos va a perseguir toda la charla: el
**nodo**. Miren la secuencia: en la lista enlazada cada nodo conoce al
siguiente. En el árbol, a sus hijos. En el grafo, a quien quiera. Es el mismo
circulito ganando libertad.

Lo importante: un nodo puede representar *cualquier cosa* — un cliente, una
casilla de un laberinto, una decisión a medio tomar. Acuérdense de esto en el
acto 4. Y ahora viene la pregunta incómoda: tengo mis datos hermosos en
memoria… se corta la luz. *(mira a Seba)* ¿Y ahora?

## SLIDE 6 — La tabla con todo adentro *(2:00, Seba)*

**SEBA:** Y ahora los datos tienen que sobrevivir al programa. Bases de Datos.
Y arranco con un clásico que todos los que trabajan vieron alguna vez: 🃏 **el
Excel heredado**. Esa planilla que empezó inocente y hoy sostiene la facturación
de una empresa entera.

Miren la tabla: cada venta repite el nombre del cliente, su dirección, el
nombre del producto, el precio. ¿Cuál es el problema? Tres, con nombre técnico
— esto es literalmente el programa de la unidad 3 de Bases de Datos I:
**anomalía de inserción** (no puedo cargar un producto nuevo hasta que alguien
lo compre), **de actualización** (Carla se muda y tengo que corregir 200
filas… y si corrijo 199, tengo dos verdades), y **de borrado** (borro la única
venta de un producto y el producto desaparece del universo). La redundancia no
es prolijidad: es un generador de inconsistencias.

## SLIDE 7 — Normalización: el ejemplo evoluciona *(3:00, Seba)*

**SEBA:** La solución no es un if. Es cambiar la representación. Esto se llama
normalización y va por pasos — acá lo muestro con la misma tabla evolucionando.

**Primera forma normal:** nada de valores múltiples en una celda. Si la fila
dice "monitor, teclado, mouse" en una sola celda, eso no es una tabla, es una
lista de compras. Cada hecho, su fila.

**Segunda:** todo atributo debe depender de la clave **completa**. Si mi clave
es (venta, producto) y el nombre del cliente depende solo de la venta, ese
atributo está pidiendo mudanza: se va a la tabla Ventas.

**Tercera:** nada de dependencias transitivas. La dirección depende del
cliente, no de la venta. Cliente a su propia tabla.

🃏 Es Marie Kondo para tablas: si el dato no depende de tu clave, no te trae
alegría — a otra tabla. *(beat)* El resultado: cada hecho vive en un solo
lugar. Actualizás la dirección de Carla una vez, en un lugar, y es verdad en
todos lados. En los apuntes esto sigue con dependencias funcionales y
Boyce-Codd — para el que quiera, apéndice.

## SLIDE 8 — Los datos operativos no nacen listos para analizar *(2:00, Seba)*

**SEBA:** Ahora, esta base normalizada es una atleta para operar: mil ventas
por minuto, sin despeinarse. Hasta que un lunes llega el gerente y pregunta:
"¿cuánto vendimos por producto, por sucursal, por trimestre, últimos tres
años?" Y tu base operativa, que es una campeona de las transacciones cortas,
te mira como diciendo 🃏 "yo facturo, no filosofo".

En Bases de Datos II nos dieron el diagnóstico con una cita que nos quedó
grabada: *"una organización que no puede identificar, categorizar y resumir
sus datos puede ser rica en datos, pero va a ser pobre en información"*. El
sistema que opera y el sistema que analiza tienen necesidades opuestas: uno
escribe mucho y de a poco, el otro lee poco seguido pero enorme, y necesita
**historia**, que el operativo suele pisar.

## SLIDE 9 — ETL y orquestación *(2:30, Seba)*

**SEBA:** El puente entre esos dos mundos es el ETL: extraer, transformar,
cargar. Y esto no lo cuento en abstracto porque lo sufrimos: el TP final de
Bases de Datos II era integrar **tres fuentes reales** — un SQL Server 2000,
un MySQL que apareció después de una migración, y, por supuesto, planillas
Excel. Porque siempre hay un Excel.

La E es lo de menos. La **T** es donde se trabaja: unificar formatos de fecha,
deduplicar clientes, decidir qué hacer con lo que viene roto, aplicar reglas
de negocio. Y arriba de todo está la **orquestación**: qué corre primero, qué
depende de qué, qué pasa si un paso falla a las 3 de la mañana, dónde quedó el
log. Nosotros lo armamos con SSIS, la herramienta de Microsoft. La moraleja:
un ETL sin orquestación es una receta sin cocinero — los ingredientes no se
juntan solos.

## SLIDE 10 — El modelo estrella *(2:30, Seba)*

**SEBA:** ¿Y a dónde carga ese ETL? Acá viene mi diagrama favorito de los tres
cuatrimestres: el **modelo estrella**. En el centro, la tabla de **hechos**: lo
que se mide. Números: cantidad, monto. Alrededor, las **dimensiones**: el
contexto. Quién, qué, dónde, cuándo.

Y el concepto finito pero clave: la **granularidad** — qué significa UNA fila
de la tabla de hechos. En el apunte está con un ejemplo que me encanta porque
es una fila leída en voz alta: *"el cliente 112920 compró 2 artículos 14212
por 1300 pesos en la sucursal 14 el 26 de febrero de 2023"*. Eso es una fila.
Definir eso ANTES de construir es lo que separa un data warehouse de un
lío con esquema.

Fíjense la ironía: en el acto anterior normalicé todo, ¿y ahora las
dimensiones repiten texto alegremente? Sí. Porque acá el objetivo cambió:
no protejo escrituras, sirvo lecturas. **La estructura correcta depende del
uso** — segunda vez que aparece la tesis.

## SLIDE 11 — Estado, eventos, o ambos *(2:00, Seba)*

**SEBA:** Pregunta incómoda del TP: el producto 14212 salía $600 en enero y
$650 en marzo. Si guardo solo el precio actual, mis ventas de enero quedan
mintiendo. Hay tres estrategias, y no son la misma cosa:

Uno: guardar **solo el estado actual** — rápido y simple, pero amnésico. Dos:
registrar **cada evento** — nunca perdés nada, pero para saber el estado de
hoy tenés que reproducir la película completa. Tres: **estado actual más
historial** — consultás rápido lo de hoy y conservás la trazabilidad. En
nuestro TP, la tabla de precios hacía exactamente eso: cada precio con su
fecha de vigencia. Aclaración honesta: en la industria esto tiene nombres
propios — slowly changing dimensions, event sourcing — que no vimos en la
cursada; lo que vimos es el problema y esta solución concreta.

## SLIDE 12 — EDA: mirar antes de usar *(2:30, Seba)*

**SEBA:** Último hábito del acto: la humildad de **mirar los datos antes de
usarlos**. Fundamentos de Ciencia de Datos, pandas. La secuencia es siempre la
misma y es casi un ritual: `info()` para ver estructura y tipos — y ahí ya
aparece la primera sorpresa, la edad tiene 177 nulos en el Titanic —, faltantes,
duplicados, distribuciones.

Y lo más lindo del apunte: la imputación con criterio. Faltan precios de
alquiler; en vez de rellenar con el promedio global, rellenás con el promedio
**del barrio** — una línea de `groupby` que respeta cómo funciona el mundo.
🃏 Ningún dataset real pasa la ITV sin arreglos. Ninguno.

**TURCO:** *(desde el costado)* Pará, Seba. Todo esto — normalizar, el
warehouse, el historial — asume una base, un servidor, una sola verdad. ¿Y
cuando eso no alcanza?

## SLIDE 13 — ACID y su límite *(2:00, Seba)*

**SEBA:** Buena pregunta. Primero, el contrato que veníamos dando por sentado.
Las transacciones relacionales prometen **ACID**: **atómica** — la
transferencia sale entera o no sale; nunca "salió la plata pero no llegó" —,
**consistente** — de estado válido a estado válido —, **aislada** — dos
transacciones a la vez no se pisan —, **durable** — si el sistema confirmó, se
corta la luz y el dato sigue ahí. Ese contrato es lo que te deja dormir
tranquilo con un sistema bancario.

Ahora: ese contrato se firmó pensando en una base en un lugar. ¿Qué pasa
cuando los datos viven en veinte máquinas en tres continentes?

## SLIDE 14 — CAP y los compromisos *(3:00, Seba)*

**SEBA:** Aparece el teorema CAP, y lo digo con cuidado porque se cita mal
seguido: consistencia, disponibilidad, tolerancia a particiones. NO es "elegí
dos de tres para siempre". Es: **cuando se corta la red entre tus servidores**
— y tarde o temprano se corta — tenés que elegir qué sacrificar mientras
tanto: ¿respondo igual, arriesgando datos desactualizados, o dejo de responder
hasta estar seguro? El carrito de compras prefiere disponibilidad; tu saldo
bancario, consistencia.

De esa tensión nacen las familias NoSQL que vimos: **clave-valor** (un
diccionario gigante y velocísimo), **documentales** (JSONs — ¿se acuerdan de
la slide 4?), **columnares** (analítica masiva), **de grafos** (cuando las
relaciones SON el dato — y miren quién volvió: el nodo).

Y la conclusión del apunte, que es la anti-moda: NoSQL **no reemplaza** a SQL.
Relajan garantías a cambio de escala y flexibilidad. La elección depende de tu
carga, tu consistencia requerida, tu arquitectura. 🃏 "¿SQL o NoSQL?" es como
"¿destornillador o martillo?" — depende de si tenés un tornillo o un clavo.
Tercera aparición de la tesis: la estructura depende del problema.

## SLIDE 15 — Formular el problema *(2:30, Seba)*

**SEBA:** Acto 4. Programación 3 es "la materia de los algoritmos de
búsqueda", pero la primera clase no tiene ni un algoritmo. Tiene una
pregunta: **¿cómo se formula un problema?** Y el primer práctico se llama
literalmente "Formulación de problemas".

El ejemplo de la práctica: un laberinto de 4×4. La formulación completa:
**estados** — las casillas libres, once en total, cada una un par (i,j) —;
**acciones** — arriba, abajo, izquierda, derecha —; **transiciones** — qué
estado te deja cada acción —; **estado objetivo** — la salida —; **costo** —
un paso, uno. Con eso el laberinto dejó de ser un dibujito: es un **grafo**.
Cada casilla un nodo — el circulito del Turco, tercera aparición — y la
solución es un camino. Modelar el problema ES la mitad de resolverlo.

## SLIDE 16 — A ciegas vs. con criterio *(3:00, Seba)*

**SEBA:** Formulado el problema, ¿cómo lo exploro? Primera familia: búsqueda
**no informada**. BFS explora en ondas — garantiza el camino más corto, pero
visita medio laberinto. DFS se mete a fondo — 🃏 el amigo que en el shopping
dice "yo conozco un atajo" y aparecen en el estacionamiento. UCS ordena por
costo acumulado. Ninguna sabe *hacia dónde* está la salida.

Segunda familia: búsqueda **informada**. Le damos al algoritmo una
**heurística**: h(n), una estimación de cuánto falta desde cada nodo. En el
laberinto: la distancia Manhattan hasta la salida, ignorando paredes. A* combina
lo mejor de los dos mundos: f = lo que ya caminé + lo que estimo que falta. Y
acá el teorema lindo: si la heurística **no exagera** — nunca promete menos de
lo real… mejor dicho, nunca estima de más —, A* encuentra el óptimo. En el
apunte se llama admisibilidad, y la receta para fabricar heurísticas es
elegante: **relajá el problema** — sacale las paredes al laberinto y resolvé
ese; eso te da la estimación.

Miren las dos imágenes: mismo laberinto, BFS pintó todo, A* fue casi derecho.
Eso es conocimiento del problema convertido en función. Detalle para nerds: la
frontera de A* se implementa con una cola de prioridad — el TAD de Programación
2. Las materias se apilan: nodos de Prog 2, algoritmos de Prog 3.

## SLIDE 17 — Familias de problemas *(2:00, Seba)*

**SEBA:** Última pieza: no todo es encontrar caminos. Vimos **satisfacción de
restricciones** — asignar valores sin romper reglas, como armar horarios sin
superponer aulas —, y **optimización** — el viajante de comercio, búsqueda
local, hasta algoritmos genéticos. Cada familia tiene su representación y sus
estrategias.

Y me despido con mi ejemplo favorito del práctico, el que te vacuna contra la
soberbia: dar cambio con monedas. Con monedas normales, el algoritmo del
kiosquero — agarrar siempre la moneda más grande que entre — funciona
perfecto. Ahora denle a ese kiosquero monedas de 1, 3 y 4, y pídanle 6 de
cambio: agarra la de 4, después dos de 1 — tres monedas. La óptima era 3+3 —
dos. El algoritmo "obvio" deja de ser correcto cuando cambia el problema.
**Entender el problema le gana a correr rápido.**

*(pasa el clicker)* Formulamos problemas para máquinas que entienden estados.
Ahora hay máquinas que entienden lenguaje. Turco: ¿cambia algo?

## SLIDE 18 — El colega brillante *(2:00, Turco)*

**TURCO:** No cambia nada. Y eso es exactamente lo que quiero mostrar.

Trabajo todos los días con estas herramientas, y la mejor forma de pensar a
Claude es esta: **un colega brillante que entró a trabajar hoy**. Brillante en
serio: leyó de todo, programa mejor que muchos. Pero entró HOY: no conoce tu
proyecto, tus reglas, ni qué tenés en la cabeza. 🃏 Es el pibe nuevo genio:
sabe todo de todo, pero no sabe dónde está el mate ni por qué el deploy es los
jueves.

¿Qué hacés con un colega así? No le decís "arreglalo". Le das contexto,
objetivo, restricciones, y cómo querés el resultado. Miren la slide: a la
izquierda, la formulación de Seba — estados, acciones, objetivo, costo. A la
derecha, la anatomía de un prompt — contexto, instrucción, restricciones,
formato. **Es el mismo esquema.** Un prompt es formular un problema, en
castellano.

## SLIDE 19 — Prompt débil vs. mejorado *(2:30, Turco)*

**TURCO:** Ejemplo real. Prompt débil: *"Resumí esto."* No está mal — está
**vacío**. El modelo tiene que adivinar: ¿resumir para quién? ¿qué largo? ¿qué
importa? Y cuando un modelo adivina, adivina lo más probable, no lo que vos
querías.

Prompt mejorado: *"Resumí este informe en cinco puntos para una persona sin
conocimientos técnicos. Priorizá riesgos, decisiones y cifras relevantes. No
incluyas introducción."* Cinco elementos, mírenlos marcados: **claridad y
especificidad**, **rol o perspectiva** — para quién —, **ejemplos** del
resultado esperado cuando la tarea lo pide, **pasos** para tareas complejas, y
**separación** entre contexto, instrucción, datos y formato. No es una fórmula
mágica: es reducir la necesidad de que el modelo adivine. ¿Les suena? Es la
anomalía de la tabla de Seba: ambigüedad en la entrada, inconsistencia en la
salida.

## SLIDE 20 — Presupuesto de atención *(2:00, Turco)*

**TURCO:** "Entonces le tiro TODO el contexto y listo." No. Y la razón conecta
con toda la charla. Los modelos procesan **tokens** — pedacitos de texto, no
palabras exactas, no viene al caso el detalle — y el contexto es finito. Pero
el punto no es el límite técnico: es que **la atención es un presupuesto**.
🃏 Es la valija de mano de la low-cost: no es que no entre nada, es que lo que
metés de más te lo cobran.

¿Se acuerdan de la cita de Seba? "Rica en datos, pobre en información". Un
prompt de 50 páginas irrelevantes es eso: el ruido tapa la señal. En la
práctica: contexto relevante y nada más, una conversación por tema, tareas
grandes partidas en etapas, y resumir las decisiones importantes en vez de
arrastrar todo el historial. Curar la señal — EDA de nuevo, pero para la IA.

## SLIDE 21 — Markdown y el repo como base de conocimiento *(2:00, Turco)*

**TURCO:** ¿Y cómo se le da contexto sin fundir el presupuesto? La respuesta
de toda la charla: **estructura**. Markdown: títulos, secciones, listas.
Estructura barata que leemos igual los humanos y los modelos.

Con Claude Code esto se institucionaliza: un archivo `CLAUDE.md` en el
proyecto le explica al modelo cómo está organizado todo — es el **esquema** de
tu base de conocimiento, igual que el catálogo de la base de datos que
describía sus propias tablas. Documentos temáticos separados, y punteros en
vez de copias: el modelo abre el detalle solo cuando lo necesita. Divulgación
progresiva — el presupuesto se gasta a demanda.

Y el remate meta: **esta presentación se armó exactamente así**. Nuestros tres
cuatrimestres de apuntes — PDFs, slides, fotos de parciales — convertidos a
Markdown en un repo, con un índice general. Claude recorrió ese índice, leyó
los apuntes que necesitaba y trabajó sobre eso. El repo de la facultad terminó
siendo nuestra primera base de conocimiento para IA. No es teoría: lo están
mirando.

## SLIDE 22 — Cierre *(2:30, ambos)*

**SEBA:** Volvamos a la pregunta del principio: ¿qué tienen en común una base
de datos, un algoritmo y un prompt? Miren la tabla completa. Normalizar es
elegir una representación para que los datos no se contradigan. El modelo
estrella es elegir una representación para poder preguntar. Formular una
búsqueda es elegir una representación para poder resolver. Un prompt es elegir
una representación para que la IA no adivine.

**TURCO:** Distinta herramienta, misma disciplina: **estructurar el problema
antes de intentar resolverlo**. Y si se llevan una sola frase, que sea esta:

**SEBA:** "En estos tres cuatrimestres no encontramos una única forma de
resolver problemas. Aprendimos a elegir una representación, una estructura y
una estrategia según lo que necesitábamos construir."

**TURCO:** Gracias. Preguntas, quejas y consultas sobre el Excel heredado de
sus empresas: ahora. 🃏

---

## Notas de ensayo

- **Recorte de emergencia** (si van pasados de tiempo): slide 11 (historial) se
  cuenta en una frase sobre la slide 10 y se salta; slide 17 puede reducirse al
  ejemplo de las monedas.
- **Chistes**: son 9 marcados; con que caigan 5 la charla respira. No forzar.
- **Datos a memorizar bien**: la fila-frase de granularidad (cliente 112920,
  2 artículos 14212, $1300, sucursal 14, 26/02/2023), el ejemplo de monedas
  (dar 6 con denominaciones {1, 3, 4} — greedy: 4+1+1 = 3 monedas; óptimo:
  3+3 = 2), los 177 nulos de edad del Titanic (891 filas, columna Age con 714
  no nulos).
- **CAP**: decir SIEMPRE "ante una partición de red". Es la diferencia entre
  citarlo bien y citarlo como en Twitter.
- **Transiciones con nombre**: el nodo (slides 5 → 14 → 15), la cita "rica en
  datos, pobre en información" (slides 8 → 20), la tensión estructura/uso
  (slides 3 → 10 → 14 → 21).
