const mongoose = require('mongoose');



const productSchema = new mongoose.Schema({
    productName : {
        type: String,
        required:true
    },
    HScode: {
        type: String,
        required:true
    },
    additionalCode: {
        type: String,
        required:true
    },
    percentAlc: { 
        type: Number,
        required:true
    },
    obligationBaseCode: {
        type: Number,
        required:true,
        default: 401
    },
    volumeOfUnitPack : {
        type: Number,
        required:true,
        
    },
    unit : {
        type: String,
        required:true,
        
    },
    paymenCode: {
        type: Number,
        required:true,
        default: 10
    },
    amountOfExcise : {
        type: Number,
        required:true,
        default: 0
    }



})


module.exports = mongoose.model('Product', productSchema)