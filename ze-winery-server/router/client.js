const { clientController } = require('../controllers');
const { auth } = require('../utils');
const router = require('express').Router();


router.post('/create', auth(), clientController.clientCreate);
router.get('/search', auth(), clientController.clientSearch);

module.exports = router;