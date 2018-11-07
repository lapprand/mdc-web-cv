import { addHover } from './src/js/mdc-hover';

window.onload = _ => {
    require('./src/js/animations');
    var hoverEls = document.querySelectorAll('.hover');
    for (let el of hoverEls) {
        addHover(el, 0, 8);
    }
    document.querySelector("#loader").style.display = "none";
    document.querySelector("#content").style.display = "grid";
};