import { addHover } from './src/js/mdc-hover';

window.onload = _ => {
    require('./src/js/animations');
    document.querySelector("#loader").style.display = "none";
    document.querySelector("#content").style.display = "grid";
};