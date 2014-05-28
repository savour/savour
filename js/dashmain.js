// Set configuration
seajs.config({
    alias: {
        //backbone mvc 相关 
        //preload的插件，路径针对savourDashboard.html
        "jquery": "./js/jquery-1.10.2.min.js",
        "respond": "./js/respond.min.js",
        "bootstrap": "./js/bootstrap.min.js",
        "underscore": "./js/dashboard/underscore-min.js",
        "backbone": "./js/dashboard/backbone-min.js",
        "juicer": "./js/Juicer/build/juicer-min.js",
        "dashboard": "./js/dashboard.js",
        //写在require中，路径针对js
        "nav_view": "./nav.js",
    },

    preload: [
    'jquery',
    'respond',
    'bootstrap',
    'underscore',
    'backbone',
    'juicer',
    'dashboard'
    ],

    debug: true,

    charset: 'utf-8'
});

seajs.use("./js/dashboard/router.js");
