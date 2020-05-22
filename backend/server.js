require('./models/users.parents.models');
require('./models/users.students.models');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./routes/users');
const app = express();
var db = mongoose.connection;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use('/users', userRoute);

// Deploying on a PORT
const PORT = process.env.PORT || 8000 ;

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});
