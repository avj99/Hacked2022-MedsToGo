const pharmacyRouter = require("express").Router();
const Pharmacy = require("../models/pharmacy");

pharmacyRouter.post("/", async (request, response) => {
  const body = request.body;

  const pharmacy = new Pharmacy({
    name: body.name,
  });

  const savedpharmacy = await pharmacy.save();

  response.json(savedpharmacy);
});

module.exports = pharmacyRouter;
