import React, { useState, useEffect } from "react";

export default function TimerFunctional() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <div>
      <h2>Timer in Functional Components</h2>
      <p>Time: {time} sec</p>
    </div>
  );
}
