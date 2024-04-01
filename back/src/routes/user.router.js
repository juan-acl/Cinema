"use strict";

const express = require("express");
const userController = require("../controllers/user.controller");

const app = express.Router();

app.post("/create-admin", userController.createAdmin);
app.post("/register", userController.register);
app.post("/login", userController.login);
app.post("/update-profile", userController.updateProfile);

module.exports = app;
