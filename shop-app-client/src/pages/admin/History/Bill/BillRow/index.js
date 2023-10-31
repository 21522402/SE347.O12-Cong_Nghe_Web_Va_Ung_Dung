
import classNames from "classnames/bind";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import BillDetail from "../BillDetail";
import { IoSquareOutline, IoCheckboxSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";


import styles from './BillRow.module.scss'
const cx = classNames.bind(styles)

function BillRow({ index, open, onClick, onClickRemoveItem, product }) {
    const element = useRef(null)
    const [openDetail, setOpenDetail] = useState(false);
    const handleClickProducItem = () => {
        setOpenDetail(prev => !prev);
    }
    const handleClickDeleteItem = (index) => {
        onClickRemoveItem(index)
    }
    useEffect(() => {
        if (openDetail) {
            const topElement = element.current?.offsetTop;
            window.scroll({ top: topElement, behavior: 'smooth' })
        }
    }, [openDetail])
    return (
        <React.Fragment >
            <tr onClick={handleClickProducItem} className={cx('product-item', { showDetail: openDetail })} ref={element}>
                {/* <td className={cx('delete')} ><span onClick={() => handleClickDeleteItem(index)}><RiDeleteBin6Line className={cx('icon-delete')} /></span></td> */}
                <td className={cx('code')}>HD00001</td>
                <td className={cx('date')}>15/08/2019 11:05</td>
                <td className={cx('payMethod')}>Thanh toán trực tuyến</td>
                <td className={cx('customerName')}>Huỳnh Ngọc Quí</td>
                <td className={cx('customerPhone')}>0868208744</td>
                <td className={cx('totalPrice')}>4,200,000</td>
      

            </tr>

            {
                openDetail &&
                <tr className={cx('product-detail')}>
                    <td colSpan={8} style={{ padding: '0' }}>
                        <BillDetail />
                    </td>
                </tr>
            }
        </React.Fragment>
    );
}

export default BillRow;