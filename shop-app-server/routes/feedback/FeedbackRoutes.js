const express = require('express');
const { 
    getAllFeedbacks, responseFeedback
} = require('../../controller/feedbackController/FeedbackController');
const {
    PhotoUpload,
} = require('../../middlewares/upload/photoUpload')

const feedbackRoutes = express.Router();

feedbackRoutes.get('/all_feedback', getAllFeedbacks);
feedbackRoutes.post('/responseFeedback', PhotoUpload.array("imagesResponsedFeedback", 10), responseFeedback);

module.exports = feedbackRoutes;