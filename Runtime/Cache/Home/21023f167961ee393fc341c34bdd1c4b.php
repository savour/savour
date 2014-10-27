<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html>
<head>
<title>savour-Home</title>
<meta charset="UTF-8"/>
<meta name="keywords" content="savour"/>
<meta name="description" content="Dressing assistant"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Bootstrap -->
<link rel="stylesheet" type="text/css" href="<?php echo ($WEB_PATH); ?>/css/global.css">
<link rel="stylesheet" type="text/css" href="<?php echo ($WEB_PATH); ?>/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="<?php echo ($WEB_PATH); ?>/css/jquery.jqpuzzle.css" />
<link rel="stylesheet" type="text/css" href="<?php echo ($WEB_PATH); ?>/css/index.css">
</head>
<body>
    <div class="container">
        <div class="myflower">
                <img id="flower" src="./image/flower.png" alt="flower"/>
        </div>
        <div class="mytitle"></div>
    </div>
    <!-- 这个script是个bug，如果不写的话第一个<?php echo ($WEB_PATH); ?>写不出来 -->
    <script src="<?php echo ($WEB_PATH); ?>" type="text/javascript"></script>
    <script src="<?php echo ($WEB_PATH); ?>/js/jquery-1.8.3.min.js" type="text/javascript"></script>
    <!-- boostrap3 must be jquery-1.10.2 -->
    <script src="<?php echo ($WEB_PATH); ?>/js/respond.min.js" type="text/javascript"></script>
    <script src="<?php echo ($WEB_PATH); ?>/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="<?php echo ($WEB_PATH); ?>/js/jquery.jqpuzzle.packed.js" type="text/javascript"></script>
    <script src="<?php echo ($WEB_PATH); ?>/js/index.js" type="text/javascript"></script>
</body>
</html>