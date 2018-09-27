var hoverEls = document.querySelectorAll('.hover');

hoverEls.forEach(function(hoverEl) {
  hoverEl.addEventListener('mouseenter', function () {
    this.classList.remove('mdc-elevation--z1');
    this.classList.add('mdc-elevation--z8');
  });
  hoverEl.addEventListener('mouseleave', function () {
    this.classList.remove('mdc-elevation--z8');
    this.classList.add('mdc-elevation--z1');
  });
});