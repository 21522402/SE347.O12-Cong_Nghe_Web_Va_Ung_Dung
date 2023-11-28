const Feedback = require("../../model/feedback/Feedback")
const successTemplate = require('../../templates/succesTemplate');
const errorTemplate = require("../../templates/errorTemplate");
const cloudinaryUploadImage = require('../../utils/cloudinary');
const fs = require('fs');

const getAllFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find({});
        return successTemplate(res, feedbacks, "Get all feedbacks successfully!", 200)
    } catch (error) {
        return errorTemplate(res, error.message)
    }
}
const responseFeedback = async (req, res) => {
    try {
        const feedbackId = req?.params?.id;
        validationId(feedbackId)

        const arrImageLink = [];
        req.files.forEach(async (item, index) => {
            var localPath = `public/images/feedbacks/${item.filename}`;
            let imgUpload = await cloudinaryUploadImage(localPath);
            arrImageLink.push(imgUpload.url);
            fs.unlinkSync(localPath)
        });

        const feedback = await Feedback.create({
            ...req?.body, 
            isResponsed: true,
            response: {
                ...req?.body.response,
                content: req?.body.content,
                date: req?.body.date,
                images: arrImageLink
            }
        })
        
        return successTemplate(res, feedback, "Responsed feedback successfully!", 200)
    } catch (error) {
        return errorTemplate(res, error.message)
    }
}

module.exports = {
    getAllFeedbacks,
    responseFeedback,
}