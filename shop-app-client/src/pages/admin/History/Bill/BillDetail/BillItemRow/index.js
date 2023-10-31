
import classNames from "classnames/bind";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { IoSquareOutline, IoCheckboxSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";


import styles from './BillItemRow.module.scss'
const cx = classNames.bind(styles)

function BillItemRow({ index, open, onClick, onClickRemoveItem, product }) {
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
            <tr onClick={handleClickProducItem} className={cx('bill-item')} ref={element}>
                {/* <td className={cx('delete')} ><span onClick={() => handleClickDeleteItem(index)}><RiDeleteBin6Line className={cx('icon-delete')} /></span></td> */}
                <td className={cx('code')}>MH001</td>
                <td className={cx('name')}>Áo thể thao mùa đông</td>
                <td className={cx('type')}>Áo thể thao</td>
                <td className={cx('color-size')}>Xanh/S</td>
                <td className={cx('quantity')}>2</td>
                <td className={cx('unitPrice')}>90,000</td>
                <td className={cx('discountPrice')}>5000</td>
                <td className={cx('sellPrice')}>85000</td>
                <td className={cx('price')}>170000</td>


            </tr>
        </React.Fragment>
    );
}

export default BillItemRow;