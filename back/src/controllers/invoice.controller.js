"use strict";

const InvoiceModel = require("../models/reservation.model");

exports.GetInvoicesByUser = async (req, res) => {
  try {
    const { idUser } = req.body;
    if (!idUser)
      return res
        .status(400)
        .json({ status: "failed", message: "All fields are required!" });
    const invoices = await InvoiceModel.findOne({ user: idUser });
    if (!invoices)
      return res
        .status(404)
        .json({ status: "failed", message: "No invoices found!" });
    return res.status(200).json({ status: "success", data: invoices });
  } catch (error) {
    return res.status(500).json({ status: "failed", message: error });
  }
};
