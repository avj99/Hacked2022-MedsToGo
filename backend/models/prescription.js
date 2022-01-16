const mongoose = require("mongoose");

// ! Will add "orders" later
const prescriptionSchema = new mongoose.Schema({
  customer: String,
  pic: String,
  isActive: Boolean,
});

prescriptionSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Prescription = mongoose.model("Prescription", prescriptionSchema);

module.exports = Prescription;
