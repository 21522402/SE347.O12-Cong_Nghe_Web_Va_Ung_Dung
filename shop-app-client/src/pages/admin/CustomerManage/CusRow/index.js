import React, { useRef, useState } from "react";
import { BiLock, BiLockOpen } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import BillDetailCus from "../BillDetailCus";
import classNames from 'classnames/bind';

import styles from './CusRow.module.scss'
import convertDate from "~/utils/convertDate";
import axios from "axios";
import baseUrl from "~/utils/baseUrl";

const cx = classNames.bind(styles);

function CusRow({ item, index, currentPage,setCustomerList }) {
    const element = useRef(null)
    // const [isActive, setIsActive] = useState(item.isActive)
    const [openDetail, setOpenDetail] = useState(false);
    const [MaKH] = useState((index + (currentPage - 1) * 10 + 1).toString().length === 1
        ? `KH0${index + (currentPage - 1) * 10 + 1}`
        : 'KH' + (index + (currentPage - 1) * 10 + 1));
    const handleClickProducItem = () => {
        setOpenDetail(prev => !prev);
    }
    const handleBlock = async () => {
        try {
            await axios.post(`${baseUrl}/api/users/update-active-buyer/${item.id}`, {});
            setCustomerList(prev=>{
                const arr = [...prev]
                arr[index].isActive = !item.isActive 
                return arr
            })
        } catch (error) {
            console.log(error.response.data.error.message)
        }
    }
    return (
        <React.Fragment>
            <tr className={cx('row-item', { showDetail: openDetail })} ref={element}>
                <td style={{ paddingLeft: '22px', width: '10%' }}>{MaKH}</td>
                <td style={{ width: '20%' }}>{item.fullName}</td>
                <td style={{ width: '17%' }}>{item.phoneNumber}</td>
                <td style={{ width: '14%' }}>{convertDate(item.createdAt)}</td>
                <td style={{ width: '14%' }}>{item.totalAmount}</td>
                <td style={{ width: '14%' }}>
                    <div className={cx({ 'expired-item': !item.isActive }, { 'unExpired-item': item.isActive })}>
                        {item.isActive ? 'Hoạt động' : 'Bị khóa'}
                    </div>
                </td>
                <td>
                    <div style={{ display: 'flex' }}>
                        <button onClick={handleClickProducItem} style={{ marginRight: '4px' }}>
                            <BsEye fontSize={20} color='blue' />
                        </button>
                        <button onClick={handleBlock}>
                            {
                                item.isActive
                                    ? <BiLock fontSize={20} color='red' />
                                    : <BiLockOpen fontSize={20} color='green' />}
                        </button>
                    </div>
                </td>

            </tr>
            {
                openDetail &&
                <tr className={cx('bill-detail-cus')}>
                    <td colSpan={7} style={{ padding: '0' }}>
                        <BillDetailCus item={item} cusId={MaKH} />
                        {/* Chức năng */}
                        <div className={cx('product-fucntion')} onClick={() => setOpenDetail(false)}>
                            <span className={cx('btn', 'btn-succeed')} style={{ backgroundColor: '#e24949' }}>  Đóng</span>
                        </div>
                    </td>
                </tr>
            }
        </React.Fragment>
    );
}

export default CusRow;