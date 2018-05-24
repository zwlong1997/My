<?php
error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);   
date_default_timezone_set("PRC"); //设置时间区
header("Content-Type:text/html;charset=utf-8"); //声明编码

//链接数据库
$conn = mysqli_connect("localhost","root","") or die("连接失败");

//选择数据库
mysqli_select_db($conn,"food");

//设置操作数据库的编码
mysqli_query($conn,"SET NAMES UTF8");

//表前缀
$food_ = "pre_";

include('headers.php');

?>