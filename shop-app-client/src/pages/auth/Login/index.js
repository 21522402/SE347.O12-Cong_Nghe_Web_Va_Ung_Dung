import { CustomeButton } from '~/components';
import styles from './login.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)
function Login() {
    return (
        <div className={cx('wrapper')} style={{animation:'dropTop .3s linear'}}>
            <div className={cx('col')}>
                <img src='https://mcdn.coolmate.me/image/September2023/mceclip0_49.jpg' alt='img'/>
            </div>
            <div className={cx('col')}> 
                <div style={{padding:'2rem 1.5rem 2.5rem 2.5rem'}}>
                    <h1 style={{fontWeight:900, fontSize:'30px', marginBottom:'20px'}}>Đăng nhập</h1>
                    <p style={{fontSize:'14px', paddingRight:'30px', marginBottom:'20px'}}>Đăng nhập để không bỏ lỡ quyền lợi tích luỹ và hoàn tiền cho bất kỳ đơn hàng nào.</p>
                    <h3 style={{fontWeight:'700', fontSize:'17px'}}>Đăng nhập hoặc đăng ký (miễn phí)</h3>
                    <div style={{display:'flex', margin:'12px 0 20px 0'}}>
                        <CustomeButton containStyles={{backgroundColor:'white', color:'white', border:'1px solid #ccc',marginRight:'8px', padding:'8px', height:'50px', width:'50px'}}>
                            <img src='https://mcdn.coolmate.me/image/September2023/mceclip1_21.png'  alt='img'/>
                        </CustomeButton>
                        <CustomeButton containStyles={{backgroundColor:'white', color:'white', border:'1px solid #ccc', padding:'8px', height:'50px', width:'50px'}}>
                            <img src='https://mcdn.coolmate.me/image/September2023/mceclip0_86.png'  alt='img' width={'20px'}/>
                        </CustomeButton>
                    </div>
                    <div style={{display:'flex', width:'100%', alignItems:'center'}}>
                        <div style={{width:'20%', height:'0.5px' , backgroundColor:'#ccc'}}></div>
                        <div style={{margin:'0 4px'}}>Hoặc</div>
                        <div style={{width:'70%', height:'0.5px' , backgroundColor:'#ccc'}}></div>
                    </div>
                    <form style={{width:'100%', marginTop:'16px'}}>
                        <input placeholder='Email/SĐT của bạn' type='text' name='username' autoFocus='autoFocus' style={{border:'1px solid #ccc',height:'48px', borderRadius:'100vmax', width:'100%',boxSizing:'border-box', padding:'5px 20px',transition: 'all .2s', marginBottom:'16px'}}/>
                        <input placeholder='Mật khẩu'  type='password' name='password' autoFocus='autoFocus' style={{border:'1px solid #ccc',height:'48px', borderRadius:'100vmax', width:'100%',boxSizing:'border-box', padding:'5px 20px',transition: 'all .2s', marginBottom:'16px'}}/>
                        <CustomeButton title={' Đăng nhập '} type={'submit'} containStyles={{backgroundColor:'black', color:'white', width:'100%', height:'48px', borderRadius:'100vmax'}} bgHover={'#ccc'}/>
                    </form>
                    <div style={{display:'flex', justifyContent:'space-between',marginTop:'4px' }}>
                        <CustomeButton title={'Đăng ký tài khoản mới'} containStyles={{backgroundColor:'white', color:'#2f5acf', width:'fit-content', fontSize:'14px'}}/>
                        <CustomeButton title={'Quên mật khẩu'} containStyles={{backgroundColor:'white', color:'#2f5acf', width:'fit-content', fontSize:'14px'}}/>
                    </div>
                    <div style={{fontSize:'13px', borderLeft:'2px solid #ccc', paddingLeft:'20px', marginTop:'12px', lineHeight:'16px' }}>Nếu đã từng mua hàng trên Website trước đây, bạn có thể dùng tính năng <CustomeButton title={'"Lấy mật khẩu"'} containStyles={{backgroundColor:'white', color:'#2f5acf', width:'fit-content', fontSize:'13px', textDecoration:'underline', height:'12px', padding:0}}/> để có thể truy cập vào Coolmate.</div>
                </div>
            </div>
        </div>
    );
}

export default Login;