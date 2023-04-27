import { useEffect } from "react";

import "./CounterDisplay.css";

const CounterDisplay = ({ counter }) => {
  // useEffect(() => {
  //   console.log("CounterDisplay > props > counter: ", counter);
  // }, [counter]);

  return <div className="counter-display">{counter}</div>;
};

export default CounterDisplay;
