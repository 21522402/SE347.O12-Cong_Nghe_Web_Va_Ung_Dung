import classNames from "classnames/bind";
import styles from './ProductDetail.module.scss'
import { useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { FaAngleRight, FaAngleLeft, FaArrowRight, FaArrowLeft, FaAngleDown } from "react-icons/fa6";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ItemCarousel from "./ItemCarousel";
import ItemReview from "./ItemReview";

const cx = classNames.bind(styles);
function ProductDetail() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 2
        }
    };
    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (


            <>
                <div onClick={() =>
                    previous()} className={cx('btn-switch2', 'left')} >
                    <FaArrowLeft className={cx('icon')} />
                </div>
                <div onClick={() => next()} className={cx('btn-switch2', 'right')}>
                    <FaArrowRight className={cx('icon')} />
                </div>
            </>


        );
    };

    const [indexColorActive, setIndexColorActive] = useState(0);
    const [indexImageActive, setIndexImageActive] = useState(0);
    const [indexSizeActive, setIndexSizeActive] = useState(-1);
    const [quantityAddCart, setQuantityAddCart] = useState(1);
    const [enableNotiSize, setEnableNotiSize] = useState(false);
    const handleClickNextImage = () => {
        setIndexImageActive(prev => {
            const length = product.colors[indexColorActive].images.length;
            if (prev === length - 1) {
                return 0;
            }
            return prev + 1;
        })
    }
    const handleClickPreviousImage = () => {
        setIndexImageActive(prev => {
            const length = product.colors[indexColorActive].images.length;
            if (prev === 0) {
                return length - 1;
            }
            return prev - 1;
        })
    }
    const handleClickBtnAddCart = () => {
        if (indexSizeActive === -1) {
            setEnableNotiSize(true);
        }
    }
    const product = {
        productName: 'Áo khoác thể thao Pro Active',
        productType: 'Áo khoác',
        colors: [
            {
                colorName: 'Xám',
                images: [
                    "https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/QD001.20_38.jpg",
                    "https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/QD001.24_53.jpg",
                    "https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/QD001.21.jpg",
                ],
                sizes: [
                    {
                        name: 'S',
                        quantity: 10,
                    },
                    {
                        name: 'L',
                        quantity: 102,
                    },
                    {
                        name: 'M',
                        quantity: 90,
                    }
                ]
            },
            {
                colorName: 'Xanh Navy',
                images: [
                    "https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/QD001.9_84.jpg",
                    "https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/QD001.12_94.jpg",
                    "https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/QD001.10.jpg",
                    "https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/AD001.s2.4.jpg"
                ],
                sizes: [
                    {
                        name: 'M',
                        quantity: 10,
                    },
                    {
                        name: 'L',
                        quantity: 102,
                    },
                    {
                        name: 'XL',
                        quantity: 90,
                    },
                    {
                        name: '2XL',
                        quantity: 20,
                    },
                    {
                        name: '3XL',
                        quantity: 40,
                    }
                ]
            }
        ],
        quantitySold: 120
    }

    return (
        <div className={cx('wrapper')}>

            <div className={cx('header')}>
                <span className={cx('span1')} >Trang chủ</span>
                <span className={cx('span2')} > / Áo thể thao nam</span>
            </div>
            <div className={cx('body')}>

          
                    <div className={cx('product-image-wrapper')}>
                        <ul className={cx('product-list-image')}>
                            {
                                product.colors[indexColorActive].images.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <div onClick={() => setIndexImageActive(index)} className={cx('div-item-img', {
                                                active: indexImageActive === index
                                            })}>
                                                <img src={item} alt="" />
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        {
                            product.colors[indexColorActive].images.map((item, index) => {
                                return (
                                    <img alt="" className={cx('image-view', { active: indexImageActive === index })} src={item} key={index} />
                                )
                            })
                        }
                        <div onClick={handleClickPreviousImage} className={cx('btn-switch', 'left')}>
                            <FaAngleLeft />
                        </div>
                        <div onClick={handleClickNextImage} className={cx('btn-switch', 'right')}>
                            <FaAngleRight />
                        </div>

                    </div>
              


                <div className={cx('section-info')}>
                    <h2 className={cx('product-name')}>
                        {product.productName}
                    </h2>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <div className={cx('reviews-rating')}>
                            <img src='https://www.coolmate.me/images/star.svg?2a5188496861d26e5547c524320ec875' className={cx('reviews-rating-star')} alt="" />
                            <img src='https://www.coolmate.me/images/star.svg?2a5188496861d26e5547c524320ec875' className={cx('reviews-rating-star')} alt="" />
                            <img src='https://www.coolmate.me/images/star.svg?2a5188496861d26e5547c524320ec875' className={cx('reviews-rating-star')} alt="" />
                        </div>
                        <span>|</span>
                        <div style={{ fontSize: '12px', fontWeight: '500' }}>Đã bán: {product.quantitySold}</div>
                    </div>
                    <div className={cx('price')}>
                        <span className={cx('price1')}>469.000đ</span>
                        <span className={cx('price2')}>499.000đ</span>
                        <span className={cx('percent')}>-6%</span>
                    </div>
                    <div style={{ marginTop: '8px' }}>
                        <div>
                            <span style={{ fontSize: '14px', fontWeight: '500' }}>Màu sắc: </span>
                            <span style={{ fontWeight: '700', fontSize: '14px', marginLeft: '6px' }}>{product.colors[indexColorActive].colorName}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
                            {
                                product.colors.map((item, index) => {
                                    return (
                                        <div key={index} className={cx('img-color-wrapper', { active: index === indexColorActive })}>
                                            <img onClick={() => { setIndexColorActive(index); setIndexSizeActive(0); setIndexImageActive(0) }} alt="" src={item.images[0]} className={cx('img-color')} />

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div style={{ marginTop: '8px' }} className={cx('section-size', { active: enableNotiSize })}>
                        <div>
                            <span style={{ fontSize: '14px', fontWeight: '500' }}>Kích thước: </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
                            {
                                product.colors[indexColorActive].sizes.map((item, index) => {
                                    return (
                                        <div onClick={() => { setIndexSizeActive(index); setEnableNotiSize(false) }} className={cx('size-wrapper', { active: index === indexSizeActive })}>
                                            {item.name}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div style={{ marginTop: '32px', padding: '16px 0', display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ display: 'inline-flex', borderRadius: '30px', height: '40px', width: '100px', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #000' }}>
                            <span onClick={() => { if (quantityAddCart === 1) return; setQuantityAddCart(prev => prev - 1) }} style={{ userSelect: 'none', display: 'inline-block', padding: '0px 16px', fontSize: '20px', cursor: 'pointer', fontWeight: '700' }}>-</span>
                            <span style={{ display: 'inline-block', fontWeight: '600' }}>{quantityAddCart}</span>
                            <span onClick={() => setQuantityAddCart(prev => prev + 1)} style={{ userSelect: 'none', display: 'inline-block', padding: '0px 16px', fontSize: '20px', cursor: 'pointer', fontWeight: 'bold' }}>+</span>
                        </div>
                        <div onClick={handleClickBtnAddCart} className={cx('btn-add-cart')} >
                            {indexSizeActive === -1 ? <span>Chọn kích thước</span> : <><BsCartCheck style={{ marginRight: '8px', fontSize: '20px' }} />  <span>Thêm vào giỏ hàng</span> </>}
                        </div>
                    </div>

                    <div className={cx('separate')}>
                    </div>

                    <div className={cx('product-policy')}>
                        <div className={cx('product-policy-item')}>
                            <div className={cx('product-policy-icon')}>
                                <img src="https://www.coolmate.me/images/icons/icon3.svg" alt="Đổi trả với số điện thoại" />
                            </div>
                            <span className={cx('product-policy-title')}>

                                Đổi trả cực dễ
                                <br />
                                chỉ cần số điện thoại

                            </span>
                        </div>
                        <div className={cx('product-policy-item')}>
                            <div className={cx('product-policy-icon')}>
                                <img src="https://www.coolmate.me/images/icons/icon3.svg" alt="Đổi trả với số điện thoại" />
                            </div>
                            <span className={cx('product-policy-title')}>

                                Miễn phí vận chuyển
                                <br />
                                cho đơn hàng trên 200k

                            </span>
                        </div>
                        <div className={cx('product-policy-item')}>
                            <div className={cx('product-policy-icon')}>
                                <img src="https://www.coolmate.me/images/icons/icon3.svg" alt="Đổi trả với số điện thoại" />
                            </div>
                            <span className={cx('product-policy-title')}>

                                60 ngày đổi trả
                                <br />
                                vì bất kỳ lý do gì

                            </span>
                        </div>
                        <div className={cx('product-policy-item')}>
                            <div className={cx('product-policy-icon')}>
                                <img src="https://www.coolmate.me/images/icons/icon3.svg" alt="Đổi trả với số điện thoại" />
                            </div>
                            <span className={cx('product-policy-title')}>

                                Hotline 1900.27.27.37
                                <br />
                                hỗ trợ từ 8h30 - 22h
                                <br />
                                mỗi ngày
                            </span>
                        </div>
                        <div className={cx('product-policy-item')}>
                            <div className={cx('product-policy-icon')}>
                                <img src="https://www.coolmate.me/images/icons/icon3.svg" alt="Đổi trả với số điện thoại" />
                            </div>
                            <span className={cx('product-policy-title')}>

                                Đến tận nơi nhận hàng trả,
                                <br />
                                hoàn tiền trong 24h

                            </span>
                        </div>
                        <div className={cx('product-policy-item')}>
                            <div className={cx('product-policy-icon')}>
                                <img src="https://www.coolmate.me/images/icons/icon3.svg" alt="Đổi trả với số điện thoại" />
                            </div>
                            <span className={cx('product-policy-title')}>

                                Giao hàng nhanh
                                <br />
                                toàn quốc

                            </span>
                        </div>

                    </div>
                    <div className={cx('separate')}>
                    </div>
                    <div className={cx('product-description')}>
                        <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '16px' }}>Đặc điểm nổi bật</div>
                        {/* Lấy từ csdl */}
                        <p>- Thành phần: 100% Polyester</p>
                        <p>- Chất liệu áo khoác thể thao có khả năng giữ ấm</p>
                        <p>- Hạn chế xù lông và chống nhăn</p>
                        <p>- Form áo: Regular, ôm nhẹ</p>
                        <p>- Tự hào sản xuất tại Việt Nam</p>
                        <p>- Người mẫu: 1m77 - 69kg, mặc áo 2XL</p>
                    </div>
                </div>
            </div>
            <div className={cx('carsousel-wrapper')}>
                <h1 >SẢN PHẨM BẠN CÓ THỂ THÍCH</h1>
                <Carousel itemClass="carousel" responsive={responsive} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}>
                    <ItemCarousel />
                    <ItemCarousel />
                    <ItemCarousel />
                    <ItemCarousel />
                    <ItemCarousel />
                    <ItemCarousel />
                    <ItemCarousel />
                    <ItemCarousel />
                </Carousel>
            </div>

            <div className={cx('review')}>
                <div className={cx('reviews-leftside-rating')}>
                    <div className={cx('title')}>
                        ĐÁNH GIÁ SẢN PHẨM
                    </div>
                    <div className={cx('rate')}>5</div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
                        <img src="https://www.coolmate.me/images/star-yellow.svg?8f4d13b24f276e8a788250b192548210" />
                        <img src="https://www.coolmate.me/images/star-yellow.svg?8f4d13b24f276e8a788250b192548210" />
                        <img src="https://www.coolmate.me/images/star-yellow.svg?8f4d13b24f276e8a788250b192548210" />
                        <img src="https://www.coolmate.me/images/star-yellow.svg?8f4d13b24f276e8a788250b192548210" />
                        <img src="https://www.coolmate.me/images/star-yellow.svg?8f4d13b24f276e8a788250b192548210" />
                    </div>
                    <div className={cx('quantity-reviews')}>
                        3 đánh giá
                    </div>
                </div>
                <div className={cx('reviews-rightside')}>
                    <div className={cx('reviews__filter')}>
                        <div className={cx('reviews__select')}>
                            <select style={{ backgroundImage: 'url(' + { FaAngleDown } + ')' }}>
                                <option value="">Đánh giá</option>
                                <option value="1">1 sao</option>
                                <option value="2">2 sao</option>
                                <option value="3">3 sao</option>
                                <option value="4">4 sao</option>
                                <option value="5">5 sao</option>
                            </select>
                            <FaAngleDown className={cx('icon')} />
                        </div>
                        <div className={cx('reviews__select')}>
                            <select className={cx('reviews-filter-image')}>
                                <option value="">Ảnh</option>
                                <option value="true">Có ảnh</option>
                                <option value="false">Không ảnh</option>
                            </select>
                            <FaAngleDown className={cx('icon')} />
                        </div>
                        <div className={cx('reviews__select')}>
                            <select >
                                <option value="">Phản hồi</option>
                                <option value="true">Đã phản hồi</option>
                                <option value="false">Chưa phản hồi</option>
                            </select>
                            <FaAngleDown className={cx('icon')} />
                        </div>
                    </div>

                    <div className={cx('reviews-listing')}>
                        <div className={cx('product-reviews-listings')}>
                            <ItemReview />
                            <ItemReview />
                            <ItemReview />
                            <ItemReview />
                            <ItemReview />
                        </div>
                        <div className={cx('reviews-pagination')}>
                            <a href="#" className={cx('reviews-pagination__prev')}>
                                <FaAngleLeft />
                            </a>
                            <span>1/1</span>
                            <a href="#" className={cx('reviews-pagination__next')}>
                                <FaAngleRight />
                            </a>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default ProductDetail;