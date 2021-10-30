const Patient = require('../models/patientModel')
const Appoints = require('../models/appointsModel')
const _=require('lodash')
 const validation = require("../middlewares/validation");
require('dotenv').config();




exports.PatinetInsert = async (req, res) => {
  

    // LETS VALIDATE THE DATA BEFORE WE ADD A USER
  const { error } = validation.InsertPatient(req.body.data);
  if (error) return res.status(400).send(error.details[0].message);
  
   // chk if cin already in db
   const checkCin = await Patient.findOne({ cin: req.body.data.cin });
   if (checkCin) {
     return res.status(400).send("this patient is already exists");
   }
        const {name,lastName,cin,adress,date} = req.body.data
  const patinets = new Patient({
      name,
      lastName,
      cin,
      adress
  });
  const appoints = new Appoints({
      date
  });
  //save new user
  try {

           await patinets.save();
           await appoints.save();

        res.send("Sucess");
         
   
    
  } catch (err) {
    res.send(err);
  }

}


exports.updateOneUser = (req, res) => {
   Patient.findOneAndUpdate({_id: req.profile._id}, {$set: req.body}, {new: true}, (err, buyer) => {

    if(err){
        return res.status(400).json({err})
    }

    res.json({buyer})
   })
}




exports.getAllPatients = async (req, res) => {
   await Patient.find().exec((err, Patients) => {
        if(err){
            return res.status(404).json({
                error: "user not found"
            })
        }
        res.json(Patients)
    })
}


exports.getAllPatients = async (req, res) => {
    await Patient.find().exec((err, Patients) => {
         if(err){
             return res.status(404).json({
                 error: "user not found"
             })
         }
         res.json(Patients)
     })
 }

exports.findPatient = async (req, res) => {
    await Patient.find({cin:req.body.data.cin},(err,data) => {
        if(err){
            return res.status(404).json({
                error: "patient not found"
            })
        }
        res.json(data)
    })
 }

