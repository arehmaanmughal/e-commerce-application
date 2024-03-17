import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./NewArrivals.css";
const NewArrivals = () => {
  const [products, setProducts] = useState([
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      images: [
        "public/images/watch.png",

        
      ],
    },
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      images: [
        "public/images/watch.png",

        
      ],
    },
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      images: [
        "public/images/watch.png",
      ],
    },
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      images: [
        "public/images/watch.png",
      ],
    },
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      images: [
        "public/images/watch.png",
      ],
    },
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      images: [
        "public/images/watch.png",
      ],
    },
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
        images: [
          "public/images/watch.png",
        ],
      
    },
    {
      title: "watch",
      series: "Apple Series 8",
      price: 2438,
      description:
        "Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.",
      images: [
        "public/images/watch.png",
      ],
    },
  ]);

  return (
    <div className="pt-3">
      <Row className="products-container gy-4">
        {products.map((product, index) => (
          <div key={index} className=" product-card ">
            <div className="border rounded px-3">
              {product.images.map((img, index) => (
                <div
                  className="p-images d-flex justify-content-between align-items-center "
                  key={index}
                >
                  <button
                    className="btn-back border-0 bg-white p-0"
                    onClick={() => {console.log(index)}}
                  >
                    <IoIosArrowBack />
                  </button>
                  <img className="p-image" src={img} />
                  <button
                    className="btn-forword border-0 bg-white p-0"
                    onClick={() => {console.log(index)}}
                  >
                    <IoIosArrowForward />
                  </button>
                </div>
              ))}

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
