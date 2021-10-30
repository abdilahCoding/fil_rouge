const mongoose = require('mongoose')
const { ObjectId } = require("mongodb")

const analysesSchema = new mongoose.Schema({
   
    pdf: {
        type: String,
        trim: true,
        maxlength: 3,
        required: true,
        unique: true
    },
   
    id_patients:{
       type: ObjectId,
        ref: 'patient',

    },
   
    
   
}, {timestamps: true})



// Crypter le mot pass et userSchema
// 1- creat virtuel password in userSchema


module.exports = mongoose.model("analyse", analysesSchema)