const express = require("express");
import {schemas} from "../models/drug.js"

const ctrl = require("../controllers/drugsControllers.js");
const drugsRouter = express.Router();
drugsRouter.get(
    "/",
    validateBody(schemas.createDrugSchema),
    ctrl.getAllDrugs)

module.exports = drugsRouter;
