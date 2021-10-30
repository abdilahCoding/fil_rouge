const Analys = require('../models/analysesModel')


exports.addAnalyses = async (req, res) => {
  
 await console.log(req.body);
    // LETS VALIDATE THE DATA BEFORE WE ADD A USER
//   const { error } = validation.InsertPatient(req.body.data);
//   if (error) return res.status(400).send(error.details[0].message);
  
//    // chk if cin already in db
//    const checkCin = await Patient.findOne({ cin: req.body.data.cin });
//    if (checkCin) {
//      return res.status(400).send("this patient is already exists");
//    }
//         const {name,lastName,cin,adress,date} = req.body.data
//   const patinets = new Analys({
//       name,
//       lastName,
//       cin,
//       adress
//   });
//   const appoints = new Appoints({
//       date
//   });
//   //save new user
//   try {

//            await patinets.save();
//            await appoints.save();

//         res.send("Sucess");
         
   
    
//   } catch (err) {
//     res.send(err);
//   }

}
