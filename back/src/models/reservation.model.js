"use strict";

const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
  no_seat: Array,
  total: Number,
});

module.exports = mongoose.model("Invoice", invoiceSchema);
