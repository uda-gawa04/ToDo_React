import React from "react";

export const CompTodo = (props) => {
  const { todos, back, delete2 } = props;

  return (
    <div className="comp-area">
      <p className="title">complete</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => back(index)}>return</button>
              <button onClick={() => delete2(index)}>delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
