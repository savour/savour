$(function(){
    $('#pie1').highcharts({
        credits: {
                enabled: false
        },
        chart: {
            printChart:false,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '上衣各类型所占比例'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['T恤',   32.8],
                ['衬衫',       26.2],
                ['西装',    21.0],
                ['开衫',     16.3],
                ['其他类型',   3.7]
            ]
        }]
    });

});