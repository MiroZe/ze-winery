const { addController } = require('../controllers');
const { auth } = require('../utils');
const router = require('express').Router();


router.post('/create', auth(), addController.clientCreate)

module.exports = router;