function config($stateProvider,$urlRouterProvider,$httpProvider)
{
     //设置默认的首页
     $urlRouterProvider.otherwise("/index");

     //设置状态变化，加载不同的模板
     $stateProvider
     .state('index',{  //首页
         url:'/index',
         templateUrl:'../src/views/admin/index.html',
         controller:'MainController'
     })
     .state('login',{  //登录
         url:'/login',
         templateUrl:'../src/views/admin/login.html',
         controller:'loginController'
     })
     .state('logout',{  //退出
         url:'/logout',
         templateUrl:'../src/views/admin/login.html',
         controller:'logoutController'
     })
     .state('FcateList',{  
         url:'/FcateList',
         templateUrl:'../src/views/admin/FcateList.html',
         controller:'FcateList'
     })
     .state('FcateName',{  
         url:'/FcateName/:FcateName',
         templateUrl:'../src/views/admin/FcateList.html',
         controller:'FcateName'
     })
     .state('FcateAdd',{  
         url:'/FcateAdd',
         templateUrl:'../src/views/admin/FcateAdd.html',
         controller:'FcateAdd'
     })
     .state('FcateEdit',{  
         url:'/FcateEdit/:fcateId',
         templateUrl:'../src/views/admin/FcateEdit.html',
         controller:'FcateEdit'
     })
     .state('FcateDelete',{
         url:'/FcateDelete/:fcateId',
         controller:'FcateDelete'
     })
     .state('FoodList',{
         url:'/FoodList',
         templateUrl:'../src/views/admin/FoodList.html',
         controller:'FoodList'
     })
     .state('FoodCate',{
         url:'/FoodCate/:FcateId',
         templateUrl:'../src/views/admin/FoodList.html',
         controller:'FoodCate'
     })
     .state('FoodName',{
         url:'/FoodName/:FoodName',
         templateUrl:'../src/views/admin/FoodList.html',
         controller:'FoodName'
     })
     .state('FoodAdd',{
         url:'/FoodAdd',
         templateUrl:'../src/views/admin/FoodAdd.html',
         controller:"FoodAdd"
     })
     .state('FoodEdit',{  
         url:'/FoodEdit/:foodId',
         templateUrl:'../src/views/admin/FoodEdit.html',
         controller:'FoodEdit'
     })
     .state('FoodDelete',{
         url:'/FoodDelete/:foodId',
         controller:"FoodDelete"
     })
     .state('Admin',{
         url:'/Admin',
         templateUrl:'../src/views/admin/AdminList.html',
         controller:"AdminController"
     })
     .state('AdminName',{
         url:'/AdminName/:adminName',
         templateUrl:'../src/views/admin/AdminList.html',
         controller:"AdminName"
     })
     .state('DeleteAdmin',{
         url:'/DeleteAdmin/:adminId',
         templateUrl:'../src/views/admin/AdminList.html',
         controller:"DeleteAdmin"
     })
     .state('AdminAdd',{
         url:'/AdminAdd',
         templateUrl:'../src/views/admin/AdminAdd.html',
         controller:"AdminAdd"
     })
     .state('AdminEdit',{
         url:'/AdminEdit/:adminId',
         templateUrl:'../src/views/admin/AdminEdit.html',
         controller:"AdminEdit"
     })
     .state('ScateList',{
         url:'/ScateList',
         templateUrl:'../src/views/admin/ScateList.html',
         controller:"ScateList"
     })
     .state('ScateName',{
         url:'/ScateName/:ScateName',
         templateUrl:'../src/views/admin/ScateList.html',
         controller:"ScateName"
     })
     .state('ScateAdd',{  
         url:'/ScateAdd',
         templateUrl:'../src/views/admin/ScateAdd.html',
         controller:'ScateAdd'
     })
     .state('ScateEdit',{  
         url:'/ScateEdit/:scateId',
         templateUrl:'../src/views/admin/ScateEdit.html',
         controller:'ScateEdit'
     })
     .state('ScateDelete',{
         url:'/ScateDelete/:scateId',
         controller:'ScateDelete'
     })
     .state('ShopList',{
         url:'/ShopList',
         templateUrl:'../src/views/admin/ShopList.html',
         controller:'ShopList'
     })
     .state('ShopCate',{
         url:'/ShopCate/:ScateId',
         templateUrl:'../src/views/admin/ShopList.html',
         controller:'ShopCate'
     })
     .state('ShopName',{
         url:'/ShopName/:ShopName',
         templateUrl:'../src/views/admin/ShopList.html',
         controller:'ShopName'
     })
     .state('ShopAdd',{
         url:'/ShopAdd',
         templateUrl:'../src/views/admin/ShopAdd.html',
         controller:"ShopAdd"
     })
     .state('ShopEdit',{  
         url:'/ShopEdit/:shopId',
         templateUrl:'../src/views/admin/ShopEdit.html',
         controller:'ShopEdit'
     })
     .state('ShopDelete',{
         url:'/ShopDelete/:shopId',
         controller:"ShopDelete"
     })
     .state('ArtList',{
         url:'/ArtList',
         templateUrl:'../src/views/admin/ArtList.html',
         controller:'ArtList'
     })
     .state('ArtName',{
         url:'/ArtName/:ArtName',
         templateUrl:'../src/views/admin/ArtList.html',
         controller:'ArtName'
     })
     .state('ArtAdd',{
         url:'/ArtAdd',
         templateUrl:'../src/views/admin/ArtAdd.html',
         controller:"ArtAdd"
     })
     .state('ArtEdit',{  
         url:'/ArtEdit/:artId',
         templateUrl:'../src/views/admin/ArtEdit.html',
         controller:'ArtEdit'
     })
     .state('ArtDelete',{
         url:'/ArtDelete/:artId',
         controller:"ArtDelete"
     })
     .state('CtcList',{
         url:'/CtcList',
         templateUrl:'../src/views/admin/CtcList.html',
         controller:'CtcList'
     })
     .state('CtcName',{
         url:'/CtcName/:CtcName',
         templateUrl:'../src/views/admin/CtcList.html',
         controller:'CtcName'
     })
     .state('CtcAdd',{
         url:'/CtcAdd',
         templateUrl:'../src/views/admin/CtcAdd.html',
         controller:"CtcAdd"
     })
     .state('CtcEdit',{  
         url:'/CtcEdit/:ctcId',
         templateUrl:'../src/views/admin/CtcEdit.html',
         controller:'CtcEdit'
     })
     .state('CtcDelete',{
         url:'/CtcDelete/:ctcId',
         controller:"CtcDelete"
     })
     .state('NoticeList',{
         url:'/NoticeList',
         templateUrl:'../src/views/admin/NoticeList.html',
         controller:'NoticeList'
     })
     .state('NoticeName',{
         url:'/NoticeName/:NoticeName',
         templateUrl:'../src/views/admin/NoticeList.html',
         controller:'NoticeName'
     })
     .state('NoticeAdd',{
         url:'/NoticeAdd',
         templateUrl:'../src/views/admin/NoticeAdd.html',
         controller:"NoticeAdd"
     })
     .state('NoticeEdit',{  
         url:'/NoticeEdit/:noticeId',
         templateUrl:'../src/views/admin/NoticeEdit.html',
         controller:'NoticeEdit'
     })
     .state('NoticeDelete',{
         url:'/NoticeDelete/:noticeId',
         controller:"NoticeDelete"
     });
}

food_admin.config(config).run();