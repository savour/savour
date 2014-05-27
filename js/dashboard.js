define(function(require, exports, module) {

        $('.menuhere').click(function(event) {
            /* Act on the event */
            $('.menuhere').removeClass('current');
            $(this).addClass('current');
        });

});
