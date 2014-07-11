define(function(require, exports, module) {

    //top model
    var top_model = Backbone.Model.extend({
        url: '../../fake/top.json',
        defaults: {
            "view":  "mySavour",
            "name":  "top"
        }
    });
    var topModel = new top_model();
    topModel.fetch({
         success:function(model, text){
            var top_view = require('top_view');
            topView = new  top_view();
            topView.model = text;
            topView.render();
         },
         error:function(){
             alert("error!");
         }
     });
    //topView.model = topModel.save();


    //colShow model
    var colShow_model = Backbone.Model.extend({
        url: '../../fake/topTitle.json',
        defaults: {
            "view":  "mySavour",
            "name":  "colShow"
        }
    });
    var colShowModel = new colShow_model();
    colShowModel.fetch({
         success:function(model, text){
            var colShow_view = require('colShow_view');
            colShowView = new  colShow_view();
            colShowView.model = text;
            colShowView.render();
         },
         error:function(){
             alert("error!");
         }
     });
    //topView.model = topModel.save();







});