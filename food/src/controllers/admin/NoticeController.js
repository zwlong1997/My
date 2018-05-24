food_admin.controller('NoticeList',function($window,$location,$scope,$http,page,checkAdmin,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;

	$http({
		method:'get',
		url:'../api/adminApi.php?action=notice_count'
	}).then(function(result){
		$scope.totalItems=result.data.c;
	})

	//封装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 3;

    var url = '../api/adminApi.php?action=notice_list';


    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
        $scope.notice_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.notice_list = result;
        });
    };

    // 删除数据
    $scope.deleteNotice=function(notice_id){
        if(confirm("是否确认删除?")){
            $location.path("NoticeDelete/"+notice_id);
            return false;
        }
    }

    $scope.check_box=function(){
        for(item in $scope.notice_list)
        {
            if($scope.notice_list[item].notice_checked)
            {
                $scope.notice_list[item].notice_checked=false;
            }else{
                $scope.notice_list[item].notice_checked=true;
            }
        }
    }

    $scope.saveNoticeId=function(){
        var strId="";
        for(k in $scope.notice_list)
        {
            if($scope.notice_list[k].notice_checked)
            {
                strId+=$scope.notice_list[k].notice_id+",";
            }
        }
        strId=strId.substr(0,strId.length-1);
        if(strId)
        {
            $http({
                method:'get',
                url:'../api/adminApi.php?action=noticeDelete_all&noticeid_arr='+strId
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

food_admin.controller("NoticeName",function($scope,$stateParams,$http,page,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;


    //获取分类参数
    $NoticeName = $stateParams.NoticeName;
    $scope.noticeName = $NoticeName;

    $http({
        method:'get',
        url:'../api/adminApi.php?action=notice_count&noticeName='+$NoticeName
    }).then(function(result){
        $scope.totalItems=result.data.c;
    })

    //封装参数
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.bigTotalItems = 3;

    var url = '../api/adminApi.php?action=notice_list&noticeName='+$NoticeName;


    page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
        $scope.notice_list = result;
    });

    $scope.pageChanged = function()
    {
        page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
            $scope.notice_list = result;
        });
    };
})


// Add
food_admin.controller('NoticeAdd',function($location,$scope,$http,Upload,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;

    //当input改变的时候  触发一个方法
    $scope.changeName = function(admin_name){
        if(admin_name != "")
        {
            $http({
                method:'get',
                url:'../api/adminApi.php?action=notice_check&admin_name='+admin_name
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
        if($scope.notice.notice_name != "" && $scope.notice.notice_content != "" )
        $http({
            method:'post',
            url:'../api/adminApi.php?action=notice_add',
            data:$scope.notice,
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            transformRequest:function(data){
                return $.param(data);
            }
        }).then(function(result){
            if(result)
            {
                $location.path("NoticeList");
            }else{
                $location.path("NoticeAdd");
            }
        });
    }
});

//编辑
food_admin.controller('NoticeEdit',function($location,$scope,$http,Upload,$rootScope,$stateParams){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;


    //食品的添加的绑定数据结构
    $scope.notice_edit = {
        notice_img:"../assets/admin/i/fff.png"
    };

    $notice_id=$stateParams.noticeId;
    $scope.notice_id=$notice_id;


    $http({
        method:'get',
        url:'../api/adminApi.php?action=notice_editId&notice_id='+$notice_id
    }).then(function(result){
        $scope.notice_edit=result.data;
    });

    //定义提交表单的方法
    $scope.saveForm = function()
    {
        if($scope.notice_edit.notice_name != "")
        $http({
            method:'post',
            url:'../api/adminApi.php?action=notice_Edit&notice_id='+$notice_id,
            data:$scope.notice_edit,
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            transformRequest:function(data){
                return $.param(data);
            }
        }).then(function(result){
            if(result)
            {
                $location.path("NoticeList");
            }else{
                $location.path("NoticeEdit");
            }
        });
    }
})

//删除
food_admin.controller('NoticeDelete',function($http,$scope,$stateParams,$location,$rootScope){
    $rootScope.displayMenu = true;
    $rootScope.displayHeader = true;
    $notice_id=$stateParams.noticeId;

    if($notice_id){
        $http({
            method:'get',
            url:'../api/adminApi.php?action=noticeDelete&notice_id='+$notice_id
        }).then(function(result){
            if(result.data)
            {
                $location.path("NoticeList");
            }
        })
    }
});
