const bcrypt = require('bcrypt');


const User = require('../../models/user');
const signupValidator = require('../../helpers/formValidator').siginupValidor;


//TO sigin up content
const postSiginUpController = async (req, res) => {
    const { error } = signupValidator(req.body);
    //CHeck data 
    if (error) return res.status(401).send(error);

    //check if we don't have an existing user with data information
    const user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('The email has already been use');


    //Hash password
    const salt = await bcrypt.genSalt(10);
    console.log(req.body.password);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(hashedPassword);
    //Now sign up the user
    const userSave = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    });
    console.log(userSave);

    try {
        userSave.save()
            .then(() => {
                //Now redirect the user to the login page
                res.status(301).redirect('/auth/siginin');
            })
            .catch(err => console.log(err));

    } catch (err) {
        console.log(err);
    }
}

const getsiginUpController = (req, res) => {
    res.render('sign/signup_form');
}

module.exports = {
    postSiginUpController,
    getsiginUpController
}