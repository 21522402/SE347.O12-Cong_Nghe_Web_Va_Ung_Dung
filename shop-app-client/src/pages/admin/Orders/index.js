import classNames from "classnames/bind";
import { AiOutlineSearch, AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
import { FaFileImport, FaFileExport } from "react-icons/fa";
import { IoSquareOutline, IoCheckboxSharp } from "react-icons/io5";
import React, { useEffect, useState, createContext, useRef } from "react";


import styles from './Order.module.scss'
import DropDown from "../Products/DropDown";
import OrderRow from "./OrderRow";

const cx = classNames.bind(styles)

function Orders() {
    const [inputFocus, setInputFocus] = useState(false);
    const listProductCategory = ['Tất cả', 'Áo', 'Quần', 'Đồ lót']
    const listProductType = ['Tất cả', 'Quần dài', 'Quần thể thao', 'Quần short']
    const [showCategory, setShowCategory] = useState(false)
    const [showType, setShowType] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [typeModal, setTypeModal] = useState('');


    const dateInputElement = useRef(null);
    const [dateFilter, setDateFilter] = useState('')

    const handleMouseOverDateFilter = () => {
        dateInputElement.current?.showPicker();
    }
    const convertDate = (value) => {
        const tmpArr = value.split('-');
        let date = [];
        for (let i = tmpArr.length - 1; i >= 0; i--) date = [...date, tmpArr[i]];
        const res = date.join('/');
        return res;
    }
    const handleChangeDateInput = (e) => {
        let value = e.target.value;
        if (!value) {
            dateInputElement.current.valueAsDate = new Date();
            const nowDate = convertDate(dateInputElement.current.value);
            setDateFilter(nowDate)
            return;
        }
        const res = convertDate(value);

        setDateFilter(res);
    }

    useEffect(() => {
        dateInputElement.current.valueAsDate = new Date();
        const nowDate = convertDate(dateInputElement.current.value);
        setDateFilter(nowDate)
    }, [])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('toolbox')}>
                {/* Filter */}
                <div className={cx('filter-box')}>
                    <div className={cx('search-box', {
                        'input-focus': inputFocus
                    })}>
                        <AiOutlineSearch className={cx('icon')} />
                        <input onFocus={() => setInputFocus(true)} onBlur={() => setInputFocus(false)} type="text" placeholder="Theo mã, tên khách hàng" className={cx('search-input')} />
                        <AiFillCaretDown className={cx('icon')} />
                    </div>

                    {/* nhóm hàng */}
                    <div className={cx('product-category')} onMouseOver={() => setShowCategory(true)} onMouseOut={() => setShowCategory(false)}>
                        <div className={cx('function-button')}>
                            <span className={cx('btn', 'btn-succeed')}>Trạng thái <AiFillCaretDown /></span>
                        </div>

                        {/* <ul className={cx('product-category-list')}>
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
                        </ul> */}

                        {showCategory && <DropDown items={listProductCategory} />}
                    </div>

                    {/* Loại hàng */}
                    <div className={cx('product-type')} onClick={handleMouseOverDateFilter}>
                        <div className={cx('function-button')}>
                            <span className={cx('btn', 'btn-succeed')} >{dateFilter}<AiFillCaretDown style={{ marginLeft: '4px' }} /></span>
                        </div>
                        <input onChange={handleChangeDateInput} ref={dateInputElement} type="date" style={{ opacity: '0', top: '6px', left: '6px', right: '0', position: 'absolute' }} />

                        {/* <ul className={cx('product-type-list')}>
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
                        </ul> */}
                        {showType && <DropDown items={listProductType} />}

                    </div>
                </div>

                {/* function */}
                <div className={cx('function-box')}>

                    {/* thêm */}
                    <div className={cx('function-button')}>
                        <span onClick={() => { setTypeModal('add'); setShowModal(true) }} className={cx('btn', 'btn-succeed')}><AiOutlinePlus className={cx('icon')} /> Thêm mới</span>
                    </div>



                    {/* import */}
                    <div className={cx('function-button')}>

                        <span className={cx('btn', 'btn-succeed')}><FaFileImport className={cx('icon')} /> Import</span>
                    </div>
                    {/* export */}
                    <div className={cx('function-button')}>

                        <span className={cx('btn', 'btn-succeed')}><FaFileExport className={cx('icon')} /> Xuất file</span>
                    </div>
                </div>
            </div>

            <div className={cx('tableView')}>
                <table className={cx('table')}>
                    <thead className={cx('thead')}>
                        <tr>
                            {/* <th className={cx('delete')}></th> */}
                            <th className={cx('code')}>Mã đơn hàng</th>
                            <th className={cx('date')}>Thời gian tạo</th>
                            <th className={cx('customerName')}>Tên khách hàng</th>
                            <th className={cx('customerPhone')}>Số điện thoại</th>
                            <th className={cx('province')}>Khu vực giao</th>
                            <th className={cx('totalPrice')}>Trị giá</th>
                            <th className={cx('status')}>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>

                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => {
                            return (
                                <OrderRow key={index} />
                            )
                        })}

                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Orders;