import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import arrow_icon from '~/components/Assets/arrow.png';
import data_product from '~/components/Assets/data';
import exclusive_image from '~/components/Assets/exclusive_image.png';
import hand_icon from '~/components/Assets/hand_icon.png';
import hero_image from '~/components/Assets/hero_image.png';
import new_collections from '~/components/Assets/new_collections';
import styles from './Home.module.scss';
const cx=classNames.bind(styles);
const Item = (props) => {
    return(
        <div className='item'>
        <img src={props.image} />
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.old_price}
            </div>
        </div>
    </div>
    )
}

function Home() {
    return (
        <>
          <div className={cx('hero')}>
                <div className={cx('hero-left')}>
                    <h2>NEW ARRIVALS ONLY</h2>
                    <div>
                    <div className={cx('hero-hand-icon')}>
                        <p>new</p>
                        <img src={hand_icon} alt=''/>
                    </div>
                    <p>collection</p>
                    <p>for everyone</p>
                </div>
                <div className={cx('hero-latest-btn')}>
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt=''/>
                </div>
                </div>
                <div className={cx('hero-right')}>
                <img src={hero_image} alt=''/>
                </div>
            </div>
            <br/>
            <div className={cx('popular')}>
                <h1>POPULAR IN WOMEN</h1>
                <hr/>
                <div className={cx('popular-item')}>
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
                </div>
            </div>
            
         <div className={cx('offers')}>
            <div className={cx('offers-left')}>
            <h1>Exclusive</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
            </div>
            <div className={cx('offers-right')}>
                <img src={exclusive_image} alt=""/>
            </div>
          
        </div>
        <div className={cx('new_collections')}>
        <h1>NEW COLLECTIONS</h1>
            <hr/>
            <div className={cx('collections')}>
                {new_collections.map((item,i)=>{
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>       
                })}
            </div>
        </div>
        <div className={cx('newsletter')}>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder="Your email is"/>
                <button>Subcribe</button>
            </div>
        </div>
        </>
    )
}
export default Home;
