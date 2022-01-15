const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();

// mongoose
//   .connect(config.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.log("error connection to MongoDB:", error.message);
//   });

// app.use(express.static("build"));
app.use(express.json());

module.exports = app;
