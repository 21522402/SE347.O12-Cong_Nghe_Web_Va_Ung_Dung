import classNames from "classnames/bind";
import { AiOutlineSearch, AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
import { FaFileImport, FaFileExport } from "react-icons/fa";
import { IoSquareOutline, IoCheckboxSharp } from "react-icons/io5";
import React, { useEffect, useState, createContext } from "react";
import ProductRow from "./ProductRow";
import styles from './Products.module.scss'
import Modal from "./Modal";
import DropDown from "./DropDown";

const cx = classNames.bind(styles)
export const ModalContext = createContext();
function Products() {

    const [inputFocus, setInputFocus] = useState(false);
    const listProductCategory = ['Tất cả', 'Áo', 'Quần', 'Đồ lót']
    const listProductType = ['Tất cả', 'Quần dài', 'Quần thể thao', 'Quần short']
    const [showCategory, setShowCategory] = useState(false)
    const [showType, setShowType] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [typeModal, setTypeModal] = useState('');

    return (
        <ModalContext.Provider value={{ setShowModal, setTypeModal }}>

            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div>
                        <h1>QUẢN LÝ SẢN PHẨM</h1>
                        <div style={{ color: '#05CD99' }}>Lalitpur Branch</div>
                    </div>
                    <div className={cx('content')}>
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
                                <div className={cx('product-category')} onMouseOver={() => setShowCategory(true)} onMouseOut={() => setShowCategory(false)}>
                                    <div className={cx('function-button')}>
                                        <span className={cx('btn', 'btn-succeed')}>Nhóm hàng <AiFillCaretDown /></span>
                                    </div>

                       
                                    {showCategory && <DropDown items={listProductCategory} />}
                                </div>

                                {/* Loại hàng */}
                                <div className={cx('product-type')} onMouseOver={() => setShowType(true)} onMouseOut={() => setShowType(false)}>
                                    <div className={cx('function-button')}>
                                        <span className={cx('btn', 'btn-succeed')}>Loại hàng <AiFillCaretDown /></span>
                                    </div>

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

                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => {
                                        return (
                                            <ProductRow key={index} />
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                        {showModal && <Modal setModal={setShowModal} typeModal={typeModal} />}


                    </div>
                </div>
            </div>



        </ModalContext.Provider>
    );
}

export default Products;