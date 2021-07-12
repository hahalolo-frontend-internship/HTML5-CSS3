import React from "react";
import "./PopupFinish.scss";
function PopupFinish(props) {
  return (
    <div className="popup">
      <div className="popup-overlay" onClick={() => props.onClose()}></div>
      <div className="popup-content align_center">
        <h3 className="popup-content_title">Bạn còn nhiều câu chưa trả lời!</h3>
        <p>Thời gian làm bài còn {props.time}</p>
        <p>Bạn có đồng ý nộp bài</p>
        <div className="popup-content_button">
          <button className="btn btn-except" onClick={() => props.onOK()}>
            Nộp bài
          </button>
          <button className="btn btn-close" onClick={() => props.onClose()}>
            Làm tiếp
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupFinish;
