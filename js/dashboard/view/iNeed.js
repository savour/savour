define(function(require, exports, module) {

    module.exports = Backbone.View.extend({
        render: function(){

            // clear page
            $("#show").empty();

            //test
            $("#show").append('<div class="alert alert-success" role="alert">\
            <strong>让我想想: </strong>这个地方应该怎么搞呢？</div>');


        }
    }); 
});