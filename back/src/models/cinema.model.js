"use strict";

const mongoose = require("mongoose");

const cinemaSchema = new mongoose.Schema({
  seats: Array,
});

module.exports = mongoose.model("Cinema", cinemaSchema);
