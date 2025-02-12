var req = require.context("./src/media");
req.keys().forEach(req);

// Check that service workers are registered
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
            // console.log('SW registered: ', registration);
        }).catch(registrationError => {
            // console.log('SW registration failed: ', registrationError);
        });
    });
}

window.onload = _ => {
    document.querySelector("#loader").style.display = "none";
    document.querySelector(".grid").style.display = "grid";
    require('./src/js/animations');
};