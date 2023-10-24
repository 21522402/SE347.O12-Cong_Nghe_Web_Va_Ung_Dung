import classNames from "classnames/bind";
import styles from './DropDownImport.module.scss'

const cx = classNames.bind(styles)

function DropDownImport({items, style, onClick}) {
    const handleClickItem = (item) => {
        onClick(item)
    }
    return (

        <ul className={cx('wrapper')} style={style}>
            {items.map((item,index) => 
                <li key={index} onClick={() => handleClickItem(item)}>
                    <div className={cx('productImage')}>
                        <img src={item.productImage}/>
                    </div>
                    <div className={cx('productInfo')}>
                        <h2>{item.productName}</h2>
                        <div>
                            <span>{item.productId}</span>
                            <span style={{marginLeft: '30px'}}>Giá: {item.exportPrice}</span>
                        </div>
                        <span>Tồn: {item.quantity}</span>
                    </div>
                </li>
            )}
        </ul>
    );
}

export default DropDownImport;