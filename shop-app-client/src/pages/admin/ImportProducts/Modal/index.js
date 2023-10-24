

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
import images from "~/assets/img";

import 'react-quill/dist/quill.snow.css'
import ReactQuill from "react-quill";








const cx = classNames.bind(styles)

function Modal({ setModal, product }) {
    const [listColor, setListColor] = useState([{
        color: '',
        listImage: [],
        listSize: [{ sizeName: '', quantity: 0 }]
    }]);
    const [listShowMore, setListShowMore] = useState([true]);
    const handleClickAddColor = () => {
        setListColor(prev => [...prev,
        {
            color: '',
            listImage: [],
            listSize: [{ sizeName: '', quantity: 0 }]
        }
        ])
        setListShowMore(prev => [...prev, true]);
    }

    const handleShowMore = (indexShowMore) => {
        setListShowMore(prev => {
            const nextState = prev.map((item, index) => {
                
                if (indexShowMore === index) {
                    console.log(item,index)
                    item = !item;
                }
                return item
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
        setListColor(prev => {
            const nextState = prev.map((item, index) => {
                if (index === indexAdd) {

                    return { ...item, listSize: [...item.listSize, { sizeName: '', quantity: 0 }] }
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
                    return {
                        ...item,
                        listSize: item.listSize.filter((item,index2) => {
                            return index2!==indexB
                        })
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
        setListColor(prev => {
            const nextState = prev.map((item, index) => {
                if (index === indexA) {
                    item.listSize[indexB].sizeName = e.target.value;
                }

                return item;
            })
            return nextState;
        })
    }

    const handleChangeQuantity = (e, indexA, indexB) => {
        setListColor(prev => {
            const nextState = prev.map((item, index) => {
                if (index === indexA) {
                    item.listSize[indexB].quantity = e.target.value;
                }

                return item;
            })
            return nextState;
        })
    }

    useEffect(() => {
        console.log(listColor)
    }, [listColor])

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
                    <label style={{ fontWeight: '700' }}>Bảng màu ({listColor.length}): <span onClick={handleClickAddColor} className={cx('icon-plus')}><BsPlusCircleFill /></span></label>

                    {/* Color */}
                    <div>
                        {
                            listColor.map((itemA, indexA) => {
                                return (
                                    <div key={indexA} style={{ marginTop: '8px', height: listShowMore[indexA] === false ? '40px' : 'auto', overflow: 'hidden', transition: 'height 0.3s linear' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            {
                                                listShowMore[indexA] === false ?
                                                    <span onClick={() => handleShowMore(indexA)} style={{ cursor: 'pointer', fontSize: '20px', marginBottom: '4px', marginRight: '8px' }}><AiFillCaretRight /></span>
                                                    :
                                                    <span onClick={() => handleShowMore(indexA)} style={{ cursor: 'pointer', fontSize: '20px', marginBottom: '4px', marginRight: '8px' }}><AiFillCaretDown /></span>
                                            }
                                            <div className={cx('form-group')}>
                                                <label>Màu</label>
                                                <input onChange={(e) => handleChangeColorName(e, indexA)} type="text" style={{ width: '80px', textAlign: 'center' }} value={itemA.color} />
                                            </div>

                                            <div style={{ marginLeft: '24px' }}>
                                                <span onClick={() => handleRemoveColor(indexA)} style={{ cursor: 'pointer', padding: '4px 4px', borderRadius: '50%', display: 'inline-flex', backgroundColor: 'red', fontSize: '16px' }}><RiSubtractLine style={{ color: '#fff' }} /></span>
                                            </div>
                                        </div>

                                        {/* Image */}
                                        <div style={{ padding: '28px' }}>
                                            {
                                                [1, 2, 3, 4, 5].map((item, index) => {
                                                    return (
                                                        <div key={index} className={cx('img-wrapper')} style={{ marginRight: '32px' }}>
                                                            <img src={images.productImageDefault} width={100} height={88} crop='fill'>
                                                            </img>
                                                            <p>+ Thêm</p>
                                                            <input type="file" />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                        {/* Sỉze */}
                                        <div style={{ padding: '28px', paddingTop: '0px' }}>
                                            <label style={{ fontWeight: '700' }}>Bảng size ({itemA.listSize.length}): <span onClick={() => handleClickAddSize(indexA)} className={cx('icon-plus')}><BsPlusCircleFill /></span></label>
                                            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                                {
                                                    itemA.listSize.map((itemB, indexB) => {
                                                        return (
                                                            <div key={indexB} className={cx('wrap-size')}>
                                                                <div className={cx('size')}>
                                                                    <div className={cx('form-group')} style={{ marginRight: '48px' }}>
                                                                        <label>Size:</label>
                                                                        <input onChange={(e) => handleChangeSizeName(e, indexA, indexB)} type="text" style={{ width: '80px', textAlign: 'center', background: 'transparent' }} value={itemB.nameSize} />
                                                                    </div>
                                                                    <div className={cx('form-group')}>
                                                                        <label>Số lượng:</label>
                                                                        <input onChange={(e) => handleChangeQuantity(e, indexA, indexB)} type="text" style={{ width: '80px', textAlign: 'center', background: 'transparent' }} value={itemB.quantity} />
                                                                    </div>


                                                                </div>

                                                                <div>
                                                                    <span onClick={(e) => handleRemoveSize(indexA, indexB)} index={indexB} style={{ cursor: 'pointer', padding: '4px 4px', borderRadius: '50%', display: 'inline-flex', backgroundColor: 'red', fontSize: '16px' }}><RiSubtractLine style={{ color: '#fff' }} /></span>
                                                                </div>
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