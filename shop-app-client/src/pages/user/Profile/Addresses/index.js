import styles from './Addresses.module.scss'
import classNames from 'classnames/bind';
import AddressItem from './AddressItem';
import AddressPopup from './AddressPopup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteAddresses, getAllAddresses } from '~/redux/api/userRequest';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
const cx = classNames.bind(styles);

function Addresses() {
    const [popup, setPopup] = useState(undefined)
    const [isAdd, setIsAdd] = useState(true)
    const [selected, setSelected] = useState({})
    // const addresses = [
    //     {
    //         name: 'Lê Quang Nhân',
    //         province: "Quảng Ngãi",
    //         district: "Miền núi chất",
    //         phoneNumber: '0868008460',
    //         ward: "Hải Phòng",
    //         detail: "Nằm trên đường quốc lộ 1A",
    //         default: true,
    //     },
    //     {
    //         name: 'Lê Quang Nhân',
    //         province: "Quảng Ngãi",
    //         district: "Huyện Tư Nghĩa",
    //         phoneNumber: '0868008460',
    //         ward: "Xã Nghĩa Phương",
    //         detail: "Nằm trên đường quốc lộ 1A",
    //         default: false,
    //     },
    //     {
    //         name: 'Lê Quang Nhân',
    //         province: "Quảng Ngãi",
    //         district: "Huyện Tư Nghĩa",
    //         phoneNumber: '0868008460',
    //         ward: "Xã Nghĩa Phương",
    //         detail: "Nằm trên đường quốc lộ 1A",
    //         default: false,
    //     },
    // ]

    const dispatch = useDispatch()
    let currentUser = useSelector((state) => state.auth.login.currentUser)
    let addresses = useSelector((state) => state.user.address?.addresses)

    useEffect(() => {
        getAllAddresses(currentUser, dispatch)
    }, [])

    const onCloseAndReload = () => {
        setPopup(false)
        getAllAddresses(currentUser, dispatch)
    }

    const deleteItem = (item) => {
        deleteAddresses(currentUser, item, dispatch, (res) => {
            getAllAddresses(currentUser, dispatch)
        })
    }
    return ( 
        <>
            <div className={cx('container')}>
            <Link to={'/user-profile'} className={cx('account-page__icon')}>
                    <BiArrowBack /> 
                </Link>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <h1 className={cx('account-page__title')}>Địa chỉ của tôi</h1>
                    <div className={cx('account-info__btn')} onClick={() => {setIsAdd(true); setPopup(true)}}>
                        <span className={cx('account-info__btn-text')}>Thêm địa chỉ mới</span>
                    </div>
                </div>
                <hr style={{width: '100%', height: '1px', backgroundColor: '#e1e1e1'}}></hr>
                <div className={cx('outerAddresses')}>
                    {
                        addresses?.map((item, index) => <div key={index}>
                            <AddressItem props={item} onClickUpdate={()=>{setSelected(item); setIsAdd(false); setPopup(true)}}  onClickDelete={() => deleteItem(item)}/>
                            <hr style={{width: '100%', height: '1px', backgroundColor: '#e1e1e1'}}></hr>
                        </div>)
                    }
                </div>
                <div className={cx('overLay', `${popup ? 'popMask' : ''}`)} onClick={() => setPopup(false)}></div>
                <div className={cx('outerPopup', `${popup === true ? 'pop' : popup === false ? 'down' : ''}`)}>
                    <AddressPopup props={isAdd ? undefined : selected} isAdd={isAdd} onClose={() => setPopup(false)} onCloseAndReload={onCloseAndReload}/>
                </div>
            </div>
        </>
    );
}

export default Addresses;