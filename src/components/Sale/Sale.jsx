import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Sale.css";
const Sale = () => {
  return (
    <div>
      <Row>
        <Col lg={8}>
          <Row className="gy-3">
            <Col className="">
              <div className="sale-macbooks rounded-3 ps-3">
                <h6 className="float-end sale-tag px-3 py-1 text-white">
                  20%Off
                </h6>
                <ul className="pt-3 px-0">
                  <li className="sale-up-to fw-bold"><span className="text-blue">Sale</span> up to</li>
                  <li className="sale-item fw-bold">All Macbooks</li>
                </ul>
                
      
                <img className="img-macbook" src="src\assets\images\image 3.png" alt="" />
              </div>
            </Col>
            <Col>
              <div className="sale-accesseries rounded-3  ps-3">
                <h6 className="float-end sale-tag px-3 py-1 text-white">
                  20%Off
                </h6>
                <ul className="pt-3 px-0">
                  <li className="sale-up-to fw-bold"><span className="text-blue">Sale</span> up to</li>
                  <li className="sale-item fw-bold">All Macbooks</li>
                </ul>
                <img className="img-accessery" src="src\assets\images\image accesery.png" alt="" />
              </div>
            </Col>
          </Row>
          <Row className="">
            <Col>
              <div className="smart-watch rounded-3 d-flex align-items-center mt-3 ps-3">
                <img className="img-watch" src="src\assets\images\Rectangle 24.png" alt="" />
                <div className="smart-watch-sale-details">
                  <ul>
                    <li className="fw-bold smart-watch-title">Find the best watch for you!</li>
                    <li className="text-blue smart fw-bold">Smart</li>
                    <li className="text-orange watches fw-bold">Watches</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="d-none d-lg-flex">
          <div className="side-banner rounded-3">
            <img
              className="img-side-banner"
              src="src\assets\images\Rectangle 23.png"
              alt=""
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Sale;
