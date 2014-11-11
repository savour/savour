<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html>
<head>
<title>savour-Home</title>
<meta charset="UTF-8"/>
<meta name="keywords" content="savour"/>
<meta name="description" content="Dressing assistant"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Bootstrap -->
<link rel="stylesheet" type="text/css" href="__HOME__/css/global.css">
<link rel="stylesheet" type="text/css" href="__HOME__/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="__HOME__/css/jquery.jqpuzzle.css" />
<link rel="stylesheet" type="text/css" href="__HOME__/css/index.css">
</head>
<body>
    <div class="container">
        <div class="myflower">
                <img id="flower" src="__HOME__/image/flower.png" alt="flower"/>
        </div>
        <div class="mytitle"></div>
    </div>
   
    <script src="__HOME__/js/jquery-1.8.3.min.js" type="text/javascript"></script>
    <!-- boostrap3 must be jquery-1.10.2 -->
    <script src="__HOME__/js/respond.min.js" type="text/javascript"></script>
    <script src="__HOME__/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="__HOME__/js/jquery.jqpuzzle.packed.js" type="text/javascript"></script>
    <script src="__HOME__/js/index.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(function(){
            $(".mytitle").click(function() {
                //只有模板中的js才可以用后台变量，
                //其实是U('Home/Login/index'),因为Home是默认分组可以忽略
                window.location.href = "<?php echo U('Login/index');?>";
            });
        });
    </script>
</body>
</html>