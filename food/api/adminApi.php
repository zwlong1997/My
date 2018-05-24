<?php
include("config.inc.php");

$action = isset($_GET['action']) ? $_GET['action'] : false;

if($action == "count_data")
{
    $sql_food = "SELECT COUNT(*) AS c FROM {$food_}food";
    $sql_shop = "SELECT COUNT(*) AS c FROM {$food_}shop";
    $sql_article = "SELECT COUNT(*) AS c FROM {$food_}article";
    $sql_contact = "SELECT COUNT(*) AS c FROM {$food_}contact";

    $food_count = getOne($sql_food);
    $shop_count = getOne($sql_shop);
    $article_count = getOne($sql_article);
    $contact_count = getOne($sql_contact);

    $result = array(
        "food_count"=>$food_count['c'],
        "shop_count"=>$shop_count['c'],
        "article_count"=>$article_count['c'],
        "contact_count"=>$contact_count['c'],
    );

    echo json_encode($result);
    exit;
}


if($action == "news_notice")
{
    $sql = "SELECT * FROM {$food_}notice AS notice LEFT JOIN {$food_}admin AS admin ON notice.admin_id = admin.admin_id ORDER BY notice.notice_id DESC LIMIT 5";
    $notice_list = getAll($sql);
    echo json_encode($notice_list);
    exit;
}

if($action == "notice_count")
{
    $sql = "SELECT COUNT(*) AS c FROM {$food_}contact";
    $notice_count = getOne($sql);
    echo json_encode($notice_count);
    exit;
}

if($action == "contact_list")
{
    $current = isset($_POST['current']) ? $_POST['current'] : 1;
    $limit = isset($_POST['limit']) ? $_POST['limit'] : 1;
    $start = ($current-1)*$limit;  //偏移量
    $sql = "SELECT * FROM {$food_}contact ORDER BY contact_id DESC LIMIT $start,$limit";
    $notice_list = getAll($sql);
    echo json_encode($notice_list);
    exit;
}


if($action == "fcate_count")
{
    $fcateName=isset($_GET['fcateName']) ? $_GET['fcateName'] : "";
    if(!empty($fcateName)){
        $sql = "SELECT COUNT(*) AS c FROM {$food_}food_cate WHERE fcate_name LIKE '%$fcateName%'";
    }else{
        $sql = "SELECT COUNT(*) AS c FROM {$food_}food_cate";
    }
    $fcate_count = getOne($sql);
    echo json_encode($fcate_count);
    exit;
}

if($action == "fcate_list")
{
    $fcateName=isset($_GET['fcateName']) ? $_GET['fcateName'] : "";
    $current = isset($_POST['current']) ? $_POST['current'] : 1;
    $limit = isset($_POST['limit']) ? $_POST['limit'] : 1;
    $start = ($current-1)*$limit;  //偏移量
    if(!empty($fcateName)){
        $sql = "SELECT * FROM {$food_}food_cate WHERE fcate_name LIKE '%$fcateName%' ORDER BY fcate_id DESC LIMIT $start,$limit";
    }else{
        $sql = "SELECT * FROM {$food_}food_cate ORDER BY fcate_id DESC LIMIT $start,$limit";
    }
    $fcate_list = getAll($sql);
    echo json_encode($fcate_list);
    exit;
}


if($action == "fcate_check"){
    $fcate_name=isset($_GET['fcate_name']) ? $_GET['fcate_name'] : "";
    if(!empty($fcate_name)){
        $sql="SELECT * FROM {$food_}food_cate WHERE fcate_name = '$fcate_name'";
        $res=getOne($sql);
        if($res){
            echo json_encode(false);
            exit;
        }else{
            echo json_encode(true);
            exit;
        }
    }
}

if($action == "fcate_add")
{
    $arr = array(
        "fcate_name"=>$_POST['fcate_name']
    );

    $insertId = insert("{$food_}food_cate",$arr);

    echo json_encode($insertId);
    exit;
}

