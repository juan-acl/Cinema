"use strinct";

const CinemaModel = require("../models/cinema.model");

exports.createSeats = async (req, res) => {
  try {
    for (let i = 0; i < 10; i++) {
      let seats = [];
      for (let j = 0; j < 10; j++) {
        seats.push({ row: i, seat: j, reserve: false });
      }
      let cinema = new CinemaModel({ seats });
      await cinema.save();
    }
  } catch (error) {
    console.log("Error creating seats: ", error);
    return res
      .status(500)
      .json({ code: 500, message: "Error creating seats: " + error });
  }
};
