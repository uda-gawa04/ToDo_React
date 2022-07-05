import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // 入力した値のステート化
  const [todoText, setTodoText] = useState("");
  // 未完了のリストを格納する変数
  const [incompTodos, setIncompTodos] = useState([]);
  // 完了のリストを格納する変数
  const [compTodos, setCompTodos] = useState([]);

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

  // 削除ボタンに対する設定
  const onClickDelete = (index) => {
    const newTodos = [...incompTodos];
    // 配列から削除する
    newTodos.splice(index, 1);
    setIncompTodos(newTodos);
  };

  const onClickDelete2 = (index) => {
    const newTodos1 = [...compTodos];
    newTodos1.splice(index, 1);
    setCompTodos(newTodos1);
  };

  // 完了ボタンの設定
  const onClickComp = (index) => {
    const newIncompTodos = [...incompTodos];
    newIncompTodos.splice(index, 1);

    const newConpTodos = [...compTodos, incompTodos[index]];

    setIncompTodos(newIncompTodos);
    setCompTodos(newConpTodos);
  };

  // 戻るボタンの設定
  const onClickBack = (index) => {
    // 完了エリアから削除
    const newCompTodos = [...compTodos];
    newCompTodos.splice(index, 1);
    // 未完了に追加
    const newIncompTodos = [...incompTodos, compTodos[index]];
    setCompTodos(newCompTodos);
    setIncompTodos(newIncompTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="MY TODO"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>add</button>
      </div>
      <div className="incomp-area">
        <p className="title">incomplete</p>
        <ul>
          {/* todoにはその内容、indexには何行目のボタンかの情報がそれぞれ入っている */}
          {incompTodos.map((todo, index) => {
            return (
              // key：レンダリングされている場合、何個目のやつなのかをしっかり把握するため
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComp(index)}>complete</button>
                <button onClick={() => onClickDelete(index)}>delete</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="comp-area">
        <p className="title">complete</p>
        <ul>
          {compTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>return</button>
                <button onClick={() => onClickDelete2(index)}>delete</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
