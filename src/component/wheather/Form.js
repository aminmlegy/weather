import React, { useState, useContext } from "react";
import Styles from "./weather.module.css";
import { contextData } from "../../context/WeatherCont";
export default function FormWeather() {
  let [country, setCountry] = useState("london");
  let { changed } = useContext(contextData);
  function check(e) {
    e.preventDefault();
    changed(country);
  }
  return (
    <>
      <form className={Styles.form} onSubmit={check} autoComplete='false'>
        <input
          type='text'
          placeholder='country'
          name='country'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
    </>
  );
}