if($action == "getFcate"){
    $fcate_id=isset($_GET['fcate_id']) ? $_GET['fcate_id'] : false;
    if($fcate_id){
        $sql="SELECT * FROM {$food_}food_cate WHERE fcate_id = $fcate_id";
        $fcateInfo=getOne($sql);
        echo json_encode($fcateInfo);
        exit;
    }
}

if($action == "fcate_edit"){
    $fcate_id=$_POST['fcate_id'];
    $arr=array(
        'fcate_name'=>$_POST['fcate_name']
        );

    $affectId=update("{$food_}food_cate",$arr,"fcate_id = $fcate_id");
    echo json_encode($affectId);
    exit;
}

if($action == "fcateDelete"){
    $fcate_id=isset($_GET['fcate_id']) ? $_GET['fcate_id'] : false;
    if($fcate_id){
        $affectId=delete("{$food_}food_cate","fcate_id = $fcate_id");
        echo json_encode($affectId);
        exit;
    }
}

if($action == "fcateDelete_all")
{
     $fcateid_arr=isset($_GET['fcateid_arr']) ? $_GET['fcateid_arr'] : false;
     if($fcateid_arr)
     {
        $where="fcate_id IN ($fcateid_arr)";
        $affectId=delete("{$food_}food_cate",$where);
        echo json_encode($affectId);
        exit;
     }
}

if($action == "food_cate")
{
    $sql="SELECT * FROM {$food_}food_cate";
    $food_cate=getAll($sql);
    echo json_encode($food_cate);
    exit;
}

if($action == "food_count")
{
    $fcate_id = isset($_GET['FcateId']) ? $_GET['FcateId'] : "";
    $food_name = isset($_GET['foodName']) ? $_GET['foodName'] : "";
    if(!empty($food_name))
    {
        $sql = "SELECT COUNT(*) AS c FROM {$food_}food WHERE food_name LIKE '%$food_name%'";
    }else if($fcate_id)
    {
        $sql = "SELECT COUNT(*) AS c FROM {$food_}food WHERE fcate_id = $fcate_id";
    }else{
        $sql="SELECT COUNT(*) AS c FROM {$food_}food";
    }
    $food_count=getOne($sql);
    echo json_encode($food_count);
    exit;
}

if($action == "food_list")
{
    $food_name = isset($_GET['foodName']) ? $_GET['foodName'] : "";
    $fcate_id = isset($_GET['FcateId']) ? $_GET['FcateId'] : "";
    $current=isset($_POST['current']) ? $_POST['current'] : 1;
    $limit = isset($_POST['limit']) ? $_POST['limit'] : 1;
    $start=($current-1)*$limit;
    if(!empty($food_name))
    {
        $sql = "SELECT * FROM {$food_}food AS food LEFT JOIN {$food_}food_cate AS cate ON food.fcate_id = cate.fcate_id WHERE food.food_name LIKE '%$food_name%' ORDER BY food.food_id DESC LIMIT $start,$limit";
    }else if($fcate_id){
        $sql = "SELECT * FROM {$food_}food AS food LEFT JOIN {$food_}food_cate AS cate ON food.fcate_id = cate.fcate_id WHERE food.fcate_id = $fcate_id ORDER BY food.food_id DESC LIMIT $start,$limit";
    }else{
        $sql="SELECT * FROM {$food_}food AS food LEFT JOIN {$food_}food_cate AS cate ON food.fcate_id = cate.fcate_id ORDER BY food.food_id DESC LIMIT $start,$limit";
    }
    $food_list=getAll($sql);
    echo json_encode($food_list);
    exit;
}

if($action == "food_img")
{
    if($_FILES['file']['error'] == 0 && $filename = upload_file('file',"../assets/uploads"))
    {
           $result = array('data'=>$filename);
           echo json_encode($result);
           exit;
    }
}


if($action == "food_add")
{
    $arr = array(
        "food_name"=>$_POST['food_name'],
        "food_img"=>$_POST['food_img'],
        "food_price"=>$_POST['food_price'],
        "food_desc"=>$_POST['food_desc'],
        "fcate_id"=>$_POST['fcate_id'],
        "food_time"=>time(),
    );

    $insertId = insert("{$food_}food",$arr);

    echo json_encode($insertId);
    exit;
}

