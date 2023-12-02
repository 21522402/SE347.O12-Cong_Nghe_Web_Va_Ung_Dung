import React from "react";
import classNames from "classnames/bind";
import styles from "./ProductReviewItem.module.scss";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-stars";

const cx = classNames.bind(styles);

function ProductReview({ item, numberReview}) {
  const navigate = useNavigate();
  const handleNavReviewProduct = ()=>{
    navigate(`/admin/reviews/${item.orderItem.productId._id}/detail`, {state:item})
  }
  return (
    <div onClick={handleNavReviewProduct}  className={cx("item-list")}>
      <div className={cx("item-product")}>
        <img
          className={cx("item-img")}
          src={item.orderItem.image}
          alt="product"
        />
        <div className={cx("item-name")}>{item.orderItem.productName}</div>
        <div className={cx("item-price")}>{item.orderItem.price} đ</div>
        <div >
          <div style={{padding:'0 10px'}}>
            <ReactStars
              count={5}
              size={10}
              value={4}
              edit={false}
              color1="#C4C4C4"
              color2="#ffb21d"
            />
          </div>
          <div style={{padding:'0 10px'}}>Number of reviews: {numberReview}</div>
        </div>

      </div>
      <div className={cx("item-hover")}>
        <button className={cx("item-button", "display_button")} type="button">
          Click để xem chi tiết đánh giá
        </button>
      </div>
    </div>
  );
}

export default ProductReview;