const Review = require("../../model/review/Review");
const successTemplate = require("../../templates/succesTemplate");
const errorTemplate = require("../../templates/errorTemplate");

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({})
      .populate([
        {
          path: "user",
          model: "User",
        },
        {
          path: "orderItem",
          model: "OrderItem",
          populate: {
            path: "productId",
            model: "Product",
          },
        },
      ])
      .exec();
    const res2 = reviews.map((item) => {
      return {
        _id: item._id,
        star: item.star,
        content: item.content,
        reviewDate: item.reviewDate,
        imagesRv: item.imagesRv,
        isResponsed: item.isResponsed,
        response: item.response,
        user: {
          fullName: item.user.fullName,
          email: item.user.email,
          profilePhoto: item.user.profilePhoto,
        },
        product: item.orderItem.productId,
        productName: item.orderItem.productName,
        orderItemImage: item.orderItem.image,
        size: item.orderItem.size,
        color: item.orderItem.color,
        price: item.orderItem.price,
      };
    });
    const listProductId = [];
    const listProduct = [];
    res2.forEach((item) => {
      if (!listProductId.includes(item.product._id)) {
        listProductId.push(item.product._id);
        listProduct.push(item.product);
      }
    });
    let listGroupReview = [];
    for (let i = 0; i < listProductId.length; i++) {
      const t = { product: listProduct[i], reviews: [] };
      res2.forEach((item2) => {
        if (item2.product._id === listProductId[i]) {
          t.reviews.push({
            ...item2,
            product: null,
          });
        }
      });
      listGroupReview.push(t);
    }
    listGroupReview = listGroupReview.map((item) => {
      return {
        ...item,
        averageStar:
          item.reviews.reduce((acc, cur) => {
            return acc + cur.star;
          }, 0) / item.reviews.length,
        OneStar: CountStar(item.reviews, 1),
        TwoStar: CountStar(item.reviews, 2),
        ThreeStar: CountStar(item.reviews, 3),
        FourStar: CountStar(item.reviews, 4),
        FiveStar: CountStar(item.reviews, 5),
        quantityResponsed: item.reviews.reduce((acc, cur) => {
          return cur.isResponsed === true && acc + 1;
        }, 0),
      };
    });

    return successTemplate(
      res,
      listGroupReview,
      "Get all reviews successfully!",
      200
    );
  } catch (error) {
    return errorTemplate(res, error.message);
  }
};
const responseReview = async (req, res) => {
  try {
    const imageBuffer = [];
    const listImageBase64 = req.body.response.imagesRsp;
    for (let i = 0; i < listImageBase64.length; i++) {
      const result = await cloudinaryCustom.uploader.upload(
        listImageBase64[i],
        {
          folder: "public/images/reviews",
        }
      );
      imageBuffer.push(result.secure_url);
    }

    const rv = await Review.findById(req.body._id).exec();
    rv.response.content = req.body.response.content;
    rv.response.imagesRsp = imageBuffer;
    rv.response.date = new Date();
  
    rv.isResponsed = true;
    rv.save();
    return successTemplate(res, rv, "Responsed review successfully!", 200);
  } catch (error) {
    return errorTemplate(res, error.message);
  }
};

const CountStar = (arr, star) => {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].star === star) {
      temp = temp + 1;
    }
  }
  return (temp / arr.length) * 100;
};

module.exports = {
  getAllReviews,
  responseReview,
};
