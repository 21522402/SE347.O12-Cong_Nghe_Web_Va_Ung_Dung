
import classNames from "classnames/bind";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import OrderDetail from "../OrderDetail";
import { IoSquareOutline, IoCheckboxSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";


import styles from './OrderRow.module.scss'
const cx = classNames.bind(styles)

function OrderRow({ index, open, onClick, onClickRemoveItem, product}) {
    const element = useRef(null)
    const [openDetail,setOpenDetail] = useState(false);
    const handleClickProducItem = () => {
        setOpenDetail(prev => !prev);
    }
    const handleClickDeleteItem = (index) => {
        onClickRemoveItem(index)
    }
    useEffect(() => {
        if (openDetail) {
            const topElement = element.current?.offsetTop;
            window.scroll({top: topElement, behavior: 'smooth'})
        } 
    })
    return (
        <React.Fragment >
            <tr onClick={handleClickProducItem} className={cx('product-item', {showDetail: openDetail})} ref={element}>
            {/* <td className={cx('delete')} ><span onClick={() => handleClickDeleteItem(index)}><RiDeleteBin6Line className={cx('icon-delete')} /></span></td> */}
                <td className={cx('code')}>DH0001</td>
                <td className={cx('date')}>15/02/2003</td>
                <td className={cx('customerName')}>Huỳnh Ngọc Quí</td>
                <td className={cx('customerPhone')}>0868208744</td>
                <td className={cx('province')}>Hồ Chí Minh</td>
                <td className={cx('totalPrice')}>1,720,000</td>
                <td className={cx('status')}>Chờ xác nhận</td>
                <td className={cx('import')}>
                    <span className={cx('btn', 'btn-succeed')}>Nhập</span>
                </td>

            </tr>

            {
                openDetail &&
                <tr className={cx('product-detail')}>
                    <td colSpan={8} style={{ padding: '0' }}>
                        <OrderDetail />
                    </td>
                </tr>
            }
        </React.Fragment>
    );
}

export default OrderRow;