const express = require("express");
const router = express.Router();
const Payment = require("../models/Payments");
router.post("/", async (req, res) => {
  try {
    const newPay = new Payment(req.body);
    const savedItem = await newPay.save();
    res.json(savedItem);
  } catch (error) {
    res.status(500).json({ error: "Could not add item to database" });
  }
});
router.get("/", async (req, res) => {
  try {
    const pays = await Payment.find();
    res.json(pays);
  } catch (error) {
    res.status(500).json({ error: "could not fetch items from database" });
  }
});
module.exports = router;
