const mongoose = require('mongoose');


//Defining a User model
const schemaUser = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 5,
        max: 25,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        max: 1500
    }
});


module.exports = mongoose.model('User', schemaUser);