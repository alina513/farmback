const express = require("express");

const ctrl = require("../controllers/drugsControllers.js");
// const  validateBody  = require("../helpers/validateBody.js");
// const {schemas} = require("../models/drug.js");
// const isValidId = require("../helpers/isValidId.js");
// const authenticate = require("../middlewares/authenticate.js")


const drugsRouter = express.Router();

drugsRouter.get("/", ctrl.getAllDrugs);

// contactsRouter.get("/:id", authenticate, isValidId, ctrl.getOneContact);

// contactsRouter.delete("/:id", authenticate, isValidId, ctrl.deleteContact);

// drugsRouter.post(
//   "/", authenticate,
//   validateBody(schemas.createdrugsSchema),
//   ctrl.getAllDrugs
// );

// contactsRouter.put(
//   "/:id",
//   authenticate,
//   isValidId,
//   validateBody(schemas.updateContactSchema),
//   ctrl.updateContact
// );

// contactsRouter.patch(
//   "/:id/favorite", 
//   authenticate,
//   isValidId,
//   validateBody(schemas.updateFavoriteSchema), 
//   ctrl.updateStatusContact);

module.exports = drugsRouter;
