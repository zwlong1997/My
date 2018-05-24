food.controller('newsController',function($scope,$http,$stateParams,page){
	//查询文章总数
	$http({
		method:"get",
		url:"../api/homeApi.php?action=news_count"
	}).then(function(result){
		$scope.totalItems=result.data.c;
	})

	//封装参数
	$scope.currentPage=1;
	$scope.bigTotalItems=6;
	$scope.maxSize=5;
	var url="../api/homeApi.php?action=news_list";
	page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
		$scope.new_list=result;
	})

	//当页面改变的时候要重新获取数据
	$scope.pageChanged=function(){
		page.getData(url,$scope.currentPage,$scope.bigTotalItems).then(function(result){
			$scope.new_list=result;
		})
	}

});

food.controller('newDetailController',function($scope,$http,$stateParams){
	$http({
		method:"get",
		url:"../api/homeApi.php?action=news_detail&art_id="+$stateParams.art_id
	}).then(function(result){
		$scope.new_detail=result.data;
	})
})
