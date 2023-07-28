import React, { useState } from 'react'
import { Container } from 'reactstrap'

const Form = () => {

    const [inputlist, setInputlist] = useState([{ firstname: '', lastname: '' }]);


    const handleinputchange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputlist];
        list[index][name] = value;
        setInputlist(list);

    }

    const handleaddclick = () => {

        setInputlist([...inputlist, { firstname: '', lastname: '' }])
    }




    return (
        <div>
            <Container className="content">
                <div className='row'>
                    <div className='col-sm-12'>
                        <h4 className='mt-3 mb-4 fw-bold'>dynamiclly add and remove the feild of react js</h4>
                        {inputlist.map((x, i) => {
                            return (
                                <div className=' d-flex'>
                                    <div className=''>
                                        <label>First Name</label>
                                        <input type='text' name="firstname" placeholder='Enter your first name' onChange={e => handleinputchange(e, i)}></input>
                                    </div>
                                    <div className=''>
                                        <label>Last Name</label>
                                        <input type='text' name="lastname" placeholder='Enter your last name' onChange={e => handleinputchange(e, i)}></input>
                                        <div className='text-center'>
                                            <button className='btn btn-success' onClick={handleaddclick()}>Add more</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                        }

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Form