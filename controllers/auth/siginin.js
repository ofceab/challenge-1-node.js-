const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../../models/user');
const signinValidator = require('../../helpers/formValidator').sigininValidor;

//TO auth the user
const postSiginUpController = async (req, res) => {
    const { error } = signinValidator(req.body);
    //check data
    if (error) return res.status(401).send(error);

    //Find the user
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('User not found');

    //Verify the password
    const comparasionBoolVal = await bcrypt.compare(req.body.password, user.password);
    if (!comparasionBoolVal) return res.status(401).send('Email or password is not correct');

    //open a session for the user
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
    //Save the token in the header of the user
    res.header('auth-token', token);
    res.send('logged in !!!');
}


//TO render the Ui
const getSignInController = (req, res) => {
    res.render('sign/login_form');
}

module.exports = {
    postSiginUpController,
    getSignInController
};