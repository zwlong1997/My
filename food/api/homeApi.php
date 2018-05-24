<?php
include("config.inc.php");

$action = isset($_GET['action']) ? $_GET['action'] : false;


//获取首页的友情链接
if($action == "homeLink")
{
  $sql = "SELECT * FROM {$food_}link ORDER BY link_id DESC limit 6";
  $link_list = getAll($sql);
  echo json_encode($link_list);
  exit;
}


if($action == "homeConf")
{
  $sql = "SELECT * FROM {$food_}config LIMIT 6";
  $conf_list = getAll($sql);
  echo json_encode($conf_list);
  exit;
}

if($action == "about")
{
  $sql = "SELECT * FROM {$food_}article WHERE art_title = '公司简介' LIMIT 1";
  $about = getOne($sql);
  echo json_encode($about);
  exit;
}

if($action == "home_article")
{
  $sql = "SELECT * FROM {$food_}article ORDER BY art_id DESC LIMIT 8";
  $home_article = getAll($sql);
  echo json_encode($home_article);
  exit;
}

if($action == "home_hot")
{
  $sql = "SELECT * FROM {$food_}article WHERE art_id = 2 LIMIT 1";
  $home_hot = getOne($sql);
  echo json_encode($home_hot);
  exit;
}

if($action == "home_food")
{
  $sql = "SELECT * FROM {$food_}food ORDER BY food_id DESC LIMIT 24";
  $arr = getAll($sql);
  $home_food = array_chunk($arr,8);
  echo json_encode($home_food);
  exit;
}


if($action == "pinpai")
{
  $art_id = isset($_GET['art_id']) ? $_GET['art_id'] : 0;
  if($art_id)
  {
    $sql = "SELECT * FROM {$food_}article WHERE art_id = $art_id LIMIT 1";
    $pinpai = getOne($sql);
    echo json_encode($pinpai);
    exit;
  }else{
    echo json_encode(false);
    exit;
  }
}


if($action == "about_shop")
{
  $sql = "SELECT * FROM {$food_}shop WHERE scate_id = 1 LIMIT 5";
  $about_shop = getAll($sql);
  echo json_encode($about_shop);
  exit;
}

if($action == "about_conf")
{
  $sql = "SELECT * FROM {$food_}config WHERE conf_title_en IN('shop_phone','email') LIMIT 2";
  $about_conf = getAll($sql);
  echo json_encode($about_conf);
  exit;
}

if($action == "news_count")
{
  $sql = "SELECT COUNT(*) AS c FROM {$food_}article";
  $news_count = getOne($sql);
  echo json_encode($news_count);
  exit;
}

if($action == "news_list")
{
  //当前页码
  $current = isset($_POST['current']) ? $_POST['current'] : 1; 
  $limit = isset($_POST['limit']) ? $_POST['limit'] : 1; 

  $start = ($current-1)*$limit;  //偏移量
  $sql = "SELECT * FROM {$food_}article LIMIT $start,$limit";
  $news_list = getAll($sql);
  echo json_encode($news_list);
  exit;
}

if($action == "news_detail")
{
  $art_id = isset($_GET['art_id']) ? $_GET['art_id'] : 0;

  if($art_id)
  {
    $sql = "SELECT * FROM {$food_}article WHERE art_id = $art_id";
    $news_detail = getOne($sql);
    echo json_encode($news_detail);
    exit;
  }else{
    echo json_encode(false);
    exit;
  }
  
}


if($action == "food_count")
{
    $fcate_id = isset($_GET['fcate_id']) ? $_GET['fcate_id'] : 0;
    $foodName = isset($_GET['foodName']) ? $_GET['foodName'] : '';

    if($fcate_id)   //查询 分类数据的总数
    {
        $sql = "SELECT COUNT(*) AS c FROM {$food_}food WHERE fcate_id = $fcate_id";
    }else if(!empty($foodName)){
        $sql = "SELECT COUNT(*) AS c FROM {$food_}food WHERE food_name LIKE '%$foodName%'";
    }else{
        $sql = "SELECT COUNT(*) AS c FROM {$food_}food";
    }

    $food_count = getOne($sql);
    echo json_encode($food_count);
    exit;
}


