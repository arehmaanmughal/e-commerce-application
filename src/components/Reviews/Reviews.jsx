import React, { useState } from "react";
import "./Reviews.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSyncExternalStore } from "react";

const Reviews = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const [forwardClicked, setForwardClicked] = useState(false);
  const [backwardClicked, setBackwardClicked] = useState(false);
  const [users, setUser] = useState([
    {
      name: "Anna Merry",
      review:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
      imageurl: "./Ellipse 3.png",
      date: "23rd Oct, 2023",
    },
    {
      name: "Anna Merry",
      review:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
      imageurl: "./Ellipse 4.png",
      date: "24th Oct, 2023",
    },
    {
      name: "Anna Merry",
      review:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
      imageurl: "./Ellipse 3.png",
      date: "23rd Oct, 2023",
    },
    {
      name: "Anna Merry",
      review:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
      imageurl: "./Ellipse 4.png",
      date: "24th Oct, 2023",
    },
  ]);

  var settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    speed: 800,
    pauseOnHover: true,
    
    responsive: [
      
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const goNext = () => {
    setForwardClicked(true);
    setBackwardClicked(false);
    sliderRef.slickNext();
    console.log(forwardClicked);
    console.log(sliderRef);
  };
  const goPrev = () => {
    setForwardClicked(false);
    setBackwardClicked(true);
    sliderRef.slickPrev();
    console.log(backwardClicked);
  };
  return (
    <div className="pb-3 review-section">
      <p className="reviews-heading text-center">Our Latest Reviews</p>
      <div className="slider-container">
        <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
          {users.map((user, index) => (
            <div
              className="d-flex flex-column align-items-center"
              key={index}
            >
              <div>
                <img src={user.imageurl}></img>
              </div>
              <p className="user-name">{user.name}</p>
              <p className="user-review text-center">{user.review}</p>
              <p className="review-date">{user.date}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className=" d-flex justify-content-center">
        <Button
          className={`btn-arrow-left px-1 border-0  backward ${
            backwardClicked ? "clicked" : ""
          }`}
          onClick={goPrev}
        >
          <BsArrowLeft />
        </Button>
        <Button
          className={`btn-arrow-right px-1 forward p-0 ${
            forwardClicked ? "clicked" : ""
          }`}
          onClick={goNext}
        >
          <BsArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Reviews;
