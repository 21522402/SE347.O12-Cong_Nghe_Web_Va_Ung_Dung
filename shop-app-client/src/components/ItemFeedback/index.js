import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ItemFeedback.module.scss";
import FeedbackDetail from "~/pages/admin/Feedbacks/FeedbackDetail";

const cx = classNames.bind(styles);

function ItemFeedback({ item , setFunction}) {
  const [openDetail, setOpenDetail] = useState(false);
  const handleClickFeedbackItem = () => {
    setOpenDetail(prev => !prev);
  }
  const handleSendFeeback = (item) => {
    setFunction((prev) => {
      const nextState = [...prev].map((itemFeedback, index) => {
        if (index === item.index) {
          return item;
        } else return itemFeedback;
      });
      return nextState;
    });
  };
  return (
    <>
      <tr className={cx('row-item')}>
        <td style={{ display: 'flex' }}>
          <img className={cx("item-avt")} src={item.avt} alt="img" />
          <div className={cx("item-info")}>
            <span className={cx("item-title")}>{item.title}</span>
            <span className={cx("item-email")}>{item.email}</span>
            <span className={cx("item-date")}>{item.date}</span>
          </div>
        </td>
        <td className={cx(item.isRespon ? "item-status" : "item-status-red")}>{item.isRespon ? "Đã phản hồi" : "Chưa phản hồi"}</td>
        <td style={{ width: '15%' }}>
          {
            openDetail ?
              <button onClick={handleClickFeedbackItem} className={cx("item-button")} type="button" >
                Đóng
              </button>
              :
              <button onClick={handleClickFeedbackItem} className={cx("item-button")} type="button" >
                Xem chi tiết
              </button>
          }

        </td>
      </tr>

      {
        openDetail &&
        <tr className={cx('feedback-detail')}>
          <td colSpan={3} style={{ padding: '0' }}>
            <FeedbackDetail
              itemFeedbackActive={item}
              send={handleSendFeeback} />
          </td>
        </tr>
      }
    </>
  );
}

export default ItemFeedback;