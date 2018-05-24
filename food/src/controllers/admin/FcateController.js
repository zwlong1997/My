food_admin.controller('FcateList',function($window,$location,$scope,$http,page,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;

    //查询数据总数
    $http({
        method:'get',
        url:'../api/adminApi.php?action=fcate_count'
    }).then(function(result){
        $scope.totalItems = result.data.c;
    });

    //封装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 3;

    var url = '../api/adminApi.php?action=fcate_list';


    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
        $scope.fcate_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.fcate_list = result;
        });
    };


    //删除数据
    $scope.deleteFcate = function(fcate_id)
    {
        if(confirm("是否确认删除"))
        {
            $location.path('FcateDelete/'+fcate_id);
            return false;
        }
    }


    //反选
    $scope.check_box = function(){

        for(item in $scope.fcate_list)
        {
            if($scope.fcate_list[item].fcate_checked)
            {
                $scope.fcate_list[item].fcate_checked = false;
            }else{
                $scope.fcate_list[item].fcate_checked = true;
            }
        }
    }


    //批量删除方法
    $scope.saveFcateId = function()
    {
        var strId = "";
        for(k in $scope.fcate_list)
        {
            if($scope.fcate_list[k].fcate_checked)
            {
                strId += $scope.fcate_list[k].fcate_id+",";
            }
        }

        strId = strId.substr(0,strId.length-1);

        if(strId)
        {
            $http({
                method:'get',
                url:'../api/adminApi.php?action=fcateDelete_all&fcateid_arr='+strId
            }).then(function(result){
                if(result.data)
                {
                    $window.location.reload();
                }else{
                    $window.location.reload();
                }
            });
        }

    }

});


//按照关键词来查询
food_admin.controller('FcateName',function($scope,$stateParams,$http,page,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;

    //获取关键词参数
    $fcateName = $stateParams.FcateName;
    $scope.fcateName = $fcateName;

    //查询数据总数
    $http({
        method:'get',
        url:'../api/adminApi.php?action=fcate_count&fcateName='+$fcateName
    }).then(function(result){
        $scope.totalItems = result.data.c;
    });

    //封装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 3;

    var url = '../api/adminApi.php?action=fcate_list&fcateName='+$fcateName;


    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
        $scope.fcate_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.fcate_list = result;
        });
    };

});

//添加
food_admin.controller('FcateAdd',function($location,$scope,$http,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;

    $scope.showNotice = false;

    //当input改变的时候  触发一个方法
    $scope.changeName = function(fcate_name){
        if(fcate_name != "")
        {
            $http({
                method:'get',
                url:'../api/adminApi.php?action=fcate_check&fcate_name='+fcate_name
            }).then(function(result){
                if(result.data == "true")
                {
                    $scope.showNotice = false;
                }else{
                    $scope.showNotice = true;
                }
            });
        }
    }

    //定义提交表单的方法
    $scope.saveForm = function()
    {
        if($scope.fcate_name != '')
        {
            $http({
                method:'post',
                url:'../api/adminApi.php?action=fcate_add',
                data:"fcate_name="+$scope.fcate_name,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            }).then(function(result){
                if(result)
                {
                    $location.path('FcateList');
                }else{
                    $location.path('FcateAdd');
                }
            });
        }
    }
});


//编辑
food_admin.controller('FcateEdit',function($stateParams,$location,$scope,$http,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;

    if(!$stateParams.fcateId)
    {
        $location.path('FcateList');
        return false;
    }

    //获取当前的分类的记录
    $http({
        method:'get',
        url:'../api/adminApi.php?action=getFcate&fcate_id='+$stateParams.fcateId
    }).then(function(result){
        $scope.fcateInfo = result.data;
    });



    $scope.showNotice = false;

    //当input改变的时候  触发一个方法
    $scope.changeName = function(fcate_name){
        if(fcate_name != "")
        {
            $http({
                method:'get',
                url:'../api/adminApi.php?action=fcate_check&fcate_name='+fcate_name
            }).then(function(result){
                if(result.data == "true")
                {
                    $scope.showNotice = false;
                }else{
                    $scope.showNotice = true;
                }
            });
        }
    }

    //定义提交表单的方法
    $scope.saveForm = function()
    {
        var data = {
            "fcate_name":$scope.fcateInfo.fcate_name,
            "fcate_id":$scope.fcateInfo.fcate_id
        };

        if($scope.fcate_name != '')
        {
            $http({
                method:'post',
                url:'../api/adminApi.php?action=fcate_edit',
                data:data,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                transformRequest: function (data) {
                    return $.param(data);  //将对象转化成 post数据结果中的数组对象
                }
            }).then(function(result){
                if(result)
                {
                    $location.path('FcateList');
                }else{
                    $location.path('FcateEdit/'+$scope.fcateInfo.fcate_id);
                }
            });
        }
    }
});


//删除
food_admin.controller('FcateDelete',function($stateParams,$location,$scope,$http,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;

    $fcate_id = $stateParams.fcateId;

    if($fcate_id)
    {
        $http({
            method:'get',
            url:"../api/adminApi.php?action=fcateDelete&fcate_id="+$fcate_id
        }).then(function(result){
            if(result.data)
            {
                $location.path('FcateList');
            }
        });
    }

});