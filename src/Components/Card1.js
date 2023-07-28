import React, { useState } from 'react'



function Counter(){
    const[count,setCount]=useState(0);

const Increment= () => {
    if (count<=0)
    setCount(0)
    else
    setCount(count-1)
};
const Decrement= () => {
    setCount(count+1);
};
  return (
    <div>
        <h2>count: {count}</h2>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </div>
  )
}
 
export default Counter

