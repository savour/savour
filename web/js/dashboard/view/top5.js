define(function(require, exports, module) {

    // top view
    module.exports = Backbone.View.extend({
        el: '#top5',
        template: require('../tpl/top5.tpl'), 
        render: function(){
            this.el.innerHTML = juicer(this.template, this.model);
        }
    }); 

});