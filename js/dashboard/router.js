define(function(require, exports, module) {
    var nav_view = require('nav_view');
    navView = new  nav_view();
    navView.render();

    var Router = Backbone.Router.extend({
        routes: {
            '': 'mySavour',
            '!/mySavour': 'mySavour',
            '!/matchClothes': 'matchClothes',
            '!/savourUpload': 'savourUpload',
            '!/iNeed': 'iNeed'
        },
        mySavour: function(){
            alert("mySavour");
        },
        matchClothes: function(){
            alert("matchClothes");
        },
        savourUpload: function(){
            alert("savourUpload");
        },
        iNeed: function(){
            alert("iNeed");
        }
    });
    var router = new Router();
    Backbone.history.start();



});