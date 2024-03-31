"use strict";

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all("**", (req, res) => {
  try {
    return res.status(404).json({ code: 404, message: "Not found" });
  } catch (error) {
    console.log("Entry endpoint: ", error);
  }
});

module.exports = app;
