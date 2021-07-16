import React, { useState } from "react";
import PropTypes from "prop-types";
import Dialog from "./Dialog";
import Rank from "./Rank";
import Answer from "../Answer";
import useClock from "../../../../hooks/Clock";

import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

Question.propTypes = {
  questions: PropTypes.array,
  onHandleChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

Question.propsDefault = {
  questions: [],
  onHandleChange: null,
  onSubmit: null,
};
const useStyles = makeStyles({
  breadcrumb: {
    background: "#4aa7c3a6",
    padding: "15px",
    fontWeight: "500",
  },
  advertisement: {
    border: "1px solid",
    padding: "40px !important",
    "border-radius": "15px",
    margin: "40px 0",
    "min-height": "480px",
  },
  type_title: {
    display: "flex",
    "justify-content": "space-between",
    border: "1px solid",
    padding: "10px",
    "background-color": "cornflowerblue",
    "border-radius": "5px",
    margin: "20px 0px",
  },
  pos: {
    margin: "10px 0",
  },
  note: {
    color: "red",
  },
  btn: {
    "text-align": "center",
    position: "relative",
    marginTop: "30px",
  },
});
function Question(props) {
  const {
    questions,
    onHandleChange,
    onSubmit,
    dialog,
    result,
    poni,
    onClose,
    isSubmitting,
  } = props;

  function handleChange(answer) {
    if (onHandleChange) {
      // console.log("ansawr", answer);
      onHandleChange(answer);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;
    onSubmit();
  }

  const classes = useStyles();

  //customhooks clock
  const { timeall, secondsIncrease } = useClock();
  const [secondsPause, setSecondsPause] = useState();

  const timer = () => {
    clearInterval(secondsIncrease);
    setSecondsPause(secondsIncrease);
    // console.log(secondsIncrease);
  };
  // ///
  // function handleClick(event){
  //   if (!event.detail || event.detail === 1) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  return (
    <Container>
      <nav className={classes.breadcrumb}>
        <ul>
          <li>
            TRANG CHỦ<span> / </span> ĐỀ THI HỌC KỲ<span> / </span>Tiếng Anh
            <span> / </span>Lớp 10
          </li>
        </ul>
      </nav>
      <Grid container spacing={2}>
        <Grid item xs={8} className={classes.advertisement}>
          <h2>Đề kiểm tra 15 phút môn Tiếng Anh Lớp 10</h2>
          <div className={classes.type_title}>
            <div>
              <input type="checkbox" defaultChecked />
              <span> {questions.length} câu</span>
            </div>
            <div>
              <p>Thời gian: {timeall}</p>
            </div>
          </div>
          <div className={classes.question}>
            <form onSubmit={handleSubmit}>
              {questions.map((question, key) => {
                return (
                  <React.Fragment key={question.id_question}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography className={classes.title} variant="h5">
                          <i> Câu hỏi: {key + 1}</i>
                        </Typography>
                        <Typography className={classes.pos}>
                          {question.content}
                        </Typography>
                        <Answer
                          answer={question.Answers}
                          question={question}
                          handleChange={handleChange}
                        />
                        <Typography className={classes.note}>
                          Hãy suy nghỉ kỹ và trả lời câu hỏi
                        </Typography>
                      </CardContent>
                    </Card>
                  </React.Fragment>
                );
              })}
              <div className={classes.btn}>
                {questions.length > -1 ? (
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    value="Nộp Bài"
                    onClick={timer}
                    disabled={isSubmitting}
                  >
                    Nộp bài
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>
        </Grid>
        <Grid item xs={4} className={classes.advertisemen_rank}>
          <Rank />
        </Grid>
      </Grid>
      {dialog && (
        <Dialog
          result={result}
          poni={poni}
          secondsPause={secondsPause}
          onClose={onClose}
        />
      )}
    </Container>
  );
}

export default Question;