if($action == "food_editId")
{
    $food_id=isset($_GET['food_id']) ? $_GET['food_id'] : 0;
    $sql="SELECT * FROM {$food_}food WHERE food_id = $food_id";
    $food_editId=getOne($sql);
    echo json_encode($food_editId);
}

if($action == "food_Edit")
{
    $food_id=isset($_POST['food_id']) ? $_POST['food_id'] : 0;
    $arr = array(
        "food_name"=>$_POST['food_name'],
        "food_img"=>$_POST['food_img'],
        "food_price"=>$_POST['food_price'],
        "food_desc"=>$_POST['food_desc'],
        "fcate_id"=>$_POST['fcate_id'],
        "food_time"=>time(),
    );

    $affectId = update("{$food_}food",$arr,"food_id = $food_id");

    echo json_encode($affectId);
    exit;
}

if($action == "foodDelete")
{
    $food_id=isset($_GET['food_id']) ? $_GET['food_id'] : false;
    if($food_id){
        $affectId=delete("{$food_}food","food_id = $food_id");
        echo json_encode($affectId);
        exit;
    }

}

if($action == "foodDelete_all")
{
    $foodid_arr=isset($_GET['foodid_arr']) ? $_GET['foodid_arr'] : false;
    if($foodid_arr)
    {
        $where="food_id IN ($foodid_arr)";
        $affectId=delete("{$food_}food",$where);
        echo json_encode($affectId);
        exit;
    }
    
}


if($action == "login")
{

    $admin_name = $_POST['admin_name'];
    $admin_pwd =$_POST['admin_pwd'];
    $sql = "SELECT * FROM {$food_}admin WHERE admin_name = '$admin_name' AND admin_pwd = '$admin_pwd'";
    $admin = getOne($sql);
    echo json_encode($admin);
    exit;
}

if($action == "admin_count")
{
    $admin_name=isset($_GET['admin_name']) ? $_GET['admin_name'] : false;
    if($admin_name)
    {
        $sql="SELECT COUNT(*) AS c FROM {$food_}admin WHERE admin_name LIKE '%$admin_name%'";
    }else{
        $sql="SELECT COUNT(*) AS c FROM {$food_}admin";
    }
    $admin_count=getOne($sql);
    echo json_encode($admin_count);
}

if($action == "admin_list")
{
    $admin_name=isset($_GET['admin_name']) ? $_GET['admin_name'] : false;
    $current = isset($_POST['current']) ? $_POST['current'] : 1;
    $limit = isset($_POST['limit']) ? $_POST['limit'] : 1;
    $start = ($current-1)*$limit;  //偏移量
    if($admin_name)
    {
        $sql="SELECT * FROM {$food_}admin WHERE admin_name LIKE '%$admin_name%' ORDER BY admin_id DESC LIMIT $start,$limit";
    }else{
        $sql="SELECT * FROM {$food_}admin  ORDER BY admin_id DESC  LIMIT $start,$limit";
    }
    $admin_list=getAll($sql);
    echo json_encode($admin_list);
}

if($action == "delete_admin")
{
    $admin_id=isset($_GET['admin_id']) ? $_GET['admin_id'] : 0 ;
    if($admin_id)
    {
        $affectId=delete("{$food_}admin","admin_id = $admin_id");
        echo json_encode($affectId);
        exit;
    }
}


if($action == "admin_add")
{
    $arr=array(
        "admin_name"=>$_POST['admin_name'],
        "admin_pwd"=>$_POST['admin_pwd']
    );
    $insertId=insert("{$food_}admin",$arr);

    echo json_encode($insertId);
    exit;
}


