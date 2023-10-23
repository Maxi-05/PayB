const mongoose = require("mongoose");
const PaymentSchema = new mongoose.Schema({
  purpose: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("payment", PaymentSchema);
