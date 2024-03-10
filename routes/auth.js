const express = require("express");
const router = express.Router();

const ctrl = require("../controllers/auth");
const validateBody = require("../helpers/validateBody");
const {schemas} = require("../models/user");
// const authenticate = require("../middlewares/authenticate");


router.post("/register", validateBody(schemas.registerSchema), ctrl.register);



router.post("/login", validateBody(schemas.loginSchema), ctrl.login);


module.exports = router;