if($action == "admin_check")
{
    $admin_name=isset($_GET['admin_name']) ? $_GET['admin_name'] : "";
    $admin_id=isset($_GET['admin_id']) ? $_GET['admin_id'] : 0;
    if(!empty($admin_name))
    {
        $sql="SELECT * FROM {$food_}admin WHERE admin_name = '$admin_name'";
        // $sql2="SELECT * FROM {$food_}admin WHERE admin_id = $admin_id AND  admin_name = '$admin_name'";
        $res=getOne($sql);
        // $res2=getOne($sql2);
        if($res){
            echo json_encode(false);
            exit;
        }else{
            echo json_encode(true);
            exit;
        }
    }
}

if($action == "admindelete_all")
{
    $adminid_arr=isset($_GET['adminid_arr']) ? $_GET['adminid_arr'] : false;
    if(!empty($adminid_arr))
    {
        $where="admin_id IN ($adminid_arr)";
        $affectId=delete("{$food_}admin",$where);
        echo json_encode($affectId);
        exit;
    }
}

//Shop
if($action == "scate_count")
{
    $scateName=isset($_GET['scateName']) ? $_GET['scateName'] : "";
    if(!empty($scateName)){
        $sql = "SELECT COUNT(*) AS c FROM {$food_}shop_cate WHERE scate_name LIKE '%$scateName%'";
    }else{
        $sql = "SELECT COUNT(*) AS c FROM {$food_}shop_cate";
    }
    $scate_count = getOne($sql);
    echo json_encode($scate_count);
    exit;
}

if($action == "scate_list")
{
    $scateName=isset($_GET['scateName']) ? $_GET['scateName'] : "";
    $current = isset($_POST['current']) ? $_POST['current'] : 1;
    $limit = isset($_POST['limit']) ? $_POST['limit'] : 1;
    $start = ($current-1)*$limit;  //偏移量
    if(!empty($scateName)){
        $sql = "SELECT * FROM {$food_}shop_cate WHERE scate_name LIKE '%$scateName%' ORDER BY scate_id DESC LIMIT $start,$limit";
    }else{
        $sql = "SELECT * FROM {$food_}shop_cate ORDER BY scate_id DESC LIMIT $start,$limit";
    }
    $scate_list = getAll($sql);
    echo json_encode($scate_list);
    exit;
}

if($action == "scate_add")
{
    $arr = array(
        "scate_name"=>$_POST['scate_name']
    );

    $insertId = insert("{$food_}shop_cate",$arr);

    echo json_encode($insertId);
    exit;
}

if($action == "scate_check"){
    $scate_name=isset($_GET['scate_name']) ? $_GET['scate_name'] : "";
    if(!empty($scate_name)){
        $sql="SELECT * FROM {$food_}shop_cate WHERE scate_name = '$scate_name'";
        $res=getOne($sql);
        if($res){
            echo json_encode(false);
            exit;
        }else{
            echo json_encode(true);
            exit;
        }
    }
}

if($action == "scate_edit"){
    $scate_id=$_POST['scate_id'];
    $scate_name=$_POST['scate_name'];
    $arr=array(
        'scate_name'=>$_POST['scate_name']
        );

    $affectId=update("{$food_}shop_cate",$arr,"scate_id = $scate_id");
    echo json_encode($affectId);
    echo json_encode($scate_id);
    exit;
}

if($action == "getScate"){
    $scate_id=isset($_GET['scate_id']) ? $_GET['scate_id'] : false;
    if($scate_id){
        $sql="SELECT * FROM {$food_}shop_cate WHERE scate_id = $scate_id";
        $scateInfo=getOne($sql);
        echo json_encode($scateInfo);
        exit;
    }
}


if($action == "scate_check"){
    $scate_name=isset($_GET['scate_name']) ? $_GET['scate_name'] : "";
    if(!empty($scate_name)){
        $sql="SELECT * FROM {$food_}shop_cate WHERE scate_name = '$scate_name'";
        $res=getOne($sql);
        if($res){
            echo json_encode(false);
            exit;
        }else{
            echo json_encode(true);
            exit;
        }
    }
}

