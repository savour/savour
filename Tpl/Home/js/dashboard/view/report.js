define(function(require, exports, module) {

    // top view
    module.exports = Backbone.View.extend({
        el: '#report',
        template: require('../tpl/report.tpl'), 
        events : {  
            'click .add' : 'add',
            'click .edit' : 'edit',  
        },  
        add : function(event) {  
            $('#addModel').modal('show');
        },  
        edit : function(event) {  
            $('#editModel').modal('show');
        },  
        render: function(){
            this.el.innerHTML = juicer(this.template, this.model);
            //插件就不写event那种形式了
            $('#fileupload').fileupload({
                //url: "../../../fake/upload.json",
                url: UPLOAD,
                dataType: 'json',
                done: function (e, data) {
                    $url = "/savour/Clothes/"+data.result[0].savename;
                    $("#image").attr('src', $url);
                }
            });  

            var today = dquery(new Date()).format('yyyy-mm-dd');
            $('#buytime').daterangepicker({
                format: 'YYYY-MM-DD',
                startDate: today,  
                singleDatePicker: true,
            });
            
        }
    }); 

});