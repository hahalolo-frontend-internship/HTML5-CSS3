import React from "react";
import Question from "./Question";
function ListQuestion(props) {
  const data = props.data;
  return (
    <div className="list-question">
      {data.map((item, index) => (
        <Question key={index} detail={item} />
      ))}
    </div>
  );
}

export default ListQuestion;
