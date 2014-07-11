define(function(require, exports, module) {

    // insert tpl
    $("#show").append('<div id="colShow" style="min-width: 310px; height: 400px; margin: 100px auto"></div>');

    // colShow view
    //这个view是highchart控件不需要模板
    module.exports = Backbone.View.extend({
        el: '#colShow',
        render: function(){

            // Create the chart
            $('#colShow').highcharts({
                credits: {
                     enabled: false
                },
                chart: {
                    type: 'column'
                },
                title: {
                    text: '您上传到 Savour 的服饰比例'
                },
                subtitle: {
                    text: '点击柱状图可以获得更多类型比例'
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: '百分比(%)'
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.1f}%'
                        }
                    }
                },

                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                }, 

                series: [{
                    name: 'Savour',
                    colorByPoint: true,
                    data: this.model[0]
                }],
                drilldown: {
                    series: this.model[1]
                }
            })
        }
    }); 

});