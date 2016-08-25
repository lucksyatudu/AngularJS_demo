angular.module('app', []);

angular.module('app',[]).controller('MainCtrl',function($scope){
	$scope.message="hello";
	$scope.logIn=function(username,password)
	{
		if(username==="abcd"&&password==="1234")
			$scope.welcomeMessage(username);
		else
			$scope.message="Error!!";
	}
	$scope.welcomeMessage=function(username)
	{
		$scope.message="Welcome "+username+"!!";
	}
});
