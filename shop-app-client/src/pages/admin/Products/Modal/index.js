import classNames from "classnames/bind";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import ProductDetail from "../ProductDetail";
import { IoSquareOutline, IoCheckboxSharp, IoInformationCircleOutline } from "react-icons/io5";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import DropDown from "../DropDown";



import styles from './Modal.module.scss'
const cx = classNames.bind(styles)

function Modal({setModal}) {
    const listProductCategory = ['Áo', 'Quần', 'Đồ lót']
    const listProductType = ['Quần dài', 'Quần thể thao', 'Quần short']
    const [showCategory, setShowCategory] = useState(false)
    const [showType, setShowType] = useState(false)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('')
    const handleClickCategory = () => {
        setShowCategory(prev => !prev);
        setShowType(false);
    }
    const handleClickType = () => {
        setShowType(prev => !prev);
        setShowCategory(false);
    }

    const handleClickItemCategory = (item) => {
        setCategory(item)
    }

    const handleClickItemType = (item) => {
        setType(item)
    }
    return (
        <div className={cx('ovelay')}>

            {/* Container */}
            <div className={cx('container')}>
                <div className={cx('button-close')} onClick={() => setModal(false)}>
                    <GrFormClose className={cx('icon-close')} color="red"/>
                </div>

                {/* Header */}
                <div className={cx('header')}>
                    Thêm hàng
                </div>

                {/* Tabpanel */}
                <div className={cx('tabpanel')}>
                    <div className={cx('tabpanel-item-active')}>
                        Thông tin
                    </div>
                </div>
                <div className={cx('body')}>
                    {/* Col */}
                    <div className={cx('col1')}>
                        {/* Form group */}
                        <div className={cx('form-group')}>
                            <label>Mã sản phẩm  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                            <input type="text" placeholder="Mã sản phẩm tự động" />
                        </div>
                        <div className={cx('form-group')}>
                            <label>Tên sản phẩm  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                            <input type="text" />
                        </div>
                        <div className={cx('form-group')}>
                            <label>Nhóm hàng  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                            {/* <input type="text"/> */}
                            <div className={cx('product-category-select', { active: showCategory })} onClick={handleClickCategory}>
                                <span>{category}</span>
                                <span> {!showCategory ? <AiFillCaretDown /> : <AiFillCaretUp />}</span>
                                {showCategory && <DropDown items={listProductCategory} style={{ width: '100%', left: '0', top: '35px' }} onClick={handleClickItemCategory}/>}
                            </div>
                        </div>
                        <div className={cx('form-group')}>
                            <label>Nhóm hàng  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                            {/* <input type="text"/> */}
                            <div className={cx('product-category-select', { active: showType })} onClick={handleClickType}>
                                <span>{type}</span>
                                <span> {!showType ? <AiFillCaretDown /> : <AiFillCaretUp />}</span>
                                {showType && <DropDown items={listProductType} style={{ width: '100%', left: '0', top: '35px' }} onClick={handleClickItemType}/>}
                            </div>
                        </div>
                    </div>

                    <div className={cx('col2')}>
                        {/* Form group */}
                        <div className={cx('form-group')}>
                            <label>Giá vốn  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                            <input type="text" />
                        </div>
                        <div className={cx('form-group')}>
                            <label>Giá bán  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                            <input type="text" />
                        </div>
                        <div className={cx('form-group')}>
                            <label>Tồn kho  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                            <input type="text" />
                        </div>

                    </div>
                </div>

                <div className={cx('footer')}>

                </div>
            </div>
        </div>
    );
}

export default Modal;