import CustomeButton from '~/components/CustomeButton/CustomeButton';
import styles from './AddVoucher.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)
function AddVoucher() {
    return (
        <div className={cx('wrapper')} style={{ animation: 'dropTop .3s linear' }}>
            <div style={{ padding: '2rem 2.5rem 2.5rem 2.5rem' }}>
                <h1 style={{ fontWeight: 900, fontSize: '30px', marginBottom: '20px' }}>Add new voucher</h1>
                
            </div>
        </div>
    );
}

export default AddVoucher;