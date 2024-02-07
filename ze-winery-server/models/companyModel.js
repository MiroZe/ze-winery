const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;






const companySchema = new mongoose.Schema({

    companyName : {
        type: String,
        required:true,
       
    },
    companyType : {
        type: String,
        required: true
    },
    companyId : {
        type: Number,
        required: true,
        minLength: [9, 'Company Id should be 9 digits long'],
        maxLength: [9, 'Company Id should be 9 digits long'],
        unique: true
    },
    exciseNumber : {
        type: String,
        required: true,
        minLength: [13, 'The exciseNumber should be 13 digits long'],
        maxLength: [13, 'The exciseNumber should be 13 digits long']
    },
    address: {
        type: String,
        required:true
    },
    address2 :{
        type: String,
    },
    city : {
        type: String,
        required:true
    },
    postalCode : {
        type: String,
        required:true
    },
    state: {
        type: String,
    },
    declarations : [
        {
            type: ObjectId, 
            ref: 'Declaration'
        }
    ],
    users : [
        {
            type: ObjectId, 
            ref: 'User',
            required:true
        }
    ],
    owner : {
        firstName: {
            type: String,
            required: true,
          },
          lastName: {
            type: String,
            required: true,
          },
          ownerId : {
              type: Number,
              required:true,
              unique:true,
              minLength: [10, 'Невалидно ЕГН'],
              maxLength: [10, 'Невалидно ЕГН']
          }
    } ,
    declarer : {
        declarerFirstName: {
            type: String,
            
          },
          declarerLastName: {
            type: String,
          
          },
          declarerId : {
              type: Number,   
              minLength: [10, 'Невалидно ЕГН'],
              maxLength: [10, 'Невалидно ЕГН']
          }
    } 
});


module.exports = mongoose.model('Company', companySchema)