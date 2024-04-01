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
      return res
        .status(404)
        .json({ status: 404, message: "User not found", user: {} });
    }
    return res
      .status(200)
      .json({ status: 200, message: "User found", user: findUser });
  } catch (error) {
    console.log("Error login: ", error);
    return res
      .status(500)
      .json({ status: 500, message: "Internal server error: " + error });
  }
};

exports.register = async (req, res) => {
  try {
    const { name, lastname, email, password } = req.body;
    if (!name || !lastname || !email || !password) {
      return res.status(400).json({ status: 400, message: "Missing data" });
    }
    let emailExists = await UserModel.findOne({ email });
    if (!emailExists) {
      let user = new UserModel({ name, lastname, email, password });
      await user.save();
      return res.status(200).json({ status: 200, message: "User created" });
    }
    return res
      .status(400)
      .json({ status: 400, message: "Email already exists" });
  } catch (error) {
    console.log("Error register:" + error);
    return res
      .status(500)
      .json({ status: 500, message: "Internal server error: " + error });
  }
};
