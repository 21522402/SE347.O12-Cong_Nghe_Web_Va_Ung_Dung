import React from "react";
import classNames from "classnames/bind";
import styles from "./ContentItemFeedback.module.scss";

const cx = classNames.bind(styles);

function ContentItemFeedback({contentFeedback}) {
  const {text, listImage} = contentFeedback;
  return (
    <div className={cx("container-rieview")}>
      <i className={cx("title-review")}>*** Nội dung feedback ***</i>
      <div className={cx("container-images")}>
        {listImage.map((item, index) => {
          return (
            <div className={cx("images-list")} key={index}>
              <img className={cx("image")} src={item} alt="img" />
            </div>
          );
        })}

        <span className={cx("message-review")}>{text}</span>
      </div>
    </div>
  );
}

export default ContentItemFeedback;