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
},
{versionKey: false, timestamps: true});

drugSchema.post("save", handleMongooseError);

const Drug = model("drug", drugSchema);



const createDrugSchema = Joi.object({
name: Joi.string().required(),
price: Joi.string().required(),
number: Joi.string().required(),
})

const schemas = {createDrugSchema,
}

module.exports = {Drug,
  schemas
};


