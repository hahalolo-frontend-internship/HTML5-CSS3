import { Link, useHistory } from "react-router-dom";
import React from "react";
import "./dialog.css";

function Dialog(props) {
  const { result, poni, secondsIncrease} = props;
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    history.push("/main1/1");
  }

  

  return (
    <>
      <div className="dialog">
        <h2>Chúc mừng bạn đã hoàn thanh bài thi</h2>
        <div className="dialog-result">
          <p>
            Số câu trả lời đúng của bạn: <span>{result}</span>
          </p>
          <p>
            Số điểm của bạn đạt được: <span>{poni}</span>
          </p>
          <p>
            Thời gian làm xong bài:<span>{secondsIncrease}</span>
          </p>
        </div>
        <div>
          {/* {err} */}
        </div>
        <button className="btn btn-new" onClick={handleSubmit}>
          Làm bài mới
        </button>
        <Link to="/">
          <i className="fas fa-home">Trở về trang chủ </i>
        </Link>
      </div>
    </>
  );
}

export default Dialog;