if($action == "scateDelete"){
    $scate_id=isset($_GET['scate_id']) ? $_GET['scate_id'] : false;
    if($scate_id){
        $affectId=delete("{$food_}shop_cate","scate_id = $scate_id");
        echo json_encode($affectId);
        exit;
    }
}

if($action == "scateDelete_all")
{
     $scateid_arr=isset($_GET['scateid_arr']) ? $_GET['scateid_arr'] : false;
     if($scateid_arr)
     {
        $where="scate_id IN ($scateid_arr)";
        $affectId=delete("{$food_}shop_cate",$where);
        echo json_encode($affectId);
        exit;
     }
}

if($action == "shop_cate")
{
    $sql="SELECT * FROM {$food_}shop_cate";
    $shop_cate=getAll($sql);
    echo json_encode($shop_cate);
    exit;
}

if($action == "shop_count")
{
    $scate_id = isset($_GET['ScateId']) ? $_GET['ScateId'] : "";
    $shop_name = isset($_GET['shopName']) ? $_GET['shopName'] : "";
    if(!empty($shop_name))
    {
        $sql = "SELECT COUNT(*) AS c FROM {$food_}shop WHERE shop_name LIKE '%$shop_name%'";
    }else if($scate_id)
    {
        $sql = "SELECT COUNT(*) AS c FROM {$food_}shop WHERE scate_id = $scate_id";
    }else{
        $sql="SELECT COUNT(*) AS c FROM {$food_}shop";
    }
    $shop_count=getOne($sql);
    echo json_encode($shop_count);
    exit;
}

if($action == "shop_list")
{
    $shop_name = isset($_GET['shopName']) ? $_GET['shopName'] : "";
    $scate_id = isset($_GET['ScateId']) ? $_GET['ScateId'] : "";
    $current=isset($_POST['current']) ? $_POST['current'] : 1;
    $limit = isset($_POST['limit']) ? $_POST['limit'] : 1;
    $start=($current-1)*$limit;
    if(!empty($shop_name))
    {
        $sql = "SELECT * FROM {$food_}shop AS shop LEFT JOIN {$food_}shop_cate AS cate ON shop.scate_id = cate.scate_id WHERE shop.shop_name LIKE '%$shop_name%' ORDER BY shop.shop_id DESC LIMIT $start,$limit";
    }else if($scate_id){
        $sql = "SELECT * FROM {$food_}shop AS shop LEFT JOIN {$food_}shop_cate AS cate ON shop.scate_id = cate.scate_id WHERE shop.scate_id = $scate_id ORDER BY shop.shop_id DESC LIMIT $start,$limit";
    }else{
        $sql="SELECT * FROM {$food_}shop AS shop LEFT JOIN {$food_}shop_cate AS cate ON shop.scate_id = cate.scate_id ORDER BY shop.shop_id DESC LIMIT $start,$limit";
    }
    $shop_list=getAll($sql);
    echo json_encode($shop_list);
    exit;
}

if($action == "shop_img")
{
    if($_FILES['file']['error'] == 0 && $filename = upload_file('file',"../assets/uploads"))
    {
           $result = array('data'=>$filename);
           echo json_encode($result);
           exit;
    }
}


if($action == "shop_add")
{
    $arr = array(
        "shop_name"=>$_POST['shop_name'],
        "shop_img"=>$_POST['shop_img'],
        "shop_phone"=>$_POST['shop_phone'],
        "shop_fax"=>$_POST['shop_fax'],
        "scate_id"=>$_POST['scate_id'],
        "shop_time"=>time(),
    );

    $insertId = insert("{$food_}shop",$arr);

    echo json_encode($insertId);
    exit;
}


if($action == "shop_editId")
{
    $shop_id=isset($_GET['shop_id']) ? $_GET['shop_id'] : 0;
    $sql="SELECT * FROM {$food_}shop WHERE shop_id = $shop_id";
    $shop_editId=getOne($sql);
    echo json_encode($shop_editId);
}

