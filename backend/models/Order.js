const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  cartItems: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      name: String,
      price: Number,
      qty: Number,
    },
  ],
  total: Number,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", OrderSchema);
