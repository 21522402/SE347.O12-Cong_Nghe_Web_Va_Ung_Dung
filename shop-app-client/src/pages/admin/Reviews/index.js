import React from 'react'
import classNames from "classnames/bind";
import styles from "./Reviews.module.scss";
import icons from "~/assets/icons";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function Reviews() {
  return (
    <div className={cx("container-reivews")}>
        <div className={cx("container-search")}>
        <input
          className={cx("search-input")}
          type="text"
          name="search"
          placeholder="Enter to search"
        />
        <button className={cx("search-button")} type="button">
          <img className={cx("search-icon")} src={icons.search} alt="search" />
        </button>
      </div>

      <div className={cx("container-list", 'row')}>

        <div className={cx("item-list")}>
            <div className={cx("item-product")}>
                <img className={cx("item-img")} src={images.item_product} alt="product"/>
                <p className={cx("item-name")}>Quần tây phong cách GenZ cực chất best seller</p>
            </div>
            <div className={cx("item-hover")}>
                <button className={cx("item-button", "display_button")} type="button">Xem chi tiết đánh giá</button>              
            </div>
        </div>

        <div className={cx("item-list")}>
            <div className={cx("item-product")}>
                <img className={cx("item-img")} src={images.item_product} alt="product"/>
                <p className={cx("item-name")}>Quần tây phong cách GenZ cực chất best seller</p>
            </div>
            <div className={cx("item-hover")}>
                <button className={cx("item-button", "display_button")} type="button">Xem chi tiết đánh giá</button>              
            </div>
        </div>

        <div className={cx("item-list")}>
            <div className={cx("item-product")}>
                <img className={cx("item-img")} src={images.item_product} alt="product"/>
                <p className={cx("item-name")}>Quần tây phong cách GenZ cực chất best seller</p>
            </div>
            <div className={cx("item-hover")}>
                <button className={cx("item-button", "display_button")} type="button">Xem chi tiết đánh giá</button>              
            </div>
        </div>

        <div className={cx("item-list")}>
            <div className={cx("item-product")}>
                <img className={cx("item-img")} src={images.item_product} alt="product"/>
                <p className={cx("item-name")}>Quần tây phong cách GenZ cực chất best seller</p>
            </div>
            <div className={cx("item-hover")}>
                <button className={cx("item-button", "display_button")} type="button">Xem chi tiết đánh giá</button>              
            </div>
        </div>

        <div className={cx("item-list")}>
            <div className={cx("item-product")}>
                <img className={cx("item-img")} src={images.item_product} alt="product"/>
                <p className={cx("item-name")}>Quần tây phong cách GenZ cực chất best seller</p>
            </div>
            <div className={cx("item-hover")}>
                <button className={cx("item-button", "display_button")} type="button">Xem chi tiết đánh giá</button>              
            </div>
        </div>

        <div className={cx("item-list")}>
            <div className={cx("item-product")}>
                <img className={cx("item-img")} src={images.item_product} alt="product"/>
                <p className={cx("item-name")}>Quần tây phong cách GenZ cực chất best seller</p>
            </div>
            <div className={cx("item-hover")}>
                <button className={cx("item-button", "display_button")} type="button">Xem chi tiết đánh giá</button>              
            </div>
        </div>

        <div className={cx("item-list")}>
            <div className={cx("item-product")}>
                <img className={cx("item-img")} src={images.item_product} alt="product"/>
                <p className={cx("item-name")}>Quần tây phong cách GenZ cực chất best seller</p>
            </div>
            <div className={cx("item-hover")}>
                <button className={cx("item-button", "display_button")} type="button">Xem chi tiết đánh giá</button>              
            </div>
        </div>

        <div className={cx("item-list")}>
            <div className={cx("item-product")}>
                <img className={cx("item-img")} src={images.item_product} alt="product"/>
                <p className={cx("item-name")}>Quần tây phong cách GenZ cực chất best seller</p>
            </div>
            <div className={cx("item-hover")}>
                <button className={cx("item-button", "display_button")} type="button">Xem chi tiết đánh giá</button>              
            </div>
        </div>

        <div className={cx("item-list")}>
            <div className={cx("item-product")}>
                <img className={cx("item-img")} src={images.item_product} alt="product"/>
                <p className={cx("item-name")}>Quần tây phong cách GenZ cực chất best seller</p>
            </div>
            <div className={cx("item-hover")}>
                <button className={cx("item-button", "display_button")} type="button">Xem chi tiết đánh giá</button>              
            </div>
        </div>

        <div className={cx("item-list")}>
            <div className={cx("item-product")}>
                <img className={cx("item-img")} src={images.item_product} alt="product"/>
                <p className={cx("item-name")}>Quần tây phong cách GenZ cực chất best seller</p>
            </div>
            <div className={cx("item-hover")}>
                <button className={cx("item-button", "display_button")} type="button">Xem chi tiết đánh giá</button>              
            </div>
        </div>

        <div className={cx("item-list")}>
            <div className={cx("item-product")}>
                <img className={cx("item-img")} src={images.item_product} alt="product"/>
                <p className={cx("item-name")}>Quần tây phong cách GenZ cực chất best seller</p>
            </div>
            <div className={cx("item-hover")}>
                <button className={cx("item-button", "display_button")} type="button">Xem chi tiết đánh giá</button>              
            </div>
        </div>

        <div className={cx("item-list")}>
            <div className={cx("item-product")}>
                <img className={cx("item-img")} src={images.item_product} alt="product"/>
                <p className={cx("item-name")}>Quần tây phong cách GenZ cực chất best seller</p>
            </div>
            <div className={cx("item-hover")}>
                <button className={cx("item-button", "display_button")} type="button">Xem chi tiết đánh giá</button>              
            </div>
        </div>

        

      </div>
    </div>
  )
}

export default Reviews