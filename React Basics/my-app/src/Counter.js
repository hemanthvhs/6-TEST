import React, { useState } from "react";
import "./Counter.css";

function Counter({ step = 1 }) {
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <h3>Current Count: {count}</h3>
      <button onClick={() => setCount(count + step)}>Step By {step}</button>
    </div>
  );
}

export default Counter;
