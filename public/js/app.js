var myApp = angular.module('myApp', ['ngRoute'])
			.service('LoginService', function(){
				var logged_in_user = {};
				return {
					setLoggedIn: function(user){
						logged_in_user = user;
					},
					getLoggedIn: function(){
						return logged_in_user;
					}
				}
			});

myApp.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			templateUrl: '/js/partials/index.html',
			controller: "UsersController"
		})
		.when('/dashboard',
		{
			templateUrl: 'js/partials/dashboard.html',
			controller: "DashboardController"
		})
		.when('/topic/:id',
		{
			templateUrl: 'js/partials/topic.html',
			controller: "TopicsController"
		})
		.when('/user/:id',
		{
			templateUrl: 'js/partials/user.html',
			controller: "TopicController"
		})
		.otherwise({ redirectTo: '/' });
});