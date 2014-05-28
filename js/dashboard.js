define(function(require, exports, module) {
    // dashboard 左侧导航事件
    $('.menuhere').click(function(event) {
        /* Act on the event */
        $('.menuhere').removeClass('current');
        $('.submenu').removeClass('current');
        $(this).addClass('current');
        $('.submenu').slideUp("normal");
    });
    $('.submenu').hide();
    $('.fakemenuhere').click(function(event) {
        /* Act on the event */
        $('.submenu').slideUp("normal");
        $(this).next().children().children('.submenu').slideDown("normal");
    });
    $('.submenu').click(function(event) {
        /* Act on the event */
        $('.menuhere').removeClass('current');
        $('.submenu').removeClass('current');
        $(this).addClass('current');
    });

});
