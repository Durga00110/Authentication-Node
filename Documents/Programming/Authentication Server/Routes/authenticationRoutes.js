const express = require("express");
const Router = express.Router();
const {registerUser} = require('../Controller/authentication')
const {userLoginController} = require('../Controller/authentication')


Router.post("/register",registerUser)
Router.post("/login",userLoginController)


module.exports = Router