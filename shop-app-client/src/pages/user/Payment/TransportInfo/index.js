import { ComboBox, RadioButton, TextInput } from '~/components/Input';
import styles from './TransportInfo.module.scss'
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
function TransportInfo({props}) {
    const [selected, setSelected] = useState({})
    useEffect(() => {
        setSelected(props ? props : {
            name: "",
            province: "",
            district: "",
            phoneNumber: '',
            email: "",
            ward: "",
            detail: "",
            note: "",
            default: false,
        })
    }, [props])
    const provinces = [{id: 1, name: "Quảng Ngãi"}, {id: 2, name: "Hải Phòng"}, {id: 3, name: "Hồ Chí Minh"}, {id: 4, name: "Hồ Chí Minh"}, {id: 5, name: "Hồ Chí Minh"}, {id: 6, name: "Hồ Chí Minh"}, {id: 7, name: "Miền núi chất"}]
    return ( 
        <>
            <div className={cx('outer')}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px'}}>
                        <div style={{width: '50%'}}>
                            <TextInput placeHolder={'Họ và tên'} type={"type_2"} value={selected.name}/>
                        </div>
                        <div style={{width: '50%'}}>
                            <TextInput placeHolder={'Số điện thoại'} type={"type_2"} value={selected.phoneNumber}/>
                        </div>
                    </div>
                    <div>
                        <TextInput placeHolder={'Email'} type={"type_2"} value={selected.email}/>
                    </div>
                    <div>
                            <TextInput placeHolder={'Địa chỉ'} type={"type_2"} value={selected.detail}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px'}}>
                        <div style={{width: '33.3333%', position: 'relative'}}>
                            <ComboBox listItems={provinces} placeHolder={'Chọn Tỉnh/Thành phố'} selectedItem={selected.province} type={'list'} filterValueSelected={(e)=> {setSelected({...selected, 'province': e.name})}}/>
                        </div>
                        <div style={{width: '33.3333%'}}>
                            <ComboBox listItems={provinces} placeHolder={'Chọn Quận/Huyện'} selectedItem={selected.district} type={'list'} filterValueSelected={(e)=> {setSelected({...selected, 'district': e.name})}}/>
                        </div>
                        <div style={{width: '33.3333%'}}>
                            <ComboBox listItems={provinces} placeHolder={'Chọn Phường/Xã'} selectedItem={selected.ward} type={'list'} filterValueSelected={(e)=> {setSelected({...selected, 'ward': e.name})}}/>
                        </div>
                    </div>
                    <div>
                        <TextInput placeHolder={'Ghi chú thêm(Ví dụ: Giao hàng giờ hành chính)'} type={"type_2"} value={selected.email}/>
                    </div>
                </div>
        </>
    );
}

export default TransportInfo;