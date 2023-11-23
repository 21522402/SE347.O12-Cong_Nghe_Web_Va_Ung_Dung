import { Link } from 'react-router-dom';
import styles from './SettingPopup.module.scss';
import classNames from 'classnames/bind';
import {AiOutlineClose} from 'react-icons/ai';
import { VoucherIcon, LocationIcon, AccountIcon, OrderIcon, RatingIcon, QuestionIcon } from '~/assets/icons';
import VoucherItem from './VoucherItem/VoucherItem';
const cx = classNames.bind(styles);

function SettingPopup({closeBtn}) {
    const settingItems = [{icon: VoucherIcon, label: 'Ví Voucher'}, {icon: OrderIcon, label: 'Lịch sử đơn hàng'}, {icon: LocationIcon, label: 'Sổ địa chỉ'}, {icon: AccountIcon, label: 'Cài đặt tài khoản'}, {icon: RatingIcon, label: 'Đánh giá và phản hồi'}, {icon: QuestionIcon, label: 'FAQ & Chính sách'}];
    const vouchers = [{voucherCode: 'CMBAMBO259K', voucherDes: 'Tặng 01 Quần lót Trunk Cotton cho đơn hàng 259K (Không áp dụng cho sản phẩm SALE)', voucherOutDate: '31.10.2023'}, {voucherCode: 'CMBAMBO259K', voucherDes: 'Tặng 01 Quần lót Trunk Cotton cho đơn hàng 259K (Không áp dụng cho sản phẩm SALE)', voucherOutDate: '31.10.2023'}, {voucherCode: 'CMBAMBO259K', voucherDes: 'Tặng 01 Quần lót Trunk Cotton cho đơn hàng 259K (Không áp dụng cho sản phẩm SALE)', voucherOutDate: '31.10.2023'}, {voucherCode: 'CMBAMBO259K', voucherDes: 'Tặng 01 Quần lót Trunk Cotton cho đơn hàng 259K (Không áp dụng cho sản phẩm SALE)', voucherOutDate: '31.10.2023'}]
    return (
        <>
            <div className={cx('container')}>
                <h1 className={cx('greetHeader')}>Hi, Nhan Quang Le</h1>
                <div className={cx('popupContentContainer')}>
                    <div className={cx('vouchersContainer')}>
                        <h1 className={cx('titleVoucher')}>Ưu đãi dành riêng cho bạn</h1>
                        <div className={cx('outerVouchers')}>
                            {/* List Vouchers */}
                            {
                                vouchers.map((item, index) => {
                                    return (
                                        <div style={{margin: '0 10px'}}>
                                            <VoucherItem key={index} voucherCode={item.voucherCode} voucherDes={item.voucherDes} voucherOutDate={item.voucherOutDate}/>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <div className={cx('outerSetting')}>
                            {/* List items setting */}
                            {
                                settingItems.map((item, index) => {
                                    return (
                                        <div key={index} style={{cursor: 'pointer', width: '128px', borderRadius: '10px', padding: '15px 20px', margin: '7px', backgroundColor: '#f1f1f1', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
                                            <div style={{width: '40px', height: '40px'}}>
                                                <img style={{width: '100%', height: '100%'}} src={item.icon}/>
                                            </div>
                                            <span style={{color: 'black', textAlign: 'center'}}>{item.label}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <Link to={'/user-profile'}>
                    <label for={closeBtn}>
                        <div className={cx('btnToProfile')}>
                            <span className={cx('textToProfile')}>Đi đến tài khoản</span>
                        </div>
                    </label>  
                </Link>
            </div>
        </>
    );
}

export default SettingPopup;