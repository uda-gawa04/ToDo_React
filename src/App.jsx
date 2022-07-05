import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>add</button>
      </div>
      <div>
        <p>未完了</p>
        <ul>
          <li></li>
          <button>完了</button>
          <button>削除</button>
        </ul>
      </div>
      <div>
        <p>完了</p>
        <ul>
          <li></li>
          <button>戻す</button>
        </ul>
      </div>
    </>
  );
};
