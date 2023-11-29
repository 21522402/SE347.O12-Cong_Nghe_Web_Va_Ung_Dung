const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        require: [true, 'Title feedback is required.']
    },
    content: {
        type: String,
        require: [true, 'Content feedback is required.']
    },
    feedbackDate: {
        type: Date,
        require: [true, 'Date of feedback is required.']
    },
    images: {
        type: [
            String
        ]
    },
    isResponsed:{
        type: Boolean,
        default:false
    },
    response: {
        type: {
            content: String, 
            date: Date,
            images: [String]
        }
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
const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;