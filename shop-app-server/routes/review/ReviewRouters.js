const express = require('express');
const { 
    getAllReviews, responseReview
} = require('../../controller/reviewController/ReviewController');
const {
    PhotoUpload,
} = require('../../middlewares/upload/photoUpload')

const reviewRoutes = express.Router();

reviewRoutes.get('/all_review', getAllReviews);
reviewRoutes.post('/responseReview', PhotoUpload.array("imgResponsedReview") ,responseReview);

module.exports = reviewRoutes;