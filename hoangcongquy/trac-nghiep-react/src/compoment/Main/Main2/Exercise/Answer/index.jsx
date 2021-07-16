import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React from "react";
import { useState } from "react";

function Answer(props) {
  const { answer, handleChange, question} = props;

  const [ selected, setSlected] = useState("");
  const onChange = (e) => {
     setSlected(e.target.value);
  } 
  return (
    <RadioGroup name={`name ${question.id_question}`} value={selected} onChange={onChange}>
      {answer.map((item, key) => (
        <FormControlLabel 
        key={item.id_answer}
        value={item.answer}
        control={<Radio
        onChange={()=> handleChange(item)} />} 
        label={`${item.alphabet}. ${item.answer}`} 
        />
      ))}
    </RadioGroup>
  );
}

export default Answer;
