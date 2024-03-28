const { clientCompanyModel, clientModel } = require("../models");



const clientCreate = async (req,res,next) => {

const{name,address,city,companyType,companyId,isCompany,ownerId} = req.body;
let createdClient;

try {
    if(isCompany) {
     createdClient = await clientCompanyModel.create({name,address,city,companyType,companyId,ownerId});
    } else {
        createdClient = await clientModel.create({name,address,city,ownerId});
    }
    
    return res.status(201).json(createdClient) ;
} catch (error) {
    next(error)
}


}


module.exports = {
    clientCreate
}