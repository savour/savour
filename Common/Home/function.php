<?php
//以function.php命名的文件中写函数才能自动加载进来

    /**
     * 计算各类型衣服占比
     * 未转换前(0.25648)
     * 转换后(26)，ui上为26%
     * @param $ctr 输入参数
     * @return 按格式封装的cpm,cpc
     */
    function convertCP($ctr){
        $newCtr = round($ctr, 3);
        return $newCtr*100;
    }


?>