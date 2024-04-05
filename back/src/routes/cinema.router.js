"use strict";

const express = require("express");
const cinemaController = require("../controllers/cinema.controller");

const app = express.Router();

app.post("/create-cinema", cinemaController.createSeats);
app.post("/getCinemas", cinemaController.GetCinemas);

module.exports = app;
