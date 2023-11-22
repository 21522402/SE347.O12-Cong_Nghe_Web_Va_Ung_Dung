import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { VoucherIcon, LocationIcon, AccountIcon, OrderIcon, RatingIcon, QuestionIcon, LogOutIcon } from '~/assets/icons';
import {BsArrowRight} from 'react-icons/bs'
const cx = classNames.bind(styles);

function Profile() {
    return ( 
        <>
            <div className={cx('container')}>
                <div className={cx('main__page')}> 
                    
                </div>
            </div>
        </>
    );
}

export default Profile;