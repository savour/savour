define(function(require, exports, module) {

    module.exports = Backbone.View.extend({
        render: function(){
            
            //clear page
            $("#show").empty();
            // here is top
            $("#show").append('<div id="top" class="table-responsive"></div>');
            var top_model = Backbone.Model.extend({
                url: '../../../savour/fake/top.json',
                defaults: {
                    "view":  "mySavour",
                    "name":  "top"
                }
            });
            var topModel = new top_model();
            topModel.save("author","Sunny", {
                 success:function(model, text){
                    var top_view = require('top_view');
                    topView = new  top_view();
                    topView.model = text;
                    topView.render();
                 },
                 error:function(){
                     alert("top error!");
                 }
             });
            //topView.model = topModel.save();

            // here is colShow
            $("#show").append('<div id="colShow" style="min-width: 310px; height: 400px; margin: 100px auto"></div>');
            var colShow_model = Backbone.Model.extend({
                url: '../../../savour/fake/topTitle.json',
                defaults: {
                    "view":  "mySavour",
                    "name":  "colShow"
                }
            });
            var colShowModel = new colShow_model();
            colShowModel.save("author","Sunny",{
                 success:function(model, text){
                    var colShow_view = require('colShow_view');
                    colShowView = new  colShow_view();
                    colShowView.model = text;
                    colShowView.render();
                 },
                 error:function(){
                     alert("colShow error!");
                 }
             });
            //topView.model = topModel.save();

            // here is top5
            $("#show").append('<div class="table-responsive" id="top5"></div>');
            var top5_model = Backbone.Model.extend({
                url: '../../../savour/fake/top5.json',
                defaults: {
                    "view":  "mySavour",
                    "name":  "top5"
                }
            });
            var top5Model = new top5_model();
            top5Model.save("author","Sunny",{
                 success:function(model, text){
                    var top5_view = require('top5_view');
                    top5View = new  top5_view();
                    top5View.model = text;
                    top5View.render();
                 },
                 error:function(error){
                     alert("top5 error!");
                 }
             });
            //topView.model = topModel.save();

        }
    }); 


});