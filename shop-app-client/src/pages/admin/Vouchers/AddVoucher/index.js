import styles from './AddVoucher.module.scss';
import {HiOutlineInformationCircle} from 'react-icons/hi'
import classNames from 'classnames/bind';
import { CustomeButton } from '~/components';
import { MdAdd } from 'react-icons/md';
const cx = classNames.bind(styles)
function AddVoucher() {
    return (
        <div className={cx('wrapper')} style={{ animation: 'dropTop .3s linear' }}>
                <div style={{ fontWeight: 500, fontSize: '20px', marginBottom: '20px', backgroundColor:'black', color:'white', padding:'8px', width:'20%', borderRadius:'4px'}}>Thêm Voucher mới</div>
                <div style={{padding:'2rem 4rem 2.5rem 4rem', width:'100%'}}>
                    <div  className={cx('row-input')} >
                        <div className={cx('input-field-left')} >
                            <label htmlFor='voucherCode' className={cx('label-input')}>Mã giảm giá <HiOutlineInformationCircle fontSize={'18px'}/> </label>
                            <input name='voucherCode' id='voucherCode' type='text' placeholder='WOMENDAY21T' className={cx('input')}/>
                        </div>
                        <div className={cx('input-field-right')} >
                            <label htmlFor='quanlity' className={cx('label-input')}>Số lượng <HiOutlineInformationCircle fontSize={'18px'}/> </label>
                            <input name='quanlity' id='quanlity' type='number' placeholder='1000' className={cx('input')}/>
                        </div>
                    </div>
                    <div  className={cx('row-input')} >
                        <div  className={cx('input-field-left')} >
                            <label htmlFor='priceDiscount' className={cx('label-input')}>Số tiền được giảm <HiOutlineInformationCircle fontSize={'18px'}/> </label>
                            <input name='priceDiscount' id='priceDiscount' type='number' placeholder='50.000' className={cx('input')}/>
                        </div>
                        <div  className={cx('input-field-right')} >
                            <label htmlFor='minPrice' className={cx('label-input')}>Giá trị tối thiểu <HiOutlineInformationCircle fontSize={'18px'}/> </label>
                            <input name='minPrice' id='minPrice' type='number' placeholder='350.000' className={cx('input')}/>
                        </div>
                    </div>
                    <div  className={cx('row-input')} >
                        <div  className={cx('input-field-left')} >
                            <label htmlFor='startDate' className={cx('label-input')}>Ngày bắt đầu <HiOutlineInformationCircle fontSize={'18px'}/> </label>
                            <input name='startDate' id='startDate' type='date'  className={cx('input')}/>
                        </div>
                        <div  className={cx('input-field-right')} >
                            <label htmlFor='endDate' className={cx('label-input')}>Ngày kết thúc <HiOutlineInformationCircle fontSize={'18px'}/> </label>
                            <input name='endDate' id='endDate' type='date'  className={cx('input')}/>
                        </div>
                    </div>
                    <div  className={cx('row-input')} >
                        <div style={{width:'100%', display:'flex', flexDirection:'column' }} >
                            <label htmlFor='description' className={cx('label-input')}>Mô tả <HiOutlineInformationCircle fontSize={'18px'}/> </label>
                            <textarea rows={4} name='description' id='description' type='text' placeholder='Sale ngày phụ nữ việt nam. Áp dụng để giảm tiền trực tiếp cho đơn hàng!' style={{marginTop:'12px', border:'1px solid #ccc', padding:'8px' }}/>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'right'}}>
                        <CustomeButton className={cx('cus-button')} title={'Xác nhận'} icon={<MdAdd fontSize={20} />} isLeft={true} bgHover={'#2f5acf'} textColorHover={'white'} containStyles={{ width: '120px', backgroundColor: 'black', color: 'white', borderRadius: '8px', padding: '20px 10px', marginTop: '16px' }} />
                    </div>

                </div>
        </div>
    );
}

export default AddVoucher;