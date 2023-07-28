import React, { useState } from 'react'

const Hooks22 = () => {
    
    const colors=['red','blue','green','yellow'];
    const[color,setColor]=useState(0)

    const handleToggleColor = () =>{
        setColor((prevcolor)=>(prevcolor+1)%colors.length)
    }

    const currentcolor=colors[setColor];

  return (
    <div>
        <button onClick={currentcolor}>submit</button>
    </div>
  )
}

export default Hooks22