import React, { useEffect } from "react";
import { useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./FeedbackDetail.module.scss";
import {item_product} from "~/assets/images";
import { AiFillCloseCircle } from "react-icons/ai";
import TextareaAutosize from "react-textarea-autosize";
import { BsFillSendFill, BsFillImageFill } from "react-icons/bs";
import ContentItemFeedback from "~/components/ContentItemFeedback";
const cx = classNames.bind(styles);

function FeedbackDetail({ itemFeedbackActive, send}) {
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
    itemFeedbackActive.isRespon = true;
    itemFeedbackActive.contentResponsed.text = text;
    const newListImage = images.map((itemp) => {
      return itemp.url;
    });
    itemFeedbackActive.contentResponsed.listImage = [...newListImage];
    send({...itemFeedbackActive});
    // if (text.length > 0)
    // {
      
    // }
    // else
    // {
    //   if (images.length > 0)
    //   {
    //     setIsSent(true);
    //   }
    // }
  }
  return (
    <div className={cx("wrapper")}>
      <div style={{marginTop:'10px'}}>
        <ContentItemFeedback  contentFeedback={itemFeedbackActive.contentFeedback}/>

        {itemFeedbackActive.isRespon ? (
          <div className={cx("res")}>
            <div className={cx("container-reply")}>
              <i className={cx("title-reply")}>*** Nội dung phản hồi ***</i>
              <div className={cx("container-images")}>
                {itemFeedbackActive.contentResponsed.listImage.map((item, index) => {
                  console.log(item)
                  return (
                    <div className={cx("images-list")} key={index}>
                      <img
                        className={cx("image")}
                        src={item}
                        alt="img"
                      />
                    </div>
                  )
                  
                })}
                <span className={cx("message-review")}>{itemFeedbackActive.contentResponsed.text}</span>
              </div>
            </div>
            <div className={cx("isRespond")}>ĐÃ PHẢN HỒI</div>
          </div>
        ) : (
          <div className={cx("container-fb")}>
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
            <div className={cx("container-input")}>
              <div style={{backgroundColor:'white'}} className={cx("container-images")}>
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

            
          </div>
        )}
      </div>
    </div>
  );
}

export default FeedbackDetail;