const mongoose = require("mongoose");

//create schema
const userSchema = new mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        firstName: {
            required: [true, "First name is required"],
            type: String
        },
        lastName: {
            required: [true, "Last name is required"],
            type: String
        },
        profilePhoto: {
            type: String,
            default: 'https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_1280.png'
        },
        email: {
            type: String,
            required: [true, "Email is required"]
        },
        phoneNumber: {
            type: String,
        },
        password: {
            type: String,
            required: [true, "Password is required"]
        },
        role: {
            type: String,
            enum: ['Admin', 'Buyer']
        },
        address:{
            type:[{}] 
        },
        isAccountVerified: {
            type: Boolean,
            default: false
        },
        accountVerificationToken: String,
        accountVerificationTokenExpired: Date,
    },
    {
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true

    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;