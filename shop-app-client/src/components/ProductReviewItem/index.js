import React from "react";
import classNames from "classnames/bind";
import styles from "./ProductReviewItem.module.scss";


const cx = classNames.bind(styles);

function ProductReview({name, id, img}) {
  return (
    <div className={cx("item-list")}>
      <div className={cx("item-product")}>
        <img
          className={cx("item-img")}
          src={img[0]}
          alt="product"
        />
        <p className={cx("item-name")}>{name}</p>
      </div>
      <div className={cx("item-hover")}>
        <button className={cx("item-button", "display_button")} type="button">
          <a href={`/admin/reviews/${id}/detail`}>Xem chi tiết đánh giá</a>
        </button>
      </div>
    </div>
  );
}

export default ProductReview;
