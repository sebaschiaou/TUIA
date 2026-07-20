# Decisiones de diseño

## Tecnología

No existía ninguna solución de presentación en el repo (se buscó Marp,
Reveal.js, Slidev, Quarto, generadores pptx: nada). Se construyó **HTML + CSS
+ JS puro, sin dependencias**: se abre con doble click, funciona sin internet,
y los diagramas son SVG inline (editables a mano). No se generó `.pptx`: no
había herramienta disponible y el encargo pedía no forzar instalaciones.

## Sistema visual

- **Tema**: oscuro (`#0b1020`), dos acentos — verde-agua `#5eead4` (principal,
  bloques de Seba/datos) y violeta `#818cf8` (secundario, bloques del
  Turco/estructuras alternativas). Ámbar `#fbbf24` para advertencias y sellos
  de ampliación; rojo `#f87171` reservado a problemas (anomalías, ruido).
- **Tipografía**: `system-ui` (sin fuentes externas); monoespaciada del
  sistema para código y tablas de datos. Tamaños con `clamp()` — escalan del
  proyector a la notebook.
- **Jerarquía fija por slide**: kicker (acto) → título-conclusión → cuerpo →
  pie de fuente. El título siempre enuncia una idea, nunca un tema ("Los
  datos operativos no nacen listos para analizar", no "Data Warehouse").
- **Densidad**: máx. ~40 palabras visibles por slide fuera de código/tablas;
  el detalle vive en las notas del orador (tecla `N`) y en el guion.
- **Trazabilidad académica en pantalla**: cada slide lleva su pie `Fuente:` y
  las ampliaciones un sello ámbar `ampliación` — la honestidad intelectual es
  parte del diseño, no una nota al pie del repo.

## Reglas de composición

- Un recurso visual dominante por slide (tabla, diagrama SVG o código), nunca
  dos compitiendo.
- Comparaciones siempre lado a lado con el mismo esqueleto (débil/mejorado,
  BFS/A*, operativo/analítico) para que la diferencia sea lo único que cambia.
- El ejemplo transversal (ventas: Carla, el Monitor 24", el producto 14212)
  reaparece en las slides 3, 4, 6, 7, 10 y 11 — misma historia, distinta
  representación.
- Tres motivos recurrentes cosen la charla: el **nodo** (slides 5→14→15), la
  cita **"rica en datos, pobre en información"** (8→20) y la tesis
  **estructura-según-uso** (3→10→14→21).
- Emojis: solo 2 en toda la presentación (📊 consumo, 🙃 Excel). Los íconos
  son SVG propios.

## Interacción

`←/→`, espacio, PgUp/PgDn, Home/End; click (mitad derecha avanza); swipe
táctil; `N` notas del orador; `F` pantalla completa; `#n` en la URL para
saltar a una slide (deep-link para ensayar). Barra de progreso y contador.
CSS de impresión: una slide por página (para repartir en PDF via Ctrl+P).

## Presentadores

Bloques contiguos, no alternancia por slide: Turco abre (1, 3-5), Seba lleva
el tramo largo (6-17) con un cameo del Turco como transición (fin de slide
12), Turco cierra su acto (18-21) y el final es a dos voces (2 y 22). Etiqueta
de color arriba a la derecha en cada slide indica quién habla.
