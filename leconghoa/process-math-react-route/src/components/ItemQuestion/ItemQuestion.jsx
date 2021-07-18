import {
  Box,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import PopupFinish from "../../components/PopupFinish/PopupFinish";
import three_dot from "../../img/3-dotted.png";
import back from "../../img/back-question-icon.png";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import next from "../../img/next-question-icon.png";
import Clock from "../Clock/Clock";
import "./ItemQuestion.scss";
import makeStyles from "@material-ui/core/styles/makeStyles";
const styles = makeStyles({
  radio_btn: {
    margin: "8px 0",
    padding: 8,
    border: "1px solid #d9d9d9",
    borderRadius: 6,
    transition: "all .5s",
    "&:hover": {
      background: "#bbe2ff",
    },
  },
  checkbox_btn: {
    height: "30px",
    margin: 0,
  },
  haha: {
    background: "red",
  },
});
function ItemQuestion(props) {
  const classes = styles();
  const history = useHistory();
  let { quest } = useParams();
  if (quest === undefined || quest === "0") quest = 1;
  const item = props.data[quest - 1];
  //toogle
  const [dropdown, setDropdown] = useState(false);
  const [popup, setPopup] = useState(false);
  //result
  const [listAnswer, setListAnswer] = useState([]);
  const [timer, setTimer] = useState(0);
  const [listReview, setListReview] = useState([]);

  const getTimeDown = (data) => {
    setTimer(data);
  };
  function handleQuestion(number) {
    number < 1
      ? history.push("/itemquestion/")
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
    setDropdown(!dropdown);
  }
  function finishExercise() {
    props.result(listAnswer);
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
      <Box component="h4">{item.name}:</Box>
      <Typography>{item.question}</Typography>
      <RadioGroup>
        {item.results.map((ele, index) => (
          <FormControlLabel
            className={classes.radio_btn}
            onChange={() => addAnwer(item.id, ele.result_answer)}
            checked={checked(listAnswer, ele)}
            key={index}
            value={ele.result_answer}
            control={<Radio color="primary" />}
            label={
              <>
                {ele.name_answer}.{ele.result_answer}
              </>
            }
          />
        ))}
      </RadioGroup>
      <Box className={classes.haha}>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <AccessTimeIcon fontSize="small" />
              <Clock
                getTimeDown={getTimeDown}
                finish={finishExercise}
                clock={seconds_to}
              />
            </Box>
            <FormControlLabel
              // className={classes.checkbox_btn}
              onChange={(e) => addReview(item.id, e.target.checked)}
              checked={checked(listReview, null)}
              control={<Checkbox color="primary" />}
              label={"Xem lại"}
            />
          </Box>
          <Box display="flex" justifyContent="space-between">
            {Number.parseInt(quest) === 1 ? null : (
              <div
                className="btn-controls"
                onClick={() => handleQuestion(Number.parseInt(quest) - 1)}
              >
                <img src={back} alt="btn quay lại" />
              </div>
            )}
            {Number.parseInt(quest) === props.data.length ? null : (
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
          </Box>
        </Box>

        {dropdown ? (
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
      </Box>

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
