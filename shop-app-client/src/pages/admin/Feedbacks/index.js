import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Feedbacks.module.scss";
import icons from "~/assets/icons";
import images from "~/assets/images";
import ItemFeedback from "~/components/ItemFeeback";
import FeedbackDetail from "./FeedbackDetail";
import { FaCaretDown } from "react-icons/fa6";

const cx = classNames.bind(styles);

function Feedbacks() {
  const [isOpen, setIsOpen] = useState(false);
  const inputDayFilter = useRef(null);
  const [selectDay, setSelectDay] = useState("Chọn ngày");
  const [listItemFeedback, setListItemFeedback] = useState([]);
  const getAllFeedbacks = async () => {
    // let listAllFeedback = await axios.get();
    // if (listAllFeedback) setListItemFeedback(listAllFeedback);
    // return listAllFeedback;

    let listAllFeedback = [
      {
        avt: images.item_product,
        title: "Title của feedback nè anh Tính ... 1",
        email: "user1@gmail.com",
        date: "11/09/2023",
        isRespon: true,
        contentResponsed: {
          text: "OK bạn. Bạn cút đi",
          listImage: [
            images.item_product,
            images.item_product,
            images.item_product,
            images.item_product,
          ],
        },
        contentFeedback: {
          text: "Tôi có đặt đơn hàng là một chiếc áo thun loại CoolXstra New màu đen size XL hôm 27/8/2023 và theo thông tin ghi trên hệ thống website thì sau 3 ngày sẽ nhận được hàng, nhưng hôm nay đã là ngày thứ tư nhưng tôi vẫn chưa nhận được hàng. Cảm ơn shop !",
          listImage: [
            images.item_product,
            images.item_product,
            images.item_product,
            images.item_product,
          ],
        },
      },
      {
        avt: images.item_product,
        title: "Title của feedback nè anh Tính ...2",
        email: "user2@gmail.com",
        date: "11/09/2023",
        isRespon: true,
        contentResponsed: {
          text: "OK bạn. Bạn cút đi",
          listImage: [
            images.item_product,
            images.item_product,
            images.item_product,
            images.item_product,
          ],
        },
        contentFeedback: {
          text: "Tôi có đặt đơn hàng là một chiếc áo thun loại CoolXstra New màu đen size XL hôm 27/8/2023 và theo thông tin ghi trên hệ thống website thì sau 3 ngày sẽ nhận được hàng, nhưng hôm nay đã là ngày thứ tư nhưng tôi vẫn chưa nhận được hàng. Cảm ơn shop !",
          listImage: [
            images.item_product,
            images.item_product,
            images.item_product,
            images.item_product,
          ],
        },
      },
      {
        avt: images.item_product,
        title: "Title của feedback nè anh Tính ... 3",
        email: "user3@gmail.com",
        date: "11/09/2023",
        isRespon: false,
        contentResponsed: {},
        contentFeedback: {
          text: "Tôi có đặt đơn hàng là một chiếc áo thun loại CoolXstra New màu đen size XL hôm 27/8/2023 và theo thông tin ghi trên hệ thống website thì sau 3 ngày sẽ nhận được hàng, nhưng hôm nay đã là ngày thứ tư nhưng tôi vẫn chưa nhận được hàng. Cảm ơn shop !",
          listImage: [
            images.item_product,
            images.item_product,
            images.item_product,
            images.item_product,
          ],
        },
      },
      {
        avt: images.item_product,
        title: "Title của feedback nè anh Tính ... 4",
        email: "user4@gmail.com",
        date: "11/09/2023",
        isRespon: false,
        contentResponsed: {},
        contentFeedback: {
          text: "Tôi có đặt đơn hàng là một chiếc áo thun loại CoolXstra New màu đen size XL hôm 27/8/2023 và theo thông tin ghi trên hệ thống website thì sau 3 ngày sẽ nhận được hàng, nhưng hôm nay đã là ngày thứ tư nhưng tôi vẫn chưa nhận được hàng. Cảm ơn shop !",
          listImage: [
            images.item_product,
            images.item_product,
            images.item_product,
            images.item_product,
          ],
        },
      },
      {
        avt: images.item_product,
        title: "Title của feedback nè anh Tính ... 5",
        email: "user5@gmail.com",
        date: "11/09/2023",
        isRespon: true,
        contentResponsed: {
          text: "OK bạn. Bạn cút đi",
          listImage: [
            images.item_product,
            images.item_product,
            images.item_product,
            images.item_product,
          ],
        },
        contentFeedback: {
          text: "Tôi có đặt đơn hàng là một chiếc áo thun loại CoolXstra New màu đen size XL hôm 27/8/2023 và theo thông tin ghi trên hệ thống website thì sau 3 ngày sẽ nhận được hàng, nhưng hôm nay đã là ngày thứ tư nhưng tôi vẫn chưa nhận được hàng. Cảm ơn shop !",
          listImage: [
            images.item_product,
            images.item_product,
            images.item_product,
            images.item_product,
          ],
        },
      },
      {
        avt: images.item_product,
        title: "Title của feedback nè anh Tính ... 6",
        email: "user6@gmail.com",
        date: "11/09/2023",
        isRespon: false,
        contentResponsed: {},
        contentFeedback: {
          text: "Tôi có đặt đơn hàng là một chiếc áo thun loại CoolXstra New màu đen size XL hôm 27/8/2023 và theo thông tin ghi trên hệ thống website thì sau 3 ngày sẽ nhận được hàng, nhưng hôm nay đã là ngày thứ tư nhưng tôi vẫn chưa nhận được hàng. Cảm ơn shop !",
          listImage: [
            images.item_product,
            images.item_product,
            images.item_product,
            images.item_product,
          ],
        },
      },
      {
        avt: images.item_product,
        title: "Title của feedback nè anh Tính ... 7",
        email: "user7@gmail.com",
        date: "11/09/2023",
        isRespon: false,
        contentResponsed: {},
        contentFeedback: {
          text: "Tôi có đặt đơn hàng là một chiếc áo thun loại CoolXstra New màu đen size XL hôm 27/8/2023 và theo thông tin ghi trên hệ thống website thì sau 3 ngày sẽ nhận được hàng, nhưng hôm nay đã là ngày thứ tư nhưng tôi vẫn chưa nhận được hàng. Cảm ơn shop !",
          listImage: [
            images.item_product,
            images.item_product,
            images.item_product,
            images.item_product,
          ],
        },
      },
    ];
    setListItemFeedback(listAllFeedback);
  };

  useEffect(() => {
    getAllFeedbacks();
  }, []);

  const [itemFeedbackActive, setItemFeedbackActive] = useState({});

  const handleSendFeeback = (item) => {
    
    setListItemFeedback((prev) => {
      const nextState = [...prev].map((itemFeedback, index) => {
        if (index === item.index) {
          return item;
        } else return itemFeedback;
      });
      return nextState;
    });
  };

  const haldeFilterDate = (e) => {
    let value = e.target.value;
    if (!value) {
      setSelectDay("Chọn ngày");
      return;
    }

    const tmpArr = value.split("-");
    let date = []; 
    for (let i = tmpArr.length - 1; i >= 0; i--) date = [...date, tmpArr[i]];
    const res = date.join("/");
    setSelectDay(res);
  };

  function handleOpen(index, item) {
    setItemFeedbackActive({ ...item, index: index });
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

        <div
          className={cx("day_filter")}
          onClick={() => {
            inputDayFilter.current?.showPicker();
          }}
        >
          <span>{selectDay}</span>
          <FaCaretDown />
          <input
            style={{
              opacity: "0",
              position: "absolute",
              margin: "18px 60px -10px 0",
            }}
            ref={inputDayFilter}
            type="date"
            name="day-filter"
            data-date-format="DD/MMMM/YYYY"
            onChange={haldeFilterDate}
          />
        </div>
      </div>

      <div className={cx("container-list")}>
        <div className={cx("header-list")}>DANH SÁCH PHẢN HỒI</div>
        <div className={cx("body-list")}>
          <ul>
            {listItemFeedback.map((item, index) => {
              return (
                <li>
                  <ItemFeedback
                    key={index}
                    avt={item.avt}
                    title={item.title}
                    email={item.email}
                    date={item.date}
                    isRespon={item.isRespon}
                    open={() => handleOpen(index, item)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <span className={cx("quantity-item")}>
        Kết quả: <span>6</span>
      </span>

      {isOpen && (
        <FeedbackDetail
          close={handleClose}
          itemFeedbackActive={itemFeedbackActive}
          send={handleSendFeeback}
        />
      )}
    </div>
  );
}

export default Feedbacks;
