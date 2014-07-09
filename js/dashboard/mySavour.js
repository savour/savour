define(function(require, exports, module) {

    ///////////////top///////////////////
    
    //top model
    var top_model = Backbone.Model.extend({
        url: '../../fake/top.json',
        defaults: {
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





});