"use strict";

const app = require("./config/app");
const mongo_configuration = require("./config/mongoDB");
const PORT = 3000;

mongo_configuration.initialize_server();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
