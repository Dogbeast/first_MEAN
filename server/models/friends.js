console.log('friends model');

var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
	first_name: {type: String, required:true},
	last_name: {type: String, required:true},
	birth_day: {type: Date, required:true}
});

mongoose.model('Friends', FriendSchema);