const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;



const productSchema = new mongoose.Schema({
   


        brandName: {
            type: String,
            required: true,
            default: 'A81304'
        },
        trademark: {
            type: String,
            required: true
        },
        APCode: {
            type: String,
            required: true,
            default: 'W200'
        },
        CNCode: {
            type: String,
            required: true
        },
        measure: {
            type: Number,
            required: true,
            default: 3
        },
        additionalCode: {
            type: String,
            required: true
        },
        intendedUseOfProduct: {
            type: Number,
            required: true,
            default: 401
        },
        purpose : {
            type:String,
            required: true,
            default: 'C01'    
        },
        dutyAmount : {
            type: Number,
            required: true,
            default: 0
        },
        payment: {
            type: Number,
            required: true,
            default: 10
        },
        paidDuty : {
            type: Number,
            required: true,
            default: 0
        },
        pieces: {
            type: Number,
            required: true,

        },
        exciseDuty: {
            type: Number,
            required: true,
            default: 0
        },
    
    owner: {
        type: ObjectId,
        ref: 'Company'
    }



})


module.exports = mongoose.model('Product', productSchema)