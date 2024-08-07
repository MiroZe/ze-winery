const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;


const productSchema = new mongoose.Schema({
  sequenceNumber : {
    type: Number,
    required:true,

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
  numberOfPackages : {
    type: Number,
    required: true,
  },
  taxBase: {
    type: Number,
    required: true,  
},
});

const declarationSchema = new mongoose.Schema({
  kindOfDeclaration: {
    type: String,
    required: true,
    default: 'EXC00'
  },
  typeOfDeclaration: {
    type: String,
    required: true,
    default: 'EXC002BG'
  },
  IsCorrectionDeclaration: {
    type: Boolean,
    required: true,
    default: false
  },
  IsDelayedReporting: {
    type: Boolean,
    required: true,
    default: false
  },
  preparationDate: {
    type:String,

    default: function() {
     
      const currentDate = new Date();

      const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const year = currentDate.getFullYear();

      return `${day}${month}${year}`;
  },
    required: true
  },
  customsOffice: {
    type: String,
    required: true,
    default: 'BG003000'
  },
  totalAmountOfExciseDuty: {
    type: Number,
    required: true,
    default: 0.00
  },
  customer: {
    legalEntity: {
      type: String,
      required: true,
      default: 'SFW'
    },
    SIC: {
      type: String,
      required: true
    },
    exciseNumber: {
      type: String,
      required: true
    }
  },
  declarer: {
    name: {
      type: String,
      required: true
    },
    egn: {
      type: String,
      required: true
    }
  },
  reportingPeriod: {
    taxPeriod: {
      start: {
        type: String,
        required: true
      },
      end: {
        type: String,
        required: true
      }
    }
  },
  appliedDocuments: {
    appliedDocument: {
      documentType: {
        type: Number,
        default: 40,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      documentNumber: {
        type: String,
        required: true
      },
      documentDate: {
        type: String,
        required: true
      }
    }
  },
  exciseGoods:
    [productSchema]
  ,

  year: {
    type: String,
    required: true
  },
  month: {
    type: String,
    required: true
  },
  ownerCompanyId: {
    type: ObjectId,
    ref:'Company',
    required: true
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
    required: true

  }
});

declarationSchema.index({ year: 1, month: 1, ownerCompanyId: 1 }, { unique: true });
declarationSchema.pre('save', async function (next) {

  

  if (!this.isModified('year') && !this.isModified('month') && !this.isModified('ownerCompanyId')) {
    return next();
  }



  const existingDoc = await this.constructor.findOne({
    year: this.year,
    month: this.month,
    ownerCompanyId: this.ownerCompanyId
  });

  console.log(existingDoc);


  if (existingDoc) {
    const error = new Error('Year and month combination must be unique');
    next(error);
  } else {
    next();
  }
});


module.exports = mongoose.model('Declaration', declarationSchema)