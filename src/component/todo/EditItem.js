import React, { useState, useContext, useEffect } from "react";
import TodoStyle from "./todo.module.css";
import { context } from "../../context/TodoContext";
export default function EditItem() {
  let [saveData, setData] = useState("");
  let { editTask, getTask } = React.useContext(context);
  useEffect(() => {
    if (getTask !== null) {
      setData(getTask.title);
    }
  }, [getTask]);
  function handle(e) {
    e.preventDefault();
    if (saveData.trim() !== "") {
      editTask({ title: saveData, id: getTask.id });
    }
  }
  return (
    <div className={TodoStyle.wrap}>
      <h2 className={TodoStyle.Add}>Edit Task</h2>
      <form className={TodoStyle.input} onSubmit={handle}>
        <div className={TodoStyle.groub}>
          <input
            className={TodoStyle["form-input"]}
            value={saveData}
            onChange={(e) => setData(e.target.value)}
            placeholder='Edit...'
            autoFocus='true'
          />
        </div>
        <button type='submit' className={TodoStyle.btn}>
          ✓
        </button>
      </form>
    </div>
  );
}
