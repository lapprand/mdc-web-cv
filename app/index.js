var req = require.context("./src/media");
req.keys().forEach(req);

// req = require.context("./favicon");
// req.keys().forEach(req);

window.onload = _ => {
    require('./src/js/animations');
    document.querySelector("#loader").style.display = "none";
    document.querySelector("#content").style.display = "grid";
};