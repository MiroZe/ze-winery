const { companyModel, productModel, declarationModel } = require('../models');
const {Builder} = require('xml2js');
const removeUnnecessaryFields = require('../utils/removeFromXML');
const { rawListeners } = require('../models/TokenBlacklistModel');
const capitalizeKeys = require('../utils/capitalizeKeys');





const createCompany = async (req, res, next) => {

    
    const { companyName, companyType, companyId, exciseId, address, city, state, postalCode, userId,owner,declarer } = req.body;
   
    const companyData = {
        companyName,
        companyType,
        companyId: Number(companyId),
        exciseNumber: exciseId,
        address,
        city,
        state,
        postalCode,
        users: [userId],
        owner,
        declarer
    }

    try {
        const createdCompany = await companyModel.create(companyData);
        return res.status(201).json(createdCompany)

    } catch (error) {
     
        next(error)
    }


};


const getMyCompanies = async(req,res,next) => {

    const userId = req.query['userId'];
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

const getAllCompanyDeclarations = async (req,res,next) => {
    const {companyId} = req.params;

    try {
       const declarations =  await declarationModel.find ({ownerCompanyId:companyId});
       return res.status(200).json(declarations)
        
    } catch (error) {
        next(error)
    }

}
const getCompanyDeclarationById = async (req,res,next) => {
    const {declarationId} = req.params;
    

    try {
       const declaration =  await declarationModel.findById ({_id:declarationId}).populate('exciseGoods.exciseGood').exec();
      
       return res.status(200).json(declaration)
        
    } catch (error) {
        next(error)
    }

}

const getCompanyXMLDeclarationById = async (req,res,next) => {
    const {declarationId} = req.params;
    

    try {
       const declaration =  await declarationModel.findById ({_id:declarationId}).populate('exciseGoods.exciseGood').exec();
       const builder = new Builder({
        rootName:'Declaration'
       });

       const declarationObj = declaration.toObject();
       const raw = removeUnnecessaryFields(declarationObj)
       const rawU = capitalizeKeys(raw)
       const xml = builder.buildObject(rawU);
     
       
    
       res.attachment('declaration.xml');
       res.type('xml');
       res.send(xml);
    } catch (error) {
        next(error)
    }

}
const deleteCompanyDeclarationById = async (req,res,next) => {
    const {declarationId} = req.params;
    

    try {
       await declarationModel.findByIdAndDelete ({_id:declarationId});
      
       return res.status(200).json({message:'Успешно изтриване'})
        
    } catch (error) {
        next(error)
    }

}

const editCompanyDeclarationById = async (req,res,next) => {
    const {declarationId} = req.params;
    const {name,egn,description,documentNumber,newGoodsValues} = req.body;
   
   
    

    try {

        const updateQuery = {
            'declarer.name': name,
            'declarer.egn': egn,
            'appliedDocuments.appliedDocument.description': description,
            'appliedDocuments.appliedDocument.documentNumber': documentNumber
        };

        const exciseGoodsUpdate = {};
        for (const [id, values] of Object.entries(newGoodsValues)) {
            exciseGoodsUpdate[`exciseGoods.$[elem${id}].numberOfPackages`] = values.numberOfPackages;
            exciseGoodsUpdate[`exciseGoods.$[elem${id}].quantityOfGoods`] = values.quantityOfGoods;
        }
        
        


        const updatedDeclaration = await declarationModel.findByIdAndUpdate(
            declarationId,
            { 
                $set: { ...updateQuery, ...exciseGoodsUpdate },
            },
            { 
                new: true, 
                arrayFilters: Object.keys(newGoodsValues).map(id => ({ [`elem${id}._id`]: id })) 
            }
        );
      
       return res.status(200).json(updatedDeclaration)
        
    } catch (error) {
        next(error)
    }

}

module.exports = {
    createCompany,
    getMyCompanies,
    getCompanyById,
    getCompanyProducts,
    getAllCompanyDeclarations,
    getCompanyDeclarationById,
    getCompanyXMLDeclarationById,
    deleteCompanyDeclarationById,
    editCompanyDeclarationById
}