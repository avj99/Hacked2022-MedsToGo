const userRouter = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

userRouter.post("/", async (request, response) => {
  console.log(request.body);
  const body = request.body;
  const email = request.body.email;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return response.status(401).json({
        error: "User already exists.",
      });
  }
  
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(body.password, saltRounds);

  const user = new User({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: hashedPassword,
  });

  const savedUser = await user.save();

  response.json(savedUser);
});

module.exports = userRouter;
