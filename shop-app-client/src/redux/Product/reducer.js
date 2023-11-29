const initState = {
    currentUpdateProduct: {
        productName: '',
        productType: '',
        productCategory: '',
        importPrice: '',
        exportPrice: '',
        discountPerc: '',
        quantity: '',
        description: '',
        colors: [],
    }
}

const productReducer = (state = initState, action) => {
    switch (action.type) {
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
                        sizes: []
                    }]
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
                                images: [...item.images, {
                                    url: '',
                                    base64: ''
                                }]
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
                                        return {
                                            ...item,
                                            base64: action.payload.base64
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
        case 'currentUpdateProduct/handleColorRemoveImage':
            return {
                ...state,
                currentUpdateProduct: {
                    ...state.currentUpdateProduct,
                    colors: [...state.currentUpdateProduct.colors].map((item, index) => {
                        if (index === action.payload.indexColor) {
                            return {
                                ...item,
                                images: [...item.images].filter((item, index2) => index2 !== action.payload.indexImage)
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
        default:
            return state
    }
}

export default productReducer;