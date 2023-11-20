// Home.jsx
import classNames from "classnames/bind";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ItemProduct from "~/components/ItemProduct/ItemProduct";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  const linkImagesSlider = [
    "https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/November2023/141920x788.jpg",
    "https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/November2023/kkGraphic_Special_(1).png",
    "https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/November2023/cc1920x788-ver-3_68.jpg",
  ];
  const linkImagesSlider2 = [
    "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/mceclip0_74.png",
    "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/mceclip0_87.png",
    "https://mcdn.coolmate.me/image/September2023/mceclip4_64.jpg",
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
      {/* Filtter */}
      <div></div>
      {/* List product */}
      <div
        style={{
          display: "grid",
          gap: "30px",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          padding: "20px",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
          return (
            <div style={{ width: "350px" }}>
              <ItemProduct />
            </div>
          );
        })}
      </div>

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
          {linkImagesSlider2.map((item, index) => {
            return (
              <div>
                <img style={{width: '100%'}} key={index} src={item} alt="img" />
              </div>
            )
          })}
        </Carousel>
      </div>
      <div style={{textAlign: 'center', margin: '20px 0'}}>
        <img 
          style={{width: '100%'}}
          src="https://mcdn.coolmate.me/image/March2023/mceclip0_137.jpg"
          alt="img"
        />
      </div>

      {/* Anh quang cao */}
    </div>
  );
}

export default Home;
