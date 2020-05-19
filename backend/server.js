require('./models/users.models');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./routes/users.parents');
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
const PORT = process.env.PORT || 5000 ;

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});
