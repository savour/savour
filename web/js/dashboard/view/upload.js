define(function(require, exports, module) {

    // upload view
    module.exports = Backbone.View.extend({
        el: '#upload',
        template: require('../tpl/upload.tpl'), 
        render: function(){
            this.el.innerHTML = juicer(this.template, this.model);

            //插件就不写event那种形式了
            $('#fileupload').fileupload({
                url: "../../../fake/upload.json",
                dataType: 'json',
                done: function (e, data) {
                    alert("success!");
                }
            });
        }
    }); 

});