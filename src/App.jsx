import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // 入力した値のステート化
  const [todoText, setTodoText] = useState("");
  // 未完了のリストを格納する変数
  const [incompTodos, setIncompTodos] = useState(["aa", "bb"]);
  // 完了のリストを格納する変数
  const [compTodos, setCompTodos] = useState(["cc"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // 入力した文字を未完了のリストに追加する
  const onClickAdd = () => {
    // 空文字の時は追加できないようにする
    if (todoText === "") return;
    // 配列にテキストを設定するだけでステートが変更　→　ステート変更により再レンダリング
    const newTodos = [...incompTodos, todoText];
    setIncompTodos(newTodos);
    setTodoText("");
  };
  return (
    <>
      <div className="input-area">
        <input
          placeholder="Enter TODO"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>add</button>
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
