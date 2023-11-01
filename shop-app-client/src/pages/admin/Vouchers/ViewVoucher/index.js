import styles from './ViewVoucher.module.scss';
import {HiOutlineInformationCircle} from 'react-icons/hi'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)
function ViewVoucher({item}) {
    return (
        <div className={cx('wrapper')} style={{ animation: 'dropTop .3s linear' }}>
                <div style={{ fontWeight: 500, fontSize: '20px', marginBottom: '20px', backgroundColor:'black', color:'white', padding:'8px', width:'15%', borderRadius:'4px'}}>Xem Voucher</div>
                <div style={{padding:'2rem 4rem 2.5rem 4rem', width:'100%'}}>
                    <div  className={cx('row-input')} >
                        <div className={cx('input-field-left')} >
                            <div  className={cx('label-input')}>Mã giảm giá <HiOutlineInformationCircle fontSize={'18px'}/> </div>
                            <div className={cx('input')}>{item.voucherCode}</div>
                        </div>
                        <div className={cx('input-field-right')} >
                            <div className={cx('label-input')}>Số lượng <HiOutlineInformationCircle fontSize={'18px'}/> </div>
                            <div  className={cx('input')}>{item.amount}</div>
                        </div>
                    </div>
                    <div  className={cx('row-input')} >
                        <div  className={cx('input-field-left')} >
                            <div className={cx('label-input')}>Số tiền được giảm <HiOutlineInformationCircle fontSize={'18px'}/> </div>
                            <div  className={cx('input')}>{item.price}</div>
                        </div>
                        <div  className={cx('input-field-right')} >
                            <div  className={cx('label-input')}>Giá trị tối thiểu <HiOutlineInformationCircle fontSize={'18px'}/> </div>
                            <div  className={cx('input')}>{item.minPrice}</div>
                        </div>
                    </div>
                    <div  className={cx('row-input')} >
                        <div  className={cx('input-field-left')} >
                            <div  className={cx('label-input')}>Ngày bắt đầu <HiOutlineInformationCircle fontSize={'18px'}/> </div>
                            <div  className={cx('input')}>{item.startDate}</div>
                        </div>
                        <div  className={cx('input-field-right')} >
                            <div  className={cx('label-input')}>Ngày kết thúc <HiOutlineInformationCircle fontSize={'18px'}/> </div>
                            <div   className={cx('input')}>{item.expiredDate}</div>
                        </div>
                    </div>
                    <div className={cx('row-input')} >
                    <div className={cx('input-field-left')} >
                        <label htmlFor='statusVoucher' className={cx('label-input')}>Trạng thái <HiOutlineInformationCircle fontSize={'18px'} /> </label>
                        <div className={cx({ 'expired-item': item.status === 'Expired' }, { 'unExpired-item': item.status === 'UnExpired' })}>
                            {item.status}
                        </div>
                    </div>

                </div>
                    <div  className={cx('row-input')} >
                        <div style={{width:'100%', display:'flex', flexDirection:'column' }} >
                            <div  className={cx('label-input')}>Mô tả <HiOutlineInformationCircle fontSize={'18px'}/> </div>
                            <textarea rows={4} name='description' id='description' type='text' value={item.description} disabled placeholder='Sale ngày phụ nữ việt nam. Áp dụng để giảm tiền trực tiếp cho đơn hàng!' style={{marginTop:'12px', border:'1px solid #ccc', padding:'8px' }}/>
                        </div>
                    </div>
                   

                </div>
        </div>
    );
}

export default ViewVoucher;