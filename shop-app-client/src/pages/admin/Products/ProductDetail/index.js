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
            src: 'https://cdn-app.kiotviet.vn/sample/fashion/38.png'
        },
        {
            src: 'https://cdn2-retail-images.kiotviet.vn/quichua333/17020689ffc24e6eb5483cb7376ed1ba.jpg'
        },
        {
            src: 'https://cdn-app.kiotviet.vn/sample/fashion/38.png'
        },
        {
            src: 'https://cdn2-retail-images.kiotviet.vn/quichua333/17020689ffc24e6eb5483cb7376ed1ba.jpg'
        }

    ]
    const imageProductDefault = 'https://cdn-app.kiotviet.vn/retailler/Content/img/default-product.png';
    const [productAvt, setProductAvt] = useState(listImage.length > 0 ? listImage[0].src : imageProductDefault);
    const [indexImageActive, setIndexImageActive] = useState(0);
    const handleClickImage = (src, index) => {
        setProductAvt(src)
        setIndexImageActive(index)

    }
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
                 <div className={cx('container-img')}>
                 <div className={cx('product-img')}>
                        {/* Ảnh đại di */}
                        <div className={cx('container-avt')}><img src={productAvt} className={cx('product-avt')} /></div>
                        {/* List ảnh */}
                        <div  className={cx('container-product-list-img')}>
                            <ul className={cx('product-list-img')}>


                                {
                                    listImage.length > 0 ? listImage.map((item, index) => {
                                        return (
                                            <li key={index} onClick={() => handleClickImage(item.src, index)} className={cx('product-item-img', {
                                                active: index === indexImageActive
                                            })}>
                                                <img src={item.src} />
                                            </li>
                                        )
                                    }) : <li className={cx('product-item-img', 'active')}>
                                        <img src='https://cdn-app.kiotviet.vn/retailler/Content/img/default-product.png' />
                                    </li>

                                }


                            </ul>
                        </div>
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
                        <div className={cx('form-group-description')}>
                            <div><label>Mô tả:</label></div>
                            <div className={cx('description')}>
                                <p>
                                Chất liệu: 100% Polyester Xử lý hoàn thiện vải: Quick-Dry và Wicking Dệt kiểu Mesh, thoáng khí Hoạ tiết hình in chuyển nhiệt không lo bong tróc Phù hợp với: chơi thể thao, mặc ở nhà Kiểu dáng: Regular fit dáng suông Tự hào sản xuất tại Việt Nam
                                và Wicking Dệt kiểu Mesh, thoáng khí Hoạ tiết hình in chuyển nhiệt không lo bong tróc Phù hợp với: chơi thể thao, mặc ở nhà Kiểu dáng: Regular fit dáng suông Tự hào sản xuất tại Việt Nam
                                </p>
                            </div>
                            
                        </div>


                    </div>

                    {/* Bảng màu/size */}
                    <div className={cx('product-cz')}>
                        {/* Form group */}
                        <div className={cx('form-group-color-size')}>
                            <div><label>Bảng:</label></div>
                            <div style={{ marginTop: '10px' }}>
                                <ColorSize />
                            </div>
                        </div>


                    </div>
                </div>

                {/* Chức năng */}
                <div className={cx('product-fucntion')}>
                    <span className={cx('btn', 'btn-succeed')}><AiOutlineEdit style={{ marginRight: '6px', fontSize: '16px' }} />   Cập nhật </span>
                    <span className={cx('btn', 'btn-succeed')}><BiImport style={{ marginRight: '6px', fontSize: '18px' }} />   Nhập hàng </span>
                    <span className={cx('btn', 'btn-error')}><BiSolidLockAlt style={{ marginRight: '6px', fontSize: '16px' }} />   Ngừng kinh doanh</span>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;