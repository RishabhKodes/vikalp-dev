const mongoose = require('mongoose');

var db = mongoose.connection;

var userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    parentName: {
        type: String,
    },
    userName: {
        type: String,
    },
    password: {
        type: String,
    },
    dob: {
        type: String,
    },
    gender: {
        type: String,
    },
    address: {
        type: String,
    },
    session: {
        type: String,
    },
});

var User1 = module.exports = mongoose.model('students', userSchema);


module.exports.createUser = function(newUser, callback){
    newUser.save(callback);
}
