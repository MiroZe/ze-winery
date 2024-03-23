const { addController } = require('../controllers');

const router = require('express').Router();


router.post('/create', addController.clientCreate)

module.exports = router;