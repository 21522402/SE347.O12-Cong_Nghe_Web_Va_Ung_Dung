import { useDispatch, useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import styles from './Reviews.module.scss'
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { getAllOrderReview } from '~/redux/api/userRequest';
const cx = classNames.bind(styles);

function Reviews() {
    // const orders = [
    //     {
    //         orderId: "#01796773327",
    //         orderDate: "12:00 16/01/2023",
    //         address: {
    //             province: 'Quảng Ngãi',
    //             district: 'Tư Nghĩa',
    //             ward: 'Nghĩa Phương',
    //             detail: 'Gần trung tâm đăng kiểm',
    //             name: 'Lê Quang Nhân',
    //             phoneNum: '0868008460'
    //         },
    //         orderItem: [
    //             {
    //                 orderItemId: "1",
    //                 productId: "1",
    //                 productName: 'Shorts thể thao 7" Movement',
    //                 images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
    //                 size: "S",
    //                 color: "Nâu",
    //                 quantity: 2,
    //                 price: 120000,
    //                 discountPerc: 0.2,
    //                 review: {
    //                     reviewId: "5",
    //                     star: 4,
    //                     content: "Không lẽ anh nói sản phẩm này như cặt, mặc thoái mái, màu cũng đẹp lắm em.",
    //                     image: ["https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg", "https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg", "https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg"],
    //                     reviewDate: "16/01/2023 12:00",
    //                     response: "Nói chung là thái độ của em rất mất dạy nhưng vì em đã ủng hộ shop nên anh bỏ qua, lần sau ghé shop mua nữa nhé.... Cảm ơn em :3"
    //                 }
    //             },
    //             {
    //                 orderItemId: "2",
    //                 productId: "3",
    //                 productName: 'Shorts thể thao 7" Movement',
    //                 images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
    //                 size: "S",
    //                 color: "Nâu",
    //                 quantity: 2,
    //                 price: 120000,
    //                 discountPerc: 0.2,
    //             }
    //         ],
    //         voucher: {
    //             voucherId: "1",
    //             price: 50000,
    //             voucherCode: "CN1123",
    //             expDate: "25/11/2023",
    //             minPrice: 499000,
    //             description: "Không có gì",
    //             startDate: "26/12/2022",
    //         },
    //         status: "Đã giao",
    //     },
    //     {
    //         orderId: "#01796773327",
    //         orderDate: "12:00 16/01/2023",
    //         address: {
    //             province: 'Quảng Ngãi',
    //             district: 'Tư Nghĩa',
    //             ward: 'Nghĩa Phương',
    //             detail: 'Gần trung tâm đăng kiểm',
    //             name: 'Lê Quang Nhân',
    //             phoneNum: '0868008460'
    //         },
    //         orderItem: [
    //             {
    //                 orderItemId: "1",
    //                 productId: "1",
    //                 productName: 'Shorts thể thao 7" Movement',
    //                 images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
    //                 size: "S",
    //                 color: "Nâu",
    //                 quantity: 2,
    //                 price: 120000,
    //                 discountPerc: 0.2,
    //                 review: {
    //                     reviewId: "1",
    //                     star: 4,
    //                     content: "Không lẽ anh nói sản phẩm này như cặt, mặc thoái mái, màu cũng đẹp lắm em.",
    //                     image: ["https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg", "https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg", "https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg"],
    //                     reviewDate: "16/01/2023 12:00",
    //                 }
    //             },
    //             {
    //                 orderItemId: "2",
    //                 productId: "3",
    //                 productName: 'Shorts thể thao 7" Movement',
    //                 images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
    //                 size: "S",
    //                 color: "Nâu",
    //                 quantity: 2,
    //                 price: 120000,
    //                 discountPerc: 0.2,
    //             },
    //             {
    //                 orderItemId: "2",
    //                 productId: "3",
    //                 productName: 'Shorts thể thao 7" Movement',
    //                 images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
    //                 size: "S",
    //                 color: "Nâu",
    //                 quantity: 2,
    //                 price: 120000,
    //                 discountPerc: 0.2,
    //             },
    //             {
    //                 orderItemId: "2",
    //                 productId: "3",
    //                 productName: 'Shorts thể thao 7" Movement',
    //                 images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
    //                 size: "S",
    //                 color: "Nâu",
    //                 quantity: 2,
    //                 price: 120000,
    //                 discountPerc: 0.2,
    //             }
    //         ],
    //         voucher: {
    //             voucherId: "1",
    //             price: 50000,
    //             voucherCode: "CN1123",
    //             expDate: "25/11/2023",
    //             minPrice: 499000,
    //             description: "Không có gì",
    //             startDate: "26/12/2022",
    //         },
    //         status: "Đã giao",
    //     },
    //     {
    //         orderId: "#01796773327",
    //         orderDate: "12:00 16/01/2023",
    //         address: {
    //             province: 'Quảng Ngãi',
    //             district: 'Tư Nghĩa',
    //             ward: 'Nghĩa Phương',
    //             detail: 'Gần trung tâm đăng kiểm',
    //             name: 'Lê Quang Nhân',
    //             phoneNum: '0868008460'
    //         },
    //         orderItem: [
    //             {
    //                 orderItemId: "1",
    //                 productId: "1",
    //                 productName: 'Shorts thể thao 7" Movement',
    //                 images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
    //                 size: "S",
    //                 color: "Nâu",
    //                 quantity: 2,
    //                 price: 120000,
    //                 discountPerc: 0.2,
    //                 review: {
    //                     reviewId: "1",
    //                     star: 4,
    //                     content: "Không lẽ anh nói sản phẩm này như cặt, mặc thoái mái, màu cũng đẹp lắm em.",
    //                     image: ["https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg", "https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg", "https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg"],
    //                     reviewDate: "16/01/2023 12:00",
    //                 }
    //             },
    //             {
    //                 orderItemId: "2",
    //                 productId: "3",
    //                 productName: 'Shorts thể thao 7" Movement',
    //                 images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
    //                 size: "S",
    //                 color: "Nâu",
    //                 quantity: 2,
    //                 price: 120000,
    //                 discountPerc: 0.2,
    //                 review: {
    //                     reviewId: "2",
    //                     star: 4,
    //                     content: "Không lẽ anh nói sản phẩm này như cặt, mặc thoái mái, màu cũng đẹp lắm em.",
    //                     image: ["https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg", "https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg", "https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg"],
    //                     reviewDate: "16/01/2023 12:00",
    //                 }
    //             }
    //         ],
    //         voucher: {
    //             voucherId: "1",
    //             price: 50000,
    //             voucherCode: "CN1123",
    //             expDate: "25/11/2023",
    //             minPrice: 499000,
    //             description: "Không có gì",
    //             startDate: "26/12/2022",
    //         },
    //         status: "Đã giao",
    //     },
    //     {
    //         orderId: "#01796773327",
    //         orderDate: "12:00 16/01/2023",
    //         address: {
    //             province: 'Quảng Ngãi',
    //             district: 'Tư Nghĩa',
    //             ward: 'Nghĩa Phương',
    //             detail: 'Gần trung tâm đăng kiểm',
    //             name: 'Lê Quang Nhân',
    //             phoneNum: '0868008460'
    //         },
    //         orderItem: [
    //             {
    //                 orderItemId: "1",
    //                 productId: "1",
    //                 productName: 'Shorts thể thao 7" Movement',
    //                 images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
    //                 size: "S",
    //                 color: "Nâu",
    //                 quantity: 2,
    //                 price: 120000,
    //                 discountPerc: 0.2,
    //             },
    //             {
    //                 orderItemId: "2",
    //                 productId: "3",
    //                 productName: 'Shorts thể thao 7" Movement',
    //                 images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
    //                 size: "S",
    //                 color: "Nâu",
    //                 quantity: 2,
    //                 price: 120000,
    //                 discountPerc: 0.2,
    //             }
    //         ],
    //         voucher: {
    //             voucherId: "1",
    //             price: 50000,
    //             voucherCode: "CN1123",
    //             expDate: "25/11/2023",
    //             minPrice: 499000,
    //             description: "Không có gì",
    //             startDate: "26/12/2022",
    //         },
    //         status: "Đã giao",
    //     }
    // ]

    const dispatch = useDispatch()
    let currentUser = useSelector((state) => state.auth.login.currentUser)
    let orders = useSelector((state) => state.user.orderReview.orders)

    useEffect(() => {
        getAllOrderReview(currentUser, dispatch)
    }, [])

    return ( 
        <>
            <div className={cx('container')}>
                <h1 className={cx('account-page__title')}>Đánh giá và phản hồi</h1>
                {
                    orders?.map((item, index) => {
                        return <div key={index} style={{margin: '10px 0px'}}>
                            <OrderItem props={item}/>
                        </div>
                    })
                }

            </div>
        </>
    );
}

export default Reviews;