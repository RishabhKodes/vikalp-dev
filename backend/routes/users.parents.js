const router = require('express').Router();
let User = require('../models/users.models');


router.route('/').get((req,res)=>{
    User.find()
    .then(users=>{
        console.log("users="+users)
        res.send(users)})
    .catch(err=>res.status(400).json('Error: this is - '+err))
    
});

router.route('/add').post((req,res)=>{
    const {email, password, yob} = req.body;

    const newUser = new User({email,password,yob});

User.createUser(newUser, function(err, user){
    if(err) throw err;
    res.send(user);
  });

});


module.exports=router;
