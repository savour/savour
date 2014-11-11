<?php
    
/**
 * 首页
 * author: sunny
 * Date: 2014-10-22 15:39
 **/

class IndexAction extends BaseAction{

    //首页视图
    public function index(){   
        $this->display();
    }

    //登出页面
    public function logout(){
        session_unset();
        session_destroy();
        $this->redirect('Index/index');
    }
    
}


    
