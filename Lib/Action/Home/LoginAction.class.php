<?php
    
/**
 * 登录页面
 * author: sunny
 * Date: 2014-10-17 16:11
 **/

class LoginAction extends BaseAction{

    //登录页面视图
    public function index(){        
        $this->display();
    }

    //登录表单处理
    public function check(){

        //首先判断是不是post请求，保证安全
        if (!IS_POST) {
            $this->error('页面不存在！');
        }else{
            //获取页面用户名和密码
            $userName = $this->_post("username");
            $pwd = $this->_post("password");
            //去数据库中检查
            $Model = M("users","sv_");
            $results = $Model->where(array('user_name' => $userName, 'password'=> md5($pwd)))->select();
            
            if ( count($results) == 0 ) {
                $this->error('用户名或密码错误');
            }else{

                $data = array(
                    'id' => $results[0]['id'],
                    'login_time' => time(),
                    'login_date' => date('Y-m-d',time()),
                    'login_ip' => get_client_ip(),
                    );
                
                $Model->save( $data );
                //创建session
                session('uid', $results[0]['id']);
                session('username', $results[0]['user_name']);
                session('logintime', date('Y-m-d H:i:s', $results[0]['login_time']));
                session('loginip', $results[0]['login_ip']);
                redirect( U('Dashboard/index') );             
            }

        }
    }

    //注册表单处理
    public function register(){

        //首先判断是不是post请求，保证安全
        if (!IS_POST) {
            $this->error('页面不存在！');
        }else{
            //获取页面用户名和密码
            $userName = $this->_post("username");
            $pwd = $this->_post("password");

        }
    }



}
