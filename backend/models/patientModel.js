const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    cin: {
        type: String,
        required: true,
        unique: true

      
    },
    name: {
        type: String,
        required: true,
      
    },
    lastName: {
        type: String,
        required: true,
    },
     adress: {
        type: String,
        required: true,
    },
    
   
}, {timestamps: true})



// Crypter le mot pass et userSchema
// 1- creat virtuel password in userSchema


module.exports = mongoose.model("patient", patientSchema)