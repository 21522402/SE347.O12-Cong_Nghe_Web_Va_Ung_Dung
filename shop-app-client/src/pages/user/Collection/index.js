import classNames from "classnames/bind";
import styles from './Collection.module.scss'

const cx = classNames.bind(styles)
function Collection() {
    return (
        <div className={cx('wrapper')}>
            collection
            <div className={cx('left-side')}>

            </div>
            <div className={cx('right-side')}>

            </div>

        </div>
    );
}

export default Collection;