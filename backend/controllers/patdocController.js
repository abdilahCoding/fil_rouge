const DocPatients = require('../models/userModel')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _=require('lodash')
 const validation = require("../middlewares/validation");
require('dotenv').config();




exports.PatinetDocInsert = async (req, res) => {
  

    // LETS VALIDATE THE DATA BEFORE WE ADD A USER
  const { error } = validation.InsertDocPatient(req.body);
  if (error) return res.status(400).send(error.details[0].message);


  const docpatient = new docPatients(req.body);

  //save new user
  try {

        const savedDocPatient = await docpatient.save();
        res.json(savedDocPatient);
         
   
    
  } catch (err) {
    res.send(err);
  }

}


exports.updateOneUser = (req, res) => {
   User.findOneAndUpdate({_id: req.profile._id}, {$set: req.body}, {new: true}, (err, buyer) => {

    if(err){
        return res.status(400).json({err})
    }

    res.json({buyer})
   })
}




exports.getPatientById = (req, res) => {
    let pro =User.find().exec((err, user) => {
        if(err){
            return res.status(404).json({
                error: "user not found"
            })
        }
        res.json({
            user
        })
    })
}


