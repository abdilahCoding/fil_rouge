const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
   
    username: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    

    
   
}, {timestamps: true})



// Crypter le mot pass et userSchema
// 1- creat virtuel password in userSchema


module.exports = mongoose.model("labos", userSchema)
