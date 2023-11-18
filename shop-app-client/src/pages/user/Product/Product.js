import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import { useContext } from "react";
import { useParams } from "react-router-dom";
import arrow_icon from '~/components/Assets/arrow.png';
import data_product from "~/components/Assets/data";
import star_dull_icon from "~/components/Assets/star_dull_icon.png";
import star_icon from "~/components/Assets/star_icon.png";
import { ShopContext } from "~/context/ShopContext";
import styles from './Product.scss';
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
};


const Product=()=>{

    const {addToCart}=useContext(ShopContext);
    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const product=all_product.find((e)=>e.id===Number(productId));
    return(
        <><div className={cx('breadcrum')}>
            HOME <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" /> {product.category}
            <img src={arrow_icon} alt="" />{product.name}
        </div><div className={cx('productdisplay')}>
                <div className={cx('productdisplay-left')}>
                    <div className={cx('productdisplay-img-list')}>
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>
                    <div className={cx('productdisplay-img')}>
                        <img className={cx('productdisplay-main-img')} src={product.image} alt="" />
                    </div>
                </div>
                <div className={cx('productdisplay-right')}>
                    <h1>{product.name}</h1>
                    <div className={cx('productdisplay-right-stars')}>
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                        <p>(122)</p>
                    </div>
                    <div className={cx('productdisplay-right-prices')}>
                        <div className={cx('productdisplay-right-price-old')}>
                            ${product.old_price}
                        </div>
                        <div className={cx('productdisplay-right-price-new')}>
                            ${product.new_price}
                        </div>
                    </div>
                    <div className={cx('productdisplay-right-description')}>
                        A lightweight, usually knitted, pullover shirt, close-fitting, worn as an undershirt
                    </div>
                    <div className={cx('productdisplay-right-size')}>
                        <h1>Select Size</h1>
                        <div className={cx('productdisplay-right-sizes')}>
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button onClick={() => { addToCart(product.id); } }>Add To Cart</button>
                    <p className={cx('productdisplay-right-category')}>
                        <span>Category: </span>Women, T-shirt, Crop Top</p>
                    <p className={cx('productdisplay-right-category')}>
                        <span>Category: </span>Women, T-shirt, Crop Top</p>
                </div>
            </div><div className={cx('descriptionbox')}>
                <div className={cx('descriptionbox-navigator')}>
                    <div className={cx('descriptionbox-nav-box')}>Description</div>
                    <div className={cx('descriptionbox-nav-box fade')}>Review (122)</div>
                </div>
                <div className={cx('descriptionbox-description')}>
                    <p>Coolmate</p>
                </div>
            </div><div className={cx('relatedproducts')}>
                <h1>Related Products</h1>
                <hr />
                <div className={cx('relatedproducts-item')}>
                    {data_product.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
                    })}
                </div>
            </div></>
    )
}
export default Product;