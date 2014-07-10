// Set configuration
seajs.config({
    alias: {
        //backbone mvc 相关 

        //preload的插件，路径针对savourDashboard.html
        // "PRELOAD_DATA": "./js/dashboard/preload-data.js",
        // "jquery": "./js/jquery-1.10.2.min.js",
        // "respond": "./js/respond.min.js",
        // "bootstrap": "./js/bootstrap.min.js",
        // "underscore": "./js/dashboard/underscore-min.js",
        // "backbone": "./js/dashboard/backbone-min.js",
        // "juicer": "./js/Juicer/build/juicer-min.js",
        // "highcharts": "./js/dashboard/highcharts.js",
        // "data": "./js/dashboard/data.js",
        // "drilldown":"./js/dashboard/drilldown.js",
        //"exporting": "./js/dashboard/exporting.js",

        //view 写在require中，路径针对js
        "nav_view": "./nav.js",
        "top_view": "./top.js",

        //model
        "mySavour": "./js/dashboard/mySavour.js",

        //just for dev
        "test": "./js/test.js"
    },

    // preload: [
    // 'PRELOAD_DATA',
    // 'jquery',
    // 'respond',
    // 'bootstrap',
    // 'underscore',
    // 'backbone',
    // 'juicer',
    // 'highcharts',
    // 'data',
    // 'drilldown',
    // 'test'
    // ],

    debug: true,

    charset: 'utf-8'
});
    seajs.use("./js/dashboard/router.js");

