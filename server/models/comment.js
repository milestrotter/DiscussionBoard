var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('debug', true);

var User = require('./user');
var Post = require('./post');

var d = new Date();

var CommentSchema = new mongoose.Schema({
	content: String,
	_user: {type: Schema.ObjectId, ref: 'User'},
	_post: {type: Schema.ObjectId, ref: 'Post'},
	created_at: {type: Date, default: d},
	updated_at: {type: Date, default: d}
});

mongoose.model('Comment', CommentSchema);