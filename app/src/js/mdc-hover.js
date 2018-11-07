export function addHover(el, initialElevation, endElevation) {
  el.classList.add("mdc-elevation-transition");
  el.classList.add("mdc-elevation--z" + initialElevation);
  el.addEventListener("mouseenter", function () {
    this.classList.remove("mdc-elevation--z" + initialElevation);
    this.classList.add("mdc-elevation--z" + endElevation);
  });
  el.addEventListener("mouseleave", function () {
    this.classList.remove("mdc-elevation--z" + endElevation);
    this.classList.add("mdc-elevation--z" + initialElevation);
  });
}