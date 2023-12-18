import axios from 'axios';
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import {
    filterListProductsState,
    setListProducts,
    setListProductsState
} from "~/redux/slices/productSlice";
import baseUrl from '~/utils/baseUrl';
import styles from './Collection.module.scss';
import ItemCollection from "./ItemCollection";
import { createCartItem, getCartProducts, increaseQuantityCartItem } from '~/redux/api/userRequest';
import ProductItem from '../Home/ProductItem';

const cx = classNames.bind(styles)
function Collection() {

    const {id} = useParams()

    const listProducts =  useSelector(state => state.product.listProducts)
    const [currentProducts, setCurrentProducts] =  useState([])
    const [productFilter, setProductFilter] =  useState([])
    let cartProducts = useSelector(state => state.user?.cart?.cartProducts)
    let currentUser = useSelector((state) => state.auth.login.currentUser)
    const [category, setCategory] = useState(() => {
        return {
            category: 'Áo',
            type: [
                {
                    name: 'Áo khoác',
                    checked: false
                },
                {
                    name: 'Áo mùa đông',
                    checked: false
                },
                {
                    name: 'Áo thể thao',
                    checked: false
                },
                {
                    name: 'Áo tết',
                    checked: false
                },
            ],
            size: [
                {
                    name: 'S',
                    checked: false
                },
                {
                    name: 'M',
                    checked: false
                },
                {
                    name: 'L',
                    checked: false
                },
                {
                    name: 'XL',
                    checked: false
                },
                {
                    name: '2XL',
                    checked: false
                },
                {
                    name: '3XL',
                    checked: false
                }
            ],
            color: [
                {
                    colorName: 'Đen',
                    colorCode: '#000'
                },
                {
                    colorName: 'Xám',
                    colorCode: '#939393'
                },
                {
                    colorName: 'Xám',
                    colorCode: '#152e6e'
                },
                {
                    colorName: 'Trắng',
                    colorCode: '#f6f6f6'
                },

            ]
        }
    })
    const [conditions, setConditions] = useState({
        size: [],
        color: '',
        type: []
    })
    const [condititonsSelected, setCondititonsSelected] = useState([]);
    useEffect(() => {
        if(id)
            if(!id.includes("type")) {
                const listFilter = listProducts.filter((item) => item.productCategory === id)
                setCurrentProducts(listFilter) 
                setProductFilter(listFilter)
                const types = listFilter.map(item => item.productType).reduce((acc, e) => {
                    if (acc.indexOf(e) === -1) {
                        acc.push(e)
                    }
                    return acc
                  }, []).map(item => ({
                    name: item,
                    checked: false
                }))

                const colors = listFilter
                .map(item => item.colors)
                .reduce(function (acc, e) {
                        return acc.concat(e)
                  }, [])
                .reduce((acc2, e2) => {
                    if (acc2.find(item => item.colorName === e2.colorName) === undefined) {
                        acc2.push(e2)
                    }
                    return acc2
                }, [])
                .map(item => ({
                        colorName: item.colorName,
                        colorCode: item.colorCode
                }))
                console.log(colors)
                setCategory({...category, type: types, color: colors})
            }
            else{
                const productType = id.replace("type=", "")
                const listFilter = listProducts.filter((item) => item.productType === productType )
                setCurrentProducts(listFilter) 
                setProductFilter(listFilter)
            }
        handleRemoveFilter()
    }, [id])

    useEffect(() => {
        if(!id.includes("type")) {
            if(conditions.size.length === 0 && conditions.color === '' && conditions.type.length === 0) {
                setProductFilter(currentProducts)
            }
            else{
                let listFilter = [...currentProducts]

                if(conditions.type.length !== 0){
                    listFilter = currentProducts.filter(item => conditions.type?.includes(item.productType))
                }

                if(conditions.size.length !== 0){
                    let listItemAdapt = []
                    for(let i = 0; i < listFilter.length; i++){
                        let item = {...listFilter[i]}  // item hiện tại

                        let colorsSizes = listFilter[i].colors; // list màu của item

                        let listColorAdapt = []

                        for(let j = 0; j < colorsSizes.length; j++){
                            let colorsSizeItem = {...colorsSizes[j]}; // màu hiện tại

                            let sizes = colorsSizes[j].sizes;  // sizes của màu
                            sizes = sizes.filter(size => conditions.size.includes(size.sizeName)) //filter size

                            if(sizes.length !== 0){
                                colorsSizeItem.sizes = sizes
                                listColorAdapt.push(colorsSizeItem)
                            }
                        }
                        
                        if(listColorAdapt.length !== 0){
                            item.colors = listColorAdapt
                            listItemAdapt.push(item)
                        }
                    }
                    listFilter = listItemAdapt
                }
                
                if(conditions.color !== '' )
                    listFilter = listFilter.filter(item => item.colors?.map(color => color.colorName)?.includes(conditions.color))
                 

                
                setProductFilter(listFilter)
            }
        }
        else{
            if(conditions.size.length === 0 && conditions.color === '' && conditions.type.length === 0) {
                setProductFilter(currentProducts)
            }
            else{
                let listFilter = [...currentProducts]

                if(conditions.size.length !== 0){
                    let listItemAdapt = []
                    for(let i = 0; i < listFilter.length; i++){
                        let item = {...listFilter[i]}  // item hiện tại

                        let colorsSizes = listFilter[i].colors; // list màu của item

                        let listColorAdapt = []

                        for(let j = 0; j < colorsSizes.length; j++){
                            let colorsSizeItem = {...colorsSizes[j]}; // màu hiện tại

                            let sizes = colorsSizes[j].sizes;  // sizes của màu
                            sizes = sizes.filter(size => conditions.size.includes(size.sizeName)) //filter size

                            if(sizes.length !== 0){
                                colorsSizeItem.sizes = sizes
                                listColorAdapt.push(colorsSizeItem)
                            }
                        }
                        
                        if(listColorAdapt.length !== 0){
                            item.colors = listColorAdapt
                            listItemAdapt.push(item)
                        }
                    }
                    listFilter = listItemAdapt
                }
                
                if(conditions.color !== '' )
                    listFilter = listFilter.filter(item => item.colors?.map(color => color.colorName)?.includes(conditions.color))
                 

                
                setProductFilter(listFilter)
            }
        }
    }, [conditions])
    
    const handleClickType = (type, index) => {
        let state;
        setCategory(prev => {
            state = {
                ...prev, type: prev.type.map((item, index2) => {
                    if (index2 === index) return { ...item, checked: !item.checked };
                    else return item;
                })
            }
            return state;
        })
        setConditions(prev => {
            const newType = state.type.map(item => {
                if (item.checked) return item.name;
                else return '';
            }).filter(item => item !== '');
            const nextState = { ...prev, type: newType };
            return nextState;
        })
    }
    const handleClickSize = (size, index) => {
        let state;
        setCategory(prev => {
            state = {
                ...prev, size: prev.size.map((item, index2) => {
                    if (index2 === index) return { ...item, checked: !item.checked };
                    else return item;
                })
            }
            return state;
        })
        setConditions(prev => {
            const newSize = state.size.map(item => {
                if (item.checked) return item.name;
                else return '';
            }).filter(item => item !== '');
            const nextState = { ...prev, size: newSize };
            return nextState;
        })

    }
    const handleClickColor = (color) => {
        setConditions(prev => {
            return { ...prev, color: color };
        })
    }
    const handleClickRemoveSelected = (item) => {
        const key = item.key;
        const name = item.name;
        setConditions(prev => {
            const nextState = { ...prev };
            if (key === 'color') {
                nextState.color = '';
            }
            else {
                nextState[key] = [...nextState[key]].filter(item => item !== name);
            }
            return nextState;
        })
        if (key !== 'color') {
            setCategory(prev => {
                const nextState = { ...prev };
                nextState[key] = [...nextState[key]].map((item) => {
                    if (item.name === name) {
                        return { ...item, checked: false }
                    }
                    else return item;
                })
                return nextState;

            })
        }
    }
    const handleRemoveFilter = () => {
        setConditions({
            size: [],
            color: '',
            type: []
        });
        setCategory(prev => {
            return {
                ...prev,
                size: prev.size.map(item => ({ ...item, checked: false })),
                type: prev.type.map(item => ({ ...item, checked: false })),
            }
        })
    }
    //DUY
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null)
    const [filter,setFilter] = useState({
        productType: '',
        productCategory: '',
        status: '',
        searchText: ''
    })
    const setCloseTimer = () => {
        let t = 3
        const a = setInterval(() => {
            if(t-- === 0){
                clearInterval(a)
                setPopupProductCart(false)
                setSelected(null)
            }
        }, 1000)
    }
    const [popupProductCart, setPopupProductCart] = useState(false)
    const getAllProducts = async () => {
        try {
            const res = await axios.get(`${baseUrl}/api/products/getAllProducts`);
            if (res && res.data) {
                dispatch(setListProducts(res.data.data))
                dispatch(setListProductsState(res.data.data))
                dispatch(filterListProductsState({filter}));
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        // getAllProductsCategories()
        getAllProducts()
        setCondititonsSelected(prev => {
            let nextState = [];
            for (var key in conditions) {
                const value = conditions[key];
                if (key !== 'color') {
                    const add = value.map(item => ({ name: item, key }));
                    nextState = nextState.concat(add)
                }
                else {
                    if (value) nextState.push({ name: value, key });
                }
            }
            return nextState;
        })
    }, [conditions])

    useEffect(() => {
        currentUser && getCartProducts(currentUser, dispatch)
      },[])

    const handleItemToCart = (product, b, c) => {

        const cartItem = {
            product: product._id,
            productName: product.productName,
            productPrice: product.exportPrice * (1 - product.discountPerc/100),
            size: b.sizeName,
            color: c.colorName,
            quantity: 1
        }
    
        const existItem = cartProducts.find((cartIT) => cartIT.productId === cartItem.productId && cartIT.size === cartItem.size && cartIT.color === cartItem.color)
        existItem ? increaseQuantityCartItem(currentUser, existItem, dispatch) : createCartItem(currentUser, cartItem, dispatch)
        
        setSelected({...cartItem, product: product})
        setPopupProductCart(true)
        setCloseTimer()
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx(popupProductCart ? 'bayra' : 'bayvao')} style={{position: 'fixed', zIndex: 1000, top: '16px', right: '16px', borderRadius: '16px', width: '350px', maxHeight: '350px', backgroundColor: 'white', padding: '15px', fontSize: '16px', color: 'black', fontWeight: '600' }}>
                <div>Đã thêm vào giỏ hàng</div>
                {selected && <ProductItem props={selected}/>}
                <div>
                    <div className={cx('account-info__btn')} onClick={() => navigate("/cart")}>
                        <span className={cx('account-info__btn-text')}>Xem giỏ hàng</span>
                    </div>
                </div>
            </div>  
            <div className={cx('left-side-wrapper')}>
                <div className={cx('left-side')}>
                    <div className={cx('quantity')}>
                        {productFilter? productFilter.length : 0} kết quả
                    </div>
                    <div className={cx('filter')}>
                        <div className={cx('filter-item')}>
                            <h5 className={cx('filter-heading')}>Kích cỡ</h5>
                            <ul className={cx('filter-size')}>
                                {
                                    category.size.map((item, index) => {
                                        return <li key={index} style={{ position: 'relative', marginTop: '8px' }}>
                                            <div onClick={() => handleClickSize(item.name, index)} className={cx('filter-size-item', { checked: item.checked })}>
                                                {item.name}
                                            </div>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className={cx('filter-item')}>
                            <h5 className={cx('filter-heading')}>Màu sắc</h5>
                            <ul className={cx('filter-color')}>
                                {
                                    category.color.map((item, index) => {
                                        return <li key={index} style={{ position: 'relative', marginTop: '8px' }}>
                                            <div className={cx('filter-color-item')}>
                                                <div onClick={() => handleClickColor(item.colorName)} className={cx('filter-select-color__button')} style={{ backgroundColor: `${item.colorCode}` }}>
                                                </div>
                                                <label className={cx('filter-select-color__label')}>{item.colorName}</label>
                                            </div>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                        {
                            id.includes("type") ? null
                            :
                            <div className={cx('filter-item')}>
                            
                            <h5 className={cx('filter-heading')} style={{ marginBottom: '16px' }}>Loại sản phẩm</h5>
                            <ul className={cx('filter-type')}>
                                {
                                    category.type.map((item, index) => {
                                        return <li key={index} style={{ position: 'relative', marginBottom: '6px', cursor: 'pointer' }}>
                                            <div onClick={() => handleClickType(item.name, index)} className={cx('filter-type-item')}>
                                                <div className={cx('filter-type-checkbox', { checked: item.checked })}></div>
                                                <label className={cx('filter-type-label')}>{item.name}</label>
                                            </div>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                        }
                        
                    </div>
                </div>
            </div>
            <div className={cx('right-side')}>
                <h1 className={cx('heading')}>{id.includes("type") ? id.replace("type=", "") : id}</h1>
                <div className={cx('selected')}>
                    <h5>{productFilter ? productFilter.length : 0} kết quả</h5>

                    <div className={'wrapper-item-selected'}>
                        {
                            condititonsSelected.map((item, index) => {
                                return <span className={cx('item-selected')} key={index}>{item.name}
                                    <span onClick={() => handleClickRemoveSelected(item)}
                                        style={{ fontSize: '12px', marginLeft: '5px', opacity: '1', fontWeight: '600', cursor: 'pointer', padding: '0 2px' }}>x</span></span>
                            })
                        }
                    </div>
                    {
                        condititonsSelected.length > 0 &&
                        <div onClick={handleRemoveFilter} className={cx('delete-filter')}>Xóa lọc</div>
                    }
                </div>
                <div className={cx('list-product-filter')}>
                {productFilter?.map((item, index) => {
                return (
                <div key={index} style={{ width: "100%"}} >
                <ItemCollection product={item} handleToCart={handleItemToCart}/>
                </div>
                );
            })}
                </div>
            </div>
        </div>
    );
}
export default Collection;