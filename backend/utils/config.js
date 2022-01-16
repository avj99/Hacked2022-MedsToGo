require("dotenv").config();

let PORT = process.env.PORT || 3001;
let MONGO_CONNECTION = process.env.MONGO_CONNECTION;

module.exports = {
  MONGO_CONNECTION,
  PORT,
};
