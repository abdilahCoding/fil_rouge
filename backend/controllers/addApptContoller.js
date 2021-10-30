const Appoints = require('../models/appointsModel')
 const validation = require("../middlewares/validation");
require('dotenv').config();




exports.Addappt = async (req, res) => {
  

    // LETS VALIDATE THE DATA BEFORE WE ADD A USER
    console.log(req.body.resulat);
  const { error } = validation.Addappt(req.body.resulat);
  if (error) return res.status(400).send(error.details[0].message);
  
 const {date,id} = req.body.resulat
  const appoints = new Appoints({
      date:date,
      id_patient:id
  });
  //save new user
  try {
     await appoints.save();
      res.send("Sucess");
         
  } catch (err) {
    res.send(err);
  }

}
  
  exports.getTodayAppoints = async (req, res) => {
   
let todayDate = new Date().toISOString().slice(0, 10);

    try {
      const get = await Appoints.find({date:todayDate}).populate('id_patient','-date')
      res.json(get)

    } catch (error) {
      res.json(error)
    }
        

  }

   
  exports.getAlAppoints = async (req, res) => {
   
        try {
          const get = await Appoints.find().populate('id_patient','-date')
          res.json(get)
    
        } catch (error) {
          res.json(error)
        }
            
    
      }
