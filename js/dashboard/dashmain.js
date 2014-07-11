// Set configuration
seajs.config({
    alias: {
        //backbone mvc
        //view 写在require中，路径针对js
        "nav_view": "../view/nav.js",
        "top_view": "../view/top.js",
        "colShow_view": "../view/colShow.js",
        "top5_view": "../view/top5.js",
        //model

        //controller
        "mySavour": "./js/dashboard/controller/mySavour.js",
        "matchClothes": "./js/dashboard/controller/matchClothes.js",

        //just for dev
        "test": "./js/test.js"
    },

    debug: true,

    charset: 'utf-8'
});
    seajs.use("./js/dashboard/controller/router.js");

