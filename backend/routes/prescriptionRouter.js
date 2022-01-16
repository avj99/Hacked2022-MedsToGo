const prescriptionRouter = require("express").Router();
const Prescription = require("../models/prescription");

prescriptionRouter.post("/", async (request, response) => {
  console.log("hello: " + request.body.customer);
  const body = request.body;

  const saltRounds = 10;

  const prescription = new Prescription({
    customer: body.customer,
    pic: body.pic,
    isActive: body.isActive,
  });

  const savedPrescription = await prescription.save();

  response.json(savedPrescription);
});

module.exports = prescriptionRouter;
