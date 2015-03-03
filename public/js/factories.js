
myApp.factory('UserFactory', function($http){
	var users = [];
	var logged_in_user = {};
	var factory= {};

	factory.login = function(user, callback){
		$http.post('/login', user).success(function(output){
			logged_in_user = output;
			callback(logged_in_user);
		});
		return logged_in_user
	};
	factory.getUser = function(callback){
		$http.get('/user/show').success(function(output){
			logged_in_user = output;
			callback(logged_in_user);
		})
	};
	return factory;
});

myApp.factory('DashboardFactory', function($http){
	var topics = [];
	var factory= {};

	factory.getDiscussions = function(callback){
		$http.get('/dashboard/show').success(function(data){
			topics = data;
			callback(topics);
			console.log("From get Discussions: ", topics);
		});
		return topics;
	};
	factory.newDiscussion = function(topic, user, callback){
		console.log(topic);
		var discussion_info = {
			category: topic.category,
			title: topic.title,
			description: topic.description,
			_user: {name: user.name},
			posts: []
		};
		topic.name = user.name;
		$http.post('/discussion/create', topic).success(function(output){
			console.log(output);
			callback(topic);
		});
		topics.push(discussion_info);
		return topics;
	};
	return factory;
});

myApp.factory('TopicFactory', function($http){
	var topic = {};
	var posts = [];
	var comments = [];
	var factory= {};

	factory.getDiscussions = function(callback){
		$http.get('/posts/show').success(function(data){
			posts = data;
			callback(topics);
			console.log("From get Discussions: ", topics);
		});
		return topics;
	};
	factory.newDiscussion = function(topic, user, callback){
		console.log(topic);
		var discussion_info = {
			category: topic.category,
			title: topic.title,
			description: topic.description,
			_user: {name: user.name},
			posts: []
		};
		topic.name = user.name;
		$http.post('/discussion/create', topic).success(function(output){
			console.log(output);
			callback(topic);
		});
		topics.push(discussion_info);
		return topics;
	};
	return factory;
});