if($action == "shop_Edit")
{
    $shop_id=isset($_POST['shop_id']) ? $_POST['shop_id'] : 0;
    $arr = array(
        "shop_name"=>$_POST['shop_name'],
        "shop_img"=>$_POST['shop_img'],
        "shop_phone"=>$_POST['shop_phone'],
        "shop_fax"=>$_POST['shop_fax'],
        "scate_id"=>$_POST['scate_id'],
        "shop_time"=>time(),
    );

    $affectId = update("{$food_}shop",$arr,"shop_id = $shop_id");

    echo json_encode($affectId);
    exit;
}

if($action == "shopDelete")
{
    $shop_id=isset($_GET['shop_id']) ? $_GET['shop_id'] : false;
    if($shop_id){
        $affectId=delete("{$food_}shop","shop_id = $shop_id");
        echo json_encode($affectId);
        exit;
    }

}

if($action == "shopDelete_all")
{
    $shopid_arr=isset($_GET['shopid_arr']) ? $_GET['shopid_arr'] : false;
    if($shopid_arr)
    {
        $where="shop_id IN ($shopid_arr)";
        $affectId=delete("{$food_}shop",$where);
        echo json_encode($affectId);
        exit;
    }
    
}



if($action == "art_count")
{
    $art_title = isset($_GET['artName']) ? $_GET['artName'] : "";
    if(!empty($art_title))
    {
        $sql = "SELECT COUNT(*) AS c FROM {$food_}article WHERE art_title LIKE '%$art_title%'";
    }else{
        $sql="SELECT COUNT(*) AS c FROM {$food_}article";
    }
    $art_count=getOne($sql);
    echo json_encode($art_count);
    exit;
}

if($action == "art_list")
{
    $art_title = isset($_GET['artName']) ? $_GET['artName'] : "";
    $current=isset($_POST['current']) ? $_POST['current'] : 1;
    $limit = isset($_POST['limit']) ? $_POST['limit'] : 1;
    $start=($current-1)*$limit;
    if(!empty($art_title))
    {
        $sql = "SELECT * FROM {$food_}article WHERE art_title LIKE '%$art_title%' ORDER BY art_id DESC LIMIT $start,$limit";
    }else{
        $sql="SELECT * FROM {$food_}article ORDER BY art_id DESC LIMIT $start,$limit";
    }
    $art_list=getAll($sql);
    echo json_encode($art_list);
    exit;
}

if($action == "art_img")
{
    if($_FILES['file']['error'] == 0 && $filename = upload_file('file',"../assets/uploads"))
    {
           $result = array('data'=>$filename);
           echo json_encode($result);
           exit;
    }
}


if($action == "art_add")
{
    $arr = array(
        "art_title"=>$_POST['art_title'],
        "art_content"=>$_POST['art_ctn'],
        "art_img"=>$_POST['art_img'],
        "art_time"=>time(),
    );

    $insertId = insert("{$food_}article",$arr);

    echo json_encode($insertId);
    exit;
}

if($action == "art_editId")
{
    $art_id=isset($_GET['art_id']) ? $_GET['art_id'] : 0;
    $sql="SELECT * FROM {$food_}article WHERE art_id = $art_id";
    $art_editId=getOne($sql);
    echo json_encode($art_editId);
}

if($action == "art_Edit")
{
    $art_id=isset($_POST['art_id']) ? $_POST['art_id'] : 0;
    $arr = array(
        "art_title"=>$_POST['art_title'],
        "art_content"=>$_POST['art_ctn'],
        "art_img"=>$_POST['art_img'],
        "art_time"=>time(),
    );

    $affectId = update("{$food_}article",$arr,"art_id = $art_id");

    echo json_encode($affectId);
    exit;
}

if($action == "artDelete")
{
    $art_id=isset($_GET['art_id']) ? $_GET['art_id'] : false;
    if($art_id){
        $affectId=delete("{$food_}article","art_id = $art_id");
        echo json_encode($affectId);
        exit;
    }

}

