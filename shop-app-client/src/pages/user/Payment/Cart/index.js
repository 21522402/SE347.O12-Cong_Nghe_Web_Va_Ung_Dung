import styles from './Cart.module.scss'
import classNames from 'classnames/bind';
import ProductItem from './ProductItem';
const cx = classNames.bind(styles);
function Cart() {
    const products = [
        {
            productId: '1',
            productavatar: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/September2023/_CMM2123-Edits.jpg',
            productName: 'T-Shirt Cotton 220GSM',
            importPrice: '500000',
		    exportPrice: '537000',
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
            qBuy: 2,
            selectSize: 'M',
            selectColor: 'Trắng',
        },
        {
            productId: '2',
            productavatar: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/September2023/_CMM2123-Edits.jpg',
            productName: 'T-Shirt Cotton 220GSM',
            importPrice: '500000',
		    exportPrice: '537000',
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
            qBuy: 2,
            selectSize: 'M',
            selectColor: 'Xanh biển',
        }
    ]
    return ( 
        <>
            {
                products.map((item, index) => {
                    return (
                        <>
                            <ProductItem key={index} props={item}/>
                        </>
                    )
                })       
            }

        </>
    );
}

export default Cart;