import React, { useEffect, useState } from "react";
import "./Body.scss";
import icon_check from "../../img/icon-check.svg";
import icon_user from "../../img/user-solid.svg";
import ListQuestion from "../../components/ListQuestion";
import Tutorial from "../../components/Tutorial";
import ItemQuestion from "../../components/ItemQuestion";

function Body() {
  const [tutorial, setTutorial] = useState(false);
  //toogle
  const [detailQuestion, setDetailQuestion] = useState(false);
  const [listQuestion, setListQuestion] = useState([]);
  // result
  const [listAnswer, setListAnswer] = useState(null);

  function toogleStart() {
    setTutorial(!tutorial);
    setDetailQuestion(true);
  }

  function resultAnswer(data) {
    let answer = 0;
    data.map((item) =>
      listQuestion.filter((e) =>
        e.id === item.id && e.result_true === item.answer ? (answer += 1) : null
      )
    );
    setListAnswer(answer);
  }
  useEffect(() => {
    async function fetchQuestions() {
      const requestUrl = "http://localhost:5000/list_questions";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setListQuestion(responseJSON);
    }
    fetchQuestions();
  }, []);
  return (
    <div className="main">
      <div className="grid wide">
        <div className="row no-gutters">
          {!tutorial && detailQuestion ? (
            <div className="c-9 main-question">
              <ItemQuestion data={listQuestion} result={resultAnswer} />
            </div>
          ) : (
            <div className="c-9 main-question">
              <h4 className="title-test">Đề kiểm tra 1 tiết môn Toán Lớp 6</h4>
              <div className="detail-question">
                <div className="flex-items-center">
                  <img
                    src={icon_check}
                    alt="icon check"
                    className="detail-question_icon"
                  />
                  <span>30 câu</span>
                </div>
                <div className="flex-items-center">
                  <img
                    src={icon_user}
                    alt="icon user"
                    className="detail-question_icon"
                  />
                  <span>45 phút</span>
                </div>
              </div>
              {tutorial ? <Tutorial /> : <ListQuestion data={listQuestion} />}

              <div className="align_center">
                <button className="btn btn-start" onClick={toogleStart}>
                  Bắt đầu
                </button>
              </div>
            </div>
          )}

          <div className="sidebar-right align_center">
            {listAnswer !== null ? (
              <div className="result">
                Kết quả:
                {listAnswer + "/" + listQuestion.length}
              </div>
            ) : null}

            <p className="">Bạn có muốn chinh phục đề thi này</p>
            <button className="btn btn-already">Có, tôi muốn!</button>
            <button className="btn btn-share">Chia sẻ Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
