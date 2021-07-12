import React, { useState } from "react";
import next from "../../img/next-question-icon.png";
import back from "../../img/back-question-icon.png";
import three_dot from "../../img/3-dotted.png";
import clock from "../../img/clock-regular.svg";
import PopupFinish from "../../components/PopupFinish/PopupFinish";
import "./ItemQuestion.scss";
import Clock from "../Clock/Clock";
import { useHistory, useParams } from "react-router-dom";

function ItemQuestion(props) {
  let { quest } = useParams();
  if (quest === undefined || quest === "0") quest = 1;
  const history = useHistory();
  const [listAnswer, setListAnswer] = useState([]);
  const [timer, setTimer] = useState(0);
  const [listReview, setListReview] = useState([]);
  const [toogleQuestionTable, setToogleQuestionTable] = useState(false);
  const [popup, setPopup] = useState(false);
  const item = props.data[quest - 1];
  const getTimeDown = (data) => {
    setTimer(data);
  };
  function handleQuestion(number) {
    number < 1
      ? history.push("/")
      : number <= props.data.length
      ? history.push(`${"/itemquestion/" + number}`)
      : history.push(props.data.length);
  }
  function addAnwer(id, answer) {
    const obj = {
      id: id,
      answer: answer,
    };
    const tmpList = listAnswer.filter((item) => item.id !== id);
    tmpList
      ? setListAnswer([...tmpList, obj])
      : setListAnswer([...listAnswer, obj]);
    answer &&
      setTimeout(() => {
        handleQuestion(Number.parseInt(quest) + 1);
      }, 300);
  }
  function addReview(id, checked) {
    const obj = {
      id: id,
      checked: checked,
    };
    const tmpList = listReview.filter((item) => item.id !== id);
    tmpList
      ? setListReview([...tmpList, obj])
      : setListReview([...listReview, obj]);
  }
  function toogleTable() {
    setToogleQuestionTable(!toogleQuestionTable);
  }
  function finishExercise() {
    props.result(listAnswer);
    props.finish();
    props.getTime(seconds_to(2700 - props.time));
    history.push("/finish");
  }
  function finishSoon() {
    setPopup(!popup);
    props.getTime(timer);
  }
  function resultClass(arr1, arr2, item) {
    return (
      (arr1.filter((e) => e.id === item.id).length > 0 ? "done " : "") +
      (arr2.filter((e) => e.id === item.id && e.checked === true).length > 0
        ? "review"
        : "")
    );
  }
  function checked(arr, ele) {
    if (ele !== null)
      return (
        arr.filter((e) => e.id === item.id && e.answer === ele.result_answer)
          .length > 0
      );
    return arr.filter((e) => e.id === item.id && e.checked === true).length > 0;
  }
  const seconds_to = (sec) => {
    var hours = Math.floor(sec / 3600);
    hours >= 1 ? (sec = sec - hours * 3600) : (hours = "00");
    var min = Math.floor(sec / 60);
    min >= 1 ? (sec = sec - min * 60) : (min = "00");
    sec < 1 ? (sec = "00") : void 0;
    min.toString().length === 1 ? (min = "0" + min) : void 0;
    sec.toString().length === 1 ? (sec = "0" + sec) : void 0;
    return hours + ":" + min + ":" + sec;
  };
  return (
    <div className="item-question">
      <h4 className="item-question_title">{item.name}</h4>
      <div className="item-question_content">{item.question}</div>
      <div className="list-answer">
        {item.results.map((ele) => (
          <div
            className="item-question_answer flex-items-center radio_item"
            key={item.id + ele.name_answer}
          >
            <input
              defaultChecked={checked(listAnswer, ele)}
              type="radio"
              name={item.id}
              value={ele.result_answer}
              id={ele.result_answer}
              onClick={() => addAnwer(item.id, ele.result_answer)}
            />
            <label htmlFor={ele.result_answer}>
              {ele.name_answer}.{ele.result_answer}
            </label>
          </div>
        ))}
      </div>

      <div className="controls item-question_answer">
        <div className="exercise-controls flex-items-center">
          <div className=" exercise-controls_flex">
            <div className="countdown exercise-controls_flex">
              <img src={clock} alt="Đồng hồ" className="clock" />
              <Clock
                getTimeDown={getTimeDown}
                finish={finishExercise}
                clock={seconds_to}
              />
            </div>
            <div className="exercise-controls_flex">
              <input
                type="checkbox"
                id="seeback"
                checked={checked(listReview, null)}
                onChange={(e) => addReview(item.id, e.target.checked)}
              />
              <label htmlFor="seeback" className="seeback">
                Xem lại
              </label>
            </div>
          </div>
          <div className="exercise-controls_flex">
            {quest === 1 ? null : (
              <div
                className="btn-controls"
                onClick={() => handleQuestion(Number.parseInt(quest) - 1)}
              >
                <img src={back} alt="btn quay lại" />
              </div>
            )}
            {quest === props.data.length ? null : (
              <div
                className="btn-controls"
                onClick={() => handleQuestion(Number.parseInt(quest) + 1)}
              >
                <img src={next} alt="btn tiếp theo" />
              </div>
            )}
            <div className="btn-controls" onClick={toogleTable}>
              <img src={three_dot} alt="show list question" />
            </div>
          </div>
        </div>
        {toogleQuestionTable ? (
          <div className="question-table">
            <div className="question-table_top exercise-controls_flex">
              <span>Bấm vào câu muốn trả lời</span>

              <button className="btn btn-finish" onClick={finishSoon}>
                {listAnswer.length === props.data.length
                  ? "Nộp bài"
                  : "Nộp bài sớm"}
              </button>
            </div>
            <div className="question-table_list">
              {props.data.map((item, index) => (
                <div
                  className={
                    "question-table_item " +
                    resultClass(listAnswer, listReview, item)
                  }
                  key={item.id}
                  onClick={() =>
                    history.push(`${"/itemquestion/" + (index + 1)}`)
                  }
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      {popup && (
        <PopupFinish
          onOK={finishExercise}
          onClose={() => setPopup(!popup)}
          time={seconds_to(props.time)}
        />
      )}
    </div>
  );
}
export default ItemQuestion;
