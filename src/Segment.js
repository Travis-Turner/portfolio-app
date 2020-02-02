import React from 'react'
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';



const Segment = (props) => {
  let displayImages = false;
  try {
    let lengthCheck = props.images.length;
    if (lengthCheck) {displayImages = true;}
  } catch {
    
  }
  return (
    
    <div>
      <div className="SegmentContainer">
        <div className="HeaderText">{props.header}</div>
        <div className="TextContainer"><p>{props.text[0]}</p></div>
        <div className="TextContainer">{props.text[1]}</div>
        <div className="TextContainer">{props.text[2]}</div>
        <div className="TextContainer">{props.text[3]}</div>
        <div className="TextContainer">{props.text[4]}</div>
        <div className="TextContainer">{props.text[5]}</div>
        <div className="TextContainer">{props.text[6]}</div>
        <div className="CarouselFlexBox">
        {
          displayImages && 
          <Carousel className="CarouselContainer">
          {
            props.images.map(((num, i) => {
              return (
              <Carousel.Item className="CarouselItem">
                <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/images/" + num + ".PNG"}
                alt="First slide"
              />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              )
            }))
          }
          </Carousel>
        }
        {
          props.designImages && 
          <Container>
            <Row className="row">
              <Col xs={6} md={4}>
                <Image className="DesignImage"  src={process.env.PUBLIC_URL + "/images/" + props.designImages[0] + '.png'} thumbnail />
              </Col>
              <Col xs={6} md={4}>
                <Image className="DesignImage" src={process.env.PUBLIC_URL + "/images/" + props.designImages[1] + '.PNG'} thumbnail />
              </Col>
              <Col xs={6} md={4}>
                <Image className="DesignImage" src={process.env.PUBLIC_URL + "/images/" + props.designImages[2] + '.PNG'} thumbnail />
              </Col>
            </Row>
            <Row className="row">
              <Col xs={6} md={4}>
                <Image fluid className="DesignImage" src={process.env.PUBLIC_URL + "/images/" + props.designImages[3] + '.PNG'} thumbnail />
              </Col>
              <Col xs={6} md={4}>
                <Image className="DesignImage" src={process.env.PUBLIC_URL + "/images/" + props.designImages[4] + '.PNG'} thumbnail />
              </Col>
              <Col xs={6} md={4}>
                <Image className="DesignImageLong" src={process.env.PUBLIC_URL + "/images/" + props.designImages[5] + '.PNG'} thumbnail />
              </Col>
            </Row>
          </Container>
        }
          
        </div>
      </div>
    </div>
  )
}

export default Segment;