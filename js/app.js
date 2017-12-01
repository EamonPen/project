angular.module('Project', ['ngRoute', 'RouteControllers']);
 
angular.module('Project').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/accounts/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    })
    .when('/todo', {
    	templateUrl: 'templates/todo.html',
    	controller: 'TodoController'
    })
    .when('/about', {
    	templateUrl: 'templates/about.html',
    	controller: 'AboutController'
    });
});