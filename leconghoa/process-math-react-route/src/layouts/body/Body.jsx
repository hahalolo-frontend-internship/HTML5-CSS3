import React, { useEffect, useState } from "react";
import "./Body.scss";
import icon_check from "../../img/icon-check.svg";
import icon_user from "../../img/user-solid.svg";
import ListQuestion from "../../components/ListQuestion/ListQuestion";
import Tutorial from "../../components/Tutorial/Tutorial";
import ItemQuestion from "../../components/ItemQuestion/ItemQuestion";
import FinishExam from "../../components/FinishExam/FinishExam";
import TopRank from "../../components/TopRank/TopRank";
import { Switch, Route, useHistory } from "react-router-dom";
function Body(props) {
  const history = useHistory();
  //toogle

  const [finish, setFinish] = useState(false);
  // result
  const [listQuestion, setListQuestion] = useState([]);
  const [answersTrue, setAnswersTrue] = useState(null);
  // const [listAnswer, setListAnswer] = useState(null);
  const [time, setTime] = useState(0);
  function getTime(data) {
    setTime(data);
  }
  function toogleFinish() {
    setFinish(!finish);
  }
  function toogleStart1() {
    if (
      localStorage.getItem("isSignIn") === null ||
      localStorage.getItem("isSignIn") === undefined
    ) {
      history.push("/login");
    } else {
      history.push("/tutorial");
    }
  }
  function toogleStart2() {
    history.push("/itemquestion");
  }

  function resultAnswer(data) {
    let answer = 0;
    data.map((item) =>
      listQuestion.filter((e) =>
        e.id === item.id && e.result_true === item.answer ? (answer += 1) : null
      )
    );
    setAnswersTrue(answer);
    // setListAnswer(data);
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
  const path = window.location.pathname;
  const str = "/tutorial";
  function check(str1, str2) {
    if (str1.includes(str2) || str1 === "/") return true;
    else return false;
  }
  return (
    <div className="main">
      <div className="grid wide">
        <div className="row no-gutters">
          <div className="c-9 main-question">
            <Switch>
              <Route
                path={`/itemquestion/:quest`}
                render={() =>
                  listQuestion.length > 0 ? (
                    <ItemQuestion
                      data={listQuestion}
                      result={resultAnswer}
                      finish={toogleFinish}
                      getTime={getTime}
                      time={time}
                    />
                  ) : (
                    <ListQuestion data={listQuestion} onClick={toogleStart1} />
                  )
                }
              ></Route>
              <Route
                path={`/itemquestion`}
                render={() =>
                  listQuestion.length > 0 ? (
                    <ItemQuestion
                      data={listQuestion}
                      result={resultAnswer}
                      finish={toogleFinish}
                      getTime={getTime}
                      time={time}
                    />
                  ) : (
                    <h3 className="error align_center">Không có câu hỏi </h3>
                  )
                }
              ></Route>
            </Switch>
            {check(path, str) && (
              // Khung số câu , số phút
              <>
                <h4 className="title-test">
                  Đề kiểm tra 1 tiết môn Toán Lớp 6
                </h4>
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
              </>
            )}

            <Route path="/tutorial">
              <Tutorial onClick={toogleStart2} />
            </Route>
            <Route
              path="/finish"
              render={() =>
                answersTrue > 0 ? (
                  <FinishExam
                    answer={answersTrue}
                    listQuestion={listQuestion}
                    time={time}
                  />
                ) : (
                  <ListQuestion data={listQuestion} onClick={toogleStart1} />
                )
              }
            ></Route>
            <Route
              path="/"
              exact
              render={() => (
                <ListQuestion data={listQuestion} onClick={toogleStart1} />
              )}
            />
          </div>
          <div className="sidebar-right align_center">
            {path.includes("/finish") && <TopRank />}
            {path === "/" && (
              <>
                <p className="">Bạn có muốn chinh phục đề thi này</p>
                <button className="btn btn-already" onClick={toogleStart1}>
                  Có, tôi muốn!
                </button>
                <button className="btn btn-share">Chia sẻ Facebook</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
