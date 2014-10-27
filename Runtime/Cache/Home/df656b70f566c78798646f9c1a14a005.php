<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html>
<head>
<title>savour-Dashboard</title>
<meta charset="UTF-8"/>
<meta name="keywords" content="savour"/>
<meta name="description" content="Dressing assistant"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Bootstrap -->
<link rel="stylesheet" type="text/css" href="__HOME__/css/global.css">
<link rel="stylesheet" type="text/css" href="__HOME__/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="__HOME__/css/dashboard.css">
</head>
<body>

    <div class="navbar navbar-fixed-top navbar-inverse" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="">SAVOUR</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="">操作面板</a></li>
            <li><a href="./introduce.html">savour介绍</a></li>
            <li><a href="./contact.html">联系我们</a></li>
            <li><a href="./index.html">去玩拼图</a></li>
          </ul>
        </div><!-- /.nav-collapse -->
      </div><!-- /.container -->
    </div>

    <div class="container">
        <div class="row">
            <div class="col-sm-3" id="nav">
                <div class="list-group">
                    <ul id="nav-menu" class="nav nav-add"></ul>
                </div>
            </div>
            <div class="col-xs-12 col-sm-9" id="show">

            </div>
        </div>
        <hr>
        <footer>
            <p>Savour 2014, author: Sunny, Stella</p>
        </footer>
    </div>
    <!-- seajs door-->
    <script type="text/javascript" src="__HOME__/js/dashboard/model/preload-data.js"></script>
    <script type="text/javascript" src="__HOME__/js/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="__HOME__/js/respond.min.js"></script>
    <script type="text/javascript" src="__HOME__/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="__HOME__/js/dashboard/lib/underscore-min.js"></script>
    <script type="text/javascript" src="__HOME__/js/dashboard/lib/backbone-min.js"></script>
    <script type="text/javascript" src="__HOME__/js/Juicer/build/juicer-min.js"></script>
    <script type="text/javascript" src="__HOME__/js/dashboard/lib/highcharts.js"></script>
    <script type="text/javascript" src="__HOME__/js/dashboard/lib/drilldown.js"></script>
    <script type="text/javascript" src="__HOME__/js/test.js"></script>
    <script src="__HOME__/js/seajs/2.1.0/sea.js" type="text/javascript"></script>
    <script src="__HOME__/js/seajs/seajs-text.js" type="text/javascript"></script>
    <script type="text/javascript">
        var HOMEPATH = '__HOME__'+'/js/dashboard';
        seajs.use('__HOME__/js/dashboard/dashmain');
    </script>

</body>
</html>