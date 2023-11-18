import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from "classnames";
import { useContext } from "react";
import remove_icon from '~/components/Assets/cart_cross_icon.png';
import { ShopContext } from "~/context/ShopContext";
import styles from './CartItems.scss';
const cx=classNames.bind(styles);
const   CartItems=()=>{
    const {getTotalCartAmount,all_product, cartItems,removeFromCart}=useContext(ShopContext)
    return(
        <div className={cx('cartitems')}>
            <div className={cx('cartitems-format-main')}>
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((e)=>{
                if (cartItems[e.id]>0) {
                    return <div>
                    <div className={cx('cartitems-format cartitems-format-main')}>
                        <img src={e.image} alt="" className={cx('carticon-product-icon')}/>  
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className={cx('cartitems-quantity')}>{cartItems[e.id]}</button>
                        <p>${e.new_price*cartItems[e.id]}</p>
                        <img className={cx('cartitems-remove-icon')} src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=""/>
                    </div>
                    <hr/>
                    
                </div>
                }
                return null;
            })}
            <div className={cx('cartitems-down')}>
                <div className={cx('cartitems-total')}>
                    <h1>Cart Totals</h1>
                    <div className={cx('cartitems-down')}>
                        <div className={cx('cartitems-total')}>
                        <div>
                            <div className={cx('cartitems-total-item')}>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className={cx('cartitems-total-item')}>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className={cx('cartitems-total-items')}>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className={cx('cartitems-promocode')}>
                        <p>If you have a promocode, Enter it here</p>
                        <div className={cx('artitems-promobox')}>
                            <input type="text" placeholder='promo code'/>
                            <button>Apply Code</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartItems