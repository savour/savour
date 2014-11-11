var data = {
    //基本注释
    author: "sunny",
    //定义当前的导航
    current: "none",
    //预设的left nav的数据
    list: [
        { name:'我的savour', icon:'glyphicon-home', myurl:'#!/mySavour', id:'mySavour' , show: true },
        { name:'savour推荐', icon:'glyphicon-heart', show: false, sub: [
            {'subname':'穿衣搭配', 'myurl':'#!/matchClothes', 'id':'matchClothes' }
        ]},
        //{ name:'savour管理', icon:'glyphicon-arrow-up', myurl:'#!/savourUpload', id:'savourUpload' , show: true },
        { name:'savour管理', icon:'glyphicon-arrow-up', show: false, sub: [
            {'subname':'上衣管理', 'myurl':'#!/upManage', 'id':'upManage' },
            {'subname':'裤裙管理', 'myurl':'#!/downManage', 'id':'downManage' },
            {'subname':'鞋子管理', 'myurl':'#!/footManage', 'id':'footManage' }
        ]},


        { name:'我缺少的', icon:'glyphicon-search', myurl:'#!/iNeed', id:'iNeed', show: true }
    ]  




};