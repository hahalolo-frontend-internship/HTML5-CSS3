import React, { useEffect, useState } from "react";
import "./Body.scss";
import icon_check from "../../img/icon-check.svg";
import icon_user from "../../img/user-solid.svg";
import ListQuestion from "../../components/ListQuestion/ListQuestion";
import Tutorial from "../../components/Tutorial/Tutorial";
import ItemQuestion from "../../components/ItemQuestion/ItemQuestion";
import FinishExam from "../../components/FinishExam/FinishExam";
import TopRank from "../../components/TopRank/TopRank";
import { useHistory } from "react-router-dom";

function Body(props) {
  const history = useHistory();
  //toogle
  const [tutorial, setTutorial] = useState(false);
  const [detailQuestion, setDetailQuestion] = useState(false);
  const [finish, setFinish] = useState(false);
  // result
  const [listQuestion, setListQuestion] = useState([]);
  const [answersTrue, setAnswersTrue] = useState(null);
  const [listAnswer, setListAnswer] = useState(null);
  const [time, setTime] = useState(0);
  console.log(listAnswer);
  function getTime(data) {
    setTime(data);
  }
  function toogleFinish() {
    setFinish(!finish);
    setDetailQuestion(false);
  }
  function toogleStart() {
    if (
      localStorage.getItem("isSignIn") === null ||
      localStorage.getItem("isSignIn") === undefined
    ) {
      history.push("/login");
    } else {
      setTutorial(!tutorial);
      setDetailQuestion(true);
    }
  }

  function resultAnswer(data) {
    let answer = 0;
    data.map((item) =>
      listQuestion.filter((e) =>
        e.id === item.id && e.result_true === item.answer ? (answer += 1) : null
      )
    );
    setAnswersTrue(answer);
    setListAnswer(data);
  }
  useEffect(() => {
    async function fetchQuestions() {
      const requestUrl = "http://localhost:5000/list_question";
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
              <ItemQuestion
                data={listQuestion}
                result={resultAnswer}
                finish={toogleFinish}
                getTime={getTime}
                time={time}
              />
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
              {tutorial ? (
                <Tutorial onClick={toogleStart} />
              ) : finish ? (
                <FinishExam
                  answer={answersTrue}
                  listQuestion={listQuestion}
                  time={time}
                />
              ) : (
                <ListQuestion data={listQuestion} onClick={toogleStart} />
              )}
            </div>
          )}
          <div className="sidebar-right align_center">
            {finish && <TopRank />}
            {!tutorial && detailQuestion ? null : !finish ? (
              <>
                <p className="">Bạn có muốn chinh phục đề thi này</p>
                <button className="btn btn-already" onClick={toogleStart}>
                  Có, tôi muốn!
                </button>
                <button className="btn btn-share">Chia sẻ Facebook</button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
