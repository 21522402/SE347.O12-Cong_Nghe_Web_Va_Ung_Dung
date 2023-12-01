

import classNames from "classnames/bind";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

import { GrFormClose } from "react-icons/gr";
import { BsSave } from "react-icons/bs";
import { TiCancel } from "react-icons/ti";
import { BsPlusCircleFill } from "react-icons/bs";

import DropDown from "../DropDown";
import AdvanceDropdown from "../AdvanceDropdown";
import ItemColor from "./ItemColor";

import styles from './Modal.module.scss'

import 'react-quill/dist/quill.snow.css'
import ReactQuill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeInputText, handleAddNewColor, filterListProductsState } from "~/redux/Product/action";

import axios from 'axios';
import baseUrl from '~/utils/baseUrl';





const cx = classNames.bind(styles)

function Modal({ setModal, typeModal, getAllProducts, getAllProductCaterogies, filter }) {
    let product = useSelector(state => state.productReducer.currentUpdateProduct)
    const listCategories = useSelector(state => state.productReducer.listCategories)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(product)
    }, [product])


    const listProductCategory = ['Áo', 'Quần', 'Đồ lót']
    const listProductType= listCategories.find(item => item.productCategoryName === product.productCategory).listProductType;

    const [showCategory, setShowCategory] = useState(false)
    const [showType, setShowType] = useState(false)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState(product.description);

    const [indexTabpanel, setIndexTabPanel] = useState(1);

    // Begin: Other info
    const handleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const data = {
            name, value
        }
        dispatch(handleChangeInputText(data))
    }



    
    
    useEffect(() => {
        const data = {
            name: 'description',
            value: description
        }
        dispatch(handleChangeInputText(data))
    }, [description])
    const elementCategory = useRef(null);
    const elementProductType = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (elementCategory.current && !elementCategory.current.contains(event.target)) {
                setShowCategory(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [elementCategory]);
    useEffect(() => {
        function handleClickOutside(event) {
            if (elementProductType.current && !elementProductType.current.contains(event.target)) {
                setShowType(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [elementProductType]);

    const handleClickSaveProduct = async () => {
        const body = {
            ...product,
            importPrice: Number(product.importPrice),
            exportPrice: Number(product.exportPrice),
            discountPerc: Number(product.discountPerc),
        }
        if (typeModal === 'add') {
            try {
                const res = await axios.post(`${baseUrl}/api/products/addProduct`, body)
                console.log(res.data)
                getAllProducts()
           
                setModal(false)
            } catch (error) {
                console.log(error.message)
            }
        }
        else if (typeModal === 'update'){
            try {
                const res = await axios.patch(`${baseUrl}/api/products/editProduct`, body)
                console.log(res.data)
                getAllProducts()
       
                setModal(false)
            } catch (error) {
                console.log(error.message)
            }
        }
    }
    const handleAddNewProductType = async (productTypeName) => {
        try {
            const productCategoryId = listCategories.find(item => item.productCategoryName === product.productCategory).productCategoryId;
            const res = await axios.post(`${baseUrl}/api/productType/addProductType`, {productTypeName, productCategoryId})
            console.log(res.data)
            getAllProductCaterogies()
        } catch (error) {
            console.log(error.message)
        }
    }
    const handleRemoveProductType = async (id, item) => {
        try {
            const res = await axios.delete(`${baseUrl}/api/productType/deleteProductType/${id}`)
            console.log(res.data.message)
            await getAllProductCaterogies()
            if (item === product.productType) {
                dispatch(handleChangeInputText({ name: 'productType', value: '' }))
            }
        } catch (error) {
            console.log(error.response.data.message)
        }
    }
    const handleEditProductType = async (id, item, oldItem) => {
        try {
            const res = await axios.patch(`${baseUrl}/api/productType/editProductType`,{productTypeId: id, productTypeName: item})
            console.log(res.data.message)
            await getAllProductCaterogies()
            if (oldItem === product.productType) {
                dispatch(handleChangeInputText({ name: 'productType', value: item }))
                await axios.patch(`${baseUrl}/api/products/editProductByType`, {id: product._id, productTypeName: item})
                getAllProducts();
            }
        } catch (error) {
            console.log(error.response.data.message)
        }
    }
  
    return (

        <div className={cx('overlay')}>
            <div className={cx('container')}>
                <div className={cx('button-close')} onClick={() => setModal(false)}>
                    <GrFormClose className={cx('icon-close')} color="red" />
                </div>

                {/* Header */}
                <div className={cx('header')}>
                    {
                        typeModal === 'update' ? 'Cập nhật' : 'Thêm hàng'
                    }
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
                                        {
                                            typeModal === 'add' &&
                                            <input type="text" placeholder="Mã sản phẩm tự động" disabled style={{ background: 'transparent' }} />
                                        }
                                        {
                                            typeModal === 'update' &&
                                            <input type="text" value={product.productCode} disabled style={{ background: 'transparent' }} />
                                        }
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label>Tên sản phẩm  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                                        <input type="text" onChange={(e) => handleChangeInput(e)} value={product.productName} name="productName" />
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label>Nhóm hàng  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                                        {/* <input  type="text"/> */}
                                        <div ref={elementCategory} className={cx('product-category-select', { active: showCategory })} onClick={() => setShowCategory(prev => !prev)}>
                                            <span>{product.productCategory}</span>
                                            <span> {!showCategory ? <AiFillCaretDown /> : <AiFillCaretUp />}</span>
                                            {showCategory && <DropDown items={listProductCategory} style={{ width: '100%', left: '0', top: '35px' }}  onClick={(item) => {dispatch(handleChangeInputText({ name: 'productCategory', value: item })); dispatch(handleChangeInputText({ name: 'productType', value: '' }))}} />}
                                        </div>
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label>Loại hàng  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                                        {/* <input  type="text"/> */}
                                        <div ref={elementProductType} className={cx('product-category-select', { active: showType })} onClick={() => setShowType(prev => !prev)}>
                                            <span>{product.productType}</span>
                                            <span> {!showType ? <AiFillCaretDown /> : <AiFillCaretUp />}</span>
                                            {showType && <AdvanceDropdown items={listProductType} keyProperty={'productTypeName'} keyId={'productTypeId'} style={{ width: '100%', left: '0', top: '35px' }} onClick={(item) => {dispatch(handleChangeInputText({ name: 'productType', value: item }))}} 
                                                addNewItem={handleAddNewProductType}
                                                removeItem={handleRemoveProductType}
                                                editItem={handleEditProductType}
                                            /> }
                                        </div>
                                    </div>
                                </div>

                                <div className={cx('col2')}>
                                    {/* Form group */}
                                    <div className={cx('form-group')}>
                                        <label>Giá vốn  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                                        <input type="text" onChange={(e) => handleChangeInput(e)} value={product.importPrice} name="importPrice" />
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label>Giá bán  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                                        <input type="text" onChange={(e) => handleChangeInput(e)} value={product.exportPrice} name="exportPrice" />
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label>Tồn kho  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                                        <input type="text" value={0} disabled style={{ background: 'transparent' }} />
                                    </div>
                                    <div className={cx('form-group')}>
                                        <label>Trạng thái  <IoInformationCircleOutline style={{ fontSize: '18px', marginLeft: '4px' }} /></label>
                                        <input type="text" value={product.status} disabled style={{ background: 'transparent' }} />
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


                                            theme="snow" value={description} onChange={setDescription} style={{ height: '150px' }}
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        indexTabpanel === 2 &&
                        <div className={cx('body-other-infor')}>
                            <div>
                                <label style={{ fontWeight: '700' }}>Bảng màu ({product.colors.length}): <span onClick={() => dispatch(handleAddNewColor())} className={cx('icon-plus')}><BsPlusCircleFill /></span></label>
                                {
                                    product.colors.length === 0 &&
                                    <div style={{ padding: '36px 24px 24px 24px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8vxcXbyvy5JHHV_7wMO_HQv-j6aZxX0I5MA&usqp=CAU" />
                                        <div style={{ marginTop: '16px', fontSize: '20px', fontWeight: '600', letterSpacing: '1.6px', color: '#ccc' }}>EMPTY</div>
                                    </div>
                                }
                                {/* Color */}
                                {
                                    product.colors.length > 0 &&
                                    <div>
                                        {
                                            product.colors.map((item, index) => {
                                                return (
                                                    <ItemColor key={index} index={index} />
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
                    <span onClick={handleClickSaveProduct} className={cx('btn', 'btn-succeed')}><BsSave style={{ marginRight: '6px', fontSize: '16px' }} />   Lưu</span>
                    {/* <span className={cx('btn', 'btn-succeed')}><MdPublish style={{ marginRight: '6px', fontSize: '16px' }} />   Lưu và đăng bán</span> */}
                    <span onClick={() => setModal(false)} className={cx('btn', 'btn-failed')}><TiCancel style={{ marginRight: '6px', fontSize: '16px' }} />   Hủy</span>

                </div>
            </div>

        </div>

    );
}

export default Modal;