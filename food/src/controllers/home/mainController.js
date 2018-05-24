food.controller('mainController', function ($scope, $http, $stateParams){

    $http({
        method:'get',
        url: '../api/homeApi.php?action=pinpai&art_id=' + $stateParams.artId
    }).then(function(result){
        $scope.pinpai = result.data;
    });

});


//aboutController 关于我们控制器
food.controller('aboutController',function($scope,$http,$stateParams,$location,$window){

    //获取总公司数据
    $http({
        method:'get',
        url:'../api/homeApi.php?action=about_shop'
    }).then(function(result){
        $scope.about_shop = result.data;
    });

    //获取系统配置信息
    $http({
        method: 'get',
        url: '../api/homeApi.php?action=about_conf'
    }).then(function (result) {
        $scope.about_conf = result.data;
    });

    //定义提交表单的方法
    $scope.saveForm = function()
    {
        if($scope.ctc.ctc_name != "" && $scope.ctc.ctc_price != "" )
        $http({
            method:'post',
            url:'../api/homeApi.php?action=ctc_add',
            data:$scope.ctc,
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            transformRequest:function(data){
                return $.param(data);
            }
        }).then(function(result){
            console.log(result);
            if(result)
            {
                $window.location.reload();
            }else{
                $window.location.reload();
            }
        });
    }

    $http({
        method:'get',
        url:'../api/homeApi.php?action=ctc_list'
    }).then(function(result){
        $scope.ctc_list=result.data;
    })

});