const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const config = require("./utils/config");

const loginRouter = require("./routes/loginRouter");
const userRouter = require("./routes/userRouter");
const prescriptionRouter = require("./routes/prescriptionRouter");

const app = express();

mongoose
  .connect(config.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connection to MongoDB:", error.message);
  });

// app.use(express.static("build"));
app.use(express.json());

app.use("/api/login", loginRouter);
app.use("/users", userRouter);
app.use("/prescription", prescriptionRouter)
// app.get("/", (request, response) => {response.send('hello world')})

module.exports = app;
