define(function(require, exports, module) {
    //var juicer = require('juicer');

    var data = {
        list: [
            { name:'我的savour', myurl:'#!/mySavour',  show: true },
            { name:'savour推荐', show: false, sub: [
                {'subname':'穿衣搭配', 'myurl':'#!/matchClothes' }
            ]},
            { name:'savour上传', myurl:'#!/savourUpload', show: true },
            { name:'我缺少的', myurl:'#!/iNeed', show: true }
        ]  
    };

    module.exports = Backbone.View.extend({
        el: '#nav-menu',
        template: require('./tpl/nav.tpl'),
        render: function(){
            this.el.innerHTML = juicer(this.template, data);
        }
    }); 

});