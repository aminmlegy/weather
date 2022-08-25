import React, { createContext, useEffect, useState } from "react";
export let contextData = createContext();
export default function WeatherProvider({ children }) {
  let [name, setName] = useState("london");
  let [data, setData] = useState({});
  function changed(item) {
    setName(item);
  }
  useEffect(() => {
    const fire = async () => {
      const result = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a0c70c9e838a990a10b9a9c3752a2467`
      )
        .then((dataWeather) => dataWeather.json())
        .catch((err) => err);
      console.log(result);
      return setData(result);
    };
    fire();
  }, [name]);

  return (
    <>
      <contextData.Provider value={{ changed, data }}>
        {children}
      </contextData.Provider>
    </>
  );
}
