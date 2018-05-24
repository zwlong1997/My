food.controller('newListController', function ($scope, $stateParams, $http, page){

    //查询文章总数
    $http({
        method:'get',
        url:'../api/homeApi.php?action=news_count'
    }).then(function(count){
        $scope.totalItems = count.data.c;
    });

    //封装参数
    $scope.currentPage = 1;  //当前页
    $scope.bigTotalItems = 6;  //每页显示多少条
    $scope.maxSize = 5;  //中间的页码数
    var url = '../api/homeApi.php?action=news_list';
    page.getData(url, $scope.currentPage, $scope.bigTotalItems).then(function (result){
        $scope.news_list = result;
    });

    //当页面改变的时候要重新获取数据
    $scope.pageChanged = function () {
        page.getData(url, $scope.currentPage, $scope.bigTotalItems).then(function (result) {
            $scope.news_list = result;
        });
    }

});


food.controller('newDetailController',function($scope,$stateParams,$http){
    
    //获取当前文章数据
    $http({
        method:'get',
        url:"../api/homeApi.php?action=news_detail&art_id="+$stateParams.art_id
    }).then(function(result){
        $scope.new_detail = result.data;
    });
});