import styles from './Reviews.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Reviews() {
    return ( 
        <>
            <div className={cx('container')}>
                <h1 className={cx('account-page__title')}>Đánh giá và phản hồi</h1>
            </div>
        </>
    );
}

export default Reviews;