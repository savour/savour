<?php
    
/**
 * 衣服添加编辑页面后端逻辑
 * author: sunny
 * Date: 2014-11-06 14:41
 **/

class UploadAction extends HomebaseAction{

    public $info = "";
    //处理图片上传
    public function post(){
        // 上传类导入
        import('ORG.Net.UploadFile');
        // 实例化上传类
        $upload = new UploadFile();
        // 设置附件上传大小,限制在1M
        $upload->maxSize = 1048576;
        // 设置附件上传类型,限制在'jpg', 'png', 'jpeg'
        $upload->allowExts  = array('jpg', 'png', 'jpeg');
        // 设置附件上传目录
        $upload->savePath = './Clothes/';
        // 上传错误提示错误信息
        if(!$upload->upload()) {
            $this->error($upload->getErrorMsg());
         }else{
         // 上传成功 获取上传文件信息
            $info =  $upload->getUploadFileInfo();
            $this->ajaxReturn($info,'json');
         }

        //  // 保存表单数据 包括附件数据
        // $User = M("User"); // 实例化User对象
        // $User->create(); // 创建数据对象
        // $User->photo = $info[0]['savename']; // 保存上传的照片根据需要自行组装
        // $User->add(); // 写入用户数据到数据库
        // $this->success('数据保存成功！');
    }

    //处理添加衣服逻辑
    public function add(){




    }

    // //处理编辑衣服逻辑
    // public function add(){

    // }


}
