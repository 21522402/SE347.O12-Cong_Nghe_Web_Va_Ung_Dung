import classNames from "classnames/bind";
import { useState } from "react";
import styles from './ItemCollection.module.scss';


const cx = classNames.bind(styles)

function ItemCollection({product}) {
    const [indexColorActive, setIndexColorActive] = useState(0);
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
                                return <span key={index} className={cx('item-size')}>{item.sizeName}</span>
                            })
                        }
                    </div>
                </div>
                <div className={cx('rating-star')}>
                    <span className={cx('rating')}>5 <img style={{marginBottom: '4px'}} src="https://www.coolmate.me/images/star-new.svg?08a379c24952a980d5430515abb8be4e"/></span>
                    
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
                <div className={cx('layout-price')}>
                    <span className={cx('price')}>469.000đ</span>
                    <span className={cx('sale-off')}>499.000đ</span>
                    <span className={cx('percent')}>-6%</span>
                </div>
            </div>
        </div>
    );
}

export default ItemCollection;