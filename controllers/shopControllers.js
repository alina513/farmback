const {Shop} = require("../models/shop.js");
const HttpError = require("../helpers/HttpError.js");
const ctrlWrapper = require("../helpers/ctrlWrapper.js");
const {SECRET_KEY="444478"} = process.env;
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// const getAllContacts = async (req, res) => {
//   const {_id: owner} = req.user;
//   // const {page = 1, limit = 20} = req.query;
//   // const skip = (page - 1) * limit;
//   const result = await Contact.find({owner});
//   res.json(result);
// };

// const getOneContact = async (req, res) => {
//   const {_id} = req.user;
//   const { id } = req.params;
//   const result = await Contact.findOne({
//     _id: id,
//    owner: _id});
//   if (!result) {
//     throw HttpError(404);
//   }
//   res.json(result);
// };

// const deleteContact = async (req, res) => {
//   const {_id} = req.user;
//   const {id} = req.params;
//   const result = await Contact.findOneAndDelete({
//      _id: id,
//     owner: _id});
//   if (!result) {
//     throw HttpError(404);
//   }
//   res.status(200).json(result);
// };

const createShop = async (req, res) => {
  const {_id: owner} = req.user;
  const result = await Shop.create({...req.body, owner});
  if (!result) {
    throw HttpError(400);
  }
  res.status(201).json(result);
};

// const updateContact = async (req, res) => {
//   if (Object.keys(req.body).length === 0) {
//     throw HttpError(400, "Body must have at least one field");
//   }
//   const {_id} = req.user;
//   const { id } = req.params;
//   const result = await Contact.findOneAndUpdate({
//   _id: id,
//    owner: _id}, 
//    req.body,
//     {new: true});
//   if (!result) {
//     throw HttpError(404);
//   }
//   res.status(200).json(result);
// };

// const updateStatusContact = async (req, res) => {
//   if (Object.keys(req.body).length === 0) {
//     throw HttpError(400, "Body must have at least one field");
//   }
//   const {_id} = req.user;
//   const { id } = req.params;
//   const result = await Contact.findOneAndUpdate({
//   _id: id,
//    owner: _id}, 
//    req.body,
//     {new:true});
//   if (!result) {
//     throw HttpError(404);
//   }
//   res.status(200).json(result);
// };

module.exports = {
//   getAllContacts: ctrlWrapper(getAllContacts),
//   getOneContact: ctrlWrapper(getOneContact),
//   deleteContact: ctrlWrapper(deleteContact),
  createShop: ctrlWrapper(createShop),
//   updateContact: ctrlWrapper(updateContact),
//   updateStatusContact: ctrlWrapper(updateStatusContact),
};