window.onload = _ => {
    require('./src/js/sliderconf');
    require('./src/js/animations');
    require('./src/js/mdc-hover');
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".fit-viewport").style.display = "grid";
};