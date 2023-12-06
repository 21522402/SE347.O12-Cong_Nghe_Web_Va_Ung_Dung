import styles from './Payment.module.scss'
import classNames from 'classnames/bind';
import TransportInfo from './TransportInfo';
import { useEffect, useRef, useState } from 'react';
import PaymentForm from './PaymentForm';
import Cart from './Cart';
import { BiLeftArrow } from 'react-icons/bi';
import { createOrder, getDefaultAddress } from '~/redux/api/userRequest';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetSuccess } from '~/redux/slices/userSlice';
const cx = classNames.bind(styles);

function Payment() {
    let address = useSelector(state => state.user?.cart?.address)

    let currentUser = useSelector((state) => state.auth.login.currentUser)
    let cartProducts = useSelector(state => state.user?.cart?.cartProducts)
    let isSuccess = useSelector(state => state.user?.cart?.isSuccess)


    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        getDefaultAddress(currentUser, dispatch)
    }, [])

    useEffect(() => {
        if(isSuccess){
            navigate("/successPayment")
        }
    }, [isSuccess])

    let transportInfo = useRef();
    let voucherInfo = useRef();

    const handlePayment = (paymentMethod) => {
        const voucherIF = voucherInfo?.current?.getChildVoucher()
        const {id, _id, ...main} = transportInfo?.current?.getChildSelected()
        
        const order = {
            "orderItem": cartProducts.map((item) => {
                return {
                    productId: item._id,
                    size: item.size,
                    image: item.product.colors.find((i) => i.colorName === item.color).images[0],
                    quantity: item.quantity,
                    color: item.color,
                    price: item.productPrice
                }
            }),
            "status": "Đang xử lý",
            "address": main ? main: null,
            "voucher": voucherIF ? {
                voucherPrice: voucherIF.voucherPrice,
                isPercent: voucherIF.isPercent,
                voucherCode: voucherIF.voucherCode,
            } : null
        }

        createOrder(currentUser, order, dispatch)
    }

    return ( <>
        <div className={cx('container')}>
            <div className={cx('nav_left')}>
                <div>
                    <span className={cx('title')}>Thông tin vận chuyển</span>
                    <TransportInfo _ref={transportInfo} props={address} userMail={currentUser.email}/>
                </div>
                <div style={{marginTop: '20px'}}>
                    <span className={cx('title')}>Hình thức thanh toán</span>
                    <PaymentForm handlePayment={handlePayment}/>
                </div>
            </div>
            <div className={cx('nav_right')}>
                <span className={cx('title')}>Giỏ hàng</span>
                <Cart _ref={voucherInfo}/>
            </div>
        </div>
    </> );
}

export default Payment;