import { getByPlaceholderText } from "@testing-library/react";
import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./header.module.css";
export default function Header() {
  function func({ isActive }) {
    return {
      fontWeight: isActive ? "bold" : "",
      borderBottom: isActive ? "1px solid black" : "",
    };
  }
  return (
    <div className='Wrapper'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#0099ff'
          fillOpacity='1'
          d='M0,224L34.3,192C68.6,160,137,96,206,112C274.3,128,343,224,411,224C480,224,549,128,617,112C685.7,96,754,160,823,160C891.4,160,960,96,1029,101.3C1097.1,107,1166,181,1234,213.3C1302.9,245,1371,235,1406,229.3L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z'></path>
      </svg>
      <header>
        <div className={Styles.wrap}>
          <div className={Styles.logo}>logo</div>
          <div className={Styles.nav}>
            <ul>
              <li>
                <NavLink style={func} to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink style={func} to={"/todo"}>
                  Todo App
                </NavLink>
              </li>
              <li>
                <NavLink style={func} to={"/weather"}>
                  Weather App
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
