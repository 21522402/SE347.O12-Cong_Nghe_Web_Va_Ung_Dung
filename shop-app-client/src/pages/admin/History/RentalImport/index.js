import classNames from "classnames/bind";
import { AiOutlineSearch, AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
import { FaFileImport, FaFileExport } from "react-icons/fa";
import { IoSquareOutline, IoCheckboxSharp } from "react-icons/io5";
import React, { useEffect, useState, createContext, useRef } from "react";
import { Link } from "react-router-dom";


import styles from './RentalImport.module.scss'
import DropDown from "../../Products/DropDown";
import RentalImportRow from "./RentalImportRow";

const cx = classNames.bind(styles)

function RentalImport() {
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

    const handleClickItemCategory = (item) => {
        console.log(item)
        setShowCategory(prev => !prev);
    }

    useEffect(() => {
        dateInputElement.current.valueAsDate = new Date();
        const nowDate = convertDate(dateInputElement.current.value);
        setDateFilter(nowDate)
    }, [])
    useEffect(() => {
        console.log(showCategory)
    })
    return (

        <div className={cx('wrapper')} >
            <div className={cx('container')}>
                <div>
                    <h1>QUẢN LÝ LỊCH SỬ</h1>
                    <div style={{ color: '#05CD99' }}>Lalitpur Branch</div>
                </div>
                <div className={cx('tabpanel')}>
                    <div className={cx('tabpanel-item')}>
                        <Link to="/admin/history/bill">Hóa đơn</Link>
                    </div>
                    <div className={cx('tabpanel-item', 'active')}>
                        Nhập hàng
                    </div>
                </div>
                <div className={cx('content-total')}>
                    <div className={cx('content')}>
                        <div className={cx('wrapper-body')}>
                            <div className={cx('toolbox')}>
                                {/* Filter */}
                                <div className={cx('filter-box')}>
                                    <div className={cx('search-box', {
                                        'input-focus': inputFocus
                                    })}>
                                        <AiOutlineSearch className={cx('icon')} />
                                        <input onFocus={() => setInputFocus(true)} onBlur={() => setInputFocus(false)} type="text" placeholder="Theo mã, tên khách hàng, ngày" className={cx('search-input')} />
                                        <AiFillCaretDown className={cx('icon')} />
                                    </div>


                                    {/* Loại hàng */}
                                    <div className={cx('product-type')} onClick={handleMouseOverDateFilter}>
                                        <div className={cx('function-button')}>
                                            <span className={cx('btn', 'btn-succeed')} >{dateFilter}<AiFillCaretDown style={{ marginLeft: '4px' }} /></span>
                                        </div>
                                        <input onChange={handleChangeDateInput} ref={dateInputElement} type="month" style={{ opacity: '0', top: '6px', left: '6px', right: '0', position: 'absolute' }} />

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
                                            <th className={cx('code')}>Mã phiếu nhập</th>
                                            <th className={cx('date')}>Thời gian</th>
                                            <th className={cx('productQuantity')}>Số sản phẩm</th>
                                            <th className={cx('itemQuantity')}>Số mặt hàng</th>
                                            <th className={cx('totalPrice')}>Tổng tiền</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => {
                                            return (
                                                <RentalImportRow key={index} />
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default RentalImport;