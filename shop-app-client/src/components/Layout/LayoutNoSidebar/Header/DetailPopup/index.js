import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DetailPopup.module.scss';


const cx = classNames.bind(styles);
function DetailPopup({ onMouseLeave, category }) {
    const navigate=useNavigate();
    const wrapper = useRef(null);
    const [isSticky, setSticky] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        var offset = wrapper.current.offsetTop;
        window.onscroll = function () {
            if (window.scrollY > 80) {
                setSticky(true)
            }
            else {
                setSticky(false)
            }
        }
    }, []);
    const handleCategoryClick = (type) => {
        // Hide the popup
        setIsVisible(false);
        // Navigate to the desired route
        navigate(`/collection/type=${type}`);
    };
    return isVisible ?(
        <div   ref={wrapper} className={cx('wrapper', { sticky: isSticky })}>
            <div onMouseLeave={() => onMouseLeave()} className={cx('inner')}>
                <div style={{ borderRight: '1px solid #ccc', paddingRight: '60px' }}>
                    <div className={cx('title')}>Theo sản phẩm
                        <div style={{ width: '100%', height: '2px', backgroundColor: '#000', position: 'absolute', top: '30px' }}></div>
                    </div>

                    <div style={{ display: 'flex', gap: '60px' }}>
                        <div className={cx('product-type')}>
                            {
                                category.listTypes.map((item, index) => {
                                    return <div key={index} className={cx('product-type-item')} 
                                    // onClick={() => {navigate(`/collection/type=${item.name}`)}} 
                                    onClick={() => handleCategoryClick(item.name)}
                                    style={{ color: 'rgb(112, 113, 113)', fontSize: '14px', fontWeight: '500', marginRight: '40px' }}>{item.name}</div>
                                })
                            }

                        </div>
                    </div>
                </div>
                <div style={{ borderRight: '1px solid #ccc', paddingRight: '60px' }}>
                    <div className={cx('title')}>Top sản phẩm bán chạy nhất
                        <div style={{ width: '100%', height: '2px', backgroundColor: '#000', position: 'absolute', top: '30px' }}></div>
                    </div>

                    <div style={{ display: 'flex', gap: '60px' }}>
                        <div className={cx('product-type')}>
                            {
                                category.listTypes.map((item, index) => {
                                    return <div key={index} className={cx('product-type-item')} 
                                    onClick={() => handleCategoryClick(item.name)}
                                     style={{ color: 'rgb(112, 113, 113)', fontSize: '14px', fontWeight: '500', marginRight: '40px' }}>{item.name}</div>
                                })
                            }

                        </div>
                    </div>
                </div>



                <div className={cx('product-list-img')}>
                    <div className={cx('product-list-1')}>
                        <div className={cx('img-wrapper')}>
                            <img className={cx('imageee')} src={category.images[0].src} />
                            <div className={cx('overlay2')}>
                            
                            </div>
                            <span>{category.images[0].alt}</span>

                        </div>
                        <div className={cx('img-wrapper')}>
                            <img src={category.images[1].src} />
                            <div className={cx('overlay2')}>
                  
                            </div>
                            <span>{category.images[1].alt}</span>
                        </div>
                    </div>
                    <div className={cx('product-list-2')}>
                        <div className={cx('img-wrapper')}>
                            <img src={category.images[2].src} />
                            <div className={cx('overlay2')}>
                           
                            </div>
                            <span>{category.images[2].alt}</span>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    ):null;
}

export default DetailPopup;