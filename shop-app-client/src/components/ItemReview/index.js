import React, { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./ItemReview.module.scss";
import ReactStars from "react-stars";
import { useState } from "react";
import CustomeButton from "../CustomeButton/CustomeButton";
import TextareaAutosize from "react-textarea-autosize";
import { BsFillImageFill, BsFillSendFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const cx = classNames.bind(styles);

function ItemReview({ item }) {
  const [isSent, setIsSent] = useState(false);
  const [isOpenRes, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);
  const [text, setText] = useState("");

  function selectFiles() {
    fileInputRef.current.click();
  }

  function onFileSelect(event) {
    const files = event.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  function deleteImage(index) {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }

  function sendFeedback() {
    if (text.length > 0) {
      setIsSent(true);
    }
    else {
      if (images.length > 0) {
        setIsSent(true);
      }
    }
  }

  return (

    <div className={cx("p-4", "container-item")}>
      {/* {isOpenRes && <ModalResponse close={handleClose} />} */}
      <div className={cx("name-star")}>
        <img className={cx("avt")} src={item.userAvt} alt="avt" />
        <div >
          <div style={{ margin: '0px 0px 0px 10px' }}>{item.userName}</div>
          <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: '10px', marginRight: '10px' }}>{item.colorSize} </div>
            <div >
              <ReactStars
                count={5}
                size={12}
                value={item.quantityStar}
                color1="#C4C4C4"
                color2="#ffb21d"
                edit={false}
                className={cx("star-product")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={cx("container-rieview")}>
        <div className={cx("container-images")}>
          <div className={cx("images-list")}>
            <img
              className={cx("image")}
              src={item.reviewImg}
              alt="imgReview"
            />
          </div>
          <span className={cx("message-review")}>{item.contentReview}</span>
        </div>
        <i className={cx("text-date")}>{item.dateReview}</i>
        {
          typeof (item.contentResponse) !== 'undefined' &&
          <div className={cx("container-reply")}>
            <i >*** Nội dung phản hồi ***</i>
            <div className={cx("container-res")}>
              <div className={cx("images-list")}>
                <img
                  className={cx("image")}
                  src={item.imageResponse}
                  alt="imgRes"
                />
              </div>
              <span className={cx("message-review")}>
                {item.contentResponse}
              </span>
            </div>
            <i className={cx("text-date")}>{item.dateResponse}</i>
          </div>
        }
        {
          !isOpenRes && typeof (item.contentResponse) === 'undefined' ?
            <CustomeButton onClick={handleOpen} title={'Phản hồi'} isLeft={true} bgHover={'#2f5acf'} textColorHover={'white'} containStyles={{ width: '150px', backgroundColor: 'black', color: 'white', borderRadius: '8px', padding: '22px 10px', marginTop: '6px', float: 'right' }} />
            : isOpenRes && typeof (item.contentResponse) === 'undefined' ? <>
              {isSent ? (
                <div className={cx("container-reply")}>
                  <i className={cx("title-reply")}>*** Nội dung phản hồi ***</i>
                  <div className={cx("container-res")}>
                    {images.map((image, index) => (
                      <div className={cx("images-list")} key={index}>
                        <img
                          className={cx("image")}
                          src={image.url}
                          alt={image.name}
                        />
                      </div>
                    ))}
                    <span className={cx("message-review")}>{text}</span>
                    <i className={cx("text-date")}>{item.dateResponse}</i>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', width: '100%' }}>
                  <div style={{ display: 'flex', alignSelf: 'flex-end' }}>
                    <button onClick={sendFeedback} style={{ width: '36px', backgroundColor: 'black', marginRight: '10px', color: 'white', padding: '10px', borderRadius: '50%', alignContent: 'center', height: '36px', }}><BsFillSendFill size={40} /></button>
                    <button onClick={selectFiles} style={{ width: '36px', backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '50%', alignContent: 'center', height: '36px', }}><BsFillImageFill size={40} /></button>
                    <input
                      type="file"
                      name="file"
                      multiple
                      hidden
                      ref={fileInputRef}
                      onChange={onFileSelect}
                    />
                  </div>
                  <div style={{ width: '80%' }}>
                    <div style={{
                      width: '98%',
                      height: 'auto',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      flexWrap: 'wrap',
                      padding: '12px',
                      border: '1px solid #8c8c8c',
                      borderRadius: '4px 4px 0 4px'
                    }}>
                      {images.map((image, index) => (
                        <div className={cx("images-list")} key={index}>
                          <img
                            className={cx("image")}
                            src={image.url}
                            alt={image.name}
                          />
                          <AiFillCloseCircle
                            className={cx("delete-img")}
                            onClick={() => deleteImage(index)}
                          />
                        </div>
                      ))}
                      <TextareaAutosize
                        className={cx("input-text")}
                        placeholder="Nhập nội dung"
                        onChange={(e) => setText(e.target.value)}
                        value={text}

                      />
                    </div>
                  </div>
                    <MdClose style={{marginRight:'20px', fontSize:'26px', display:'flex', alignSelf:'flex-end', marginBottom:'10px', cursor:'pointer'}} onClick={handleClose}/>

                </div>
              )}
            </> : <></>
        }


      </div>
    </div>
  );
}

export default ItemReview;