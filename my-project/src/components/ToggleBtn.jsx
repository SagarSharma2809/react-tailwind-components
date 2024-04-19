import React, { useState } from 'react'

export const ToggleBtnA = () => {
  const [css, setCss] = useState ("w-8 h-8 rounded-full bg-orange-300 ml-1 my-auto")
  const [parentBg, setParentBg] = useState("bg-slate-200")
  const [state, setState] = useState(false)

  function handleClick (){
    if(state == false){
    setCss("w-8 h-8 rounded-full bg-slate-200 ml-1 my-auto translate-x-9 duration-500 ");
    setParentBg("bg-orange-400")}
    else{
      setParentBg("bg-slate-200");
      setCss("w-8 h-8 rounded-full bg-orange-300 ml-1 my-auto duration-500")
    }
    setState(!state)
  }
  return (
    <div className='bg-white h-screen w-screen flex justify-center justify-items-center '>
        
        {/* toggle btn  */}
        <div className={`w-20 h-10 rounded-full ${parentBg} border-2 border-orange-400 my-auto flex duration-500`}>
          {/* inner circle  */}
          <div className={css} onClick={handleClick}> 

          </div>
        </div>
    </div>
  )
}
