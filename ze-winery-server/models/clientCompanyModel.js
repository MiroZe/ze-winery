const mongoose = require("mongoose");
const Client = require('./clientModel')

const clientCompanySchema = new mongoose.Schema ({


companyType: {
    type:String,
    required: true
},
companyId : {
    type: Number,
    required: true,
    minLength: [9, 'Company Id should be 9 digits long'],
    maxLength: [9, 'Company Id should be 9 digits long'],
    unique: true
},


});

module.exports = Client.discriminator('ClientCompany', clientCompanySchema)