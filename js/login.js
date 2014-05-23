$(function(){


    //模态框控制
    var myOptions = {
        show: true,
        keyboard: false
    }
    $('#loginModel').modal(myOptions);
    //savour click
    $(".mytitle").click(function() {
        $('#loginModel').modal('show');
    });


});