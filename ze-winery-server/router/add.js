const router = require('express').Router();
const {addController} = require('../controllers')



router.post('/create',addController.createAdd )




module.exports = router;