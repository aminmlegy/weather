import React, { useState, createContext, useEffect } from "react";
export let context = createContext();
export default function Provide({ children }) {
  let [data, setData] = useState(
    JSON.parse(localStorage.getItem("listLocal")) || []
  );
  let [getTask, settask] = useState(null);
  useEffect(
    () => localStorage.setItem("listLocal", JSON.stringify(data)),
    [data]
  );
  function removee(id) {
    let newTasks = data.filter((ele, index) => {
      return ele.id != id;
    });
    setData(newTasks);
  }
  function newTask(item) {
    setData([...data, item]);
  }
  function findTask(id) {
    let task = data.find((task) => task.id === id);
    settask(task);
  }
  function editTask(item) {
    let edit = data.map((task) => {
      return task.id === item.id ? item : task;
    });
    setData(edit);
    settask(null);
  }
  return (
    <context.Provider
      value={{ data, removee, newTask, findTask, getTask, editTask }}>
      {children}
    </context.Provider>
  );
}
