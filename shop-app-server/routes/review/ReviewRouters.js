const express = require('express');
const { 
    getAllReviews, responseReview
} = require('../../controller/reviewController/ReviewController');

const reviewRoutes = express.Router();

reviewRoutes.get('/all_review', getAllReviews);
reviewRoutes.patch('/responseReview', responseReview);

module.exports = reviewRoutes;