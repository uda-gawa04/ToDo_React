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
  const { todoText, onChange, onClick, disabled } = props;

  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="MY TODO"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        add
      </button>
    </div>
  );
};
