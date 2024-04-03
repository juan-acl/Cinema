"use strict";

const app = require("./config/app");
const mongo_configuration = require("./config/mongoDB");
const PORT = 3000;
const { createSeats } = require("./src/controllers/cinema.controller");

mongo_configuration.initialize_server();
const run = async () => {
  await createSeats();
  console.log("Cinema seats created");
};
run();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
