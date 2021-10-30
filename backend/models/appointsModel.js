const mongoose = require('mongoose')
const { ObjectId } = require("mongodb")

const appointsSchema = new mongoose.Schema({
   
    date:{
        type: String,
        required: true,
    },
    id_patient:{
        type: ObjectId,
         ref: 'patient', 
     },
   
  
}, {timestamps: true})



// Crypter le mot pass et userSchema
// 1- creat virtuel password in userSchema


module.exports = mongoose.model("appointements", appointsSchema)