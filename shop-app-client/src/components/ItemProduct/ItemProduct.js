import classNames from "classnames/bind";
import { useState } from "react";
import ReactStars from "react-stars";
import image from "../Assets/p1_product.png";
import image2 from "../Assets/p1_product_i1.png";
import image3 from "../Assets/p1_product_i2.png";
import styles from "./ItemProduct.module.scss";

const cx = classNames.bind(styles);

function ItemProduct() {

    const list = {
        colors: [
            {
                img: image,
                img_color: image,
            },
            {
                img: image2,
                img_color: image2,
            },
            {
                img: image3,
                img_color: image3,
            },
        ],
    }

    const [color, setColor] = useState(list.colors[0].img);
    const [indexItem, setIndexItem] = useState(0);
    const handleClick = (itemImage, index) => {
        setColor(itemImage);
        setIndexItem(index)
    }
  return (
    <div className={cx("container-item")}>
        <img
          style={{ width: "350px", height: "450px", borderRadius: "4px" }}
          src={color}
          alt="abc"
        />
        <div style={{ display: "flex", alignItems: "center", marginLeft: '15px'}}>
          {list.colors.map((item, index) => {
            return (
              <div
              key={index}
                style={{
                  width: "60px",
                  height: "32px",
                  borderRadius: "10px",
                  margin: "10px 5px",
                  textAlign: 'center',
                  display: "flex", alignItems: "center", justifyContent: 'center',
                  border: index === indexItem ? '2px solid #000' : "1px solid #ccc",
                }}
                onClick={() => handleClick(item.img, index)}
                
              >
                <img style={{
                  width: "58px",
                  height: "28px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                }} src={item.img_color} alt="img"/>
              </div>
            );
          })}
        </div>

        <span
          style={{ fontSize: "20px", fontWeight: "500", margin: "15px 20px" }}
        >
          Ao thun tay ngan
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontSize: "22px",
            margin: "8px 20px 0px",
          }}
        >
          <span style={{ color: "#000", fontWeight: "bold" }}>250.000 đ</span>
          <span
            style={{
              marginLeft: "20px",
              color: "#ccc",
              textDecorationLine: "line-through",
            }}
          >
            350.000 đ
          </span>
          <span style={{ marginLeft: "20px", color: "red", fontWeight: "500" }}>
            10 %
          </span>
        </div>

        <div style={{display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
          <span style={{margin: '4px 5px 0', fontSize: '16px', padding: '6px 0', color: '#ccc', fontStyle: 'italic'}}>(4.5)</span>
          <ReactStars
            count={5}
            size={24}
            color1={"#ccc"}
            color2={"#ffd700"}
            edit={false}
            value={4.5}
            style={{marginTop: '-6px'}}
          />
        </div>
      </div>
  );
}

export default ItemProduct;
