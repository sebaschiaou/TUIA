# Conceptos pendientes, supuestos y decisiones revisables

Lo que NO se pudo validar contra el repo, lo que se asumió, y lo que los
presentadores podrían querer cambiar. Leer antes del ensayo.

## No encontrado en el repositorio (y cómo se resolvió)

1. **Desarrollo de normalización con ejemplos (BD I, Unidad 3).** El programa
   la documenta (Clase 1, p.8) pero las clases descargadas son la 1-3 y 5-7;
   la clase del desarrollo de formas normales no está. **Resolución**: el
   ejemplo evolutivo de las slides 6-7 es elaboración propia fiel al programa,
   marcado "ampliación parcial". **Acción sugerida**: si tienen el PDF de esa
   clase (campus virtual), bajarlo a `Bases de Datos I (clases sueltas)/` y
   contrastar el ejemplo.
2. **Prompt engineering / tokens / CLAUDE.md.** Nada en apuntes (esperable:
   no fue materia). Todo el Acto 5 va como ampliación declarada, anclado en
   PLN (U6 de Intro IA) y en la evidencia del propio repo.
3. **SCD / event sourcing.** Solo se menciona que "la industria les pone
   nombre"; el contenido real de la slide 11 sale del TP (precios con
   vigencia). No atribuir los nombres a la cursada.
4. **4FN / 5FN.** No están en el material → fuera de slides; respuesta
   honesta en apéndice A1.
5. **Herramientas de orquestación modernas** (Airflow, etc.): no aparecen; la
   slide 9 usa el vocabulario genérico y SSIS como caso real.

## Supuestos tomados (registrar si se cambian)

- **BD I se presenta dentro del relato aunque su carpeta no estaba en el
  repo** — las clases estaban sueltas en Downloads y se incorporaron. Supuse
  que la cursaron ustedes (los PDFs son de 2SEM2025, C2). Si no es así, avisar
  y se reetiqueta la fuente.
- **El laberinto BFS vs A\*** (slide 16): traza de expansión ilustrativa (el
  apunte da los algoritmos y el laberinto, no esa traza pintada). Rotulado en
  la slide.
- **Distribución de tiempo** Seba ≈ 24' / Turco ≈ 18': sale de la guía del
  encargo (Seba datos/algoritmos, Turco IA) más el Acto 1 asignado al Turco
  para equilibrar. Se puede repartir distinto sin tocar slides (la etiqueta
  de presentador se cambia en un atributo).
- **Los quizzes de Intro IA** pasaron por OCR con calidad media: no se usaron
  como fuente de ninguna afirmación.

## Decisiones que los presentadores pueden querer revisar

- **Los 9 chistes** del guion (marcados 🃏): calibrarlos en el ensayo; el
  contenido no depende de ninguno.
- **La slide 11 (historial)** es el recorte natural si van pasados de tiempo.
- **El cameo del Turco** al final de la slide 12: funciona solo si están los
  dos al frente; si presentan por turnos estrictos, pasarlo a texto de Seba.
- **"Excel 🙃"** en el diagrama ETL: si el público es muy corporativo,
  quitarle el emoji (queda "Excel" a secas, igual de gracioso).
- La frase final está duplicada a propósito (guion y slide 22): decidir si la
  lee uno o la dicen a dos voces.

## Verificación pendiente de los presentadores

- [ ] Ensayo completo con timer (objetivo 35-38'; tope 45').
- [ ] Confirmar que el ejemplo de monedas se dice bien: {1,3,4} para dar 6.
- [ ] Revisar que la fila-frase de granularidad se lea textual desde la slide.
- [ ] Probar `presentacion.html` en la pantalla/proyector real (tecla F).
- [ ] Decidir si se imprime el guion o se usan las notas con tecla N.
