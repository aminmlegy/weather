import React from "react";
import TodoStyle from "./todo.module.css";

export default function Task({ data, alldata }) {
  return (
    <li className={TodoStyle.item}>
      {data.title}
      <span className={TodoStyle.del} onClick={() => alldata.removee(data.id)}>
        ✗
      </span>
      <span
        className={TodoStyle.edit}
        onClick={() => alldata.findTask(data.id)}>
        ↷
      </span>
    </li>
  );
}
