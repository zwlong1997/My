food_admin.controller('FoodList',function($window,$location,$scope,$http,page,checkAdmin,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;
    checkAdmin.isLogin();

	$http({
		method:'get',
		url:'../api/adminApi.php?action=food_cate'
	}).then(function(result){
		$scope.food_cate=result.data;
	})

	$http({
		method:'get',
		url:'../api/adminApi.php?action=food_count'
	}).then(function(result){
		$scope.totalItems=result.data.c;
	})

	//封装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 3;

    var url = '../api/adminApi.php?action=food_list';


    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
        $scope.food_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.food_list = result;
        });
    };

    //删除数据
    $scope.deleteFood=function(food_id){
    	if(confirm("是否确认删除?")){
    		$location.path("FoodDelete/"+food_id);
    		return false;
    	}
    }

    $scope.check_box=function(){
        for(item in $scope.food_list)
        {
            if($scope.food_list[item].food_checked)
            {
                $scope.food_list[item].food_checked=false;
            }else{
                $scope.food_list[item].food_checked=true;
            }
        }
    }

    $scope.saveFoodId=function(){
        var strId="";
        for(k in $scope.food_list)
        {
            if($scope.food_list[k].food_checked)
            {
                strId+=$scope.food_list[k].food_id+",";
            }
        }
        strId=strId.substr(0,strId.length-1);
        if(strId)
        {
            $http({
                method:'get',
                url:'../api/adminApi.php?action=foodDelete_all&foodid_arr='+strId
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

//用于分类的跳转
food_admin.controller('FoodCheck',function($scope,$location,checkAdmin,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;
    checkAdmin.isLogin();
	$scope.getFcate=function(){
		$location.path("/FoodCate/"+$scope.FcateId);
	}
});


food_admin.controller("FoodCate",function($scope,$stateParams,$http,page,checkAdmin,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;
    checkAdmin.isLogin();
	//查询出所有的分类
    $http({
        method:'get',
        url:'../api/adminApi.php?action=food_cate'
    }).then(function(result){
        $scope.food_cate = result.data;
    });

    //获取分类参数
    $FcateId = $stateParams.FcateId;
    $scope.FcateId = $FcateId;

    $http({
    	method:'get',
    	url:'../api/adminApi.php?action=food_count&FcateId='+$FcateId
    }).then(function(result){
    	$scope.totalItems=result.data.c;
    })

    //封装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 3;

    var url = '../api/adminApi.php?action=food_list&FcateId='+$FcateId;


    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
        $scope.food_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.food_list = result;
        });
    };
})

food_admin.controller("FoodName",function($scope,$stateParams,$http,page,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;
	//查询出所有的分类
    $http({
        method:'get',
        url:'../api/adminApi.php?action=food_cate'
    }).then(function(result){
        $scope.food_cate = result.data;
    });

    //获取分类参数
    $FoodName = $stateParams.FoodName;
    $scope.FoodName = $FoodName;

    $http({
    	method:'get',
    	url:'../api/adminApi.php?action=food_count&foodName='+$FoodName
    }).then(function(result){
    	$scope.totalItems=result.data.c;
    })

    //封装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 3;

    var url = '../api/adminApi.php?action=food_list&foodName='+$FoodName;


    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){

        $scope.food_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.food_list = result;
        });
    };
})


// Add
food_admin.controller('FoodAdd',function($location,$scope,$http,Upload,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;
	//查询食品分类的数据
    $http({
        method:'get',
        url:'../api/adminApi.php?action=food_cate'
    }).then(function(result){
        $scope.food_cate = result.data;
    });

    //食品的添加的绑定数据结构
    $scope.food = {
        food_img:"../assets/admin/i/fff.png"
    };

    //上传文件
    $scope.uploadImg = function()
    {
        if($scope.food.food_img){
        	Upload.upload({
        		url:'../api/adminApi.php?action=food_img',
        		file:$scope.food.food_img
        	}).success(function(result){
        		$scope.food.food_img="../assets/uploads/"+result.data;
        	})
        }
    };

    //定义提交表单的方法
    $scope.saveForm = function()
    {
        if($scope.food.food_name != "" && $scope.food.food_price != ""  && $scope.food.fcate_id != "")
       	$http({
       		method:'post',
       		url:'../api/adminApi.php?action=food_add',
       		data:$scope.food,
       		headers:{'Content-Type':'application/x-www-form-urlencoded'},
       		transformRequest:function(data){
       			return $.param(data);
       		}
       	}).then(function(result){
       		if(result)
       		{
       			$location.path("FoodList");
       		}else{
       			$location.path("FoodAdd");
       		}
       	});
    }
});


//编辑
food_admin.controller('FoodEdit',function($location,$scope,$http,Upload,$rootScope,$stateParams){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;
    //查询食品分类的数据
    $http({
        method:'get',
        url:'../api/adminApi.php?action=food_cate'
    }).then(function(result){
        $scope.food_cate = result.data;
    });

    //食品的添加的绑定数据结构
    $scope.food_edit = {
        food_img:"../assets/admin/i/fff.png"
    };

    $food_id=$stateParams.foodId;
    $scope.food_id=$food_id;

    //上传文件
    $scope.uploadImg = function()
    {
        if($scope.food_edit.food_img){
            Upload.upload({
                url:'../api/adminApi.php?action=food_img',
                file:$scope.food_edit.food_img
            }).success(function(result){
                $scope.food_edit.food_img="../assets/uploads/"+result.data;
            })
        }
    };

    $http({
        method:'get',
        url:'../api/adminApi.php?action=food_editId&food_id='+$food_id
    }).then(function(result){
        $scope.food_edit=result.data;
    });

    //定义提交表单的方法
    $scope.saveForm = function()
    {
        if($scope.food_edit.food_name != "" && $scope.food_edit.food_price != ""  && $scope.food_edit.fcate_id != "")
        $http({
            method:'post',
            url:'../api/adminApi.php?action=food_Edit&food_id='+$food_id,
            data:$scope.food_edit,
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            transformRequest:function(data){
                return $.param(data);
            }
        }).then(function(result){
            if(result)
            {
                $location.path("FoodList");
            }else{
                $location.path("FoodEdit");
            }
        });
    }
})


//删除
food_admin.controller('FoodDelete',function($http,$scope,$stateParams,$location,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;
	$food_id=$stateParams.foodId;

	if($food_id){
		$http({
			method:'get',
			url:'../api/adminApi.php?action=foodDelete&food_id='+$food_id
		}).then(function(result){
			if(result.data)
			{
				$location.path("FoodList");
			}
		})
	}
});

