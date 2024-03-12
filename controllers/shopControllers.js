const {Shop} = require("../models/shop.js");
const HttpError = require("../helpers/HttpError.js");
const ctrlWrapper = require("../helpers/ctrlWrapper.js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const {SECRET_KEY="444478"} = process.env;

const createShop = async (req, res) => {
  // const {_id: owner} = req.user;
  console.log(req.user);
  const result = await Shop.create({...req.body});
  if (!result) {
    throw HttpError(400);
  }
  res.status(201).json(result);
};



module.exports = {
  createShop: ctrlWrapper(createShop),
};