import React, { useState } from 'react'
import './ButtonincreStyle.css';
const ButtonIncre = () => {


    const [count, setCount] = useState(0)

    const Increment = () => {
        if (count <= 0) {
            setCount(0); 
          } else {
            setCount(count - 1); 
          }

    };
    const Decrement = () => {
        setCount(count + 1);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <div className='d-flex justify-content-center mt-5'  >
                <div className='design border border-dark text-center p-4 bg-light.bg-gradient' style={{ width: "160%" }}>
                    <h2 style={{ color: 'red' }}>Count: {count}</h2>
                    <button className="rounded " class="btn btn-outline-success" onClick={Increment}>Increment</button>&nbsp;
                    <button className="rounded" class="btn btn-outline-primary" onClick={Decrement}>Decrement</button>
                </div>
            </div>
        </div>
    )
}

export default ButtonIncre