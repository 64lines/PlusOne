import React, { useState } from "react";
import reload from "./reload.png";
import "./App.css";
import { loadCount } from "./App.utils";

function App() {
  const [count, setCount] = useState<number>(loadCount());

  const handlePlusOne = () => {
    setCount(count + 1);
  }

  const handleMinusOne = () => {
    count > 0 ? setCount(count - 1) : setCount(count);
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="counter-container">
          <span className="counter">{count}</span>
        </div>
        <div className="plus-one-button button" onClick={handlePlusOne}>+1</div>
        <div className="minus-one-button button" onClick={handleMinusOne}>-1</div>
        <div className="reset-button button" onClick={handleReset}>
          <img src={reload} className="reload-image" alt="Reload"/>
        </div>
      </header>
    </div>
  );
}

export default App;
