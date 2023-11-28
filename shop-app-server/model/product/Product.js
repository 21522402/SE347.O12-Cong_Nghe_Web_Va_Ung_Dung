const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        require: [true, 'Product Name is required.']
    },
    productType: {
        type: String,
        require: [true, 'Product type is required.']
    },
    importPrice: {
        type: Number,
    },
    exportPrice: {
        type: Number,
    },
    discountPerc: {
        type: Number,
    },
    quantitySold: {
        type: Number
    },
    isSell:{
        type: Boolean,
        default:true
    },
    colors: {
        type: [
            {
                colorCode: String,
                colorName: String,
                images:[String],
                size:[
                    {
                        sizeName: String,
                        quanlity: Number
                    }
                ]
                
            }
        ]
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
const Product = mongoose.model('Product', productSchema);

module.exports = Product;