import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./DetailReview.module.scss";
import ReactStars from "react-stars";
import ItemReview from "~/components/ItemReview";
import { BiArrowBack } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import Select from "react-select";
import { MdStar } from "react-icons/md";
import ProgressBar from "@ramonak/react-progress-bar";

const cx = classNames.bind(styles);
function DetailReview() {
  const cbb = [
    { value: 'All', label: 'Tất cả' },
    { value: 'UnResponse', label: 'Đã phản hồi' },
    { value: 'Responsed', label: 'Chưa phản hồi' }
  ]
  const cbb1 = [
    { value: 'All', label: 'Tất cả' },
    { value: '1', label: '1 sao' },
    { value: '2', label: '2 sao' },
    { value: '3', label: '3 sao' },
    { value: '4', label: '4 sao' },
    { value: '5', label: '5 sao' },
  ]
  const location = useLocation();
  const [item, setItem] = useState(location?.state);
  useEffect(() => {
    setItem(location.state)
  }, [])
  return (
    <div className={cx('wrapper')} style={{ fontSize: '14px' }}>
      <div className={cx('container')}>
        <div>
          <Link to={'/admin/reviews'}>
            <h1 ><BiArrowBack style={{ marginBottom: '4px', }} /> Reviews Product Detail</h1>
          </Link>

          <div style={{ color: '#05CD99' }}>Lalitpur Branch</div>
        </div>
        <div className={cx('content')}>
          {/*Container Left */}
          <div className={cx("container-left")}>
            <div className={cx("product-item")}>
              <div className={cx("product-title")}>Thông tin sản phẩm</div>
              <div className={cx("product-info")}>
                <div className={cx("product-img")}>
                  <img src={item.productImg} />
                </div>
                <div >
                  <div className={cx("product-name")}>{item.nameProduct}</div>
                  <div className={cx("product-price")}>{item.productPrice} đ</div>
                  <i >Đã bán: {item.isSold}</i>
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
              <div className={cx("product-baseOn")}><b>{item.averageStar} sao</b> dựa trên {item.numberOfReview} đánh giá</div>
              <div className={cx("product-stars")}>
                <div className={cx("star-item")}>
                  <div className={cx("star-num")}>5</div>
                  <MdStar color="orange" size={26} />
                  <div className={cx("star-percent")}>
                    <ProgressBar borderRadius='6px' completed={60} bgColor='orange' labelColor='black' labelAlignment="outside" customLabelStyles={{ fontWeight: '400', width: '40px' }} />
                  </div>
                </div>
                <div className={cx("star-item")}>
                  <div className={cx("star-num")}>4</div>
                  <MdStar color="orange" size={26} />
                  <div className={cx("star-percent")}>
                    <ProgressBar borderRadius='6px' completed={20} bgColor='orange' labelColor='black' labelAlignment="outside" customLabelStyles={{ fontWeight: '400', width: '40px' }} />
                  </div>
                </div>
                <div className={cx("star-item")}>
                  <div className={cx("star-num")}>3</div>
                  <MdStar color="orange" size={26} />
                  <div className={cx("star-percent")}>
                    <ProgressBar borderRadius='6px' completed={10} bgColor='orange' labelColor='black' labelAlignment="outside" customLabelStyles={{ fontWeight: '400', width: '40px' }} />
                  </div>
                </div>
                <div className={cx("star-item")}>
                  <div className={cx("star-num")}>2</div>
                  <MdStar color="orange" size={26} />
                  <div className={cx("star-percent")}>
                    <ProgressBar borderRadius='6px' completed={8} bgColor='orange' labelColor='black' labelAlignment="outside" customLabelStyles={{ fontWeight: '400', width: '40px' }} />
                  </div>
                </div>
                <div className={cx("star-item")}>
                  <div className={cx("star-num")}>1</div>
                  <MdStar color="orange" size={26} />
                  <div className={cx("star-percent")}>
                    <ProgressBar borderRadius='6px' completed={2} bgColor='orange' labelColor='black' labelAlignment="outside" customLabelStyles={{ fontWeight: '400', width: '40px' }} />
                  </div>
                </div>
              </div>
              <div className={cx("product-response")}><b>10/{item.numberOfReview}</b> đánh giá đã được phản hồi</div>
            </div>
          </div>
          {/* Container Right */}
          <div className={cx("container-right")}>
            {/* Comboboxs filter */}
            <div className={cx("container-cbb")}>
              <Select options={cbb1}
                defaultValue={cbb1[0]}
                className={cx('combobox')}
              />
              <Select options={cbb}
                defaultValue={cbb[0]}
                className={cx('combobox')} />

            </div>
            {/* List Reivew */}
            <div className={cx("container-content")}>
              {
                item.listReviews.map((item, index) => {
                  return <ItemReview
                    key={item.reviewId}
                    item={item}
                  />
                })
              }
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailReview;
