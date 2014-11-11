<?php
    
/**
 * Dashboard页面视图
 * author: sunny
 * Date: 2014-10-27 14:41
 **/

class DashboardAction extends HomebaseAction{

    //首页视图
    public function index(){


        $this->display();
    }

    //mySavour视图
    public function mySavour(){

        //获取的是对象
        $postData = json_decode(file_get_contents("php://input"));    

        if (IS_AJAX) {
            
            //查找数据库中衣服数据
            $upModel = M('up','sv_');
            $downModel = M('down','sv_');
            $footModel = M('foot','sv_');

            $findup = $upModel->select();
            $finddown = $downModel->select();
            $findfoot = $footModel->select();
            //所有衣服的总数
            $SumClothes = count($findup)+count($finddown)+count($findfoot);

            if( $postData->name == 'top' ){
                //返回top数据
                $topName = array("上衣","裤子/裙子","鞋");
                $topNum = array(count($findup),count($finddown),count($findfoot));
                $topData = array(
                    'title' => '您的savour服饰数据', 
                    'name' => $topName,
                    'num' => $topNum,
                    );
                //print_r($topData);die;
                $this->ajaxReturn($topData,'json');
            }

            if( $postData->name == 'colShow' ){
                //返回colShow数据
                $colSumUp = array(
                    "drilldown" => "上衣",
                    "name" => "上衣",
                    "y" => convertCP(count($findup)/$SumClothes),
                    );
                $colSumDown = array(
                    "drilldown" => "裙裤",
                    "name" => "裙裤",
                    "y" => convertCP(count($finddown)/$SumClothes),
                    );
                $colSumFoot = array(
                    "drilldown" => "鞋",
                    "name" => "鞋",
                    "y" => convertCP(count($findfoot)/$SumClothes),
                    );
                $colSum = array($colSumUp,$colSumDown,$colSumFoot);

                $findup1 = $upModel->where(array('type' => 1))->select();
                $findup2 = $upModel->where(array('type' => 2))->select();
                $findup3 = $upModel->where(array('type' => 3))->select();
                $colUp = array(
                    "data" => array(
                        array("正式",convertCP(count($findup1)/count($findup))),
                        array("休闲",convertCP(count($findup2)/count($findup))),
                        array("运动",convertCP(count($findup3)/count($findup)))
                        ),                
                    "id" => "上衣",
                    "name" => "上衣"
                    );
                $finddown1 = $downModel->where(array('type' => 1))->select();
                $finddown2 = $downModel->where(array('type' => 2))->select();
                $finddown3 = $downModel->where(array('type' => 3))->select();
                $colDown = array(
                    "data" => array(
                        array("正式",convertCP(count($finddown1)/count($finddown))),
                        array("休闲",convertCP(count($finddown2)/count($finddown))),
                        array("运动",convertCP(count($finddown3)/count($finddown)))
                        ),                
                    "id" => "裙裤",
                    "name" => "裙裤"
                    );
                $findfoot1 = $footModel->where(array('type' => 1))->select();
                $findfoot2 = $footModel->where(array('type' => 2))->select();
                $findfoot3 = $footModel->where(array('type' => 3))->select();
                $colFoot = array(
                    "data" => array(
                        array("正式",convertCP(count($findfoot1)/count($findfoot))),
                        array("休闲",convertCP(count($findfoot2)/count($findfoot))),
                        array("运动",convertCP(count($findfoot3)/count($findfoot)))
                        ),                
                    "id" => "鞋",
                    "name" => "鞋"
                    );
                $colDetail = array($colUp,$colDown,$colFoot);
                $colShowData = array($colSum,$colDetail);
                $this->ajaxReturn($colShowData,'json');
            }

            //该功能暂时不开放
            // if( $postData->name == 'top5' ){
            //     //返回top5数据
            //     $top5up = array( 
            //         UPLOAD_PATH."c1.jpg",
            //         UPLOAD_PATH."c2.jpg",
            //         UPLOAD_PATH."c3.jpg",
            //         UPLOAD_PATH."c4.jpg",
            //         UPLOAD_PATH."c5.jpg"
            //         );
            //     $top5down = array( 
            //         UPLOAD_PATH."d1.jpg",
            //         UPLOAD_PATH."d2.jpg",
            //         UPLOAD_PATH."d3.jpg",
            //         UPLOAD_PATH."d4.jpg",
            //         UPLOAD_PATH."d5.jpg"
            //         );
            //     $top5foot = array( 
            //         UPLOAD_PATH."x1.jpg",
            //         UPLOAD_PATH."x2.jpg",
            //         UPLOAD_PATH."x3.jpg",
            //         UPLOAD_PATH."x4.jpg",
            //         UPLOAD_PATH."x5.jpg"
            //         );
            //     $top5num = array(49,36,32,21,7);
            //     $top5Data = array(
            //         'title' => 'Top5搭配款式', 
            //         'up' => $top5up,
            //         'down' => $top5down,
            //         'foot' => $top5foot,
            //         'num' => $top5num,
            //         );
            //     //print_r($topData);die;
            //     $this->ajaxReturn($top5Data,'json');
            // }

        }

    }






}


    
