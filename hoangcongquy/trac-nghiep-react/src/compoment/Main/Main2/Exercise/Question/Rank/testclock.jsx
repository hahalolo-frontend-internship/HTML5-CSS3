import React, { useContext, useEffect, useState } from "react";
import { DataApp } from "../../../App";
import { format_second_to_minutes } from "../../../helpers";

const Clock = (props) => {
  const stateGlobal = useContext(DataApp);
  const [seconds, setSeconds] = useState(2700);

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const timer = seconds;

      if (timer > 0) setSeconds(timer - 1);
    }, 1000);

    stateGlobal.setTimeCountDown(seconds);

    if (seconds === 0) {
      props.handleFinishV2();
      stateGlobal.setTimePause(0)
    }

    return () => {
      clearInterval(clockInterval);
    };
  }, [seconds]);



/////clock
// const [secondsIncrease, setSecondsIncrease] = useState(0);
//   const [seconds, setSeconds] = useState(2700);
//   useEffect(() => {
//     if (seconds > 0) {
//       const clockInterval = setInterval(() => {
//         setSeconds(seconds - 1);
//         setSecondsIncrease(secondsIncrease + 1);
//       }, 1000);
//     }
//     return () => {
//       clearInterval(clockInterval);
//     };
//   }, [seconds, secondsIncrease]);
//   const time = secondsToTime(seconds);
//   const timeall = `${time.h}:${time.m}:${time.s}`;
  
//   function secondsToTime(secs) {
//    let hours = Math.floor(secs / 3600);

//    let divisor_for_minutes = secs % 3600;
//    let minutes = Math.floor(divisor_for_minutes / 60);

//    let seconds = divisor_for_minutes % 60;
//    let obj = {
//      h: `0${hours}`.slice(-2),
//      m: `0${minutes}`.slice(-2),
//      s: `0${seconds}`.slice(-2),
//    };
//    return obj;
//  }




  return <>{format_second_to_minutes(seconds)}</>;
};

export default Clock;