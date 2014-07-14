// Set configuration
seajs.config({
    alias: {
        //backbone mvc
        //view for router
        "nav_view": "./view/nav.js",
        "mySavour": "./view/mySavour.js",
        "matchClothes": "./view/matchClothes.js",
        "savourUpload": "./view/savourUpload.js",
        "iNeed": "./view/iNeed.js",

        //view for page
        "top_view": "./top.js",
        "colShow_view": "./colShow.js",
        "top5_view": "./top5.js",
        "choose_view": "./choose.js",
        "chooseResult_view": "./chooseResult.js",
        "upload_view": "./upload.js",

        //plugin for router
        "fileupload": "./lib/jquery.fileupload.js",
        "widget": "./lib/jquery.ui.widget.js",
        
        //just for dev
        "test": "./js/test.js"
    },

    debug: true,

    charset: 'utf-8'
});
    seajs.use("./js/dashboard/router.js");

