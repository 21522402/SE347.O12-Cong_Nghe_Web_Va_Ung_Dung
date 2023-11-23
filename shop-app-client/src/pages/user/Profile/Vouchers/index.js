import { useState } from 'react';
import VoucherItem from './VoucherItem/VoucherItem';
import VoucherPopup from './VoucherPopup';
import styles from './Vouchers.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Vouchers() {
    const vouchers = [{voucherCode: 'CMBAMBO259K', voucherDes: 'Tặng 01 Quần lót Trunk Cotton cho đơn hàng 259K (Không áp dụng cho sản phẩm SALE)', voucherStartDate: '20.10.2023', voucherOutDate: '31.10.2023', voucherCondition: 'Mã giảm giá không có giá trị quy đổi ra tiền mặt'}, {voucherCode: 'CMBAMBO259K', voucherDes: 'Tặng 01 Quần lót Trunk Cotton cho đơn hàng 259K (Không áp dụng cho sản phẩm SALE)', voucherStartDate: '20.10.2023', voucherOutDate: '31.10.2023', voucherCondition: 'Mã giảm giá không có giá trị quy đổi ra tiền mặt'}, {voucherCode: 'CMBAMBO259K', voucherDes: 'Tặng 01 Quần lót Trunk Cotton cho đơn hàng 259K (Không áp dụng cho sản phẩm SALE)', voucherStartDate: '20.10.2023', voucherOutDate: '31.10.2023', voucherCondition: 'Mã giảm giá không có giá trị quy đổi ra tiền mặt'}, {voucherCode: 'CMBAMBO259K', voucherDes: 'Tặng 01 Quần lót Trunk Cotton cho đơn hàng 259K (Không áp dụng cho sản phẩm SALE)', voucherStartDate: '20.10.2023', voucherOutDate: '31.10.2023', voucherCondition: 'Mã giảm giá không có giá trị quy đổi ra tiền mặt'}]
    const [popup, setPopup] = useState(undefined)
    const [selected, setSelected] = useState({voucherCode: 'concec'})
    return ( 
        <>
            <div className={cx('container')}>
                <h1 className={cx('account-page__title')}>Ví voucher</h1>
                <div className={cx('outerVouchers')}>
                    {/* List Vouchers */}
                    {
                        vouchers.map((item, index) => {
                            return (
                                <div style={{margin: '5px 10px'}} key={index}>
                                    <VoucherItem props={item} onClickCondition={() => {setSelected(item); setPopup(true);}}/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={cx('vouchers-footer')}>
                    <img style={{width: '100%'}} src="https://mcdn.coolmate.me/image/September2023/mceclip0_96.jpg" alt=""/> 
                    <div className={cx('vouchers-footer__content')}>
                        <h3 className={cx('content')}>Nhiều ưu đãi hấp dẫn<br/>đang chờ bạn</h3> 
                        <a href="#" className={cx('btn', 'account-info__btn')}>Khám phá ngay</a>
                    </div>
                </div>
                <div className={cx('overLay', `${popup ? 'popMask' : ''}`)} onClick={() => setPopup(false)}></div>
                <div className={cx('outerPopup', `${popup === true ? 'pop' : popup === false ? 'down' : ''}`)}>
                    <VoucherPopup props={selected} onClose={() => setPopup(false)}/>
                </div>
            </div>
        </>
    );
}

export default Vouchers;