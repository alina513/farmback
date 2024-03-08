const {Schema, model} = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError.js");
const Joi = require("joi");

const drugSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
      },
      price: {
        type: String,
      },
      number: {
        type: String,
      },
      // favorite: {
      //   type: Boolean,
      //   default: false,
      // },
      // owner: {
      //   type: Schema.Types.ObjectId,
      //   ref: 'user',
      // }
},
{versionKey: false, timestamps: true});

drugSchema.post("save", handleMongooseError);

const Drug = model("drug", drugSchema);



const createDrugSchema = Joi.object({
name: Joi.string().required(),
price: Joi.string().required(),
number: Joi.string().required(),
})

// const updateContactSchema = Joi.object({
// name: Joi.string(),
// email: Joi.string(),
// phone: Joi.string(),
// })

// const updateFavoriteSchema = Joi.object({
//     favorite: Joi.boolean().required(),
// })
const schemas = {createDrugSchema,
  // updateContactSchema, 
  // updateFavoriteSchema
}

module.exports = {Drug,
  schemas
};


