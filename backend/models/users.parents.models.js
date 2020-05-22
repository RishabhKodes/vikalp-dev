const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/vikalp', { useNewUrlParser: true ,useUnifiedTopology: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

var db = mongoose.connection;

var userSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    yob:{
        type: Number,
    },
    password: {
        type: String,
    }
});

var User = module.exports = mongoose.model('parents', userSchema);


module.exports.createUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
    	bcrypt.hash(newUser.password, salt, function(err, hash) {
   			newUser.password = hash;
   			newUser.save(callback);
    	});
	});
}
