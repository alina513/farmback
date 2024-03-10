const {Drug} = require("../models/drug.js");

const ctrlWrapper = require("../helpers/ctrlWrapper.js");

const getAllDrugs = async (req, res) => {
  const result = await Drug.find();
  res.json(result);
};

module.exports = {
  getAllDrugs: ctrlWrapper(getAllDrugs),
};
