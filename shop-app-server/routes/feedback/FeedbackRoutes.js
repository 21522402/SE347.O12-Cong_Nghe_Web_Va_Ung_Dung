const express = require('express');
const { 
    getAllFeedbacks, responseFeedback
} = require('../../controller/feedbackController/FeedbackController');

const feedbackRoutes = express.Router();

feedbackRoutes.get('/all_feedback', getAllFeedbacks);
feedbackRoutes.patch('/responseFeedback', responseFeedback);

module.exports = feedbackRoutes;