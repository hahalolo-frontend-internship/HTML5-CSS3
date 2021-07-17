import React, { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Question";
function Exercise() {

  const [data, setData] = useState([]);
  const [result, setResult] = useState("");
  const [poni, setPoni] = useState("");

  const arr = [];
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:3000/question");
      setData(result.data);
    }
    fetchData();
  }, []);

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    //side effect
    function randomData() {
      if (data.length > 0) {
        if (questions.length >= 4) return;
        const key = Math.floor(Math.random() * data.length);
        const question = data[key];
        data.splice(key, 1);
        setQuestions([...questions, question]);
      }
    }
    randomData();
  }, [data, questions]);

  function handleSubmit() {
    selectedRadio.map((i) => {
      if (i.result === "true") {
        arr.push(i.result);
      }
      if (arr.length > 0) {
        setResult(arr.length + "/" + questions.length);
        const point = Number((10 / questions.length) * arr.length);
        setPoni(point.toFixed(2));
      } else {
        setResult("0/" + questions.length);
        setPoni("0");
      }
      return "0";
    });
  }
  //clock
  const [selectedRadio, setSelectedRadio] = useState([]);

  function handleChange(answer) {
    console.log("a", answer);
    if (selectedRadio.length > 0) {
      const index = selectedRadio.findIndex(
        (item) => item.id_answer === answer.id_answer
      );
      if (index >= 0) {
        selectedRadio[index] = answer;
        setSelectedRadio([...selectedRadio]);
      } else {
        setSelectedRadio([...selectedRadio, answer]);
      }
    } else {
      setSelectedRadio([...selectedRadio, answer]);
    }
  }

  return (
    <div>
      <Question
        questions={questions}
        onHandleChange={handleChange}
        onSubmit={handleSubmit}
        poni={poni}
        result={result}
      />
    </div>
   
  );
}

export default Exercise;
