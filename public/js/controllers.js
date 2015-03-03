
myApp.controller('UsersController', function($scope, LoginService, UserFactory){
	$scope.users = [];
	$scope.logged_in_user = {};
	$scope.discussions = [];

	$scope.Login = function(user){
		UserFactory.login(user, function(data){
			$scope.logged_in_user.name = data;
			LoginService.setLoggedIn(user);
		});
	}
});

myApp.controller('DashboardController', function($scope, LoginService, UserFactory, DashboardFactory){
	$scope.users = [];
	$scope.categories = [
		{name: "HTML"},
		{name: "CSS"},
		{name: "Jquery"},
		{name: "Javascript"},
		{name: "CodeIgniter"},
		{name: "Rails"},
		{name: "MEAN"},
		{name: "Ruby"},
		{name: "Python"}
	];

	UserFactory.getUser(function(data){
		LoginService.setLoggedIn(data);
		$scope.logged_in_user = LoginService.getLoggedIn();
	});
	
	DashboardFactory.getDiscussions(function(data){
		$scope.discussions = data;
		console.log(data);
	});

	// $scope.addDiscussion = function(){
	// 	DashboardFactory.newDiscussion($scope.new_topic, $scope.logged_in_user, function(data){
	// 		$scope.discussions = data
	// 		console.log("From inside add Discussions - callback: ", data);
	// 	});
	// 	console.log("These are discussions inside the add discussion: ", $scope.discussions);
	// 	$scope.new_topic = {};
	// };
});

myApp.controller('TopicsController', function($scope, LoginService, UserFactory, DashboardFactory){
	// $scope.users = [];

	UserFactory.getUser(function(data){
		LoginService.setLoggedIn(data);
		$scope.logged_in_user = LoginService.getLoggedIn();
	});
	
	TopicFactory.getTopic(function(data){
		$scope.discussions = data;
	});

	$scope.addDiscussion = function(){
		DashboardFactory.newDiscussion($scope.new_topic, $scope.logged_in_user, function(data){
			$scope.discussions = data;
			console.log("From inside add Discussions - callback: ", data);
		});
		console.log("These are discussions inside the add discussion: ", $scope.discussions);
		$scope.new_topic = {};
	};
});