import React from 'react'
import { useState, useEffect } from 'react';




export const Button1 = () => {
  const [buttonText, setButtonText] = useState("BUTTON");
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
