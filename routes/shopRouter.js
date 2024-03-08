const express = require("express");
const  validateBody  = require("../helpers/validateBody.js");
const {schemas} = require("../models/shop.js");
// const isValidId = require("../helpers/isValidId.js");
// const authenticate = require("../middlewares/authenticate.js")


const ctrl = require("../controllers/shopControllers");
const authenticate = require("../middlewares/authenticate.js")
// const  validateBody  = require("../helpers/validateBody.js");
// const {schemas} = require("../models/contact.js");
// const isValidId = require("../helpers/isValidId.js");
const shopRouter = express.Router();
shopRouter.post(
      "/", authenticate,
      validateBody(schemas.createShopSchema),
      ctrl.createShop
    );
module.exports = shopRouter;