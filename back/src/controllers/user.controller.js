"use strict";

const UserModel = require("../models/user.model");

exports.createAdmin = async (req, res) => {
  try {
    const data = {
      name: "admin",
      lastname: "admin",
      email: "admin@correo.com",
      password: "admin",
    };
    let user = new UserModel(data);
    await user.save();
    return res.status(200).json({ message: "Admin created" });
  } catch (error) {
    console.log("Error creating admin: ", error);
    return res.status(500).json({ message: "Internal server error: " + error });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await UserModel.findOne({ email, password });
    if (!findUser) {
      return res.status(404).json({ message: "User not found", user: {} });
    }
    return res.status(200).json({ message: "User found", user: findUser });
  } catch (error) {
    console.log("Error login: ", error);
    return res.status(500).json({ message: "Internal server error: " + error });
  }
};
