import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./DetailReview.module.scss";
import images from "~/assets/images";
import ReactStars from "react-stars";
import ItemReview from "~/components/ItemReview";

const cx = classNames.bind(styles);

function DetailReview() {
  const [listItemReview, setListItemReview] = useState([]);
  const getAllReviews = async () => {
    // let listAllReviewProduct = await axios.get();
    // if (listAllReviewProduct) setListItemReview(listAllReviewProduct);
    // return listAllReviewProduct;
    let listAllReviewProduct = [
      {
        idProduct: "SP001",
        nameProduct: "T-shirt Cotton 1",
        price: "179000 VND",
        isSold: 1379,
        listImageProduct: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ],
        colors: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ],
        sizes: ["M", "L", "X", "XL", "2XL", "3XL"],
        quantityReview: 4,
        reviewItem: [
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 1",
            quantityStar: 4,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
            contentResponsed: {},
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 2",
            quantityStar: 5,
            date: "11/09/2023",
            isResponsed: true,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
            contentResponsed: {
              textResponse: "OK bạng. Cảm ơn bạn đã ủng hộ nha.",
              listImageResponse: [images.item_product, images.item_product],
            },
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 3",
            quantityStar: 4,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 4",
            quantityStar: 5,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
          },
        ],
      },
      {
        idProduct: "SP002",
        nameProduct: "T-shirt Cotton 2",
        price: "179000 VND",
        isSold: 1379,
        listImageProduct: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ],
        colors: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ],
        sizes: ["M", "L", "X", "XL", "2XL", "3XL"],
        quantityReview: 4,
        reviewItem: [
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 1",
            quantityStar: 4,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
            contentResponsed: {},
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 2",
            quantityStar: 5,
            date: "11/09/2023",
            isResponsed: true,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
            contentResponsed: {
              textResponse: "OK bạng. Cảm ơn bạn đã ủng hộ nha.",
              listImageResponse: [images.item_product, images.item_product],
            },
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 3",
            quantityStar: 4,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 4",
            quantityStar: 5,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
          },
        ],
      },
      {
        idProduct: "SP003",
        nameProduct: "T-shirt Cotton 3",
        price: "179000 VND",
        isSold: 1379,
        listImageProduct: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ],
        colors: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ],
        sizes: ["M", "L", "X", "XL", "2XL", "3XL"],
        quantityReview: 4,
        reviewItem: [
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 1",
            quantityStar: 4,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
            contentResponsed: {},
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 2",
            quantityStar: 5,
            date: "11/09/2023",
            isResponsed: true,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
            contentResponsed: {
              textResponse: "OK bạng. Cảm ơn bạn đã ủng hộ nha.",
              listImageResponse: [images.item_product, images.item_product],
            },
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 3",
            quantityStar: 4,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 4",
            quantityStar: 5,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
          },
        ],
      },
      {
        idProduct: "SP004",
        nameProduct: "T-shirt Cotton 4",
        price: "179000 VND",
        isSold: 1379,
        listImageProduct: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ],
        colors: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ],
        sizes: ["M", "L", "X", "XL", "2XL", "3XL"],
        quantityReview: 4,
        reviewItem: [
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 1",
            quantityStar: 4,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
            contentResponsed: {},
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 2",
            quantityStar: 5,
            date: "11/09/2023",
            isResponsed: true,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
            contentResponsed: {
              textResponse: "OK bạng. Cảm ơn bạn đã ủng hộ nha.",
              listImageResponse: [images.item_product, images.item_product],
            },
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 3",
            quantityStar: 4,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 4",
            quantityStar: 5,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
          },
        ],
      },
      {
        idProduct: "SP005",
        nameProduct: "T-shirt Cotton 5",
        price: "179000 VND",
        isSold: 1379,
        listImageProduct: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ],
        colors: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ],
        sizes: ["M", "L", "X", "XL", "2XL", "3XL"],
        quantityReview: 4,
        reviewItem: [
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 1",
            quantityStar: 4,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
            contentResponsed: {},
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 2",
            quantityStar: 5,
            date: "11/09/2023",
            isResponsed: true,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
            contentResponsed: {
              textResponse: "OK bạng. Cảm ơn bạn đã ủng hộ nha.",
              listImageResponse: [images.item_product, images.item_product],
            },
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 3",
            quantityStar: 4,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 4",
            quantityStar: 5,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
          },
        ],
      },
      {
        idProduct: "SP006",
        nameProduct: "T-shirt Cotton 6",
        price: "179000 VND",
        isSold: 1379,
        listImageProduct: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ],
        colors: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ],
        sizes: ["M", "L", "X", "XL", "2XL", "3XL"],
        quantityReview: 4,
        reviewItem: [
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 1",
            quantityStar: 4,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
            contentResponsed: {},
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 2",
            quantityStar: 5,
            date: "11/09/2023",
            isResponsed: true,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
            contentResponsed: {
              textResponse: "OK bạng. Cảm ơn bạn đã ủng hộ nha.",
              listImageResponse: [images.item_product, images.item_product],
            },
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 3",
            quantityStar: 4,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 4",
            quantityStar: 5,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
          },
        ],
      },
      {
        idProduct: "SP007",
        nameProduct: "T-shirt Cotton 7",
        price: "179000 VND",
        isSold: 1379,
        listImageProduct: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ],
        colors: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ],
        sizes: ["M", "L", "X", "XL", "2XL", "3XL"],
        quantityReview: 4,
        reviewItem: [
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 1",
            quantityStar: 4,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
            contentResponsed: {},
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 2",
            quantityStar: 5,
            date: "11/09/2023",
            isResponsed: true,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
            contentResponsed: {
              textResponse: "OK bạng. Cảm ơn bạn đã ủng hộ nha.",
              listImageResponse: [images.item_product, images.item_product],
            },
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 3",
            quantityStar: 4,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 4",
            quantityStar: 5,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
          },
        ],
      },
      {
        idProduct: "SP008",
        nameProduct: "T-shirt Cotton 8",
        price: "179000 VND",
        isSold: 1379,
        listImageProduct: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ],
        colors: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ],
        sizes: ["M", "L", "X", "XL", "2XL", "3XL"],
        quantityReview: 4,
        reviewItem: [
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 1",
            quantityStar: 4,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
            contentResponsed: {},
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 2",
            quantityStar: 5,
            date: "11/09/2023",
            isResponsed: true,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
            contentResponsed: {
              textResponse: "OK bạng. Cảm ơn bạn đã ủng hộ nha.",
              listImageResponse: [images.item_product, images.item_product],
            },
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 3",
            quantityStar: 4,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 4",
            quantityStar: 5,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
          },
        ],
      },
      {
        idProduct: "SP009",
        nameProduct: "T-shirt Cotton 9",
        price: "179000 VND",
        isSold: 1379,
        listImageProduct: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ],
        colors: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ],
        sizes: ["M", "L", "X", "XL", "2XL", "3XL"],
        quantityReview: 4,
        reviewItem: [
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 1",
            quantityStar: 4,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
            contentResponsed: {},
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 2",
            quantityStar: 5,
            date: "11/09/2023",
            isResponsed: true,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
            contentResponsed: {
              textResponse: "OK bạng. Cảm ơn bạn đã ủng hộ nha.",
              listImageResponse: [images.item_product, images.item_product],
            },
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 3",
            quantityStar: 4,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 4",
            quantityStar: 5,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
          },
        ],
      },
      {
        idProduct: "SP010",
        nameProduct: "T-shirt Cotton 10",
        price: "179000 VND",
        isSold: 1379,
        listImageProduct: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ],
        colors: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ],
        sizes: ["M", "L", "X", "XL", "2XL", "3XL"],
        quantityReview: 4,
        reviewItem: [
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 1",
            quantityStar: 4,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
            contentResponsed: {},
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 2",
            quantityStar: 5,
            date: "11/09/2023",
            isResponsed: true,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
            contentResponsed: {
              textResponse: "OK bạng. Cảm ơn bạn đã ủng hộ nha.",
              listImageResponse: [images.item_product, images.item_product],
            },
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 3",
            quantityStar: 4,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
          },
          {
            avatar: images.item_product,
            nameUser: "Phan Trọng Tính 4",
            quantityStar: 5,
            date: "11/09/2023",
            isResponsed: false,
            contentReview: {
              text: "Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm",
              listImageReview: [
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
                images.item_product,
              ],
            },
          },
        ],
      },
    ];

    setListItemReview(listAllReviewProduct);
  };

  useEffect(() => {
    getAllReviews();
  }, []);

  return (
    <div className={cx("container-reivew-detail")}>
      {/*Container Left */}
      <div className={cx("container-left")}>
        {/* Info Product */}
        <div className={cx("container-product")}>
          <div className={cx("product")}>
            <img
              className={cx("img-product")}
              src={images.item_product}
              alt="sp"
            />
            <div className={cx("info-product")}>
              <b className={cx("name-product")}>T-shirt Cotton 22GGC New</b>
              <ReactStars
                count={5}
                size={26}
                value={4.5}
                color1="#C4C4C4"
                color2="#ffb21d"
                edit={false}
                className={cx("star-product-first")}
              />
              <p className={cx("price-product")}>179.000 đ</p>
              <div className={cx("sold-product")}>
                <p>Đã bán: </p>
                <p className={cx("ms-3")}>1379</p>
              </div>
            </div>
          </div>
          {/* Colors */}
          <div className={cx("container-options")}>
            <p>Màu sắc: </p>
            <div className={cx("list-options")}>
              <img src={images.item_product} alt="black" />
              <img src={images.item_product} alt="black" />
              <img src={images.item_product} alt="black" />
              <img src={images.item_product} alt="black" />
              <img src={images.item_product} alt="black" />
              <img src={images.item_product} alt="black" />
              <img src={images.item_product} alt="black" />
            </div>
          </div>

          {/* Sizes */}
          <div className={cx("container-options")}>
            <p>Kích thước: </p>
            <div className={cx("list-options")}>
              <div>M</div>
              <div>L</div>
              <div>X</div>
              <div>XL</div>
              <div>2XL</div>
              <div>3XL</div>
              <div>4XL</div>
            </div>
          </div>
        </div>

        {/* Quantity star and review times */}
        <div className={cx("container-quantity")}>
          <h1>ĐÁNH GIÁ SẢN PHẨM</h1>
          <h1>4.5</h1>
          <ReactStars
            count={5}
            size={40}
            value={4.5}
            edit={false}
            color1="#C4C4C4"
            color2="#ffb21d"
            className={cx("star")}
          />
          <i className={cx("quantity")}>8 lượt đánh giá</i>
        </div>
      </div>
      {/* Container Right */}
      <div className={cx("container-right")}>
        {/* Comboboxs filter */}
        <div className={cx("container-cbb")}>
          <select>
            <option selected>Đánh giá</option>
            <option value="1">1 sao</option>
            <option value="2">2 sao</option>
            <option value="3">3 sao</option>
            <option value="4">4 sao</option>
            <option value="5">5 sao</option>
          </select>

          <select>
            <option selected>Ảnh</option>
            <option value="1">Có ảnh</option>
            <option value="2">Không có ảnh</option>
          </select>

          <select>
            <option selected>Phản hồi</option>
            <option value="1">Đã phản hồi</option>
            <option value="2">Chưa phản hồi</option>
          </select>
        </div>
        {/* List Reivew */}
        <div className={cx("container-content")}>
          {listItemReview.map((item, index) => {
            return (
              <ItemReview
                avt={images.item_product}
                name="Phan Trọng Tính"
                quantityStar={4.5}
                imageReview={images.item_product}
                contentReview="Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm"
                dateReview="19/10/2023"
                imageResponse={images.item_product}
                contentResponse="Anh đánh giá cao độ biết điều của em !!!"
                dateResponse="20/10/2023"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailReview;
