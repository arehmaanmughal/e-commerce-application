import React, { useState } from "react";
import "./Reviews.css";
import { Button, Col, Row } from "react-bootstrap";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";

const Reviews = () => {
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
  ]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="reviews-heading">Our Latest Reviews</h1>
      <Row className="gy-4">
        {users.map((user, index) => (
          <Col sm={12} md={6} className="" key={index}>
            <div className="user-review-section d-flex flex-column align-items-center px-5 py-3">
                <li className="user-image">
                    <img src={user.imageurl}></img>
                </li>
                <li className="user-name">{user.name}</li>
                <li className="user-review text-center">{user.review}</li>
                <li className="review-date">{user.date}</li>

            </div>
          </Col>
        ))}
      </Row>
      <div className="slide-btns d-flex justify-content-between">
        <Button className="btn-arrow-left p-0 fs-1 border-0"><BsArrowLeft /></Button>
        <Button className="btn-arrow-right p-0 fs-1 border-0"><BsArrowRight /></Button>
      </div>
    </div>

    
  );
};

export default Reviews;
