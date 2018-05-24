food.controller('shopController',function($scope,$http,$location,page){
	$http({
		method:'get',
		url:'../api/homeApi.php?action=shop_cate'
	}).then(function(result){
		$scope.shop_cate=result.data;
	})


	$http({
		method:'get',
		url:'../api/homeApi.php?action=shop_count'
	}).then(function(result){
		$scope.totalItems=result.data.c;
	})

	$scope.currentPage=1;
    $scope.maxSize=5;
    $scope.bigTotalItems=6;
    $scope.food_check=$location.path()=="/foodList"?true:false;

	var url="../api/homeApi.php?action=shop_list";
	page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
		$scope.shop_list=result;
	})

	$scope.pageChanged=function(){
		page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
			$scope.shop_list=result;
		})
	}
})

food.controller('shopCateController',function($scope,$http,$location,page,$stateParams){
	$http({
		method:'get',
		url:'../api/homeApi.php?action=shop_cate'
	}).then(function(result){
		$scope.shop_cate=result.data;
	})

	$scate_id=$stateParams.scate_id;
	$scope.scate_id=$scate_id;

	$http({
		method:'get',
		url:'../api/homeApi.php?action=shop_count&scate_id='+$scate_id
	}).then(function(result){
		$scope.totalItems=result.data.c;
	})


	$scope.currentPage=1;
    $scope.maxSize=5;
    $scope.bigTotalItems=6;
    // $scope.food_check=$location.path()=="/foodList"?true:false;

	var url="../api/homeApi.php?action=shop_list&scate_id="+$scate_id;
	page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
		$scope.shop_list=result;
	})

	$scope.pageChanged=function(){
		page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
			$scope.shop_list=result;
		})
	}
})

// food.controller('shopConController',function($scope,$http,$stateParams){
// 	//获取店面id
// 	$shop_id=$stateParams.shop_id;
// 	$scope.shop_id=$shop_id;

// 	$http({
// 		method:'get',
// 		url:'../api/homeApi.php?action=shop_con&shop_id='+$shop_id
// 	}).then(function(result){
// 		$scope.shop_con=result.data;
// 	})
// })

food.controller('shopNameController',function($scope,$http,$stateParams,page){
	$http({
		method:'get',
		url:'../api/homeApi.php?action=shop_cate'
	}).then(function(result){
		$scope.shop_cate=result.data;
	})

	//获取关键字
	$shopName=$stateParams.shopName;
	$scope.shopName=$shopName;

	$http({
		method:'get',
		url:'../api/homeApi.php?action=shop_count&shopName='+$shopName
	}).then(function(result){
		$scope.totalItems=result.data.c;
	})

	$scope.currentPage=1;
	$scope.maxSize=5;
	$scope.bigTotalItems=6;

	var url="../api/homeApi.php?action=shop_list&shopName="+$shopName;

	page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
		$scope.shop_list=result;
	})

	$scope.pageChanged=function(){
		page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
			$scope.shop_list=result;
		})
	}

})