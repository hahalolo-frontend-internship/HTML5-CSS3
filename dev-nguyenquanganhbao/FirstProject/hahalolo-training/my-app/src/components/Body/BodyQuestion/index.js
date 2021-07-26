import React, { createContext, useEffect, useState } from "react";
import ControllerQuestion from "./ControlleQuestion";
import DetailQuestion from "./DetailQuestion";
import DialogResult from "./DialogResult";
import DialogWarning from "./DialogWarning";
import Spinner from "./Loading";
import QuestionItems from "./QuestionItems";

export const contextBodyQuestion = createContext();

function BodyQuestion(props) {
  const {
    handleEndClick,
    triggerUpdateListResult,
    listResult,
    triggerAddResult,
    triggerGetListQuestion,
    listQuestion,
    StatusFlags,
    selectQuestion,
    addSelectQuestion,
    reSetSelectQuestion,
    stopTime,
    resetStopTime,
    timeOut,
    reSetTimeOut,
    getResult,
    resetResult,
    result,
  } = props;

  useEffect(() => {
    triggerGetListQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [count, setCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [warning, setWarning] = useState(false);

  const handleGetAnswerChange = (data) => {
    addSelectQuestion(data);

    if (count < listQuestion.length - 1) {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 300);
    }
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (selectQuestion.length < 10) {
      setWarning(true);
    } else {
      setOpenModal(true);
      stopTime();
      getResult();
    }
  };

  const handleWarningBoxSubmit = () => {
    setOpenModal(true);
    stopTime();
    setWarning(false);
    getResult();
  };

  const handleCloseWarning = () => {
    setWarning(false);
  };

  //Xong
  const closeResultModalClick = () => {
    setOpenModal(false);
    handleEndClick(true);
    updateListResult();
    setOpenModal(false);
    reSetSelectQuestion([]);
    resetStopTime();
    reSetTimeOut();
    resetResult();
  };

  const updateListResult = async () => {
    let ramdomID = Math.random().toString(36).substring(7);
    const user = JSON.parse(localStorage.getItem("user-info"));
    let data = {
      id: ramdomID,
      id_user: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      timeOut: timeOut,
      scores: result.scores,
    };

    let check = listResult.find((item) => item.id_user === user.id);

    function updateListResult() {
      let data1 = {
        scores: data.scores,
        timeOut: data.timeOut,
      };

      triggerUpdateListResult(check.id, data1);
    }

    if (check) {
      if (data.scores > check.scores) {
        updateListResult();
      } else {
        if (data.scores === check.scores) {
          if (data.timeOut > check.timeOut) {
            updateListResult();
          }
        }
      }
    } else {
      triggerAddResult(data);
    }
  };

  const prevQuestion = () => {
    if (count > 0) setCount((count) => count - 1);
  };

  const nextQuestion = () => {
    if (count < listQuestion.length - 1) {
      setCount((count) => count + 1);
    }
  };

  const handleSelectQuestionClick = (index) => {
    setCount(index);
  };

  if (StatusFlags.isLoading) {
    return (
      <div className="body-question">
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="body-question">
        <DetailQuestion />

        <div className="body-question__list">
          <form className="body-question__form" onSubmit={handleQuestionSubmit}>
            {listQuestion.map(
              (item, index) =>
                index === count && (
                  <QuestionItems
                    handleGetAnswerChange={handleGetAnswerChange}
                    key={item.id}
                    itemQuestion={item}
                    selectQuestion={selectQuestion}
                  />
                )
            )}

            <ControllerQuestion
              prevQuestion={prevQuestion}
              nextQuestion={nextQuestion}
              handleSelectQuestionClick={handleSelectQuestionClick}
              listQuestion={listQuestion}
              selectQuestion={selectQuestion}
              count={count}
            />
          </form>

          <DialogWarning
            handleCloseWarning={handleCloseWarning}
            handleWarningBoxSubmit={handleWarningBoxSubmit}
            listQuestion={listQuestion}
            warning={warning}
            selectQuestion={selectQuestion}
          />

          {openModal && (
            <DialogResult
              openModal={openModal}
              closeResultModalClick={closeResultModalClick}
              listQuestion={listQuestion}
              selectQuestion={selectQuestion}
              timeOut={timeOut}
              result={result}
            />
          )}
        </div>
      </div>
    );
  }
}

export default BodyQuestion;
