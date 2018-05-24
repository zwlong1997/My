food_admin.controller('AdminController',function($scope,$http,$rootScope,page,$location,$window){
	$rootScope.displayMenu = true;
    $rootScope.displayHeader = true;

	//查询数据总数
    $http({
        method:'get',
        url:'../api/adminApi.php?action=admin_count'
    }).then(function(result){
        $scope.totalItems = result.data.c;
    });

    //封装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 3;

    var url = '../api/adminApi.php?action=admin_list';


    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
        $scope.admin_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.admin_list = result;
        });
    };

    $scope.check_box=function()
    {
    	for(item in $scope.admin_list)
    	{
    		if($scope.admin_list[item].admin_checked)
    		{
    			$scope.admin_list[item].admin_checked=false;
    		}else{
    			$scope.admin_list[item].admin_checked=true;
    		}
    	}
    }

    $scope.deleteAdmin=function(admin_id)
    {
    	if(confirm("是否确认删除?"))
    	{
    		$location.path("DeleteAdmin/"+admin_id);
    		return false;
    	}

    }

    $scope.saveAdminId=function(){
        var strId="";
        for(k in $scope.admin_list)
        {
            if($scope.admin_list[k].admin_checked)
            {
                strId+=$scope.admin_list[k].admin_id+',';
            }
        }
        strId=strId.substr(0,strId.length-1);
        if(strId)
        {
            $http({
                method:'get',
                url:'../api/adminApi.php?action=admindelete_all&adminid_arr='+strId
            }).then(function(result)
            {
                if(result.data)
                {
                    $window.location.reload();
                }else{
                    $window.location.reload();
                }
            })
        }
    }
})

food_admin.controller('AdminName',function($scope,$http,$rootScope,page,$stateParams){
	$rootScope.displayMenu = true;
    $rootScope.displayHeader = true;

    $admin_name=$stateParams.adminName;
    $scope.adminname=$admin_name;

	//查询数据总数
    $http({
        method:'get',
        url:'../api/adminApi.php?action=admin_count&admin_name='+$admin_name
    }).then(function(result){
        $scope.totalItems = result.data.c;
    });

    //封装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 3;

    var url = '../api/adminApi.php?action=admin_list&admin_name='+$admin_name;


    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
        $scope.admin_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.admin_list = result;
        });
    };
})

food_admin.controller('DeleteAdmin',function($scope,$http,$location,$stateParams)
{
	$admin_id=$stateParams.adminId;

	if($admin_id)
	{
		$http({
			method:'get',
			url:'../api/adminApi.php?action=delete_admin&admin_id='+$admin_id
		}).then(function(result){
			if(result.data)
			{
				$location.path("Admin");
			}
		})
	}
	
})


food_admin.controller('AdminAdd',function($scope,$http,$location,$rootScope)
{
	$rootScope.displayMenu = true;
    $rootScope.displayHeader = true;

    $scope.showNotice = false;

    $scope.changeName=function(admin_name)
    {
        if(admin_name!="")
        {
            $http({
                method:'get',
                url:'../api/adminApi.php?action=admin_check&admin_name='+admin_name
            }).then(function(result){
                if(result.data == "true")
                {
                    $scope.showNotice=false;
                }else{
                    $scope.showNotice=true;
                }
            });
        }
    }
	
	$scope.saveForm=function(){
		var data = {
            "admin_name":$scope.admin_name,
            "admin_pwd":$scope.admin_pwd
        };

		if($scope.admin_name != '' && $scope.admin_pwd != '')
		{
			$http({
				method:'post',
				url:'../api/adminApi.php?action=admin_add',
				data:data,
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				transformRequest:function(data)
				{
					return $.param(data);
				}
			}).then(function(result)
			{
				if(result.data)
				{
					$location.path("Admin");
				}
			})
		}
	}
});


food_admin.controller('AdminEdit',function($scope,$http,$rootScope,$stateParams,$location)
{
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;

    $scope.showNotice = false;


    $scope.changeName=function(admin_name)
    {
        if(admin_name!="")
        {
            $http({
                method:'get',
                url:'../api/adminApi.php?action=admin_check&admin_name='+admin_name
            }).then(function(result){
                console.log(result);
                if(result.data == "true")
                {
                    $scope.showNotice=false;
                }else{
                    $scope.showNotice=true;
                }
            });
        }
    }

    $scope.saveForm=function(){
        var data = {
            "admin_name":$scope.admin_name,
            "admin_pwd":$scope.admin_pwd
        };

        if($scope.admin_name != '' && $scope.admin_pwd != '')
        {
            $http({
                method:'post',
                url:'../api/adminApi.php?action=admin_add',
                data:data,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                transformRequest:function(data)
                {
                    return $.param(data);
                }
            }).then(function(result)
            {
                if(result.data)
                {
                    $location.path("Admin");
                }
            })
        }
    }

});