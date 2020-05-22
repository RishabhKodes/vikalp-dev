const router = require('express').Router();
let User = require('../models/users.parents.models');
let User1= require('../models/users.students.models')


//route for adding parent data
router.route('/add-parents').post((req,res)=>{
    const {email, password, yob} = req.body;

    const newUser = new User({email,password,yob});

User.createUser(newUser, function(err, user){
    if(err) throw err;
    res.send(user);
  });

});


//route for adding student data
router.route('/add-students').post((req,res)=>{
    const {firstName,lastName,parentName,userName,password,dob,gender,address,session} = req.body;

    const newUser = new User1({firstName,lastName,parentName,userName,password,dob,gender,address,session});

User1.createUser(newUser, function(err, user){
    if(err) throw err;
    res.send(user);
  });

});


module.exports=router;
