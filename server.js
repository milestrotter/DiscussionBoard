var express = require('express'); 					// Basic framework install
var bodyParser = require('body-parser'); 			// Body parser for posts
var cookieParser = require('cookie-parser');
var session = require('express-session');
var path = require('path'); 						// Path for easier route concatonation
var app = express();

///////////// Configure Views /////////////

var config = require('./config/config.js');					// Connects db
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'ninjagold', resave: false, saveUninitialized: true}));
app.use(express.static(path.join(__dirname, "./public")));  // Specifying the static file pathway
// console.log("This is the dirname: ", __dirname)			// Enable to check the __dirname
app.set('views', path.join(__dirname, "./public/js/views"));	// Default views pathway
app.set('view engine', 'ejs');	// Setting ejs to default view engine (any file ending in .ejs)

///////////// Database Connetions /////////////

var mongoose = require('./config/mongoose'); 			// Mongoose for database interfacing

///////////// Basic Server Connection /////////////

var server = app.listen(8000, function(){
	console.log('\n ***************************************************');
    console.log('*****                                           *****');
    console.log('*****   Express server listening on port 8000   *****');
    console.log('*****                                           *****');
    console.log(' ***************************************************\n');
});

///////////// Socket.io Connection /////////////

var io = require('socket.io')(server); 					//Pass in listening server

///////////// Routes and Database Connetions /////////////

var routes = require('./config/routes')(app, io);		// Routes for all controllers



