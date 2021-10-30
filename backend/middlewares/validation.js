// VALIDATION
const Joi = require("joi");

// Register validation
const registerValidation = data => {
  const schema = Joi.object({
    
    username: Joi.string()
      .min(3)
      .required(),
    password: Joi.string()
      .min(3)
      .required(),
    type: Joi.string()
      .min(3)
      
  });
  return schema.validate(data);
};


// Login users validation
const loginValidation = data => {
  const schema = Joi.object({
    username: Joi.string()
      .min(3)
      .required(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};
// Login labo validation
const loginLaboValidation = data => {
  const schema = Joi.object({
    username: Joi.string()
      .min(3)
      .required(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};
const InsertPatient = data => {
  const schema = Joi.object({
    cin: Joi.string()
      .min(3)
      .required(),
    name: Joi.string()
      .min(3)
      .required(),
      
    lastName: Joi.string()
      .min(3)
      .required(),
    adress: Joi.string()
      .min(3)
      .required(),
    date: Joi.string()
      .min(3)
      .required()
  });
  return schema.validate(data);
};

const Addappt = data => {
  const schema = Joi.object({
    date: Joi.string()
      .min(3)
      .required(),
    id: Joi.string()
      .min(3)
      .required()
      
  });
  return schema.validate(data);
};





module.exports ={registerValidation,loginValidation,InsertPatient,loginLaboValidation,Addappt};