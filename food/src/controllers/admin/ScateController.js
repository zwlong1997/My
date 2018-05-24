food_admin.controller('ScateList',function($window,$location,$scope,$http,page,$rootScope){
	 $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;

	$http({
		method:'get',
		url:'../api/adminApi.php?action=scate_cate'
	}).then(function(result){
		$scope.food_cate=result.data;
	})

	$http({
		method:'get',
		url:'../api/adminApi.php?action=scate_count'
	}).then(function(result){
		$scope.totalItems=result.data.c;
	})

	//封装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 3;

    var url = '../api/adminApi.php?action=scate_list';


    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
        $scope.scate_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.scate_list = result;
        });
    };


    //反选
    $scope.check_box = function(){

        for(item in $scope.scate_list)
        {
            if($scope.scate_list[item].scate_checked)
            {
                $scope.scate_list[item].scate_checked = false;
            }else{
                $scope.scate_list[item].scate_checked = true;
            }
        }
    }

    //删除数据
    $scope.deleteScate = function(scate_id)
    {
        if(confirm("是否确认删除"))
        {
            $location.path('ScateDelete/'+scate_id);
            return false;
        }
    }

    //批量删除方法
    $scope.saveScateId = function()
    {
        var strId = "";
        for(k in $scope.scate_list)
        {
            if($scope.scate_list[k].scate_checked)
            {
                strId += $scope.scate_list[k].scate_id+",";
            }
        }

        strId = strId.substr(0,strId.length-1);

        if(strId)
        {
            $http({
                method:'get',
                url:'../api/adminApi.php?action=scateDelete_all&scateid_arr='+strId
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
})

//按照关键词来查询
food_admin.controller('ScateName',function($scope,$stateParams,$http,page,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;

    //获取关键词参数
    $scateName = $stateParams.ScateName;
    $scope.scateName = $scateName;

    //查询数据总数
    $http({
        method:'get',
        url:'../api/adminApi.php?action=scate_count&scateName='+$scateName
    }).then(function(result){
        $scope.totalItems = result.data.c;
    });

    //封装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 3;

    var url = '../api/adminApi.php?action=scate_list&scateName='+$scateName;


    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
        $scope.scate_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.scate_list = result;
        });
    };

});

//添加
food_admin.controller('ScateAdd',function($location,$scope,$http,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;

    $scope.showNotice = false;

    //当input改变的时候  触发一个方法
    $scope.changeName = function(scate_name){
        if(scate_name != "")
        {
            $http({
                method:'get',
                url:'../api/adminApi.php?action=scate_check&scate_name='+scate_name
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
        if($scope.scate_name != '')
        {
            $http({
                method:'post',
                url:'../api/adminApi.php?action=scate_add',
                data:"scate_name="+$scope.scate_name,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            }).then(function(result){
                if(result)
                {
                    $location.path('ScateList');
                }else{
                    $location.path('ScateAdd');
                }
            });
        }
    }
});

//编辑
food_admin.controller('ScateEdit',function($stateParams,$location,$scope,$http,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;

    if(!$stateParams.scateId)
    {
        $location.path('ScateList');
        return false;
    }

    //获取当前的分类的记录
    $http({
        method:'get',
        url:'../api/adminApi.php?action=getScate&scate_id='+$stateParams.scateId
    }).then(function(result){
        $scope.scateInfo = result.data;
    });



    $scope.showNotice = false;

    //当input改变的时候  触发一个方法
    $scope.changeName = function(scate_name){
        if(scate_name != "")
        {
            $http({
                method:'get',
                url:'../api/adminApi.php?action=scate_check&scate_name='+scate_name
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
            "scate_name":$scope.scateInfo.scate_name,
            "scate_id":$scope.scateInfo.scate_id
        };

        if($scope.scate_name != '')
        {
            $http({
                method:'post',
                url:'../api/adminApi.php?action=scate_edit',
                data:data,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                transformRequest: function (data) {
                    return $.param(data);  //将对象转化成 post数据结果中的数组对象
                }
            }).then(function(result){
                if(result)
                {
                    $location.path('ScateList');
                }else{
                    $location.path('ScateEdit/'+$scope.scateInfo.scate_id);
                }
            });
        }
    }
});

//删除
food_admin.controller('ScateDelete',function($stateParams,$location,$scope,$http,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;

    $scate_id = $stateParams.scateId;

    if($scate_id)
    {
        $http({
            method:'get',
            url:"../api/adminApi.php?action=scateDelete&scate_id="+$scate_id
        }).then(function(result){
            if(result.data)
            {
                $location.path('ScateList');
            }
        });
    }

});