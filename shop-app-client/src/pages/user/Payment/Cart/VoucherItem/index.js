import { Link } from 'react-router-dom';
import styles from './VoucherItem.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
const cx = classNames.bind(styles);

function VoucherItem({props, onClickVoucher} ) {
    const [popup, setPopup] = useState(false)
    return (
        <>
            <div className={cx('outerVoucher')} onClick={onClickVoucher}>
                <div className={cx('halfBubble')}>

                </div>
                <div className={cx('lineBreak')}>
                </div>
                <div className={cx('contentContainer')}>
                    <h1 className={cx('voucherCode')}>
                        {props.voucherCode}
                    </h1>
                    <p className={cx('voucherDes')}>
                        {props.description}
                    </p>
                </div>
                
            </div>
        </>
    );
}

export default VoucherItem;