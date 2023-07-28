import React from 'react'
import { Card, CardImg, CardTitle, Button, CardBody, CardText, Row,Col } from 'reactstrap'
import './marketStyle.css'
import Sociome_foto from '../Components/Assets/sociome_foto.png';
import { market1 } from './Marketcardmap';


const Marketcard = () => {
  return (
    <div >
      <Row>
      {market1.map((item) => {
        return(
          <Col lg='3' md='4' sm='6'>
        <Card>
        <CardImg
          width="200px"
          height="200px"
          src={item.src1}
          alt="GFG Logo" />
        <CardBody>
          <CardTitle tag="h5">{item.cardtitle}</CardTitle>
          <div className='d-flex gap-5 txt1'>
            <CardText tag="b" style={{ color: '#81c14b' }}>{item.cardtext1}</CardText>
            <CardText tag="b" style={{ color: '#81c14b' }}>{item.cardtext2}</CardText>
          </div>
          <CardText style={{color:"grey"}}>813 Howard Street Oswego Ny131...</CardText>
          
          <div className='d-flex justify-content-center gap-1 pt-1 flex-wrap'>
          <Button style={{backgroundColor:'#81c14b'}}>Action Button</Button>
          <Button style={{backgroundColor:'#000' }}>Action Button</Button>
          </div>
        </CardBody>
      </Card>
      </Col>
  )
})}
</Row>
    </div >
  )
}

export default Marketcard