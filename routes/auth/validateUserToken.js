const jwt = require('jsonwebtoken');
//this function allows us to validate the user access token
const validateUserToken = (req, res, next) => {
    if (req.header('auth-token')) {
        const token = req.header('auth-token');
        const userData = jwt.verify(token, process.env.SECRET_KEY);
        //Add the user data in  the resquest
        req.user = userData;
    }
    //Other wise nothing
    next();
}

module.exports = validateUserToken;