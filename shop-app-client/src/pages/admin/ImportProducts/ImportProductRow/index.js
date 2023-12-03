import classNames from "classnames/bind";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { IoSquareOutline, IoCheckboxSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";


import styles from './ImportProductRow.module.scss'
const cx = classNames.bind(styles)



function ImportProductRow({ index, setModal, setProduct, product, onClickRemoveItem }) {
    const handleClickImport = () => {
        setProduct(product)
        setModal(true)
    }
    const handleClickDeleteItem = (index) => {
        onClickRemoveItem(index)
    }


    return (
        <React.Fragment >
            <tr className={cx('product-item')}>
                <td className={cx('delete')} ><span onClick={() => handleClickDeleteItem(index)}><RiDeleteBin6Line className={cx('icon-delete')} /></span></td>
                <td className={cx('stt')}>{index + 1}</td>
                <td className={cx('code')}>{product.productCode}</td>
                <td className={cx('name')}>{product.productName}</td>
                <td className={cx('quantity')}>{product.quantity}</td>
                <td className={cx('unitPrice')}>
                    <input  placeholder="100000" type="text" style={{ width: '80px', textAlign: 'center', background: 'transparent' }}  />
                </td>
                <td className={cx('price')}>{product.totalMoey}</td>
                <td className={cx('import')}>
                    <span onClick={handleClickImport} className={cx('btn', 'btn-succeed')}>Nhập</span>
                </td>

            </tr>


        </React.Fragment>
    );
}

export default ImportProductRow;