if($action == "food_cate")
{
    $sql = "SELECT * FROM {$food_}food_cate";
    $food_cate = getAll($sql);
    echo json_encode($food_cate);
    exit;
}

if($action == "food_list")
{
  //当前页码
  $current = isset($_POST['current']) ? $_POST['current'] : 1;
  $limit = isset($_POST['limit']) ? $_POST['limit'] : 1;
  $fcate_id = isset($_GET['fcate_id']) ? $_GET['fcate_id'] : 0;
  $foodName = isset($_GET['foodName']) ? $_GET['foodName'] : '';
  $start = ($current-1)*$limit;  //偏移量

  if($fcate_id)
  {
    $sql = "SELECT * FROM {$food_}food WHERE fcate_id = $fcate_id LIMIT $start,$limit";
  }else if(!empty($foodName)){
    $sql = "SELECT * FROM {$food_}food WHERE food_name LIKE '%$foodName%' LIMIT $start,$limit";
  }else{
    $sql = "SELECT * FROM {$food_}food LIMIT $start,$limit";
  }

  $food_list = getAll($sql);
  echo json_encode($food_list);
  exit;
}


//shop
if($action == "shop_count")
{
    $scate_id = isset($_GET['scate_id']) ? $_GET['scate_id'] : 0;
    $shopName = isset($_GET['shopName']) ? $_GET['shopName'] : '';

    if($scate_id)   //查询 分类数据的总数
    {
        $sql = "SELECT COUNT(*) AS c FROM {$food_}shop WHERE scate_id = $scate_id";
    }else if(!empty($shopName)){
        $sql = "SELECT COUNT(*) AS c FROM {$food_}shop WHERE shop_name LIKE '%$shopName%'";
    }else{
        $sql = "SELECT COUNT(*) AS c FROM {$food_}shop WHERE scate_id >1";
    }

    $shop_count = getOne($sql);
    echo json_encode($shop_count);
    exit;
}

if($action == "shop_cate")
{
    $sql = "SELECT * FROM {$food_}shop_cate WHERE scate_id > 1";
    $shop_cate = getAll($sql);
    echo json_encode($shop_cate);
    exit;
}

if($action == "shop_list")
{
  //当前页码
  $current = isset($_POST['current']) ? $_POST['current'] : 1;
  $limit = isset($_POST['limit']) ? $_POST['limit'] : 1;
  $scate_id = isset($_GET['scate_id']) ? $_GET['scate_id'] : 0;
  $shopName = isset($_GET['shopName']) ? $_GET['shopName'] : '';
  $start = ($current-1)*$limit;  //偏移量

  if($scate_id)
  {
    $sql = "SELECT * FROM {$food_}shop WHERE scate_id = $scate_id LIMIT $start,$limit";
  }else if(!empty($shopName)){
    $sql = "SELECT * FROM {$food_}shop WHERE shop_name LIKE '%$shopName%' LIMIT $start,$limit";
  }else{
    $sql = "SELECT * FROM {$food_}shop WHERE scate_id > 1 LIMIT $start,$limit";
  }

  $shop_list = getAll($sql);
  echo json_encode($shop_list);
  exit;
}


if($action == "ctc_add")
{
    $arr = array(
        "contact_title"=>$_POST['ctc_title'],
        "contact_name"=>$_POST['ctc_name'],
        "contact_content"=>$_POST['ctc_content'],
        "contact_time"=>time(),
    );

    $insertId = insert("{$food_}contact",$arr);

    echo json_encode($arr);
    exit;
}

if($action == "ctc_list")
{
  $sql="SELECT * FROM {$food_}contact ORDER BY contact_id DESC LIMIT 3";
  $ctc_list=getAll($sql);
  echo json_encode($ctc_list);
  exit;
}

?>