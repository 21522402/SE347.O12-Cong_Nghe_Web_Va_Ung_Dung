import styles from './OrderItem.module.scss'
import classNames from 'classnames/bind';
import ProductItem from './ProductItem';
import { IoPersonOutline } from 'react-icons/io5';
import { BiMap, BiMapPin, BiMessageSquareDetail, BiPhoneCall, BiSitemap } from 'react-icons/bi';
import { useState } from 'react';
const cx = classNames.bind(styles);

function OrderItem({props}) {
    let [detail, setDetail] = useState(false)
    function calculateTotal(items){
        return items.reduce((total, item) => total + (item.price * item.discountPerc * item.quantity), 0);
    }
    return ( <>
        <div className={cx('container')}>
            <div className={cx('header')}>
                <div>
                    <span className={cx('title')}>Order place:</span> <br></br>{props.orderDate}
                </div>
                <div>
                    <span className={cx('title')}>Order total:</span> <br></br>{new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(calculateTotal(props.orderItem))}
                </div>
                <div>
                    <span className={cx('title')}>Order status:</span> <br></br><span style={{color: '#ED232F'}}>{props.status}</span>
                </div>
                <div onClick={() => setDetail(!detail)} style={{width: '106px'}}><span className={cx('title')} style={{color: '#4bc7bf', cursor: 'pointer'}}>{detail ? 'Less detail' : 'More detail'}</span></div>
            </div>
            <div className={cx('body')}>
                <div className={cx(detail ? 'address-active' : 'address')}>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#4bac4d' }}>
                        Đơn đặt hàng #100072367 <span style={{ color: '#000' }}/>/ <span style={{color: '#ED232F', marginLeft: '5px'}}>Đang giao</span>
                    </div>
                    <div style={{ display: 'flex', gap: '48px', marginTop: '8px' }}>
                        <div style={{ width: '30%' }}>
                            <div className={cx('form-group')}>
                                <label>Ngày đặt: </label>
                                <div className={cx('info-value')}>15/02/203</div>
                            </div>
                            <div className={cx('form-group')}>
                                <label>Số sản phẩm: </label>
                                <div className={cx('info-value')}>4</div>
                            </div>

                        </div>
                        <div style={{ width: '30%' }}>
                            <div className={cx('form-group')}>
                                <label>Tiền hàng: </label>
                                <div className={cx('info-value')}>4,000,000 VNĐ</div>
                            </div>
                            <div className={cx('form-group')}>
                                <label>Phí ship:
                                </label>
                                <div className={cx('info-value')}>200,000 VNĐ</div>
                            </div>

                        </div>

                    </div>
                    <div style={{ width: '60%' }}>
                        <div className={cx('form-group', 'single')} style={{ width: 'calc(100% + 48px)' }}>
                            <label>Tổng tiền: </label>
                            <div className={cx('info-value')}>4,200,000 VNĐ</div>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', justifyContent: 'space-between'}}>
                    <div style={{flex: 1}}>
                        <label className={cx(detail ? 'label-active' : 'label')} style={{fontSize: '16px', fontWeight: '600'}}>Danh sách sản phẩm</label>
                        <div className={cx('containerProduct')}>
                            {
                                props.orderItem.map((item, index) => {
                                    return <div style={props.orderItem.length - 1 !== index ? {margin: '0px 10px', padding: '10px 0px', borderBottom: '0.5px solid #99e0dc'}: {margin: '0px 10px', padding: '10px 0px'}}>
                                        <ProductItem key={index} props={item}/>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className={cx(detail ? 'price-active' : 'priceDetail')} style={{ marginLeft: '20px'}}>
                        <div style={{height: '100%', width: '300px'}}>
                            <label style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Thông tin giao hàng</label>
                            <div style={{height: '86%', paddingRight: '12px', borderLeft: '2px solid rgb(75, 172, 77)'}}>
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
                    </div>
                </div>
            </div>
        </div>
    </> );
}

export default OrderItem;