"use strict";

const mongoose = require("mongoose");

const cinemaSchema = new mongoose.Schema({
  seats: [
    {
      numero: Number,
      hour: String,
      seat: [
        {
          status: Boolean,
          numero: Number,
        },
      ],
    },
  ],
  nameMovie: String,
  image: String,
});

module.exports = mongoose.model("Cinema", cinemaSchema);
