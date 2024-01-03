const router = require('express').Router();
const test = require('./test');
const auth = require('./auth');
const company = require('./company')


router.use('/test', test);
router.use('/auth', auth);
router.use('/company', company);




module.exports = router;