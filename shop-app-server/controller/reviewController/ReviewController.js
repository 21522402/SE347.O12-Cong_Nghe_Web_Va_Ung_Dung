const Review = require("../../model/review/Review");
const successTemplate = require("../../templates/succesTemplate");
const errorTemplate = require("../../templates/errorTemplate");

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({})
      .populate([
        {
          path: "user", 
          model: "User"
        }, 
        { 
          path: "orderItem", 
          model: "OrderItem", 
          populate: {
            path: "productId", 
            model: "Product"
          }
        }
      ])
      .exec();
    return successTemplate(res, reviews, "Get all reviews successfully!", 200);
  } catch (error) {
    return errorTemplate(res, error.message);
  }
};
const responseReview = async (req, res) => {
  try {
    return successTemplate(res, review, "Responsed review successfully!", 200);
  } catch (error) {
    return errorTemplate(res, error.message);
  }
};

module.exports = {
  getAllReviews,
  responseReview,
};
