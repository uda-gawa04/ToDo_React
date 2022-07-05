import React from "react";

export const InputTodo = (props) => {
  // 分割代入で、propsの中に入れて渡されたものを使いやすくする
  const { todoText, onChange, onClick } = props;

  return (
    <div className="input-area">
      <input placeholder="MY TODO" value={todoText} onChange={onChange} />
      <button onClick={onClick}>add</button>
    </div>
  );
};
