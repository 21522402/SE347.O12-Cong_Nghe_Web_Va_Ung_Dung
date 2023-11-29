const Review = require("../../model/review/Review")
const successTemplate = require('../../templates/succesTemplate');
const errorTemplate = require("../../templates/errorTemplate");


const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({});
        return successTemplate(res, reviews, "Get all reviews successfully!", 200)
    } catch (error) {
        return errorTemplate(res, error.message)
    }
}
const responseReview = async (req, res) => {
    try {
        const reviewId = req?.params?.id;
        validationId(reviewId)

        const arrImageLink = [];
        req.files.forEach(async (item, index) => {
            var localPath = `public/images/reviews/${item.filename}`;
            let imgUpload = await cloudinaryUploadImage(localPath);
            arrImageLink.push(imgUpload.url);
            fs.unlinkSync(localPath)
        });

        const review = await Review.create({
            ...req?.body, 
            isResponsed: true,
            response: {
                ...req?.body.response,
                content: req?.body.content,
                date: req?.body.date,
                imagesRsp: arrImageLink
            }
        })
        
        return successTemplate(res, review, "Responsed review successfully!", 200)
    } catch (error) {
        return errorTemplate(res, error.message)
    }
}

module.exports = {
    getAllReviews,
    responseReview,
}