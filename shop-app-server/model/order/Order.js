const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        orderDate:{
            type: Date,
            require:[true, 'Order date is required.']
        },
        
    }
)