food_admin.controller('ShopList',function($window,$location,$scope,$http,page,checkAdmin,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;


	$http({
		method:'get',
		url:'../api/adminApi.php?action=shop_cate'
	}).then(function(result){
		$scope.shop_cate=result.data;
	})

	$http({
		method:'get',
		url:'../api/adminApi.php?action=shop_count'
	}).then(function(result){
		$scope.totalItems=result.data.c;
	})

	//封装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 3;

    var url = '../api/adminApi.php?action=shop_list';


    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
        $scope.shop_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.shop_list = result;
        });
    };

    //删除数据
    $scope.deleteShop=function(shop_id){
    	if(confirm("是否确认删除?")){
    		$location.path("ShopDelete/"+shop_id);
    		return false;
    	}
    }

    $scope.check_box=function(){
        for(item in $scope.shop_list)
        {
            if($scope.shop_list[item].shop_checked)
            {
                $scope.shop_list[item].shop_checked=false;
            }else{
                $scope.shop_list[item].shop_checked=true;
            }
        }
    }

    $scope.saveShopId=function(){
        var strId="";
        for(k in $scope.shop_list)
        {
            if($scope.shop_list[k].shop_checked)
            {
                strId+=$scope.shop_list[k].shop_id+",";
            }
        }
        strId=strId.substr(0,strId.length-1);
        if(strId)
        {
            $http({
                method:'get',
                url:'../api/adminApi.php?action=shopDelete_all&shopid_arr='+strId
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

});

//用于分类的跳转
food_admin.controller('ShopCheck',function($scope,$location,checkAdmin,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;
    // checkAdmin.isLogin();
    $scope.getScate=function(){
        $location.path("/ShopCate/"+$scope.ScateId);
    }
});


food_admin.controller("ShopCate",function($scope,$stateParams,$http,page,checkAdmin,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;
    // checkAdmin.isLogin();
    //查询出所有的分类
    $http({
        method:'get',
        url:'../api/adminApi.php?action=shop_cate'
    }).then(function(result){
        $scope.shop_cate = result.data;
    });

    //获取分类参数
    $ScateId = $stateParams.ScateId;
    $scope.ScateId = $ScateId;

    $http({
        method:'get',
        url:'../api/adminApi.php?action=shop_count&ScateId='+$ScateId
    }).then(function(result){
        $scope.totalItems=result.data.c;
    })

    //封装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 3;

    var url = '../api/adminApi.php?action=shop_list&ScateId='+$ScateId;


    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
        
        $scope.shop_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.shop_list = result;
        });
    };
})

food_admin.controller("ShopName",function($scope,$stateParams,$http,page,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;
    //查询出所有的分类
    $http({
        method:'get',
        url:'../api/adminApi.php?action=shop_cate'
    }).then(function(result){
        $scope.shop_cate = result.data;
    });

    //获取分类参数
    $ShopName = $stateParams.ShopName;
    $scope.ShopName = $ShopName;

    $http({
        method:'get',
        url:'../api/adminApi.php?action=shop_count&shopName='+$ShopName
    }).then(function(result){
        $scope.totalItems=result.data.c;
    })

    //封装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 3;

    var url = '../api/adminApi.php?action=shop_list&shopName='+$ShopName;


    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){

        $scope.shop_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.shop_list = result;
        });
    };
})

// Add
food_admin.controller('ShopAdd',function($location,$scope,$http,Upload,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;
    //查询食品分类的数据
    $http({
        method:'get',
        url:'../api/adminApi.php?action=shop_cate'
    }).then(function(result){
        $scope.shop_cate = result.data;
    });

    //食品的添加的绑定数据结构
    $scope.shop = {
        shop_img:"../assets/admin/i/fff.png"
    };

    //上传文件
    $scope.uploadImg = function()
    {
        if($scope.shop.shop_img){
            Upload.upload({
                url:'../api/adminApi.php?action=shop_img',
                file:$scope.shop.shop_img
            }).success(function(result){
                $scope.shop.shop_img="../assets/uploads/"+result.data;
            })
        }
    };

    //定义提交表单的方法
    $scope.saveForm = function()
    {
        if($scope.shop.shop_name != "" && $scope.shop.shop_price != ""  && $scope.shop.scate_id != "")
        $http({
            method:'post',
            url:'../api/adminApi.php?action=shop_add',
            data:$scope.shop,
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            transformRequest:function(data){
                return $.param(data);
            }
        }).then(function(result){
            if(result)
            {
                $location.path("ShopList");
            }else{
                $location.path("ShopAdd");
            }
        });
    }
});


//编辑
food_admin.controller('ShopEdit',function($location,$scope,$http,Upload,$rootScope,$stateParams){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;
    //查询食品分类的数据
    $http({
        method:'get',
        url:'../api/adminApi.php?action=shop_cate'
    }).then(function(result){
        $scope.shop_cate = result.data;
    });

    //食品的添加的绑定数据结构
    $scope.shop_edit = {
        shop_img:"../assets/admin/i/fff.png"
    };

    $shop_id=$stateParams.shopId;
    $scope.shop_id=$shop_id;

    //上传文件
    $scope.uploadImg = function()
    {
        if($scope.shop_edit.shop_img){
            Upload.upload({
                url:'../api/adminApi.php?action=shop_img',
                file:$scope.shop_edit.shop_img
            }).success(function(result){
                $scope.shop_edit.shop_img="../assets/uploads/"+result.data;
            })
        }
    };

    $http({
        method:'get',
        url:'../api/adminApi.php?action=shop_editId&shop_id='+$shop_id
    }).then(function(result){
        $scope.shop_edit=result.data;
    });

    //定义提交表单的方法
    $scope.saveForm = function()
    {
        if($scope.shop_edit.shop_name != "" && $scope.shop_edit.shop_price != ""  && $scope.shop_edit.shop_id != "")
        $http({
            method:'post',
            url:'../api/adminApi.php?action=shop_Edit&shop_id='+$shop_id,
            data:$scope.shop_edit,
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            transformRequest:function(data){
                return $.param(data);
            }
        }).then(function(result){
            if(result)
            {
                $location.path("ShopList");
            }else{
                $location.path("ShopEdit");
            }
        });
    }
})

//删除
food_admin.controller('ShopDelete',function($http,$scope,$stateParams,$location,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;
    $shop_id=$stateParams.shopId;

    if($shop_id){
        $http({
            method:'get',
            url:'../api/adminApi.php?action=shopDelete&shop_id='+$shop_id
        }).then(function(result){
            if(result.data)
            {
                $location.path("ShopList");
            }
        })
    }
});

