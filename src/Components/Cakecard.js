import React from 'react'
import { Card, CardText, CardBody, CardImg, CardTitle, Button, Row, Col } from 'reactstrap'
import './CakecardStyle.css';
import { cake11 } from './cakemap';

const Cakecard = () => {
    return (
        <>
            <div className=" p-2 ">
                <Row>
                    {cake11.map((item) => {
                        return (
                            <Col lg='3' md='4' sm='6' className=''>
                                <Card>
                                    <div className='text-center bg-black main-div rounded' style={{ color: '#fff' }}>
                                        <img src='https://images.pexels.com/photos/3992386/pexels-photo-3992386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                            width="50%"
                                            height="150vh"
                                            className='p-2 img11'
                                        />
                                        <div className='text11'>
                                            <h4>Cashew</h4>
                                            <p className='text22 p-2'>Get ready to go nuts over our cashew brownie!
                                                cashew brownie! Made with premium cashewsand
                                                t's a nutty delight you won't want to miss
                                                Get ready to go nuts over our cashew brownie</p>
                                        </div>
                                        <Button className='btn btn-outline-warning text-light mb-2'>Shop Now</Button>
                                        {/* <button className='mb-3 btn1'>Shop Now</button> */}
                                    </div>
                                </Card>
                            </Col>
                        )
                    })}

                </Row>
            </div>
        </>

    )
}

export default Cakecard