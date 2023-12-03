import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    discount: '',
    totalMoneyGoods: '',
    finalMoney: '',
    listImportProducts: []
}

const slice = createSlice({
    name: 'importProducts',
    initialState,
    reducers: {
        setListImportProducts: (state,action) => {
            state.listImportProducts = [{
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
        },
        addIntoListImportProducts: (state,action) => {
            state.listImportProducts =  [...state.listImportProducts, {
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
    }

})

export default slice.reducer;
export const {
    setListImportProducts,
    addIntoListImportProducts
} = slice.actions