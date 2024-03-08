const {Schema, model} = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError.js");
const Joi = require("joi");

const userSchema = new Schema({
    name: {
      type: String,
      required: [true, 'Set naim for user'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
      unique: true,
    },
    adress: {
      type: String,
      required: [true, 'Adress is required'],
      unique: true,
    },
    token: {
      type: String,
    default:""}
  }, {versionKey: false, timestamps: true});

  userSchema.post("save", handleMongooseError);
  
  // const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const registerSchema = Joi.object({
    name:Joi.string().required(),
    email:Joi.string().required(),
    phone:Joi.string().required(),
    adress:Joi.string().required()
    
  });
  const loginSchema = Joi.object({
    name:Joi.string().required()
  });
  const schemas = {
    loginSchema,
    registerSchema
  };

  const User = model("user", userSchema);

  module.exports = {
    User,
    schemas
  };