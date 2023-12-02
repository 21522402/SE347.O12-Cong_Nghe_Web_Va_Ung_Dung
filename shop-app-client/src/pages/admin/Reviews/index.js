import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Reviews.module.scss";
import ProductReviewItem from "~/components/ProductReviewItem";
import { BiSearch } from "react-icons/bi";
import Select from "react-select";
import axios from "axios";
import baseUrl from "~/utils/baseUrl";

const cx = classNames.bind(styles);

function Reviews() {
  const cbb = [
    { value: 'All', label: 'Tất cả' },
    { value: 'Increase', label: 'Giá từ thấp đến cao' },
    { value: 'Reduce', label: 'Giá từ cao xuống thấp' }
  ]
  const [listAllItemReview, setListAllItemReview] = useState([]);

  const getAllReviews = async () => {
    try {
      const config = {};
      const { data } = await axios.get(`${baseUrl}/api/reviews/all_review`, config);
      console.log(data);
      setListAllItemReview([...data.result]);
      // setListFeedbackTmp([...data.result]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllReviews();
  }, []);

  useEffect(() => {
    console.log(listAllItemReview)
  }, [listAllItemReview]);


  return (
    <div className={cx('wrapper')} style={{ fontSize: '14px' }}>
      <div className={cx('container')}>
        <div>
          <h1>QUẢN LÝ ĐÁNH GIÁ CỦA SẢN PHẨM</h1>
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
          <div className={cx("container-list", "row")}>
            {listAllItemReview.map((item, index) => {
              return (
                <ProductReviewItem
                  key={index}
                  item={item}
                  numberReview={listAllItemReview.length}
                />
              );
            })}
          </div>
        </div>
      </div>
      <footer className={cx("sticky-footer")}>
        <div className={cx("container")}>
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2023</span>
          </div>
        </div>
      </footer>

    </div>

  );
}

export default Reviews;