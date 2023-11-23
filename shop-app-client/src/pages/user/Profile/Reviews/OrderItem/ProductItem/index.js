import { useEffect, useState } from 'react';
import styles from './ProductItem.module.scss'
import classNames from 'classnames/bind';
import { MdStar } from 'react-icons/md';
import { Rating } from '@mui/material';
const cx = classNames.bind(styles);
function ProductItem({props}) {
    let [item, setItem] = useState({})
    let [pop, setPop] = useState(false)
    let [rating, setRating] = useState(0)
    useEffect(() => {
        setItem(props ? props : {
            orderItemId: "1",
            productId: "1",
            productName: 'Shorts thể thao 7" Movement',
            images: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
            size: "S",
            color: "Nâu",
            quantity: 2,
            price: 120000,
            discountPerc: 0.2,
        })
    }, [])

    const arr = [1, 2, 3, 4, 5]

    return ( 
        <>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                <div style={{width: '50%', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0px rgba(0, 0, 0, 0.1)', padding: '5px', borderRadius: '4px'}} className={cx('container')}>
                    <div className={cx('image')}>
                        <img className={cx('image')} src={item.images} alt=''/>
                    </div>
                    <div className={cx('rightContent')}>
                        <div>
                            <div className={cx('outerContent')}>
                                <span className={cx('productName')}>{item.productName}</span>
                                <span className={cx('colorSize')} style={{marginTop: '5px'}}>{`${props.color} / ${props.size}`}</span>
                                <span className={cx('colorSize')} style={{marginTop: '5px'}}>x {props.quantity}</span>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row', gap: '5px', alignItems: 'flex-end', marginBottom: '15px', marginTop: '5px'}}>
                                <div style={{fontWeight: '600'}}>{new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(item.price * (1 - item.discountPerc))}</div>
                                <del style={{fontWeight: '400', fontSize: '14px', color: '#ccc'}}>{new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(item.price)}</del>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{height: '100%', width: '1px', backgroundColor: 'rgb(75, 172, 77)'}}/>
                <div style={{width: '50%'}}>
                    {
                        props.review ? (
                            <div style={{boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0px rgba(0, 0, 0, 0.1)', padding: '5px', borderRadius: '4px'}}>
                                <label style={{ fontSize: '16px', fontWeight: '600' }}>Đánh giá của bạn:</label>
                                <div>
                                    {
                                        arr.map((item) => {
                                            if(item <= props.review.star)
                                                return <MdStar color="orange" size={16} />
                                            return <MdStar color="#ccc" size={16}/>
                                        })
                                    }
                                </div>
                                <div style={{fontSize: '14px', marginBottom: '8px'}}>
                                    {props.review.content}
                                </div>
                                <div>
                                    {
                                        props.review.image ? 
                                            <div style={{display: 'flex', flexDirection: 'row', gap: '7px', alignItems: 'center', marginBottom: '8px'}}>
                                                {
                                                    props.review.image.map((item, index) => {
                                                        return <img src={item} style={{width: '80px', height: '100px', border: '0.5px solid #ccc', borderRadius: '5px'}} alt=''/>
                                                    })
                                                }
                                            </div> : null
                                    }
                                </div>
                                <div>
                                    {
                                        props.review.response ? (
                                            <div style={{backgroundColor: '#f3f3f3', padding: '10px', borderRadius: '4px'}}>
                                                <label style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Phản hồi của shop:</label>
                                                <div style={{fontSize: '14px'}}>{props.review.response}</div>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        ): <>
                            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <label style={{ fontSize: '16px', fontWeight: '600', color: '#ff9966'}}>Chưa đánh giá</label>
                                <div className={cx('account-info__btn')} onClick={() => setPop(true)} style={{marginRight: '5px'}}>
                                    <span className={cx('account-info__btn-text')}>Đánh giá</span>
                                </div>
                            </div>
                            {
                                pop ? (
                                    <>
                                        <div style={{boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0px rgba(0, 0, 0, 0.1)', padding: '5px', borderRadius: '4px', marginTop: '10px'}}>
                                        <label style={{ fontSize: '16px', fontWeight: '600' }}>Đánh giá của bạn:</label>
                                            <div>
                                                <Rating
                                                    name="simple-controlled"
                                                    size="large"
                                                    
                                                    value={rating}
                                                    onChange={(event, newValue) => {
                                                        setRating(newValue);
                                                    }}
                                                />
                                            </div>
                                            <div style={{fontSize: '14px', marginBottom: '8px'}}>
                                                <textarea className={cx('input')} placeholder='Cảm nhận của bạn về sản phẩm ...' type='text'/>
                                            </div>
                                            <div>
                                            <div style={{display: 'flex', width: '100%', flexDirection:'column', alignItems: 'end'}}>
                                                    <div style={{width: '50%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                                                        <div className={cx('account-info__btn_cancel')} style={{width: '50%'}} onClick={() => setPop(false)}>
                                                            <span className={cx('account-info__btn-text_cancel')}>Hủy</span>
                                                        </div>
                                                        <div className={cx('account-info__btn')} style={{width: '50%'}}>
                                                            <span className={cx('account-info__btn-text')}>Tạo</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : null
                            }
                        </>
                    }


                </div>
            </div>
        </>
    );
}

export default ProductItem;