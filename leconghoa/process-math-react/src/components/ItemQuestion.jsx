import React, { useEffect, useState } from "react";
import next from "../img/next-question-icon.png";
import back from "../img/back-question-icon.png";
import three_dot from "../img/3-dotted.png";
import clock from "../img/clock-regular.svg";
function ItemQuestion(props) {
  const [curQuestion, setCurQuestion] = useState(0);
  const [listAnswer, setListAnswer] = useState([]);
  const [listReview, setListReview] = useState([]);
  const [toogleQuestionTable, setToogleQuestionTable] = useState(false);
  const item = props.data[curQuestion];
  function handleQuestion(number) {
    number < 0
      ? setCurQuestion(0)
      : number < props.data.length
      ? setCurQuestion(number)
      : setCurQuestion(props.data.length - 1);
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
        handleQuestion(curQuestion + 1);
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
  return (
    <div className="item-question">
      <h4 className="item-question_title">{item.name}</h4>
      <div className="item-question_content">{item.question}</div>
      <div className="list-answer">
        {item.results.map((ele) => (
          <div
            className="item-question_answer flex-items-center"
            key={item.id + ele.name_answer}
          >
            <input
              checked={checked(listAnswer, ele)}
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
              <span>45:00</span>
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
            {curQuestion === 0 ? null : (
              <div
                className="btn-controls"
                onClick={() => handleQuestion(curQuestion - 1)}
              >
                <img src={back} alt="btn quay lại" />
              </div>
            )}
            {curQuestion === props.data.length - 1 ? null : (
              <div
                className="btn-controls"
                onClick={() => handleQuestion(curQuestion + 1)}
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
              <button className="btn btn-finish" onClick={finishExercise}>
                {curQuestion === props.data.length - 1
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
                  onClick={() => setCurQuestion(index)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default ItemQuestion;
