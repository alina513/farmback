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
const user = await User.findOne({email});

if (user) {
    throw HttpError(409, "Email in use")
};
// const hashpassword = await bcrypt.hash(password, 10);
const newUser = await User.create({...req.body});
res.status(201).json({
    user: {
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
    // const passwordCompare = await bcrypt.compare(password, user.password);
    // if(!passwordCompare) {
    //     throw HttpError(401, "Email or password is wrong")
    // };
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

// const getCurrent = async(req, res)=> {
//     const {email, subscription} = req.user;

//     res.json({
//         email,
//         subscription,
//     })
// }

// const logout = async(req, res) => {
//     const {_id} = req.user;
//     await User.findByIdAndUpdate(_id, {token: ""});

//     res.status(204).json({
//         message: "Logout success"
//     })
// }

module.exports = {
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
    // getCurrent: ctrlWrapper(getCurrent),
    // logout: ctrlWrapper(logout)
}