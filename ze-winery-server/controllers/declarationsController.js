const { declarationModel } = require('../models')



const getAllDeclarations = async (req, res, next) => {


    try {
        const declarations = await declarationModel.find({})
        return res.status(200).json(declarations)

    } catch (error) {
        next(error)
    }

}

const createDeclaration = async (req, res, next) => {

    try {

        const { year, month, declarationItems } = req.body;



        const createdDeclaration = await declarationModel.create({
            year, month, products: declarationItems.map(({ _id, quantity }) => ({
                product: _id,
                quantity,
            })),
        })
        return res.status(201).json(createdDeclaration)

    } catch (error) {
        next(error)
    }


}


module.exports = {
    getAllDeclarations,
    createDeclaration
}