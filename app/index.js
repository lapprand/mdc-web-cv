window.onload = _ => {
    require('./src/js/mdc-hover');
    require('./src/js/sliderconf');
    require('./src/js/animations');
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".fit-viewport").style.display = "grid";
};