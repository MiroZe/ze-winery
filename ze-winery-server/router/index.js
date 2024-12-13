const router = require('express').Router();
const test = require('./test');
const auth = require('./auth');
const company = require('./company');
const product = require('./product');
const client = require('./client')
const add = require('./add')



router.use('/test', test);
router.use('/auth', auth);
router.use('/company', company);
router.use('/products', product);
router.use('/client', client);
router.use('/add', add);





module.exports = router;