define(function(require, exports, module) {

    //将PRELOAD_DATA载入model层
    var preload_data = new Backbone.Model();
    preload_data.set(window.data);

    //载入view层的nav
    var nav_view = require('nav_view');
    navView = new  nav_view();
    navView.model = preload_data.toJSON(); //将model引入view中
    navView.render();

    //加载控制器中所用页面
    var mySavour_view = require('mySavour_view');

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
            mySavourView = new mySavour_view();
            mySavourView.model = preload_data;
            mySavourView.render();
        },
        matchClothes: function(){
            //alert("matchClothes");
        },
        savourUpload: function(){
            //alert("savourUpload");
        },
        iNeed: function(){
            //alert("iNeed");
        }
    });
    var router = new Router();
    Backbone.history.start();

});