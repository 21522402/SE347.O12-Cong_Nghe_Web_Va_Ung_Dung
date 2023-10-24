import React from "react";
import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
import { CChart } from "@coreui/react-chartjs";

const cx = classNames.bind(styles);

function Dashboard() {
  return (
    <div className={cx("container-dashboard")}>
      <div className={cx("container-header")}>
        <div className={cx("header-text")}>
          <div className={cx("text-red")}>
            <span>Tổng chi: </span>
            <span className="ps-3">100.000.000 VND</span>
          </div>

          <div className={cx("text-blue")}>
            <span>Tổng thu: </span>
            <span className="ps-3">187.000.000 VND</span>
          </div>

          <div className={cx("text-green")}>
            <span>Lợi nhuận: </span>
            <span className="ps-3">100.000.000 VND</span>
          </div>
        </div>

        <CChart
          className={cx("chart-pie")}
          type="pie"
          data={{
            labels: ["Tổng thu", "Tổng chi"],
            datasets: [
              {
                backgroundColor: ["blue", "red"],
                data: [187000000, 100000000],
                hoverBackgroundColor: ["blue", "red"],
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                labels: {
                  color: "#000",
                },
              },
            },
          }}
        />

        <div className={cx("header-cbb")}>
          <b className={cx("text-cbb")}>Chọn năm để xem</b>
          <select>
            <option selected>2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
      </div>

      <div className={cx("container-line-chart")}>
        <h1>Biểu đồ thu - chi - lợi nhuận theo từng tháng</h1>
        <CChart
          className={cx("line-chart")}
          type="line"
          data={{
            labels: [
              "Tháng 1",
              "Tháng 2",
              "Tháng 3",
              "Tháng 4",
              "Tháng 5",
              "Tháng 6",
              "Tháng 7",
              "Tháng 8",
              "Tháng 9",
              "Tháng 10",
              "Tháng 11",
              "Tháng 12",
            ],
            datasets: [
              {
                label: "Tổng thu",
                backgroundColor: "rgba(220, 220, 220, 0.2)",
                borderColor: "blue",
                pointBackgroundColor: "blue",
                pointBorderColor: "#fff",
                data: [
                  23400000, 27000000, 29000000, 40000000, 33000000, 35000000,
                  38000000, 44000000, 48000000, 70000000, 140000000, 187000000,
                ],
              },
              {
                label: "Lợi nhuận",
                backgroundColor: "rgba(151, 187, 205, 0.2)",
                borderColor: "green",
                pointBackgroundColor: "green",
                pointBorderColor: "#fff",
                data: [
                  10600000, 12000000, 19800000, 2400000, 33000000, 42000000,
                  47000000, 56000000, 62000000, 69000000, 77000000, 87000000,
                ],
              },
              {
                label: "Tổng chi",
                backgroundColor: "rgba(151, 187, 205, 0.2)",
                borderColor: "red",
                pointBackgroundColor: "red",
                pointBorderColor: "#fff",
                data: [
                  18000000, 19000000, 21000000, 27000000, 36000000, 49000000,
                  52000000, 66000000, 73000000, 84000000, 95000000, 100000000,
                ],
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                labels: {
                  color: "#000",
                },
              },
            },
            scales: {
              x: {
                grid: {
                  color: "#ccc",
                },
                ticks: {
                  color: "#000",
                },
              },
              y: {
                grid: {
                  color: "#ccc",
                },
                ticks: {
                  color: "#000",
                },
              },
            },
          }}
        />
      </div>

      <div className={cx("container-footer")}>

        <div className={cx("footer-cbb")}>
          <div className={cx("header-cbb")}>
            <b className={cx("text-cbb")}>Chọn tháng để xem</b>
            <select>
              <option selected>Tháng 1</option>
              <option value={2}>Tháng 2</option>
              <option value={3}>Tháng 3</option>
              <option value={4}>Tháng 4</option>
              <option value={5}>Tháng 5</option>
              <option value={6}>Tháng 6</option>
              <option value={7}>Tháng 7</option>
              <option value={8}>Tháng 8</option>
              <option value={9}>Tháng 9</option>
              <option value={10}>Tháng 10</option>
              <option value={11}>Tháng 11</option>
              <option value={12}>Tháng 12</option>
            </select>
          </div>

          <div className={cx("header-cbb")}>
            <b className={cx("text-cbb")}>Chọn năm để xem</b>
            <select>
              <option selected>2023</option>
              <option value={2024}>2024</option>
            </select>
          </div>
        </div>

        <div className={cx('container-table')}>
          <div className={cx('table-cus')}>
          <b>Top 5 khách hàng chi tiêu nhiều nhất</b>
          <table>
            <thead>
                <tr>
                    <td>STT</td>
                    <td>Tên khách hàng</td>
                    <td>Số điện thoại</td>
                    <td>Chi tiêu</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Nguyễn Văn A</td>
                    <td>0379678832</td>
                    <td>29 000 000 VND</td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Nguyễn Văn B</td>
                    <td>0379678832</td>
                    <td>27 000 000 VND</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>Nguyễn Văn C</td>
                    <td>0379678832</td>
                    <td>21 900 000 VND</td>
                </tr>

                <tr>
                    <td>4</td>
                    <td>Nguyễn Văn D</td>
                    <td>0379678832</td>
                    <td>19 980 000 VND</td>
                </tr>

                <tr>
                    <td>5</td>
                    <td>Nguyễn Văn E</td>
                    <td>0379678832</td>
                    <td>8 000 000 VND</td>
                </tr>
                
            </tbody>
          </table>
          </div>

          <div className={cx('table-cus')}>
          <b>Top 5 sản phẩm bán chạy nhất</b>
          <table>
            <thead>
                <tr>
                    <td>STT</td>
                    <td>Mã sản phẩm</td>
                    <td>Tên sản phẩm</td>
                    <td>Doanh số</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>SP001</td>
                    <td>Áo Polo X2Men</td>
                    <td>89 000 000 VND</td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>SP002</td>
                    <td>Quần Tây HQnEWS 2023</td>
                    <td>80 000 000 VND</td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>SP003</td>
                    <td>Áo Thun CareShare</td>
                    <td>69 000 000 VND</td>
                </tr>

                <tr>
                    <td>4</td>
                    <td>SP004</td>
                    <td>Quần lót Trunk-GCC</td>
                    <td>47 000 000 VND</td>
                </tr>

                <tr>
                    <td>5</td>
                    <td>SP005</td>
                    <td>Quần Sort chạy bộ</td>
                    <td>36 000 000 VND</td>
                </tr>
                
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
