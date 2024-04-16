import React from 'react'
import { useState, useEffect } from 'react';




const ButtonS = ({ textS = "Sagar" }) => {
  const [buttonText, setButtonText] = useState(textS);
  const [backgroundColor, setBackgroundColor] = useState("bg-sky-300 hover:bg-sky-500 active:bg-green-400 ");

  const changeButton = () => {
    setButtonText("DONE");
    setBackgroundColor("bg-green-400");
  }

  return (
    <>
      <button className={`${backgroundColor} py-4 rounded-full text-xs text-white tracking-[0.4em] drop-shadow-lg`} onClick={changeButton}>{buttonText}</button >
    </>
  );
}
const ButtonA = ({ textA = "Aniket" }) => {
  const [bgcolor, setbgcolor] = useState("bg-blue-800 hover:bg-blue-400")
  const [text, setText] = useState(textA)

  function changeStateBtn() {
    setbgcolor("bg-green-500");
    setText("Done");
  }
  return (
    <>
      <button className={`${bgcolor} py-3 px-2  drop-shadow-lg text-white tracking-widest`} onClick={changeStateBtn} >{text}</button>
    </>
  )
}

export { ButtonS, ButtonA };
