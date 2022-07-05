import React from "react";

const style = {
  backgroundColor: "#799959",
  width: "400px",
  minHeight: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
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
      <br />
      {/* // 配列の長さが５を超えたら、<p>を表示させる */}
      {disabled}
      <p
        hidden={!disabled}
        style={{ color: "#663f22", textAlign: "center", fontWeight: "bold" }}
      >
        登録できるtodoは５個までです。頑張ってください。
      </p>
    </div>
  );
};