if($action == "artDelete_all")
{
    $artid_arr=isset($_GET['artid_arr']) ? $_GET['artid_arr'] : false;
    if($artid_arr)
    {
        $where="art_id IN ($artid_arr)";
        $affectId=delete("{$food_}article",$where);
        echo json_encode($affectId);
        exit;
    }
}

if($action == "ctc_count")
{
    $ctc_title = isset($_GET['ctcName']) ? $_GET['ctcName'] : "";
    if(!empty($ctc_title))
    {
        $sql = "SELECT COUNT(*) AS c FROM {$food_}contact WHERE contact_title LIKE '%$ctc_title%'";
    }else{
        $sql="SELECT COUNT(*) AS c FROM {$food_}contact";
    }
    $ctc_count=getOne($sql);
    echo json_encode($ctc_count);
    exit;
}

if($action == "ctc_list")
{
    $ctc_title = isset($_GET['ctcName']) ? $_GET['ctcName'] : "";
    $current=isset($_POST['current']) ? $_POST['current'] : 1;
    $limit = isset($_POST['limit']) ? $_POST['limit'] : 1;
    $start=($current-1)*$limit;
    if(!empty($ctc_title))
    {
        $sql = "SELECT * FROM {$food_}contact WHERE contact_title LIKE '%$ctc_title%' ORDER BY contact_id DESC LIMIT $start,$limit";
    }else{
        $sql="SELECT * FROM {$food_}contact ORDER BY contact_id DESC LIMIT $start,$limit";
    }
    $ctc_list=getAll($sql);
    echo json_encode($ctc_list);
    exit;
}

if($action == "ctc_img")
{
    if($_FILES['file']['error'] == 0 && $filename = upload_file('file',"../assets/uploads"))
    {
           $result = array('data'=>$filename);
           echo json_encode($result);
           exit;
    }
}


if($action == "ctc_add")
{
    $arr = array(
        "contact_title"=>$_POST['ctc_title'],
        "contact_name"=>$_POST['ctc_name'],
        "contact_phone"=>$_POST['ctc_phone'],
        "contact_content"=>$_POST['ctc_content'],
        "contact_img"=>$_POST['ctc_img'],
        "contact_time"=>time(),
    );

    $insertId = insert("{$food_}contact",$arr);

    echo json_encode($arr);
    exit;
}

if($action == "contact_img")
{
    if($_FILES['file']['error'] == 0 && $filename = upload_file('file',"../assets/uploads"))
    {
           $result = array('data'=>$filename);
           echo json_encode($result);
           exit;
    }
}

if($action == "ctc_editId")
{
    $ctc_id=isset($_GET['ctc_id']) ? $_GET['ctc_id'] : 0;
    $sql="SELECT * FROM {$food_}contact WHERE contact_id = $ctc_id";
    $ctc_editId=getOne($sql);
    echo json_encode($ctc_editId);
}

if($action == "ctc_Edit")
{
    $ctc_id=isset($_GET['ctc_id']) ? $_GET['ctc_id'] : 0;
    $arr = array(
        "contact_title"=>$_POST['contact_title'],
        "contact_name"=>$_POST['contact_name'],
        "contact_phone"=>$_POST['contact_phone'],
        "contact_content"=>$_POST['contact_content'],
        "contact_img"=>$_POST['contact_img'],
        "contact_time"=>time(),
    );

    $affectId = update("{$food_}contact",$arr,"contact_id = $ctc_id");

    echo json_encode($affectId);
    exit;
}

if($action == "ctcDelete")
{
    $ctc_id=isset($_GET['ctc_id']) ? $_GET['ctc_id'] : false;
    if($ctc_id){
        $affectId=delete("{$food_}contact","contact_id = $ctc_id");
        echo json_encode($affectId);
        exit;
    }

}

if($action == "ctcDelete_all")
{
    $ctcid_arr=isset($_GET['ctcid_arr']) ? $_GET['ctcid_arr'] : false;
    if($ctcid_arr)
    {
        $where="contact_id IN ($ctcid_arr)";
        $affectId=delete("{$food_}contact",$where);
        echo json_encode($affectId);
        exit;
    }
}

