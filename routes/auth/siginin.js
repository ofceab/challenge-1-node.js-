/** Sigin up a user **/
const { getSignInController, postSiginUpController } = require('../../controllers/auth/siginin');
const router = require('express').Router();

// for any authentification the link will start by the auth

//TO get a the form to sign in
router.get('/siginin', getSignInController);

//TO signup 
router.post('/siginin', postSiginUpController);

module.exports = router;
