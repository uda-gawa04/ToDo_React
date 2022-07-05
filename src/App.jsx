import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="Enter TODO" />
        <button>add</button>
      </div>
      <div className="incomp-area">
        <p className="title">incomplete</p>
        <ul>
          <div className="list-row">
            <li></li>
            <button>complete</button>
            <button>delete</button>
          </div>
        </ul>
      </div>
      <div className="comp-area">
        <p className="title">complete</p>
        <ul>
          <div className="list-row">
            <li></li>
            <button>return</button>
          </div>
        </ul>
      </div>
    </>
  );
};
