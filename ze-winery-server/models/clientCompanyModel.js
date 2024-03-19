const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;


const clientCompanySchema = new mongoose.Schema ({

companyName: {
    type:String,
    required: true,
},
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
address: {
    type: String,
    required:true
},
city : {
    type: String,
    required:true
},
postalCode : {
    type: String,
    required:true
},
owner: {
    type:ObjectId,
    ref:'Company',
    required:true
}


});

module.exports = mongoose.model('ClientCompany', clientCompanySchema)