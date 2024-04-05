"use strict";

const mongoose = require("mongoose");

const cinemaSchema = new mongoose.Schema({
  seats: [
    {
      seat: [
        {
          status: Number,
          no_seat: Number,
        },
      ],
    },
  ],
  nameMovie: String,
  image: String,
});

module.exports = mongoose.model("Seats", cinemaSchema);
