const initState = {
    orders : [
        {
            productId: '1',
            productavatar: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/September2023/_CMM2123-Edits.jpg',
            productName: 'T-Shirt Cotton 220GSM',
            importPrice: 500000,
		    exportPrice: 537000,
            colors:[
                {
                    colorCode: '#1',
                    colorName: "Trắng",
                    images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/September2023/trang189_2.jpg',
                    size:{
                        S: {
                            quantity: 20,
                        },
                        M: {
                            quantity: 30,
                        },
                        L: {
                            quantity: 12,
                        },
                        XL: {
                            quantity: 10,
                        },
                        XXL: {
                            quantity: 100,
                        },
                        XXXL: {
                            quantity: 90,
                        },
                    }
                },
                {
                    colorCode: '#2',
                    colorName: "Xanh biển",
                    images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-2582-6.jpg',
                    size:{
                        S: {
                            quantity: 20,
                        },
                        M: {
                            quantity: 30,
                        },
                        L: {
                            quantity: 12,
                        }
                    }
                },
                {
                    colorCode: '#3',
                    colorName: "Vàng",
                    images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/September2023/at220xpt-2-1.jpg',
                    size:{
                    }
                },
                {
                    colorCode: '#4',
                    colorName: "Nâu",
                    images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
                    size:{
                        S: {
                            quantity: 20,
                        },
                        M: {
                            quantity: 30,
                        },
                    }
                }
            ],
            discountPerc: 0.2,
            pBuy: 2,
            selectSize: 'M',
            selectColor: 'Trắng',
        },
        {
            productId: '2',
            productavatar: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/September2023/_CMM2123-Edits.jpg',
            productName: 'T-Shirt Cotton 220GSM',
            importPrice: 500000,
		    exportPrice: 537000,
            colors:[
                {
                    colorCode: '#1',
                    colorName: "Trắng",
                    images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/September2023/trang189_2.jpg',
                    size:{
                        S: {
                            quantity: 20,
                        },
                        M: {
                            quantity: 30,
                        },
                        L: {
                            quantity: 12,
                        },
                        XL: {
                            quantity: 10,
                        },
                        XXL: {
                            quantity: 100,
                        },
                        XXXL: {
                            quantity: 90,
                        },
                    }
                },
                {
                    colorCode: '#2',
                    colorName: "Xanh biển",
                    images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-2582-6.jpg',
                    size:{
                        S: {
                            quantity: 20,
                        },
                        M: {
                            quantity: 30,
                        },
                        L: {
                            quantity: 12,
                        },
                        XL: {
                            quantity: 10,
                        },
                        XXL: {
                            quantity: 100,
                        },
                        XXXL: {
                            quantity: 90,
                        },
                    }
                },
                {
                    colorCode: '#3',
                    colorName: "Xanh biển",
                    images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/September2023/at220xpt-2-1.jpg',
                    size:{
                    }
                },
                {
                    colorCode: '#4',
                    colorName: "Nâu",
                    images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
                    size:{
                        S: {
                            quantity: 20,
                        },
                        M: {
                            quantity: 30,
                        },
                    }
                }
            ],
            discountPerc: 0.2,
            pBuy: 2,
            selectSize: 'M',
            selectColor: 'Xanh biển',
        }
    ]
}

const rootReducer = (state = initState, action) => {
    switch(action.type){
        case 'cart/increaseQuantity':
            return {
                ...state,
                orders: state.orders.map(product => product.productId === action.payload.id ? {...product, pBuy: ++product.pBuy} : {...product})
            }
            
        case 'cart/reduceQuantity':
            return {
                ...state,
                orders: state.orders.map(product => product.productId === action.payload.id ? {...product, pBuy: --product.pBuy} : {...product})
            }

        case 'cart/deleteOrderItem':
            return {
                ...state,
                orders: state.orders.filter((product => product.productId !== action.payload.id))
            }
        case 'cart/filterChange':
            return {
                ...state,
                orders: state.orders.map(product => product.productId === action.payload.id ? {...product,  [action.payload.type]: action.payload.value} : {...product})
            }
        default :
            return state
    }
}

export default rootReducer;