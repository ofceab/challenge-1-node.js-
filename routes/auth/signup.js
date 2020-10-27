/** Sigin up a user **/
const { getsiginUpController, postSiginUpController } = require('../../controllers/auth/siginup');
const router = require('express').Router();

// for any authentification the link will start by the auth

//TO get the render or the form
router.get('/siginup', getsiginUpController);

//TO signup auth process
router.post('/siginup', postSiginUpController);

module.exports = router;
