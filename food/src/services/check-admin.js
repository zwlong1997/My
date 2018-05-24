food_admin.factory('checkAdmin',function($cookieStore,$location){
	var service={};

	service.isLogin=function(){
		if($location.url()!="/login")
		{
			if(!$cookieStore.get('admin_name'))
			{
				$location.path("login");
			}
		}
	}
	return service;
});