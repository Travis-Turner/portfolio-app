import React from 'react'
import './App.css';

const Segment = (props) => {
  return (
    <div>
      <div className="SegmentContainer">
        <div className="HeaderText">{props.header}</div>
        <div className="TextContainer">{props.text[0]}</div>
        <div className="TextContainer">{props.text[1]}</div>
        <div className="TextContainer">{props.text[2]}</div>
        <div className="TextContainer">{props.text[3]}</div>
      </div>
    </div>
  )
}

export default Segment;