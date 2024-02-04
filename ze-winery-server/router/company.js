
const router = require('express').Router();
const { auth } = require('../utils');
const {companyController,declarationController} = require('../controllers')




router.post('/create', auth(), companyController.createCompany);
router.get('/my-companies', auth(), companyController.getMyCompanies);
router.get('/my-companies/:companyId', auth(), companyController.getCompanyById);
router.get('/my-companies/:companyId/products', auth(), companyController.getCompanyProducts);
router.get('/declarations', auth(), declarationController.getAllDeclarations);
router.post('/declarations', auth(), declarationController.createDeclaration);



module.exports = router