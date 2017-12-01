angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Welcome To Angular Todo!";
    })
    .controller('RegisterController', function ($scope) {
    	$scope.registrationUser = {};
    	$scope.submitForm = function(){
    		if($scope.registrationForm.$valid){
    			var name=$scope.registrationUser.username = $scope.user.username;
    			var pass=$scope.registrationUser.password = $scope.user.password;

    		}
    		console.log(name, pass);
    	}
    })
    .controller('TodoController',function ($scope) {
    	$scope.todo = "Todo";
    })
    .controller('AboutController', function ($scope) {
    	$scope.title = "About";
    });