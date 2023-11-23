import OrderItem from './OrderItem';
import styles from './Orders.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Orders() {
    const orders = [
        {
            orderId: "#01796773327",
            orderDate: "12:00 16/01/2023",
            address: {
                province: 'Quảng Ngãi',
                district: 'Tư Nghĩa',
                ward: 'Nghĩa Phương',
                detail: 'Gần trung tâm đăng kiểm',
                name: 'Lê Quang Nhân',
                phoneNum: '0868008460'
            },
            orderItem: [
                {
                    orderItemId: "1",
                    productId: "1",
                    productName: 'Shorts thể thao 7" Movement',
                    images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
                    size: "S",
                    color: "Nâu",
                    quantity: 2,
                    price: 120000,
                    discountPerc: 0.2,
                },
                {
                    orderItemId: "2",
                    productId: "3",
                    productName: 'Shorts thể thao 7" Movement',
                    images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
                    size: "S",
                    color: "Nâu",
                    quantity: 2,
                    price: 120000,
                    discountPerc: 0.2,
                }
            ],
            voucher: {
                voucherId: "1",
                price: 50000,
                voucherCode: "CN1123",
                expDate: "25/11/2023",
                minPrice: 499000,
                description: "Không có gì",
                startDate: "26/12/2022",
            },
            status: "Đang giao",
        },
        {
            orderId: "#01796773327",
            orderDate: "12:00 16/01/2023",
            address: {
                province: 'Quảng Ngãi',
                district: 'Tư Nghĩa',
                ward: 'Nghĩa Phương',
                detail: 'Gần trung tâm đăng kiểm',
                name: 'Lê Quang Nhân',
                phoneNum: '0868008460'
            },
            orderItem: [
                {
                    orderItemId: "1",
                    productId: "1",
                    productName: 'Shorts thể thao 7" Movement',
                    images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
                    size: "S",
                    color: "Nâu",
                    quantity: 2,
                    price: 120000,
                    discountPerc: 0.2,
                },
                {
                    orderItemId: "2",
                    productId: "3",
                    productName: 'Shorts thể thao 7" Movement',
                    images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
                    size: "S",
                    color: "Nâu",
                    quantity: 2,
                    price: 120000,
                    discountPerc: 0.2,
                },
                {
                    orderItemId: "2",
                    productId: "3",
                    productName: 'Shorts thể thao 7" Movement',
                    images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
                    size: "S",
                    color: "Nâu",
                    quantity: 2,
                    price: 120000,
                    discountPerc: 0.2,
                },
                {
                    orderItemId: "2",
                    productId: "3",
                    productName: 'Shorts thể thao 7" Movement',
                    images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
                    size: "S",
                    color: "Nâu",
                    quantity: 2,
                    price: 120000,
                    discountPerc: 0.2,
                }
            ],
            voucher: {
                voucherId: "1",
                price: 50000,
                voucherCode: "CN1123",
                expDate: "25/11/2023",
                minPrice: 499000,
                description: "Không có gì",
                startDate: "26/12/2022",
            },
            status: "Đang giao",
        },
        {
            orderId: "#01796773327",
            orderDate: "12:00 16/01/2023",
            address: {
                province: 'Quảng Ngãi',
                district: 'Tư Nghĩa',
                ward: 'Nghĩa Phương',
                detail: 'Gần trung tâm đăng kiểm',
                name: 'Lê Quang Nhân',
                phoneNum: '0868008460'
            },
            orderItem: [
                {
                    orderItemId: "1",
                    productId: "1",
                    productName: 'Shorts thể thao 7" Movement',
                    images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
                    size: "S",
                    color: "Nâu",
                    quantity: 2,
                    price: 120000,
                    discountPerc: 0.2,
                },
                {
                    orderItemId: "2",
                    productId: "3",
                    productName: 'Shorts thể thao 7" Movement',
                    images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
                    size: "S",
                    color: "Nâu",
                    quantity: 2,
                    price: 120000,
                    discountPerc: 0.2,
                }
            ],
            voucher: {
                voucherId: "1",
                price: 50000,
                voucherCode: "CN1123",
                expDate: "25/11/2023",
                minPrice: 499000,
                description: "Không có gì",
                startDate: "26/12/2022",
            },
            status: "Đang giao",
        },
        {
            orderId: "#01796773327",
            orderDate: "12:00 16/01/2023",
            address: {
                province: 'Quảng Ngãi',
                district: 'Tư Nghĩa',
                ward: 'Nghĩa Phương',
                detail: 'Gần trung tâm đăng kiểm',
                name: 'Lê Quang Nhân',
                phoneNum: '0868008460'
            },
            orderItem: [
                {
                    orderItemId: "1",
                    productId: "1",
                    productName: 'Shorts thể thao 7" Movement',
                    images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
                    size: "S",
                    color: "Nâu",
                    quantity: 2,
                    price: 120000,
                    discountPerc: 0.2,
                },
                {
                    orderItemId: "2",
                    productId: "3",
                    productName: 'Shorts thể thao 7" Movement',
                    images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
                    size: "S",
                    color: "Nâu",
                    quantity: 2,
                    price: 120000,
                    discountPerc: 0.2,
                }
            ],
            voucher: {
                voucherId: "1",
                price: 50000,
                voucherCode: "CN1123",
                expDate: "25/11/2023",
                minPrice: 499000,
                description: "Không có gì",
                startDate: "26/12/2022",
            },
            status: "Đang giao",
        }
    ]
    return ( 
        <>
            <div className={cx('container')}>
                <h1 className={cx('account-page__title')}>Lịch sử đơn hàng</h1>
                
                {
                    orders.map((item, index) => {
                        return <div style={{margin: '10px 0px'}}>
                            <OrderItem key={index} props={item}/>
                        </div>
                    })
                }

            </div>
        </>
    );
}

export default Orders;