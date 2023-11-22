import classNames from "classnames/bind";
import styles from './Collection.module.scss'
import { useEffect, useState } from "react";
import ItemCollection from "./ItemCollection";
const cx = classNames.bind(styles)
function Collection() {
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
    useEffect(() => {
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
                    </div>
                </div>
            </div>
            <div className={cx('right-side')}>
                <h1 className={cx('heading')}>Áo</h1>
                <div className={cx('selected')}>
                    <h5>16 kết quả</h5>

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
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                            return <ItemCollection key={index} />
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default Collection;