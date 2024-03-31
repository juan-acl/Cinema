"use strict";

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("../src/routes/user.router");

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", userRouter);

app.post("/", async (req, res) => {
  try {
    return res.status(200).json({ status: 200, message: "Welcome to the API" });
  } catch (error) {
    console.log("Entry endpoint: ", error);
  }
});

app.all("**", (req, res) => {
  try {
    return res.status(404).json({ status: 404, message: "Not found" });
  } catch (error) {
    console.log("Entry endpoint: ", error);
  }
});

module.exports = app;
