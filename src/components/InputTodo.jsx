import React from "react";

const style = {
  backgroundColor: "#799959",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  bordeRadius: "8px"
};

export const InputTodo = (props) => {
  // 分割代入で、propsの中に入れて渡されたものを使いやすくする
  const { todoText, onChange, onClick } = props;

  return (
    <div style={style}>
      <input placeholder="MY TODO" value={todoText} onChange={onChange} />
      <button onClick={onClick}>add</button>
    </div>
  );
};
