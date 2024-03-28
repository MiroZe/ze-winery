const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;




const clientSchema = new mongoose.Schema({

    name: {
        type:String,
        required: true,
    },
    address: {
        type: String,
        required:true
    },
    city : {
        type: String,
        required:true
    },
    isCompany: {
        type: Boolean,
        required:true
    },
    owner: {
        type:ObjectId,
        ref:'Company',
        required:true
    }
    

});

module.exports = mongoose.model('Client', clientSchema)
