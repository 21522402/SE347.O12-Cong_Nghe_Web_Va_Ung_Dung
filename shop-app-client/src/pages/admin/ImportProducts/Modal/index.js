

import classNames from "classnames/bind";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { IoSquareOutline, IoCheckboxSharp, IoInformationCircleOutline } from "react-icons/io5";
import { AiFillCaretDown, AiFillCaretUp, AiFillCaretRight } from "react-icons/ai";
import { GrFormClose, GrFormSubtract } from "react-icons/gr";
import { BsSave } from "react-icons/bs";
import { MdPublish } from "react-icons/md";
import { TiCancel } from "react-icons/ti";
import { RiSubtractLine } from "react-icons/ri";

import { BsPlusCircleFill } from "react-icons/bs";





import styles from './Modal.module.scss'
import DropDown from "../../Products/DropDown";









const cx = classNames.bind(styles)

function Modal({ setModal, product }) {
    const [listColor, setListColor] = useState([{
        color: '',
        listSize: [{ sizeName: '', quantity: '', showDropSize: false }],
        showDropColor: false,
        showMore: true
    }]);
    const listDefault = [
        {
            color: 'Đen',
            listSize: ['S', 'M', 'L']
        },
        {
            color: 'Vàng',
            listSize: ['XL', 'M', 'L']
        },
        {
            color: 'Đỏ',
            listSize: ['XXL', 'M', 'L']
        }
    ]
    const listColorCategoryDefault = listDefault.map(item => item.color);
    const listSizeCategoryDefault = {};
    listDefault.forEach(item => listSizeCategoryDefault[item.color] = item.listSize);
    const handleClickAddColor = () => {
        if (listColor.length === listColorCategoryDefault.length) {
            return;
        }
        setListColor(prev => [...prev,
        {
            color: '',
            listSize: [{ sizeName: '', quantity: '', showDropSize: false }],
            showDropColor: false,
            showMore: true

        }
        ])
        // setListShowMore(prev => [...prev, true]);
        // setListShowDropdownColor(prev => [...prev, false])
        // setListZIndexShowDropdownColor(prev => [...prev, zIndexDropDownDefault - prev.length + '']);
    }

    const handleShowMore = (indexShowMore) => {


        setListColor(prev => {
            const nextState = prev.map((item, index) => {
                if (index === indexShowMore) {
                    return { ...item, showMore: !item.showMore }
                } else return item;
            })
            return nextState;
        })
    }
    const handleDropdownColor = (indexDropdownColor) => {
        setListColor(prev => {
            const nextState = prev.map((item, index) => {
                if (index === indexDropdownColor) {
                    return { ...item, showDropColor: !item.showDropColor }
                } else return item;
            })
            return nextState;
        })
    }
    const handleDropdownSize = (indexA, indexB) => {
        setListColor(prev => {
            const nextState = prev.map((item, index) => {
                if (index === indexA) {
                    return {
                        ...item,
                        listSize: item.listSize.map((item2, index2) => {
                            if (index2 === indexB) {
                                return { ...item2, showDropSize: !item2.showDropSize }
                            }
                            else return item2;
                        })
                    }
                } else return item


            })
            return nextState;
        })
    }
    const handleRemoveColor = (indexRemove) => {
        setListColor(prev => {
            const nextState = [...prev];
            nextState.splice(indexRemove, 1);
            return nextState;
        })


    }

    const handleClickAddSize = (indexAdd) => {
        if (listColor[indexAdd].listSize.length === listSizeCategoryDefault.length) {
            return;
        }
        setListColor(prev => {
            const nextState = prev.map((item, index) => {
                if (index === indexAdd) {

                    return { ...item, listSize: [...item.listSize, { sizeName: '', quantity: '', showDropSize: false }] }
                }
                else return item;


            })

            return nextState;
        })
    }

    const handleRemoveSize = (indexA, indexB) => {

        setListColor(prev => {
            const nextState = prev.map((item, index) => {
                if (index === indexA) {
                    const newListSize = [...item.listSize];
                    newListSize.splice(indexB, 1);
                    return {
                        ...item,
                        listSize: [...newListSize]
                    }
                }
                else return item;
            })
            return nextState;
        })





    }

    const handleChangeColorName = (e, indexChange) => {
        const colorName = e.target.value;
        setListColor(prev => {
            const nextState = prev.map((item, index) => {
                if (index === indexChange) {
                    return { ...item, color: colorName }
                } else return item;
            })
            return nextState;
        })
    }

    const handleChangeSizeName = (e, indexA, indexB) => {
        const newSizeName = e.target.value
        setListColor(prev => {
            const nextState = prev.map((item, index) => {
                if (index === indexA) {
                    return {
                        ...item,
                        listSize: item.listSize.map((item2, index2) => {
                            if (index2 === indexB) {
                                return { ...item2, sizeName: newSizeName }
                            }
                            else return item2;
                        })
                    }
                } else return item


            })
            return nextState;
        })
    }

    const handleChangeQuantity = (e, indexA, indexB) => {
        const newQuantity = e.target.value
        setListColor(prev => {
            const nextState = prev.map((item, index) => {
                if (index === indexA) {
                    return {
                        ...item,
                        listSize: item.listSize.map((item2, index2) => {
                            if (index2 === indexB) {
                                return { ...item2, quantity: newQuantity }
                            }
                            else return item2;
                        })
                    }
                } else return item


            })
            return nextState;
        })
    }


    const handleClickItemColorCategory = (itemColor, indexA) => {
        setListColor(prev => {
            const nextState = prev.map((item, index) => {
                if (index === indexA) {
                    return { ...item, color: itemColor }
                } else return item;
            })
            return nextState;
        })

    }

    const handleClickItemSizeCategory = (itemSize, indexA, indexB) => {
        setListColor(prev => {
            const nextState = prev.map((item, index) => {
                if (index === indexA) {
                    return {
                        ...item,
                        listSize: item.listSize.map((item2, index2) => {
                            if (index2 === indexB) {
                                return { ...item2, sizeName: itemSize }
                            }
                            else return item2;
                        })
                    }
                } else return item


            })
            return nextState;
        })
    }


    useEffect(() => {
        console.log(listColor)
    },[listColor])



    return (

        <div className={cx('overlay')}>
            <div className={cx('container')}>
                <div className={cx('button-close')} onClick={() => setModal(false)}>
                    <GrFormClose className={cx('icon-close')} color="red" />
                </div>

                {/* Header */}
                <div className={cx('header')}>
                    Nhập hàng
                </div>

                {/* Tabpanel */}
                <div className={cx('tabpanel')}>
                    <div className={cx('tabpanel-item-active')}>
                        Thông tin
                    </div>
                </div>
                <div className={cx('body')}>
                    <div>
                        <label style={{ fontWeight: '700' }}>Bảng màu ({listColor.length}): <span onClick={handleClickAddColor} className={cx('icon-plus')}><BsPlusCircleFill /></span>

                        </label>

                        {/* Color */}
                        <div>
                            {
                                listColor.map((itemA, indexA) => {
                                    return (
                                        <div key={indexA} style={{ marginTop: '8px', height: itemA.showMore === false ? '40px' : 'auto', overflow: 'hidden', transition: 'height 0.3s linear' }}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                {
                                                    itemA.showMore === false ?
                                                        <span onClick={() => handleShowMore(indexA)} style={{ cursor: 'pointer', fontSize: '20px', marginBottom: '4px', marginRight: '8px' }}><AiFillCaretRight /></span>
                                                        :
                                                        <span onClick={() => handleShowMore(indexA)} style={{ cursor: 'pointer', fontSize: '20px', marginBottom: '4px', marginRight: '8px' }}><AiFillCaretDown /></span>
                                                }
                                                <div className={cx('form-group')}>
                                                    <label>Màu</label>
                                                    {/* <div className={cx('input-color-wrapper', { active: itemA.showDropColor })} onClick={() => handleDropdownColor(indexA)} >
                                                        <span style={{ marginLeft: '16px' }}>{itemA.color}</span>
                                                        <span> {!itemA.showDropColor ? <AiFillCaretDown /> : <AiFillCaretUp />}</span>
                                                        {itemA.showDropColor && <DropDown items={listColorCategoryDefault} style={{ width: '100%', left: '0', top: '35px' }} onClick={handleClickItemColorCategory} indexA={indexA} />}
                                                    </div> */}
                                                    <div className={cx('custom-selector')}>
                                                        <select className={cx('select-size')} onChange={(e) => handleChangeColorName(e, indexA)} value={itemA.color}>
                                                        <option value={''} selected>Chọn màu</option>
                                                            {
                                                           
                                                                listColorCategoryDefault.map((item, index) => (
                                                                    <option key={index} value={item}>{item}</option>
                                                                ))
                                                            }
                                                        </select>
                                                    </div>
                                                </div>

                                                {
                                                    listColor.length > 1 &&
                                                    <div style={{ marginLeft: '24px', marginTop: '10px' }}>
                                                        <span onClick={() => handleRemoveColor(indexA)} style={{ cursor: 'pointer', padding: '4px 4px', borderRadius: '50%', display: 'inline-flex', backgroundColor: 'red', fontSize: '16px' }}><RiSubtractLine style={{ color: '#fff' }} /></span>
                                                    </div>
                                                }
                                            </div>

                                          
                                            {/* Sỉze */}
                                            <div style={{ padding: '28px', paddingTop: '0px' }}>
                                                <label style={{ fontWeight: '700', marginTop: '16px' }}>Bảng size ({itemA.listSize.length}): <span onClick={() => handleClickAddSize(indexA)} className={cx('icon-plus')}><BsPlusCircleFill /></span></label>
                                                <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                                    {
                                                        itemA.listSize.map((itemB, indexB) => {
                                                            return (

                                                                <div key={indexB} className={cx('wrap-size')}>
                                                                    <div className={cx('size')}>
                                                                        <div className={cx('form-group')} style={{ marginRight: '24px' }}>
                                                                            <label>Size:</label>
                                                                            {/* <input value={itemB.sizeName} onChange={(e) => handleChangeSizeName(e, indexA, indexB)} placeholder="S,M,..." type="text" style={{ width: '80px', textAlign: 'center', background: 'transparent' }} /> */}
                                                                            {/* <div className={cx('input-color-wrapper', { active: listShowDropdownColor[indexA] })} onClick={() => handleDropdownColor(indexA)} style={{ zIndex: listZIndexShowDropdownColor[indexA] }}>
                                                                                <span style={{ marginLeft: '16px' }}>{itemA.color}</span>
                                                                                <span> {!listShowDropdownColor[indexA] ? <AiFillCaretDown /> : <AiFillCaretUp />}</span>
                                                                                {listShowDropdownColor[indexA] && <DropDown items={listSizeCategoryDefault[itemA.color]} style={{ width: '100%', left: '0', top: '35px' }} onClick={handleClickItemColorCategory} indexItem={indexA} />}
                                                                            </div> */}
                                                                            {/* <div className={cx('input-size-wrapper')}  onClick={() => handleDropdownSize(indexA, indexB)} >

                                                                                <span style={{ marginLeft: '16px' }}>{itemB.sizeName}</span>
                                                                                <span> {!itemB.showDropSize ? <AiFillCaretDown /> : <AiFillCaretUp />}</span>
                                                                                {itemB.showDropSize && <DropDown items={listSizeCategoryDefault[itemA.color] || []} style={{ width: '100%', left: '0', top: '35px' }} onClick={handleClickItemSizeCategory} indexA={indexA} indexB={indexB} />}
                                                                            </div> */}
                                                                            <div className={cx('custom-selector')}>
                                                                                <select className={cx('select-size')} onChange={(e) => handleChangeSizeName(e, indexA, indexB)} value={itemB.sizeName}>
                                                                                <option value={''} selected>Chọn size</option>
                                                                                    {
                                                                                        itemA.color &&
                                                                                        listSizeCategoryDefault[itemA.color].map((item, index) => (
                                                                                            <option key={index} value={item}>{item}</option>
                                                                                        ))
                                                                                    }
                                                                                </select>
                                                                            </div>

                                                                        </div>
                                                                        <div className={cx('form-group')} >
                                                                            <label>Số lượng:</label>
                                                                            <input value={itemB.quantity} onChange={(e) => handleChangeQuantity(e, indexA, indexB)} placeholder="20" type="text" style={{ width: '80px', textAlign: 'center', background: 'transparent' }} />
                                                                        </div>


                                                                    </div>

                                                                    {
                                                                        itemA.listSize.length > 1 &&
                                                                        <div>
                                                                            <span onClick={(e) => handleRemoveSize(indexA, indexB)} style={{ cursor: 'pointer', padding: '4px 4px', borderRadius: '50%', display: 'inline-flex', backgroundColor: 'red', fontSize: '16px' }}><RiSubtractLine style={{ color: '#fff' }} /></span>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            )
                                                        })
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
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