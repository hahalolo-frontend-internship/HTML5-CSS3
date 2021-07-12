import React from "react";
import PropTypes from "prop-types";
import "./question.css"
import Dialog from "./Dialog";
import Rank from"./Rank"

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

function Question(props) {
  const { questions, onHandleChange, onSubmit, timeall, dialog, result, poni, secondsIncrease} = props;

  function handleChange(answer) {
    if (onHandleChange) {
      onHandleChange(answer);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;
    onSubmit();
    
  }
  
  return (
    <main className="main-content">
      <div className="breadcrumb">
        <nav className="container">
          <ol>
            <li className="breadcrumb-item">Trang chủ </li>
            <li className="breadcrumb-item">/ ĐỀ THI HỌC KỲ</li>
            <li className="breadcrumb-item">/ Tiếng Anh</li>
            <li className="breadcrumb-item">/ Lớp 10</li>
          </ol>
        </nav>
      </div>
      <div className="advertisement container">
        <div className="advertisement-all advertisement-left">
          <h2>Đề kiểm tra 15 phút môn Tiếng Anh Lớp 10</h2>
          <div className="advertisement-type_title">
            <div>
              <input type="checkbox" defaultChecked />
              <span> {questions.length} câu</span>
            </div>
            <div className="advertisement-clock">
              <p>Thời gian:</p>
              <i>
               {timeall}
              </i>
            </div>
          </div>
          <div className="advertisement-question">
            <form className="block_input" onSubmit={handleSubmit}>
              {questions.map((question, key) => {
                const answers = question.Answers;
                return (
                  <React.Fragment key={questions.id}>
                  <div className="block_input-qs">
                    <p key={question.id_question}>
                      <i> Câu hỏi: {key + 1}</i>
                    </p>
                    <p>{question.content}</p>

                    {answers &&
                      answers.map((answer) => {
                        return (
                          <div className="block_answer" key={answer.id_answer}>
                            <input
                              id={"id" + question.id_question + answer.id_answer}
                              type="radio"
                              name={"answer" + question.id}
                              value={answer.result}
                              onChange={() => handleChange(answer)}
                            />
                            <label
                              htmlFor={"id" + question.id_question + answer.id_answer}
                            >
                              <strong>{answer.alphabet}</strong>.{" "}
                              {answer.answer}
                            </label>
                            <br></br>
                          </div>
                        );
                      })}

                    <h5 className="note">Hãy suy nghỉ kỹ và trả lời câu hỏi</h5>
                  </div>
                </React.Fragment>
                );
              })}
              <div className="block_input-submit">
                {questions.length > -1 ? (
                  <input
                    className="input-submit"
                    type="submit"
                    value="Nộp bài"
                  />
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>
        </div>
        <Rank/>
      </div>
      {dialog && <Dialog result={result} poni={poni} timeall={timeall} 
      secondsIncrease={secondsIncrease}
      // seconds={seconds}
      />}
    </main>
  );
  
}

export default Question;
