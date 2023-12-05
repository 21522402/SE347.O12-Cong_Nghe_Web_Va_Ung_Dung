import { useEffect, useState } from 'react';
import styles from './ProductItem.module.scss'
import classNames from 'classnames/bind';
import { MdStar } from 'react-icons/md';
import { Rating } from '@mui/material';
import images from '~/assets/img';
import { AiOutlineClose } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { createReview, getAllOrderReview } from '~/redux/api/userRequest';
const cx = classNames.bind(styles);
function ProductItem({props}) {
    let [item, setItem] = useState({})
    let [pop, setPop] = useState(false)
    let [content, setContent] = useState("")
    let [rating, setRating] = useState(0)
    let [imagesRv, setImages] = useState([])
    useEffect(() => {
        setItem(props ? props : {
            orderItemId: "1",
            productId: "1",
            productName: 'Shorts thể thao 7" Movement',
            image: 'https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/August2023/AT220-1.jpg',
            size: "S",
            color: "Nâu",
            quantity: 2,
            price: 120000,
            discountPerc: 0.2,
        })
    }, [])

    const dispatch = useDispatch()
    let currentUser = useSelector((state) => state.auth.login.currentUser)

    const handleChange = (e) => {
        setContent(e.target.value)
    }

    const handlePreviewImage = (event) => {
        if (event.target.files[0]) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    // Cập nhật state với đường link mới của ảnh
                    setImages([...imagesRv, reader.result]);
                };
                reader.readAsDataURL(file);
            }
        }
    }

    const handleSubmit = () => {
        const reviewData = {
            "star": rating,
            "content": content,
            "imagesRv": imagesRv, 
            "isResponsed": false,
        }
        createReview(currentUser, props._id, reviewData, dispatch, (res) => {
            getAllOrderReview(currentUser, dispatch)
        })
    }

    const arr = [1, 2, 3, 4, 5]

    return ( 
        <>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                <div style={{width: '50%', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0px rgba(0, 0, 0, 0.1)', padding: '5px', borderRadius: '4px'}} className={cx('container')}>
                    <div className={cx('image')}>
                        <img className={cx('image')} src={item.image} alt=''/>
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
                                        props.review.imagesRv ? 
                                            <div style={{display: 'flex', flexDirection: 'row', gap: '7px', alignItems: 'center', marginBottom: '8px'}}>
                                                {
                                                    props.review.imagesRv.map((item, index) => {
                                                        return <img src={item} style={{width: '80px', height: '100px', border: '0.5px solid #ccc', borderRadius: '5px'}} alt=''/>
                                                    })
                                                }
                                            </div> : null
                                    }
                                </div>
                            </div>
                        ): <>
                            {
                                pop ? (
                                    <>
                                        <div style={{boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0px rgba(0, 0, 0, 0.1)', padding: '5px', borderRadius: '4px'}}>
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
                                            </div >
                                            <div style={{display: 'flex', flexDirection: 'row', gap: '10px', margin: '5px 0px'}}>
                                                {
                                                    imagesRv.map((item, index) => {
                                                        return <div key={index} style={{position: 'relative'}}>
                                                            <img src={item} alt="" style={{width: '50px', height: '50px'}}></img>
                                                            <AiOutlineClose onClick={() => setImages(imagesRv.filter((i) => i !== item))} style={{ fontSize: '14px', color: 'red', position: 'absolute', top: '2px', right: '2px', cursor: 'pointer' }} />
                                                        </div>
                                                    })
                                                }
                                                <div style={{opacity: imagesRv.length === 5 ? 0.2: 1, cursor: imagesRv.length === 5 ? 'default': 'pointer', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ccc', position: 'relative'}}>
                                                    <IoMdAdd style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/>
                                                    <input disabled={imagesRv.length === 5 ? true: false} type="file" onChange={handlePreviewImage} accept="image/jpg, image/jpeg, image/png" alt="" style={{width: '100%', height: '100%', opacity: 0}}/>
                                                </div>
                                            </div>
                                            <div style={{fontSize: '14px', marginBottom: '8px'}}>
                                                <textarea className={cx('input')} placeholder='Cảm nhận của bạn về sản phẩm ...' type='text' value={content} onChange={handleChange}/>
                                            </div>
                                            <div>
                                            <div style={{display: 'flex', width: '100%', flexDirection:'column', alignItems: 'end'}}>
                                                    <div style={{width: '50%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                                                        <div className={cx('account-info__btn_cancel')} style={{width: '50%'}} onClick={() => {setPop(false); setImages([]); setRating(0); setContent("")}}>
                                                            <span className={cx('account-info__btn-text_cancel')}>Hủy</span>
                                                        </div>
                                                        <div className={cx('account-info__btn')} style={{width: '50%'}} onClick={handleSubmit}>
                                                            <span className={cx('account-info__btn-text')} >Tạo</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : 
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                    <label style={{ fontSize: '16px', fontWeight: '600', color: '#ff9966'}}>Chưa đánh giá</label>
                                    <div className={cx('account-info__btn')} onClick={() => setPop(true)} style={{marginRight: '5px'}}>
                                        <span className={cx('account-info__btn-text')}>Đánh giá</span>
                                    </div>
                                </div>
                            }
                        </>
                    }


                </div>
            </div>
            
            <div>
                {
                    props.review?.response ? (
                        <div style={{backgroundColor: '#f3f3f3', padding: '10px', borderRadius: '4px'}}>
                            <label style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Phản hồi của shop:</label>
                            <div style={{fontSize: '14px'}}>{props.review.response.content}</div>
                            {
                                props.review.response.imagesRsp ? 
                                    <div style={{display: 'flex', flexDirection: 'row', gap: '7px', alignItems: 'center', marginBottom: '8px'}}>
                                        {
                                            props.review.response.imagesRsp.map((item, index) => {
                                                return <img src={item} style={{width: '80px', height: '100px', border: '0.5px solid #ccc', borderRadius: '5px'}} alt=''/>
                                            })
                                        }
                                    </div> : null
                            }
                        </div>
                        
                    ) : null
                }
            </div>
        </>
    );
}

export default ProductItem;