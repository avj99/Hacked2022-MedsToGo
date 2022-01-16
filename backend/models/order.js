const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    prescription: String,
  });

  orderSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;