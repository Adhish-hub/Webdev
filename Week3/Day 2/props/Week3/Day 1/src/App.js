import React, { useState } from "react";
import "./App.css";

function App() {
  const [Count, setCount] = useState(0);
  return (
    <div className="container m-5">
      <div className="card text-center m-5">
        <div className="card-body">
          <h1>Counter App</h1>
          <div className="m-5">
            <h2 className="m-5">{Count}</h2>
            <button className="btn btn-success mx-3" onClick={() => setCount(Count + 1)}>Increment</button>
            <button className="btn btn-danger mx-3" onClick={() => setCount(Count - 1)} disabled={Count === 0}>Decrement</button>
            <button className="btn btn-secondary mx-3" onClick={() => setCount(0)} disabled={Count === 0}>Reset</button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
