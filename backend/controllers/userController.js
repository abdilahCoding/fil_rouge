const User = require('../models/userModel')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _=require('lodash')
 const validation = require("../middlewares/validation");
require('dotenv').config();




exports.UserSignin = async (req, res) => {
    // LETS VALIDATE THE DATA BEFORE WE ADD A USER
    
  const { error } = validation.loginValidation(req.body.data);
  if (error) return res.status(400).send(error.details[0].message);

  // chk if new user already in db
  const user = await User.findOne({ username: req.body.data.username });
  if (!user) return res.status(400).send("username  is wrong");
  
  // chk if password is correct
  const validPass = await bcrypt.compare(req.body.data.password, user.password);
  if (!validPass) return res.status(400).send("password is wrong");

  // create and assign a token
  const token = jwt.sign({_id: user.id,role:user.type}, process.env.TOKEN_SECRET);
  dataUser = {_id: user.id,role:user.type};
  res.send({dataUser,token});
}

exports.UserSingup = async (req, res) => {
  

    // LETS VALIDATE THE DATA BEFORE WE ADD A USER
    
  const { error } = validation.registerValidation(req.body.data);
  if (error) return res.status(400).send(error.details[0].message);

  // chk if new user already in db
  const UernameExist = await User.findOne({ username: req.body.data.username });
  if (UernameExist) {
    return res.status(400).send("username already exists");
  }

  // hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.data.password, salt);
    // console.log(req.body.value); 
    const{username} =req.body.data
    // const buyer = new Buyer(_.pick(req.body,['name','lastName','email','hashPassword','type']));

  const user = new User({
    username:req.body.data.username,
    password:hashPassword,
    type:req.body.data.type
  });

  //save new user
  try {
         console.log(user);
         await user.save();
         res.send("Success");
         
   
    
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





exports.getAllUsers = async (req, res) => {
  await User.find().exec((err, users) => {
       if(err){
           return res.status(404).json({
               error: "user not found"
           })
       }
       res.json({
           users
       })
   })
}
exports.deleteUser = async (req, res) => {

  await User.findByIdAndRemove(req.body.id, function(err){
  if(err){
    res.send(err)
  } else {
    res.send("Success")
  }
});

}