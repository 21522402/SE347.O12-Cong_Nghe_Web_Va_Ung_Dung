import { TextInput } from "~/components/Input";
import classNames from 'classnames/bind';
import styles from './ChangePass.module.scss';
import {IoMdLock} from 'react-icons/io'
const cx = classNames.bind(styles);


function ChangePass() {
    return ( 
        <>
            <div className={cx('container')}>
                <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                    <h1 className={cx('account-page__title')}>Thay đổi mật khẩu</h1>
                </div>
                <div style={{gap: '14px', display: 'flex', flexDirection: 'column'}}>
                    <TextInput placeHolder="Mật khẩu cũ" icon={<IoMdLock/>} secure/>
                    <TextInput placeHolder="Mật khẩu mới" icon={<IoMdLock/>} secure/>
                    <TextInput placeHolder="Nhập lại mật khẩu mới" icon={<IoMdLock/>} secure/>
                </div>
                <div style={{display: 'flex', width: '100%', justifyContent: 'end'}}>
                    <div className={cx('account-info__btn')}>
                        <span className={cx('account-info__btn-text')}>Cập nhật</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChangePass;