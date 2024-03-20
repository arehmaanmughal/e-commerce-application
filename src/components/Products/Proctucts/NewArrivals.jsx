import React, { useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./NewArrivals.css";
import Slider from "react-slick";
const NewArrivals = () => {
  const [products, setProducts] = useState([
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      images: ["/watch.png", "/watch2.png", "/watch4.png"],
    },
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      images: ["/watch.png", "/watch2.png", "/watch4.png"],
    },
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      images: ["/watch.png", "/watch2.png", "/watch4.png"],
    },
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      images: ["/watch.png", "/watch2.png", "/watch4.png"],
    },
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      images: ["/watch.png", "/watch2.png", "/watch4.png"],
    },
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      images: ["/watch.png", "/watch2.png", "/watch4.png"],
    },
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      images: ["/watch.png", "/watch2.png", "/watch4.png"],
    },
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      images: ["/watch.png", "/watch2.png", "/watch4.png"],
    },
  ]);
  const sliderRefs = useRef([]);

  const next = (index) => {
    sliderRefs.current[index].slickNext();
  };

  const previous = (index) => {
    sliderRefs.current[index].slickPrev();
  };

  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    speed: 800,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <div className=" pt-3">
      <Row className="products-container gy-4">
        {products.map((product, index) => (
          <div key={index} className=" product-card">
            <div className="border rounded px-3">
              <Slider
                ref={(slider) => (sliderRefs.current[index] = slider)}
                {...settings}
              >
                {product.images.map((img, imgIndex) => (
                  <div
                    className="p-images d-flex justify-content-center"
                    key={imgIndex}
                  >
                    <>
                      <img className="p-image" src={img} />
                    </>
                  </div>
                ))}
              </Slider>
              <button
                className="btn-back border-0 p-0"
                onClick={() => previous(index)}
              >
                <IoIosArrowBack />
              </button>
              <button
                className="btn-forword border-0 p-0"
                onClick={() => next(index)}
              >
                <IoIosArrowForward />
              </button>
              <div className="d-flex justify-content-center">
                <span className="p-title">{product.title}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="p-series">{product.series}</span>
                <span className="p-price text-orange">${product.price}</span>
              </div>

              <div>
                <p className="p-description text-center">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default NewArrivals;
