import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Reviews.module.scss";
import { item_product } from "~/assets/images";
import ProductReviewItem from "~/components/ProductReviewItem";
import { BiSearch } from "react-icons/bi";
import Select from "react-select";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Reviews() {
  const cbb = [
    { value: 'All', label: 'Tất cả' },
    { value: 'UnResponse', label: 'Đã phản hồi' },
    { value: 'Responsed', label: 'Chưa phản hồi' }
  ]
  const [listAllItemReview, setListAllItemReview] = useState([]);

  const getAllReviews = async () => {
    // let listAllReviewProduct = await axios.get();
    // if (listAllReviewProduct) setListItemReview(listAllReviewProduct);
    // return listAllReviewProduct;
    let listAllReviewProduct = [
      {
        idProduct: 'SP001',
        nameProduct: "T-shirt Cotton 1",
        productImg:item_product,
        productPrice:499000,
        numberOfReview:20,
        averageStar:4.5,
        isSold:1378,
        listReviews: [
          {
            reviewId:'rv001',
            reviewImg:item_product,
            userName:'Phan Trong Tinh',
            userAvt:item_product,
            colorSize:'Xám đậm / M',
            quantityStar:4,
            contentReview:'Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm',
            dateReview:'2023-11-18',
            imageResponse:item_product,
            contentResponse:"Anh đánh giá cao độ biết điều của em !!!",
            dateResponse:"20/10/2023"
            
          },
          {
            reviewId:'rv002',
            reviewImg:item_product,
            userName:'Phan Trong Tinh',
            userAvt:item_product,
            colorSize:'Xám đậm / M',
            quantityStar:4,
            contentReview:'Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm',
            dateReview:'2023-11-18',
            
            
          },
          {
            reviewId:'rv002',
            reviewImg:item_product,
            userName:'Phan Trong Tinh',
            userAvt:item_product,
            colorSize:'Xám đậm / M',
            quantityStar:4,
            contentReview:'Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm',
            dateReview:'2023-11-18',
            
            
          }
        ],
      },
      {
        idProduct: 'SP002',
        nameProduct: "T-shirt Cotton 2",
        productImg:item_product,
        productPrice:499000,
        numberOfReview:20,
        averageStar:4.5,
        isSold:1378,
        listReviews: [
          {
            reviewId:'rv001',
            reviewImg:item_product,
            userName:'Phan Trong Tinh',
            userAvt:item_product,
            colorSize:'Xám đậm / M',
            quantityStar:4,
            contentReview:'Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm',
            dateReview:'2023-11-18',
            imageResponse:item_product,
            contentResponse:"Anh đánh giá cao độ biết điều của em !!!",
            dateResponse:"20/10/2023"
          }
        ],
      },
      {
        idProduct: 'SP003',
        nameProduct: "T-shirt Cotton 3",
        productImg:item_product,
        productPrice:499000,
        numberOfReview:20,
        averageStar:4.5,
        isSold:1378,
        listReviews: [
          {
            reviewId:'rv001',
            reviewImg:item_product,
            userName:'Phan Trong Tinh',
            userAvt:item_product,
            colorSize:'Xám đậm / M',
            quantityStar:4,
            contentReview:'Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm',
            dateReview:'2023-11-18',
            imageResponse:item_product,
            contentResponse:"Anh đánh giá cao độ biết điều của em !!!",
            dateResponse:"20/10/2023"
          }
        ],
      },
      {
        idProduct: 'SP004',
        nameProduct: "T-shirt Cotton 4",
        productImg:item_product,
        productPrice:499000,
        numberOfReview:20,
        averageStar:4.5,
        isSold:1378,
        listReviews: [
          {
            reviewId:'rv001',
            reviewImg:item_product,
            userName:'Phan Trong Tinh',
            userAvt:item_product,
            colorSize:'Xám đậm / M',
            quantityStar:4,
            contentReview:'Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm',
            dateReview:'2023-11-18',
            imageResponse:item_product,
            contentResponse:"Anh đánh giá cao độ biết điều của em !!!",
            dateResponse:"20/10/2023"
          }
        ],
      },
      {
        idProduct: 'SP005',
        nameProduct: "T-shirt Cotton 5",
        productImg:item_product,
        productPrice:499000,
        numberOfReview:20,
        averageStar:4.5,
        isSold:1378,
        listReviews: [
          {
            reviewId:'rv001',
            reviewImg:item_product,
            userName:'Phan Trong Tinh',
            userAvt:item_product,
            colorSize:'Xám đậm / M',
            quantityStar:4,
            contentReview:'Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm',
            dateReview:'2023-11-18',
            imageResponse:item_product,
            contentResponse:"Anh đánh giá cao độ biết điều của em !!!",
            dateResponse:"20/10/2023"
          }
        ],
      },
      {
        idProduct: 'SP006',
        nameProduct: "T-shirt Cotton 6",
        productImg:item_product,
        productPrice:499000,
        numberOfReview:20,
        averageStar:4.5,
        isSold:1378,
        listReviews: [
          {
            reviewId:'rv001',
            reviewImg:item_product,
            userName:'Phan Trong Tinh',
            userAvt:item_product,
            colorSize:'Xám đậm / M',
            quantityStar:4,
            contentReview:'Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm',
            dateReview:'2023-11-18',
            imageResponse:item_product,
            contentResponse:"Anh đánh giá cao độ biết điều của em !!!",
            dateResponse:"20/10/2023"
          }
        ],
      },
      {
        idProduct: 'SP007',
        nameProduct: "T-shirt Cotton 7",
        productImg:item_product,
        productPrice:499000,
        numberOfReview:20,
        averageStar:4.5,
        isSold:1378,
        listReviews: [
          {
            reviewId:'rv001',
            reviewImg:item_product,
            userName:'Phan Trong Tinh',
            userAvt:item_product,
            colorSize:'Xám đậm / M',
            quantityStar:4,
            contentReview:'Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm',
            dateReview:'2023-11-18',
            imageResponse:item_product,
            contentResponse:"Anh đánh giá cao độ biết điều của em !!!",
            dateResponse:"20/10/2023"
          }
        ],
      },
      {
        idProduct: 'SP008',
        nameProduct: "T-shirt Cotton 8",
        productImg:item_product,
        productPrice:499000,
        numberOfReview:20,
        averageStar:4.5,
        isSold:1378,
        listReviews: [
          {
            reviewId:'rv001',
            reviewImg:item_product,
            userName:'Phan Trong Tinh',
            userAvt:item_product,
            colorSize:'Xám đậm / M',
            quantityStar:4,
            contentReview:'Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm',
            dateReview:'2023-11-18',
            imageResponse:item_product,
            contentResponse:"Anh đánh giá cao độ biết điều của em !!!",
            dateResponse:"20/10/2023"
          }
        ],
      },
      {
        idProduct: 'SP009',
        nameProduct: "T-shirt Cotton 9",
        productImg:item_product,
        productPrice:499000,
        numberOfReview:20,
        averageStar:4.5,
        isSold:1378,
        listReviews: [
          {
            reviewId:'rv001',
            reviewImg:item_product,
            userName:'Phan Trong Tinh',
            userAvt:item_product,
            colorSize:'Xám đậm / M',
            quantityStar:4,
            contentReview:'Chẳng lẻ em nói sản phẩm này như c*t. Sản phẩm ngon lắm nha, mua về xài bao êm',
            dateReview:'2023-11-18',
            imageResponse:item_product,
            contentResponse:"Anh đánh giá cao độ biết điều của em !!!",
            dateResponse:"20/10/2023"
          }
        ],
      },
    ];

    setListAllItemReview(listAllReviewProduct);
  };

  useEffect(() => {
    getAllReviews();
  }, []);


  return (
    <div className={cx('wrapper')} style={{ fontSize: '14px' }}>
      <div className={cx('top-navbar')}>
      </div>
      <div className={cx('container')}>
        <div>
          <h1>Manage Reviews Products!</h1>
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
                />
              );
            })}
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