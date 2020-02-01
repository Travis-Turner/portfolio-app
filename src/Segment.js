import React from 'react'
import './App.css';
import Carousel from 'react-bootstrap/Carousel';

const Segment = (props) => {
  return (
    <div>
      <div className="SegmentContainer">
        <div className="HeaderText">{props.header}</div>
        <div className="TextContainer">{props.text[0]}</div>
        <div className="TextContainer">{props.text[1]}</div>
        <div className="TextContainer">{props.text[2]}</div>
        <div className="TextContainer">{props.text[3]}</div>
        <div className="CarouselFlexBox">
          <Carousel className="CarouselContainer">
          {
            props.images && 
            props.images.map(((num, i) => {
              return (
              <Carousel.Item className="CarouselItem">
                <img
                className="d-block w-100"
                src={"/images/" + num + ".PNG"}
                alt="First slide"
              />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              )
            }))
          }
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Segment;