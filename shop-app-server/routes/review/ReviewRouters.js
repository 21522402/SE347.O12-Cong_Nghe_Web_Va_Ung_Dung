const express = require('express');
const { 
    getAllReviews, responseReview
} = require('../../controller/reviewController/ReviewController');

const reviewRoutes = express.Router();
reviewRoutes.patch('/responseReview', responseReview);
reviewRoutes.get('/all_review', getAllReviews);



module.exports = reviewRoutes;