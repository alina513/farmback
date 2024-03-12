const express = require("express");
const  validateBody  = require("../helpers/validateBody.js");
const {schemas} = require("../models/shop.js");



const ctrl = require("../controllers/shopControllers");
// const authenticate = require("../middlewares/authenticate.js")
const shopRouter = express.Router();
shopRouter.post(
      "/",
      validateBody(schemas.createShopSchema),
      ctrl.createShop
    );
module.exports = shopRouter;