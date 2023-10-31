
import classNames from "classnames/bind";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { IoSquareOutline, IoCheckboxSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";


import styles from './ImportItemRow.module.scss'
const cx = classNames.bind(styles)

function ImportItemRow({ index, open, onClick, onClickRemoveItem, product }) {
   

    return (
        <React.Fragment >
            <tr  className={cx('bill-item')}>
                {/* <td className={cx('delete')} ><span onClick={() => handleClickDeleteItem(index)}><RiDeleteBin6Line className={cx('icon-delete')} /></span></td> */}
                <td className={cx('code')}>MH001</td>
                <td className={cx('name')}>Áo thể thao mùa đông</td>
                <td className={cx('type')}>Áo thể thao</td>
                <td className={cx('color-size')}>Xanh/S</td>
                <td className={cx('quantity')}>2</td>
                <td className={cx('unitPrice')}>90,000</td>
                <td className={cx('price')}>170000</td>


            </tr>
        </React.Fragment>
    );
}

export default ImportItemRow;