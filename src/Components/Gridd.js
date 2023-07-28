import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './gridStyle.css'
import bg from './Assets/bg.jpg'
// import { Link } from 'react-router-dom'; 
import { Card, CardImg, CardBody, CardTitle, CardText, Button, CardSubtitle }
  from "reactstrap"
import { card00 } from './GriddMap';
// import {container} fromt 'reactstrap'


const Gridd = () => {
  return (
    <>

      <div>
        {/* <Card> */}
        <Row className='p-2'>
          {card00.map((item) => {
            return (
              <Col lg='3' md='4' sm='6' className='p-1'>
               <Card>
                {/* <div style={{ display: 'block', width: 450, padding: 10 }}> */}
                <CardImg width="50px" height="200px" src={item.src} />
                <CardBody>
                  <CardTitle tag="h5">{item.Cardtitle}</CardTitle>
                  <CardText>{item.cardtext1}</CardText>
                  <CardText>{item.cardtext2}</CardText>

                  <Button outline color='primary'>Action Button</Button>&nbsp;
                  <Button outline color='danger'>Action Button</Button>
                </CardBody>

                {/* </div> */}
                </Card>
              </Col>
            )
          })}
        </Row>
        {/* </Card> */}
      </div>


      {/* <div className='p-1'> */}
      {/* <Card> */}
      {/* <Row className='p-2'>
          {card00.map((item) => {
            return (
              <Col lg='3' md='4' sm='6' className='p-1'>
                <Card>

                  <img
                    alt="Sample"
                    src={item.src}
                  />
                  <CardBody style={{ textAlign: 'center' }}>
                    <CardTitle tag="h5">
                      {item.Cardtitle}
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      Card subtitle
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Button>
                      Button
                    </Button>
                  </CardBody>

                </Card>
              </Col>
            )
          })}
        </Row> */}
      {/* </Card> */}
      {/* </div> */}
    </>
  )
}

export default Gridd