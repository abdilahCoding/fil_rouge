const laboUsers = require('../models/labousersModel')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
 const validation = require("../middlewares/validation");
require('dotenv').config();




exports.LabPharSignin = async (req, res) => {
    // LETS VALIDATE THE DATA BEFORE WE ADD A USER
  const { error } = validation.loginLaboValidation(req.body.data);
  if (error) return res.status(400).send(error.details[0].message);

  // chk if new user already in db
  const user = await laboUsers.findOne({ username: req.body.data.username });
  if (!user) return res.status(400).send("Username  is wrong");
  
  // chk if password is correct
  const validPass = await bcrypt.compare(req.body.data.password, user.password);
  if (!validPass) return res.status(400).send("password is wrong");

  // create and assign a token
  const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET);
  dataLabo = {_id: user.id};
  res.send({dataLabo,token});
}

exports.LabPhaSingup = async (req, res) => {
  

    // LETS VALIDATE THE DATA BEFORE WE ADD A USER
  const { error } = validation.registerValidation(req.body.data);
  if (error) return res.status(400).send(error.details[0].message);

  // chk if new user already in db
  const userExist = await laboUsers.findOne({ username: req.body.data.username });
  if (userExist) {
    return res.status(400).send("Username already exists");
  }

  // hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.data.password, salt);
    // console.log(req.body.value); 
    const{username} =req.body.data
    // const buyer = new Buyer(_.pick(req.body,['name','lastName','email','hashPassword','type']));

  const user = new laboUsers({
    username,
    password:hashPassword,
   
  });

  //save new user
  try {

        const savedUser = await user.save();
     res.send("succes");
         
   
    
  } catch (err) {
    res.send(err);
  }

}




