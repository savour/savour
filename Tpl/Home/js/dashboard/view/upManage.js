define(function(require, exports, module) {

    module.exports = Backbone.View.extend({
        render: function(){

            // clear page
            $("#show").empty();

            // here is report
            $("#show").append('<div id="report" class="panel panel-default"></div><div id="fenye" class="pagination"></div>');
            //页面初始化时加载数据
            var report_model = Backbone.Model.extend({
                url: UPMANAGE,
                defaults: {
                    "view":  "upManage",
                    "name":  "report",
                    "page": 1,
                }
            });
            var reportModel = new report_model();
            reportModel.save("author","Sunny", {
                success:function(model, text){                    
                    var report_view = require('report_view');
                    reportView = new  report_view();
                    reportView.model = text;
                    reportView.render();
                    //提示框
                    $('.op2').tooltip({
                        placement: 'top',
                        trigger: 'hover',
                        title: '查看/编辑详情'
                    });
                    $('.op3').tooltip({
                        placement: 'top',
                        trigger: 'hover',
                        title: '删除'
                    });
                    //制作分页
                    var options = {
                        currentPage: 1,
                        totalPages: text.sumpages,
                        onPageChanged: function(e,originalEvent,page){
                            //onPageChanged start
                            $("#report").empty();
                            var report_model = Backbone.Model.extend({
                                url: UPMANAGE,
                                defaults: {
                                    "view":  "upManage",
                                    "name":  "report",
                                    "page": page,
                                }
                            });
                            var reportModel = new report_model();
                            reportModel.save("author","Sunny", {
                                 success:function(model, text){
                                    var report_view = require('report_view');
                                    reportView = new  report_view();
                                    reportView.model = text;
                                    reportView.render();
                                    //提示框
                                    $('.op2').tooltip({
                                        placement: 'top',
                                        trigger: 'hover',
                                        title: '查看/编辑详情'
                                    });
                                    $('.op3').tooltip({
                                        placement: 'top',
                                        trigger: 'hover',
                                        title: '删除'
                                    });
                                 },
                                 error:function(){
                                     alert("report error!");
                                 }
                             });
                            //onPageChanged done
                        }
                    }
                    $('#fenye').bootstrapPaginator(options);
                },
                error:function(){
                    alert("初始数据失败!");
                }
             });
            //reportView.model = reportModel.save();
        }
    }); 
});