const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  zipCode: { type: String, required: true },
  products: {
    required: true,
    validate: v => Array.isArray(v) && v.length > 0,
    type: [{
      _id: {
        type: mongoose.ObjectId,
        required: true
      },
      size: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      img: { type: String, required: true },
    }],
  },
  total: { type: Number, required: true },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => new Date()
  },
  updatedAt: {
    type: Date,
    default: () => new Date()
  }
});

const Orders = mongoose.model("orders", ordersSchema);

module.exports = Orders;
