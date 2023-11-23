import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { IoSearch, IoBagHandle } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import DetailPopup from './DetailPopup';
import removeViTones from '~/utils/removeViTones';
import SettingPopup from './SettingPopup';
const cx = classNames.bind(styles);

function Header() {
    const navigate = useNavigate();
    const overLay = useRef();
    const hideOverLay = () => {
        overLay.current.checked = false
    }
    const [indexCategoryActive, setIndexCategoryActive] = useState(-1);
    const [showDetailPopUp, setShowDetailPopup] = useState(false)
    const [valueSearch,setValueSearch] = useState('');
    const categories = [
        {
            category: 'Áo',
            listTypes: [
                {   
                    name: 'Áo khoác',
                    link: `/collection/1`
                }
                ,
                {   
                    name: 'Áo mùa đông',
                    link: `/collection/1`
                },
                {   
                    name: 'Áo thể thao',
                    link: `/collection/1`
                },
                {   
                    name: 'Áo tết',
                    link: `/collection/1`
                }
            ],
            images: [
                {
                    src:  'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2023/GRAPHICS.AGANIN.10_10.jpg',
                    alt: 'Phê pha',
                },
                {
                    src:  'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/August2022/v2navytruoc_78.jpg',
                    alt: 'Yasuo áo rách',
                },
                {
                    src:  'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/March2023/DSC04764_copy_35.jpg',
                    alt: 'Leesin mù',
                }
               
                
                
            ]
        },
        {
            category: 'Quần',
            listTypes: [
            {   
                name: 'Quần dài',
                link: `/collection/1`
            }
            ,
            {   
                name: 'Quần short',
                link: `/collection/1`
            },
            {   
                name: 'Quần thể thao',
                link: `/collection/1`
            },
            {   
                name: 'Quần báo',
                link: `/collection/1`
            }
        ],
            images: [
                {
                    src: 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2023/GRAPHICS.AGANIN.10_10.jpg',
                    alt: 'Jeans Copper Denim',
                },
                {
                    src:  'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/August2022/v2navytruoc_78.jpg',
                    alt: 'Quần lửng',
                },
                {
                    src:  'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/March2023/DSC04764_copy_35.jpg',
                    alt: 'Quần dài',
                }

            ]
        },
        {
            category: 'Đồ lót',
            listTypes: [
                {   
                    name: 'Brief (Tam giác)',
                    link: `/collection/1`
                }
                ,
                {   
                    name: 'Trunk (Boxer)',
                    link: `/collection/1`
                },
                {   
                    name: 'Boxer dài',
                    link: `/collection/1`
                }
            ],
            images: [
                {
                    src: 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2023/GRAPHICS.AGANIN.10_10.jpg',
                    alt: 'Jeans Copper Denim',
                },
                {
                    src:  'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/August2022/v2navytruoc_78.jpg',
                    alt: 'Quần lửng',
                },
                {
                    src:  'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/March2023/DSC04764_copy_35.jpg',
                    alt: 'Quần dài',
                }
            ]
        }
    ]
    const handleMouseOver = (index) => {
        setIndexCategoryActive(index)
        setShowDetailPopup(true)
    }
    return (

            
        <div className={cx('wrapper')}>
            <a href='/user'  className={cx('logo-wrapper')}>
                <div>SHOP</div>
                <div className={cx('child2')}>APP</div>
            </a>

            <div className={cx('categories')}>
                {

                    <>
                        <div className={cx('item-category')}>
                            Sale
                        </div>

                        {
                            categories.map((item, index) => {
                                return (
                                    <div onMouseOver={() => handleMouseOver(index)} key={index} className={cx('item-category') }>
                                        {item.category}
                                    </div>
                                )
                            })
                        }
                    </>
                }
            </div>

            <div className={cx('search')}>
                <div style={{ padding: '0 12px', cursor: 'pointer' }}>
                    <IoSearch style={{ color: '#000', fontSize: '24px' }} />
                </div>
                <div className={cx('input-wrapper')}>
                    <input onChange={(e) => setValueSearch(e.target.value.trim())} className={cx('input-search')} type='text' value={valueSearch} placeholder='Tìm kiếm sản phẩm...'/>
                    <div className={cx('line')}></div>
                </div>
                <div onClick={() => setValueSearch('')} style={{ padding: '0 12px', cursor: 'pointer' }}>
                    <IoMdClose style={{ color: '#000', fontSize: '24px' }} />
                </div>

            </div>

            <div className={cx('user')}>
                <input ref={overLay} type="checkbox" hidden className={cx("main__header-navBar-hide-open")} id={cx("main__header-navBar-hide-open")}/>
                <div className={cx("main__header-navBar")}>
                    <SettingPopup closeBtn={hideOverLay}/>
                </div>
                <label for={cx("main__header-navBar-hide-open")} className={cx("main__header-navbar-overlay")}>
                </label>
                <label for={cx("main__header-navBar-hide-open")}>
                    <div style={{cursor: 'pointer'}}><img src='https://mcdn.coolmate.me/image/October2023/mceclip3_72.png' /></div>
                </label>
                <Link to='/cart'>
                    <div style={{cursor: 'pointer'}}><IoBagHandle style={{ color: '#fff', fontSize: '28px' }} /></div>
                </Link>
            </div>
            {
                showDetailPopUp && 
                <DetailPopup category={categories[indexCategoryActive]} onMouseLeave={() => setShowDetailPopup(false)} />
            }
       
        </div>
   
  


    );
}

export default Header;