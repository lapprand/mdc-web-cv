// require('./src/js/modernizr-custom');
require('./src/js/favicon');

window.onload = _ => {
    require('./src/js/animations');
    document.querySelector("#loader").style.display = "none";
    document.querySelector("#content").style.display = "grid";
};