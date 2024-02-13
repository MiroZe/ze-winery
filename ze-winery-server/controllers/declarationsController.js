const { declarationModel } = require('../models')





const createDeclaration = async (req, res, next) => {

    console.log(req.body);

    try {

        const   {
            year,
            companyId,
            month,
            declarationItems,
            names,
            startDate,
            endDate,
            appliedDocumentsDescription,
            appliedDocumentsNumbers,
            exciseNumber,
            SIC,
            egn,
            documentDate } = req.body;

            

        
            const declarationData = {
                year,
                month,
                ownerCompanyId :companyId, 
                customer: {
                    SIC,
                    exciseNumber
                },
                declarer: {
                    name:names,
                    egn
                },
                reportingPeriod :{
                    taxPeriod: {
                        start:startDate,
                        end: endDate
                    }
                   
                },
                appliedDocuments : {
                    appliedDocument : {
                        description :appliedDocumentsDescription,
                        documentNumber : appliedDocumentsNumbers,
                        documentDate
                       
                    }
                },
                declarationItems

            }

           


        const createdDeclaration = await declarationModel.create({
                year,
                month,
                ownerCompanyId :companyId,
                customer : declarationData.customer,
                declarer: declarationData.declarer,
                reportingPeriod: declarationData.reportingPeriod,
                appliedDocuments: declarationData.appliedDocuments,
                exciseGoods: declarationItems.map(({ _id, quantity }) => ({
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
    
    createDeclaration
}