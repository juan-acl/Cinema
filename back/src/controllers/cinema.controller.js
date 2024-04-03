"use strict";

const CinemaModel = require("../models/cinema.model");

exports.createSeats = async (req, res) => {
  try {
    let findSeats = await CinemaModel.find();
    if (findSeats.length > 0) {
      return res.status(200).json({ message: "Seats already created" });
    }
    // Generar los asientos de las salas por pelicula
    let seats = [];
    let number = 1;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        seats.push({ reserve: false, number: number });
        number++;
      }
    }
    let newData = [
      {
        nameMovie: "The Lord of the Rings",
        image: "https://i.imgur.com/7GQ7v1M.jpg",
        seat: seats,
      },
    ];
    let cinema = await CinemaModel.create(newData);
    res.status(201).json({ message: "Seats created successfully", cinema });
  } catch (error) {
    console.log("Error creating seats: ", error);
    return res
      .status(500)
      .json({ code: 500, message: "Error creating seats: " + error });
  }
};
