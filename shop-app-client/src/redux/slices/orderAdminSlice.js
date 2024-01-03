import { createSlice } from "@reduxjs/toolkit";
import convertDate from "~/utils/convertDate";
const initialState = {
    listOrders: [],
    listOrdersOrigin: []
}



const slice = createSlice({
    name: 'adminOrders',
    initialState,
    reducers: {
        setListOrders: (state,action) => {
            console.log('payload',action.payload)
            state.listOrders = [...action.payload].map((item,index) => {
                const totalMoneyGoods = item.orderItem.reduce((acc,cur) => {
        
                        // if (cur.discountPerc) {
                        //     return acc + cur.productId.exportPrice*(1-cur.productId.discountPerc/100)
                        // }
                        // else {
                        //     return acc + cur.productId.exportPrice
                        // }
                        return acc + cur.productId.exportPrice*(1-cur.productId.discountPerc/100)
                       
            
                    
                },0)
                const shipPrice = 0
                const finalPrice = totalMoneyGoods - shipPrice - (item.voucher? item.voucher.voucherPrice : 0)
                const orderDate = convertDate(item.orderDate);
                return {...item,
                    totalMoneyGoods,
                    shipPrice,
                    finalPrice,
                    orderDate
                    
                }
            })
            console.log('state',state.listOrders)

            state.listOrdersOrigin = [...state.listOrders]
        },
        handleChangeOrderStatus: (state,action) => {
            state.listOrders = [...state.listOrders].map((item,index) => {
                if (index === action.payload.index) {
                    return {
                        ...item,
                        status: action.payload.status
                    }
                }
                else return item;
            })
        },
        filterListOrder: (state,action) => {
            let tmp = [...state.listOrdersOrigin]
            if (action.payload.status!=='' && action.payload.status!=='Tất cả') {
                tmp = tmp.filter((item) => {
                    return item.status === action.payload.status
                })
            }
            if (action.payload.date!=='' ) {
                tmp = tmp.filter((item) => {
                    return item.orderDate === action.payload.date
                })
            }
            if (action.payload.textSearch.trim()!== '') {
                tmp = tmp.filter((item) => {
                    return ('#' + item._id).toLowerCase().includes(action.payload.textSearch.trim().toLowerCase()) || item.address.name.toLowerCase().includes(action.payload.textSearch.trim().toLowerCase())
                })
            }
           
            state.listOrders = [...tmp]
            
        }
    }

})

export default slice.reducer;
export const {
    setListOrders,
    handleChangeOrderStatus,
    filterListOrder
} = slice.actions