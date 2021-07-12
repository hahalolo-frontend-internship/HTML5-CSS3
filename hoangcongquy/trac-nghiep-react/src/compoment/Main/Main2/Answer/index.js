import React, { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Question";

function Anwers() {
  /////////
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:3000/question");
      setData(result.data);
    }
    fetchData();
  }, []); 

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    // pick 2 questions at random
    //side effect
    function randomData() {
      if (data.length > 0) {
        if (questions.length >= 2) return;
        const key = Math.floor(Math.random() * data.length);
        const question = data[key];
        data.splice(key, 1);
        setQuestions([...questions, question]);
      }
    }
    randomData();
  }, [data, questions]);
  /////clock
  // const [seconds, setSeconds] = useState(900);
  // const [secondsIncrease, setSecondsIncrease] = useState(0);
  // useEffect(() => {
  //   if (seconds > 0) {
  //     var clockInterval = setInterval(() => {
  //       setSeconds(seconds - 1);
  //       setSecondsIncrease(secondsIncrease + 1);
  //     }, 1000);
  //   }
  //   return () => {
  //     clearInterval(clockInterval);
  //   };
  // }, [seconds, secondsIncrease]);
  ///
  const [selectedRadio, setSelectedRadio] = useState([]);
  function handleChange(answer) {
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

  const [result, setResult] = useState("");
  const [poni, setPoni] = useState("");
  const [dialog, setDialog] = useState(false);
  const arr = [];

  function handleSubmit() {
    // clearInterval(secondsIncrease);
    setDialog(true);
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

  // const time = secondsToTime(seconds);
  // const timeall = `${time.h}:${time.m}:${time.s}`;

  function secondsToTime(secs) {
    let hours = Math.floor(secs / 3600);

    let divisor_for_minutes = secs % 3600;
    let minutes = Math.floor(divisor_for_minutes / 60);

    let seconds = divisor_for_minutes % 60;
    let obj = {
      h: `0${hours}`.slice(-2),
      m: `0${minutes}`.slice(-2),
      s: `0${seconds}`.slice(-2),
    };
    return obj;
  }

  return (
    <div>
      <Question
        questions={questions}
        onHandleChange={handleChange}
        onSubmit={handleSubmit}
        // timeall={timeall}
        poni={poni}
        // secondsIncrease={secondsIncrease}
        // seconds={seconds}
        dialog={dialog}
        result={result}
      />
    </div>
  );
}

export default Anwers;
