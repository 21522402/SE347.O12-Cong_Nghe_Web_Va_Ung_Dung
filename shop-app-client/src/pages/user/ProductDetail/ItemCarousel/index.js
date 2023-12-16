import classNames from "classnames/bind";
import styles from './ItemCarousel.module.scss'
const cx = classNames.bind(styles)
function ItemCarousel() {
    return (
        <div className={cx('wrapper')} style={{userSelect: 'none', overflow: 'hidden'}}>
            <a href="/" target="_blank">
                <img className={cx('img')} src="https://media.coolmate.me/cdn-cgi/image/width=450,height=663,quality=80,format=auto/uploads/October2023/ST002.4.jpg" />
            </a>
            <p style={{fontSize: '14px', marginTop: '12px', fontWeight: '500'}}>Áo nỉ chui đầu Lifewear</p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '8px', alignItems: 'center' }}>
                <span style={{ fontWeight: '600', fontFamily: 'Pangea,sans-serif', fontSize: '14px', }}>469.000đ</span>
                <span style={{ fontWeight: '500', fontFamily: 'Pangea,sans-serif', color: '#c4c4c4', textDecoration: 'line-through', fontSize: '14px', }}>499.000đ</span>
                <span style={{ fontWeight: '500', fontFamily: 'Pangea,sans-serif', color: '#ff3102', fontSize: '14px', }}>-6%</span>
            </div>
        </div>
    );
}

export default ItemCarousel;