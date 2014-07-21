define(function(require, exports, module) {

    //载入view层的nav
    var nav_view = require('nav_view');
    navView = new  nav_view();

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

            navView.model.set('current', 'mySavour'); 
            var mySavour_view = require('mySavour');
            mySavourView = new  mySavour_view();
            mySavourView.render();
        },
        matchClothes: function(){

            navView.model.set('current', 'matchClothes'); 
            var matchClothes_view = require('matchClothes');
            matchClothesView = new  matchClothes_view();
            matchClothesView.render();
        },
        savourUpload: function(){

            navView.model.set('current', 'savourUpload'); 
            //异步加载w，f；执行完成之后再回调savourUpload
            require.async(['widget', 'fileupload'], function(w, f) {
                var savourUpload_view = require('savourUpload');
                savourUploadView = new  savourUpload_view();
                savourUploadView.render();
            });
        },
        iNeed: function(){

            navView.model.set('current', 'iNeed'); 
            var iNeed_view = require('iNeed');
            iNeedView = new  iNeed_view();
            iNeedView.render();

        }
    });
    var router = new Router();
    Backbone.history.start();

});