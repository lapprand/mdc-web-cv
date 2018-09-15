var hoverEls = document.querySelectorAll('#hover');

hoverEls.forEach(function(hoverEl) {
  hoverEl.addEventListener('mouseenter', function () {
    console.log("Entrou");
    this.classList.remove('mdc-elevation--z2');
    this.classList.add('mdc-elevation--z8');
  });
  hoverEl.addEventListener('mouseleave', function () {
    console.log("Saiu");
    this.classList.remove('mdc-elevation--z8');
    this.classList.add('mdc-elevation--z2');
  });
});