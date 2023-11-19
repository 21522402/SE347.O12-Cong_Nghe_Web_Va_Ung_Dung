import styles from './Payment.module.scss'
import classNames from 'classnames/bind';
import TransportInfo from './TransportInfo';
import { useEffect, useState } from 'react';
import PaymentForm from './PaymentForm';
import Cart from './Cart';
const cx = classNames.bind(styles);

function Payment() {
    
    const provinces = [{id: 1, name: "Quảng Ngãi"}, {id: 2, name: "Hải Phòng"}, {id: 3, name: "Hồ Chí Minh"}, {id: 4, name: "Hồ Chí Minh"}, {id: 5, name: "Hồ Chí Minh"}, {id: 6, name: "Hồ Chí Minh"}, {id: 7, name: "Miền núi chất"}]
    const defaults = [{id: 1, name: "Đặt làm mặc định"}]
    return ( <>
        <div className={cx('container')}>
            <div className={cx('nav_left')}>
                <div>
                    <span className={cx('title')}>Thông tin vận chuyển</span>
                    <TransportInfo/>
                </div>
                <div style={{marginTop: '20px'}}>
                    <span className={cx('title')}>Hình thức thanh toán</span>
                    <PaymentForm/>
                </div>
            </div>
            <hr style={{height: '100%', width: '1px', background: '#f1f1f1'}}/>
            <div className={cx('nav_right')}>
                <span className={cx('title')}>Giỏ hàng</span>
                <Cart/>
            </div>
        </div>
    </> );
}

export default Payment;