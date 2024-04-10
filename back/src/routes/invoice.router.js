const express = require("express");
const app = express.Router();

const invoiceController = require("../controllers/invoice.controller");

app.post("/invoices-by-user", invoiceController.GetInvoicesByUser);

module.exports = app;
