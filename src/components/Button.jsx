import React, { useState } from 'react'

function Button({changeState}) {
    const handleClick = (state) => {
        changeState(true)
    };
  return (
    <div>
        <button onClick={handleClick} className='text-lg font-bold text-yellow-600 px-4 py-1 '>
            SHOW MORE
        </button> 
    </div>
  )
}

export default Button