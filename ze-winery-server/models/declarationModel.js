const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;


const productSchema = new mongoose.Schema({
    product: {
      type: ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  });

const declarationSchema = new mongoose.Schema({

year : {
    type: String,
    required: true
},
month : {
    type: String,
    required:true
},
products : [productSchema],
createdAt: {
    type: Date,
    default: Date.now,
    required: true

}
});

declarationSchema.index({year:1, month:1}, {unique: true});
declarationSchema.pre('save', async function (next) {
    const existingDoc = await this.constructor.findOne({
        year: this.year,
        month: this.month,
      });
    
      if (existingDoc) {
        const error = new Error('Year and month combination must be unique');
        next(error);
      } else {
        next();
      }
    });


module.exports = mongoose.model('Declaration', declarationSchema)