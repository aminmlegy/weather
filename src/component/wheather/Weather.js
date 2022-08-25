import React from "react";
import genrate from "./weather.module.css";
import FormWeather from "./Form";
import ShowWeather from "./ShowWeather";
export default function Weather() {
  return (
    <div className={genrate.contanier}>
      <FormWeather />
      <ShowWeather />
    </div>
  );
}
