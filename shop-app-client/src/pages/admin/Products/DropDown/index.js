import classNames from "classnames/bind";
import styles from './DropDown.module.scss'

const cx = classNames.bind(styles)

function DropDown({items, style, onClick}) {
    const handleClickItem = (item) => {
        onClick(item)
    }
    return (

        <ul className={cx('wrapper')} style={style}>
            {items.map((item,index) => 
                <li key={index} onClick={() => handleClickItem(item)}>
                    <span>{item}</span>
                </li>
            )}
        </ul>
    );
}

export default DropDown;