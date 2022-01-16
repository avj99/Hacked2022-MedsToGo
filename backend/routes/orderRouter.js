const orderRouter = require("express").Router();
const User = require("../models/user");
const Order = require("../models/order");

orderRouter.post("/", async (request, response) => {
    console.log(request.body);
    const body = request.body;

    const order = new Order({
        firstName: body.firstName,
        lastName: body.lastName,
        prescription: body.prescription,
      });
    
    const savedOrder = await order.save();
  
    response.json(savedOrder);
  });
  
  module.exports = orderRouter;