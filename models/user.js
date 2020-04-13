var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/vikalp');

var db = mongoose.connection;

// User Schema
var UserSchema = mongoose.Schema({
	parent: {
		type: String,
		index: true
	},
	name: {
		type: String
	},
	estyear: {
		type: Number
	},
	address: {
		type: String
	},
	state: {
		type: String
	},
	district: {
		type: String
	},
	city: {
		type: String
	},
	postcode: {
		type: Number
	},
	brand: {
		type: String
	},
	email: {
		type: String
	},
	principal: {
		type: String
	},
	service: {
		type: String
	},
	cp1: {
		type: String
	},
	cn1: {
		type: Number
	},
	ct1: {
		type: String
	},
	cp2: {
		type: String
	},
	cn2: {
		type: Number
	},
	ct2: {
		type: String
	},
	class: {
		type: String
	},
	board: {
		type: String
	}
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}


module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
    	bcrypt.hash(newUser.password, salt, function(err, hash) {
   			newUser.password = hash;
   			newUser.save(callback);
    	});
	});
}