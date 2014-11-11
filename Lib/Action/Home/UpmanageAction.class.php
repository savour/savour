<?php
    
/**
 * Upmanage"页面"视图
 * author: sunny
 * Date: 2014-11-05 11:15
 **/

class UpmanageAction extends HomebaseAction{

    //其实只是一个ajax
    public function index(){
        //获取的是对象
        $postData = json_decode(file_get_contents("php://input"));    
        if (IS_AJAX) {
            
            $upModel = M('up','sv_');
            $resultsAll = $upModel->select();
            //计算总页数
            $sumpages = ceil(count($resultsAll)/10);
            //U链接传递的参数用_request去取
            $nowPage = $postData->page;
            //计算对应页数的数据
            $results = $upModel->page($nowPage,10)->order('id asc')->select();
            //进行数据清洗
            $newResults = array();
            foreach ($results as $result) {
                //上衣类型映射
                //1正式2休闲3运动
                if ( $result['type'] == 1 ) {
                    $result['type'] = "正式";
                }else if ( $result['type'] == 2 ) {
                    $result['type'] = "休闲";
                }else if ( $result['type'] == 3 ) {
                    $result['type'] = "运动";
                }
                //合适穿映射
                //1春2夏3秋4冬5春秋
                if ( $result['season'] == 1 ) {
                    $result['season'] = "春天";
                }else if ( $result['season'] == 2 ) {
                    $result['season'] = "夏天";
                }else if ( $result['season'] == 3 ) {
                    $result['season'] = "秋天";
                }else if ( $result['season'] == 4 ) {
                    $result['season'] = "冬天";
                }else if ( $result['season'] == 5 ) {
                    $result['season'] = "春秋";
                }
                array_push($newResults,$result); 
            }

            $data = array(
                'clothes' => '上衣',
                'sumpages' => $sumpages,
                'data' => $newResults,
                'add' => U('Upload/add'),
                'edit' => U('Upload/edit'),
                );
            $this->ajaxReturn($data,'json');
        }
    }

}


    
