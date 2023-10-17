import classNames from "classnames/bind";
import { AiOutlineSearch, AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
import { FaFileImport, FaFileExport } from "react-icons/fa";
import { IoSquareOutline, IoCheckboxSharp } from "react-icons/io5";
import { BsCheckLg } from "react-icons/bs";

import Carousel from "../Carousel";

import { useState } from "react";


import styles from './ColorSize.module.scss'

const cx = classNames.bind(styles)

function ColorSize() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('table-view')}>
                <table className={cx('table')}>
                    <thead>
                        <tr>
                            <th className={cx('color')}><span>Màu</span></th>
                            <th className={cx('size')}><span>Size</span></th>
                            <th className={cx('quantity')}><span>Số lượng</span></th>
                        </tr>
                    </thead>
    
                    <tbody>
                        <tr>
                            <td className={cx('color')}>Vàng</td>
                            <td className={cx('size')}>XL</td>
                            <td className={cx('quantity')}>32</td>
                        </tr>
                        <tr>
                            <td className={cx('color')}>Vàng</td>
                            <td className={cx('size')}>XL</td>
                            <td className={cx('quantity')}>32</td>
                        </tr>
                        <tr>
                            <td className={cx('color')}>Vàng</td>
                            <td className={cx('size')}>XL</td>
                            <td className={cx('quantity')}>32</td>
                        </tr>
                        <tr>
                            <td className={cx('color')}>Vàng</td>
                            <td className={cx('size')}>XL</td>
                            <td className={cx('quantity')}>32</td>
                        </tr>
                        <tr>
                            <td className={cx('color')}>Vàng</td>
                            <td className={cx('size')}>XL</td>
                            <td className={cx('quantity')}>32</td>
                        </tr>
                      
                       
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ColorSize;