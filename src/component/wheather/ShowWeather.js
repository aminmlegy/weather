import React, { useContext } from "react";
import Styles from "./weather.module.css";
import { contextData } from "../../context/WeatherCont";

export default function ShowWeather() {
  let { data } = useContext(contextData);
  return (
    <>
      {data.cod === 200 ? (
        <div className={Styles.groub}>
          <div className={Styles.data}>
            <h4>{data.name}</h4>
          </div>
          <div className={Styles.cloud}>
            {data.weather[0].description}
            {" =>  "} {data.main.temp}
            <img
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt='weatherApp'
            />
          </div>
        </div>
      ) : (
        <div>{data.message}</div>
      )}
    </>
  );
}
