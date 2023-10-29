

import classNames from "classnames/bind";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import ProductDetail from "../ProductDetail";
import { IoSquareOutline, IoCheckboxSharp, IoInformationCircleOutline } from "react-icons/io5";
import { AiFillCaretDown, AiFillCaretUp, AiFillCaretRight, AiOutlineClose } from "react-icons/ai";

import { GrFormClose } from "react-icons/gr";
import { BsSave } from "react-icons/bs";
import { MdPublish } from "react-icons/md";
import { TiCancel } from "react-icons/ti";
import { BsPlusCircleFill } from "react-icons/bs";
import DropDown from "../DropDown";

import styles from './Modal.module.scss'

import 'react-quill/dist/quill.snow.css'
import ReactQuill from "react-quill";
import images from "~/assets/img";








const cx = classNames.bind(styles)

function Modal({ setModal, typeModal }) {
    const listProductCategory = ['Áo', 'Quần', 'Đồ lót']
    const listProductType = ['Quần dài', 'Quần thể thao', 'Quần short']
    const [showCategory, setShowCategory] = useState(false)
    const [showType, setShowType] = useState(false)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('')
    const [value, setValue] = useState('');
    const [indexTabpanel, setIndexTabPanel] = useState(1);

    // Begin: Other info
    const listImageDefault = [1, 2, 3, 4, 5].map((item, index) => { return { url: '', isImageDefault: true, } })
    const [listColor, setListColor] = useState([]);
    const [listShowMore, setListShowMore] = useState(() => {
        return listColor.map((item, index) => {
            if (index === 0) return true;
            else return false;
        })
    });
    const handleShowMore = (indexShowMore) => {
        setListShowMore(prev => {
            const nextState = prev.map((item, index) => {

                if (indexShowMore === index) {
                    item = !item;
                }
                return item
            })
            return nextState;
        })
    }
    const handlePreviewImage = (event, indexA, indexB) => {
        if (event.target.files[0]) {
            const file = event.target.files[0]
            const url = URL.createObjectURL(file)
            setListColor(prev => {
                const nextState = prev.map((item, index) => {
                    if (index === indexA) {
                        return {
                            ...item,
                            listImage: item.listImage.map((item2, index2) => {
                                if (index2 === indexB) {
                                    return { ...item2, isImageDefault: false, url: url }
                                }
                                else return item2;
                            })
                        }
                    }
                    else return item;
                })
                return nextState;
            })
        }
    }
    const handleClickRemoveImage = (indexA, indexB) => {
        setListColor(prev => {
            const nextState = prev.map((item, index) => {
                if (index === indexA) {
                    return {
                        ...item,
                        listImage: item.listImage.map((item2, index2) => {
                            if (index2 === indexB) {
                                return { ...item2, isImageDefault: true, url: '' }
                            }
                            else return item2;
                        })
                    }
                }
                else return item;
            })
            return nextState;
        })
    }
    const handleClickAddColor = () => {
        setListColor(prev => [...prev,
        {
            color: '',
            listImage: [...listImageDefault],
            listSize: []
        }
        ])
        setListShowMore(prev => [...prev, true]);
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

    // End: Other Info
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
                    <div onClick={() => setIndexTabPanel(1)} className={cx('tabpanel-item', { active: indexTabpanel === 1 })}>
                        Thông tin
                    </div>
                    {
                        typeModal === 'update' &&
                        <div onClick={() => setIndexTabPanel(2)} className={cx('tabpanel-item', { active: indexTabpanel === 2 })}>
                            Màu/ Size/ Số lượng
                        </div>
                    }
                </div>
                <div className={cx('body')}>
                    {
                        indexTabpanel === 1 &&
                        <div className={cx('body-info')}>
                            <div style={{ display: 'flex' }}>
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
                                                        ["link"],
                                                        ["code-block"],
                                                        ["clean"],
                                                    ],
                                                },
                                                clipboard: {
                                                    matchVisual: false,
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
                        </div>
                    }
                    {
                        indexTabpanel === 2 &&
                        <div className={cx('body-other-infor')}>
                            <div>
                                <label style={{ fontWeight: '700' }}>Bảng màu ({listColor.length}): <span onClick={handleClickAddColor} className={cx('icon-plus')}><BsPlusCircleFill /></span></label>
                                {
                                    listColor.length === 0 &&
                                    <div style={{ padding: '36px 24px 24px 24px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8vxcXbyvy5JHHV_7wMO_HQv-j6aZxX0I5MA&usqp=CAU" />
                                        <div style={{ marginTop: '16px', fontSize: '20px', fontWeight: '600', letterSpacing: '1.6px', color: '#ccc' }}>EMPTY</div>
                                    </div>
                                }
                                {/* Color */}
                                {
                                    listColor.length > 0 &&
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
                                                            <div className={cx('form-group2')}>
                                                                <label>Màu</label>
                                                                <input onChange={(e) => handleChangeColorName(e, indexA)} placeholder="Đen,..." type="text" style={{ width: '80px', textAlign: 'center', background: 'transparent' }} value={itemA.color} />
                                                            </div>


                                                        </div>

                                                        {/* Image */}
                                                        <div style={{ padding: '28px' }}>
                                                            {
                                                                itemA.listImage.map((itemB, indexB) => {
                                                                    return (
                                                                        <div key={indexB} className={cx('img-wrapper')} style={{ marginRight: '32px' }}>
                                                                            <img src={itemB.isImageDefault ? images.productImageDefault : itemB.url} width={100} height={88} crop='fill' style={{ cursor: 'pointer' }}>
                                                                            </img>
                                                                            {
                                                                                itemB.isImageDefault && <p>+ Thêm</p>
                                                                            }


                                                                            <input type="file" onChange={(event) => handlePreviewImage(event, indexA, indexB)} accept="image/jpg, image/jpeg, image/png" />
                                                                            {
                                                                                !itemB.isImageDefault &&
                                                                                <span onClick={() => handleClickRemoveImage(indexA, indexB)} className={cx('icon-remove-img')} >
                                                                                    <AiOutlineClose style={{ fontSize: '14px', color: 'red' }} /></span>
                                                                            }
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>

                                                        {/* Sỉze */}
                                                        <div style={{ padding: '28px', paddingTop: '0px' }}>
                                                            <label style={{ fontWeight: '700' }}>Bảng size ({itemA.listSize.length}): <span onClick={() => handleClickAddSize(indexA)} className={cx('icon-plus')}><BsPlusCircleFill /></span></label>
                                                            {
                                                                itemA.listSize.length === 0 &&
                                                                <div>
                                                                    <div style={{ padding: '36px 24px 24px 24px', display: 'inline-flex', alignItems: 'center', flexDirection: 'column' }}>
                                                                        <img width={250} height={125} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8vxcXbyvy5JHHV_7wMO_HQv-j6aZxX0I5MA&usqp=CAU" />
                                                                        <div style={{ marginTop: '16px', fontSize: '16px', fontWeight: '600', letterSpacing: '1.6px', color: '#ccc' }}>EMPTY</div>
                                                                    </div>
                                                                </div>
                                                            }
                                                            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                                                {
                                                                    itemA.listSize.map((itemB, indexB) => {
                                                                        return (

                                                                            <div key={indexB} className={cx('wrap-size')}>
                                                                                <div className={cx('size')}>
                                                                                    <div className={cx('form-group2')} style={{ marginRight: '48px' }}>
                                                                                        <label>Size:</label>
                                                                                        <input onChange={(e) => handleChangeSizeName(e, indexA, indexB)} value={itemB.sizeName} type="text" style={{ width: '80px', textAlign: 'center', background: 'transparent' }}  placeholder="S,M,..."/>
                                                                                    </div>
                                                                                    <div className={cx('form-group2')}>
                                                                                        <label>Số lượng:</label>
                                                                                        <input value={itemB.quantity} type="text" style={{ width: '80px', textAlign: 'center', background: 'transparent' }} disabled />
                                                                                    </div>


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
                                }
                            </div>
                        </div>
                    }

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