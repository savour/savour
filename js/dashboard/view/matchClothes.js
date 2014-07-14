define(function(require, exports, module) {

    module.exports = Backbone.View.extend({
        render: function(){

            // clear page
            $("#show").empty();

            // here is choose
            var choose_view = require('choose_view');
            chooseView = new  choose_view();
            chooseView.render();

            // here is chooseResult
            $("#show").append('<div class="table-responsive" id="chooseResult"></div>');
            var chooseResult_model = Backbone.Model.extend({
                url: '../../fake/chooseResult.json',
                defaults: {
                    "view":  "matchClothes",
                    "name":  "chooseResult"
                }
            });
            var chooseResultModel = new chooseResult_model();
            chooseResultModel.fetch({
                 success:function(model, text){
                    var chooseResult_view = require('chooseResult_view');
                    chooseResultView = new  chooseResult_view();
                    chooseResultView.model = text;
                    chooseResultView.render();
                 },
                 error:function(error){
                     alert("chooseResult error!");
                 }
             });
            //topView.model = topModel.save();


        }
    }); 


});