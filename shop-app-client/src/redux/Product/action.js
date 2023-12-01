const resetCurrentProduct = () => {
    return {
        type: 'currentUpdateProduct/resetCurrentProduct'
    }
}
const setCurrentProduct = (data) => {
    return {
        type: 'currentUpdateProduct/setCurrentProduct',
        payload: data
    }
}
const handleChangeInputText = (data) => {
    return {
        type: 'currentUpdateProduct/handleChangeInputText',
        payload: data
    }
}

const handleAddNewColor = () => {
    return {
        type: 'currentUpdateProduct/handleAddNewColor'
    }
}

const handleRemoveColor = (data) => {
    return {
        type: 'currentUpdateProduct/handleRemoveColor',
        payload: data
    }
}
const handleChangeColorName = (data) => {
    return {
        type: 'currentUpdateProduct/handleChangeColorName',
        payload: data
    }
}


const handleChangeColorCode = (data) => {
    return {
        type: 'currentUpdateProduct/handleChangeColorCode',
        payload: data
    }
}

const handleColorAddImage = (data) => {
    return {
        type: 'currentUpdateProduct/handleColorAddImage',
        payload: data
    }
}
const handleColorChangeImage = (data) => {
    return {
        type: 'currentUpdateProduct/handleColorChangeImage',
        payload: data
    }
}

const handleColorRemoveImage = (data) => {
    return {
        type: 'currentUpdateProduct/handleColorRemoveImage',
        payload: data
    }
}

const handleColorAddSize = (data) => {
    return {
        type: 'currentUpdateProduct/handleColorAddSize',
        payload: data
    }
}

const handleColorChangeSizeName = (data) => {
    return {
        type: 'currentUpdateProduct/handleColorChangeSizeName',
        payload: data
    }
}


const handleColorRemoveSize = (data) => {
    return {
        type: 'currentUpdateProduct/handleColorRemoveSize',
        payload: data
    }
}
const setListProducts = (data) => {
    return {
        type: 'listProducts/setListProducts',
        payload: data
    }
}
const setListProductsState = (data) => {
    return {
        type: 'listProducts/setListProductsState',
        payload: data
    }
}

const filterListProductsState = (data) => {
    return {
        type: 'listProducts/filterListProductsState',
        payload: data
    }
}
const setListProductCategories = (data) => {
    return {
        type: 'listProductCategories/setListProductCategories',
        payload: data
    }
}
export {
    resetCurrentProduct,
    handleChangeInputText,
    handleAddNewColor,
    handleRemoveColor,
    handleChangeColorName,
    handleChangeColorCode,
    handleColorAddImage,
    handleColorChangeImage,
    handleColorRemoveImage,
    handleColorAddSize,
    handleColorChangeSizeName,
    handleColorRemoveSize,
    setCurrentProduct,

    setListProducts,
    setListProductsState,
    filterListProductsState,
    setListProductCategories

    
}