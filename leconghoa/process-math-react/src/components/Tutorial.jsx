import React from "react";
import radio_icon from "../img/radio-icon.png";
import checkbox_icon from "../img/checkbox-icon.png";
import next from "../img/next-question-icon.png";
import back from "../img/back-question-icon.png";
function Tutorial() {
  return (
    <div className="tutorial">
      <h4 className="tutorial_title">Hướng dẫn làm bài trắc nghiệm</h4>
      <div className="tutorial_info flex-items-center">
        <div className="tutorial_icon">
          <img src={radio_icon} alt="icon" />
        </div>
        <span>Chọn câu trả lời đúng</span>
      </div>
      <div className="list-guide-info">
        <div className="tutorial_info flex-items-center">
          <div className="tutorial_icon">
            <img src={checkbox_icon} alt="icon" />
          </div>
          <span>
            Đánh dấu <b>"Xem lại"</b> nếu câu trả lời <b>chưa chắc chắn</b>
          </span>
        </div>
        <div className="tutorial_info flex-items-center">
          <div className="tutorial_icon">
            <img src={next} alt="icon" />
          </div>
          <span>
            Chuyển qua <b>câu kế tiếp</b>
          </span>
        </div>
        <div className="tutorial_info flex-items-center">
          <div className="tutorial_icon">
            <img src={back} alt="icon" />
          </div>
          <span>
            Quay lại <b>câu trước</b>
          </span>
        </div>
      </div>
      <div className="note">
        <h4 className="txt-note">Lưu ý:</h4>
        <div className="note-content">
          Những câu <b>chưa chọn đáp án</b> sẽ được tính là
          <b>câu trả lời sai</b>
          <br />
          Nếu bạn <b>thoát ra</b> trong lúc chưa hết thời gian làm bài thì kết
          quả <b>sẽ không được tính </b>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
