# Presentación: "Estructurar antes de resolver"

Charla de 35-40 minutos para un público técnico (agentes de IA,
automatización, desarrollo) sobre qué aprendimos en los primeros tres
cuatrimestres de TUIA. Presentan **Seba** y **el Turco**.

## Cómo abrir la presentación

Doble click en **`presentacion.html`** — no necesita internet ni instalar
nada. Controles: `←/→` o click para navegar, `N` notas del orador, `F`
pantalla completa, `Ctrl+P` para exportar a PDF (una slide por página).
La URL guarda la slide actual (`#12`), útil para ensayar por tramos.

## Qué archivo es la fuente de qué

| Archivo | Rol |
|---|---|
| `presentacion.html` + `styles.css` + `script.js` | La presentación navegable (22 slides + 4 de apéndice) |
| `slides.md` | **Fuente de verdad del contenido** de cada slide, editable |
| `06_guion_Seba_y_turco.md` | Guion oral completo, con tiempos, chistes marcados 🃏 y notas de ensayo |
| `05_estructura_de_slides.md` | Ficha técnica de cada slide (mensaje, visual, fuente, transición) |
| `04_hilo_conductor.md` | La historia completa y por qué este orden |
| `02_mapa_de_fuentes.md` | Cada concepto → archivo del repo que lo sustenta |
| `03_revision_conceptual.md` | Correcciones, precisiones y qué se decidió NO decir |
| `01_inventario_repositorio.md` | Qué material se revisó y su utilidad |
| `07_decisiones_de_diseno.md` | Sistema visual y reglas de composición |
| `08_conceptos_pendientes.md` | **Leer antes del ensayo**: supuestos, faltantes y checklist |

## Cómo editar o regenerar

- Cambio de texto puntual: editar `presentacion.html` directo (el contenido
  está en HTML plano) y reflejarlo en `slides.md`, o al revés.
- Cambios grandes: editar `slides.md` / el guion y pedirle a Claude que
  sincronice el HTML — este directorio + `_md/INDICE.md` le dan todo el
  contexto necesario.
- Los diagramas son SVG inline en el HTML: se editan como texto.

## Herramientas usadas

Los apuntes se leyeron desde `_md/` (conversión pdf/pptx/docx→Markdown con
`_tools/a_markdown.py`, OCR en español para escaneados). La presentación es
HTML/CSS/JS sin dependencias. No se agregó ninguna librería.

## Pendientes clave (detalle en `08_conceptos_pendientes.md`)

- Falta la clase de BD I con el desarrollo de formas normales (el ejemplo de
  las slides 6-7 es elaboración propia sobre el programa — bajarla del campus
  si quieren contrastar).
- Todo el bloque de Claude/prompts/tokens es ampliación declarada (no fue
  materia): así está sellado en las slides.
- Ensayo con timer pendiente: objetivo 35-38 minutos.
