

import classNames from "classnames/bind";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import ProductDetail from "../ProductDetail";
import { IoSquareOutline, IoCheckboxSharp, IoInformationCircleOutline } from "react-icons/io5";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { BsSave } from "react-icons/bs";
import { MdPublish } from "react-icons/md";
import { TiCancel } from "react-icons/ti";
import DropDown from "../DropDown";

import styles from './Modal.module.scss'

import 'react-quill/dist/quill.snow.css'
import ReactQuill, {Quill} from "react-quill";

import ImageResize from 'quill-image-resize-module-react';
Quill.register('modules/imageResize', ImageResize);
window.Quill = Quill;







const cx = classNames.bind(styles)

function Modal({ setModal }) {
    const listProductCategory = ['Áo', 'Quần', 'Đồ lót']
    const listProductType = ['Quần dài', 'Quần thể thao', 'Quần short']
    const [showCategory, setShowCategory] = useState(false)
    const [showType, setShowType] = useState(false)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('')
    const [value, setValue] = useState('');
    const handleClickCategory = () => {
        setShowCategory(prev => !prev);
        setShowType(false);
    }
    const handleClickType = () => {
        setShowType(prev => !prev);
        setShowCategory(false);
    }
    const handleClickInput = () => {
        setShowType(false)
        setShowCategory(false)
    }
    const handleClickItemCategory = (item) => {
        setCategory(item)
    }

    const handleClickItemType = (item) => {
        setType(item)
    }

    return (

        <div className={cx('overlay')}>
            <div className={cx('container')}>
                <div className={cx('button-close')} onClick={() => setModal(false)}>
                    <GrFormClose className={cx('icon-close')} color="red" />
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
                            <input onFocus={handleClickInput} type="text" placeholder="Mã sản phẩm tự động" disabled style={{ background: 'transparent' }} />
                        </div>
                        <div className={cx('form-group')}>
                            <label>Tên sản phẩm  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                            <input onFocus={handleClickInput} type="text" />
                        </div>
                        <div className={cx('form-group')}>
                            <label>Nhóm hàng  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                            {/* <input onFocus={handleClickInput} type="text"/> */}
                            <div className={cx('product-category-select', { active: showCategory })} onClick={handleClickCategory}>
                                <span>{category}</span>
                                <span> {!showCategory ? <AiFillCaretDown /> : <AiFillCaretUp />}</span>
                                {showCategory && <DropDown items={listProductCategory} style={{ width: '100%', left: '0', top: '35px' }} onClick={handleClickItemCategory} />}
                            </div>
                        </div>
                        <div className={cx('form-group')}>
                            <label>Nhóm hàng  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                            {/* <input onFocus={handleClickInput} type="text"/> */}
                            <div className={cx('product-category-select', { active: showType })} onClick={handleClickType}>
                                <span>{type}</span>
                                <span> {!showType ? <AiFillCaretDown /> : <AiFillCaretUp />}</span>
                                {showType && <DropDown items={listProductType} style={{ width: '100%', left: '0', top: '35px' }} onClick={handleClickItemType} />}
                            </div>
                        </div>
                    </div>

                    <div className={cx('col2')}>
                        {/* Form group */}
                        <div className={cx('form-group')}>
                            <label>Giá vốn  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                            <input onFocus={handleClickInput} type="text" />
                        </div>
                        <div className={cx('form-group')}>
                            <label>Giá bán  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                            <input onFocus={handleClickInput} type="text" />
                        </div>
                        <div className={cx('form-group')}>
                            <label>Tồn kho  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                            <input onFocus={handleClickInput} type="text" value={0} disabled style={{ background: 'transparent' }} />
                        </div>
                        <div className={cx('form-group')}>
                            <label>Trạng thái  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                            <input onFocus={handleClickInput} type="text" value={'Chưa đăng bán'} disabled style={{ background: 'transparent' }} />
                        </div>


                    </div>
                </div>

                <div className={cx('text-editor')}>
                    <div className={cx('form-group')}>
                        <label>Mô tả  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                        <div className={cx('wrapper-react-quill')}>
                            <ReactQuill

                                modules={{
                                    toolbar: {
                                        container: [
                                            [{ header: "1" }, { header: "2" }, { font: [] }],
                                            [{ size: [] }],
                                            ["bold", "italic", "underline", "strike", "blockquote"],
                                            [
                                                { list: "ordered" },
                                                { list: "bullet" },
                                                { indent: "-1" },
                                                { indent: "+1" },
                                            ],
                                            ["link", "image", "video"],
                                            ["code-block"],
                                            ["clean"],
                                        ],
                                    },
                                    clipboard: {
                                        matchVisual: false,
                                    },
                                    imageResize: {
                                        parchment: Quill.import('parchment'),
                                        modules: ['Resize', 'DisplaySize']
                                    }
                                }}

                                formats={[
                                    "header",
                                    "font",
                                    "size",
                                    "bold",
                                    "italic",
                                    "underline",
                                    "strike",
                                    "blockquote",
                                    "list",
                                    "bullet",
                                    "indent",
                                    "link",
                                    "image",
                                    "video",
                                    "code-block",
                                ]}


                                theme="snow" value={value} onChange={setValue} onFocus={handleClickInput} style={{ height: '150px' }} />

                        </div>
                    </div>
                </div>





                <div className={cx('footer')}>
                    <span className={cx('btn', 'btn-succeed')}><BsSave style={{ marginRight: '6px', fontSize: '16px' }} />   Lưu</span>
                    {/* <span className={cx('btn', 'btn-succeed')}><MdPublish style={{ marginRight: '6px', fontSize: '16px' }} />   Lưu và đăng bán</span> */}
                    <span onClick={() => setModal(false)} className={cx('btn', 'btn-failed')}><TiCancel style={{ marginRight: '6px', fontSize: '16px' }} />   Hủy</span>

                </div>
            </div>

        </div>

    );
}

export default Modal;