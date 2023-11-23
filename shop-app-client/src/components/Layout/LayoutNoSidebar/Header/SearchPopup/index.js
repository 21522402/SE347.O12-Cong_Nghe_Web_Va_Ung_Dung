import styles from './SearchPopup.module.scss'
import classNames from 'classnames/bind';
import ItemSearch from './ItemSearch';
const cx = classNames.bind(styles);


function SearchPopup({ onMouseLeave }) {
    return (
        <div onMouseMove={() => onMouseLeave()} className={cx('wrapper')}>
            <div onMouseMove={(e) => e.stopPropagation()} className={cx('inner')}>
                <div className={cx('separate')}>

                </div>

                <div className={cx('title')}>
                    Sản phẩm
                </div>

                <div className={cx('list-product-filter')}>
                    <ItemSearch />
                    <ItemSearch />
                    <ItemSearch />
                    <ItemSearch />
                </div>
                <div style={{textAlign: 'center', marginTop: '16px'}}>
                    <div className={cx('btn-view-all')}>Xem tất cả</div>
                </div>
            </div>
        </div>
    );
}

export default SearchPopup;