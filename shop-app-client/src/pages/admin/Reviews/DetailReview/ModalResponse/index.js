import React from "react";
import { useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./ModalResponse.module.scss";
import image from "~/assets/images";
import { AiFillCloseCircle } from "react-icons/ai";
import TextareaAutosize from "react-textarea-autosize";
import { BsFillSendFill, BsFillImageFill } from "react-icons/bs";
const cx = classNames.bind(styles);

function ModalResponse(props) {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);
  const [text, setText] = useState("");
  const [isSent, setIsSent] = useState(false);

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
    if (text.length > 0)
    {
      setIsSent(true);
    }
    else
    {
      if (images.length > 0)
      {
        setIsSent(true);
      }
    }
  }

  return (
    <div className={cx("main-modal")}>
      <div className={cx("modal-reivew")}>
        <div className={cx("header")}>
          <h1 className={cx("title-header")}>Phản hồi</h1>
          <button className={cx("close")} onClick={props.close}>&times;</button>
        </div>

        <div className={cx("container-rieview")}>
          <i className={cx("title-review")}>*** Nội dung đánh giá ***</i>
          <div className={cx("container-images")}>
            <div className={cx("images-list")}>
              <img className={cx("image")} src={image.item_product} alt="" />
            </div>
            <div className={cx("images-list")}>
              <img className={cx("image")} src={image.item_product} alt="" />
            </div>
            <div className={cx("images-list")}>
              <img className={cx("image")} src={image.item_product} alt="" />
            </div>
            <div className={cx("images-list")}>
              <img className={cx("image")} src={image.item_product} alt="" />
            </div>
            <div className={cx("images-list")}>
              <img className={cx("image")} src={image.item_product} alt="" />
            </div>

            <span className={cx("message-review")}>
              Tôi có đặt đơn hàng là một chiếc áo thun loại CoolXstra New màu
              đen size XL hôm 27/8/2023 và theo thông tin ghi trên hệ thống
              website thì sau 3 ngày sẽ nhận được hàng, nhưng hôm nay đã là ngày
              thứ tư nhưng tôi vẫn chưa nhận được hàng. Cảm ơn shop !
            </span>
          </div>
        </div>

        {isSent ? (
          <div className={cx("res")}>
            <div className={cx("container-reply")}>
              <i className={cx("title-reply")}>*** Nội dung phản hồi ***</i>
              <div className={cx("container-images")}>
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
              </div>
            </div>
            <div className={cx("isRespond")}>ĐÃ PHẢN HỒI</div>
          </div>
        ) : (
          <div className={cx("container-fb")}>
            <div className={cx("container-input")}>
              <div className={cx("container-images")}>
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

            <div className={cx("container-button")}>
              <button
                type="button"
                className={cx("buttton-sent")}
                onClick={sendFeedback}
              >
                <BsFillSendFill className={cx("color-white")} />
              </button>

              <button
                type="button"
                className={cx("buttton-upload")}
                onClick={selectFiles}
              >
                <BsFillImageFill className={cx("color-white")} />
              </button>

              <input
                type="file"
                name="file"
                multiple
                ref={fileInputRef}
                className={cx("file")}
                onChange={onFileSelect}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalResponse;
