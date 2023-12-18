import classNames from "classnames/bind";
import { useState } from "react";
import styles from './ItemCollection.module.scss';


const cx = classNames.bind(styles)

function ItemCollection({product, handleToCart}) {
    const [indexColorActive, setIndexColorActive] = useState(0);
    // const product = {
    //     productName: 'Áo khoác thể thao Pro Active',
    //     productType: 'Áo khoác',
    //     colors: [
    //         {
    //             colorName: 'Xám',
    //             images: [
    //                 "https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/QD001.20_38.jpg",
    //                 "https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/QD001.24_53.jpg",
    //             ],
    //             sizes: [
    //                 {
    //                     name: 'S',
    //                     quantity: 10,
    //                 },
    //                 {
    //                     name: 'L',
    //                     quantity: 102,
    //                 },
    //                 {
    //                     name: 'M',
    //                     quantity: 90,
    //                 }
    //             ]
    //         },
    //         {
    //             colorName: 'Xanh Navy',
    //             images: [
    //                 "https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/QD001.9_84.jpg",
    //                 "https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/QD001.12_94.jpg",
    //                 "https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/QD001.10.jpg",
    //                 "https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/AD001.s2.4.jpg"
    //             ],
    //             sizes: [
    //                 {
    //                     name: 'M',
    //                     quantity: 10,
    //                 },
    //                 {
    //                     name: 'L',
    //                     quantity: 102,
    //                 },
    //                 {
    //                     name: 'XL',
    //                     quantity: 90,
    //                 },
    //                 {
    //                     name: '2XL',
    //                     quantity: 20,
    //                 },
    //                 {
    //                     name: '3XL',
    //                     quantity: 40,
    //                 }
    //             ]
    //         }
    //     ],
    //     quantitySold: 120
    // }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image-wrapper')}>
                <img className={cx('image-1')} src={product?.colors[indexColorActive]?.images[0]} />
                <img className={cx('image-2')} src={product?.colors[indexColorActive]?.images[1]}  />
                <div className={cx('section-size')}>
                    <div className={cx('title-size')}>Thêm nhanh vào giỏ hàng</div>
                    <div style={{ display: 'flex', gap: '4px', marginTop: '12px', flexWrap: 'wrap' }}>
                        {
                            product?.colors[indexColorActive]?.sizes?.map((item, index) => {
                                return <span onClick={(e) => {e.stopPropagation();handleToCart(product, item, product?.colors[indexColorActive])}} key={index} className={cx('item-size')}>{item.sizeName}</span>
                            })
                        }
                    </div>
                </div>
                <div className={cx('rating-star')}>
                    <span className={cx('rating')}>5</span>
                    <img src="https://www.coolmate.me/images/star-new.svg?08a379c24952a980d5430515abb8be4e"/>
                    <span className={cx('num-review')}>(3)</span>
                </div>
                <div className={cx('overlay')}></div>
            </div>
            <div className={cx('section-color')}>
                {
                    product?.colors.map((item, index) => {
                        return (
                            <div key={index} className={cx('color-item', { active: index === indexColorActive })}>
                                <img onClick={() => { setIndexColorActive(index) }} alt="" src={item.images[0]} className={cx('img-color')} />
                            </div>
                        )
                    })
                }
            </div>
            <div className={cx('section-info')}>
                <h3 className={cx('product-name')}>
                    <a href="/">{product?.productName}</a>
                </h3>
                <p className={cx('product-color')}>{product?.colors[indexColorActive]?.colorName}</p>
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px', alignItems: 'center' }}>
                    <span style={{ fontWeight: '600', fontFamily: 'Pangea,sans-serif', fontSize: '14px', }}>{new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format((product?.exportPrice && product?.discountPerc) ? product?.exportPrice * (1 - product?.discountPerc / 100) : 0 )}</span>
                    <span style={{ fontWeight: '500', fontFamily: 'Pangea,sans-serif', color: '#c4c4c4', textDecoration: 'line-through', fontSize: '14px', }}>{new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(product?.exportPrice)}</span>
                    <span style={{ fontWeight: '500', fontFamily: 'Pangea,sans-serif', color: '#ff3102', fontSize: '14px', }}>{product?.discountPerc && `-${product?.discountPerc}%`}</span>
                </div>
            </div>
        </div>
    );
}

export default ItemCollection;