import React, { useState } from "react";
import "./Counter.styles.css";

const Counter = () => {
  const [state, setState] = useState({
    count: 10,
    theme: "dark",
  });

  const { count, theme } = state;
  const decCount = () => {
    if (count === 0) {
      alert("Count cant be negative");
      return;
    }
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  };
  const incCount = () => {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  };
  return (
    <div id="counter_body">
      <button className="counter-btn" onClick={decCount}>
        -
      </button>
      <span>
        {count}
        {theme}
      </span>
      <button className="counter-btn" onClick={incCount}>
        +
      </button>
    </div>
  );
};
export default Counter;
