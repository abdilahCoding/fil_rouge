const mongoose = require('mongoose')
const { ObjectId } = require("mongodb")

const DocPatSchema = new mongoose.Schema({
   
    medical_pres: {
        type: String,
        required: true,
      
    },
    Symptoms: {
        type: String,
        required: true,
    },
     doc_date: {
        type: String,
        required: true,
    },
    
    id_patient:{
       type: ObjectId,
        ref: 'patients',

      
    },
   
    
   
}, {timestamps: true})



// Crypter le mot pass et userSchema
// 1- creat virtuel password in userSchema


module.exports = mongoose.model("docpatients", DocPatSchema)