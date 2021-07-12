import React, { useContext, useEffect, useState } from "react";
import { mainExam } from "../Main/index";
export default function Oclock() {
  // Context
  const context = useContext(mainExam);

  // list state
  const [timeNow, setTimeNow] = useState(600);

  // Đếm ngược time
  useEffect(() => {
    const timeInterval = setInterval(() => {
      if (timeNow > 0) setTimeNow((timeNow) => timeNow - 1);
    }, 1000);
    if (context.pause) {
      clearInterval(timeInterval);
    }
    context.getTimeDown(timeNow);
    return () => {
      clearInterval(timeInterval);
    };
  }, [timeNow, context]);
  return (
    <div className="main__left-alarm">
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d="M19.004 1c-.947 0-1.895.268-2.719.803 3.17 1.218 5.694 3.739 6.914 6.909.534-.823.801-1.77.801-2.717 0-2.761-2.236-4.995-4.996-4.995m-7.004 20c-4.411 0-8.001-3.59-8.001-8 0-4.413 3.59-8.001 8.001-8.001 4.412 0 8.002 3.588 8.002 8.001 0 4.41-3.59 8-8.002 8m10.002-8c0-5.522-4.475-10.001-10.002-10.001-5.523 0-10.001 4.479-10.001 10.001 0 4.316 3.087 10 10.001 10 6.93 0 10.002-5.693 10.002-10m-21.199-4.285c-.535-.824-.802-1.772-.802-2.718 0-2.757 2.233-4.995 4.991-4.995.948 0 1.896.268 2.721.803-3.172 1.217-5.692 3.739-6.91 6.91m12.196 4.285v-5h-1.999v6.998h5.999v-1.998h-4z" />
      </svg>
      <span>{context.formatTime(timeNow)}</span>
    </div>
  );
}
