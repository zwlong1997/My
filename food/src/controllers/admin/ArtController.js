food_admin.controller('ArtList',function($window,$location,$scope,$http,page,checkAdmin,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;



	$http({
		method:'get',
		url:'../api/adminApi.php?action=art_count'
	}).then(function(result){
		$scope.totalItems=result.data.c;
	})

	//封装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 3;

    var url = '../api/adminApi.php?action=art_list';


    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
        $scope.art_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.art_list = result;
        });
    };

    // 删除数据
    $scope.deleteArt=function(art_id){
    	if(confirm("是否确认删除?")){
    		$location.path("ArtDelete/"+art_id);
    		return false;
    	}
    }

    $scope.check_box=function(){
        for(item in $scope.art_list)
        {
            if($scope.art_list[item].art_checked)
            {
                $scope.art_list[item].art_checked=false;
            }else{
                $scope.art_list[item].art_checked=true;
            }
        }
    }

    $scope.saveArtId=function(){
        var strId="";
        for(k in $scope.art_list)
        {
            if($scope.art_list[k].art_checked)
            {
                strId+=$scope.art_list[k].art_id+",";
            }
        }
        strId=strId.substr(0,strId.length-1);
        if(strId)
        {
            $http({
                method:'get',
                url:'../api/adminApi.php?action=artDelete_all&artid_arr='+strId
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

food_admin.controller("ArtName",function($scope,$stateParams,$http,page,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;


    //获取分类参数
    $ArtName = $stateParams.ArtName;
    $scope.artName = $ArtName;

    $http({
        method:'get',
        url:'../api/adminApi.php?action=art_count&artName='+$ArtName
    }).then(function(result){
        $scope.totalItems=result.data.c;
    })

    //封装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 3;

    var url = '../api/adminApi.php?action=art_list&artName='+$ArtName;


    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
        $scope.art_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.art_list = result;
        });
    };
})

// Add
food_admin.controller('ArtAdd',function($location,$scope,$http,Upload,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;

    //食品的添加的绑定数据结构
    $scope.art = {
        art_img:"../assets/admin/i/fff.png"
    };

    //上传文件
    $scope.uploadImg = function()
    {
        if($scope.art.art_img){
            Upload.upload({
                url:'../api/adminApi.php?action=art_img',
                file:$scope.art.art_img
            }).success(function(result){
                $scope.art.art_img="../assets/uploads/"+result.data;
            })
        }
    };

    //定义提交表单的方法
    $scope.saveForm = function()
    {
        if($scope.art.art_name != "" && $scope.art.art_price != "" )
        $http({
            method:'post',
            url:'../api/adminApi.php?action=art_add',
            data:$scope.art,
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            transformRequest:function(data){
                return $.param(data);
            }
        }).then(function(result){
            if(result)
            {
                $location.path("ArtList");
            }else{
                $location.path("ArtAdd");
            }
        });
    }
});


//编辑
food_admin.controller('ArtEdit',function($location,$scope,$http,Upload,$rootScope,$stateParams){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;


    //食品的添加的绑定数据结构
    $scope.art_edit = {
        art_img:"../assets/admin/i/fff.png"
    };

    $art_id=$stateParams.artId;
    $scope.art_id=$art_id;

    //上传文件
    $scope.uploadImg = function()
    {
        if($scope.art_edit.art_img){
            Upload.upload({
                url:'../api/adminApi.php?action=art_img',
                file:$scope.art_edit.art_img
            }).success(function(result){
                $scope.art_edit.art_img="../assets/uploads/"+result.data;
            })
        }
    };

    $http({
        method:'get',
        url:'../api/adminApi.php?action=art_editId&art_id='+$art_id
    }).then(function(result){
        $scope.art_edit=result.data;
    });

    //定义提交表单的方法
    $scope.saveForm = function()
    {
        if($scope.art_edit.art_name != "")
        $http({
            method:'post',
            url:'../api/adminApi.php?action=art_Edit&art_id='+$art_id,
            data:$scope.art_edit,
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            transformRequest:function(data){
                return $.param(data);
            }
        }).then(function(result){
            console.log(result);
            if(result)
            {
                $location.path("ArtList");
            }else{
                $location.path("ArtEdit");
            }
        });
    }
})


//删除
food_admin.controller('ArtDelete',function($http,$scope,$stateParams,$location,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;
    $art_id=$stateParams.artId;

    if($art_id){
        $http({
            method:'get',
            url:'../api/adminApi.php?action=ctcDelete&art_id='+$art_id
        }).then(function(result){
            if(result.data)
            {
                $location.path("ArtList");
            }
        })
    }
});

