import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Slider.css";
const Slider = () => {
  return (
    <>
      <div className="slider my-3 rounded-3">
        <Row className="align-items-center">
          <Col xs={4}  className="">
            <p className="slider-text ps-3">We Picked Every Item With Care, <span className="text-orange">You Must Try</span> At least Once.</p>
          </Col>
          <Col xs={8}>
            <img className="slider-img" src="src\assets\images\Rectangle 17.png"></img>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Slider;
