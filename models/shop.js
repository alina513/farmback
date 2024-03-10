const {Schema, model} = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError.js");
const Joi = require("joi");

const shopSchema = new Schema({
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
      owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      }
},
{versionKey: false, timestamps: true});

shopSchema.post("save", handleMongooseError);

const Shop = model("shop", shopSchema);



const createShopSchema = Joi.object({
name: Joi.string().required(),
price: Joi.string().required(),
number: Joi.string(),
})

const schemas = {createShopSchema,
}

module.exports = {Shop,
  schemas
};


