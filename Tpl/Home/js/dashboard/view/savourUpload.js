define(function(require, exports, module) {

    module.exports = Backbone.View.extend({
        render: function(){

            // clear page
            $("#show").empty();

            // here is top
            $("#show").append('<div id="top" class="table-responsive"></div>');
            var top_model = Backbone.Model.extend({
                url: '../../../savour/Tpl/Home/fake/topUpload.json',
                defaults: {
                    "view":  "savourUpload",
                    "name":  "top"
                }
            });
            var topModel = new top_model();
            topModel.save("author","Sunny",{
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

            // here is upload
            $("#show").append('<div id="upload"></div>');
            var upload_view = require('upload_view');
            uploadView = new  upload_view();
            uploadView.render();




        }
    }); 
});