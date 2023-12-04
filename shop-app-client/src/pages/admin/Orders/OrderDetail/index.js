import classNames from "classnames/bind";
import { AiOutlineSearch, AiFillCaretDown, AiFillCaretUp, AiOutlineSave } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { BiMap, BiMapPin, BiSitemap, BiPhoneCall, BiMessageSquareDetail } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeOrderStatus } from "~/redux/slices/orderAdminSlice";


import { useEffect, useRef } from "react";


import { useState } from "react";


import styles from './OrderDetail.module.scss'
import OrderItem from "./OrderItem";
import DropDown from "../../Products/DropDown";

const cx = classNames.bind(styles)

function OrderDetail({ index }) {
    const dispatch = useDispatch()
    const order = useSelector(state => state.orderAdmin.listOrders[index])
    const [status, setStatus] = useState(order.status)
    const [showListStatus, setShowListStatus] = useState(false);
    const [listStatus, setListStatus] = useState(['Đã xác nhận', 'Đang giao hàng', 'Giao thành công', 'Đã hủy'])
    const handleClickItemStatus = (item) => {
        setStatus(item)
        // dispatch(handleChangeOrderStatus({index, status: item}))
    }
    const statusElement = useRef(null);
    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (statusElement.current && !statusElement.current.contains(e.target)) {
                setShowListStatus(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutSide)
        return () => {
            document.removeEventListener("mousedown", handleClickOutSide)

        }
    }, [statusElement])

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
                        Đơn đặt hàng {`#${order._id}`} <span style={{ color: '#000' }}>/ Trạng thái
                            <div ref={statusElement} className={cx('product-category-select', { active: showListStatus })} onClick={() => setShowListStatus(prev => !prev)}>
                                <span style={{ color: status === 'Chờ xác nhận' || status === 'Đã hủy' ? 'red' : '#4eb7f5' }}>{status}</span>
                                <span> {!showListStatus ? <AiFillCaretDown /> : <AiFillCaretUp />}</span>
                                {showListStatus && <DropDown items={listStatus} style={{ width: '100%', left: '0', top: '35px', fontWeight: '500' }} onClick={handleClickItemStatus} />}
                            </div>
                        </span>




                    </div>
                    <div style={{ display: 'flex', gap: '48px', marginTop: '8px' }}>
                        <div style={{ width: '30%' }}>
                            <div className={cx('form-group')}>
                                <label>Ngày đặt: </label>
                                <div className={cx('info-value')}>{order.orderDate}</div>
                            </div>
                            <div className={cx('form-group')}>
                                <label>Số sản phẩm: </label>
                                <div className={cx('info-value')}>{order.orderItem.length}</div>
                            </div>

                        </div>
                        <div style={{ width: '30%' }}>
                            <div className={cx('form-group')}>
                                <label>Tiền hàng: </label>
                                <div className={cx('info-value')}>{order.totalMoneyGoods + 'VNĐ'}</div>
                            </div>
                            <div className={cx('form-group')}>
                                <label>Phí ship:
                                </label>
                                <div className={cx('info-value')}>{order.shipPrice + ' VNĐ'}</div>
                            </div>

                        </div>

                    </div>
                    <div style={{ display: 'flex', gap: '48px' }}>

                        <div className={cx('form-group', 'single')} style={{ width: '30%' }}>
                            <label>Tổng tiền: </label>
                            <div className={cx('info-value')}>{order.finalPrice + ' VNĐ'}</div>
                        </div>
                        <div className={cx('form-group', 'single')} style={{ width: '30%' }} >
                            <label>Voucher: </label>
                            <div className={cx('info-value')}>{order.voucher.voucherPrice + ' VNĐ'}</div>
                        </div>

                    </div>
                    <div style={{ display: 'flex', overflow: 'hidden', marginTop: '16px' }}>
                        <div style={{ marginTop: '16px', width: '54%', marginRight: '32px' }}>
                            <label style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Danh sách sản phẩm</label>
                            <div className={cx('order-item-wrapper')}>
                                {
                                    order.orderItem.map((item, index) => {
                                        return (
                                            <OrderItem key={index} index={index} orderItem={item} />
                                        )
                                    })
                                }
                            </div>
                            <div>

                            </div>
                        </div>
                        <div style={{ marginTop: '16px', marginLeft: '32px' }}>
                            <label style={{ fontSize: '16px', fontWeight: '600', marginLeft: '32px', marginBottom: '16px' }}>Thông tin khách hàng</label>
                            <div style={{ borderLeft: '3px solid #4bac4d', height: '100%', paddingLeft: '32px', fontSize: '14px' }}>
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
                                            <span >{order.address.name}</span>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <span style={{ display: 'inline-block', width: '150px', fontWeight: '600' }}>
                                                <span><BiPhoneCall style={{ marginRight: '6px' }} /></span>
                                                SĐT:</span>
                                            <span >{order.address.phoneNumber}</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <span style={{ display: 'inline-block', width: '150px', fontWeight: '600' }}>
                                                <span><BiMap style={{ marginRight: '6px' }} /></span>
                                                Tỉnh / TP:</span>
                                            <span >{order.address.province}</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <span style={{ display: 'inline-block', width: '150px', fontWeight: '600' }}>
                                                <span><BiMapPin style={{ marginRight: '6px' }} /></span>
                                                Quận / Huyện:</span>
                                            <span >{order.address.district}</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <span style={{ display: 'inline-block', width: '150px', fontWeight: '600' }}>
                                                <span><BiSitemap style={{ marginRight: '6px' }} /></span>
                                                Xã / Thị trấn:</span>
                                            <span >{order.address.ward}</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <span style={{ display: 'inline-block', width: '150px', fontWeight: '600' }}>
                                                <span><BiMessageSquareDetail style={{ marginRight: '6px' }} /></span>
                                                Chi tiết:</span>
                                            <span >{order.address.detail}</span>
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

                    <span className={cx('btn', 'btn-succeed')}><AiOutlineSave style={{ marginRight: '6px', fontSize: '16px' }} />  Lưu</span>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;