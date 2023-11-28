const mongoose = require('mongoose');

const productTypeSchema = new mongoose.Schema({

    productTypeName: {
        type: String,
        require: [true, 'Product type name is required.']
    },
    productCategoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductCategory'
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
const ProductType = mongoose.model('ProductType', productTypeSchema);

module.exports = ProductType;