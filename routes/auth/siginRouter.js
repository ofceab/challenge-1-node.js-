const router = require('express').Router();

//Import
const siginUpRouter = require('./signup');
const siginInRouter = require('./siginin');

//FOr the sigin up
router.use(siginUpRouter);

//FOr the sigin in
router.use(siginInRouter);


module.exports = router;