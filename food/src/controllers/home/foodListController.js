food.controller('foodListController',function($location,$scope,$http,page){

    //查询食品分类
    $http({
        method:'get',
        url:'../api/homeApi.php?action=food_cate'
    }).then(function(result){
        $scope.food_cate = result.data;
    });

    //查询总记录数
    $http({
        method:'get',
        url:"../api/homeApi.php?action=food_count"
    }).then(function(count){
        $scope.totalItems = count.data.c;
    });


    //组装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 6;
    $scope.food_check = $location.path() == "/foodList" ? true : false;

    var url = "../api/homeApi.php?action=food_list";

    //获取食品数据
    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
        $scope.food_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.food_list = result;
        });
    };


});

//按照分类查询数据
food.controller('foodCateController',function($location,$scope,$stateParams,$http,page){

    //查询食品分类
    $http({
        method:'get',
        url:'../api/homeApi.php?action=food_cate'
    }).then(function(result){
        $scope.food_cate = result.data;
    });

    //获取分类id
    $fcate_id = $stateParams.fcate_id;
    $scope.fcate_id = $fcate_id;

    //查询总记录数
    $http({
        method:'get',
        url:"../api/homeApi.php?action=food_count&fcate_id="+$fcate_id
    }).then(function(count){
        $scope.totalItems = count.data.c;
    });


    //组装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 6;
    $scope.food_check = $location.path() == "/foodList" ? true : false;

    var url = "../api/homeApi.php?action=food_list&fcate_id="+$fcate_id;

    //获取食品数据
    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
        $scope.food_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.food_list = result;
        });
    };


});

//安装关键词查询数据
food.controller('foodNameController',function($location,$scope,$stateParams,$http,page){

    //查询食品分类
    $http({
        method:'get',
        url:'../api/homeApi.php?action=food_cate'
    }).then(function(result){
        $scope.food_cate = result.data;
    });

    //获取关键词
    $foodName = $stateParams.foodName;
    $scope.foodName = $foodName;

    //查询总记录数
    $http({
        method:'get',
        url:"../api/homeApi.php?action=food_count&foodName="+$foodName
    }).then(function(count){
        $scope.totalItems = count.data.c;
    });


    //组装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 6;
    $scope.food_check = $location.path() == "/foodList" ? true : false;

    var url = "../api/homeApi.php?action=food_list&foodName="+$foodName;

    //获取食品数据
    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
        $scope.food_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.food_list = result;
        });
    };


});
