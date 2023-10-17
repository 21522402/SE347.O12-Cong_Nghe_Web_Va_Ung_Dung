import classNames from "classnames/bind";
import { AiOutlineSearch, AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
import { FaFileImport, FaFileExport } from "react-icons/fa";
import { IoSquareOutline, IoCheckboxSharp } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import ProductRow from "./ProductRow";
import styles from './Products.module.scss'

const cx = classNames.bind(styles)
function Products() {

    const [inputFocus, setInputFocus] = useState(false);


    return (
        <div className={cx('wrapper')}>

            {/* Tool */}
            <div className={cx('toolbox')}>
                {/* Filter */}
                <div className={cx('filter-box')}>
                    <div className={cx('search-box', {
                        'input-focus': inputFocus
                    })}>
                        <AiOutlineSearch className={cx('icon')} />
                        <input onFocus={() => setInputFocus(true)} onBlur={() => setInputFocus(false)} type="text" placeholder="Theo mã, tên hàng" className={cx('search-input')} />
                        <AiFillCaretDown className={cx('icon')} />
                    </div>

                    {/* nhóm hàng */}
                    <div className={cx('product-category')}>
                        <div className={cx('function-button')}>
                            <span className={cx('btn','btn-succeed')}>Nhóm hàng <AiFillCaretDown /></span>
                        </div>

                        <ul className={cx('product-category-list')}>
                            <li>
                                <span>Tất cả</span>
                            </li>
                            <li>
                                <span>Áo</span>
                            </li>
                            <li>
                                <span>Quần</span>
                            </li>
                            <li>
                                <span>Đồ lót</span>
                            </li>
                        </ul>
                    </div>

                    {/* Loại hàng */}
                    <div className={cx('product-type')}>
                        <div className={cx('function-button')}>
                            <span className={cx('btn','btn-succeed')}>Loại hàng <AiFillCaretDown /></span>
                        </div>

                        <ul className={cx('product-type-list')}>
                            <li>
                                <span>Tất cả</span>
                            </li>
                            <li>
                                <span>Quần dài</span>
                            </li>
                            <li>
                                <span>Quần thể thao</span>
                            </li>
                            <li>
                                <span>Quần short</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* function */}
                <div className={cx('function-box')}>

                    {/* thêm */}
                    <div className={cx('function-button')}>
                        <span className={cx('btn','btn-succeed')}><AiOutlinePlus className={cx('icon')} /> Thêm mới</span>
                    </div>



                    {/* import */}
                    <div className={cx('function-button')}>

                        <span className={cx('btn','btn-succeed')}><FaFileImport className={cx('icon')} /> Import</span>
                    </div>
                    {/* export */}
                    <div className={cx('function-button')}>

                        <span className={cx('btn','btn-succeed')}><FaFileExport className={cx('icon')} /> Xuất file</span>
                    </div>
                </div>
            </div>

            {/* table view */}
            <div className={cx('tableView')}>
                <table className={cx('table')}>
                    <thead className={cx('thead')}>
                        <tr>
                            <th className={cx('checkbox')}><IoSquareOutline className={cx('icon-checkbox')} /></th>
                            <th className={cx('img')}></th>
                            <th className={cx('code')}>Mã hàng</th>
                            <th className={cx('name')}>Tên hàng</th>
                            <th className={cx('status')}>Trạng thái</th>
                            <th className={cx('price-buy')}>Giá bán</th>
                            <th className={cx('price-origin')}>Giá vốn</th>
                            <th className={cx('quantity')}>Tồn kho</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((item,index) => {
                            return (
                                <ProductRow key={index} />
                            )
                        })}
                        
                    </tbody>
                </table>
            </div>
           

        </div>
    );
}

export default Products;