if($action == "notice_count")
{
    $notice_title = isset($_GET['noticeName']) ? $_GET['noticeName'] : "";
    if(!empty($notice_title))
    {
        $sql = "SELECT COUNT(*) AS c FROM {$food_}notice WHERE notice_title LIKE '%$notice_title%'";
    }else{
        $sql="SELECT COUNT(*) AS c FROM {$food_}notice";
    }
    $notice_count=getOne($sql);
    echo json_encode($notice_count);
    exit;
}

if($action == "notice_list")
{
    $notice_title = isset($_GET['noticeName']) ? $_GET['noticeName'] : "";
    $current=isset($_POST['current']) ? $_POST['current'] : 1;
    $limit = isset($_POST['limit']) ? $_POST['limit'] : 1;
    $start=($current-1)*$limit;
    if(!empty($notice_title))
    {
        $sql = "SELECT * FROM {$food_}notice  AS notice LEFT JOIN {$food_}admin AS admin ON notice.admin_id = admin.admin_id  WHERE notice_title LIKE '%$notice_title%' ORDER BY notice_id DESC LIMIT $start,$limit";
    }else{
        $sql="SELECT * FROM {$food_}notice AS notice LEFT JOIN {$food_}admin AS admin ON notice.admin_id = admin.admin_id  ORDER BY notice_id DESC LIMIT $start,$limit";
    }
    $notice_list=getAll($sql);
    echo json_encode($notice_list);
    exit;
}

if($action == "notice_add")
{
    $admin_name=$_POST['admin_name'];
    $sql="SELECT admin_id FROM {$food_}admin WHERE admin_name = '$admin_name'";
    $admin_id=implode(getOne($sql));
    $arr = array(
        "notice_title"=>$_POST['notice_title'],
        "notice_content"=>$_POST['notice_content'],
        "admin_id"=>$admin_id,
        "notice_time"=>time(),
    );

    $insertId = insert("{$food_}notice",$arr);

    echo json_encode($arr);
    exit;
}


if($action == "notice_check")
{
    $admin_name=isset($_GET['admin_name']) ? $_GET['admin_name'] : false;
    if(!empty($admin_name))
    {   
        $sql="SELECT * FROM {$food_}admin WHERE admin_name = '$admin_name'";
        $notice_check=getOne($sql);
        if($notice_check)
        {
            echo json_encode(true);
            exit;
        }else{
            echo json_encode(false);
            exit;
        }
    }
}

if($action == "notice_editId")
{
    $notice_id=isset($_GET['notice_id']) ? $_GET['notice_id'] : 0;
    $sql="SELECT * FROM {$food_}notice AS notice LEFT JOIN {$food_}admin AS admin ON notice.admin_id=admin.admin_id WHERE notice_id = $notice_id";
    $notice_editId=getOne($sql);
    echo json_encode($notice_editId);
}

if($action == "notice_Edit")
{
    $notice_id=isset($_GET['notice_id']) ? $_GET['notice_id'] : 0;
    $arr = array(
        "notice_title"=>$_POST['notice_title'],
        "notice_content"=>$_POST['notice_content'],
        "admin_id"=>$admin_id,
        "notice_time"=>time(),
    );

    $affectId = update("{$food_}notice",$arr,"notice_id = $notice_id");

    echo json_encode($affectId);
    exit;
}

if($action == "noticeDelete")
{
    $notice_id=isset($_GET['notice_id']) ? $_GET['notice_id'] : false;
    if($notice_id){
        $affectId=delete("{$food_}notice","notice_id = $notice_id");
        echo json_encode($affectId);
        exit;
    }

}

if($action == "noticeDelete_all")
{
    $noticeid_arr=isset($_GET['noticeid_arr']) ? $_GET['noticeid_arr'] : false;
    if($noticeid_arr)
    {
        $where="notice_id IN ($noticeid_arr)";
        $affectId=delete("{$food_}notice",$where);
        echo json_encode($affectId);
        exit;
    }
}

?>