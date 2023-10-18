import React from "react";
import classNames from "classnames/bind";
import styles from "./DetailReview.module.scss";
import image from "~/assets/images";
import ReactStars from "react-stars";

const cx = classNames.bind(styles);
function DetailReview() {
  return (
    <div className={cx("container-reivew-detail")}>
      {/*Container Left */}
      <div className={cx("container-left")}>
        {/* Info Product */}
        <div className={cx("container-product")}>
          <div className={cx("product")}>
            <img
              className={cx("img-product")}
              src={image.item_product}
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
                className={cx("star-product")}
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
              <div className={cx("bg-black")}></div>
              <div></div>
              <div className={cx("bg-primary")}></div>
              <div className={cx("bg-secondary")}></div>
              <div className={cx("bg-info")}></div>
              <div className={cx("bg-success")}></div>
              <div className={cx("bg-warning")}></div>
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
        <div className={cx("container-content")}>Nội dung đánh giá</div>
      </div>

    </div>
  );
}

export default DetailReview;
