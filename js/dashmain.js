// Set configuration
seajs.config({
    alias: {
        "jquery": "./js/jquery-1.10.2.min.js",
        "respond": "./js/respond.min.js",
        "bootstrap": "./js/bootstrap.min.js",
        "dashboard": "./js/dashboard.js"
    },

    preload: [
    'jquery',
    'respond',
    'bootstrap',
    'dashboard'
    ],

    debug: true,

    charset: 'utf-8'
});

seajs.use("./js/dashboard/router.js");

