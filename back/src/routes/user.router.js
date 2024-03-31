"use strict";

const express = require("express");
const userController = require("../controllers/user.controller");

const app = express.Router();

app.post("/create-admin", userController.createAdmin);
app.post("/login", userController.login);

module.exports = app;
