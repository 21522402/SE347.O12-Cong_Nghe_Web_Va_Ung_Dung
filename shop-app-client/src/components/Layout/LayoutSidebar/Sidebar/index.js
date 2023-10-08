import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind';
import {
    AiOutlineApartment,
    AiOutlineHome,
    AiOutlineHistory,
    AiOutlineTags
} from "react-icons/ai";
import {PiShirtFolded} from 'react-icons/pi'
import { MdOutlineAnalytics,MdOutlineRateReview } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import {BiMessageError} from 'react-icons/bi'
import { useState } from 'react';
const cx = classNames.bind(styles);
function Sidebar() {
    const [activeItem , setActiveItem ] = useState(null)
    const handleClickItem = (item) =>{
        setActiveItem(item)
    }
    return (

        <div class="d-flex flex-column flex-shrink-0 p-5 text-bg-dark" style={{ width: "250px", position: 'fixed', top:0, left: 0, bottom:0 }}>
            <div className={cx(`header-logo` )} >
                    <Link to="/admin" style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}>
                        Shop<span style={{ backgroundColor: 'white', color: 'black', borderRadius: '3px', padding: '0' }}>App</span>
                    </Link>
                </div>
            <hr />
            <div class="d-flex nav nav-pills flex-column mb-auto pt-2">
                <div className={cx('sidebar-item')} >
                    <Link to={'/admin'}  className={cx(`sidebar-item-link`, {
                        'active-item':activeItem==='Dashboard'
                    } )} onClick={()=>{handleClickItem('Dashboard')}}>
                        <AiOutlineHome className={cx('sidebar-icon')}/>
                        <div>Dashboard</div>
                    </Link>
                </div>
                <div className={cx('sidebar-item')}>
                    <Link to={'/admin'}  className={cx(`sidebar-item-link`, {
                        'active-item':activeItem==='Orders'
                    } )} onClick={()=>{handleClickItem('Orders')}}>
                        <MdOutlineAnalytics className={cx('sidebar-icon')}/>
                        <div>Orders</div>
                    </Link>
                </div>
                <div className={cx('sidebar-item')}>
                    <Link to={'/admin'}  className={cx('sidebar-item-link', {
                        'active-item':activeItem==='Storage'
                    } )} onClick={()=>{handleClickItem('Storage')}}>
                        <AiOutlineApartment className={cx('sidebar-icon')}/>
                        <div>Storage</div>
                    </Link>
                </div>
                <div className={cx('sidebar-item')}>
                    <Link to={'/admin'}  className={cx('sidebar-item-link', {
                        'active-item':activeItem==='Products'
                    } )} onClick={()=>{handleClickItem('Products')}}>
                        <PiShirtFolded className={cx('sidebar-icon')}/>
                        <div>Products</div>
                    </Link>
                </div>
                <div className={cx('sidebar-item')}>
                    <Link to={'/admin'}  className={cx('sidebar-item-link', {
                        'active-item':activeItem==='Customer'
                    } )} onClick={()=>{handleClickItem('Customer')}}>
                        <BsPeople className={cx('sidebar-icon')}/>
                        <div>Customer</div>
                    </Link>
                </div>
                <div className={cx('sidebar-item')}>
                    <Link to={'/admin'}  className={cx('sidebar-item-link', {
                        'active-item':activeItem==='Vouchers'
                    })} onClick={()=>{handleClickItem('Vouchers')}}>
                        <AiOutlineTags className={cx('sidebar-icon')}/>
                        <div>Vouchers</div>
                    </Link>
                </div>
                <div className={cx('sidebar-item')}>
                    <Link to={'/admin'}  className={cx('sidebar-item-link', {
                        'active-item':activeItem==='Reviews'
                    })} onClick={()=>{handleClickItem('Reviews')}}>
                        <MdOutlineRateReview className={cx('sidebar-icon')}/>
                        <div>Reviews</div>
                    </Link>
                </div>
                <div className={cx('sidebar-item')}>
                    <Link to={'/admin'}  className={cx('sidebar-item-link', {
                        'active-item':activeItem==='Ideas'
                    })} onClick={()=>{handleClickItem('Ideas')}}>
                        <BiMessageError className={cx('sidebar-icon')}/>
                        <div>Ideas</div>
                    </Link>
                </div>
                <div className={cx('sidebar-item')}>
                    <Link to={'/admin'}  className={cx('sidebar-item-link', {
                        'active-item':activeItem==='History'
                    })} onClick={()=>{handleClickItem('History')}}>
                        <AiOutlineHistory className={cx('sidebar-icon')}/>
                        <div>History</div>
                    </Link>
                </div>
                
            </div>
            <hr />
            <div class="dropdown">
                <Link href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                    <strong>Admin</strong>
                </Link>
                
            </div>
        </div>


    );
}

export default Sidebar;