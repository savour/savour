define(function(require, exports, module) {

    // top view
    module.exports = Backbone.View.extend({
        el: '#top',
        template: require('../tpl/top.tpl'), 
        render: function(){
            this.el.innerHTML = juicer(this.template, this.model);
        }
    }); 

});