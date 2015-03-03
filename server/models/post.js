var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('debug', true);

var User = require('./user');
var Discussion = require('./discussion');
var Comment = require('./comment');

var d = new Date();

var PostSchema = new mongoose.Schema({
	content: String,
	_user: {type: Schema.ObjectId, ref: 'User'},
	_discussion: {type: Schema.ObjectId, ref: 'Discussion'},
	created_at: {type: Date, default: d},
	updated_at: {type: Date, default: d},
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

mongoose.model('Post', PostSchema);