import React from 'react'
import bg from './Assets/bg.jpg'
import pop1 from './Assets/pop1.jpg'
import { Card, CardBody } from 'reactstrap'
import './Card22Style.css';
import { Pract } from './Dummy';
import Navbar22 from './Navbar22';

const Card22 = () => {
    
    return (
        
        <div className='d-flex justify-content-center p-1 '>
           {Pract.map((item)=>{
            return(
                <Card className='' style={{ width: '22rem' }} >
                <div class="card">
                    <img src={item.src} class="card-img-top h-40" alt="..." />
                    <div className='icon-iamge'>
                        <img src={pop1} height="90px" className='rounded-circle img22'/>
                    </div>
                    <CardBody className='border1'>
                        <div class="card-body">
                            <h5 class="card-title">{item.h5}</h5>
                            <p class="card-text">{item.p}</p>
                            <div className='d-flex justify-content-center p-1'>
                            <a href="#" class="btn btn-primary ">Click</a>&nbsp;
                            <a href="#" class="btn btn-danger">Allow</a>
                            </div>
                        </div>
                    </CardBody>
                </div>
            </Card>
            )
           })}
        </div>
    )
}

export default Card22