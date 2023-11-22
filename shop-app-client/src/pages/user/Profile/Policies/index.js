import styles from './Policies.module.scss'
import classNames from 'classnames/bind';
import PolicyItem from './PolicyItem';
const cx = classNames.bind(styles);

function Policies() {
    const policies = 
    [
        {id: 1, question: "Đăng ký làm Hội viên CoolClub có mất phí không? Cách đăng ký như thế nào?", answer: "Bạn có thể đăng ký CoolClub hoàn toàn miễn phí bằng cách tạo Tài khoản tại website Coolmate.me. Khi đăng ký thành công, bạn đã được nhận các quyền lợi của hạng Thành viên mới, đồng thời nhận ngay voucher mua sắm 15% (tối đa 50.000 VND) để bắt đầu mua sắm."}, 
        {id: 2, question: "Đăng ký làm Hội viên CoolClub có mất phí không? Cách đăng ký như thế nào?", answer: "Bạn có thể đăng ký CoolClub hoàn toàn miễn phí bằng cách tạo Tài khoản tại website Coolmate.me. Khi đăng ký thành công, bạn đã được nhận các quyền lợi của hạng Thành viên mới, đồng thời nhận ngay voucher mua sắm 15% (tối đa 50.000 VND) để bắt đầu mua sắm."}, 
        {id: 3, question: "Đăng ký làm Hội viên CoolClub có mất phí không? Cách đăng ký như thế nào?", answer: "Bạn có thể đăng ký CoolClub hoàn toàn miễn phí bằng cách tạo Tài khoản tại website Coolmate.me. Khi đăng ký thành công, bạn đã được nhận các quyền lợi của hạng Thành viên mới, đồng thời nhận ngay voucher mua sắm 15% (tối đa 50.000 VND) để bắt đầu mua sắm."}, 
        {id: 4, question: "Đăng ký làm Hội viên CoolClub có mất phí không? Cách đăng ký như thế nào?", answer: "Bạn có thể đăng ký CoolClub hoàn toàn miễn phí bằng cách tạo Tài khoản tại website Coolmate.me. Khi đăng ký thành công, bạn đã được nhận các quyền lợi của hạng Thành viên mới, đồng thời nhận ngay voucher mua sắm 15% (tối đa 50.000 VND) để bắt đầu mua sắm."}, 
        {id: 5, question: "Đăng ký làm Hội viên CoolClub có mất phí không? Cách đăng ký như thế nào?", answer: "Bạn có thể đăng ký CoolClub hoàn toàn miễn phí bằng cách tạo Tài khoản tại website Coolmate.me. Khi đăng ký thành công, bạn đã được nhận các quyền lợi của hạng Thành viên mới, đồng thời nhận ngay voucher mua sắm 15% (tối đa 50.000 VND) để bắt đầu mua sắm."}, 

    ]
    return ( 
        <>
            <div className={cx('container')}>
                <h1 className={cx('account-page__title')}>FAQ - Câu hỏi thường gặp</h1>
                <div>
                    {
                        policies.map((item, index) => {
                            return <>
                                <PolicyItem key={index} props={item}/>
                            </>
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Policies;