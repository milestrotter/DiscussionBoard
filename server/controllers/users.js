var mongoose = require('mongoose');
var User = mongoose.model('User'); 
var Discussion = mongoose.model('Discussion');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = {
	index: function(req, res){
		res.render('index', {title: 'Welcome Page'});
	},
	login: function(req, res){
		console.log(req.body);
		User.findOne({name: req.body.name}, function(err, user){
			if (!user) {
				User.create({name: req.body.name})
			}
			req.session.user = req.body;
			res.send(req.session.user);
		})
	},
	getLoggedIn: function(req, res){
		res.session = req.session;
		res.send(res.session.user);
	},

	getDiscussions: function(req, res){
		Discussion.find().populate('_user').exec(function(err, discussions){
			res.send(JSON.stringify(discussions));
		});
	},

	createDiscussion: function(req, res){
		User.findOne({name: req.body.name}, function(err, user){
			if (!user) {
				res.send(err);
			}else{
				var discussion = new Discussion(req.body);
				discussion._user = user._id;
				user.discussions.push(discussion);
				discussion.save(function(err){
					if (err) 
						console.log(err);
					else{
						user.save(function(err){
							if (err) 
								console.log(err);
							else{
								console.log(discussion);
								res.send(JSON.stringify(discussion));
							}
						});
                    }
                });
            }
        });
	}
};
		// User.find(function(err,  results){
		// 	if(err){
		// 		return console.error(err)
		// 	}
		// 	res.render('index', {title: 'Welcome Page', results: results });
		// })
// 	create: function(req, res){
// 		var a = new User(req.body);
// 		// console.log(a);
// 		a.save(function(err){
// 			if(err){
// 				res.send(JSON.stringify(err));
// 			}
// 			else{
// 				// res.send('success');
// 				res.redirect('/');
// 			}
// 		});
// 	},
// 	destroy: function(req, res){
// 		var task = req.body.id;
// 		// console.log(req.body);
// 		User.remove({ _id: task }, function(err){
// 			if(err){
// 				return console.error(err)
// 			}
// 			res.redirect('/');
// 		})
// 	}