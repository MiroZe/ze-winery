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



        const result = await declarationModel.create({
            year, month, products: declarationItems.map(({ _id, quantity }) => ({
                product: _id,
                quantity,
            })),
        })
        console.log(result);

    } catch (error) {
        next(error)
    }


}


module.exports = {
    getAllDeclarations,
    createDeclaration
}