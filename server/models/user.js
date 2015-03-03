var mongoose = require('mongoose');
mongoose.set('debug', true);

var Schema = mongoose.Schema;
var Discussion = require('./discussion');
var Post = require('./post');
var Comment = require('./comment');

var d = new Date();

var UserSchema = new mongoose.Schema({
	name: String,
	created_at: {type: Date, default: d},
	updated_at: {type: Date, default: d},
	discussions: [{type: Schema.Types.ObjectId, ref: 'Discussion'}],
	posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

mongoose.model('User', UserSchema);