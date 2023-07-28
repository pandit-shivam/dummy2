import React from 'react'
import { textarea, Card } from 'reactstrap'

const Example33 = (props) => {
    console.log(props)
    return (
        <div className='p-3 d-flex justify-content-center'>
            <Card>
                <div className='p-3'>
                    <div className='p-3'>
                        <label htmlFor="Name">Name</label>
                        <input type="text" id="Name" name="Name" />
                    </div>
                    <div className='p-3'>
                        <label htmlFor="Email">Email</label>
                        <input type="Email" id="Email" name="Email" />
                    </div>
                    <div className='p-3'>
                        <label htmlFor="Email">pass.</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div className='p-3'>
                        
                        Text: <textarea placeholder="Enter your text here..." />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button>submit</button>
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default Example33
