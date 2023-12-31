const { companyModel, productModel } = require('../models');




const createCompany = async (req, res, next) => {

    const { companyName, companyType, companyId, exciseId, address, city, state, postalCode, userId } = req.body;
    const companyData = {
        companyName,
        companyType,
        companyId: Number(companyId),
        exciseNumber: exciseId,
        address,
        city,
        state,
        postalCode,
        users: [userId]
    }

    try {
        const createdCompany = await companyModel.create(companyData);
        return res.status(201).json(createdCompany)

    } catch (error) {
        next(error)
    }


};


const getMyCompanies = async(req,res,next) => {

    const userId = req.query['userId']
    try {
        const companies = await companyModel.find({users : {$in: userId}})
        return res.status(200).json(companies)
        
    } catch (error) {
        next(error)
    }

}

const getCompanyById = async (req,res,next) => {
    const {companyId} = req.params;
    try {
        const company = await companyModel.findById({_id: companyId});
      

        if(company) {
            return res.status(200).json(company)
        } else {
            throw {error: 'Company not found'}
        }
    } catch (error) {
        next(error)
    }

}

const getCompanyProducts = async(req,res,next) => {

    const {companyId} = req.params;
    try {
       const products = await productModel.find({owner:companyId})
        return res.status(200).json(products)
        
    } catch (error) {
        next(error)
    }

}

module.exports = {
    createCompany,
    getMyCompanies,
    getCompanyById,
    getCompanyProducts
}