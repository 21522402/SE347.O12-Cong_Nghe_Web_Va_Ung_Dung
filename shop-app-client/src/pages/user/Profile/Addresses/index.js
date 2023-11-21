import styles from './Addresses.module.scss'
import classNames from 'classnames/bind';
import AddressItem from './AddressItem';
import AddressPopup from './AddressPopup';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Addresses() {
    const [popup, setPopup] = useState(undefined)
    const [isAdd, setIsAdd] = useState(true)
    const [selected, setSelected] = useState({})
    const addresses = [
        {
            name: 'Lê Quang Nhân',
            province: "Quảng Ngãi",
            district: "Miền núi chất",
            phoneNumber: '0868008460',
            ward: "Hải Phòng",
            detail: "Nằm trên đường quốc lộ 1A",
            default: true,
        },
        {
            name: 'Lê Quang Nhân',
            province: "Quảng Ngãi",
            district: "Huyện Tư Nghĩa",
            phoneNumber: '0868008460',
            ward: "Xã Nghĩa Phương",
            detail: "Nằm trên đường quốc lộ 1A",
            default: false,
        },
        {
            name: 'Lê Quang Nhân',
            province: "Quảng Ngãi",
            district: "Huyện Tư Nghĩa",
            phoneNumber: '0868008460',
            ward: "Xã Nghĩa Phương",
            detail: "Nằm trên đường quốc lộ 1A",
            default: false,
        },
    ]
    return ( 
        <>
            <div className={cx('container')}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <h1 className={cx('account-page__title')}>Địa chỉ của tôi</h1>
                    <div className={cx('account-info__btn')} onClick={() => {setIsAdd(true); setPopup(true)}}>
                        <span className={cx('account-info__btn-text')}>Thêm địa chỉ mới</span>
                    </div>
                </div>
                <hr style={{width: '100%', height: '1px', backgroundColor: '#e1e1e1'}}></hr>
                <div className={cx('outerAddresses')}>
                    {
                        addresses.map((item, index) => <div key={index}>
                            <AddressItem props={item} onClickUpdate={()=>{setSelected(item); setIsAdd(false); setPopup(true)}} onClickDelete={() => {console.log('conece')}}/>
                            <hr style={{width: '100%', height: '1px', backgroundColor: '#e1e1e1'}}></hr>
                        </div>)
                    }
                </div>
                <div className={cx('overLay', `${popup ? 'popMask' : ''}`)} onClick={() => setPopup(false)}></div>
                <div className={cx('outerPopup', `${popup === true ? 'pop' : popup === false ? 'down' : ''}`)}>
                    <AddressPopup props={isAdd ? undefined : selected} isAdd={isAdd} onClose={() => setPopup(false)}/>
                </div>
            </div>
        </>
    );
}

export default Addresses;