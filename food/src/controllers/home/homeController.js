food.controller('homeController',function($scope,$http){

    //获取新品推荐数据
    $http({
        method:'get',
        url: "../api/homeApi.php?action=home_food"
    }).then(function (result) {
        $scope.home_food = result.data;
    });

    //获取公司简介数据
    $http({
        method:"get",
        url:"../api/homeApi.php?action=about"
    }).then(function(result){
        $scope.about = result.data;
    });


    //获取新闻资讯
    $http({
        method:"get",
        url:"../api/homeApi.php?action=home_article"
    }).then(function(result){
        $scope.home_article = result.data;
    });

    //获取新闻资讯头条
    $http({
        method:'get',
        url: "../api/homeApi.php?action=home_hot"
    }).then(function(result){
        $scope.home_hot = result.data;
    });
    


});