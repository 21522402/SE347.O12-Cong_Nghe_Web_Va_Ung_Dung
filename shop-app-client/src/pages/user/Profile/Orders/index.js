import styles from './Orders.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Orders() {
    return ( 
        <>
            <div className={cx('container')}>
                <h1 className={cx('account-page__title')}>Lịch sử đơn hàng</h1>
            </div>
        </>
    );
}

export default Orders;