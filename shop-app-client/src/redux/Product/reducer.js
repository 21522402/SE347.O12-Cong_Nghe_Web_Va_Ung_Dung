const initState = {
    currentUpdateProduct: {
        _id: '',
        productName: '',
        productType: '',
        productCategory: '',
        importPrice: '',
        exportPrice: '',
        discountPerc: '',
        quantity: 0,
        quantitySold: 0,
        description: '',
        status: 'Chưa đăng bán',
        colors: [],

    },
    listProducts: [],
    listProductsState: [],
    listCategories: [],
}

const productReducer = (state = initState, action) => {

    switch (action.type) {
        case 'currentUpdateProduct/resetCurrentProduct':
            return {
                ...state,
                currentUpdateProduct: {...state.currentUpdateProduct,
                        productName: '',
                        productType: '',
                        productCategory: '',
                        importPrice: '',
                        exportPrice: '',
                        discountPerc: '',
                        quantity: 0,
                        quantitySold: 0,
                        description: '',
                        status: 'Chưa đăng bán',
                        colors: [],}
            }
        case 'currentUpdateProduct/setCurrentProduct':
            return {
                ...state,
                currentUpdateProduct: {
                    ...state.currentUpdateProduct,
                    ...action.payload 
                }
            }

        case 'currentUpdateProduct/handleChangeInputText':

            return {
                ...state,
                currentUpdateProduct: {
                    ...state.currentUpdateProduct,
                    [action.payload.name]: action.payload.value
                }
            }

        case 'currentUpdateProduct/handleAddNewColor':
            return {
                ...state,
                currentUpdateProduct: {
                    ...state.currentUpdateProduct,
                    colors: [...state.currentUpdateProduct.colors, {
                        colorName: '',
                        colorCode: '',
                        images: [],
                        sizes: [],
                        changeImage: false,
                    }]
                }
            }
        case 'currentUpdateProduct/handleRemoveColor':
            return {
                ...state,
                currentUpdateProduct: {
                    ...state.currentUpdateProduct,
                    colors: [...state.currentUpdateProduct.colors].filter((item, index) => index !== action.payload.index)
                }
            }

        case 'currentUpdateProduct/handleChangeColorName':
            return {
                ...state,
                currentUpdateProduct: {
                    ...state.currentUpdateProduct,
                    colors: [...state.currentUpdateProduct.colors].map((item, index) => {
                        if (index === action.payload.index) {
                            return { ...item, colorName: action.payload.colorName }
                        }
                        else return item;
                    })
                }
            }

        case 'currentUpdateProduct/handleChangeColorCode':
            return {
                ...state,
                currentUpdateProduct: {
                    ...state.currentUpdateProduct,
                    colors: [...state.currentUpdateProduct.colors].map((item, index) => {
                        if (index === action.payload.index) {
                            return { ...item, colorCode: action.payload.colorCode }
                        }
                        else return item;
                    })
                }
            }
        case 'currentUpdateProduct/handleColorAddImage':
            return {
                ...state,
                currentUpdateProduct: {
                    ...state.currentUpdateProduct,
                    colors: [...state.currentUpdateProduct.colors].map((item, index) => {
                        if (index === action.payload.index) {
                            return {
                                ...item,
                                images: [...item.images, '']

                            }
                        }
                        else return item;
                    })
                }
            }
        case 'currentUpdateProduct/handleColorChangeImage':
            return {
                ...state,
                currentUpdateProduct: {
                    ...state.currentUpdateProduct,
                    colors: [...state.currentUpdateProduct.colors].map((item, index) => {
                        if (index === action.payload.indexColor) {
                            return {
                                ...item,
                                images: [...item.images].map((item, indexImage) => {
                                    if (indexImage === action.payload.indexImage) {
                                        return action.payload.base64
                                    }
                                    else return item;
                                }),
                                changeImage: true
                            }
                        }
                        else return item;
                    }),

                }
            }
        case 'currentUpdateProduct/handleColorRemoveImage':
            return {
                ...state,
                currentUpdateProduct: {
                    ...state.currentUpdateProduct,
                    colors: [...state.currentUpdateProduct.colors].map((item, index) => {
                        if (index === action.payload.indexColor) {
                            return {
                                ...item,
                                images: [...item.images].filter((item, index2) => index2 !== action.payload.indexImage),
                                changeImage: true
                            }
                        }
                        else return item;
                    })
                }
            }
        case 'currentUpdateProduct/handleColorAddSize':
            return {
                ...state,
                currentUpdateProduct: {
                    ...state.currentUpdateProduct,
                    colors: [...state.currentUpdateProduct.colors].map((item, index) => {
                        if (index === action.payload.index) {
                            return {
                                ...item,
                                sizes: [...item.sizes, {
                                    sizeName: '',
                                    quantity: 0
                                }]
                            }
                        }
                        else return item;
                    })
                }
            }
        case 'currentUpdateProduct/handleColorChangeSizeName':
            return {
                ...state,
                currentUpdateProduct: {
                    ...state.currentUpdateProduct,
                    colors: [...state.currentUpdateProduct.colors].map((item, index) => {
                        if (index === action.payload.indexColor) {
                            return {
                                ...item,
                                sizes: [...item.sizes].map((item, index) => {
                                    if (index === action.payload.indexSize) {
                                        return {
                                            ...item,
                                            sizeName: action.payload.sizeName
                                        }
                                    }
                                    else return item;
                                })
                            }
                        }
                        else return item;
                    })
                }
            }
        case 'currentUpdateProduct/handleColorRemoveSize':
            return {
                ...state,
                currentUpdateProduct: {
                    ...state.currentUpdateProduct,
                    colors: [...state.currentUpdateProduct.colors].map((item, index) => {
                        if (index === action.payload.indexColor) {
                            return {
                                ...item,
                                sizes: [...item.sizes].filter((item, index2) => index2 !== action.payload.indexSize)
                            }
                        }
                        else return item;
                    })
                }
            }
        case 'listProducts/setListProducts':
            return {
                ...state,
                listProducts: [...action.payload]
            }
        case 'listProducts/setListProductsState':
            return {
                ...state,
                listProductsState: [...action.payload]
            }
        case 'listProducts/filterListProductsState':
            let tmp = [...state.listProducts]
            if (action.payload.filter.searchText !== '') tmp = tmp.filter(item => item.productName.includes(action.payload.filter.searchText) || item.productCode.includes(action.payload.filter.searchText));
            if (action.payload.filter.productCategory !== '' && action.payload.filter.productCategory !== 'Tất cả') tmp = tmp.filter(item => item.productCategory === action.payload.filter.productCategory);
            if (action.payload.filter.productType !== '' && action.payload.filter.productType !== 'Tất cả') tmp = tmp.filter(item => item.productType === action.payload.filter.productType);
            if (action.payload.filter.status !== '' && action.payload.filter.status !== 'Tất cả') tmp = tmp.filter(item => item.status === action.payload.filter.status);
            return {
                ...state,
                listProductsState: [...tmp]
            }

        case 'listProductCategories/setListProductCategories':
            return {
                ...state,
                listCategories: [...action.payload]
            }

        default:
            return state
    }
}

export default productReducer;