import React, { useState } from 'react'

const ToolTipA = () => {
    const [css, setCss] = useState('border-2 border-black max-w-fit p-2 absolute top-1/4 left-1/4 hidden');
    const handleMouseEnter= ()=>{
        // console.log("I am hovered")
        setCss('border-2 border-black max-w-fit p-2 absolute top-1/4 left-1/4 visible')
    }
    const handleMouseLeave = ()=>{
        setCss ('order-2 border-black max-w-fit p-2 absolute top-1/4 left-1/4 hidden')
    }
  return (
    <div className='h-screen w-screen bg-white '>
        <div className={css}>I am the fucking tooltip hover item</div>
        <div className='absolute top-1/3 left-1/3' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <h2 className='border-2 border-blue-500 p-2 hover:bg-blue-500 hover:text-white'>Hover me Fuckerssss</h2>
        </div>
    </div>
  )
}

export {ToolTipA};
