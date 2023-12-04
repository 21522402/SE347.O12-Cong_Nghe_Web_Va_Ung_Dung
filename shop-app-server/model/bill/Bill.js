const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
    orderId: String,
    time: Date,
    method: String,
    money: Number,
    customerName: String,
    phoneNumber: String

}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
const Product = mongoose.model('Bill', billSchema);

module.exports = Product;