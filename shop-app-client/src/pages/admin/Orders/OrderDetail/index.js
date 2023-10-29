import classNames from "classnames/bind";
import { AiOutlineSearch, AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
import { FaFileImport, FaFileExport } from "react-icons/fa";
import { IoSquareOutline, IoCheckboxSharp } from "react-icons/io5";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdPublish } from "react-icons/md";
import { BiImport, BiSolidLockAlt } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { BiMap, BiMapPin, BiSitemap, BiPhoneCall, BiMessageSquareDetail } from "react-icons/bi";


import { useContext } from "react";


import { useState } from "react";


import styles from './OrderDetail.module.scss'
import OrderItem from "./OrderItem";

const cx = classNames.bind(styles)

function OrderDetail() {
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
                <div className={cx('order-container')}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#4bac4d' }}>
                        Đơn đặt hàng #100072367 <span style={{ color: '#000' }}>/ Trạng thái: <span style={{ color: 'red' }}>Chờ xác nhận</span></span>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <span style={{ display: 'inline-block', width: '100px', fontWeight: '600' }}>Ngày đặt: </span>
                        <span style={{ fontWeight: '600' }}>15/02/203</span>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <span style={{ display: 'inline-block', width: '100px', fontWeight: '600' }}>Số sản phẩm: </span>
                        <span style={{ fontWeight: '600' }}>4</span>
                    </div><div style={{ display: 'flex' }}>
                        <span style={{ display: 'inline-block', width: '100px', fontWeight: '600' }}>Tổng tiền: </span>
                        <span style={{ fontWeight: '600' }}>4,200,000 VNĐ</span>
                    </div>
                    <div style={{ display: 'flex', overflow: 'hidden', marginTop: '16px' }}>
                        <div style={{ marginTop: '16px', width: '54%', marginRight: '32px' }}>
                            <label style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Danh sách sản phẩm</label>
                            <div style={{ gap: '16px', display: 'flex', flexDirection: 'column' }}>
                                {
                                    [1, 2, 3, 4].map((item, index) => {
                                        return (
                                            <OrderItem key={index} index={index} />
                                        )
                                    })
                                }
                            </div>
                            <div>

                            </div>
                        </div>
                        <div style={{ marginTop: '16px', marginLeft: '32px' }}>
                            <label style={{ fontSize: '16px', fontWeight: '600', marginLeft: '32px', marginBottom: '16px' }}>Thông tin khách hàng</label>
                            <div style={{ borderLeft: '2px solid #4bac4d', height: '100%', paddingLeft: '32px', fontSize: '14px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img style={{ width: '100px', height: '100px' }} src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" />

                                    <div style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>

                                        <div style={{ display: 'flex' }}>
                                            <span style={{ display: 'inline-block', width: '110px', fontWeight: '600' }}>Khách hàng:</span>
                                            <span style={{ fontWeight: '600' }}>Nguyễn Văn A</span>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <span style={{ display: 'inline-block', width: '110px', fontWeight: '600' }}>SĐT:</span>
                                            <span style={{ fontWeight: '600' }}>0868208744</span>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <span style={{ display: 'inline-block', width: '110px', fontWeight: '600' }}>Email: </span>
                                            <span style={{ fontWeight: '600' }}>vana@gmail.com</span>
                                        </div>

                                    </div>
                                </div>
                                <div style={{ marginTop: '48px' }}>
                                    <label style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Thông tin giao hàng</label>
                                    <div style={{ marginLeft: '16px', fontSize: '14px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <span style={{ display: 'inline-block', width: '150px', fontWeight: '600' }}>
                                                <span><IoPersonOutline style={{ marginRight: '6px' }} /></span>
                                                Người nhận:</span>
                                            <span >Nguyễn Văn A</span>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <span style={{ display: 'inline-block', width: '150px', fontWeight: '600' }}>
                                                <span><BiPhoneCall style={{ marginRight: '6px' }} /></span>
                                                SĐT:</span>
                                            <span >0868208744</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <span style={{ display: 'inline-block', width: '150px', fontWeight: '600' }}>
                                                <span><BiMap style={{ marginRight: '6px' }} /></span>
                                                Tỉnh / TP:</span>
                                            <span >Quảng Ngãi</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <span style={{ display: 'inline-block', width: '150px', fontWeight: '600' }}>
                                                <span><BiMapPin style={{ marginRight: '6px' }} /></span>
                                                Quận / Huyện:</span>
                                            <span >Bình Sơn</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <span style={{ display: 'inline-block', width: '150px', fontWeight: '600' }}>
                                                <span><BiSitemap style={{ marginRight: '6px' }} /></span>
                                                Xã / Thị trấn:</span>
                                            <span >Bình Thuận</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <span style={{ display: 'inline-block', width: '150px', fontWeight: '600' }}>
                                                <span><BiMessageSquareDetail style={{ marginRight: '6px' }} /></span>
                                                Chi tiết:</span>
                                            <span >Thôn tuyết diêm 2</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>

                        </div>
                    </div>


                </div>
                {/* Chức năng */}
                <div className={cx('product-fucntion')}>
                    <span className={cx('btn', 'btn-succeed')} ><AiOutlineEdit style={{ marginRight: '6px', fontSize: '16px' }} />   Cập nhật </span>
                    <a href="/admin/products/import" className={cx('btn', 'btn-succeed')}><BiImport style={{ marginRight: '6px', fontSize: '18px' }} />   Nhập hàng </a>
                    <span className={cx('btn', 'btn-error')}><BiSolidLockAlt style={{ marginRight: '6px', fontSize: '16px' }} />   Ngừng kinh doanh</span>
                    <span className={cx('btn', 'btn-succeed')}><MdPublish style={{ marginRight: '6px', fontSize: '16px' }} />   Đăng bán</span>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;