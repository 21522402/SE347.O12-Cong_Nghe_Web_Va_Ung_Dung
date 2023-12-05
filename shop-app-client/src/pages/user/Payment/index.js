import styles from './Payment.module.scss'
import classNames from 'classnames/bind';
import TransportInfo from './TransportInfo';
import { useEffect, useRef, useState } from 'react';
import PaymentForm from './PaymentForm';
import Cart from './Cart';
import { BiLeftArrow } from 'react-icons/bi';
import { getDefaultAddress } from '~/redux/api/userRequest';
import { useDispatch, useSelector } from 'react-redux';
const cx = classNames.bind(styles);

function Payment() {
    let address = useSelector(state => state.user?.cart?.address)

    let currentUser = useSelector((state) => state.auth.login.currentUser)
    let cartProducts = useSelector(state => state.user?.cart?.cartProducts)


    const dispatch = useDispatch()

    useEffect(() => {
        getDefaultAddress(currentUser, dispatch)
    }, [])

    let transportInfo = useRef();

    const handlePayment = (paymentMethod) => {
        console.log(transportInfo?.current?.getChildSelected())
        console.log(paymentMethod)
        console.log(cartProducts)
    }

    return ( <>
        <div className={cx('container')}>
            <div className={cx('nav_left')}>
                <div>
                    <span className={cx('title')}>Thông tin vận chuyển</span>
                    <TransportInfo ref={transportInfo} props={address} userMail={currentUser.email}/>
                </div>
                <div style={{marginTop: '20px'}}>
                    <span className={cx('title')}>Hình thức thanh toán</span>
                    <PaymentForm handlePayment={handlePayment}/>
                </div>
            </div>
            <div className={cx('nav_right')}>
                <span className={cx('title')}>Giỏ hàng</span>
                <Cart/>
            </div>
        </div>
    </> );
}

export default Payment;