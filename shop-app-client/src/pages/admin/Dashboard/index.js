import React from "react";
import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
import ReactStars from "react-stars";
import Chart from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
import { item_product } from "~/assets/images";
import ItemDashboard from "./ItemDashboard";

const cx = classNames.bind(styles);

function Dashboard() {
  const data_Thu_Chi = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Tổng thu",
        backgroundColor: "#2EDAC3",
        borderColor: "#2EDAC3",
        borderWidth: 1,
        hoverBorderColor: "#0ab39c",
        hoverBackgroundColor: "#0ab39c",
        data: [
          4560000, 5980000, 8050000, 8180000, 5600000, 5590000, 4078000,
          6347000, 8180000, 5600000, 5590000, 4078000,
        ],
      },

      {
        label: "Tổng nhập",
        backgroundColor: "#299cdb",
        borderColor: "#299cdb",
        borderWidth: 1,
        hoverBorderColor: "#0A547C",
        hoverBackgroundColor: "#0A547C",
        data: [
          3560000, 4980000, 6050000, 7180000, 3600000, 4590000, 3078000,
          4347000, 6180000, 4600000, 4590000, 2778000,
        ],
      },
    ],
  };
  const options = {
    responsive: true,
    legend: {
      display: false,
    },
    type: "bar",
  };
  const dataProductType = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const formatMoney = (monney) => {
    const formatter = new Intl.NumberFormat("de-VN", {
      style: "currency",
      currency: "VND",
    });

    return formatter.format(monney);
  };

  return (
    <div className={cx('wrapper')} >
      <div className={cx('container')}>
        <div>
          <h1>THỐNG KÊ BÁO CÁO</h1>
          <div style={{ color: '#05CD99' }}>Lalitpur Branch</div>
        </div>
        <div className={cx('content')}>
          <div >
            {/* Lọc theo thời gian */}
            <div className={cx("container-1")}>
              <div className={cx("container-filter")}>
                <span>Chọn năm: </span>
                <select
                  className={cx("cbb-filter", "form-select")}
                  aria-label="Default select example"
                >
                  <option selected value="All">
                    Tất cả
                  </option>
                  <option value="2020">Năm 2020</option>
                  <option value="2021">Năm 2021</option>
                  <option value="2023">Năm 2023</option>
                </select>
                <span>Chọn tháng: </span>
                <select
                  className={cx("cbb-filter", "form-select")}
                  aria-label="Default select example"
                >
                  <option selected value="All">
                    Tất cả
                  </option>
                  <option value="1">Tháng 1</option>
                  <option value="2">Tháng 2</option>
                  <option value="3">Tháng 3</option>
                  <option value="4">Tháng 4</option>
                  <option value="5">Tháng 5</option>
                  <option value="6">Tháng 6</option>
                  <option value="7">Tháng 7</option>
                  <option value="8">Tháng 8</option>
                  <option value="9">Tháng 3</option>
                  <option value="10">Tháng 10</option>
                  <option value="11">Tháng 11</option>
                  <option value="12">Tháng 12</option>
                </select>
              </div>
            </div>
            {/* Tổng Doanh Thu, Tổng nhập hàng, Số đơn hàng, Số Khách hàng  */}
            <div className={cx('container-total')}>
              <span className={cx('title-total')}>So với năm/tháng trước đó</span>
              <div className={cx('container-item-board')}>
                <ItemDashboard
                  title="DOANH THU (VND)"
                  percent={27.96}
                  value={formatMoney(14276000)}
                  isIncrease={true}
                />
                <ItemDashboard
                  title="NHẬP HÀNG (VND)"
                  percent={52.96}
                  value={formatMoney(12476000)}
                  isIncrease={false}
                />
                <ItemDashboard
                  title="SỐ ĐƠN HÀNG"
                  percent={17.96}
                  value={149}
                  isIncrease={false}
                />
                <ItemDashboard
                  title="SỐ KHÁCH HÀNG"
                  percent={28.96}
                  value={212}
                  isIncrease={true}
                />
              </div>
            </div>

            <div className={cx('container-list-chart')}>
              <div style={{ width: "70%", padding: "20px" }}>
                <div className={cx('container-big-chart')}>
                  <span style={{ fontSize: "18px", fontWeight: "500" }}>
                    Tổng thu: {formatMoney(29850000)}
                  </span>
                  <span style={{ fontSize: "18px", fontWeight: "500" }}>
                    Tổng chi: {formatMoney(29850000)}
                  </span>
                </div>
                <Bar
                  data={data_Thu_Chi}
                  width={null}
                  height={null}
                  options={options}
                />
              </div>

              <div style={{ width: "30%", padding: "20px" }}>
                <Doughnut data={dataProductType} />
              </div>
            </div>

            <div className={cx('container-two-table')}>
              <div className={cx('bg-table-small')}>
                <span className={cx('title-table')}>
                  Top 5 sản phẩm bán chạy
                </span>
                <div className={cx('container-header-table')}>
                  <span>Hình ảnh</span>
                  <span style={{ marginLeft: '10px' }}>Tên sản phẩm</span>
                  <span style={{ marginLeft: '18px' }}>Giá bán</span>
                  <span style={{ marginRight: '10px' }}>Đã bán</span>
                  <span>Doanh số</span>
                </div>
                <div className={cx('layout-col')}>
                  {[1, 2, 3, 4, 5].map(() => {
                    return (
                      <div className={cx('container-item-table')}>
                        <img className={cx('img-item-table')} src={item_product} alt="img" />
                        <div>
                          <p className={cx('three-dot-text')}>
                            Branded T-Shirts
                          </p>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p className={cx('text-rating')}>(4.5)</p>
                            <ReactStars
                              count={5}
                              size={10}
                              color1={"#ccc"}
                              color2={"#ffd700"}
                              edit={false}
                              value={4.5}
                            />
                          </div>
                        </div>
                        <p>{formatMoney(149000)}</p>
                        <p>162</p>
                        <p>{formatMoney(2000000)}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={cx('bg-table-small')}>
                <span className={cx('title-table')}>
                  Top khách hàng chi tiêu
                </span>
                <div className={cx('container-header-table')}>
                  <span>Hình ảnh</span>
                  <span style={{ marginLeft: '10px' }}>Họ tên</span>
                  <span style={{ marginLeft: '20px' }}>Số điện thoại</span>
                  <span>Địa chỉ email</span>
                  <span>Mức chi tiêu</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {[1, 2, 3, 4, 5].map(() => {
                    return (
                      <div className={cx('container-item-table')}>
                        <img className={cx('img-item-table')} src={item_product} alt="img" />
                        <p className={cx('three-dot-text')}>Nguyễn Văn A</p>
                        <p>0379361210</p>
                        <p className={cx('three-dot-text')}>tinh@gmail.com</p>
                        <p>1.999.000 đ</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* List table đơn hàng gần đây  */}
            <div style={{ margin: "20px 30px" }}>
              <div className={cx('border-table')}>
                <span className={cx('title-table')}>
                  Những đơn hàng gần đây
                </span>
                <div className={cx('container-header-table')}>
                  <span style={{ marginLeft: '20px' }}>Hình ảnh</span>
                  <span style={{ marginLeft: '15px' }}>Mã đơn hàng</span>
                  <span style={{ marginRight: '20px' }}>Mã sản phẩm</span>
                  <span style={{ marginRight: '60px' }}>Tên sản phẩm</span>
                  <span style={{ marginRight: '40px' }}>Tên khách hàng</span>
                  <span style={{ marginRight: '25px' }}>Số điện thoại</span>
                  <span style={{ marginRight: '20px' }}>Giá trị đơn hàng</span>
                </div>
                <div className={cx('container-order-recent')}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7].map(() => {
                    return (
                      <div className={cx('container-item-table')}>
                        <img className={cx('img-item-table')} src={item_product} alt="img" />
                        <p>DH001</p>
                        <p>SP001</p>
                        <p className={cx('three-dot-text')}>Branded T-Shirts</p>
                        <p className={cx('three-dot-text')}>Phan Trọng Tính</p>
                        <p>0379361210</p>
                        <p>2.000.999 đ</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* @2023 copyright */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ textAlign: 'center', margin: '20px 0 30px' }}>2023 @copyright</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
