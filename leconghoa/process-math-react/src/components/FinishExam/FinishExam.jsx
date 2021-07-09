import React from "react";
import "./FinishExam.scss";
function FinishExam(props) {
  return (
    <div className="finish-exam align_center">
      <h3 className="finish-exam_head">Kết quả bạn đạt được</h3>
      <div className="finish-exam_body ">
        <div className="finish-exam_body_item">
          <p>Số câu đúng</p>
          <div>
            {props.listAnswer}/{props.listQuestion.length}
          </div>
        </div>
        <div className="finish-exam_body_item">
          <p>Điểm số</p>
          <div>
            {((props.listAnswer / props.listQuestion.length) * 10).toFixed(2)}
          </div>
        </div>
        <div className="finish-exam_body_item">
          <p>Thời gian làm</p>
          <div>{props.time}</div>
        </div>
      </div>
      <h3 className="finish-exam_foot">
        {props.listAnswer === props.listQuestion.length ? (
          <span className="txt_success">
            Chúc mừng bạn hoàn thành tốt bài thi!
          </span>
        ) : (
          <span className="txt_danger">Bạn cần cố gắng thêm nữa!</span>
        )}
      </h3>
    </div>
  );
}

export default FinishExam;
