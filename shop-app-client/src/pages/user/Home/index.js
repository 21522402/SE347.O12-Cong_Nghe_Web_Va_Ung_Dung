// Home.jsx
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ItemProduct from "~/components/ItemProduct/ItemProduct";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Home() {
  const linkImagesSlider = [
    "https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/November2023/141920x788.jpg",
    "https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/November2023/kkGraphic_Special_(1).png",
    "https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/November2023/cc1920x788-ver-3_68.jpg",
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      {/* Slider */}
      <div>
        <Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
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
      <div style={{paddingTop: '30px'}}>
        <span className={cx('title-slider')}>SẢN PHẨM NỔI BẬT</span>
        <Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
          autoPlay
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={3000}
          transitionDuration={500}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {[1, 2, 3, 4].map(() => {
              return (
                <div style={{ width: "300px", margin: "20px 10px" }}>
                  <ItemProduct />
                </div>
              );
            })}
          </div>
        </Carousel>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        <img
          style={{ width: "96%", borderRadius: '4px' }}
          src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/mceclip0_74.png"
          alt="img"
        />
      </div>

      <div>
      <span className={cx('title-slider')}>SẢN PHẨM COOLEXTRA</span>
        <Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
          autoPlay
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={3000}
          transitionDuration={500}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {[1, 2, 3, 4].map(() => {
              return (
                <div style={{ width: "300px", margin: "20px 10px" }}>
                  <ItemProduct />
                </div>
              );
            })}
          </div>
        </Carousel>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        <img
          style={{ width: "96%", borderRadius: '4px' }}
          src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/mceclip0_87.png"
          alt="img"
        />
      </div>

      <div>
      <span className={cx('title-slider')}>SẢN PHẨM THU ĐÔNG</span>
        <Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
          autoPlay
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={3000}
          transitionDuration={500}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderTop: "1px solid #ccc",
            }}
          >
            {[1, 2, 3, 4].map(() => {
              return (
                <div style={{width: "300px", margin: "20px 10px"}}>
                  <ItemProduct />
                </div>
              );
            })}
          </div>
        </Carousel>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        <img
          style={{ width: "96%", borderRadius: '4px' }}
          src="https://mcdn.coolmate.me/image/September2023/mceclip4_64.jpg"
          alt="img"
        />
      </div>

      <div>
      <span className={cx('title-slider')}>SẢN PHẨM THỂ THAO</span>
        <Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
          autoPlay
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={3000}
          transitionDuration={500}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {[1, 2, 3, 4].map(() => {
              return (
                <div style={{width: "300px", margin: "20px 10px"}}>
                  <ItemProduct />
                </div>
              );
            })}
          </div>
        </Carousel>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        <img
          style={{ width: "100%" }}
          src="https://mcdn.coolmate.me/image/March2023/mceclip0_137.jpg"
          alt="img"
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          margin: "10px 30px",
        }}
      >
        <div className={cx("container-item")}>
          <img
            className={cx("itemIMG")}
            src="https://media.coolmate.me/cdn-cgi/image/width=1069,height=1575,quality=80,format=auto/uploads/October2023/mceclip1_36.png"
            alt="all"
          />
          <div className={cx("btn-item")}>
            <a href="./user/all-products">Xem chi tiết</a>
          </div>
        </div>

        <div className={cx("container-item")}>
          <img
            className={cx("itemIMG")}
            src="https://media.coolmate.me/cdn-cgi/image/width=1069,height=1575,quality=80,format=auto/uploads/October2023/mceclip4_7.png"
            alt="all"
          />{" "}
          <div className={cx("btn-item")}>
            <a href="./user/product-underwears">Xem chi tiết</a>
          </div>
        </div>

        <div className={cx("container-item")}>
          <img
            className={cx("itemIMG")}
            src="https://media.coolmate.me/cdn-cgi/image/width=1069,height=1575,quality=80,format=auto/uploads/October2023/mceclip3_86.png"
            alt="all"
          />
          <div className={cx("btn-item")}>
            <a href="./user/product-clothes">Xem chi tiết</a>
          </div>
        </div>

        <div className={cx("container-item")}>
          <img
            className={cx("itemIMG")}
            src="https://media.coolmate.me/cdn-cgi/image/width=1069,height=1575,quality=80,format=auto/uploads/October2023/mceclip0_40.png"
            alt="all"
          />{" "}
          <div className={cx("btn-item")}>
            <a href="./user/product-sports">Xem chi tiết</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
