import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Feedbacks.module.scss";
import icons from "~/assets/icons";
import images from "~/assets/images";
import ItemFeedback from "~/components/ItemFeeback";
import FeedbackDetail from "./FeedbackDetail";
const cx = classNames.bind(styles);

function Feedbacks() {

  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }

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
              <ItemFeedback 
                avt={images.item_product}
                title="Title nha"
                email="email@gmail.com"
                date="11/09/2023"
                status="Chưa phản hồi"
                open={handleOpen}
              />
            </li>

            <li>
              <ItemFeedback 
                avt={images.item_product}
                title="Title nha"
                email="email@gmail.com"
                date="11/09/2023"
                status="Chưa phản hồi"
                open={handleOpen}
              />
            </li>

            <li>
              <ItemFeedback 
                avt={images.item_product}
                title="Title nha"
                email="email@gmail.com"
                date="11/09/2023"
                status="Chưa phản hồi"
                open={handleOpen}
              />
            </li>

            <li>
              <ItemFeedback 
                avt={images.item_product}
                title="Title nha"
                email="email@gmail.com"
                date="11/09/2023"
                status="Chưa phản hồi"
                open={handleOpen}
              />
            </li>

            <li>
              <ItemFeedback 
                avt={images.item_product}
                title="Title nha"
                email="email@gmail.com"
                date="11/09/2023"
                status="Chưa phản hồi"
                open={handleOpen}
              />
            </li>

            <li>
              <ItemFeedback 
                avt={images.item_product}
                title="Title nha"
                email="email@gmail.com"
                date="11/09/2023"
                status="Chưa phản hồi"
                open={handleOpen}
              />
            </li>

            <li>
              <ItemFeedback 
                avt={images.item_product}
                title="Title nha"
                email="email@gmail.com"
                date="11/09/2023"
                status="Chưa phản hồi"
                open={handleOpen}
              />
            </li>

            <li>
              <ItemFeedback 
                avt={images.item_product}
                title="Title nha"
                email="email@gmail.com"
                date="11/09/2023"
                status="Chưa phản hồi"
                open={handleOpen}
              />
            </li>

            <li>
              <ItemFeedback 
                avt={images.item_product}
                title="Title nha"
                email="email@gmail.com"
                date="11/09/2023"
                status="Chưa phản hồi"
                open={handleOpen}
              />
            </li>

            <li>
              <ItemFeedback 
                avt={images.item_product}
                title="Title nha"
                email="email@gmail.com"
                date="11/09/2023"
                status="Chưa phản hồi"
                open={handleOpen}
              />
            </li>

            <li>
              <ItemFeedback 
                avt={images.item_product}
                title="Title nha"
                email="email@gmail.com"
                date="11/09/2023"
                status="Chưa phản hồi"
                open={handleOpen}
              />
            </li>

            
          </ul>
        </div>

        <span className={cx("quantity-item")}>Kết quả: <span>6</span></span>
      </div>
      {isOpen && (
        <FeedbackDetail close={handleClose}/>
      )}
    </div>
  );
}

export default Feedbacks;
