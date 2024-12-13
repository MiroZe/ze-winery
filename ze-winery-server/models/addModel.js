const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;


const addProductSchema = new mongoose.Schema({


    sequenceNumber: {
        type: Number,
        required: true,

    },

    exciseGood: {
        type: ObjectId,
        ref: 'Product',
        required: true,
    },
    quantityOfGoods: {
        type: Number,
        required: true,
    },
    numberOfPackages: {
        type: Number,
        required: true,
    },
    taxBase: {
        type: Number,
        required: true,
    },
});

const addSchema = new mongoose.Schema({

   
    addNumber: {
        type:Number,
        required: true,
        unique: true
    },
    customer : {
        type: ObjectId,
        ref: 'Client'
    },

    preparationDate: {
        type: String,

        default: function () {

            const currentDate = new Date();

            const day = String(currentDate.getDate()).padStart(2, '0');
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const year = currentDate.getFullYear();

            return `${day}${month}${year}`;
        },
        required: true
    },

    exciseGoods:
        [addProductSchema]
    ,

    ownerCompanyId: {
        type: ObjectId,
        ref: 'Company',
        required: true
    }

});







module.exports = mongoose.model('Add', addSchema)