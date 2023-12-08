import axios from 'axios';
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import {
    filterListProductsState,
    setListProducts,
    setListProductsState
} from "~/redux/slices/productSlice";
import baseUrl from '~/utils/baseUrl';
import styles from './Collection.module.scss';
import ItemCollection from "./ItemCollection";

const cx = classNames.bind(styles)
function Collection() {

    const {id} = useParams()

    const listProducts =  useSelector(state => state.product.listProducts)
    const [currentProducts, setCurrentProducts] =  useState([])
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
        !id.includes("type") ?
        setCurrentProducts(listProducts.filter((item) => item.productCategory === id)) :
        setCurrentProducts(listProducts.filter((item) => item.productType === id.replace("type=", "") ))
    }, [id])
    
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
    // useEffect(() => {
    //     !id.includes("size") ?
    //     setCurrentProducts(listProducts.filter((item) => item.productCategory === id)) :
    //     setCurrentProducts(listProducts.filter((item) => item.size === id.replace("size=", "") ))
        
    // }, [id])
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
    const [filter,setFilter] = useState({
        productType: '',
        productCategory: '',
        status: '',
        searchText: ''
    
    })
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
            console.log(nextState);
            return nextState;
        })
    }, [conditions])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('left-side-wrapper')}>
                <div className={cx('left-side')}>
                    <div className={cx('quantity')}>
                        21 kết quả
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
                    <h5>{currentProducts ? currentProducts.length : 0} kết quả</h5>

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
                {currentProducts?.map((item, index) => {
                return (
                <div key={index} style={{ width: "100%"}} >
                <ItemCollection product={item}/>
                </div>
                );
            })}
                </div>
            </div>
        </div>
    );
}
export default Collection;