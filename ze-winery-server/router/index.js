const router = require('express').Router();
const test = require('./test');
const auth = require('./auth');
const company = require('./company');
const product = require('./product');
const client = require('./client')



router.use('/test', test);
router.use('/auth', auth);
router.use('/company', company);
router.use('/products', product);
router.use('/client', client);





module.exports = router;