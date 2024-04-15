import React from 'react'
import { useState, useEffect } from 'react';




const ButtonGroup1 = () => {
  const [buttonText, setButtonText] = useState("Sagar");
  const [backgroundColor, setBackgroundColor] = useState("bg-sky-300 hover:bg-sky-500 active:bg-green-400 ");

  const changeButton = () => {
    setButtonText("DONE");
    setBackgroundColor("bg-green-400");
  }

  return (
    <>
      <button className={`${backgroundColor} py-4 w-1/6 rounded-full text-xs text-white tracking-[0.4em] drop-shadow-lg`} onClick={changeButton}>{buttonText}</button >
    </>
  );
}
const ButtonGrp1 = () =>{
  const [bgcolor, setbgcolor] = useState("bg-blue-800 hover:bg-blue-400")
  const [text, setText] = useState("Aniket")

  function changeStateBtn (){
    setbgcolor("bg-green-500");
    setText("Done");
  }
  return (
    <>
      <button className={`${bgcolor} w-1/6 py-4 rounded-lg text-white tracking-widest`} onClick={changeStateBtn} >{text}</button>
    </>
  )
}

export {ButtonGroup1, ButtonGrp1};
