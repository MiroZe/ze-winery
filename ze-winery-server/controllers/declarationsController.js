const { declarationModel }= require('../models/declarationModel')



const getAllDeclarations = async(req,res,next) => {

    
    try {
        const declarations = await declarationModel.find({})
        return res.status(200).json(declarations)
        
    } catch (error) {
        next(error)
    }

}

const createDeclaration = async (req,res,next) => {

try {

    console.log('hello from declarations');
    
} catch (error) {
    next(error)
}


}


module.exports = {
    getAllDeclarations,
    createDeclaration
}