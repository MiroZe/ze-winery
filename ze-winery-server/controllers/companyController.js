const { companyModel } = require ('../models');




const createCompany = async (req,res,next) => {

const {companyName,companyType,companyId,exciseId,address,city,state,postalCode, userId} = req.body;
const companyData = {
    companyName,
    companyType,
    companyId : Number(companyId),
    exciseNumber : exciseId,
    address,
    city,
    state,
    postalCode,
    users:[userId]
}

try {
    const createdCompany = await companyModel.create(companyData);
    return res.status(200).json(createdCompany)
    
} catch (error) {
    next(error)
}


}

module.exports = {
    createCompany
}