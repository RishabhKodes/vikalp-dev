var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
router.use(expressValidator());
var multer = require('multer');
var upload = multer({dest: './uploads'});
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.render('register',{title:'Register'});
});

// router.get('/login', function(req, res, next) {
//   res.render('login', {title:'Login'});
// });

// router.post('/login',
//   passport.authenticate('local',{failureRedirect:'/users/login', failureFlash: 'Invalid username or password'}),
//   function(req, res) {
//    req.flash('success', 'You are now logged in');
//    res.redirect('/');
// });



router.post('/register', upload.single('profileimage') ,function(req, res, next) {
  var parent = req.body.parententity;
  var name = req.body.name;
  var estyear = req.body.year;
  var address = req.body.address;
  var state = req.body.state;
  var district = req.body.district;
  var city = req.body.city;
  var postcode = req.body.postcode;
  var brand = req.body.brand;
  var email = req.body.email;
  var principal = req.body.principal;
  var service = req.body.service;
  var cp1 = req.body.person1;
  var cn1 = req.body.number1;
  var ct1 = req.body.type1;
  var cp2 = req.body.person2;
  var cn2 = req.body.number2;
  var ct2 = req.body.type2;
  var class2 = req.body.class;
  var board = req.body.boardtype;

  // Form Validator
  // req.checkBody('parent','Parent Entity field is required').notEmpty();
  // req.checkBody('name','Name field is required').notEmpty();
  // req.checkBody('address','Address field is required').notEmpty();
  // req.checkBody('state','State field is required').notEmpty();
  // req.checkBody('district','District field is Required').notEmpty();
  // req.checkBody('city','City field is Required').notEmpty();
  // req.checkBody('postcode','PostCode field is Required').notEmpty();
  // req.checkBody('brand','Brand field is Required').notEmpty();
  // req.checkBody('email','Email field is Required').isEmail();
  // req.checkBody('principal','Principal field is Required').notEmpty();
  // req.checkBody('service','Service field is Required').notEmpty();
  // req.checkBody('cp1','This field is Required').notEmpty();
  // req.checkBody('cn1','This field is Required').notEmpty();
  // req.checkBody('ct1','This field is Required').notEmpty();
  // req.checkBody('cp2','This field is Required').notEmpty();
  // req.checkBody('cn1','This field is Required').notEmpty();
  // req.checkBody('ct2',' field is Required').notEmpty();
  // req.checkBody('numclass','This field is Required').notEmpty();
  // req.checkBody('board','This field is Required').notEmpty();


  // Check Errors
  var errors = req.validationErrors();

  if(errors){
  	res.render('register', {
  		errors: errors
  	});
  } else{
  	var newUser = new User({
      parent_entity:parent,
      name: name,
      est_year:estyear,
      address:address,
      state:state,
      district:district,
      city:city,
      postcode:postcode,
      brand:brand,
      email:email,
      principal:principal,
      service:service,
      cp1:cp1,
      cn1:cn1,
      ct1:ct1,
      cp2:cp2,
      cn2:cn2,
      ct2:ct2,
      class2:class2,
      board:board
    });

    User.createUser(newUser, function(err, user){
      if(err) throw err;
      console.log(user);
    });

    req.flash('success', 'You are now registered.');

    res.location('/');
    res.redirect('/');
  }
});

module.exports = router;
