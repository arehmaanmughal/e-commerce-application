import React from "react";
import "./OurTrustedParteners.css";
import { Container } from "react-bootstrap";
const OurTrustedParteners = () => {
  return (
    <div className="our-parteners-section">
      <Container>
        <div className="our-parteners-header">
          <p className="our-parteners-heading">Our Trusted Partners</p>
          <p className="our-parteners-overview">
            You offer a good product, make advertising, analyze the market but
            still have no improvement?
          </p>
        </div>
        <div>
          <img src="/About/image 29.png" className="our-parteners-img"></img>
        </div>
      </Container>
    </div>
  );
};

export default OurTrustedParteners;
