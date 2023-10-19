import React from "react";
import classNames from "classnames/bind";
import styles from "./ItemReview.module.scss";
import ReactStars from "react-stars";
import ModalResponse from "~/pages/admin/Reviews/DetailReview/ModalResponse";
import { useState } from "react";

const cx = classNames.bind(styles);

function ItemReview(props) {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }

  return (
    
    <div className={cx("mt-4 p-5", "container-item")}>
      {isOpen && <ModalResponse close={handleClose} />}
      <div className={cx("name-star")}>
        <img className={cx("avt")} src={props.avt} alt="avt" />
        <b className={cx("ms-4")}>{props.name}</b>
        <ReactStars
          count={5}
          size={26}
          value={props.quantityStar}
          color1="#C4C4C4"
          color2="#ffb21d"
          edit={false}
          className={cx("star-product")}
        />
      </div>

      <div className={cx("container-rieview")}>
        <div className={cx("container-images")}>
          <div className={cx("images-list")}>
            <img
              className={cx("image")}
              src={props.imageReview}
              alt="imgReview"
            />
          </div>
          <span className={cx("message-review")}>{props.contentReview}</span>
        </div>

        <button type="button" className={cx("btn-res")} onClick={handleOpen}>
          Phản hồi
        </button>

        <i className={cx("text-date")}>{props.dateReview}</i>

        {/* <div className={cx("container-reply")}>
          <div className={cx("container-res")}>
            <div className={cx("images-list")}>
              <img
                className={cx("image")}
                src={props.imageResponse}
                alt="imgRes"
              />
            </div>
            <span className={cx("message-review")}>
              {props.contentResponse}
            </span>
          </div>
          <i className={cx("text-date")}>{props.dateResponse}</i>
        </div> */}
      </div>
    </div>
  );
}

export default ItemReview;
