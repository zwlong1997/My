food_admin.controller('CtcList',function($window,$location,$scope,$http,page,checkAdmin,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;

	$http({
		method:'get',
		url:'../api/adminApi.php?action=ctc_count'
	}).then(function(result){
		$scope.totalItems=result.data.c;
	})

	//封装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 3;

    var url = '../api/adminApi.php?action=ctc_list';


    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
        $scope.ctc_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.ctc_list = result;
        });
    };

    // 删除数据
    $scope.deleteCtc=function(ctc_id){
    	if(confirm("是否确认删除?")){
    		$location.path("CtcDelete/"+ctc_id);
    		return false;
    	}
    }

    $scope.check_box=function(){
        for(item in $scope.ctc_list)
        {
            if($scope.ctc_list[item].ctc_checked)
            {
                $scope.ctc_list[item].ctc_checked=false;
            }else{
                $scope.ctc_list[item].ctc_checked=true;
            }
        }
    }

    $scope.saveCtcId=function(){
        var strId="";
        for(k in $scope.ctc_list)
        {
            if($scope.ctc_list[k].ctc_checked)
            {
                strId+=$scope.ctc_list[k].contact_id+",";
            }
        }
        strId=strId.substr(0,strId.length-1);
        if(strId)
        {
            $http({
                method:'get',
                url:'../api/adminApi.php?action=ctcDelete_all&ctcid_arr='+strId
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

food_admin.controller("CtcName",function($scope,$stateParams,$http,page,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;


    //获取分类参数
    $CtcName = $stateParams.CtcName;
    $scope.ctcName = $CtcName;

    $http({
        method:'get',
        url:'../api/adminApi.php?action=ctc_count&ctcName='+$CtcName
    }).then(function(result){
        $scope.totalItems=result.data.c;
    })

    //封装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 3;

    var url = '../api/adminApi.php?action=ctc_list&ctcName='+$CtcName;


    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
        $scope.ctc_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.ctc_list = result;
        });
    };
})

// Add
food_admin.controller('CtcAdd',function($location,$scope,$http,Upload,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;

    //食品的添加的绑定数据结构
    $scope.ctc = {
        ctc_img:"../assets/admin/i/fff.png"
    };

    //上传文件
    $scope.uploadImg = function()
    {
        if($scope.ctc.ctc_img){
            Upload.upload({
                url:'../api/adminApi.php?action=ctc_img',
                file:$scope.ctc.ctc_img
            }).success(function(result){
                $scope.ctc.ctc_img="../assets/uploads/"+result.data;
            })
        }
    };

    //定义提交表单的方法
    $scope.saveForm = function()
    {
        if($scope.ctc.ctc_name != "" && $scope.ctc.ctc_price != "" )
        $http({
            method:'post',
            url:'../api/adminApi.php?action=ctc_add',
            data:$scope.ctc,
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            transformRequest:function(data){
                return $.param(data);
            }
        }).then(function(result){
            if(result)
            {
                $location.path("CtcList");
            }else{
                $location.path("CtcAdd");
            }
        });
    }
});



//编辑
food_admin.controller('CtcEdit',function($location,$scope,$http,Upload,$rootScope,$stateParams){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;


    //食品的添加的绑定数据结构
    $scope.ctc_edit = {
        contact_img:"../assets/admin/i/fff.png"
    };

    $ctc_id=$stateParams.ctcId;
    $scope.ctc_id=$ctc_id;

    //上传文件
    $scope.uploadImg = function()
    {
        if($scope.ctc_edit.contact_img){
            Upload.upload({
                url:'../api/adminApi.php?action=contact_img',
                file:$scope.ctc_edit.contact_img
            }).success(function(result){
                $scope.ctc_edit.contact_img="../assets/uploads/"+result.data;
            })
        }
    };

    $http({
        method:'get',
        url:'../api/adminApi.php?action=ctc_editId&ctc_id='+$ctc_id
    }).then(function(result){
        $scope.ctc_edit=result.data;
    });

    //定义提交表单的方法
    $scope.saveForm = function()
    {
        if($scope.ctc_edit.contact_name != "")
        $http({
            method:'post',
            url:'../api/adminApi.php?action=ctc_Edit&ctc_id='+$ctc_id,
            data:$scope.ctc_edit,
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            transformRequest:function(data){
                return $.param(data);
            }
        }).then(function(result){
            if(result)
            {
                $location.path("CtcList");
            }else{
                $location.path("CtcEdit");
            }
        });
    }
})

//删除
food_admin.controller('CtcDelete',function($http,$scope,$stateParams,$location,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;
    $ctc_id=$stateParams.ctcId;

    if($ctc_id){
        $http({
            method:'get',
            url:'../api/adminApi.php?action=ctcDelete&ctc_id='+$ctc_id
        }).then(function(result){
            if(result.data)
            {
                $location.path("CtcList");
            }
        })
    }
});
