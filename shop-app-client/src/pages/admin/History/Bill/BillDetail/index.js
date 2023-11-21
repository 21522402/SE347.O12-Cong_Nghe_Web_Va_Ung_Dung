import classNames from "classnames/bind";
import { AiOutlineSearch, AiFillCaretDown, AiFillCaretUp, AiOutlineEdit, AiOutlinePlu, AiOutlineSave } from "react-icons/ai";
import { FaFileImport, FaFileExport } from "react-icons/fa";
import { IoSquareOutline, IoCheckboxSharp } from "react-icons/io5";
import { BsCheckLg } from "react-icons/bs";
import { MdPublish } from "react-icons/md";
import { BiImport, BiSolidLockAlt } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { BiMap, BiMapPin, BiSitemap, BiPhoneCall, BiMessageSquareDetail } from "react-icons/bi";



import { useContext, useEffect } from "react";


import { useState } from "react";


import styles from './BillDetail.module.scss'
import DropDown from "~/pages/admin/Products/DropDown";
import OrderItem from "~/pages/admin/Orders/OrderDetail/OrderItem";
import BillItemRow from "./BillItemRow";

const cx = classNames.bind(styles)

function BillDetail() {
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
    const [status, setStatus] = useState('Chờ xác nhận')
    const [indexImageActive, setIndexImageActive] = useState(0);
    const handleClickImage = (src, index) => {
        setProductAvt(src)
        setIndexImageActive(index)

    }
    const [showListStatus, setListShowStatus] = useState(false);
    const [listStatus, setListStatus] = useState(['Đã xác nhận', 'Đang giao hàng', 'Giao thành công', 'Đã hủy'])
    const handleClickItemStatus = (item) => {
        setStatus(item)
    }


    // const [listStatus,setListStatus] = useState(['Xác '])
    return (
        <div className={cx('wrapper')}>
            {/* Header */}
            <div className={cx('header')}>
                <div className={cx('tabpanel')}>Thông tin</div>
            </div>

            {/* Body */}
            <div className={cx('product-container')}>
                <div className={cx('order-container')}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#4bac4d' }}>
                        Hóa đơn #100072367

                    </div>
                    <div style={{ marginTop: '8px' }}>
                        <div className={cx('wrap-form-groups')}>
                            <div className={cx('form-group', 'no-border')} style={{ width: '30%' }}>
                                <label>Mã đơn hàng: </label>
                                <div className={cx('info-value')}>#100072367</div>
                            </div>
                            <div className={cx('form-group', 'no-border')} style={{ width: '30%' }}>
                                <label>Khách hàng: </label>
                                <div className={cx('info-value')}>Nguyễn Văn Phát</div>
                            </div>
                            <div className={cx('form-group', 'no-border')} style={{ width: '30%' }}>
                                <label>Số điện thoại: </label>
                                <div className={cx('info-value')}>0868208744</div>
                                {/* 15/08/2019 11:05 */}
                            </div>

                        </div>
                        <div className={cx('wrap-form-groups')}>
                            <div className={cx('form-group')} style={{ width: '30%' }}>
                                <label>Thời gian: </label>
                                <div className={cx('info-value')}>15/08/2019 11:05</div>
                            </div>
                            <div className={cx('form-group')} style={{ width: '30%' }}>
                                <label>Phương thức: </label>
                                <div className={cx('info-value')}>Thanh toán trực tuyến</div>
                            </div>
                            <div className={cx('form-group')} style={{ width: '30%' }}>
                                <label>Số sản phẩm: </label>
                                <div className={cx('info-value')}>4</div>
                            </div>

                        </div>
                        <div className={cx('wrap-form-groups')}>
                            <div className={cx('form-group')} style={{ width: '30%' }}>
                                <label>Tiền hàng: </label>
                                <div className={cx('info-value')}>4,000,000 VNĐ</div>
                            </div>
                            <div className={cx('form-group')} style={{ width: '30%' }}>
                                <label>Phí ship: </label>
                                <div className={cx('info-value')}>200,000 VNĐ</div>
                            </div>
                            <div className={cx('form-group')} style={{ width: '30%' }}>
                                <label>Tổng tiền: </label>
                                <div className={cx('info-value')}>4,200,000 VNĐ</div>
                            </div>

                        </div>



                    </div>

                    <div className={cx('tableView')}>
                        <table className={cx('table')}>
                            <thead className={cx('thead')}>
                                <tr>
                                    {/* <th className={cx('delete')}></th> */}
                                    <th className={cx('code')}>Mã sản phẩm</th>
                                    <th className={cx('name')}>Tên sản phẩm</th>
                                    <th className={cx('type')}>Loại</th>
                                    <th className={cx('color-size')}>Màu/Size</th>
                                    <th className={cx('quantity')}>Số lượng</th>
                                    <th className={cx('unitPrice')}>Đơn giá</th>
                                    <th className={cx('discountPrice')}>Giá giảm</th>
                                    <th className={cx('sellPrice')}>Giá bán</th>
                                    <th className={cx('price')}>Thành tiền</th>

                                </tr>
                            </thead>
                            <tbody>

                                {[0, 1, 2, 3, 4].map((item, index) => {
                                    return (
                                        <BillItemRow key={index} />
                                    )
                                })}

                            </tbody>
                        </table>

                    </div>


                </div>
                {/* Chức năng */}
                <div className={cx('product-fucntion')}>

                    <span className={cx('btn', 'btn-succeed')}><AiOutlineSave style={{ marginRight: '6px', fontSize: '16px' }} />  Lưu</span>
                </div>
            </div>
        </div>
    );
}

export default BillDetail;