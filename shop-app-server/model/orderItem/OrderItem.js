const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    size: {
        type: String,
        require: [true, "Size is required"]
    },
    color: {
        type: [
            {
                name: String,
                code: String,
            }
        ],
        require: [true, "color is required"]
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
const OrderItem = mongoose.model('OrderItem', feedbackSchema);

module.exports = OrderItem;