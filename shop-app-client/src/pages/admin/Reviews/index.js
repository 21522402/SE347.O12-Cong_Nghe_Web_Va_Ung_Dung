import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Reviews.module.scss";
import icons from "~/assets/icons";
import images from "~/assets/images";
import ProductReviewItem from "~/components/ProductReviewItem";

const cx = classNames.bind(styles);

function Reviews() {

  const [listAllItemReview, setListAllItemReview] = useState([]);
  const getAllReviews = async () => {
    // let listAllReviewProduct = await axios.get();
    // if (listAllReviewProduct) setListItemReview(listAllReviewProduct);
    // return listAllReviewProduct;
    let listAllReviewProduct = [
      {
        idProduct: 'SP001',
        nameProduct: "T-shirt Cotton 1",
        listImageProduct: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ],
      },
      {
        idProduct: 'SP002',
        nameProduct: "T-shirt Cotton 2",
        listImageProduct: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ]
      },
      {
        idProduct: 'SP003',
        nameProduct: "T-shirt Cotton 3",
        listImageProduct: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ]
      },
      {
        idProduct: 'SP004',
        nameProduct: "T-shirt Cotton 4",
        listImageProduct: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ]
      },
      {
        idProduct: 'SP005',
        nameProduct: "T-shirt Cotton 5",
        listImageProduct: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ]
      },
      {
        idProduct: 'SP006',
        nameProduct: "T-shirt Cotton 6",
        listImageProduct: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ]
      },
      {
        idProduct: 'SP007',
        nameProduct: "T-shirt Cotton 7",
        listImageProduct: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ]
      },
      {
        idProduct: 'SP008',
        nameProduct: "T-shirt Cotton 8",
        listImageProduct: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ]
      },
      {
        idProduct: 'SP009',
        nameProduct: "T-shirt Cotton 9",
        listImageProduct: [
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
          images.item_product,
        ]
      },
    ];

    setListAllItemReview(listAllReviewProduct);
  };

  useEffect(() => {
    getAllReviews();
  }, []);


  return (
    <div className={cx("container-reivews")}>
      <div className={cx("container-search")}>
        <input
          className={cx("search-input")}
          type="text"
          name="search"
          placeholder="Enter to search"
        />
        <button className={cx("search-button")} type="button">
          <img className={cx("search-icon")} src={icons.search} alt="search" />
        </button>
      </div>

      <div className={cx("container-list", "row")}>
        {listAllItemReview.map((item, index) => {
          return (
            <ProductReviewItem
              key={index}
              id={item.idProduct}
              img={item.listImageProduct}
              name={item.nameProduct}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Reviews;
