import classNames from "classnames/bind";
import { AiOutlineSearch, AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
import { FaFileImport, FaFileExport } from "react-icons/fa";
import { IoSquareOutline, IoCheckboxSharp } from "react-icons/io5";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { BiImport, BiSolidLockAlt } from "react-icons/bi";



import Carousel from "../Carousel";
import ColorSize from "../ColorSize";

import { useState } from "react";


import styles from './ProductDetail.module.scss'

const cx = classNames.bind(styles)

function ProductDetail() {
    const listImage = [
        {
            src: 'https://fastly.picsum.photos/id/513/600/400.jpg?hmac=WirdW7m-GpYBbFSFn_DPG2w2h-pzmboPQR_2l5KVgYw',
            alt: 'Hình'
        },
        {
            src: 'https://fastly.picsum.photos/id/795/600/400.jpg?hmac=ZN6Zneojz5PbUk3OJl03-sH5GTbNLJxlEvBV7KQXvh8',
            alt: 'Hình'
        },
        {
            src: 'https://fastly.picsum.photos/id/924/600/400.jpg?hmac=Hfb7YBk-BA3W7v7gLxvH2SspirC0hWfOhkATGSWJBs4',
            alt: 'Hình'
        },
        {
            src: 'https://cdn-app.kiotviet.vn/sample/fashion/38.png',
            alt: 'Hình'
        }
        
    ]
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    return (
        <div className={cx('wrapper')}>
            {/* Header */}
            <div className={cx('header')}>
                <div className={cx('tabpanel')}>Thông tin</div>
            </div>

            {/* Body */}
            <div className={cx('product-container')}>
                <div className={cx('product-name')}>Thắt lưng nữ DKNY màu xanh</div>
                <div className={cx('product-status')}>
                    <span><BsCheckLg color="green" style={{ fontSize: '16px', marginBottom: '4px' }} /> Bán trực tiếp</span>
                </div>
                <div className={cx('product-detail')}>
                    {/* Ảnh */}
                    <div className={cx('product-img')}>
                        {/* Ảnh đại di */}
                        <div className={cx('product-avt-img')}>
                            {/* <img src="https://cdn-app.kiotviet.vn/sample/fashion/38.png" /> */}
                            <Carousel data={listImage} width={280} height={275}/>
                        </div>
                        {/* List ảnh */}
                        <div className={cx('product-list-img')} style={{ margin: '0 24px 0 0px' }}>
                            {/* <img src="https://cdn-app.kiotviet.vn/sample/fashion/38.png"/> */}
                            {/* <Carousel responsive={responsive} swipeable={true}
                                draggable={true}
                                showDots={false}
                                >
                                <img src="https://cdn-app.kiotviet.vn/sample/fashion/38.png" className={cx('img-slider')} />
                                <img src="https://cdn-app.kiotviet.vn/sample/fashion/38.png" className={cx('img-slider')} />
                                <img src="https://cdn-app.kiotviet.vn/sample/fashion/38.png" className={cx('img-slider')} />
                                <img src="https://cdn-app.kiotviet.vn/sample/fashion/38.png" className={cx('img-slider')} />
                                <img src="https://cdn-app.kiotviet.vn/sample/fashion/38.png" className={cx('img-slider')} />
                                <img src="https://cdn-app.kiotviet.vn/sample/fashion/38.png" className={cx('img-slider')} />
                                <img src="https://cdn-app.kiotviet.vn/sample/fashion/38.png" className={cx('img-slider')} />
                                <img src="https://cdn-app.kiotviet.vn/sample/fashion/38.png" className={cx('img-slider')} />
                                <img src="https://cdn-app.kiotviet.vn/sample/fashion/38.png" className={cx('img-slider')} />

                            </Carousel> */}
                          

                        </div>
                    </div>


                    {/* info */}
                    <div className={cx('product-info')}>
                        {/* Form group */}
                        <div className={cx('form-group')}>
                            <label>Mã hàng: </label>
                            <div className={cx('info-value')}><strong>NU014</strong></div>
                        </div>

                        <div className={cx('form-group')}>
                            <label>Áo ba lỗ: </label>
                            <div className={cx('info-value')}>Áo</div>
                        </div>
                        <div className={cx('form-group')}>
                            <label>Loại hàng:</label>
                            <div className={cx('info-value')}>Áo thể thao</div>
                        </div>
                        <div className={cx('form-group')}>
                            <label>Giá bán:</label>
                            <div className={cx('info-value')}>3,520,000</div>
                        </div>
                        <div className={cx('form-group')}>
                            <label>Giá vốn:</label>
                            <div className={cx('info-value')}>1,720,000</div>
                        </div>
                        <div className={cx('form-group-text-area')}>
                            <div><label>Mô tả:</label></div>
                            <p style={{marginTop: '10px', color: '#777'}}>Chất liệu: 100% Polyester Xử lý hoàn thiện vải: Quick-Dry và Wicking Dệt kiểu Mesh, thoáng khí Hoạ tiết hình in chuyển nhiệt không lo bong tróc Phù hợp với: chơi thể thao, mặc ở nhà Kiểu dáng: Regular fit dáng suông Tự hào sản xuất tại Việt Nam</p>
                        </div>


                    </div>

                    {/* Bảng màu/size */}
                    <div className={cx('product-cz')}>
                        {/* Form group */}
                        <div className={cx('form-group-color-size')}>
                            <div><label>Bảng:</label></div>
                            <div style={{marginTop: '10px'}}>
                                <ColorSize />
                            </div>
                        </div>

                       
                    </div>
                </div>

                {/* Chức năng */}
                <div className={cx('product-fucntion')}>
                    <span className={cx('btn','btn-succeed')}><AiOutlineEdit style={{marginRight: '6px', fontSize: '16px'}}/>   Cập nhật </span>
                    <span className={cx('btn','btn-succeed')}><BiImport style={{marginRight: '6px', fontSize: '18px'}}/>   Nhập hàng </span>
                    <span className={cx('btn','btn-error')}><BiSolidLockAlt style={{marginRight: '6px', fontSize: '16px'}}/>   Ngừng kinh doanh</span>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;