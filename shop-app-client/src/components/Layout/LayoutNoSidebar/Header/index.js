import classNames from 'classnames/bind';
import { BsSearch } from 'react-icons/bs';
import { MdManageAccounts, MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';


const cx = classNames.bind(styles);

function Header() {
    return (
        
        <header className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-logo')}>
                    <Link to="/user" style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}>
                        Shop<span style={{ backgroundColor: 'white', color: 'black', borderRadius: '3px', padding: 0 }}>App</span>
                    </Link>
                </div>
                <ul className={cx('nav-bar')}>
                    <li className={cx('nav-item')}>
                        <Link to='/user' >
                            Shop
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to='/men' >
                            Men
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to='/women' >
                            Women
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to='/kid' >
                            kid
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to='' >
                            Product
                        </Link>
                    </li>
                </ul>
                <div className={cx("header-actions")}>
                    <div className={cx("header-actions-search")} >
                        <BsSearch fontSize={22} color="#797d8f" style={{ position: 'absolute', zIndex: '10', marginTop: '14px', marginLeft: '12px' }} />
                        <input id="search-input" type="text" name="keyword" rel-script="search-input" placeholder="Tìm kiếm sản phẩm.." autocomplete="off" className={cx("header-actions-search-input")} />
                    </div>
                    <div className={cx("header-actions-button")}>
                        <Link to="/">
                            <MdManageAccounts fontSize={32} color="white" />
                        </Link>
                    </div>
                    <div className={cx("header-actions-button cart-hover")}>
                        <Link to="/cart">
                            <MdShoppingCart fontSize={32} color="white" />
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;