import React, { useContext } from "react";
import Question from "./Question";
import Notify from "./Notify";
import Button from "@material-ui/core/Button";
import { useButton } from "../../../common/Btn";
import { mainExam } from "../index";
// import InputWithLabel from "../../../common/InputWithLabel";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Checkbox from "@material-ui/core/Checkbox";
const useStyle = makeStyles({
  Button: {
    width: "100px",
    height: "28px",
    fontSize: "18px",
  },
  ButtonNav: {
    width: "60px",
  },
  checkbox: {
    color: "orange",
  },
});
export default function ExamContainer({
  flagListQuestion,
  handleFlagListQuestion,
  handleChangeChecked,
  onChangeConfirm,
  openconfirm,
  prevPagination,
  nextPagination,
  chooseQuestion,
  reviews,
  doneExam,
  count,
  activeAnswer,
}) {
  // classes
  const classes = useStyle();
  const classesBtn = useButton();

  // context
  let context = useContext(mainExam);

  return (
    <form onSubmit={doneExam}>
      {context.dataTest.map(
        (item, index) =>
          index === count && (
            <Question key={`question${item.id}`} dataItem={item} />
          )
      )}

      {openconfirm && <Notify />}
      {context.timeDown === 0 && <Notify />}

      <div className="choose-question">
        <div className="choose-question__header">
          <div className="review">
            <Button
              className={clsx(classesBtn.Button, classes.Button)}
              onClick={onChangeConfirm}
              size="small"
            >
              NỘP BÀI
            </Button>
            {context.dataTest.map(
              (item, index) =>
                index === count && (
                  <FormControlLabel
                    key={item.id}
                    checked={reviews.includes(item.id)}
                    control={
                      <Checkbox
                        className={classes.checkbox}
                        id="review"
                        onChange={() => handleChangeChecked(item.id)}
                      />
                    }
                    label="Xem Lại"
                  />
                )
            )}
          </div>
          <div className="exam__pagination">
            <Button
              className={clsx(classesBtn.Button, classes.ButtonNav)}
              size="small"
              onClick={prevPagination}
              disabled={count > 0 ? false : true}
            >
              <i className="fas fa-arrow-left"></i>
            </Button>
            <Button
              className={clsx(classesBtn.Button, classes.ButtonNav)}
              size="small"
              onClick={nextPagination}
              disabled={count < context.dataTest.length - 1 ? false : true}
            >
              <i className="fas fa-arrow-right"></i>
            </Button>
            <Button
              className={clsx(classesBtn.Button, classes.ButtonNav)}
              size="small"
              onClick={handleFlagListQuestion}
            >
              <i className="fas fa-ellipsis-h"></i>
            </Button>
          </div>
        </div>
        {flagListQuestion && (
          <div className="choose-question__list">
            {context.dataTest.map((item, index) => (
              <Typography
                component="span"
                id={reviews.includes(item.id) ? "active" : ""}
                className={activeAnswer.includes(item.id) ? "active" : ""}
                key={index}
                onClick={() => chooseQuestion(index)}
              >
                {index + 1}
              </Typography>
            ))}
          </div>
        )}
      </div>
    </form>
  );
}
