food_admin.controller('MainController',function($scope,$http,page,$rootScope,$cookieStore,checkAdmin){

    checkAdmin.isLogin();

    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;

    //查询数据总数
    $http({
        method:'get',
        url:'../api/adminApi.php?action=count_data'
    }).then(function(result){
        $scope.count_data = result.data;
    });

    //查询公告
    $http({
        method:'get',
        url:'../api/adminApi.php?action=news_notice'
    }).then(function(result){
        $scope.notice_list = result.data;
    });


    //查询留言总数
    $http({
        method:'get',
        url:'../api/adminApi.php?action=notice_count'
    }).then(function(count){
        $scope.totalItems = count.data.c;
    });

    //封装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 3;

    var url = '../api/adminApi.php?action=contact_list';


    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
        $scope.contact_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.contact_list = result;
        });
    };


});

food_admin.controller('loginController',function($scope,$http,$cookieStore,$rootScope,$location){
    $rootScope.displayMenu = false;
    $rootScope.displayHeader = false;

    var postCfg = {
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        transformRequest:function(data){
            return $.param(data);
        }
    };


    $scope.adminLogin = function()
    {

        $http.post('../api/adminApi.php?action=login',$scope.admin,postCfg).success(function(result){
            if(result)
            {
                $cookieStore.put('admin_name',result.admin_name);
                $location.path('index');
            }
        });
    }

});


food_admin.controller('logoutController',function($location,$cookieStore){
    $cookieStore.remove("admin_name");
    $location.path('login');
});