import classNames from "classnames/bind";
import styles from './ItemReview.module.scss'

const cx = classNames.bind(styles)
function ItemReview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('reviews-listing-item')}>
                <div className={cx('reviews-listing-content')}>
                    <div className={cx('reviews-rating')}>
                        <img className={cx('star')} src="https://www.coolmate.me/images/star.svg?2a5188496861d26e5547c524320ec875" />
                        <img className={cx('star')} src="https://www.coolmate.me/images/star.svg?2a5188496861d26e5547c524320ec875" />
                        <img className={cx('star')} src="https://www.coolmate.me/images/star.svg?2a5188496861d26e5547c524320ec875" />
                        <img className={cx('star')} src="https://www.coolmate.me/images/star.svg?2a5188496861d26e5547c524320ec875" />
                        <img className={cx('star')} src="https://www.coolmate.me/images/star.svg?2a5188496861d26e5547c524320ec875" />
                    </div>
                    <div className={cx('reviews-author')}>
                        <div className={cx('reviews-author-name')}>
                            Phùng Tuấn Thanh
                        </div>
                        <div className={cx('reviews-author-description')}>
                            Đen / L
                        </div>
                    </div>
                    <div className={cx('reviews-listing-description')}>
                        <p>
                            Kích cỡ áo chuẩn, chất liệu đúng như mô tả. Mặc rất thoải mái , 9Đ
                        </p>
                        <div className={cx('reviews-listing-gallery')}>
                            <a className={cx('reviews-listing-image')} >
                                <img src="https://media.coolmate.me/cdn-cgi/image/width=80,height=80,quality=80,format=auto/uploads/reviews/October2023/1698027171697.jpeg" />
                            </a>
                            <a className={cx('reviews-listing-image')} >
                                <img src="https://media.coolmate.me/cdn-cgi/image/width=80,height=80,quality=80,format=auto/uploads/reviews/October2023/1698027171697.jpeg" />
                            </a>
                        </div>
                        {
                            true &&
                            <p className={cx('reviews-listing-feedback')}>
                                Coolmate xin lỗi anh vì sản phẩm chưa được hài lòng anh, Coolmate luôn mong nhận những góp ý thẳng thắn từ anh để có thể cải thiện nhiều hơn trong thời gian sớm nhất, nên 23/10 CSKH có liên hệ để hỗ trợ đổi qua sản phẩm Áo Polo Pique CAFE anh ưng ý hơn. Mong anh có trải nghiệm tuyệt vời hơn. Cảm ơn anh đã để lại ý kiến để team sản phẩm Cool tiếp nhận cải thiện và hỗ trợ mình ạ.
                            </p>
                        }
                        <span className={cx('reviews-listing-date')}>
                            06.11.2023
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemReview;