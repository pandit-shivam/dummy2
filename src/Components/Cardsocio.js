import React from 'react'
import { Card, CardImg, CardBody, CardTitle, Button, CardText, Row, Col, Imgsrc } from 'reactstrap'
import './CardsocioStyle.css'
import { Socio11 } from './Cardsociomap'



const Cardsocio = () => {

    return (
        // <div>
        <>
            <div className='p-1'>

                <Row className='p-2'>
                    {Socio11.map((item) => {
                        return (
                            <Col lg='3' md='4' sm='6' xs='12' className=''>

                                <Card>
                                    <div className="shadow-lg rounded p-2">
                                        <div className=''>
                                            <img
                                                src="https://images.pexels.com/photos/296084/pexels-photo-296084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                width='100%'
                                                className=''
                                            />
                                        </div>

                                        <div className="d-flex pt-1 gap-1">
                                            <img
                                                src="https://images.pexels.com/photos/296084/pexels-photo-296084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                width="50%"
                                            />
                                            <img
                                                src="https://images.pexels.com/photos/2748445/pexels-photo-2748445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                width="50%"
                                                className=''
                                            />
                                        </div>
                                        <div className='d-flex justify-content-center gap-2 pt-2'>
                                            <Button color="primary" outline>primary</Button>
                                            <Button color="danger" >danger</Button>
                                        </div>
                                    </div>


                                </Card>

                            </Col>
                        )
                    })}
                </Row>

            </div>
        </>
        // </div>
    )
}

export default Cardsocio