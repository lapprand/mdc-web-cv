var req = require.context("./src/media");
req.keys().forEach(req);

window.onload = _ => {
    require('./src/js/animations');
    document.querySelector("#loader").style.display = "none";
    document.querySelector(".grid").style.display = "grid";
};