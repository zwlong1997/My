food.controller('footerController',function($scope,$http){


    //获取友情链接数据
    $http({
        method:'GET',
        url:'../api/homeApi.php?action=homeLink'
    }).then(function(result){
        $scope.homeLink = result.data;
    });


    //获取底部版权信息数据
    $http({
        method:"GET",
        url:"../api/homeApi.php?action=homeConf"
    }).then(function(result){
        $scope.homeConf = result.data;
    });
});