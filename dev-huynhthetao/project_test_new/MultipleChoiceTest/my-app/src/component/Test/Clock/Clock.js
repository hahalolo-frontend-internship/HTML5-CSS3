import React, {useState, useEffect} from "react";
import './Clock.css';

export default function Clock(props) {
    const { getTimeDown, clock } = props;

    const [seconds, setSeconds] = useState(600);
    useEffect(() => {
      if (seconds > 0) {
        var clockInterval = setInterval(() => {
          setSeconds(seconds - 1);
         
        }, 1000);
      }
      getTimeDown(seconds);

      // if(onSubmit) {
      //   clearInterval(clockInterval);
      // }

      return () => {
        clearInterval(clockInterval);
      };
    }, [seconds]);
    return <div className="session__clock">{`${clock.h}:${clock.m}:${clock.s}`}</div>;
}

