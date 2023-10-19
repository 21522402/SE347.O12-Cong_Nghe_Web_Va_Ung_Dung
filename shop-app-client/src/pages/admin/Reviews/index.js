import React from 'react'
import classNames from "classnames/bind";
import styles from "./Reviews.module.scss";
import icons from "~/assets/icons";
import images from "~/assets/images";
import ProductReviewItem from '~/components/ProductReviewItem'

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

        <ProductReviewItem img={images.item_product} name="Quần tây phong cách GenZ cực chất best seller"/>
        <ProductReviewItem img={images.item_product} name="Quần tây phong cách GenZ cực chất best seller"/>
        <ProductReviewItem img={images.item_product} name="Quần tây phong cách GenZ cực chất best seller"/>
        <ProductReviewItem img={images.item_product} name="Quần tây phong cách GenZ cực chất best seller"/>
        <ProductReviewItem img={images.item_product} name="Quần tây phong cách GenZ cực chất best seller"/>
        <ProductReviewItem img={images.item_product} name="Quần tây phong cách GenZ cực chất best seller"/>
        <ProductReviewItem img={images.item_product} name="Quần tây phong cách GenZ cực chất best seller"/>
        <ProductReviewItem img={images.item_product} name="Quần tây phong cách GenZ cực chất best seller"/>
        <ProductReviewItem img={images.item_product} name="Quần tây phong cách GenZ cực chất best seller"/>
        <ProductReviewItem img={images.item_product} name="Quần tây phong cách GenZ cực chất best seller"/>

      </div>
    </div>
  )
}

export default Reviews