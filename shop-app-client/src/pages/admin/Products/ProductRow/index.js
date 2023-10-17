import classNames from "classnames/bind";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import ProductDetail from "../ProductDetail";
import { IoSquareOutline, IoCheckboxSharp } from "react-icons/io5";

import styles from './ProductRow.module.scss'
const cx = classNames.bind(styles)


function ProductRow({ index, open, onClick}) {
    const element = useRef(null)
    const [openDetail,setOpenDetail] = useState(false);
    const handleClickProducItem = () => {
        setOpenDetail(prev => !prev);
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
                <td className={cx('checkbox')} ><IoCheckboxSharp className={cx('icon-checkbox')} /></td>
                <td className={cx('img')}>
                    <img src="https://cdn-app.kiotviet.vn/sample/fashion/38.png"/>
                </td>
                <td className={cx('code')}>CM015</td>
                <td className={cx('name')}>Áo ba lỗ</td>
                <td className={cx('status')}>Ngưng kinh doanh</td>
                <td className={cx('price-buy')}>3,520,000</td>
                <td className={cx('price-origin')}>1,720,000</td>
                <td className={cx('quantity')}>200</td>

            </tr>

            {
                openDetail &&
                <tr className={cx('product-detail')}>
                    <td colSpan={8} style={{ padding: '0' }}>
                        <ProductDetail />
                    </td>
                </tr>
            }
        </React.Fragment>
    );
}

export default ProductRow;