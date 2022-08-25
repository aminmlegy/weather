import React from "react";
import AddItem from "./AddItem";
import TodoStyle from "./todo.module.css";
import Task from "./Task";
import { context } from "../../context/TodoContext";
import EditItem from "./EditItem";
export default function Tasks({ Addd }) {
  let allData = React.useContext(context);
  return (
    <>
      {allData.getTask ? <EditItem /> : Addd === "show" && <AddItem />}
      <div className={TodoStyle.warrrb}>
        <ul className={TodoStyle.list}>
          {allData.data.length ? (
            allData.data.map((data, index) => {
              return <Task key={index} data={data} alldata={allData} />;
            })
          ) : (
            <li className={TodoStyle.item}>ther is No Tasks</li>
          )}
        </ul>
      </div>
    </>
  );
}
