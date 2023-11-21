import React from "react";
import ItemProduct from "~/components/ItemProduct/ItemProduct";
import styles from "./PageProductUnderWear.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function PageProductUnderWear() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "20px 0",
          position: "sticky",
          top: "0",
          position: "-webkit-sticky",
        }}
      >
        <span
          style={{ marginRight: "10px", fontSize: "24px", fontWeight: "bold" }}
        >
          LOẠI QUẦN LÓT NAM
        </span>
        <select
          style={{
            outline: "none",
            padding: "10px 12px",
            width: "220px",
            marginLeft: "10px",
            borderRadius: "30px",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          <option selected value="all">
            Tất cả
          </option>
          <option value="type 1">Trunk</option>
          <option value="type 1">Brief Boxer</option>
          <option value="type 1">Tam Giác</option>
        </select>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
          () => {
            return (
              <div style={{ width: "270px" }}>
                <ItemProduct />
              </div>
            );
          }
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "40px 40px 0",
        }}
      >
        <img
          style={{ width: "100%" }}
          src="https://mcdn.coolmate.me/image/October2023/mceclip0_63.jpg"
          alt="img"
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          margin: "50px 30px",
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
            src="https://media.coolmate.me/cdn-cgi/image/width=1069,height=1575,quality=80,format=auto/uploads/October2023/mceclip3_86.png"
            alt="all"
          />
          <div className={cx("btn-item")}>
            <a href="/user/product-clothes">Xem chi tiết</a>
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

export default PageProductUnderWear;
