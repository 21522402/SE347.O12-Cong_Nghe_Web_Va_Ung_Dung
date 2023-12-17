import { useEffect, useState } from 'react';
import styles from './AddressPopup.module.scss'
import classNames from 'classnames/bind';
import { AiOutlineClose } from 'react-icons/ai';
import { ComboBox, TextInput, RadioButton } from '~/components/Input';
import { createAddresses, updateAddresses } from '~/redux/api/userRequest';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function AddressPopup({props, onClose, isAdd, onCloseAndReload} ) {
    const [selected, setSelected] = useState({})
    useEffect(() => {
        setSelected(props && !isAdd ? props : {
            name: "",
            province: "",
            district: "",
            phoneNumber: '',
            ward: "",
            detail: "",
            default: false,
        })
    }, [isAdd, props])

    const handleChange = (e, name) => {
        setSelected({...selected, [name]: e.target.value})
    }

    const dispatch = useDispatch()
    let currentUser = useSelector((state) => state.auth.login.currentUser)

    const handleSubmit = () => {
        isAdd ?
            createAddresses(currentUser, selected, dispatch, (res) => {
                onCloseAndReload()
            })
        : 
            updateAddresses(currentUser, selected, dispatch, (res) => {
                onCloseAndReload()
            })
    }
    const provinceApi = "https://provinces.open-api.vn/api/";
    const districtApi = (code) => `https://provinces.open-api.vn/api/p/${code}?depth=2`
    const wardApi = (code) => `https://provinces.open-api.vn/api/d/${code}?depth=2`
    const [provinces, setProvince] = useState([])
    const [districts, setDistrict] = useState([])
    const [wards, setWard] = useState([])
    const defaults = [{id: 1, name: "Đặt làm địa chỉ mặc định", value: "false"}]

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
            <div className={cx('container')}>
                <h1 className={cx('account-popup__title')}>{isAdd ? "Thêm địa chỉ" : "Cập nhật địa chỉ"}</h1>
                <div className={cx('btnClose')} onClick={onClose}>
                    <AiOutlineClose/>
                </div>
                <div className={cx('outer')}>
                    <div className={cx('row-item')} >
                        <div className={cx('row-item-input')}>
                            <TextInput placeHolder={'Họ và tên'} type={"type_2"} value={selected.name} handleChange={(e) => handleChange(e, "name")}/>
                        </div>
                        <div className={cx('row-item-input')}>
                            <TextInput placeHolder={'Số điện thoại'} type={"type_2"} value={selected.phoneNumber} handleChange={(e) => handleChange(e, "phoneNumber")}/>
                        </div>
                    </div>
                    <div className={cx('row-item')}>
                        <div className={cx('row-item-input')}>
                            <TextInput placeHolder={'Địa chỉ'} type={"type_2"} value={selected.detail} handleChange={(e) => handleChange(e, "detail")}/>
                        </div>
                        <div className={cx('row-item-input')} style={{ position: 'relative', zIndex: 1000}}>
                            <ComboBox listItems={provinces} placeHolder={'Chọn Tỉnh/Thành phố'} selectedItem={selected.province} type={'list'} filterValueSelected={filterProvince}/>
                        </div>
                    </div>
                    <div className={cx('row-item')}>
                        <div className={cx('row-item-input')}>
                            <ComboBox listItems={districts} placeHolder={'Chọn Quận/Huyện'} selectedItem={selected.district} type={'list'} filterValueSelected={filterDistrict}/>
                        </div>
                        <div className={cx('row-item-input')}>
                            <ComboBox listItems={wards} placeHolder={'Chọn Phường/Xã'} selectedItem={selected.ward} type={'list'} filterValueSelected={(e)=> {setSelected({...selected, 'ward': e.name})}}/>
                        </div>
                    </div>
                    <div>
                        <RadioButton listItems={defaults} filterValueChecked={(e)=> {e.id === -1 ? setSelected({...selected, default: false }) : setSelected({...selected, default: true})}}/>
                    </div>
                    <div style={{display: 'flex', width: '100%', flexDirection:'column', alignItems: 'end'}}>
                        <div style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                            <div className={cx('account-info__btn_cancel')} style={{width: '50%'}} onClick={onClose}>
                                <span className={cx('account-info__btn-text_cancel')}>Hủy</span>
                            </div>
                            <div className={cx('account-info__btn')} style={{width: '50%'}} onClick={handleSubmit}>
                                <span className={cx('account-info__btn-text')}>{isAdd ? 'Thêm' : 'Cập nhật'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddressPopup;