const { clientCompanyModel, clientModel } = require("../models");



const clientCreate = async (req,res,next) => {

const{name,address,city,companyType,companyId,isCompany,ownerId} = req.body;
let createdClient;

try {
    if(isCompany) {
     createdClient = await clientCompanyModel.create({name,address,city,companyType,companyId,isCompany,owner:ownerId});
    } else {
     createdClient = await clientModel.create({name,address,city,isCompany,owner:ownerId});
    }
    
    return res.status(201).json(createdClient) ;
} catch (error) {
    next(error)
}

}


const clientSearch = async (req,res,next) => {

    const {name,companyId} = req.query;

    try {
        //const foundClients = await clientModel.find({ name: name, owner: companyId });
        const foundClients = await clientModel.find({owner:companyId})
                            .where({name: { $regex: new RegExp(name, 'i') }})
        console.log(foundClients);
        return res.status(200).json(foundClients)
    } catch (error) {
        next(error)
    }
   
    
    }


module.exports = {
    clientCreate,
    clientSearch
}