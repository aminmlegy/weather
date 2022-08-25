import React, { useState, useContext } from "react";
import TodoStyle from "./todo.module.css";
import { context } from "../../context/TodoContext";
export default function AddItem() {
  let [saveData, setData] = useState("");
  let { newTask } = React.useContext(context);
  function handle(e) {
    e.preventDefault();
    if (saveData.trim() !== "") {
      newTask({ title: saveData, id: Math.floor(Math.random() * 100000) });
    }
    setData("");
  }
  return (
    <div className={TodoStyle.wrap}>
      <h2 className={TodoStyle.Add}>Add Task</h2>
      <form className={TodoStyle.input} onSubmit={handle}>
        <div className={TodoStyle.groub}>
          <input
            className={TodoStyle["form-input"]}
            value={saveData}
            onChange={(e) => setData(e.target.value)}
            placeholder='Add...'
            autoFocus='true'
          />
        </div>
        <button type='submit' className={TodoStyle.btn}>
          ⨮
        </button>
      </form>
    </div>
  );
}
