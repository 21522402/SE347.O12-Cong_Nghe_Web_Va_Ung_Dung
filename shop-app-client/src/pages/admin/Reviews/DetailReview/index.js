import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./DetailReview.module.scss";
import ItemReview from "~/components/ItemReview";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";
import { MdStar } from "react-icons/md";
import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios";
import baseUrl from "~/utils/baseUrl";


const cx = classNames.bind(styles);
function DetailReview() {
  const {id} = useParams();
  const cbb = [
    { value: 'All', label: 'Tất cả' },
    { value: 'Responsed', label: 'Đã phản hồi' },
    { value: 'UnResponsed', label: 'Chưa phản hồi' }
  ]
  const cbb1 = [
    { value: 'All', label: 'Tất cả' },
    { value: '1', label: '1 sao' },
    { value: '2', label: '2 sao' },
    { value: '3', label: '3 sao' },
    { value: '4', label: '4 sao' },
    { value: '5', label: '5 sao' },
  ]

  const [cbbStar, setCbbStar] = useState(cbb1[0].value)
  const [cbbRes, setCbbRes] = useState(cbb[0].value)

  const [itemReview, setItemReview] = useState({})
  const [listItemReviewTmp, setListItemReviewTmp] = useState([]);
  const getReviewsById = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/api/reviews/all_review`);
      let arr = [...data.result];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].product._id === id) {
          setItemReview(arr[i]);
          setListItemReviewTmp(arr[i].reviews)
        }
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleCbb1 = (v) => {
    setCbbStar(v.value)
  }

  const handleCbb = (v) => {
    setCbbRes(v.value)
  }

  useEffect(() => {
    console.log(cbbStar,cbbRes)
    let arrSearch = [...listItemReviewTmp];
    if (cbbStar!=='All') {
      arrSearch = arrSearch.filter(item => item.star === Number(cbbStar))
    }
    if (cbbRes!='All') {
      arrSearch = arrSearch.filter(item => item.isResponsed === (cbbRes === "UnResponsed"? false : true ))
    }
    setItemReview({...itemReview, reviews: arrSearch})
  }, [cbbStar, cbbRes])

  useEffect(() => {
    getReviewsById();
  }, []);

  useEffect(() => {
    console.log(listItemReviewTmp)
  }, [listItemReviewTmp]);

  const formatMoney = (monney) => {
    const formatter = new Intl.NumberFormat("de-VN", {
      style: "currency",
      currency: "VND",
    });

    return formatter.format(monney);
  };

  return (
    <div className={cx('wrapper')} style={{ fontSize: '14px' }}>
      <div className={cx('container')}>
        <div>
          <Link to={'/admin/reviews'} style={{textDecoration: 'none', color: '#000'}}>
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
                  <img src={itemReview.product?.colors[0].images[0]} alt="img" />
                </div>
                <div >
                  <div className={cx("product-name")}>{itemReview.product?.productName}</div>
                  <div className={cx("product-price")}>{formatMoney(itemReview.product?.exportPrice)}</div>
                  <span>Đã bán: <b>{itemReview.product?.quantitySold}</b></span>
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
              <div className={cx("product-baseOn")}><b>{itemReview.averageStar === false ? 0 : itemReview.averageStar} sao</b> dựa trên {itemReview.reviews?.length} đánh giá</div>
              <div className={cx("product-stars")}>
                <div className={cx("star-item")}>
                  <div className={cx("star-num")}>5</div>
                  <MdStar color="orange" size={26} />
                  <div className={cx("star-percent")}>
                    <ProgressBar borderRadius='6px' completed={itemReview.FiveStar === 0 ? 0 : itemReview.FiveStar} bgColor='orange' labelColor='black' labelAlignment="outside" customLabelStyles={{ fontWeight: '400', width: '40px' }} />
                  </div>
                </div>
                <div className={cx("star-item")}>
                  <div className={cx("star-num")}>4</div>
                  <MdStar color="orange" size={26} />
                  <div className={cx("star-percent")}>
                    <ProgressBar borderRadius='6px' completed={itemReview.FourStar === 0 ? 0 : itemReview.FourStar} bgColor='orange' labelColor='black' labelAlignment="outside" customLabelStyles={{ fontWeight: '400', width: '40px' }} />
                  </div>
                </div>
                <div className={cx("star-item")}>
                  <div className={cx("star-num")}>3</div>
                  <MdStar color="orange" size={26} />
                  <div className={cx("star-percent")}>
                    <ProgressBar borderRadius='6px' completed={itemReview.ThreeStar === 0 ? 0 : itemReview.ThreeStar} bgColor='orange' labelColor='black' labelAlignment="outside" customLabelStyles={{ fontWeight: '400', width: '40px' }} />
                  </div>
                </div>
                <div className={cx("star-item")}>
                  <div className={cx("star-num")}>2</div>
                  <MdStar color="orange" size={26} />
                  <div className={cx("star-percent")}>
                    <ProgressBar borderRadius='6px' completed={itemReview.TwoStar === 0 ? 0 : itemReview.TwoStar} bgColor='orange' labelColor='black' labelAlignment="outside" customLabelStyles={{ fontWeight: '400', width: '40px' }} />
                  </div>
                </div>
                <div className={cx("star-item")}>
                  <div className={cx("star-num")}>1</div>
                  <MdStar color="orange" size={26} />
                  <div className={cx("star-percent")}>
                    <ProgressBar borderRadius='6px' completed={itemReview.OneStar === 0 ? 0 : itemReview.OneStar} bgColor='orange' labelColor='black' labelAlignment="outside" customLabelStyles={{ fontWeight: '400', width: '40px' }} />
                  </div>
                </div>
              </div>
              <div className={cx("product-response")}><b>{(itemReview.quantityResponsed===false)?0:itemReview.quantityResponsed}/{itemReview.reviews?.length}</b> đánh giá đã được phản hồi</div>
            </div>
          </div>
          {/* Container Right */}
          <div className={cx("container-right")}>
            {/* Comboboxs filter */}
            <div className={cx("container-cbb")}>
              <Select options={cbb1}
                defaultValue={cbb1[0]}
                className={cx('combobox')}
                onChange={handleCbb1}
                openMenuOnClick={handleCbb1}
              />
              <Select options={cbb}
                defaultValue={cbb[0]}
                className={cx('combobox')} 
                onChange={handleCbb}
                openMenuOnClick={handleCbb}/>

            </div>
            {/* List Reivew */}
            <div className={cx("container-content")}>
              {
                itemReview.reviews?.map((item, index) => {
                  return <ItemReview
                    key={index}
                    item={item}
                    getReviewsById={getReviewsById}
                    list={itemReview.reviews}
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
