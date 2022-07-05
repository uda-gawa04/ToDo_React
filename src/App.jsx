import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // 未完了のリストを格納する変数
  const [incompTodos, setIncompTodos] = useState(["aa", "bb"]);
  // 完了のリストを格納する変数
  const [compTodos, setCompTodos] = useState(["cc"]);

  return (
    <>
      <div className="input-area">
        <input placeholder="Enter TODO" />
        <button>add</button>
      </div>
      <div className="incomp-area">
        <p className="title">incomplete</p>
        <ul>
          {incompTodos.map((todo) => {
            return (
              // key：レンダリングされている場合、何個目のやつなのかをしっかり把握するため
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>complete</button>
                <button>delete</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="comp-area">
        <p className="title">complete</p>
        <ul>
          {compTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li></li>
                <button>return</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
