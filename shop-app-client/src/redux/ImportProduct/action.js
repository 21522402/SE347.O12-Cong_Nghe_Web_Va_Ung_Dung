const addIntoListImportProducts = (data) => {
    return {
        type: 'importProducts/addIntoListImportProducts',
        payload: data
    }
}

const setListImportProducts = (data) => {
    return {
        type: 'importProducts/setListImportProducts',
        payload: data
    }
}

export {
    addIntoListImportProducts,
    setListImportProducts
}