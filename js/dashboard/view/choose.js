define(function(require, exports, module) {

    // top view
    module.exports = Backbone.View.extend({
        el: '#show',
        template: require('../tpl/choose.tpl'), 
        render: function(){
            this.el.innerHTML = juicer(this.template, this.model);
        }
    }); 

});