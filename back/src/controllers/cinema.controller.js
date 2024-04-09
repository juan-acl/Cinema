"use strict";

const CinemaModel = require("../models/cinema.model");
const InvoiceModel = require("../models/reservation.model");

exports.createSeats = async (req, res) => {
  try {
    // Generar los asientos de las salas por pelicula
    let seats = [];
    let number = 1;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        seats.push({ seat: { status: 0, no_seat: number } });
        number++;
      }
    }
    let newData = [
      {
        nameMovie: "The Lord of the Rings",
        image: "https://i.imgur.com/7GQ7v1M.jpg",
        seats,
      },
    ];
    let cinema = await CinemaModel.insertMany(newData);
    res.status(201).json({ message: "Seats created successfully", cinema });
  } catch (error) {
    console.log("Error creating seats: ", error);
    return res
      .status(500)
      .json({ code: 500, message: "Error creating seats: " + error });
  }
};

exports.GetCinemas = async (req, res) => {
  try {
    const response = await CinemaModel.find();
    return res
      .status(200)
      .json({ code: 200, message: "success", cinemas: response });
  } catch (error) {
    console.log("Error getting cinbemas: ", error);
    return res
      .status(500)
      .json({ code: 500, message: "Error getCinemas: ", error });
  }
};

exports.createReservacion = async (req, res) => {
  try {
    const { idCinema, no_seats, idUser } = req.body;
    let cinema = await CinemaModel.findById(idCinema);
    if (!idCinema || !no_seats || no_seats.length === 0 || !idUser)
      return res
        .status(400)
        .json({ code: 400, success: false, message: "All params is required" });
    no_seats.forEach((seat) => {
      let index = cinema.seats.findIndex((sillas) => {
        return sillas.seat.find((silla) => {
          return silla.no_seat === seat;
        });
      });
      if (index === -1) return;
      cinema.seats[index].seat[0].status = 1;
    });
    await CinemaModel.findByIdAndUpdate({ _id: idCinema }, cinema, {
      new: true,
    });
    let newSeats = no_seats.filter((silla) => silla > 0 && silla < 26);
    let total = newSeats.length * 75;
    let invoice = new InvoiceModel({
      user: idUser,
      no_seat: newSeats,
      total,
    });
    await invoice.save();
    return res.status(200).json({
      code: 200,
      status: "success",
      message: "Reservation successfully",
      cinema,
    });
  } catch (error) {
    return res.status(500).json({ code: 500, message: "Error: " + error });
  }
};
