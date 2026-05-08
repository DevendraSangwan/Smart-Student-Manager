import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(5);
  return (
    <div className="card counter-card">
      <h2>Study Counter</h2>
      <p className="study-text">
        Total Study Sessions:
        <span> {count}</span>
      </p>
      <div className="btns">

        <button
          className="green"
          onClick={() => setCount(count + 1)}
        >Increment (+)</button>

        <button
          className="yellow"
          onClick={() => setCount(count - 1)}
        >Decrement (-)</button>
      </div>

      <button
        className="reset-btn"
        onClick={() => setCount(0)}
      >Reset</button>

    </div>
  );
}

export default Counter;