food_admin.factory('page',function($http,$q){
    /*
    $url 请求的地址
    $current 当前的页码
    $limit  每页显示多少条数据
    */
    function getData($url,$current,$limit)
    {
        //定义一个发送请求对象
        var deferred = $q.defer();
        var promise = deferred.promise;

        // 定义数据结构
        var data = {
            current:$current,
            limit:$limit
        };

        var url = $url;

        //设置post请求头
        var postCfg = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            transformRequest: function (data) {
                return $.param(data);  //将对象转化成 post数据结果中的数组对象
            }
        };

        $http.post(url, data, postCfg).success(function (response){
            deferred.resolve(response);   //设置请求的成功状态
        });

        return promise;
    }

    return {
        getData:getData
    }
});