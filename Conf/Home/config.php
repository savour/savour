<?php

/**
 * Home配置
 * author: sunny
 * Date: 2014-10-21 16:32
 **/
return array(
    //减少目录层次
    'TMPL_FILE_DEPR'=>'_',
    //指定tpl所用组件的地址，这里直接指定绝对地址
    'TMPL_PARSE_STRING' => array(
        //HOME前端页面组件地址
        '__HOME__' => __ROOT__.'/'.APP_NAME.'/Tpl/Home',

        ),

);
?>