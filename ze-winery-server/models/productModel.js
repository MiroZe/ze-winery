const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;



const productSchema = new mongoose.Schema({
    brandName : {
        type: String,
        required:true,
        default:'A81304'
    },
    trademarkName : {
        type: String,
        required:true
    },
    APCode: {
        type: String,
        required:true,
        default: 'W200'
    },
    maeasure: {
        type: Number,
        required:true,
        default:3
    },

    CNCode: {
        type: String,
        required:true
    },
    additionalCode: {
        type: String,
        required:true
    },
    obligationBaseCode: {
        type: Number,
        required:true,
        default: 401
    },
    pieces : {
        type: Number,
        required:true,
        
    },
    quantityOfGoods : {
        type: String,
        required:true,
        
    },
    paymenCode: {
        type: Number,
        required:true,
        default: 10
    },
    exciseDuty : {
        type: Number,
        required:true,
        default: 0
    },
    owner : {
        type: ObjectId,
        ref: 'Company'
    }



})


module.exports = mongoose.model('Product', productSchema)