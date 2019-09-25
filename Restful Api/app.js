const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser'); 
require('dotenv/config');

app.use(bodyparser.json());

//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/' , (req,res) => {
    res.send('We are on home');
});

app.get('/posts' , (req,res) => {
    res.send('We are on posts');
});


//connect to db
mongoose.connect(process.env.DB_CONNECTION, 
{ useNewUrlParser: true },
() => consolelog('connected to db!')
);



//how do we start listening to route
app.listen(3000);