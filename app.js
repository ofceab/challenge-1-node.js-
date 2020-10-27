const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
//Import
const routerAuth = require('./routes/auth/siginRouter');
const validateUserToken = require('./routes/auth/validateUserToken');
const publicFolder = require('./helpers/path').public;

//Configure dotenv
dotenv.config();

//Creating of app
const app = express();

//Configure template engine
app.set('view engine', 'ejs');

app.use(express.static(publicFolder))
app.use(express.json());
app.use(validateUserToken);
//Authentification route 
app.use('/auth', routerAuth);

// // Post route
// app.use('/posts');

// //chat route
// app.use('/chats');


//Connection to the mongodb and Starting the server
mongoose.connect(process.env.MONGODB_LINK, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        //Starting the server now
        app.listen(3300, () => console.log('The server is running !'));
    })
    .catch(err => console.log(err));