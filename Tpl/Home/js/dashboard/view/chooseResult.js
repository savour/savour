define(function(require, exports, module) {

    // top view
    module.exports = Backbone.View.extend({
        el: '#chooseResult',
        template: require('../tpl/chooseResult.tpl'), 
        render: function(){
            this.el.innerHTML = juicer(this.template, this.model);
        }
    }); 

});