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

    console.log(req.body);

    try {

        const   {
            year,
            month,
            declarationItems,
            names,
            startDate,
            endDate,
            appliedDocumentsDescription,
            exciseNumber,
            SIC,
            egn,
            documentDate } = req.body;

        
            const declarationData = {
                year,
                month,
                customer: {
                    SIC,
                    exciseNumber
                },
                declarer: {
                    names,
                    egn
                },
                reportingPeriod :{
                    startDate,
                    endDate
                },
                appliedDocuments : {
                    appliedDocument : {
                        description :{
                            documentNumber:appliedDocumentsDescription
                        },
                        documentDate

                    }
                }

            }




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