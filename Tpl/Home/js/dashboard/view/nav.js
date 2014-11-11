define(function(require, exports, module) {

    //将PRELOAD_DATA载入model层,在view的initialize之前渲染
    var preload_data = new Backbone.Model();
    preload_data.set(window.data);

    module.exports = Backbone.View.extend({
        el: '#nav-menu',
        template: require('../tpl/nav.tpl'),
        model: preload_data,
        initialize: function() {
            this.listenTo(this.model, 'change:current', this.render);
        },
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
            this.el.innerHTML = juicer(this.template, this.model.toJSON());
            var current = this.model.get('current');
            $("#"+current).addClass('current');
            //将子菜单先全部隐藏
            $('.submenu').hide();
            //如果是子菜单的话显示出来
            $("#"+current).parent().parent().children().children('.submenu').show();   
        }
    }); 

});