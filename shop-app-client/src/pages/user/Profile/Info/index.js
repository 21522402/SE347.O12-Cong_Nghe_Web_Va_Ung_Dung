
import classNames from 'classnames/bind';
import styles from './Info.module.scss';
import UpdateInfo from './UpdateInfo';
import ChangePass from './ChangePass';
const cx = classNames.bind(styles);
function Info(){
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('account-info__form')}>
                    <h1 className={cx('account-page__title')}>Thông tin tài khoản</h1>
                    <div className={cx('account-info__content')}>
                        <div className={cx('account-info__field')}>
                            <div className={cx('account-info__label')}>Họ và tên</div>
                            <div className={cx('account-info__value')}>Lê Quang Nhân</div>
                        </div>
                        <div className={cx('account-info__field')}>
                            <div className={cx('account-info__label')}>Số điện thoại</div>
                            <div className={cx('account-info__value')}>0868008460</div>
                        </div>
                        <div className={cx('account-info__field')}>
                            <div className={cx('account-info__label')}>Giới tính</div>
                            <div className={cx('account-info__value')}>Nam</div>
                        </div>
                        <div className={cx('account-info__field')}>
                            <div className={cx('account-info__label')}>Ngày sinh    
                            <span style={{fontSize: '14.4px', color: '#999999', fontStyle:'italic', marginLeft: '3px'}}>(ngày/tháng/năm)</span></div>
                            <div className={cx('account-info__value')}>16/01/2003</div>
                        </div>
                        <div className={cx('account-info__field')}>
                            <div className={cx('account-info__label')}>Chiều cao</div>
                            <div className={cx('account-info__value')}>175cm</div>
                        </div>
                        <div className={cx('account-info__field')}>
                            <div className={cx('account-info__label')}>Cân nặng</div>
                            <div className={cx('account-info__value')}>65kg</div>
                        </div>
                    </div>
                    <label for={cx('popup__editInfo')}>
                        <div className={cx('account-info__btn')}>
                            <span className={cx('account-info__btn-text')}>Cập nhật</span>
                        </div>
                    </label>
                    <input type="checkbox" hidden id={cx('popup__editInfo')} className={cx('popup__editInfo')}/>
                    <label for={cx('popup__editInfo')} className={cx('backdrop')}>
                    </label>
                    <div className={cx('outer_popup')}>
                        <div className={cx('popup')}>
                            <UpdateInfo/>
                        </div>
                    </div>
                </div>
                <div className={cx('account-info__form')}>
                    <h1 className={cx('account-page__title')}>Thông tin đăng nhập</h1>
                    <div className={cx('account-info__content')}>
                        <div className={cx('account-info__field')}>
                            <div className={cx('account-info__label')}>Email</div>
                            <div className={cx('account-info__value_lower')} style={{textDecoration: 'lowercase'}}>quangnhan1601np@gmail.com</div>
                        </div>
                        <div className={cx('account-info__field')}>
                            <div className={cx('account-info__label')}>Mật khẩu</div>
                            <div className={cx('account-info__value')}>******************</div>
                        </div>
                    </div>
                    <label for={cx('popup__editPass')}>
                        <div className={cx('account-info__btn')}>
                            <span className={cx('account-info__btn-text')}>Cập nhật</span>
                        </div>
                    </label>
                    <input type="checkbox" hidden id={cx('popup__editPass')} className={cx('popup__editInfo')}/>
                    <label for={cx('popup__editPass')} id={cx('backdrop_pass')}>
                    </label>
                    <div id={cx('outer_popup_pass')}>
                        <div className={cx('popup')}>
                            <ChangePass/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
 
export default Info;