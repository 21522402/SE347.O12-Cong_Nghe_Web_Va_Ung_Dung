// Home.jsx
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ItemCollection from "../Collection/ItemCollection";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import images from '~/assets/img'

const cx = classNames.bind(styles);

function Home() {
  const linkImagesSlider = [
    "https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/November2023/141920x788.jpg",
    "https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/November2023/kkGraphic_Special_(1).png",
    "https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/November2023/cc1920x788-ver-3_68.jpg",
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
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      {/* Slider */}
      <div>
        <Carousel
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
      <div style={{paddingTop: '30px', margin: '0 80px'}}>
        <span className={cx('title-slider')}>SẢN PHẨM NỔI BẬT</span>
        <Carousel 
        itemClass={cx('carousel-item')}
          swipeable={true}
          draggable={false}
          responsive={responsive}
          ssr={true}>
          {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2].map(() => {
              return (
                <div style={{ width: "100%"}} >
                  <ItemCollection />
                </div>
              );
            })}
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
          style={{ width: "96%", borderRadius: '4px', marginTop: '20px'}}
          src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/mceclip0_74.png"
          alt="img"
        />
      </div>

      <div style={{paddingTop: '30px', margin: '0 80px'}}>
        <span className={cx('title-slider')}>SẢN PHẨM COOLEXTRA</span>
        <Carousel 
        itemClass={cx('carousel-item')}
          swipeable={true}
          draggable={false}
          responsive={responsive}
          ssr={true}>
          {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2].map(() => {
              return (
                <div style={{ width: "100%"}} >
                  <ItemCollection />
                </div>
              );
            })}
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
          style={{ width: "96%", borderRadius: '4px', marginTop: '20px'}}
          src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/mceclip0_87.png"
          alt="img"
        />
      </div>

      <div style={{paddingTop: '30px', margin: '0 80px'}}>
        <span className={cx('title-slider')}>SẢN PHẨM THU ĐÔNG</span>
        <Carousel 
        itemClass={cx('carousel-item')}
          swipeable={true}
          draggable={false}
          responsive={responsive}
          ssr={true}>
          {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2].map(() => {
              return (
                <div style={{ width: "100%"}} >
                  <ItemCollection />
                </div>
              );
            })}
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
          style={{ width: "96%", borderRadius: '4px', marginTop: '20px'}}
          src="https://mcdn.coolmate.me/image/September2023/mceclip4_64.jpg"
          alt="img"
        />
      </div>

      <div style={{paddingTop: '30px', margin: '0 80px'}}>
        <span className={cx('title-slider')}>SẢN PHẨM THỂ THAO</span>
        <Carousel 
        itemClass={cx('carousel-item')}
          swipeable={true}
          draggable={false}
          responsive={responsive}
          ssr={true}>
          {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2].map(() => {
              return (
                <div style={{ width: "100%"}} >
                  <ItemCollection />
                </div>
              );
            })}
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
          src="https://mcdn.coolmate.me/image/March2023/mceclip0_137.jpg"
          alt="img"
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          margin: "10px 20px",
        }}
      >
        <div className={cx("container-item")}>
          <img
            className={cx("itemIMG")}
            src={images.TatCaSP}
            alt="all"
          />
          <div className={cx("btn-item")}>
            <a href="./collection/1">Xem chi tiết</a>
          </div>
        </div>

        <div className={cx("container-item")}>
          <img
            className={cx("itemIMG")}
            src={images.Ao}
            alt="ao"
          />{" "}
          <div className={cx("btn-item")}>
            <a href="./collection/1">Xem chi tiết</a>
          </div>
        </div>

        <div className={cx("container-item")}>
          <img
            className={cx("itemIMG")}
            src={images.Quan}
            alt="quan"
          />
          <div className={cx("btn-item")}>
            <a href="./collection/1">Xem chi tiết</a>
          </div>
        </div>

        <div className={cx("container-item")}>
          <img
            className={cx("itemIMG")}
            src={images.DoLot}
            alt="dolot"
          />
          <div className={cx("btn-item")}>
            <a href="./collection/1">Xem chi tiết</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
