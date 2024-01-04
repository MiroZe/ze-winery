const { productModel } = require("../models");




const createProduct = async (req,res,next) => {

const {trademarkName, CNCode,additionalCode,pieces,companyId} = req.body;
const productData = {
    trademarkName, 
    CNCode,
    additionalCode,
    pieces,
    owner: companyId
}

if(Object.values(productData) === '') {
    throw new Error({error: 'All fields are mandatory'})
}

try {
   const createdProduct = await productModel.create(productData)
   return res.status(201).json(createdProduct)
} catch (error) {
    next(error)
}


}




module.exports = {

    createProduct
}