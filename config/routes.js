var users = require('../server/controllers/users.js');
var mongoose = require('mongoose');

module.exports = function Routes(app, io){

	//Login page
	app.get('/', 							function(req, res){ users.index(req, res)});
	app.post('/login', 						function(req, res){ users.login(req, res)});

	//If refreshed, this will grab user name
	app.get('/user/show', 					function(req, res){ users.getLoggedIn(req, res)});


	//Dashboard page
	app.get('/dashboard/show',				function(req, res){ users.getDiscussions(req, res)});
	app.post('/discussion/create',			function(req, res){ users.createDiscussion(req, res)});


	io.sockets.on('connection', function(socket){
		console.log("Socket Connection Enabled");
		
		socket.on('client_ready', function(req){
			socket.emit('response', {msg: "hello world"});

		})
	});
};


///////////// Socket Response Options /////////////

///////// emiting to the requester /////////
	// socket.emit('response', {msg: "hello world"});

///////// broadcast to everyone except the requester /////////
	// socket.broadcast.emit('global_event', { msg: 'hello' });

///////// broadcasting to everyone /////////
	// io.emit('event', {msg: 'hi' });