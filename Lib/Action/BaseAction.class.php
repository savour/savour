<?php
    
/**
 * 提供公共接口
 * author: sunny
 * Date: 2014-10-21 17:10
 **/

class BaseAction extends Action{

    Public function _initialize(){
        //action 初始化的时候定义常量
        //define("FIRST_PAGE", "/".APP_NAME."/Tpl/Home");
        //define("WEB_PATH","../../Tpl/Home");

        // 初始化的时候检查用户权限
        //$this->checkRbac();
    }
    // 检查用户权限
    protected function checkRbac() {
        // 这里是具体的检测代码
    }
    // 添加新的上传操作方法
    protected function upload() {
        // 这里是具体的上传实现代码
    }


    
}



