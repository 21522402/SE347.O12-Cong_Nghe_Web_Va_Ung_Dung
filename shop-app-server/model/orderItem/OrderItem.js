const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema(
    {
        productId: mongoose.Schema.Types.ObjectId,
        productName: String,
        image: String,
        size: String,
        color: String,
        quanlity: Number,
        price: Number,
        discountPerc: Number
    }
)
const OrderItem = mongoose.model('OrderItem', orderItemSchema);

module.exports = OrderItem;