import React from "react";
import Question from "../Question/Question";

function ListQuestion(props) {
  const data = props.data;
  return (
    <>
      <div className="list-question">
        {data.map((item, index) => (
          <Question key={index} detail={item} />
        ))}
      </div>
      <div className="align_center">
        <button className="btn btn-start" onClick={props.onClick}>
          Bắt đầu
        </button>
      </div>
    </>
  );
}

export default ListQuestion;
