import React from "react";
import classNames from "classnames/bind";
import styles from "./Feedbacks.module.scss";
import icons from "~/assets/icons";
import images from "~/assets/images";
const cx = classNames.bind(styles);

function Feedbacks() {
  return (
    <div className={cx("container-feedback")}>
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

        <input type="date" className={cx("day-fillter")} name="day-filter" />
      </div>

      <div className={cx("container-list")}>
        <div className={cx("header-list")}>
          DANH SÁCH PHẢN HỒI
        </div>
        <div className={cx("body-list")}>
          <ul>
            <li>
              <div className={cx("item-list")}>
                <img className={cx("item-avt")} src={images.item_product} alt="img"/>
                <div className={cx("item-info")}>
                  <span className={cx("item-title")}>CHO TÔI XIN THÔNG TIN LIÊN LẠC VỚI BỘ PHẬN GIAO HÀNG CỦA ĐƠN HÀNG WPAODER</span>
                  <span className={cx("item-email")}>email@gmail.com</span>
                  <span className={cx("item-date")}>11/09/2023</span>
                </div>
                <span className={cx("item-status")}>Đã phản hồi</span>
                <button className={cx("item-button")} type="button">Xem chi tiết</button>
              </div>
            </li>

            <li>
              <div className={cx("item-list")}>
                <img className={cx("item-avt")} src={images.item_product} alt="img"/>
                <div className={cx("item-info")}>
                  <span className={cx("item-title")}>Title</span>
                  <span className={cx("item-email")}>email@gmail.com</span>
                  <span className={cx("item-date")}>11/09/2023</span>
                </div>
                <span className={cx("item-status-red")}>Chưa phản hồi</span>
                <button className={cx("item-button")} type="button">Xem chi tiết</button>
              </div>
            </li>

            <li>
              <div className={cx("item-list")}>
                <img className={cx("item-avt")} src={images.item_product} alt="img"/>
                <div className={cx("item-info")}>
                  <span className={cx("item-title")}>Title</span>
                  <span className={cx("item-email")}>email@gmail.com</span>
                  <span className={cx("item-date")}>11/09/2023</span>
                </div>
                <span className={cx("item-status")}>Đã phản hồi</span>
                <button className={cx("item-button")} type="button">Xem chi tiết</button>
              </div>
            </li>

            <li>
              <div className={cx("item-list")}>
                <img className={cx("item-avt")} src={images.item_product} alt="img"/>
                <div className={cx("item-info")}>
                  <span className={cx("item-title")}>Title</span>
                  <span className={cx("item-email")}>email@gmail.com</span>
                  <span className={cx("item-date")}>11/09/2023</span>
                </div>
                <span className={cx("item-status")}>Đã phản hồi</span>
                <button className={cx("item-button")} type="button">Xem chi tiết</button>
              </div>
            </li>

            <li>
              <div className={cx("item-list")}>
                <img className={cx("item-avt")} src={images.item_product} alt="img"/>
                <div className={cx("item-info")}>
                  <span className={cx("item-title")}>Title</span>
                  <span className={cx("item-email")}>email@gmail.com</span>
                  <span className={cx("item-date")}>11/09/2023</span>
                </div>
                <span className={cx("item-status")}>Đã phản hồi</span>
                <button className={cx("item-button")} type="button">Xem chi tiết</button>
              </div>
            </li>

            <li>
              <div className={cx("item-list")}>
                <img className={cx("item-avt")} src={images.item_product} alt="img"/>
                <div className={cx("item-info")}>
                  <span className={cx("item-title")}>Title</span>
                  <span className={cx("item-email")}>email@gmail.com</span>
                  <span className={cx("item-date")}>11/09/2023</span>
                </div>
                <span className={cx("item-status")}>Đã phản hồi</span>
                <button className={cx("item-button")} type="button">Xem chi tiết</button>
              </div>
            </li>

            <li>
              <div className={cx("item-list")}>
                <img className={cx("item-avt")} src={images.item_product} alt="img"/>
                <div className={cx("item-info")}>
                  <span className={cx("item-title")}>Title</span>
                  <span className={cx("item-email")}>email@gmail.com</span>
                  <span className={cx("item-date")}>11/09/2023</span>
                </div>
                <span className={cx("item-status")}>Đã phản hồi</span>
                <button className={cx("item-button")} type="button">Xem chi tiết</button>
              </div>
            </li>
          </ul>
        </div>

        <span className={cx("quantity-item")}>Kết quả: <span>6</span></span>
      </div>
      
    </div>
  );
}

export default Feedbacks;
