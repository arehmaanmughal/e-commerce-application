import React from "react";
import "./AboutHero.css";
import { Container } from "react-bootstrap";
const AboutHero = () => {
  return (
    <>
      <div className="about-hero">
        <Container className="d-flex align-items-center h-100">
          <div className="about-content">
            <p className="briefly-about-us">BRIEFLY ABOUT US</p>
            <p className="large-experience">Large experience in sales</p>
            <p className="about-overview">
              We have been working in the marketing sphere for more than 35
              years. During this time we successfully finished 10 000+ projects.
              Our company guarantee the quality that have been tested over the
              years.
            </p>
            <button className="btn-consultation rounded-pill border-0">Free Consultation</button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutHero;
