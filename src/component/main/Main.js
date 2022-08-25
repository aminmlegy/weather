import React, { useState, useEffect } from "react";
import MainStyle from "./main.module.css";
export default function Main({ arrr }) {
  let [worrd, setWorrd] = useState("");
  let arr = arrr,
    countWord = 0,
    countLitter = 1;
  console.log("kmnvkdnv");
  function typee() {
    if (countLitter > arr[countWord].length) {
      countWord = countWord + 1;
      countLitter = 0;
      if (countWord === arr.length) {
        countWord = 0;
      }
    }
    let oneWord = arr[countWord];
    let sliceLitter = oneWord.slice(0, countLitter);
    setWorrd(sliceLitter);
    countLitter = countLitter + 1;
  }

  useEffect(() => {
    let clearInt = setInterval(() => {
      typee();
    }, 550);
    return () => clearInterval(clearInt);
  }, []);

  return (
    <>
      <div className={MainStyle.main}>
        <div className={MainStyle.container}>
          <h1 className={MainStyle.title}>React js :</h1>
          <p className={MainStyle.litters}>{worrd}</p>
        </div>
      </div>
    </>
  );
}
