function config($stateProvider,$urlRouterProvider,$httpProvider)
{
     //设置默认的首页
     $urlRouterProvider.otherwise("/home");

     //设置状态变化，加载不同的模板
     $stateProvider
     .state('home',{  //首页
         url:'/home',
         templateUrl:'../src/views/home/home.html'
     })
     .state('pinpai',{  //品牌故事
         url:'/pinpai/:artId',
         templateUrl:'../src/views/home/pinpai.html',
         controller:"mainController"
     })
     .state('about',{   //关于我们
         url:'/about',
         templateUrl:'../src/views/home/about.html',
         controller:"aboutController"
     })
     .state('newList',{  //新闻资讯列表页面
        url:"/newList",
        templateUrl:"../src/views/home/newList.html",
        controller:"newListController"

     })
     .state('newDetail',{  //新闻资讯的详细界面
         url:'/newDetail/:art_id',
         templateUrl:'../src/views/home/newDetail.html',
         controller:"newDetailController"
     })
     .state('foodList',{
         url:'/foodList',
         templateUrl:'../src/views/home/foodList.html',
         controller:"foodListController"
     })
     .state('foodCate',{
         url:'/foodCate/:fcate_id',
         templateUrl:"../src/views/home/foodList.html",
         controller:"foodCateController"
     })
     .state('foodName',{
         url:'/foodName/:foodName',
         templateUrl:'../src/views/home/foodList.html',
         controller:'foodNameController'
     })
     .state('Shop',{
         url:'/Shop',
         templateUrl:'../src/views/home/shop.html',
         controller:"shopController"
     })
     .state('shopCate',{
         url:'/shopCate/:scate_id',
         templateUrl:"../src/views/home/shop.html",
         controller:"shopCateController"
     })
     .state('shopName',{
         url:'/shopName/:shopName',
         templateUrl:'../src/views/home/shop.html',
         controller:'shopNameController'
     })
     ;
}

food.config(config).run();