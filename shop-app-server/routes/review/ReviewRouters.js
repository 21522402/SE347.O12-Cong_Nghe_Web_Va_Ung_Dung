const express = require('express');

const { 
    getAllReviews, responseReview, getReviewsByProductId
} = require('../../controller/reviewController/ReviewController');

const reviewRoutes = express.Router();
reviewRoutes.patch('/responseReview', responseReview);
reviewRoutes.get('/all_review', getAllReviews);
reviewRoutes.get('/getReviewsByProductId/:id', getReviewsByProductId);



module.exports = reviewRoutes;