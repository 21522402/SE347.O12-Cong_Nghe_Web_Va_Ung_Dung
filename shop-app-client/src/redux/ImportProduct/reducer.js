


const initialState = {
    discount: '',
    totalMoneyGoods: '',
    finalMoney: '',
    listImportProducts: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'importProducts/setListImportProducts':
            return {
                ...state,
                listImportProducts: [{
                    productCode: action.payload.productCode,
                    productName: action.payload.productName,
                    unitPriceImport: '',
                    quantity: 0,
                    totalMoey: 0,
                    colors: [{
                        colorName: '',
                        sizes: [{
                            sizeName: '',
                            quantity: '',
                        }]
                    }]

                }]
            }
        case 'importProducts/addIntoListImportProducts':
            return {
                ...state,
                listImportProducts: [...state.listImportProducts, {
                    productCode: action.payload.productCode,
                    productName: action.payload.productName,
                    unitPriceImport: '',
                    quantity: 0,
                    totalMoey: 0,
                    colors: [{
                        colorName: '',
                        sizes: [{
                            sizeName: '',
                            quantity: '',
                        }]
                    }]

                }]
            }
        default:
            return state
    }
}
export default reducer;