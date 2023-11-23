import React from "react";
import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
import {
  AiOutlineRise,
  AiOutlineFall,
  AiOutlineDollarCircle,
  AiOutlineShopping,
  AiOutlineShoppingCart,
  AiFillStar,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import Chart from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
import { item_product } from "~/assets/images";

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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px 0",
                borderBottom: "0.5px solid #ccc",
              }}
            >
              <span
                style={{ fontSize: "16px", marginLeft: "20px", fontWeight: "500" }}
              >
                So với năm/tháng trước đó
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  margin: "16px 0",
                }}
              >
                <div className={cx("container-item")}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span
                      style={{
                        marginRight: "10px",
                        fontSize: "14px",
                        color: "#9CA2B2",
                        fontWeight: "600",
                      }}
                    >
                      DOANH THU (VND)
                    </span>
                    <div
                      style={{
                        marginLeft: "10px",
                        fontSize: "14px",
                        color: "#1E7E63",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <AiOutlineRise
                        style={{ marginRight: "4px", fontSize: "17px" }}
                      />
                      <span>16.69 %</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10px",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "#495057",
                        fontSize: "22px",
                        fontWeight: "bold",
                      }}
                    >
                      14.000.999
                    </span>
                    <div
                      style={{
                        padding: "10px 14px",
                        backgroundColor: "#daf4f0",
                        borderRadius: "6px",
                      }}
                    >
                      <AiOutlineDollarCircle
                        style={{
                          color: "#0ab39c",
                          fontSize: "20px",
                          fontWeight: "500",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className={cx("container-item")}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span
                      style={{
                        marginRight: "10px",
                        fontSize: "14px",
                        color: "#9CA2B2",
                        fontWeight: "600",
                      }}
                    >
                      NHẬP HÀNG (VND)
                    </span>
                    <div
                      style={{
                        marginLeft: "10px",
                        fontSize: "14px",
                        color: "#f07660",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <AiOutlineFall
                        style={{ marginRight: "4px", fontSize: "17px" }}
                      />
                      <span>16.69 %</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10px",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "#495057",
                        fontSize: "22px",
                        fontWeight: "bold",
                      }}
                    >
                      14.000.999
                    </span>
                    <div
                      style={{
                        padding: "10px 14px",
                        backgroundColor: "#dff0fa",
                        borderRadius: "6px",
                      }}
                    >
                      <AiOutlineShoppingCart
                        style={{
                          color: "#299cdb",
                          fontSize: "20px",
                          fontWeight: "500",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className={cx("container-item")}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span
                      style={{
                        marginRight: "10px",
                        fontSize: "14px",
                        color: "#9CA2B2",
                        fontWeight: "600",
                      }}
                    >
                      SỐ ĐƠN HÀNG
                    </span>
                    <div
                      style={{
                        marginLeft: "10px",
                        fontSize: "14px",
                        color: "#f07660",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <AiOutlineFall
                        style={{ marginRight: "4px", fontSize: "17px" }}
                      />
                      <span>16.69 %</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10px",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "#495057",
                        fontSize: "22px",
                        fontWeight: "bold",
                      }}
                    >
                      149
                    </span>
                    <div
                      style={{
                        padding: "10px 14px",
                        backgroundColor: "#D4FFCD",
                        borderRadius: "6px",
                      }}
                    >
                      <AiOutlineShopping
                        style={{
                          color: "#49E332",
                          fontSize: "20px",
                          fontWeight: "500",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className={cx("container-item")}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span
                      style={{
                        marginRight: "10px",
                        fontSize: "14px",
                        color: "#9CA2B2",
                        fontWeight: "600",
                      }}
                    >
                      SỐ KHÁCH HÀNG
                    </span>
                    <div
                      style={{
                        marginLeft: "10px",
                        fontSize: "14px",
                        color: "#1E7E63",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <AiOutlineRise
                        style={{ marginRight: "4px", fontSize: "17px" }}
                      />
                      <span>16.69 %</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10px",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "#495057",
                        fontSize: "22px",
                        fontWeight: "bold",
                      }}
                    >
                      19
                    </span>
                    <div
                      style={{
                        padding: "10px 14px",
                        backgroundColor: "#fef4e4",
                        borderRadius: "6px",
                      }}
                    >
                      <AiOutlineDollarCircle
                        style={{
                          color: "#f9be4b",
                          fontSize: "20px",
                          fontWeight: "500",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Biểu đồ biểu thị theo thời gian: Số đơn hàng, Doah thu, tiền nhập */}
            {/* Biểu đồ tròn thống kê doanh thu theo loại sản phẩm  */}
            <div
              style={{
                boxShadow: "0px 0px 2px 1px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                margin: "30px",
                justifyContent: "space-between",
                borderRadius: "4px",
              }}
            >
              <div style={{ width: "70%", padding: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    marginBottom: "20px",
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: "500" }}>
                    Tổng thu: 29.850.000 (VND)
                  </span>
                  <span style={{ fontSize: "18px", fontWeight: "500" }}>
                    Tổng chi: 29.850.000 (VND)
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
            {/* List table Top 5 sản phẩm best seller  */}
            {/* list table Top 5 khách hàng chi tiêu */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "20px 30px",
                gap: '20px'
              }}
            >
              <div
                style={{
                  width: "50%",
                  backgroundColor: "#fff",
                  padding: "10px 20px",
                  borderRadius: "4px",
                  boxShadow: "0px 0px 2px 1px rgba(0, 0, 0, 0.1)",
                }}
              >
                <span
                  style={{
                    marginTop: "20px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#282C30",
                  }}
                >
                  Top 5 sản phẩm bán chạy
                </span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "20px",
                  }}
                >
                  {[1, 2, 3, 4, 5].map(() => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          color: "#42484f",
                          fontSize: "15px",
                          fontWeight: "500",
                          borderTop: "1px solid #ccc",
                          padding: "10px",
                        }}
                      >
                        <img
                          style={{
                            width: "70px",
                            height: "75px",
                            borderRadius: "6px",
                          }}
                          src={item_product}
                          alt="img"
                        />
                        <div>
                          <p style={{ margin: '0 10px', display: 'inline-block', maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Branded T-Shirts</p>
                          <p
                            style={{
                              color: "#878a99",
                              fontWeight: "300",
                              fontStyle: "italic",
                              margin: '0 10px'
                            }}
                          >
                            (4.5) <AiFillStar color="#ffb300" />
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <p>145.000 đ</p>
                          <p
                            style={{
                              color: "#878a99",
                              fontWeight: "300",
                              fontStyle: "italic",
                            }}
                          >
                            Giá
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <p>162</p>
                          <p
                            style={{
                              color: "#878a99",
                              fontWeight: "300",
                              fontStyle: "italic",
                            }}
                          >
                            Đã bán
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <p>300</p>
                          <p
                            style={{
                              color: "#878a99",
                              fontWeight: "300",
                              fontStyle: "italic",
                            }}
                          >
                            Tồn kho
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <p>2.000.000 đ</p>
                          <p
                            style={{
                              color: "#878a99",
                              fontWeight: "300",
                              fontStyle: "italic",
                            }}
                          >
                            Doanh số
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                style={{
                  width: "50%",
                  backgroundColor: "#fff",
                  padding: "10px 20px",
                  borderRadius: "4px",
                  boxShadow: "0px 0px 2px 1px rgba(0, 0, 0, 0.1)",
                }}
              >
                <span
                  style={{
                    marginTop: "20px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#282C30",
                  }}
                >
                  Top khách hàng chi tiêu
                </span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "20px",
                  }}
                >
                  {[1, 2, 3, 4, 5].map(() => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          color: "#42484f",
                          fontSize: "15px",
                          fontWeight: "500",
                          borderTop: "1px solid #ccc",
                          padding: "10px",
                        }}
                      >
                        <img
                          style={{
                            width: "70px",
                            height: "75px",
                            borderRadius: "6px",
                          }}
                          src={item_product}
                          alt="img"
                        />
                        <p style={{ margin: '0 10px', display: 'inline-block', maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Nguyễn Văn A</p>
                        <p>0379361210</p>
                        <p style={{ margin: '0 10px', display: 'inline-block', maxWidth: '170px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>tinh@gmail.com</p>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <p>1.999.000 đ</p>
                          <p
                            style={{
                              color: "#878a99",
                              fontWeight: "300",
                              fontStyle: "italic",
                            }}
                          >
                            Chi tiêu
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* List table đơn hàng gần đây  */}
            <div style={{ margin: "20px 30px" }}>
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "10px 20px",
                  borderRadius: "4px",
                  boxShadow: "0px 0px 2px 1px rgba(0, 0, 0, 0.1)",
                }}
              >
                <span
                  style={{
                    marginTop: "20px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#282C30",
                  }}
                >
                  Những đơn hàng gần đây
                </span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "20px",
                    maxHeight: '500px',
                    height: '450px',
                    overflow: 'visible',
                    overflowY: 'scroll'
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7].map(() => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          color: "#42484f",
                          fontSize: "15px",
                          fontWeight: "500",
                          borderTop: "1px solid #ccc",
                          padding: "10px",
                        }}
                      >
                        <img
                          style={{
                            width: "70px",
                            height: "75px",
                            borderRadius: "6px",
                          }}
                          src={item_product}
                          alt="img"
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <p>DH001</p>
                          <p
                            style={{
                              color: "#878a99",
                              fontWeight: "300",
                              fontStyle: "italic",
                            }}
                          >
                            Mã đơn hàng
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <p>SP001</p>
                          <p
                            style={{
                              color: "#878a99",
                              fontWeight: "300",
                              fontStyle: "italic",
                            }}
                          >
                            Mã sản phẩm
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <p style={{ display: 'inline-block', maxWidth: '280px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Branded T-Shirts</p>
                          <p
                            style={{
                              color: "#878a99",
                              fontWeight: "300",
                              fontStyle: "italic",
                            }}
                          >
                            Tên sản phẩm
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <p style={{ display: 'inline-block', maxWidth: '220px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Phan Trọng Tính</p>
                          <p
                            style={{
                              color: "#878a99",
                              fontWeight: "300",
                              fontStyle: "italic",
                            }}
                          >
                            Tên khách hàng
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <p>0379361210</p>
                          <p
                            style={{
                              color: "#878a99",
                              fontWeight: "300",
                              fontStyle: "italic",
                            }}
                          >
                            Số điện thoại
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <p>2.000.999 đ</p>
                          <p
                            style={{
                              color: "#878a99",
                              fontWeight: "300",
                              fontStyle: "italic",
                            }}
                          >
                            Giá trị đơn hàng
                          </p>
                        </div>
                      </div>
                    );
                  })}
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
    </div>

  );
}

export default Dashboard;
