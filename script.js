/* Navegación de la presentación. Sin dependencias.
   ← → / espacio / PgUp-PgDn: moverse · Home/End: extremos
   N: notas del orador · F: pantalla completa · número en la URL (#12) = slide */
(function () {
  "use strict";

  const slides = Array.from(document.querySelectorAll(".slide"));
  const bar = document.getElementById("bar");
  const count = document.getElementById("count");
  let cur = 0;

  function clamp(n) { return Math.max(0, Math.min(slides.length - 1, n)); }

  function show(n, pushHash) {
    cur = clamp(n);
    slides.forEach((s, i) => s.classList.toggle("active", i === cur));
    bar.style.width = ((cur + 1) / slides.length * 100) + "%";
    count.textContent = (cur + 1) + " / " + slides.length;
    if (pushHash !== false) history.replaceState(null, "", "#" + (cur + 1));
  }

  function fromHash() {
    const n = parseInt(location.hash.slice(1), 10);
    show(isNaN(n) ? 0 : n - 1, false);
  }

  document.addEventListener("keydown", (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    switch (e.key) {
      case "ArrowRight": case "PageDown": case " ": show(cur + 1); e.preventDefault(); break;
      case "ArrowLeft":  case "PageUp":              show(cur - 1); e.preventDefault(); break;
      case "Home": show(0); break;
      case "End":  show(slides.length - 1); break;
      case "n": case "N": document.body.classList.toggle("show-notes"); break;
      case "f": case "F":
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen().catch(() => {});
        break;
    }
  });

  // Click: mitad derecha avanza, mitad izquierda retrocede.
  document.getElementById("deck").addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    show(e.clientX > innerWidth / 2 ? cur + 1 : cur - 1);
  });

  // Swipe táctil básico.
  let x0 = null;
  addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) show(dx < 0 ? cur + 1 : cur - 1);
    x0 = null;
  }, { passive: true });

  addEventListener("hashchange", fromHash);
  fromHash();
})();
