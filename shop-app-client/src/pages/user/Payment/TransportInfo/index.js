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
    
    const handleChange = (e, name) => {
        setSelected({...selected, [name]: e.target.value})
    }
    const provinceApi = "https://provinces.open-api.vn/api/";
    const districtApi = (code) => `https://provinces.open-api.vn/api/p/${code}?depth=2`
    const wardApi = (code) => `https://provinces.open-api.vn/api/d/${code}?depth=2`

    const [provinces, setProvince] = useState([])
    const [districts, setDistrict] = useState([])
    const [wards, setWard] = useState([])

    useEffect(() => {
        fetch(provinceApi)
            .then((res) => res.json())
            .then((json) => {
                setProvince(json)
            });
    }, [])

    const filterProvince = (e) => {
        fetch(districtApi(e.code))
        .then((res) => res.json())
        .then((json) => {
            setDistrict(json.districts)
            if(selected.district) selected.district = ''
            if(selected.ward) selected.ward = ''
            selected.province = e.name
            setWard([])
            setSelected({...selected})
        });
    }

    const filterDistrict = (e) => {
        fetch(wardApi(e.code))
            .then((res) => res.json())
            .then((json) => {
                setWard(json.wards)
                if(selected.ward) selected.ward = ''
                selected.district = e.name
                setSelected({...selected})
            });
    }
    return ( 
        <>
            <div className={cx('outer')}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px'}}>
                        <div style={{width: '50%'}}>
                            <TextInput placeHolder={'Họ và tên'} type={"type_2"} value={selected.name} handleChange={(e) => handleChange(e, "name")}/>
                        </div>
                        <div style={{width: '50%'}}>
                            <TextInput placeHolder={'Số điện thoại'} type={"type_2"} value={selected.phoneNumber} handleChange={(e) => handleChange(e, "phoneNumber")}/>
                        </div>
                    </div>
                    <div>
                        <TextInput placeHolder={'Email'} type={"type_2"} value={selected.email} handleChange={(e) => handleChange(e, "email")}/>
                    </div>
                    <div>
                            <TextInput placeHolder={'Địa chỉ'} type={"type_2"} value={selected.detail} handleChange={(e) => handleChange(e, "detail")}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px'}}>
                        <div style={{width: '33.3333%', position: 'relative'}}>
                            <ComboBox listItems={provinces} placeHolder={'Chọn Tỉnh/Thành phố'} selectedItem={selected.province} type={'list'} filterValueSelected={filterProvince}/>
                        </div>
                        <div style={{width: '33.3333%'}}>
                            <ComboBox listItems={districts} placeHolder={'Chọn Quận/Huyện'} selectedItem={selected.district} type={'list'} filterValueSelected={filterDistrict}/>                        
                        </div>
                        <div style={{width: '33.3333%'}}>
                            <ComboBox listItems={wards} placeHolder={'Chọn Phường/Xã'} selectedItem={selected.ward} type={'list'} filterValueSelected={(e)=> {setSelected({...selected, 'ward': e.name})}}/>                        
                        </div>
                    </div>
                    <div>
                        <TextInput placeHolder={'Ghi chú thêm(Ví dụ: Giao hàng giờ hành chính)'} type={"type_2"} value={selected.note} handleChange={(e) => handleChange(e, "note")}/>
                    </div>
                </div>
        </>
    );
}

export default TransportInfo;