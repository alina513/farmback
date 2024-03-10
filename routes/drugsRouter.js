const express = require("express");

const ctrl = require("../controllers/drugsControllers.js");
const drugsRouter = express.Router();
drugsRouter.get(
    "/", ctrl.getAllDrugs)
    

module.exports = drugsRouter;
