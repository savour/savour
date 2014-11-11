<?php
    
/**
 * 提供Home公共接口
 * author: sunny
 * Date: 2014-10-31 16:48
 **/

class HomebaseAction extends Action{

    Public function _initialize(){
        //var_dump($_SESSION);die;
        //检测要登录后才可以进入管理页面
        if ( !isset($_SESSION['uid']) || !isset($_SESSION['username']) ) {
            $this->redirect('Login/index');
        }
        //定义上传文件的路径
        define('UPLOAD_PATH', __ROOT__.'/'.APP_NAME.'/Clothes/');


    }
    
    
}



