var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('debug', true);

var User = require('./user');
var Post = require('./post');

var d = new Date();

var DiscussionSchema = new mongoose.Schema({
	category: String,
	title: String,
	description: String,
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	created_at: {type: Date, default: d},
	updated_at: {type: Date, default: d},
	posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
});

mongoose.model('Discussion', DiscussionSchema);