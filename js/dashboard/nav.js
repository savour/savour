define(function(require, exports, module) {

    module.exports = Backbone.View.extend({
        el: '#nav-menu',
        template: require('./tpl/nav.tpl'),
        events : {  
            'click .menuhere' : 'cMenuhere',  
            'click .fakemenuhere' : 'cFakemenuhere',   
            'click .submenu' : 'cSubmenu'  
        },  
        cMenuhere : function(event) {  
            $('.menuhere').removeClass('current');
            $('.submenu').removeClass('current');
            $self = $(event.target);//这里不能直接用$(this),应为这个是整个的view，用event.target来取一下。
            $self.addClass('current');
            $('.submenu').slideUp("normal"); 
        },  
        cFakemenuhere : function(event) {  
            $('.submenu').slideUp("normal");
            $self = $(event.target);
            $self.next().children().children('.submenu').slideDown("normal"); 
        },  
        cSubmenu : function(event) {  
            $('.menuhere').removeClass('current');
            $('.submenu').removeClass('current');
            $self = $(event.target);
            $self.addClass('current');
        },
        render: function(){
            this.el.innerHTML = juicer(this.template, this.model);
            //nav初始化
            $('.submenu').hide();
        }
    }); 

});