const Joi = require('Joi');

// Siginup validator function 
const siginupValidor = (data) => {
    //Sign up schema

    const schema = Joi.object({
        username: Joi.string().min(5).required().max(25),
        password: Joi.string().max(1024).required(),
        email: Joi.string().min(6).required().email()
    });

    return schema.validate(data)
}


// Siginin validator function 
const sigininValidor = (data) => {
    //Sign up schema
    const schema = Joi.object({
        password: Joi.string().max(1024).required(),
        email: Joi.string().min(6).required().email()
    });
    return schema.validate(data);
}

module.exports = {
    siginupValidor,
    sigininValidor
}