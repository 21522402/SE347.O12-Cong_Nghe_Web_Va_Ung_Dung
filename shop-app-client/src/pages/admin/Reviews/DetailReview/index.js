import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./DetailReview.module.scss";
import ReactStars from "react-stars";
import ItemReview from "~/components/ItemReview";
import { BiArrowBack } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import Select from "react-select";

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
      <div className={cx('top-navbar')}>
      </div>
      <div className={cx('container')}>
        <div>
          <Link to={'/admin/reviews'}>
            <h1 ><BiArrowBack /> Reviews Product Detail</h1>
          </Link>

          <div style={{ color: '#05CD99' }}>Lalitpur Branch</div>
        </div>
        <div className={cx('content')}>
          {/*Container Left */}
          <div className={cx("container-left")}>
            {/* Info Product */}
            <div className={cx("container-product")}>
              <div className={cx("product")}>
                <img
                  className={cx("img-product")}
                  src={item?.productImg}
                  alt="sp"
                />
                <div className={cx("info-product")}>
                  <b className={cx("name-product")}>{item.nameProduct}</b>
                  <ReactStars
                    count={5}
                    size={12}
                    value={item.averageStar}
                    color1="#C4C4C4"
                    color2="#ffb21d"
                    edit={false}
                    className={cx("star-product-first")}
                  />
                  <p className={cx("price-product")}>{item.productPrice} đ</p>
                  <div className={cx("sold-product")}>
                    <p>Đã bán: </p>
                    <p className={cx("ms-3")}>{item.isSold}</p>
                  </div>
                </div>
              </div>
              {/* Colors */}
              <div className={cx("container-options")}>
                <p>Màu sắc: </p>
                <div className={cx("list-options")}>
                  <div className={cx("bg-black")}></div>
                  <div></div>
                  <div className={cx("bg-primary")}></div>
                  <div className={cx("bg-secondary")}></div>
                  <div className={cx("bg-info")}></div>
                  <div className={cx("bg-success")}></div>
                  <div className={cx("bg-warning")}></div>
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
            </div>

            {/* Quantity star and review times */}
            <div className={cx("container-quantity")}>
              <h2 style={{ fontWeight: 'bold' }}>ĐÁNH GIÁ SẢN PHẨM</h2>
              <h2 style={{ fontWeight: 'bold' }}>4.5</h2>
              <ReactStars
                count={5}
                size={30}
                value={item.averageStar}
                edit={false}
                color1="#C4C4C4"
                color2="#ffb21d"
                className={cx("star")}
              />
              <i className={cx("quantity")}>{item.numberOfReview} lượt đánh giá</i>
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
              {/* <ItemReview
                avt={item_product}
                name="Phan Trọng Tính"
                quantityStar={4.5}
                imageReview={item_product}
                contentReview="Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm"
                dateReview="19/10/2023"
                imageResponse={item_product}
                contentResponse="Anh đánh giá cao độ biết điều của em !!!"
                dateResponse="20/10/2023"
              /> */}
              {/*
              <ItemReview
                avt={item_product}
                name="Phan Trọng Tính"
                quantityStar={4.5}
                imageReview={item_product}
                contentReview="Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm"
                dateReview="19/10/2023"
                imageResponse={item_product}
                contentResponse="Anh đánh giá cao độ biết điều của em !!!"
                dateResponse="20/10/2023"
              />
              <ItemReview
                avt={item_product}
                name="Phan Trọng Tính"
                quantityStar={4.5}
                imageReview={item_product}
                contentReview="Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm"
                dateReview="19/10/2023"
                imageResponse={item_product}
                contentResponse="Anh đánh giá cao độ biết điều của em !!!"
                dateResponse="20/10/2023"
              />
              <ItemReview
                avt={item_product}
                name="Phan Trọng Tính"
                quantityStar={4.5}
                imageReview={item_product}
                contentReview="Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm"
                dateReview="19/10/2023"
                imageResponse={item_product}
                contentResponse="Anh đánh giá cao độ biết điều của em !!!"
                dateResponse="20/10/2023"
              />
              <ItemReview
                avt={item_product}
                name="Phan Trọng Tính"
                quantityStar={4.5}
                imageReview={item_product}
                contentReview="Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm"
                dateReview="19/10/2023"
                imageResponse={item_product}
                contentResponse="Anh đánh giá cao độ biết điều của em !!!"
                dateResponse="20/10/2023"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailReview;
