import React from "react";
import "./Question.scss";
function Question(props) {
  const detail = props.detail;
  return (
    <div className="item-question spacing_question">
      <h4 className="item-question_title">{detail.name}</h4>
      <div className="item-question_content">{detail.question}</div>
    </div>
  );
}

export default Question;
