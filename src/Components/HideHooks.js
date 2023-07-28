import React, { useState } from 'react'
import { Button } from 'reactstrap'

const HideHooks = () => {

    //    const [isHidden , setIsHidden]=useState(false);

    //    const togglebutton = ()=>{
    //     setIsHidden(!isHidden)
    //    }
    //     return(
    //         <div>
    //             <button onClick={togglebutton}>
    //                 {isHidden ? 'show text' : 'hide text'}
    //             </button>
    //             {isHidden ? null: <p>this  is shivam pandey</p>}
    //         </div>
    //     )


    const [isHidden, setIsHidden] = useState(false)


    const istaggle = () => {

        setIsHidden(!isHidden)
    }

    return(
        <div>
            <Button onClick={istaggle}>{isHidden ? 'show text' : 'hide text'}</Button>
            {isHidden ? 'null':<p>this is shivam pandey</p>}
        </div>
    )
}


export default HideHooks