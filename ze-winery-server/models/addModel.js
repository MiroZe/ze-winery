const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const { counterModel } = require('./index');  

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
        type: Number,
        required: true,
        unique: true
    },
    customer: {
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
    exciseGoods: [addProductSchema],
    ownerCompanyId: {
        type: ObjectId,
        ref: 'Company',
        required: true
    },
    intendedUseOfProduct: {
        type: String,
        required: true,
        default: '401'
    }
});


addSchema.statics.getNextNumber = async function (companyId, sequenceType) {
    const counterName = `${companyId}_${sequenceType}`; 
    const counter = await counterModel.findOneAndUpdate(
      { name: counterName },  
      { $inc: { value: 1 } },  
      { new: true, upsert: true }  
    );
    return counter.value.toString().padStart(10, '0'); 
};


addSchema.pre('save', async function (next) {
    if (!this.addNumber) {  
      try {
        const nextAddNumber = await this.constructor.getNextNumber(this.ownerCompanyId, 'addNumber');  
        this.addNumber = nextAddNumber; 
        next();  
      } catch (err) {
        return next(err);  
      }
    } else {
      next();  
    }
});


module.exports = mongoose.model('Add', addSchema);
