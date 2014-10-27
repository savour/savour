<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html>
<head>
<title>savour-Login</title>
<meta charset="UTF-8"/>
<meta name="keywords" content="savour"/>
<meta name="description" content="Dressing assistant"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Bootstrap -->
<link rel="stylesheet" type="text/css" href="__HOME__/css/global.css">
<link rel="stylesheet" type="text/css" href="__HOME__/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="__HOME__/css/login.css">
</head>
<body>
    <div class="container">
        <div class="myflower"></div>
        <div class="mytitle"></div>
    </div>
    <!-- bootstrap model -->
    <div class="modal fade" id="loginModel">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- form here -->
                <form class="form-horizontal" role="form" action="<?php echo U('Login/check');?>" method="POST">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title">Welcome to savour !</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon glyphicon glyphicon-user"></span>
                                <input type="text" class="form-control" id="inputUsername" name="username" placeholder="Username">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon glyphicon glyphicon-pencil"></span>
                                <input type="password" class="form-control" id="inputPassword" name="password" placeholder="Password">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <p id="registerEnter">没有登录账号？</p>
                        <button type="submit" class="btn btn-primary">Login</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </form>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <!-- bootstrap model -->
    <div class="modal fade" id="registerModel">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- form here -->
                <form class="form-horizontal" role="form" action="<?php echo U('Login/register');?>" method="POST">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title">Register to savour !</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon glyphicon glyphicon-user"></span>
                                <input type="text" class="form-control" id="inputUsername" name="username" placeholder="Username">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon glyphicon glyphicon-pencil"></span>
                                <input type="password" class="form-control" id="inputPassword" name="password" placeholder="Password">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon glyphicon glyphicon-pencil"></span>
                                <input type="password" class="form-control" id="inputPasswordAgain" name="passwordAgain" placeholder="Please Input Password Again">
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Done</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </form>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <!-- boostrap3 must be jquery-1.10.2 -->
    <script src="__HOME__/js/jquery-1.10.2.min.js" type="text/javascript"></script>
    <script src="__HOME__/js/respond.min.js" type="text/javascript"></script>
    <script src="__HOME__/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="__HOME__/js/login.js" type="text/javascript"></script>
</body>
</html>