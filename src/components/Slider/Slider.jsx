import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Slider.css";
const Slider = () => {
  return (
    <>
      <div className="slider my-3 rounded-3">
        <Row className="align-items-center">
          <Col xs={4} className="">
            <p className="slider-text ms-3">
              We Picked Every Item With Care,{" "}
              <span className="text-orange fw-bold">You Must Try</span> At least
              Once.
            </p>
            <button className="btn-collection ms-3 border-0 rounded-pill text-white">
              Go to Collection <span><FaArrowRightLong /></span>
            </button>
          </Col>
          <Col xs={8}>
            <img
              className="slider-img"
              src="src\assets\images\Rectangle 17.png"
            ></img>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Slider;
