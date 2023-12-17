// Home.jsx
import axios from 'axios';
import classNames from "classnames/bind";
import { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import images from '~/assets/img';
import {
  filterListProductsState,
  setListProducts,
  setListProductsState
} from "~/redux/slices/productSlice";
import baseUrl from '~/utils/baseUrl';
import ItemCollection from "../Collection/ItemCollection";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/img";
import { FaCircleArrowRight } from "react-icons/fa6";

const cx = classNames.bind(styles);

function Home() {
  const linkImagesSlider = [
    "https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/November2023/141920x788.jpg",
    "https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/November2023/kkGraphic_Special_(1).png",
    "https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/November2023/cc1920x788-ver-3_68.jpg",
  ];

  const listProducts =  useSelector(state => state.product.listProducts)
  const navigate=useNavigate();

  const banners = [
    "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/mceclip0_74.png",
    "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/mceclip0_87.png",
    "https://mcdn.coolmate.me/image/September2023/mceclip4_64.jpg",
    "https://mcdn.coolmate.me/image/March2023/mceclip0_137.jpg",
  ];

  const navPages = [
    {
      url: images.TatCaSP,
      route: "./collection/1",
    },
    {
      url: images.Ao,
      route: "./collection/1",
    },
    {
      url: images.Quan,
      route: "./collection/1",
    },
    {
      url: images.DoLot,
      route: "./collection/1",
    },
  ];

  const contents = [
    {
      titleSlider: "SẢN PHẨM NỔI BẬT",
      listProduct: ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6"],
      urlBanner: banners[0],
    },
    {
      titleSlider: "SẢN PHẨM COOLEXTRA",
      listProduct: ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6"],
      urlBanner: banners[1],
    },
    {
      titleSlider: "SẢN PHẨM THU ĐÔNG",
      listProduct: ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6"],
      urlBanner: banners[2],
    },
    {
      titleSlider: "SẢN PHẨM THỂ THAO",
      listProduct: ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6"],
      urlBanner: banners[3],
    },
  ];

  const responsiveBanner = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  //DUyY
  const dispatch = useDispatch();
  const [filter,setFilter] = useState({
        productType: '',
        productCategory: '',
        status: '',
        searchText: ''
    
    }) 
  const getAllProducts = async () => {
    try {
        const res = await axios.get(`${baseUrl}/api/products/getAllProducts`)
        if (res && res.data) {
            dispatch(setListProducts(res.data.data))
            dispatch(setListProductsState(res.data.data))
            dispatch(filterListProductsState({filter}));
        } 
    } catch (error) {
        console.log(error.message)
    }
}
useEffect(() => {
  getAllProducts()
},[])
  return (
    <div>
      {/* Slider */}
      
      <button onClick={() => console.log(listProducts)}>
  Click
</button>

      <div>
        <Carousel
          itemClass={cx("carousel-item")}
          swipeable={true}
          draggable={false}
          responsive={responsiveBanner}
          autoPlay
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={3000}
          transitionDuration={500}
        >
          {linkImagesSlider.map((item, index) => {
            return <img key={index} src={item} alt="img" />;
          })}
        </Carousel>
      </div>
      {/* List product */}
      {contents.map((item) => {
        return (
          <>
            <div className={cx("container-slider")}>
              <span className={cx("title-slider")}>{item.titleSlider}</span>
              <Carousel
                itemClass={cx("carousel-item")}
                swipeable={true}
                draggable={false}
                responsive={responsive}
                ssr={true}
              >
                {listProducts.map((item, index) => {
                  return (
                    <div key={index} className={cx("width-item")}>
                      <ItemCollection product={item}/>
                    </div>
                  );
                })}
              </Carousel>
            </div>

            <div className={cx("container-banner")}>
              <img src={item.urlBanner} alt="img" />
            </div>
          </>
        );
      })}

      <div className={cx("container-pages")}>
        {navPages.map((item) => {
          return (
            <div className={cx("container-item")}>
              <img className={cx("itemIMG")} src={item.url} alt="all" />
              <div className={cx("btn-item")}>
                <a href={item.route}>
                  <FaCircleArrowRight />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;