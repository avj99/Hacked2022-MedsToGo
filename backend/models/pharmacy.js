const mongoose = require("mongoose");

const pharmacySchema = new mongoose.Schema({
  name: String,
});

pharmacySchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const pharmacy = mongoose.model("Pharmacy", pharmacySchema);

module.exports = pharmacy;
