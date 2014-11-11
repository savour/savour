<?php

/**
 * 项目公共配置
 * author: sunny
 * Date: 2014-10-17 14:31
 **/
return array(
    //开发环境配置    
    'LOAD_EXT_CONFIG' => 'db-dev',
    //加载common中的函数库，eg：function.php
    //使用分组后，自动加载的公用的API命名为common.php,分组用function.php
    //'LOAD_EXT_FILE' => 'function',


    //项目分组设定
    'APP_GROUP_LIST' => 'Home,Admin',
    //默认分组
    'DEFAULT_GROUP'  => 'Home', 
    //为了不和js的{}冲突，修改变量左右界定符
    'TMPL_L_DELIM'=>'{SV:',
    'TMPL_R_DELIM'=>'}',

    //设置url模式，
    //0=http://serverName/appName/?m=module&a=action&id=1
    //1=http://serverName/appName/module/action/id/1/
    //2=可以去掉index.php
    'URL_MODEL'=> 1,
    //伪静态地址，不设置默认是html
    'URL_HTML_SUFFIX'=> 'html',
    //默认过滤函数
    'DEFAULT_FILTER'=> 'htmlspecialchars',

);
?>