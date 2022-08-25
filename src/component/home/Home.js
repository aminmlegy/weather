import React from "react";
import Main from "../main/Main";
import Tasks from "../todo/Tasks";
export default function Home() {
  return (
    <>
      <Main arrr={["Todo App", "Weather App"]} />
      <Tasks Addd={"hide"} />
    </>
  );
}
