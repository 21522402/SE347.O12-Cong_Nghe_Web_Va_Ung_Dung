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
                    <span className={cx('title')}>Order ID:</span> <br></br>{props.orderId}
                </div>
                <div>
                    <span className={cx('title')}>Order place:</span> <br></br>{props.orderDate}
                </div>
                <div>
                    <span className={cx('title')}>Order total:</span> <br></br>{new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(calculateTotal(props.orderItem))}
                </div>
                <div>
                    <span className={cx('title')}>Order status:</span> <br></br><span style={{color: '#2f5acf'}}>{props.status}</span>
                </div>
            </div>
            <div className={cx('body')}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'top', justifyContent: 'space-between'}}>
                    <div style={{flex: 1}}>
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
                </div>
            </div>
        </div>
    </> );
}

export default OrderItem;