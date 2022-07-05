import React from "react";

export const IncompTodo = (props) => {
  const { todos, onClickComp, onClickDelete } = props;
  return (
    <div className="incomp-area">
      <p className="title">incomplete</p>
      <ul>
        {/* todoにはその内容、indexには何行目のボタンかの情報がそれぞれ入っている */}
        {todos.map((todo, index) => {
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
  );
};
