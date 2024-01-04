const { productController } = require('../controllers');
const { auth } = require('../utils');

const router = require('express').Router();



router.post('/create', auth(), productController.createProduct)


module.exports = router;