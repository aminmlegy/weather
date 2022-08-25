import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Header from "./component/header/Header";
import Tasks from "./component/todo/Tasks";
import ProvideTodo from "./context/TodoContext";
import WeatherProvider from "./context/WeatherCont";
import Weather from "./component/wheather/Weather";
function App() {
  return (
    <>
      <ProvideTodo>
        <WeatherProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='todo' element={<Tasks Addd={"show"} />} />
            <Route path='weather' element={<Weather />} />
          </Routes>
        </WeatherProvider>
      </ProvideTodo>
    </>
  );
}

export default App;
