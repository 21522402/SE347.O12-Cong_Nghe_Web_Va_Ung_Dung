import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import Select from 'react-select';
import styles from "./Feedbacks.module.scss";
import icons from "~/assets/icons";
import { item_product } from "~/assets/images";
import FeedbackDetail from "./FeedbackDetail";
import { FaCaretDown } from "react-icons/fa6";
import ItemFeedback from "~/components/ItemFeedback";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Feedbacks() {
  const cbb = [
    { value: 'All', label: 'Tất cả' },
    { value: 'Responsed', label: 'Đã phản hồi' },
    { value: 'UnResponsed', label: 'Chưa phản hồi' }
  ]
  const inputDayFilter = useRef(null);
  const [selectDay, setSelectDay] = useState("Chọn ngày");
  const [listItemFeedback, setListItemFeedback] = useState([]);
  const getAllFeedbacks = async () => {
    // let listAllFeedback = await axios.get();
    // if (listAllFeedback) setListItemFeedback(listAllFeedback);
    // return listAllFeedback;

    let listAllFeedback = [
      {
        avt: item_product,
        title: "Title của feedback nè anh Tính ... 1",
        email: "user1@gmail.com",
        date: "11/09/2023",
        isRespon: true,
        contentResponsed: {
          text: "OK bạn. Bạn cút đi",
          listImage: [
            item_product,
            item_product,
            item_product,
            item_product,
          ],
        },
        contentFeedback: {
          text: "Tôi có đặt đơn hàng là một chiếc áo thun loại CoolXstra New màu đen size XL hôm 27/8/2023 và theo thông tin ghi trên hệ thống website thì sau 3 ngày sẽ nhận được hàng, nhưng hôm nay đã là ngày thứ tư nhưng tôi vẫn chưa nhận được hàng. Cảm ơn shop !",
          listImage: [
            item_product,
            item_product,
            item_product,
            item_product,
          ],
        },
      },
      {
        avt: item_product,
        title: "Title của feedback nè anh Tính ...2",
        email: "user2@gmail.com",
        date: "11/09/2023",
        isRespon: true,
        contentResponsed: {
          text: "OK bạn. Bạn cút đi",
          listImage: [
            item_product,
            item_product,
            item_product,
            item_product,
          ],
        },
        contentFeedback: {
          text: "Tôi có đặt đơn hàng là một chiếc áo thun loại CoolXstra New màu đen size XL hôm 27/8/2023 và theo thông tin ghi trên hệ thống website thì sau 3 ngày sẽ nhận được hàng, nhưng hôm nay đã là ngày thứ tư nhưng tôi vẫn chưa nhận được hàng. Cảm ơn shop !",
          listImage: [
            item_product,
            item_product,
            item_product,
            item_product,
          ],
        },
      },
      {
        avt: item_product,
        title: "Title của feedback nè anh Tính ... 3",
        email: "user3@gmail.com",
        date: "11/09/2023",
        isRespon: false,
        contentResponsed: {},
        contentFeedback: {
          text: "Tôi có đặt đơn hàng là một chiếc áo thun loại CoolXstra New màu đen size XL hôm 27/8/2023 và theo thông tin ghi trên hệ thống website thì sau 3 ngày sẽ nhận được hàng, nhưng hôm nay đã là ngày thứ tư nhưng tôi vẫn chưa nhận được hàng. Cảm ơn shop !",
          listImage: [
            item_product,
            item_product,
            item_product,
            item_product,
          ],
        },
      },
      {
        avt: item_product,
        title: "Title của feedback nè anh Tính ... 4",
        email: "user4@gmail.com",
        date: "11/09/2023",
        isRespon: false,
        contentResponsed: {},
        contentFeedback: {
          text: "Tôi có đặt đơn hàng là một chiếc áo thun loại CoolXstra New màu đen size XL hôm 27/8/2023 và theo thông tin ghi trên hệ thống website thì sau 3 ngày sẽ nhận được hàng, nhưng hôm nay đã là ngày thứ tư nhưng tôi vẫn chưa nhận được hàng. Cảm ơn shop !",
          listImage: [
            item_product,
            item_product,
            item_product,
            item_product,
          ],
        },
      },
      {
        avt: item_product,
        title: "Title của feedback nè anh Tính ... 5",
        email: "user5@gmail.com",
        date: "11/09/2023",
        isRespon: true,
        contentResponsed: {
          text: "OK bạn. Bạn cút đi",
          listImage: [
            item_product,
            item_product,
            item_product,
            item_product,
          ],
        },
        contentFeedback: {
          text: "Tôi có đặt đơn hàng là một chiếc áo thun loại CoolXstra New màu đen size XL hôm 27/8/2023 và theo thông tin ghi trên hệ thống website thì sau 3 ngày sẽ nhận được hàng, nhưng hôm nay đã là ngày thứ tư nhưng tôi vẫn chưa nhận được hàng. Cảm ơn shop !",
          listImage: [
            item_product,
            item_product,
            item_product,
            item_product,
          ],
        },
      },
      {
        avt: item_product,
        title: "Title của feedback nè anh Tính ... 6",
        email: "user6@gmail.com",
        date: "11/09/2023",
        isRespon: false,
        contentResponsed: {},
        contentFeedback: {
          text: "Tôi có đặt đơn hàng là một chiếc áo thun loại CoolXstra New màu đen size XL hôm 27/8/2023 và theo thông tin ghi trên hệ thống website thì sau 3 ngày sẽ nhận được hàng, nhưng hôm nay đã là ngày thứ tư nhưng tôi vẫn chưa nhận được hàng. Cảm ơn shop !",
          listImage: [
            item_product,
            item_product,
            item_product,
            item_product,
          ],
        },
      },
      {
        avt: item_product,
        title: "Title của feedback nè anh Tính ... 7",
        email: "user7@gmail.com",
        date: "11/09/2023",
        isRespon: false,
        contentResponsed: {},
        contentFeedback: {
          text: "Tôi có đặt đơn hàng là một chiếc áo thun loại CoolXstra New màu đen size XL hôm 27/8/2023 và theo thông tin ghi trên hệ thống website thì sau 3 ngày sẽ nhận được hàng, nhưng hôm nay đã là ngày thứ tư nhưng tôi vẫn chưa nhận được hàng. Cảm ơn shop !",
          listImage: [
            item_product,
            item_product,
            item_product,
            item_product,
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

  return (
    <div className={cx('wrapper')} style={{ fontSize: '14px' }}>
      <div className={cx('top-navbar')}>
      </div>
      {/* {isOpen && (
            <FeedbackDetail
              close={handleClose}
              itemFeedbackActive={itemFeedbackActive}
              send={handleSendFeeback}
            />
          )} */}
      <div className={cx('container')}>
        <div>
          <h1>Manage Feedbacks!</h1>
          <div style={{ color: '#05CD99' }}>Lalitpur Branch</div>
        </div>
        <div className={cx('content')}>
          <div className={cx('header-content')}>
            <div style={{ display: 'flex' }}>
              <form className={cx('search-field')}>
                <BiSearch fontSize={20} style={{ position: 'absolute', top: '0', left: 0, marginTop: '20px', marginLeft: '18px' }} />
                <input type='text' name='searchField' id='searchField' className={cx('search-input')} placeholder='Tìm kiếm' />
              </form>
              <Select options={cbb}
                defaultValue={cbb[0]}
                className={cx('combobox')} />
            </div>
          </div>
          <div style={{ padding: '10px 32px 40px', width: '100%', minHeight: '620px' }}>
            <table style={{ width: '100%', borderRadius: '10px', borderColor: 'transparent', border: 'none', position: 'relative' }}>
              <thead style={{ width: '100%', borderRadius: '10px', borderColor: 'transparent', border: 'none', }} >
                <tr style={{ width: '100%', backgroundColor: '#a4c4e9', color: 'black', borderRadius: '10px' }}>
                  <th className={cx('col-tbl')} style={{ paddingLeft: '20px' }}>Feedback</th>
                  <th className={cx('col-tbl')}>Tình trạng</th>
                  <th className={cx('col-tbl')} style={{ paddingLeft: '20px' }}>Tác vụ</th>
                </tr>
              </thead>
              <tbody >
                {listItemFeedback.map((item, index) => {
                  return (
                    <React.Fragment >
                      <ItemFeedback
                        key={index}
                        item={item}
                        setFunction={setListItemFeedback}
                        // open={() => handleOpen(index, item)}
                      />
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div style={{ display: 'flex', padding: '0 32px 20px', justifyContent: 'space-between' }}>
            <div>Showing: <span>10</span> of 53 entries</div>
            <nav >
              <ul className={cx('pagination')} >
                <li className={cx('page-item')}>
                  <Link href='#'
                    className={cx('page-link')}>Prev</Link>
                </li>
                {
                  [1, 2, 3].map((item, index) => (
                    <li key={index} className={cx(`page-item`, { 'active': 1 === item })}>
                      <Link href='#'
                        className={cx('page-link')}>{item}</Link>
                    </li>
                  ))
                }
                <li className={cx('page-item')}>
                  <Link href='#'
                    className={cx('page-link')}>Next</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <footer className={cx("sticky-footer")} style={{ zIndex: 10 }}>
        <div className={cx("container")}>
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2023</span>
          </div>
        </div>
      </footer>
      
    </div>
  );
}

export default Feedbacks;