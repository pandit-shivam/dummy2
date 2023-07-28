import React, { useState } from 'react'

const HooksuseState1 = () => {

    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    const handleToggleColor = () => {
        setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };

    const currentColor = colors[currentColorIndex];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <div className='design border border-dark text-center p-4' style={{ backgroundColor: currentColor, width: '160px', height: '160px' }}>
                <h2 style={{ color: 'white' }}>Box Color: {currentColor}</h2>
                <button className="btn btn-outline-primary" onClick={handleToggleColor}>Toggle Color</button>
            </div>
        </div>
    );
}

export default HooksuseState1