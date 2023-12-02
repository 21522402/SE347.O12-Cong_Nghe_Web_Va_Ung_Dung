const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    productName: String,
    image: String,
    size: String,
    color: String,
    quanlity: Number,
    price: Number,
    discountPerc: Number,
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);
const OrderItem = mongoose.model('OrderItem', orderItemSchema)
module.exports = OrderItem;
