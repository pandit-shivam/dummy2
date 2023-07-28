import React, { useState } from 'react'

const Hideshow = () => {
    const[hide,setHide]=useState()

    const istaggle = () => {
        setHide(!hide)
    }
  return (
    <div className='text-center'>
        <button onClick = {istaggle} > {hide ? 'Show' : 'hide'} </button>
        {hide ? '' :<p>this is shivam pandey</p>}
        {hide ? <p>this is golu pandey</p>:""}

    </div>
  )
}

export default Hideshow