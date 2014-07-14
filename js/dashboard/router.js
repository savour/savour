define(function(require, exports, module) {

    //将PRELOAD_DATA载入model层
    var preload_data = new Backbone.Model();
    preload_data.set(window.data);

    //载入view层的nav
    var nav_view = require('nav_view');
    navView = new  nav_view();
    navView.model = preload_data.toJSON(); //将model引入view中
    navView.current = "mySavour";
    navView.render();

    //控制器
    var Router = Backbone.Router.extend({
        routes: {
            '': 'mySavour',
            '!/mySavour': 'mySavour',
            '!/matchClothes': 'matchClothes',
            '!/savourUpload': 'savourUpload',
            '!/iNeed': 'iNeed'
        },
        mySavour: function(){

            navView.current = "mySavour";
            navView.render();

            var mySavour_view = require('mySavour');
            mySavourView = new  mySavour_view();
            mySavourView.render();
        },
        matchClothes: function(){

            navView.current = "matchClothes";
            navView.render();

            var matchClothes_view = require('matchClothes');
            matchClothesView = new  matchClothes_view();
            matchClothesView.render();
        },
        savourUpload: function(){

            navView.current = "savourUpload";
            navView.render();

            var savourUpload_view = require('savourUpload');
            savourUploadView = new  savourUpload_view();
            savourUploadView.render();
        },
        iNeed: function(){

            navView.current = "iNeed";
            navView.render();

            var iNeed_view = require('iNeed');
            iNeedView = new  iNeed_view();
            iNeedView.render();

        }
    });
    var router = new Router();
    Backbone.history.start();

});