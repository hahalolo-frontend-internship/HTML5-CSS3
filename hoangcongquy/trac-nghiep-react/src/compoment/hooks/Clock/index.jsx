
import { useState, useEffect } from "react";

function useClock() {
   const [seconds, setSeconds] = useState(900);
  const [secondsIncrease, setSecondsIncrease] = useState(0);


  useEffect(() => {
    if (seconds > 0) {
      
      var clockInterval = setInterval(() => {
        setSeconds(seconds - 1);
        setSecondsIncrease(secondsIncrease + 1);
      
      }, 1000);
    }
    return () => {
      clearInterval(clockInterval);
    };
  }, [seconds, secondsIncrease]);

  const time = secondsToTime(seconds);
  const timeall = `${time.h}:${time.m}:${time.s}`;

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

  return {timeall, secondsIncrease};
}

export default useClock;