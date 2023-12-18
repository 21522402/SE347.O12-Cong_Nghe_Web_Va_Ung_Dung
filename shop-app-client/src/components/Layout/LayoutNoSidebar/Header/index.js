import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { IoSearch, IoBagHandle } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import DetailPopup from './DetailPopup';
import SearchPopup from './SearchPopup';
import SettingPopup from './SettingPopup';
import Modal from "~/components/Modal";
import { Login, SignUp, ChangePass } from "~/pages/auth";
import { useDispatch, useSelector } from "react-redux";
import { BiAlignLeft } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import CartPopup from "./CartPopup";
import { getCartProducts } from "~/redux/api/userRequest";

const cx = classNames.bind(styles);

function Header() {
  let [login, setLogin] = useState(false)
  let currentUser = useSelector((state) => state.auth.login.currentUser)
  const navigate = useNavigate();
  const overLay = useRef();
  const hideOverLay = () => {
    overLay.current.checked = false
  }
  let cartProducts = useSelector(state => state.user?.cart?.cartProducts)
  const [indexCategoryActive, setIndexCategoryActive] = useState(-1);
  const [showDetailPopUp, setShowDetailPopup] = useState(false)
  const [showSearchPopUp, setShowSearchPopup] = useState(false)
  const [showCartPopUp, setShowCartPopup] = useState(false)
  const [valueSearch, setValueSearch] = useState('');
  const [popup, setPopup] = useState("login")
  const handleCategoryClick = (index) => {
    setShowDetailPopup(false);

    // Chuyển hướng đến trang collection
    navigate(`/collection/${categories[index].category}`);
  };
  const categories = [
    {
      category: 'Áo',
      listTypes: [
        {
          name: 'Áo khoác',

        }
        ,
        {
          name: 'Áo mùa đông',
          link: `/collection/1`
        },
        {
          name: 'Áo thể thao',
          link: `/collection/1`
        },
        {
          name: 'Áo tết',
          link: `/collection/1`
        }
      ],
      images: [
        {
          src: 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2023/GRAPHICS.AGANIN.10_10.jpg',
          alt: 'Phê pha',
        },
        {
          src: 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/August2022/v2navytruoc_78.jpg',
          alt: 'Yasuo áo rách',
        },
        {
          src: 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/March2023/DSC04764_copy_35.jpg',
          alt: 'Leesin mù',
        }



      ]
    },
    {
      category: 'Quần',
      listTypes: [
        {
          name: 'Quần dài',
          link: `/collection/1`
        }
        ,
        {
          name: 'Quần short',
          link: `/collection/1`
        },
        {
          name: 'Quần thể thao',
          link: `/collection/1`
        },
        {
          name: 'Quần báo',
          link: `/collection/1`
        }
      ],
      images: [
        {
          src: 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2023/GRAPHICS.AGANIN.10_10.jpg',
          alt: 'Jeans Copper Denim',
        },
        {
          src: 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/August2022/v2navytruoc_78.jpg',
          alt: 'Quần lửng',
        },
        {
          src: 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/March2023/DSC04764_copy_35.jpg',
          alt: 'Quần dài',
        }

      ]
    },
    {
      category: 'Đồ lót',
      listTypes: [
        {
          name: 'Brief (Tam giác)',
          link: `/collection/1`
        }
        ,
        {
          name: 'Trunk (Boxer)',
          link: `/collection/1`
        },
        {
          name: 'Boxer dài',
          link: `/collection/1`
        }
      ],
      images: [
        {
          src: 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/November2023/GRAPHICS.AGANIN.10_10.jpg',
          alt: 'Jeans Copper Denim',
        },
        {
          src: 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/August2022/v2navytruoc_78.jpg',
          alt: 'Quần lửng',
        },
        {
          src: 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/March2023/DSC04764_copy_35.jpg',
          alt: 'Quần dài',
        }
      ]
    }
  ]
  const dispatch = useDispatch()
  useEffect(() => {
    getCartProducts(currentUser, dispatch)
}, []) 

  const handleMouseOver = (index) => {
    setIndexCategoryActive(index);
    setShowDetailPopup(true);
  };

  const handleNav = (e) => {
    if (e === "login") setPopup("login");
    else if (e === "signup") setPopup("signup");
    else setPopup("forgot");
  };
  return (
    <div className={cx("wrapper")}>
      <Modal visible={login} setModal={setLogin}>
        {popup === "login" ? (
          <Login navSignup={handleNav} navForgot={handleNav} />
        ) : popup === "signup" ? (
          <SignUp navLogin={handleNav} />
        ) : (
          <ChangePass navLogin={handleNav} />
        )}
      </Modal>

      <BiAlignLeft className={cx("icon-menu")} />


      <a href="/user" className={cx("logo-wrapper")}>
        <div>SHOP</div>
        <div className={cx("child2")}>APP</div>
      </a>

      <div className={cx('container-middle')}>
        <div
          onMouseLeave={() => setShowDetailPopup(false)}
          className={cx("categories")}
        >
          {
            <>
              <div className={cx("item-category")}>Sale</div>

              {
                categories.map((item, index) => {
                  return (
                    <div onMouseOver={() => handleMouseOver(index)}
                      onClick={() => handleCategoryClick(index)}
                      className={cx('item-category')}>
                      {item.category}
                    </div>
                  )
                })
              }
            </>
          }
          {
            showDetailPopUp &&
            <DetailPopup category={categories[indexCategoryActive]} onMouseLeave={() => setShowDetailPopup(false)} />
          }
        </div>

        <div onMouseLeave={() => setShowSearchPopup(false)} className={cx('search-wrapper')}>
          <div className={cx('search')}>
            <div style={{ padding: '0 12px', cursor: 'pointer' }}>
              <IoSearch style={{ color: '#000', fontSize: '24px' }} />
            </div>
            <div className={cx('input-wrapper')}>
              <input onClick={() => setShowSearchPopup(prev => !prev)} onChange={(e) => { setValueSearch(e.target.value.trim()); console.log(e) }} className={cx('input-search')} type='text' value={valueSearch} placeholder='Tìm kiếm sản phẩm...' />

            </div>
            <div onClick={() => setValueSearch('')} style={{ padding: '0 12px', cursor: 'pointer' }}>
              <IoMdClose style={{ color: '#000', fontSize: '24px' }} />
            </div>
            {
              showSearchPopUp &&
              <SearchPopup searchKey={valueSearch} onMouseLeave={() => setShowSearchPopup(false)} />
            }

          </div>
        </div>

        <div className={cx("user")}>
          <input
            ref={overLay}
            type="checkbox"
            hidden
            className={cx("main__header-navBar-hide-open")}
            id={cx("main__header-navBar-hide-open")}
          />
          <div className={cx("main__header-navBar")}>
            <SettingPopup closeBtn={hideOverLay} />
          </div>
          <label
            for={cx("main__header-navBar-hide-open")}
            className={cx("main__header-navbar-overlay")}
          ></label>
          <label for={cx(currentUser ? "main__header-navBar-hide-open" : "")}>
            <div
              onClick={() => {
                !currentUser && setLogin(true);
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <div style={{ cursor: "pointer" }}>
                <FaUserCircle style={{ color: "#fff", fontSize: "24px" }} />
              </div>
              {currentUser ? (
                <div style={{ marginLeft: "5px", marginTop: "5px" }}>{`Hi, ${currentUser.fullName.split(" ")[
                  currentUser.fullName.split(" ").length - 1
                ]
                  }`}</div>
              ) : null}
            </div>
          </label>
          <div onClick={() => navigate("/cart")}>
            <div style={{ cursor: "pointer", position: 'relative' }} onMouseMove={() => {setShowCartPopup(true)}}>
              <IoBagHandle style={{ color: "#fff", fontSize: "24px" }} />
              <span className={cx("counts", "site-header__cartcount")}>{cartProducts ? cartProducts.length : 0}</span>
                {
                    showCartPopUp &&
                    <CartPopup onMouseLeave={() => setShowCartPopup(false)} cartProducts={cartProducts}/>
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
