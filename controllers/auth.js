const {User} = require("../models/user");
const  HttpError = require("../helpers/HttpError");
const ctrlWrapper = require("../helpers/ctrlWrapper");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const {SECRET_KEY="444478"} = process.env;


const register = async(req, res) => {
const {name, email, phone, adress} = req.body;
// const user = await User.findOne({email});

// if (user) {
//     throw HttpError(409, "Email in use")
// };
const newUser = await User.create({ ...req.body });
const payload = {
    id: newUser._id,  
};
const token = jwt.sign(payload, SECRET_KEY, {expiresIn:"23h"});
res.status(201).json({token,
    user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        adress: newUser.adress,
    }
})
};

const login = async(req, res) => {
    const {name} = req.body;
    const user = await User.findOne({name});
    if (!user) {throw HttpError(401, "Name is wrong")};
    const payload = {
        id: user._id,
    };
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn:"23h"});
    await User.findByIdAndUpdate(user._id, {token});

    res.json({token,
        user: {
            name: user.name,
          }});

};


module.exports = {
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
}