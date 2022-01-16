const userRouter = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

userRouter.post("/", async (request, response) => {
  console.log(request.body);
  const body = request.body;

  const saltRounds = 10;
  const password = await bcrypt.hash(body.password, saltRounds);

  const user = new User({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: password,
  });

  const savedUser = await user.save();

  response.json(savedUser);
});

module.exports = userRouter;
