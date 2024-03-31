"use strict";
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

// todo: mongoose se utiliza para conectarse a la base de datos de mongoDB

exports.initialize_server = () => {
  const uriMongo = "mongodb://127.0.0.1:27017/Cinema";

  mongoose.Promise = global.Promise;

  mongoose.connection.on("error", () => {
    console.log("MongoDB | Could not be connect.");
    mongoose.disconnect();
  });

  mongoose.connection.on("connecting", () => {
    console.log("MongoDB | Connecting...");
  });

  mongoose.connection.on("connected", () => {
    console.log("MongoDB | Connected.");
  });

  mongoose.connection.once("open", () => {
    console.log("MongoDB | Connection to database.");
  });

  mongoose.connection.on("reconnected", () => {
    console.log("MongoDB | Reconnected.");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB | Disconnected.");
  });

  mongoose.connect(uriMongo, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    connectTimeoutMS: 5000,
    maxPoolSize: 50,
  });
};
