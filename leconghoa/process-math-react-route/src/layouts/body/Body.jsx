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
  // result
  const [users, setUsers] = useState([]);
  const [random, setRandom] = useState(0);
  const [listQuestion, setListQuestion] = useState([]);
  const [answersTrue, setAnswersTrue] = useState(0);
  // const [listAnswer, setListAnswer] = useState(0);
  const [time, setTime] = useState(0);

  function getTime(data) {
    setTime(data);
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

    let user = JSON.parse(localStorage.getItem("isSignIn"));
    const score = (answer / listQuestion.length) * 10;
    user.score < score
      ? updateScore(user.id, Number.parseFloat(score), 2700 - time)
      : user.score === score &&
        user.time > 2700 - time &&
        updateScore(user.id, Number.parseFloat(score), 2700 - time);
    setRandom(Math.random());
  }
  async function updateScore(id, score, time) {
    let demo = await fetch(`http://localhost:5000/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        score: score,
        time: time,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    demo = await demo.json();
    localStorage.setItem("isSignIn", JSON.stringify(demo));
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
  useEffect(() => {
    async function fetchUsers() {
      const requestUrl = "http://localhost:5000/users";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setUsers(responseJSON);
    }
    fetchUsers();
  }, [random]);
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
                    <span>{listQuestion.length} câu</span>
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
            <Route path="/finish">
              <FinishExam
                answer={answersTrue}
                listQuestion={listQuestion}
                time={time}
              />
            </Route>
            <Route
              path="/"
              exact
              render={() => (
                <ListQuestion data={listQuestion} onClick={toogleStart1} />
              )}
            />
          </div>
          <div className="sidebar-right align_center">
            {path.includes("/finish") && <TopRank users={users} />}
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
