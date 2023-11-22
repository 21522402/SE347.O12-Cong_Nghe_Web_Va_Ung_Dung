import classNames from "classnames/bind";
import {  AiOutlineClose } from "react-icons/ai";


import styles from './OrderItem.module.scss'

const cx = classNames.bind(styles)

function OrderItem({index}) {
    return (
        <div className={cx('wrapper')}>
          

            <div className={cx('image-wrapper')}>
                <img src='https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/QD001.7_43.jpg' />
                <span className={cx('stt')}>{index+1}</span>
            </div>

            <div className={cx('item-info')}>
                <div className={cx('item-name')}>
                Quần dài thể thao Pro Active
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <span className={cx('color-size')}>
                    Xanh Navy / L
                    </span>
                    <span className={cx('color-size')}>
                    Quần / Quần dài
                    </span>
                </div>
                <div style={{display: 'flex', alignItems:'center'}}>
                    <span className={cx('quantity')}>
                    Số lượng: <strong style={{marginLeft: '4px'}}>2</strong>
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}} >
                        <span className={cx('price','enable')}>
                        270,000</span>
                        <span className={cx('price','price-serapate')}>310,000</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;