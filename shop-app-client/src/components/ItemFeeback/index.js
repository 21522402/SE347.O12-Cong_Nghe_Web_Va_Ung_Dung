import React from "react";
import classNames from "classnames/bind";
import styles from "./ItemFeedback.module.scss";

const cx = classNames.bind(styles);

function ItemFeedback(props) {
  return (
    <div className={cx("item-list")}>
      <img className={cx("item-avt")} src={props.avt} alt="img" />
      <div className={cx("item-info")}>
        <span className={cx("item-title")}>{props.title}</span>
        <span className={cx("item-email")}>{props.email}</span>
        <span className={cx("item-date")}>{props.date}</span>
      </div>
      <span className={cx("item-status")}>{props.status}</span>
      <button className={cx("item-button")} type="button" onClick={props.open}>
        Xem chi tiết
      </button>
    </div>
  );
}

export default ItemFeedback;
