// Set configuration
seajs.config({
    alias: {
        //backbone mvc
        //view for router
        "nav_view": HOMEPATH+"/view/nav.js",
        "mySavour": HOMEPATH+"/view/mySavour.js",
        "matchClothes": HOMEPATH+"/view/matchClothes.js",
        "savourUpload": HOMEPATH+"/view/savourUpload.js",
        "iNeed": HOMEPATH+"/view/iNeed.js",

        //view for page
        "top_view": HOMEPATH+"/view/top.js",
        "colShow_view": HOMEPATH+"/view/colShow.js",
        "top5_view": HOMEPATH+"/view/top5.js",
        "choose_view": HOMEPATH+"/view/choose.js",
        "chooseResult_view": HOMEPATH+"/view/chooseResult.js",
        "upload_view": HOMEPATH+"/view/upload.js",

        //plugin for router
        "fileupload": HOMEPATH+"/lib/jquery.fileupload.js",
        "widget": HOMEPATH+"/lib/jquery.ui.widget.js",
        
        //just for dev
        //"test": "/js/test.js"
    },

    debug: true,

    charset: 'utf-8'
});
    seajs.use( HOMEPATH+"/router.js");

