import { useEffect, useState } from 'react';
import styles from './AddressPopup.module.scss'
import classNames from 'classnames/bind';
import { AiOutlineClose } from 'react-icons/ai';
import { ComboBox, TextInput, RadioButton } from '~/components/Input';
const cx = classNames.bind(styles);

function AddressPopup({props, onClose, isAdd} ) {
    const [selected, setSelected] = useState({})
    useEffect(() => {
        setSelected(props ? props : {
            name: "",
            province: "",
            district: "",
            phoneNumber: '',
            ward: "",
            detail: "",
            default: false,
        })
    }, [props])
    const provinces = [{id: 1, name: "Quảng Ngãi"}, {id: 2, name: "Hải Phòng"}, {id: 3, name: "Hồ Chí Minh"}, {id: 4, name: "Hồ Chí Minh"}, {id: 5, name: "Hồ Chí Minh"}, {id: 6, name: "Hồ Chí Minh"}, {id: 7, name: "Miền núi chất"}]
    const defaults = [{id: 1, name: "Đặt làm mặc định"}]
    return ( 
        <>
            <div className={cx('container')}>
                <h1 className={cx('account-popup__title')}>{isAdd ? "Thêm địa chỉ" : "Cập nhật địa chỉ"}</h1>
                <div className={cx('btnClose')} onClick={onClose}>
                    <AiOutlineClose/>
                </div>
                <div className={cx('outer')}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px'}}>
                        <div style={{width: '50%'}}>
                            <TextInput placeHolder={'Họ và tên'} type={"type_2"} value={selected.name}/>
                        </div>
                        <div style={{width: '50%'}}>
                            <TextInput placeHolder={'Số điện thoại'} type={"type_2"} value={selected.phoneNumber}/>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px'}}>
                        <div style={{width: '50%'}}>
                            <TextInput placeHolder={'Địa chỉ'} type={"type_2"} value={selected.detail}/>
                        </div>
                        <div style={{width: '50%', position: 'relative', zIndex: 1000}}>
                            <ComboBox listItems={provinces} placeHolder={'Chọn Tỉnh/Thành phố'} selectedItem={selected.province} type={'list'} filterValueSelected={(e)=> {setSelected({...selected, 'province': e.name})}}/>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px'}}>
                        <div style={{width: '50%'}}>
                            <ComboBox listItems={provinces} placeHolder={'Chọn Quận/Huyện'} selectedItem={selected.district} type={'list'} filterValueSelected={(e)=> {setSelected({...selected, 'district': e.name})}}/>
                        </div>
                        <div style={{width: '50%'}}>
                            <ComboBox listItems={provinces} placeHolder={'Chọn Phường/Xã'} selectedItem={selected.ward} type={'list'} filterValueSelected={(e)=> {setSelected({...selected, 'ward': e.name})}}/>
                        </div>
                    </div>
                    <div>
                        <RadioButton listItems={defaults} filterValueChecked={(e)=> {console.log(e)}}/>
                    </div>
                    <div style={{display: 'flex', width: '100%', flexDirection:'column', alignItems: 'end'}}>
                        <div style={{width: '50%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                            <div className={cx('account-info__btn_cancel')} style={{width: '50%'}} onClick={onClose}>
                                <span className={cx('account-info__btn-text_cancel')}>Hủy</span>
                            </div>
                            <div className={cx('account-info__btn')} style={{width: '50%'}}>
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