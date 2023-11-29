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

export {
    handleChangeInputText,
    handleAddNewColor,
    handleChangeColorName,
    handleChangeColorCode,
    handleColorAddImage,
    handleColorChangeImage,
    handleColorRemoveImage,
    handleColorAddSize
}